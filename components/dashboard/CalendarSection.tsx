"use client";

import { useState } from "react";
// shared component
import { Calendar } from "../ui/calendar";
import { Download } from "lucide-react";

export default function CalendarSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className="bg-background border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm shadow-slate-200/60">
      {/* 1. The Interactive Calendar */}
      <div className="p-4 flex justify-center bg-slate-50/50">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-xl border-none shadow-none bg-transparent"
        />
      </div>

      {/* 2. The Download CTA Section */}
      <div className="p-6 border-t border-slate-100 bg-white">
        <div className="flex flex-col gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-800">
              Academic Calendar
            </h4>
            <p className="text-[11px] leading-relaxed text-slate-500">
              Download the 2025/26 Harmattan semester schedule for your offline
              reference.
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-logo text-white rounded-xl font-bold text-xs hover:bg-logo/90 transition-all active:scale-[0.98] shadow-lg shadow-logo/20">
            <Download className="size-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>
    </section>
  );
}

// export default function CalendarSection() {
//   const [date, setDate] = useState<Date | undefined>(new Date());
//   return (
//     <section className="lg:col-start-3 lg:row-span-2">
//       <div>
//         <Calendar
//           mode="single"
//           selected={date}
//           onSelect={setDate}
//           className="w-full max-w-md rounded-lg border border-logo/20"
//         />
//       </div>
//       <div>
//         <p>
//           Download your academic calendar for the 2025/26 harmattan semester
//         </p>
//         <button>
//           <Download />
//           <span>Download</span>
//         </button>
//       </div>
//     </section>
//   );
// }
