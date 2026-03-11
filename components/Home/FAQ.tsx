"use client";

import AccordionSection from "./Accordion";
import Container from "../Container";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <section className="py-24 bg-secondary/30" id="faq">
      <Container>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-logo font-bold uppercase tracking-widest text-xs"
            >
              Support Center
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground tracking-tight">
              Common Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about navigating the LASU campus
              digital ecosystem.
            </p>
          </div>

          <div className="bg-card rounded-[1.5rem] p-4 md:p-8 shadow-sm border border-border/30">
            <AccordionSection />
          </div>
        </div>
      </Container>
    </section>
  );
}
