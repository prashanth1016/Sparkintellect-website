"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/shared/counter";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { siteConfig, heroStats } from "@/lib/site-config";

const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((mod) => mod.HeroScene),
  { ssr: false, loading: () => <div className="absolute inset-0 -z-10 hero-gradient" /> }
);

export function HeroSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden hero-gradient">
      {isDesktop && <HeroScene />}


      <div className="absolute inset-0 -z-[5]">
        <Image
          src="/images/hero-headquarters.jpg"
          alt="SparkIntellect AI innovation headquarters"
          fill
          priority
          className="object-cover opacity-[0.15] mix-blend-multiply"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 -z-[4] bg-gradient-to-b from-white/80 via-white/60 to-background-soft" />

      <div className="container-custom relative z-10 w-full pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-electric shadow-premium backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse" />
              Enterprise AI & Software Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Engineering the Future of{" "}
            <span className="gradient-text">AI, Software & Digital Transformation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg md:text-xl"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MagneticButton>
              <Button size="lg" asChild className="group min-w-[200px]">
                <Link href="/#services">
                  Explore Services
                  <ArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="secondary" size="lg" asChild className="min-w-[200px]">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4 md:mt-20 md:gap-6"
        >
          {heroStats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border/60 bg-white/70 p-4 text-center shadow-premium backdrop-blur-sm md:p-5"
            >
              <div className="text-2xl font-bold text-navy md:text-3xl">
                {stat.isText ? (
                  stat.text
                ) : (
                  <Counter value={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="mt-1 text-xs font-medium text-muted md:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-electric"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Discover</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
