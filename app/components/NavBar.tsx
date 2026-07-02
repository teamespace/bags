"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  List,
  X,
  MagnifyingGlass,
  User,
  ShoppingBag,
} from "@phosphor-icons/react/dist/ssr";

const shopLinks = [
  "Apple Exclusive",
  "New Arrivals",
  "Core Collection",
  "All products",
  "Backpacks",
  "Crossbody bags / Sling bags",
  "Shoulder bags / Tote bags",
  "Petits Accessoires",
];

const materialLinks = [
  "Alias Leather",
  "Carbon",
  "EcoYarn",
  "Gathered",
  "Komatsu Onibegie Nylon",
  "Obsidian",
  "Onyx",
  "Satellite",
  "Sleek Nylon",
  "Smooth Nylon",
  "Woven Concrete",
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-neutral-950/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-white sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="p-2 -ml-2 hover:opacity-70 transition-opacity lg:hidden"
            aria-label="Open menu"
          >
            <List size={24} weight="light" />
          </button>

          <Link href="/" className="text-xl font-semibold tracking-tight">
            côte&ciel
          </Link>

          <ul className="hidden items-center gap-8 text-sm font-medium tracking-wide lg:flex">
            <li className="group relative">
              <button className="py-2 hover:opacity-70 transition-opacity">
                SHOP
              </button>
              <div className="pointer-events-none absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="border border-white/10 bg-neutral-950/95 p-4 text-xs tracking-wide backdrop-blur-sm">
                  {shopLinks.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="block py-2 text-white/80 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li className="group relative">
              <button className="py-2 hover:opacity-70 transition-opacity">
                MATERIALS
              </button>
              <div className="pointer-events-none absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="border border-white/10 bg-neutral-950/95 p-4 text-xs tracking-wide backdrop-blur-sm">
                  {materialLinks.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="block py-2 text-white/80 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <a href="#journal" className="py-2 hover:opacity-70 transition-opacity">
                JOURNAL
              </a>
            </li>
            <li>
              <a href="#about" className="py-2 hover:opacity-70 transition-opacity">
                ABOUT US
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <MagnifyingGlass size={22} weight="light" />
            </button>
            <a
              href="#"
              className="hidden p-2 hover:opacity-70 transition-opacity sm:block"
              aria-label="Account"
            >
              <User size={22} weight="light" />
            </a>
            <a
              href="#"
              className="p-2 hover:opacity-70 transition-opacity"
              aria-label="Cart"
            >
              <ShoppingBag size={22} weight="light" />
            </a>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-neutral-950 text-white"
          >
            <div className="flex items-center justify-between px-4 py-4">
              <span className="text-xl font-semibold tracking-tight">
                côte&ciel
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 -mr-2 hover:opacity-70 transition-opacity"
                aria-label="Close menu"
              >
                <X size={24} weight="light" />
              </button>
            </div>
            <div className="space-y-6 px-6 pt-8 text-lg font-medium tracking-wide">
              <a
                href="#"
                onClick={() => setMobileOpen(false)}
                className="block hover:opacity-70 transition-opacity"
              >
                SHOP
              </a>
              <a
                href="#"
                onClick={() => setMobileOpen(false)}
                className="block hover:opacity-70 transition-opacity"
              >
                MATERIALS
              </a>
              <a
                href="#journal"
                onClick={() => setMobileOpen(false)}
                className="block hover:opacity-70 transition-opacity"
              >
                JOURNAL
              </a>
              <a
                href="#about"
                onClick={() => setMobileOpen(false)}
                className="block hover:opacity-70 transition-opacity"
              >
                ABOUT US
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
