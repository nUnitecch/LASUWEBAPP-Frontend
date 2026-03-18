"use client";

import { Clock, MapPin, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const scheduleCard = [
  {
    code: "CSC203",
    subject: "Data Structures",
    time: "2:00 PM - 4:00 PM",
    venue: "LT 1",
    isLive: true,
  },
  {
    code: "CSC205",
    subject: "Operating Systems",
    time: "4:00 PM - 6:00 PM",
    venue: "MBA Hall",
    isLive: false,
  },
];

export default function UpcomingClasses() {
  return (
    <section className="bg-background border border-background/50 rounded-2xl p-5 shadow-sm">
      {/* Header - Simple & Clean */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center">
          <Clock className="mr-3" />
          <h2 className="text-lg font-bold text-slate-800 tracking-tight">
            Upcoming
          </h2>
        </div>
        <span className="text-[10px] font-bold text-primary/50 uppercase bg-secondary px-2 py-1 rounded-md">
          Today
        </span>
      </div>

      {/* Simplified Card List */}
      <div className="space-y-3">
        {scheduleCard.map((card, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center gap-4 p-3 rounded-xl border transition-all",
              card.isLive
                ? "bg-logo/5 border-logo/20"
                : "bg-white border-slate-100",
            )}
          >
            {/* Time Indicator */}
            <div className="flex flex-col items-center justify-center text-center min-w-15 border-r border-logo/20 pr-3">
              <span className="text-xs font-bold text-primary mb-0.5">
                {card.time}
              </span>
              {card.isLive && (
                <span className="text-[9px] font-black text-logo uppercase animate-pulse">
                  Soon
                </span>
              )}
            </div>

            {/* Course Info */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-primary leading-tight">
                {card.subject}
              </h3>
              <span className="text-[10px] font-bold text-logo">
                {card.code}
              </span>
              <div className="flex items-center gap-3 text-[11px] text-slate-400">
                <div className="flex items-center gap-1">
                  <MapPin size={12} />
                  <span>{card.venue}</span>
                </div>
              </div>
            </div>

            <ChevronRight className="text-slate-300 size-4" />
          </div>
        ))}
      </div>

      {/* Footer link */}
      <Link
        href="/dashboard/#"
        className="mt-5 block text-center text-xs font-bold text-primary/40 hover:text-logo transition-colors"
      >
        View full timetable
      </Link>
    </section>
  );
}
