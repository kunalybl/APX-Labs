#!/usr/bin/env python3
"""Subtle 'APX LABS' watermark for proof imagery. Idempotent: watermarks from a
one-time .orig/ backup so re-running never double-stamps."""
import json
import os
import shutil
import sys
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
WORDMARK = "APX LABS"
MAXW = 1600  # cap long edge for any newly imported source

def load_font(size):
    return ImageFont.truetype(FONT, size)

def stamp(img: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    w, h = img.size
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)

    size = max(15, w // 46)
    font = load_font(size)
    # letter-spaced wordmark
    tracking = max(1, size // 10)
    text = (" " * 0).join(WORDMARK)
    # measure with tracking
    widths = [d.textlength(c, font=font) for c in WORDMARK]
    total = sum(widths) + tracking * (len(WORDMARK) - 1)
    ascent, descent = font.getmetrics()
    th = ascent + descent

    margin = max(14, w // 60)
    x = w - total - margin
    y = h - th - margin

    def draw_tracked(px, py, fill):
        cx = px
        for i, c in enumerate(WORDMARK):
            d.text((cx, py), c, font=font, fill=fill)
            cx += widths[i] + tracking

    # subtle dark halo (reads on light UIs too), then light wordmark
    for dx, dy in [(-1, -1), (1, -1), (-1, 1), (1, 1), (0, 1), (1, 0)]:
        draw_tracked(x + dx, y + dy, (0, 0, 0, 70))
    draw_tracked(x, y, (255, 255, 255, 165))

    return Image.alpha_composite(img, layer).convert("RGB")

def process_dir(sub):
    d = os.path.join(ROOT, "public", sub)
    # Pristine backups live OUTSIDE public/ so they are never deployed/served.
    orig = os.path.join(ROOT, ".image-src", sub)
    os.makedirs(orig, exist_ok=True)
    files = [f for f in os.listdir(d) if f.lower().endswith((".webp", ".png", ".jpg", ".jpeg")) and not f.startswith(".")]
    for f in sorted(files):
        src = os.path.join(d, f)
        bak = os.path.join(orig, f)
        if not os.path.exists(bak):
            shutil.copy2(src, bak)  # preserve pristine copy once
        im = Image.open(bak)
        out = stamp(im)
        out.save(src, "WEBP", quality=82, method=6)
    print(f"{sub}: watermarked {len(files)} images")

def import_pngs(pairs, sub, start_index, manifest_path):
    """Resize+webp+watermark external PNGs into a gallery dir; update manifest."""
    d = os.path.join(ROOT, "public", sub)
    with open(manifest_path) as fh:
        manifest = json.load(fh)
    i = start_index
    added = []
    for src_path in pairs:
        im = Image.open(src_path).convert("RGB")
        if max(im.size) > MAXW:
            r = MAXW / max(im.size)
            im = im.resize((round(im.width * r), round(im.height * r)), Image.LANCZOS)
        stamped = stamp(im)
        name = f"shot-{i:02d}.webp"
        stamped.save(os.path.join(d, name), "WEBP", quality=82, method=6)
        # pristine (unstamped) backup outside public/
        obak = os.path.join(ROOT, ".image-src", sub)
        os.makedirs(obak, exist_ok=True)
        im.save(os.path.join(obak, name), "WEBP", quality=82, method=6)
        manifest[name] = {"w": stamped.width, "h": stamped.height}
        added.append(name)
        i += 1
    with open(manifest_path, "w") as fh:
        json.dump(manifest, fh, indent=0)
    print(f"imported {added} into {sub}")

if __name__ == "__main__":
    mode = sys.argv[1] if len(sys.argv) > 1 else "all"
    if mode in ("all", "proof"):
        process_dir("proof")
    if mode in ("all", "screenshots"):
        process_dir("screenshots")
    if mode == "import-instantly":
        logos = os.path.join(ROOT, "public", "logos")
        pngs = [os.path.join(logos, "instantly 1.png"), os.path.join(logos, "instantly 2.png")]
        import_pngs(pngs, "screenshots", 21, os.path.join(ROOT, "public", "screenshots", "manifest.json"))
