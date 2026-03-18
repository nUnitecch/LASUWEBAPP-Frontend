"use client";

import { useState } from "react";
// shared component
import { Calendar } from "../ui/calendar";

export default function CalendarSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <section className="w-full h-full">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-full h-full rounded-lg border border-logo/20"
      />
    </section>
  );
}
