"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Workflow, Users, LayoutDashboard, Settings, GraduationCap, Globe, Monitor, Lock, ShoppingCart, BarChart3, GitBranch } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { projectCategories } from "@/lib/site-config";

const iconMap = {
  Brain,
  Workflow,
  Users,
  LayoutDashboard,
  Settings,
  GraduationCap,
  Globe,
  Monitor,
  Lock,
  ShoppingCart,
  BarChart3,
  GitBranch,
};

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-background-soft">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Our Portfolio"
          title="Delivering Excellence Across Domains"
          description="We have successfully delivered projects across diverse categories, helping businesses transform their digital capabilities."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-12 aspect-[21/9] overflow-hidden rounded-2xl shadow-premium-lg"
        >
          <Image
            src="/images/projects-portfolio.jpg"
            alt="SparkIntellect project portfolio showcase"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />
          <div className="absolute inset-0 flex items-center p-8 md:p-12">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold text-white md:text-3xl">Enterprise-Grade Deliverables</h3>
              <p className="mt-3 text-sm leading-relaxed text-silver/90 md:text-base">
                From AI applications to enterprise dashboards, our portfolio spans the full spectrum of modern business technology.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {projectCategories.map((category, i) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-premium"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity group-hover:opacity-5`}
                />
                <div className="relative flex items-center gap-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-white`}>
                    {Icon && <Icon className="h-4 w-4" />}
                  </div>
                  <h3 className="text-sm font-semibold text-navy">{category.name}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
