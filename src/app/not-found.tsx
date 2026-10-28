import Link from "next/link";
import { LuArrowLeft, LuFolderOpen } from "react-icons/lu";
import BackgroundGlow from "@/components/BackgroundGlow";

export default function NotFound() {
  return (
    <main className="relative isolate flex flex-1 items-center justify-center px-4 pt-24 pb-16 sm:px-6">
      <BackgroundGlow />
      <div className="max-w-lg text-center">
        <p className="text-gradient text-8xl font-extrabold tracking-tight sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold sm:text-3xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-3 text-muted">
          The link might be broken, or the page may have moved. Here are a
          couple of places to go instead.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-hover"
          >
            <LuArrowLeft className="size-5" />
            Back home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-secondary hover:text-secondary"
          >
            <LuFolderOpen className="size-5" />
            View projects
          </Link>
        </div>
      </div>
    </main>
  );
}
