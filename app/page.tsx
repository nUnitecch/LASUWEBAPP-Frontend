import Header from "@/components/header/index";
import About from "@/components/Home/About";
import CardSection from "@/components/Home/CardSection";
import Hero from "@/components/Home/Hero";
import Footer from "@/components/Home/Footer";

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <Hero />
      <CardSection />
      <About />
      <Footer />
    </div>
  );
}
