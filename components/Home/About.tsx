import { aboutCardInfo } from "@/data/about";
import AboutCard from "./AboutCard";
import FAQ from "./FAQ";

export default function About() {
  return (
    <section className="px-4 py-20">
      <div>
        <div className="py-4 flex flex-col gap-10">
          {aboutCardInfo.map((card, id) => (
            <AboutCard
              key={id}
              title={card.title}
              description={card.desc}
              imageUrl={card.image}
            />
          ))}
        </div>
        <FAQ />
      </div>
    </section>
  );
}
