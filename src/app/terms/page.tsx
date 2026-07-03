import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "SparkIntellect terms of service. Read the terms governing use of our website and services.",
};

export default function TermsPage() {
  return (
    <article className="section-padding bg-white pt-28 md:pt-32">
      <div className="container-custom mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold text-navy">Terms of Service</h1>
        <p className="mt-4 text-muted">Last updated: July 2026</p>

        <div className="prose prose-slate mt-10 max-w-none space-y-6 text-muted">
          <section>
            <h2 className="text-xl font-semibold text-navy">Agreement to Terms</h2>
            <p className="mt-3 leading-relaxed">
              By accessing or using the {siteConfig.name} website and services, you agree to be bound by these Terms of Service.
              If you do not agree with any part of these terms, you may not access our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Services</h2>
            <p className="mt-3 leading-relaxed">
              {siteConfig.name} provides enterprise technology services including AI solutions, custom software development,
              digital transformation, and related consulting services. Specific service terms are defined in individual client agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Intellectual Property</h2>
            <p className="mt-3 leading-relaxed">
              All content on this website, including text, graphics, logos, and software, is the property of {siteConfig.name}
              and is protected by applicable intellectual property laws. Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Limitation of Liability</h2>
            <p className="mt-3 leading-relaxed">
              {siteConfig.name} shall not be liable for any indirect, incidental, special, or consequential damages arising
              from your use of our website or services, except as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-navy">Contact</h2>
            <p className="mt-3 leading-relaxed">
              For questions regarding these Terms of Service, contact us at{" "}
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
