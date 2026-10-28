import { LuLock } from "react-icons/lu";

// Wraps a screenshot in a small browser window: traffic-light dots and an
// address bar showing the site's real domain.
export default function BrowserFrame({
  url,
  children,
  className = "",
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  const host = new URL(url).host;

  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-surface shadow-lg shadow-primary/10 ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-border bg-surface-muted px-3 py-2">
        <div aria-hidden className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md bg-background px-3 py-1 font-mono text-[11px] text-muted">
          <LuLock aria-hidden className="size-3 shrink-0" />
          <span className="truncate">{host}</span>
        </p>
        <span aria-hidden className="hidden w-12 shrink-0 sm:block" />
      </div>
      {children}
    </div>
  );
}
