"use client";

import { faqData } from "@/app/data/faqs";
import { useState } from "react";

export default function FAQ() {
  const [showFAQAnswer, setShowFAQAnswer] = useState<number | null>(null);

  const handleToggleAnswer = (id: number) => {
    setShowFAQAnswer((prev) => (prev !== id ? id : null));
  };

  return (
    <div className="py-4">
      <h2 className="text-[24px] text-center font-bold mb-4">
        Frequent Asked Questions
      </h2>
      <ul className="grid grid-cols-1 gap-x-5 gap-y-8">
        {faqData.map((faq) => (
          <li key={faq.id} className="w-full shadow-md">
            <div className="flex w-full items-center gap-2 justify-between shadow-xs p-3">
              <h4 className="text-[16px] font-semibold">{faq.question}</h4>
              <span
                className="px-1 inline-block"
                onClick={() => handleToggleAnswer(faq.id)}
              >
                +
              </span>
            </div>
            <p
              className={`transition-all duration-300 ${
                showFAQAnswer === faq.id ? "h-auto py-3 px-5" : "h-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
