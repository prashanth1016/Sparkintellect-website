"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Lightbulb, Shield, TrendingUp, Lock, Award } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { coreValues } from "@/lib/site-config";

const iconMap = {
  Code2,
  Lightbulb,
  Shield,
  TrendingUp,
  Lock,
  Award,
};

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background-soft">
      <div className="container-custom">
        <SectionHeader
          eyebrow="About Company"
          title="Building Tomorrow's Technology, Today"
          description="SparkIntellect is an enterprise technology company dedicated to delivering AI-powered solutions, custom software, and digital transformation services that drive measurable business outcomes."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium-lg">
              <Image
                src="/images/about-workspace.jpg"
                alt="SparkIntellect engineering team workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-white p-6 shadow-premium-lg md:block">
              <div className="text-3xl font-bold text-electric">50+</div>
              <div className="text-sm text-muted">Projects Delivered</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-navy">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-muted">
                To empower businesses with intelligent technology solutions that accelerate growth,
                optimize operations, and create sustainable competitive advantages in the digital economy.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-muted">
                To be the most trusted enterprise technology partner, recognized globally for engineering
                excellence, AI innovation, and transformative digital solutions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy">Core Values</h3>
              <p className="mt-3 leading-relaxed text-muted">
                Our work is guided by unwavering commitment to engineering excellence, innovation,
                integrity, scalability, security, and quality in everything we deliver.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {coreValues.map((value, i) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap] as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover rounded-2xl border border-border bg-white p-6 shadow-premium"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-electric/10 text-electric">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <h4 className="text-lg font-semibold text-navy">{value.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
