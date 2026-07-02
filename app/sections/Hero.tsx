"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-neutral-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero/hero.png"
          alt="Summer collection campaign"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/20 to-neutral-950/80" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/80"
        >
          SUMMER SALE &apos;26
        </motion.p>
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-4xl font-semibold tracking-tight leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Designed for movement.
        </motion.h1>
        <motion.a
          href="#collection"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 inline-flex h-12 items-center justify-center border border-white px-8 text-sm font-medium tracking-wide text-white transition-colors hover:bg-white hover:text-neutral-950"
        >
          SHOP THE COLLECTION
        </motion.a>
      </div>
    </section>
  );
}
