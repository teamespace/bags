"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import ProductCard from "../components/ProductCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  badge?: string;
  colors?: string[];
  rating?: number;
  reviews?: number;
}

interface ProductCarouselProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export default function ProductCarousel({
  title,
  subtitle,
  products,
}: ProductCarouselProps) {
  const reduce = useReducedMotion();
  const id = useId().replace(/:/g, "");
  const prevClass = `custom-prev-${id}`;
  const nextClass = `custom-next-${id}`;
  const scrollbarClass = `custom-scrollbar-${id}`;

  return (
    <motion.section
      initial={reduce ? false : { opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm text-neutral-500">{subtitle}</p>
          )}
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={16}
            slidesPerView={1.5}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            navigation={{
              nextEl: `.${nextClass}`,
              prevEl: `.${prevClass}`,
            }}
            scrollbar={{
              el: `.${scrollbarClass}`,
              draggable: true,
              hide: false,
            }}
            freeMode={false}
            className="product-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-6 flex items-center justify-between gap-6">
            <div
              className={`${scrollbarClass} relative h-1 w-full max-w-md overflow-hidden rounded-full bg-neutral-200`}
            />
            <div className="flex flex-shrink-0 gap-2">
              <button
                type="button"
                className={`${prevClass} flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white disabled:opacity-40`}
                aria-label="Previous products"
              >
                <CaretLeft size={18} weight="light" />
              </button>
              <button
                type="button"
                className={`${nextClass} flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-900 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white disabled:opacity-40`}
                aria-label="Next products"
              >
                <CaretRight size={18} weight="light" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
