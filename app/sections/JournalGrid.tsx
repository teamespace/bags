"use client";

import Image from "next/image";
import { motion } from "motion/react";

const journalPosts = [
  {
    id: "seasonal-news",
    category: "SEASONAL NEWS",
    title: "côte&ciel × NinepointNine: Reach Beyond Limits",
    image: "/seasonal-news/image-left.png",
  },
  {
    id: "duality",
    category: "SEASONAL NEWS",
    title: "côte&ciel Presents: Duality. A Day in Shanghai",
    image: "/seasonal-news/image-right.png",
  },
];

const horizonPosts = [
  {
    id: "liang-dong",
    category: "HORIZON SERIES",
    title: "horizon series | Liang Dong",
    image: "/horizon-series/image-left.png",
  },
  {
    id: "jean-baptiste",
    category: "HORIZON SERIES",
    title: "horizon series | Jean-Baptiste Anotin",
    image: "/horizon-series/image-left.png",
  },
];

const parentVariants = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

function PostCard({
  category,
  title,
  image,
}: {
  category: string;
  title: string;
  image: string;
}) {
  return (
    <motion.a variants={childVariants} href="#" className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <p className="text-xs font-semibold tracking-[0.15em] text-neutral-500">
          {category}
        </p>
        <h3 className="mt-2 text-lg font-medium leading-snug tracking-tight text-neutral-900 group-hover:opacity-70 transition-opacity">
          {title}
        </h3>
      </div>
    </motion.a>
  );
}

function PostGroup({
  title,
  posts,
}: {
  title: string;
  posts: { id: string; category: string; title: string; image: string }[];
}) {
  return (
    <motion.div variants={parentVariants}>
      <h2 className="mb-8 text-lg font-semibold tracking-tight text-neutral-900">
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </motion.div>
  );
}

export default function JournalGrid() {
  return (
    <motion.section
      id="journal"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={parentVariants}
      className="bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 space-y-16 sm:space-y-24 sm:px-6 lg:px-8">
        <motion.div variants={childVariants}>
          <PostGroup title="SEASONAL NEWS" posts={journalPosts} />
        </motion.div>
        <motion.div variants={childVariants}>
          <PostGroup title="HORIZON SERIES" posts={horizonPosts} />
        </motion.div>
      </div>
    </motion.section>
  );
}
