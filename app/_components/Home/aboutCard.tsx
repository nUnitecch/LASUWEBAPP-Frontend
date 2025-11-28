import Image from "next/image";
import React from "react";

type AboutCardType = {
  info: {
    title: string;
    desc: string;
    image: string;
    direction?: string;
  };
};

export default function AboutCard({ info }: AboutCardType) {
  const descriptionBackground =
    info.direction === "row-reverse" ? "btn-primary" : "";
  return (
    <div className={`flex gap-[11.33px] flex-${info.direction}`}>
      <div
        className={`w-[179.07px] h-[118.04px] flex-1 rounded-[5.85px] overflow-hidden p-2 shadow-md ${descriptionBackground}`}
      >
        <div>
          <h2 className="text-[17px] font-bold mb-5">{info.title}</h2>
          <p className="text-[8.41px] leading-[14.5px]">{info.desc}</p>
        </div>
      </div>
      <div className="w-[179.07px] h-[118.04px] rounded-[5.85px] flex-1 overflow-hidden">
        <Image
          src={`/images/${info.image}`}
          alt={info.title}
          width={179.07}
          height={118.04}
          className="object-contain"
        />
      </div>
    </div>
  );
}
