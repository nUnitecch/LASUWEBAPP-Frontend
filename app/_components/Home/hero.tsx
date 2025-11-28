import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="py-4">
        <div className="w-[402px] h-[180px] overflow-hidden" role="bannar">
          <Image
            src="/images/heroImg.jpg"
            alt="hero image"
            width={402}
            height={180}
            className="object-contain block"
          />
        </div>
      </div>
      <div className="text-center text-primary-text">
        <div>
          <h1 className="text-[20px] text-primary-text font-bold w-[383px] mb-2">
            Your Ultimate LASU Campus Companion
          </h1>
          <p className="text-[12px] my-2">
            The official app for Lagos State University Lorem ipsum dolor sit
            amet, consectetur adipisicing elit.
          </p>
          <button
            aria-label="Sign up"
            className="btn-primary rounded-[5.11px] px-[12.78px] py-[7.67px] my-2"
          >
            Sign up
          </button>
        </div>
        <div>
          <h2 className="text-[18px] font-bold">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className="text-primary-text text-[12px] my-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            repellendus provident iusto
          </p>
        </div>
      </div>
    </section>
  );
}
