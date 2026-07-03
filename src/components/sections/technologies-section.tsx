"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "@/components/shared/section-header";
import { technologies } from "@/lib/site-config";

gsap.registerPlugin(ScrollTrigger);

export function TechnologiesSection() {
  const wallRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wallRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(wallRef.current, {
        x: "-30%",
        ease: "none",
        scrollTrigger: {
          trigger: wallRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="technologies" className="section-padding overflow-hidden bg-navy">
      <div className="container-custom">
        <SectionHeader
          eyebrow="Technologies"
          title="Built With Modern Technology Stack"
          description="We leverage industry-leading tools and frameworks to build performant, scalable, and future-proof solutions."
          className="[&_h2]:text-white [&_p]:text-silver/70 [&_span]:border-electric/30 [&_span]:bg-electric/10 [&_span]:text-electric-light"
        />
      </div>

      <div className="relative mt-4">
        <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-navy to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-navy to-transparent" />

        <div ref={wallRef} className="flex gap-4 px-4 will-change-transform">
          {[...technologies, ...technologies].map((tech, i) => (
            <motion.div
              key={`${tech}-${i}`}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex shrink-0 items-center rounded-xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm transition-colors hover:border-electric/40 hover:bg-electric/10"
            >
              <span className="whitespace-nowrap text-sm font-semibold text-white">{tech}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-3 px-4 md:hidden">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
