import { cardDetails } from "@/data/card";
import Card from "./Card";

export default function CardSection() {
  return (
    <section className="px-4 pt-20 grid grid-cols-1 gap-5">
      {cardDetails.map((card, id) => (
        <Card details={card} key={id} />
      ))}
    </section>
  );
}
