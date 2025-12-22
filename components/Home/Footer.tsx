import Image from "next/image";
import Link from "next/link";
import Logo from "../Logo";

export default function Footer() {
  return (
    <footer className="text-background">
      <section className="min-w-[200px] h-[200px] relative flex items-center justify-center">
        <div className="footer-overlay"></div>
        <Image
          src="/images/footerImage.jpg"
          alt="footer image"
          fill
          className="object-cover"
        />
        <div className="w-[80%] relative z-50 text-center">
          <p className="text-background mb-4 text-[12px]">
            Whatever your campus needs, My LASU App’s got you covered, helping
            you stay organized, informed, and ready for anything LASU throws
            your way.
          </p>
          <button className="bg-background px-4 py-1 rounded text-primary-text">
            Sign up today!
          </button>
        </div>
      </section>
      <div className="bg-footer p-4">
        <div className="w-[180px] mb-2">
          <Logo />
        </div>
        <p className="mb-5">Your Ultimate Campus Companion.</p>
        <ul className="flex flex-col mb-7">
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Careers</Link>
          </li>
          <li>
            <Link href="">Hubs</Link>
          </li>
          <li>
            <Link href="">Customer Care</Link>
          </li>
          <li>
            <Link href="">Services</Link>
          </li>
        </ul>
        <div>
          <p>Get to know when other features are open.</p>
          <div className="my-4 flex">
            <input
              type="text"
              placeholder="Lorem is a demo text"
              className="bg-background p-2 mr-4 rounded"
            />
            <button className="rounded px-4 bg-logo-title">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
