import Link from "next/link";
import { LuArrowUp } from "react-icons/lu";
import CurrentYear from "@/components/CurrentYear";
import { navLinks, site, socialLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/#home" className="text-2xl font-extrabold tracking-tight">
              {site.name.split(" ")[0]}
              <span className="text-gradient">.</span>
            </Link>
            <p className="mt-3 text-sm text-muted">
              {site.designation} from {site.location}, building things people
              can actually use.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row">
          <p>
            © <CurrentYear /> {site.name}. Built with Next.js and Tailwind CSS.
          </p>
          <Link
            href="/#home"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-medium transition-colors hover:border-primary hover:text-primary"
          >
            <LuArrowUp className="size-4" />
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
