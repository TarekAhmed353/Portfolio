"use client";

import { useState } from "react";
import { LuCheck, LuCopy } from "react-icons/lu";

export default function CopyButton({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      title={copied ? "Copied!" : `Copy ${label}`}
      className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-primary hover:text-primary"
    >
      {copied ? (
        <LuCheck className="size-4 text-emerald-500" />
      ) : (
        <LuCopy className="size-4" />
      )}
    </button>
  );
}
