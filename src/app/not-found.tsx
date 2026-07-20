import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid" />
      <Container className="flex flex-col items-center text-center">
        <span className="font-mono text-sm text-fg-subtle">404</span>
        <h1 className="mt-4 text-display-lg text-fg">This page took a detour.</h1>
        <p className="mt-4 max-w-md text-lg text-fg-muted">
          The page you&apos;re looking for doesn&apos;t exist — but your pipeline still can.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/">Back home</Button>
          <Button href="/contact" variant="outline">
            Book a strategy call
          </Button>
        </div>
      </Container>
    </section>
  );
}
