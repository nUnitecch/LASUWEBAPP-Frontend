import { FiMenu, FiBell, FiUser } from "react-icons/fi";

export default function Header() {
  return (
    <section className="flex justify-between text-gray-700 text-2xl">
      <FiMenu />
      <div className="right-icons flex gap-10 ">
        <FiBell />
        <FiUser />
      </div>
    </section>
  );
}
