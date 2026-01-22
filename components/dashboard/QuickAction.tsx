const studyMaterials = [
  {
    image: "/icons/quickAction (4).png",
    name: "Timetable",
  },
  {
    image: "/icons/quickAction (3).png",
    name: "Study Materials",
  },
  {
    image: "/icons/quickAction (2).png",
    name: "Past Questions",
  },
  {
    image: "/icons/quickAction (1).png",
    name: "Academic Calendar",
  },
];

export default function QuickAction() {
  return (
    <section className="flex flex-col gap-4 text-center">
      <h2>QuickAction</h2>
      <main className="grid grid-cols-2 gap-4">
        {studyMaterials.map((card, index) => (
          <div key={index} className="border px-6 py-10 rounded-xl text-center flex flex-col gap-3 items-center">
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        ))}
      </main>
    </section>
  );
}
