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
    <motion.section
      initial={reduce ? false : { opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-neutral-500">
          NEWSLETTER
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-neutral-950 sm:text-3xl">
          Get 10% Off - Subscribe for updates
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          Be the first to know about new product releases, collaborations,
          exclusive offers and more.
        </p>

        {submitted ? (
          <div className="mt-8 text-sm font-medium text-neutral-950">
            Thank you for subscribing.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
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
          </form>
        )}
      </div>
    </motion.section>
  );
}
