import { BiAlarm } from "react-icons/bi";

const scheduleCard = [
  {
    code: "CSC203",
    subject: "Data Structures",
    time: "2:00 PM",
    start: "Starts in 45 minutes",
  },
  {
    code: "CSC203",
    subject: "Data Structures",
    time: "2:00 PM",
    start: "Starts in 45 minutes",
  },
  {
    code: "CSC203",
    subject: "Data Structures",
    time: "2:00 PM",
    start: "Starts in 45 minutes",
  },
];

export default function UpcomingClasses() {
  return (
    <section className="flex flex-col gap-2.5 px-4 py-3 border rounded-xl ">
      <div className="flex items-center text-[20px] font-bold gap-3">
        <BiAlarm className="text-2xl" />
        <h2>Upcoming Classes</h2>
      </div>
      <div className="flex flex-col gap-3.5">
        {scheduleCard.map((card, index) => (
          <div key={index} className="bg-[#F2F2F2CC] rounded-xl px-3 py-1">
            <div className="flex gap-3 ">
              <p className="text-[#4B5EEC] bg-[#D9DDFB] rounded-[5px] px-2">
                {card.code}
              </p>
              <p>{card.subject}</p>
            </div>
            <span className="text-[#848484] text-[15px]">{card.time}</span>
            <p>{card.start}</p>
          </div>
        ))}
      </div>
      <p className="text-center font-semibold">View full timetable</p>
    </section>
  );
}
