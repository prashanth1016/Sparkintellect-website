import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Github, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const footerLinks = {
  company: [
    { label: "About", href: "/#about" },
    { label: "Why Us", href: "/#why-us" },
    { label: "Process", href: "/#process" },
    { label: "Testimonials", href: "/#testimonials" },
  ],
  services: [
    { label: "AI Automation", href: "/#services" },
    { label: "Custom Software", href: "/#services" },
    { label: "Cloud Solutions", href: "/#services" },
    { label: "Digital Transformation", href: "/#services" },
  ],
  resources: [
    { label: "Internship", href: "/internship" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="container-custom section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric">
                <Image src="/images/logo.png" alt="logo" width={40} height={40} className="object-contain" />
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-silver/80">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-2.5">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm text-silver/80 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-electric-light" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-sm text-silver/80 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-electric-light" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-2.5 text-sm text-silver/80">
                <MapPin className="h-4 w-4 text-electric-light" />
                {siteConfig.location}
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-silver/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-silver/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Resources</h3>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-silver/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-silver/60">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-silver/70 transition-all hover:border-electric/40 hover:bg-electric/10 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
