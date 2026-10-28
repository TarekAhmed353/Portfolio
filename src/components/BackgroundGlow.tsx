// Decorative backdrop: a dot grid that fades out towards the edges, plus one
// indigo and one sky glow. Place it inside a `relative isolate` container.
export default function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="absolute -top-32 -left-32 size-[28rem] rounded-full bg-glow-primary blur-3xl" />
      <div className="absolute top-1/3 -right-32 size-[26rem] rounded-full bg-glow-secondary blur-3xl" />
    </div>
  );
}
