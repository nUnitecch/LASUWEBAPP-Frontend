export type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is your mission?",
    answer:
      "Our mission is to deliver high-quality solutions that empower businesses and individuals.",
  },
  {
    id: 2,
    question: "How can I contact support?",
    answer:
      "You can reach our support team via email at support@example.com or through the contact form.",
  },
  {
    id: 3,
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer refunds within 30 days of purchase if you’re not satisfied with our product.",
  },
  {
    id: 4,
    question: "Is there a free trial?",
    answer:
      "Absolutely! We provide a 14-day free trial so you can explore all features before committing.",
  },
];
