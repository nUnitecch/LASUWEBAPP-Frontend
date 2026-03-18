import RecentMaterials from "@/components/dashboard/RecentMaterials";
import QuickAction from "@/components/dashboard/QuickAction";
import Quote from "@/components/dashboard/Quote";
import UpcomingClasses from "@/components/dashboard/UpcomingClasses";
import WelcomeBoard from "@/components/dashboard/WelcomeBoard";
import CalendarSection from "@/components/dashboard/CalendarSection";

export default function Dashboard() {
  return (
    <section className="min-h-screen pb-12 space-y-8">
      {/* Top Section: High-level overview & Actions */}
      <div className="space-y-8">
        <WelcomeBoard />
        <QuickAction />
        <Quote />
      </div>

      {/* Main Grid: Responsive Ordering */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* SIDEBAR CONTENT: Urgent Info 
            On Mobile: Appears FIRST (order-1)
            On Desktop: Moves to RIGHT (lg:order-2)
        */}
        <div className="flex flex-col gap-8 order-1 lg:order-2 lg:col-span-1">
          <UpcomingClasses />
          <CalendarSection />
        </div>

        {/* MAIN CONTENT: Data Heavy 
            On Mobile: Appears SECOND (order-2)
            On Desktop: Moves to LEFT (lg:order-1)
        */}
        <div className="order-2 lg:order-1 lg:col-span-2">
          <RecentMaterials />
        </div>
        
      </div>
    </section>
  );
}


// export default function Dashboard() {
//   return (
//     <section className="min-h-screen">
//       <WelcomeBoard />
//       <QuickAction />
//       <Quote />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-5">
//         <RecentMaterials />
//         <UpcomingClasses />
//         <CalendarSection />
//       </div>
//     </section>
//   );
// }
