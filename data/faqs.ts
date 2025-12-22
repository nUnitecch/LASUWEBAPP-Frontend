export type FAQItem = {
  id: number;
  question: string;
  answer: string;
};

export const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is my LASU APP?",
    answer:
      "My Lasu is a digital platform designed to help LASU students access their academic tools,A timetable, study materials, campus updates, and opportunities all in one place.",
  },
  {
    id: 2,
    question: "Who can use my LASU APP?",
    answer: "All LASU student.",
  },
  {
    id: 3,
    question: "Is my LASU APP free?",
    answer: "Yes",
  },
  {
    id: 4,
    question: "What do I do inside the Academic Hub?",
    answer: "Study smarter with your timetable and course materials organized.",
  },
  {
    id: 5,
    question: "Is my information secure?",
    answer: "Yes",
  },
];
