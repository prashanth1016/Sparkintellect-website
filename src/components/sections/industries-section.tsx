"use client";

import { motion } from "framer-motion";
import { HeartPulse, GraduationCap, ShoppingBag, Factory, Landmark, Hotel, Home, Rocket, Store, Building } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { industries } from "@/lib/site-config";

const iconMap = {
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Factory,
  Landmark,
  Hotel,
  Home,
  Rocket,
  Store,
  Building,
};

export function IndustriesSection() {
  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Industries"
          title="Serving Diverse Business Sectors"
          description="We deliver tailored technology solutions across industries, understanding unique challenges and regulatory requirements."
        />

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap] as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-background-soft p-5 text-center shadow-premium transition-shadow hover:shadow-premium-lg"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-electric shadow-premium transition-colors group-hover:bg-electric group-hover:text-white">
                  {Icon && <Icon className="h-5 w-5" />}
                </div>
                <h3 className="text-sm font-semibold text-navy">{industry.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">{industry.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
