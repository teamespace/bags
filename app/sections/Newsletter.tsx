"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function Newsletter() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-xs font-semibold tracking-[0.2em] text-neutral-500"
        >
          NEWSLETTER
        </motion.p>

        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl"
        >
          Get 10% Off - Subscribe for updates
        </motion.h2>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-sm leading-relaxed text-neutral-600"
        >
          Be the first to know about new product releases, collaborations,
          exclusive offers and more.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-sm font-medium text-neutral-950"
          >
            Thank you for subscribing.
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="h-12 flex-1 border border-neutral-200 bg-white px-4 text-sm text-neutral-950 placeholder:text-neutral-400 focus:border-neutral-950 focus:outline-none"
            />
            <button
              type="submit"
              className="h-12 bg-neutral-950 px-8 text-sm font-medium tracking-wide text-white transition-colors hover:bg-neutral-800"
            >
              SUBSCRIBE
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
