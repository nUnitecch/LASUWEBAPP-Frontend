"use client";

import { useState } from "react";
// shared component
import { Download } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="bg-background border border-background/10 rounded-[2rem] overflow-hidden shadow-sm shadow-slate-200/60">
      {/* Calendar */}
      <div className="p-4 bg-background">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full rounded-xl border-none shadow-none bg-transparent"
        />
      </div>

      {/* Download CTA */}
      <div className="p-6 border-t border-background bg-background">
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-primary">
              Academic Calendar
            </h4>
            <p className="text-[11px] leading-relaxed text-primary/70">
              Download the 2025/26 Harmattan semester schedule for your offline
              reference.
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-logo text-background rounded-xl font-bold text-xs hover:bg-logo/90 transition-all active:scale-[0.98] shadow-lg shadow-logo/20">
            <Download className="size-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </section>
  );
}
