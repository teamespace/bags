"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function CollaborationBanner() {
  const reduce = useReducedMotion();

  const parentVariants = {
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <motion.section
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={parentVariants}
      className="relative flex min-h-[70dvh] items-center justify-center overflow-hidden bg-neutral-100"
    >
      <div className="absolute inset-0">
        <Image
          src="/collaboration.png"
          alt="côte&ciel collaboration campaign"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/30" />
      </div>

      <div className="relative z-10 px-4 text-center text-white">
        <motion.p
          variants={childVariants}
          className="mb-3 text-xs font-semibold tracking-[0.2em] text-white/80"
        >
          COLLABORATION
        </motion.p>
        <motion.h2
          variants={childVariants}
          className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
        >
          côte&ciel × NinepointNine
        </motion.h2>
        <motion.a
          href="#"
          variants={childVariants}
          className="mt-8 inline-flex h-12 items-center justify-center border border-white px-8 text-sm font-medium tracking-wide text-white transition-colors hover:bg-white hover:text-neutral-950"
        >
          SHOP THE COLLABORATION
        </motion.a>
      </div>
    </motion.section>
  );
}
