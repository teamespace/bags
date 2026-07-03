"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const informationLinks = [
  "Contact Us",
  "FAQs",
  "Terms & Conditions",
  "Privacy",
  "Stockists",
  "Asia Pacific Site",
  "EU/UK Site",
];

const quickLinks = [
  "Return and Exchange",
  "Return and Exchange Policy",
  "Shipping Info",
  "Warranty",
  "Contact Us",
];

const socialLinks = [
  { label: "Facebook", icon: FacebookLogo, href: "#" },
  { label: "Instagram", icon: InstagramLogo, href: "#" },
  { label: "YouTube", icon: YoutubeLogo, href: "#" },
];

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <motion.footer
      initial={reduce ? false : { opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-neutral-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div>
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-neutral-950"
            >
              côte&ciel
            </Link>
            <address className="mt-4 not-italic text-sm leading-relaxed text-neutral-600">
              côte&ciel INC
              <br />
              World Financial District
              <br />
              60 Broad Street Suite 3502
              <br />
              New York, NY 10004
            </address>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-neutral-950">
              INFORMATION
            </h3>
            <ul className="mt-4 space-y-3">
              {informationLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-neutral-950">
              QUICK LINKS
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-950"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.15em] text-neutral-950">
              FOLLOW US
            </h3>
            <div className="mt-4 flex items-center gap-4">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-neutral-600 transition-colors hover:text-neutral-950"
                >
                  <Icon size={24} weight="light" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row"
        >
          <p>© 2026, côte&ciel US</p>
          <p>Powered by Shopify</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
