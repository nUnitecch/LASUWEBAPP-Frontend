import Link from "next/link";
import Logo from "../Logo";

export default function Header() {
  return (
    <div className="w-full flex items-center justify-between gap-[10.23px] px-4 py-2 shadow-md">
      <div className="flex flex-col gap-1">
        <span className="block w-6 bg-secondary-btn h-0.5 rounded"></span>
        <span className="block w-6 bg-secondary-btn h-0.5 rounded"></span>
        <span className="block w-6 bg-secondary-btn h-0.5 rounded"></span>
      </div>
      <Logo />
      <Link
        href="/auth/signin"
        className="bg-secondary-btn text-white rounded-[5.11px] px-[12.78px] py-[7.67px]"
      >
        Sign in
      </Link>
    </div>
  );
}
