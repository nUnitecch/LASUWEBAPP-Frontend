import { cardDetails } from "@/app/data/card";
import Card from "./card";

export default function CardSection() {
  return (
    <section className="p-4 grid grid-cols-2 gap-5">
      {cardDetails.map((card, id) => (
        <Card details={card} key={id} />
      ))}
    </section>
  );
}
