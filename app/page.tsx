import Header from "../components/Header/Header";
import Hero from "../components/Home/Hero";
import CardSection from "../components/Home/CardSection";
import About from "../components/Home/About";
import Footer from "../components/Home/Footer";
import FAQ from "@/components/Home/FAQ";

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <Hero />
      <CardSection />
      <About />
      <FAQ />
      <Footer />
    </div>
  );
}
