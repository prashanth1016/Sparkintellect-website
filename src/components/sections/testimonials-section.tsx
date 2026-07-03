"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { testimonials } from "@/lib/site-config";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-background-muted">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by Business Leaders"
          description="Our clients value our commitment to engineering excellence, transparent communication, and measurable results."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-hover relative rounded-2xl border border-border bg-white p-8 shadow-premium"
            >
              <Quote className="mb-4 h-8 w-8 text-electric/30" />
              <p className="text-base leading-relaxed text-slate">&ldquo;{testimonial.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold text-navy">{testimonial.role}</div>
                <div className="text-xs text-muted">{testimonial.company}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
