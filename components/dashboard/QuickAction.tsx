import Link from "next/link";
import { FaCalendar } from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";
import { BsBookFill } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";

const quickActions = [
  {
    icon: FaCalendar,
    name: "Timetable",
    href: "#timetable",
    bgColor: "bg-blue-50",
    color: "text-blue-500",
  },
  {
    icon: BsBookFill,
    name: "Study Materials",
    href: "#materials",
    bgColor: "bg-purple-50",
    color: "text-purple-500",
  },
  {
    icon: IoIosPaper,
    name: "Past Questions",
    href: "#past-questions",
    bgColor: "bg-orange-50",
    color: "text-orange-500",
  },
  {
    icon: IoCalendarSharp,
    name: "Academic Calendar",
    href: "#calendar",
    bgColor: "bg-green-50",
    color: "text-green-500",
  },
];

export default function QuickAction() {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-800">Quick Actions</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className="group flex flex-col items-center p-5 bg-background border border-background/20 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:border-logo/20"
          >
            <div
              className={`p-3 rounded-xl mb-3 transition-colors ${action.bgColor} group-hover:bg-blue-100`}
            >
              {/* <Image
                src={action.image}
                alt=""
                width={32}
                height={32}
                className="object-contain"
              /> */}
              <action.icon className={`size-8 ${action.color}`} />
            </div>
            <p className="text-sm text-center font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
              {action.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

// import Image from "next/image";

// const studyMaterials = [
//   {
//     image: "/icons/quickAction (4).png",
//     name: "Timetable",
//   },
//   {
//     image: "/icons/quickAction (3).png",
//     name: "Study Materials",
//   },
//   {
//     image: "/icons/quickAction (2).png",
//     name: "Past Questions",
//   },
//   {
//     image: "/icons/quickAction (1).png",
//     name: "Academic Calendar",
//   },
// ];

// export default function QuickAction() {
//   return (
//     <section className="">
//       <h2 className="text-xl font-semibold mb-6">QuickAction</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {studyMaterials.map((card, index) => (
//           <div
//             key={index}
//             className="bg-background rounded-xl flex flex-col gap-3 items-center"
//           >
//             <Image src={card.image} alt={card.name} width={40} height={40} />
//             <p>{card.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
