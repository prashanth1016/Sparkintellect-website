"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bot, Workflow, Code2, Globe, Building2, Users, Database, Brain, GitBranch, Cloud, RefreshCw, BarChart3, Plug, MessageSquare, Briefcase, Palette, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { services } from "@/lib/site-config";

const iconMap = {
  Bot,
  Workflow,
  Code2,
  Globe,
  Building2,
  Users,
  Database,
  Brain,
  GitBranch,
  Cloud,
  RefreshCw,
  BarChart3,
  Plug,
  MessageSquare,
  Briefcase,
  Palette,
  Wrench,
};

const featuredImages: Record<string, string> = {
  "AI Automation": "/images/services/ai-automation.jpg",
  "Custom Software Development": "/images/services/software-development.jpg",
  "CRM Solutions": "/images/services/crm-solutions.jpg",
  "Digital Transformation": "/images/services/digital-transformation.jpg",
  "Cloud Solutions": "/images/services/cloud-solutions.jpg",
  "Business Automation": "/images/services/business-automation.png",
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background-muted">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Our Services"
          title="Comprehensive Enterprise Solutions"
          description="From AI automation to custom software development, we deliver end-to-end technology services tailored to your business needs."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] as React.ComponentType<{ className?: string }>;
            const hasImage = featuredImages[service.title];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                className="group card-hover overflow-hidden rounded-2xl border border-border bg-white shadow-premium"
              >
                {hasImage ? (
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={hasImage}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-electric backdrop-blur-sm">
                      {Icon && <Icon className="h-4 w-4" />}
                    </div>
                  </div>
                ) : (
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-background-soft to-background-muted">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-electric text-white shadow-glow transition-transform group-hover:scale-110">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-base font-semibold text-navy">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
