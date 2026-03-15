"use client";

import { useState } from "react";
// shared component
import { Calendar } from "../ui/calendar";

export default function CalendarSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <section className="lg:col-start-3 lg:row-span-2">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="w-full max-w-md rounded-lg border border-logo/20"
      />
    </section>
  );
}
