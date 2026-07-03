"use client";

import { motion, useReducedMotion } from "motion/react";

export default function AboutManifesto() {
  const reduce = useReducedMotion();

  const parentVariants = {
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6,     ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <motion.section
      id="about"
      initial={reduce ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={parentVariants}
      className="bg-neutral-50 py-20 sm:py-32"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          variants={childVariants}
          className="mb-6 text-xs font-semibold tracking-[0.2em] text-neutral-500"
        >
          ABOUT US
        </motion.p>
        <motion.h2
          variants={childVariants}
          className="text-2xl font-medium leading-snug tracking-tight text-neutral-900 sm:text-3xl md:text-4xl"
        >
          In French, our name means <span className="italic">COAST</span> and{" "}
          <span className="italic">SKY</span>. Two worlds stretching toward each
          other, creating the horizon. A limitless line, an endless experiment.
        </motion.h2>
        <motion.a
          href="#"
          variants={childVariants}
          className="mt-10 inline-flex h-12 items-center justify-center bg-neutral-950 px-8 text-sm font-medium tracking-wide text-white transition-colors hover:bg-neutral-800"
        >
          DISCOVER MORE
        </motion.a>
      </div>
    </motion.section>
  );
}
