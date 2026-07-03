import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "SparkIntellect privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <article className="section-padding bg-white pt-28 md:pt-32">
      <div className="container-custom mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-navy">Privacy Policy</h1>
        <p className="mt-4 text-muted">Last updated: July 2026</p>

        <div className="prose prose-slate mt-10 max-w-none space-y-6 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-navy">Introduction</h2>
            <p className="mt-3 leading-relaxed">
              {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website
              or engage with our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Information We Collect</h2>
            <p className="mt-3 leading-relaxed">
              We may collect personal information that you voluntarily provide when contacting us, applying for internships,
              or requesting our services. This may include your name, email address, phone number, company name, and other
              relevant business information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">How We Use Your Information</h2>
            <p className="mt-3 leading-relaxed">
              We use collected information to respond to inquiries, provide our services, improve our website,
              communicate with you about projects, and comply with legal obligations. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Data Security</h2>
            <p className="mt-3 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Contact Us</h2>
            <p className="mt-3 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-electric hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-sm font-medium text-electric hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </article>
  );
}
