import { cardDetails } from "@/data/card";
import FeatureCard from "./FeatureCard";

export default function CardSection() {
  return (
    <section className="px-4 pt-20 grid grid-cols-1 gap-5">
      {cardDetails.map((card, id) => (
        <FeatureCard details={card} key={id} />
      ))}
    </section>
  );
}
