"use client";

import { useState } from "react";
// shared component
import { Calendar } from "../ui/calendar";

export default function CalendarSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <section className="w-full h-full border border-logo/20 rounded-lg overflow-hidden lg:col-start-3 lg:row-span-2 bg-background">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-full h-full"
      />
    </section>
  );
}
