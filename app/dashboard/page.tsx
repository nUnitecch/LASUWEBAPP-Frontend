import Calendar from "@/components/dashboard/Calendar";
import RecentMaterials from "@/components/dashboard/RecentMaterials";
import QuickAction from "@/components/dashboard/QuickAction";
import Quote from "@/components/dashboard/Quote";
import UpcomingClasses from "@/components/dashboard/UpcomingClasses";
import WelcomeBoard from "@/components/dashboard/WelcomeBoard";

export default function Dashboard() {
  return (
    <section className="min-h-screen">
      <WelcomeBoard />
      <QuickAction />
      <Quote />
      <div className="grid grid-cols-1">
        <RecentMaterials />
        <div>
          <UpcomingClasses />
          <Calendar />
        </div>
      </div>
    </section>
  );
}
