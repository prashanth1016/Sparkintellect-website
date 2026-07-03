"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const contactCards = [
  {
    icon: Phone,
    title: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    description: "Call us during business hours",
  },
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "We respond within 24 hours",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: siteConfig.businessHours,
    description: "Available for consultations",
  },
  {
    icon: MapPin,
    title: "Location",
    value: siteConfig.location,
    description: "Serving clients globally",
  },
];

export function ContactClient() {
  return (
    <>
      <section className="relative flex min-h-[40vh] items-center overflow-hidden bg-navy pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/contact-reception.jpg"
            alt="SparkIntellect corporate reception"
            fill
            className="object-cover opacity-25"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy" />
        </div>
        <div className="container-custom relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h1 className="text-4xl font-bold text-white md:text-5xl">Contact Us</h1>
            <p className="mt-4 text-base text-silver/80 md:text-lg">
              Ready to discuss your next project? Our team is here to help you transform your business with intelligent technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background-soft">
        <div className="container-custom">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-hover rounded-2xl border border-border bg-white p-6 shadow-premium"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-electric/10 text-electric">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">{card.title}</h3>
                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-2 block text-lg font-semibold text-navy transition-colors hover:text-electric"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-semibold text-navy">{card.value}</p>
                )}
                <p className="mt-1 text-sm text-muted">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white pb-24 md:pb-16">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy md:text-4xl">Let&apos;s Build Something Great</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Whether you need AI automation, custom software, or a complete digital transformation strategy,
                our engineering team is ready to deliver enterprise-grade solutions tailored to your business.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href={`mailto:${siteConfig.email}`}>
                    <Mail className="h-4 w-4" />
                    Send Email
                  </a>
                </Button>
              </div>
              <div className="mt-6">
                <Button variant="outline" asChild>
                  <Link href="/internship" className="group">
                    Explore Internship Program
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-premium-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background-muted to-background-soft">
                <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                  <MapPin className="mb-4 h-12 w-12 text-electric" />
                  <h3 className="text-xl font-bold text-navy">Chennai, India</h3>
                  <p className="mt-2 text-sm text-muted">
                    SparkIntellect operates from Chennai, serving enterprise clients across India and globally through remote collaboration.
                  </p>
                  <div className="mt-6 w-full rounded-xl border border-border bg-white p-4">
                    <div className="aspect-[16/9] rounded-lg bg-gradient-to-br from-electric/10 via-background-muted to-royal/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-muted">Interactive Map — Chennai, Tamil Nadu</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
