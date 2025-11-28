import Card from "./_components/card";
import Header from "./_components/header";
import Hero from "./_components/Home/hero";

const cardDetails = [
  {
    icon: "/icons/educap.png",
    title: "Academic Hub",
    desc: "Study smarter with your timetable and course materials organized.",
  },
  {
    icon: "/icons/campus-news.png",
    title: "Campus News",
    desc: "Get real-time updates on school activities, circulars, and events.",
  },
  {
    icon: "/icons/Map.png",
    title: "Interactive Map",
    desc: "A smart campus guide to help you explore LASU’s faculties and facilities.",
  },
  {
    icon: "/icons/Stu-Wallet.png",
    title: "Student Wallet",
    desc: "Top up, pay for services, and track your spending — all in one place.",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <Hero />
      <section className="p-4 grid grid-cols-2 gap-5">
        {cardDetails.map((card, id) => (
          <Card details={card} key={id} />
        ))}
      </section>
    </div>
  );
}
