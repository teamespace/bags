"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Star } from "@phosphor-icons/react/dist/ssr";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  badge?: string;
  colors?: string[];
  rating?: number;
  reviews?: number;
}

export default function ProductCard({
  name,
  price,
  image,
  badge,
  colors = [],
  rating,
  reviews,
}: ProductCardProps) {
  const visibleColors = colors.slice(0, 4);
  const overflowCount = colors.length - visibleColors.length;

  return (
    <motion.a
      href="#"
      className="group block"
      whileHover="hover"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-white">
        {badge && (
          <span className="absolute left-3 top-3 z-10 bg-white px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-900">
            {badge}
          </span>
        )}
        <motion.div
          variants={{
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-4"
          />
        </motion.div>
      </div>
      <div className="mt-4">
        {colors.length > 0 && (
          <div className="mb-2 flex items-center gap-1.5">
            {visibleColors.map((color, i) => (
              <span
                key={i}
                className="h-4 w-4 rounded-full border border-neutral-200 ring-1 ring-neutral-100"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              />
            ))}
            {overflowCount > 0 && (
              <span className="text-[10px] font-medium text-neutral-500">
                +{overflowCount}
              </span>
            )}
          </div>
        )}
        <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-900 group-hover:opacity-70 transition-opacity">
          {name}
        </h3>
        {typeof rating === "number" && (
          <div className="mt-1 flex items-center gap-1">
            <div className="flex items-center text-neutral-900">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  weight={i < rating ? "fill" : "regular"}
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-xs text-neutral-500">
              {rating.toFixed(1)} ({reviews ?? 0})
            </span>
          </div>
        )}
        <p className="mt-1 text-sm text-neutral-600">{price}</p>
      </div>
    </motion.a>
  );
}
