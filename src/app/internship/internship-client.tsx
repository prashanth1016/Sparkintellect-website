"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Globe, Layers, Code2, Monitor, Server, Cloud, Palette, Workflow, BookOpen, Users, FolderKanban, Award, ClipboardCheck, TrendingUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap = {
  Brain,
  Globe,
  Layers,
  Code2,
  Monitor,
  Server,
  Cloud,
  Palette,
  Workflow,
  BookOpen,
  Users,
  FolderKanban,
  Award,
  ClipboardCheck,
  TrendingUp,
};
import { SectionHeader } from "@/components/shared/section-header";
import {
  internshipDomains,
  internshipBenefits,
  getWhatsAppUrl,
} from "@/lib/site-config";

export function InternshipClient() {
  const [formData, setFormData] = useState({
    name: "",
    college: "",
    department: "",
    year: "",
    domain: "",
    skills: "",
    email: "",
    phone: "",
    resume: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const whatsappUrl = getWhatsAppUrl(formData);

  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-navy pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/internship-lab.jpg"
            alt="SparkIntellect internship program"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        </div>
        <div className="container-custom relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-electric/30 bg-electric/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-electric-light">
              Career Opportunities
            </span>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Internship Program
            </h1>
            <p className="mt-5 text-base leading-relaxed text-silver/80 md:text-lg">
              Launch your career with hands-on experience on live projects, expert mentorship,
              and real-world engineering challenges at SparkIntellect.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background-soft">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Domains"
            title="Choose Your Path"
            description="Explore diverse internship domains and find the area that aligns with your passion and career goals."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {internshipDomains.map((domain, i) => {
              const Icon = iconMap[domain.icon as keyof typeof iconMap] as React.ComponentType<{
                className?: string;
              }>;
              return (
                <motion.div
                  key={domain.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="card-hover rounded-2xl border border-border bg-white p-6 shadow-premium"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-electric/10 text-electric">
                    {Icon && <Icon className="h-5 w-5" />}
                  </div>
                  <h3 className="font-semibold text-navy">{domain.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{domain.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Benefits"
            title="What You Will Gain"
            description="Our internship program is designed to accelerate your professional growth with structured learning and real project experience."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {internshipBenefits.map((benefit, i) => {
              const Icon = iconMap[benefit.icon as keyof typeof iconMap] as React.ComponentType<{
                className?: string;
              }>;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4 rounded-2xl border border-border bg-background-soft p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-electric text-white">
                    {Icon && <Icon className="h-4 w-4" />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-muted">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background-muted pb-24 md:pb-16">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Apply Now"
            title="Start Your Application"
            description="Fill in your details below and apply directly via WhatsApp with a pre-filled message."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl rounded-2xl border border-border bg-white p-6 shadow-premium-lg md:p-8"
          >
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
                  { id: "college", label: "College", type: "text", placeholder: "Your college name" },
                  { id: "department", label: "Department", type: "text", placeholder: "e.g. Computer Science" },
                  { id: "year", label: "Year", type: "text", placeholder: "e.g. 3rd Year" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  { id: "phone", label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { id: "resume", label: "Resume Link", type: "url", placeholder: "Google Drive / LinkedIn link" },
                ].map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="mb-1.5 block text-sm font-medium text-navy">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background-soft px-4 py-2.5 text-sm outline-none transition-colors focus:border-electric focus:ring-2 focus:ring-electric/20"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="domain" className="mb-1.5 block text-sm font-medium text-navy">
                    Interested Domain
                  </label>
                  <select
                    id="domain"
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background-soft px-4 py-2.5 text-sm outline-none transition-colors focus:border-electric focus:ring-2 focus:ring-electric/20"
                  >
                    <option value="">Select a domain</option>
                    {internshipDomains.map((d) => (
                      <option key={d.name} value={d.name}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="skills" className="mb-1.5 block text-sm font-medium text-navy">
                  Skills
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  rows={3}
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-border bg-background-soft px-4 py-2.5 text-sm outline-none transition-colors focus:border-electric focus:ring-2 focus:ring-electric/20"
                  placeholder="List your technical skills"
                />
              </div>

              <Button size="lg" className="w-full" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Apply via WhatsApp
                </a>
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
