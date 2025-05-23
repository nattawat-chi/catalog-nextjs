import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="block h-14 sm:h-16 md:h-20 w-auto mr-10">
      <Image
        src="/logo.png"
        alt="Logo"
        width={160}
        height={48}
        className="scale-[2.2] h-full w-auto object-contain transition-all hover:brightness-110"
        priority
      />
    </div>
  );
};
export default Logo;
