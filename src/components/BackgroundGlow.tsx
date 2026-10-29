// Decorative backdrop: a dot grid that fades out towards the edges, plus one
// indigo and one sky glow. Place it inside a `relative isolate` container.
// The glows are radial gradients rather than blurred circles: they look the
// same, but a blur filter this large is slow to repaint on every theme switch.
export default function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="absolute -top-48 -left-48 size-[36rem] bg-[radial-gradient(closest-side,var(--glow-primary)_45%,transparent)]" />
      <div className="absolute top-[calc(33.333%-4rem)] -right-48 size-[34rem] bg-[radial-gradient(closest-side,var(--glow-secondary)_45%,transparent)]" />
    </div>
  );
}
