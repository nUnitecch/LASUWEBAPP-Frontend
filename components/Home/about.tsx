import { aboutCardInfo } from "@/data/about";
import AboutCard from "./aboutCard";
import FAQ from "./FAQ";

export default function About() {
  return (
    <section className="px-4 py-20">
      <div>
        <div className="py-4 flex flex-col gap-10">
          {aboutCardInfo.map((card, id) => (
            <AboutCard info={card} key={id} />
          ))}
        </div>
        <FAQ />
      </div>
    </section>
  );
}
