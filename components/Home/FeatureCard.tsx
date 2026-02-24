"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type DetailsType = {
  details: {
    icon: string;
    title: string;
    desc: string;
  };
};

export default function FeatureCard({ details }: DetailsType) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="flex flex-col h-full gap-8 border border-border/50 bg-card p-6 rounded-tl-3xl rounded-br-3xl shadow-sm hover:shadow-xl hover:border-logo/30 transition-all group"
    >
      <div className="flex justify-between items-start">
        <div className="size-12 rounded-2xl bg-logo flex items-center justify-center shadow-lg shadow-logo/20 group-hover:rotate-12 transition-transform">
          <Image
            src={details.icon}
            alt={details.title}
            className="object-contain brightness-0 invert"
            width={24}
            height={24}
          />
        </div>
        <span className="text-logo/10 font-black text-4xl group-hover:text-logo/20 transition-colors select-none">
          +
        </span>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-foreground leading-tight">
          {details.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
          {details.desc}
        </p>
      </div>
    </motion.div>
  );
}