import Card from "./_components/card";
import Header from "./_components/header";

const cardDetails = [];

export default function Home() {
  return (
    <div className="bg-background">
      <Header />

      <section className="p-4 grid grid-cols-2 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}
