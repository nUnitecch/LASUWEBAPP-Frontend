import DashboardHeader from "@/components/dashboard/DashboardHeader";
import QuickAction from "@/components/dashboard/QuickAction";
import Quote from "@/components/dashboard/Quote";
import UpcomingClasses from "@/components/dashboard/UpcomingClasses";
import WelcomeBoard from "@/components/dashboard/WelcomeBoard";

export default function Dashboard() {
  return (
    <section className="min-h-screen bg-background">
      <WelcomeBoard />
      <section className="space-y-6">
        <QuickAction />
        <UpcomingClasses />
        <Quote />
      </section>
    </section>
  );
}
