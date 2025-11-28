import Image from "next/image";

type DetailsType = {
  details: {
    icon: string;
    title: string;
    desc: string;
  };
};

export default function Card({ details }: DetailsType) {
  return (
    <div className="flex flex-col gap-y-[38.63px] border-[1.42px] border-[#4E7EE5] min-w-[169.26px] h-[169.03px] py-[15.24px] px-[6.38px] rounded-tl-[15.95px] rounded-br-[15.95px]">
      <div className="self-end">
        <div className="min-w-[29.06px] h-[29.06px] rounded-[14.53px] p-[4.96px] bg-logo-title flex items-center justify-center">
          <Image
            src={details.icon}
            alt="grduation cap"
            className="object-contain"
            width={15.95}
            height={13.11}
          />
        </div>
      </div>
      <div className="space-y-[7.87px]">
        <h1 className="text-[17.01px] font-bold text-primary-text w-[154.5px]">
          {details.title}
        </h1>
        <p className="text-[10px] w-[119.42px]">{details.desc}</p>
      </div>
    </div>
  );
}
