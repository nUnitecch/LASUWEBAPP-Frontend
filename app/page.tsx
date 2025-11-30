import Header from "./_components/header";
import About from "./_components/Home/about";
import CardSection from "./_components/Home/cardSection";
import Footer from "./_components/Home/Footer";
import Hero from "./_components/Home/hero";

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
