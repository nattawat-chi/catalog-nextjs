import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/NewLogo.png"
        alt="Logo"
        width={210}
        height={50}
        className="object-contain transition-all hover:brightness-110"
        priority
      />
    </Link>
  );
};
export default Logo;
