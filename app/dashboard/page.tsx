import RecentMaterials from "@/components/dashboard/RecentMaterials";
import QuickAction from "@/components/dashboard/QuickAction";
import Quote from "@/components/dashboard/Quote";
import UpcomingClasses from "@/components/dashboard/UpcomingClasses";
import WelcomeBoard from "@/components/dashboard/WelcomeBoard";
import CalendarSection from "@/components/dashboard/CalendarSection";

export default function Dashboard() {
  return (
    <section className="min-h-dvh">
      <WelcomeBoard />
      <QuickAction />
      <Quote />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 gap-5">
        <RecentMaterials />
        <UpcomingClasses />
        <CalendarSection />
      </div>
    </section>
  );
}
