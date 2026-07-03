"use client";

import { motion } from "framer-motion";
import { Brain, Users, Layers, BarChart3, Cloud, Layout, Sparkles, Headphones } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { whyReasons } from "@/lib/site-config";

const iconMap = {
  Brain,
  Users,
  Layers,
  BarChart3,
  Cloud,
  Layout,
  Sparkles,
  Headphones,
};

export function WhySection() {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Why SparkIntellect"
          title="Your Trusted Enterprise Technology Partner"
          description="We combine deep engineering expertise with AI innovation to deliver solutions that scale with your ambitions."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyReasons.map((reason, i) => {
            const Icon = iconMap[reason.icon as keyof typeof iconMap] as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background-soft p-6 shadow-premium transition-shadow hover:shadow-premium-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-electric text-white shadow-glow transition-transform group-hover:scale-110">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="text-base font-semibold text-navy">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{reason.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
