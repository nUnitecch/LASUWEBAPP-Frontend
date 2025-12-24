import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="py-4">
        <div className="min-w-75.5 h-70 overflow-hidden relative" role="banner">
          <Image
            src="/images/heroImg.jpg"
            alt="hero image"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="text-center text-primary-text px-4">
        <div>
          <h1 className="text-[28px] text-primary-text font-bold min-w-75.5 mb-2">
            Your Ultimate LASU Campus Companion
          </h1>
          <p className="text-[16px] my-2">
            The official app for Lagos State University(LASU), designed to
            simplify your student life and keep you connected.
          </p>
          <Link
            href="auth/signup"
            aria-label="Sign up"
            className="inline-block btn-primary rounded-[5.11px] px-[12.78px] py-[7.67px] my-4"
          >
            Sign up
          </Link>
        </div>
        <div className="mt-2">
          <h2 className="text-[22px] font-bold">
            Everything You Need, All in One Place
          </h2>
          <p className="text-primary-text text-[16px] my-2">
            Explore the powerful features designed to enhance your academic
            journey and campus experience.
          </p>
        </div>
      </div>
    </section>
  );
}
