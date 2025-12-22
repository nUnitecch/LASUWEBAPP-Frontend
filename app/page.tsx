import Header from "@/components/Header";
import About from "@/components/Home/About";
import CardSection from "@/components/Home/CardSection";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";



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
