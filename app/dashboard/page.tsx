import Header from "@/components/dashboard/Header";
import QuickAction from "@/components/dashboard/QuickAction";
import WelcomeBoard from "@/components/dashboard/WelcomeBoard"

export default function Dashboard() {
  return (
    <div className="px-6 py-4 flex flex-col gap-9">
      <Header />
      <WelcomeBoard/>
      <QuickAction/>
    </div>
  );
}
