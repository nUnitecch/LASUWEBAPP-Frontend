import Image from "next/image";

type AboutCardType = {
  info: {
    title: string;
    desc: string;
    image: string;
  };
};

export default function AboutCard({ info }: AboutCardType) {
  return (
    <div className="about-card flex gap-[11.33px]">
      <div className="card-desc w-1/2 rounded-[5.85px] overflow-hidden p-2 shadow-md">
        <div>
          <h2 className="text-[17px] font-bold mb-5">{info.title}</h2>
          <p className="text-[8.41px] leading-[14.5px]">{info.desc}</p>
        </div>
      </div>
      <div className="w-1/2 rounded-[5.85px] overflow-hidden relative">
        <Image
          src={`/images/${info.image}`}
          alt={info.title}
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
