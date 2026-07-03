"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "@/components/shared/section-header";
import { processSteps } from "@/lib/site-config";

gsap.registerPlugin(ScrollTrigger);

export function ProcessSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 50%",
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Development Process"
          title="A Proven Path to Success"
          description="Our structured development methodology ensures quality delivery, transparent communication, and measurable results at every stage."
        />

        <div ref={timelineRef} className="relative mx-auto max-w-3xl">
          <div
            ref={lineRef}
            className="absolute left-6 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-electric via-royal to-electric/20 md:left-1/2 md:block md:-translate-x-px"
          />

          <div className="space-y-8 md:space-y-12">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="rounded-2xl border border-border bg-background-soft p-6 shadow-premium transition-shadow hover:shadow-premium-lg">
                    <span className="text-xs font-bold uppercase tracking-widest text-electric">
                      Step {step.step}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-electric bg-white text-sm font-bold text-electric shadow-glow md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.step}
                </div>

                <div className="hidden flex-1 md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
