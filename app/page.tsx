import Header from "../components/header";
import About from "../components/Home/about";
import CardSection from "../components/Home/cardSection";
import Footer from "../components/Home/Footer";
import Hero from "../components/Home/hero";

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
