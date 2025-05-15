import Link from "next/link";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Link href="/" className="">
      <img
        src="/logo.png"
        alt="Logo"
        className="h-26 w-26 rounded-lg bg-zinc-900  shadow-lg hover:scale-105 transition-all"
      />
    </Link>
  );
};
export default Logo;
