"use client";

import { Quote as QuoteIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden px-8 py-8 rounded-[2rem] bg-linear-to-br from-secondary/50 to-logo/10 border border-logo/10 shadow-sm shadow-logo/5 "
      >
        <QuoteIcon
          className="absolute -top-2 -left-2 size-24 text-logo/10 -rotate-12 select-none"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          <blockquote className="text-lg md:text-xl font-medium text-primary leading-relaxed italic">
            “Live as if you were to die tomorrow. Learn as if you were to live
            forever.”
          </blockquote>

          <div className="flex items-center gap-3">
            <span className="h-px w-6 bg-logo/80" />
            <cite className="not-italic font-bold text-xs uppercase tracking-widest text-logo">
              Mahatma Gandhi
            </cite>
            <span className="h-px w-6 bg-logo/80" />
          </div>
        </div>

        <div className="absolute -bottom-5 right-1 size-20 border border-logo/50 rotate-45" />
        {/* <div className="absolute -bottom-10 -right-10 size-32 bg-logo/50 rounded-full blur-2xl" /> */}
      </motion.div>
    </section>
  );
}
