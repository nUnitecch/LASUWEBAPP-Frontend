import { FEATURE_CARDS } from "@/constants/landing";
import FeatureCard from "./FeatureCard";

export default function CardSection() {
  return (
    <section className="px-4 pt-20 grid grid-cols-1 gap-5">
      {FEATURE_CARDS.map((card, id) => (
        <FeatureCard details={card} key={id} />
      ))}
    </section>
  );
}
