import { FaWhatsapp } from "react-icons/fa6";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import ContactForm from "@/components/ContactForm";
import CopyButton from "@/components/ui/CopyButton";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

const methods = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: LuMail,
    copy: site.email,
  },
  {
    label: "Phone",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
    icon: LuPhone,
    copy: site.phone,
  },
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: site.whatsappUrl,
    icon: FaWhatsapp,
    copy: site.phone,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-surface-muted/50 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have an internship, a project or a research idea in mind? Reach out through any of these, or drop a message below."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-4">
            {methods.map(({ label, value, href, icon: Icon, copy }, i) => (
              <Reveal key={label} delay={i * 0.1}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm transition hover:border-primary/50">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary to-secondary text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-muted">{label}</p>
                    <a
                      href={href}
                      target={label === "WhatsApp" ? "_blank" : undefined}
                      rel={label === "WhatsApp" ? "noopener noreferrer" : undefined}
                      className="block truncate font-semibold transition-colors hover:text-primary"
                    >
                      {value}
                    </a>
                  </div>
                  <CopyButton value={copy} label={label.toLowerCase()} />
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <p className="flex items-center gap-2 px-1 pt-2 text-sm text-muted">
                <LuMapPin className="size-4 text-secondary" />
                Based in {site.location}. I usually reply within a day.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
