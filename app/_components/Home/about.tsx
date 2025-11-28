import AboutCard from "./aboutCard";
import { aboutCardInfo } from "@/app/data/about";

export default function About() {
  return (
    <section className="p-4">
      <div>
        <div className="py-4 flex flex-col gap-10">
          {aboutCardInfo.map((card, id) => (
            <AboutCard info={card} key={id} />
          ))}
        </div>
        <div>
          <h3>Frequent Asked Questions</h3>
        </div>
      </div>
    </section>
  );
}
