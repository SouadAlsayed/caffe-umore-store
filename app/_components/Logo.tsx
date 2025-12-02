import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.webp";
import { Bodoni_Moda } from "next/font/google";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
});

function Logo() {
  return (
    <Link href="/" className="flex items-center justify-center gap-4 ">
      <Image
        src={logo}
        quality={100}
        height="40"
        width="40"
        alt="Caffè Umore Logo"
      />
      <span
        className={`${bodoniModa.className} text-xl font-bold text-coffee-900`}
      >
        Caffè Umore
      </span>
    </Link>
  );
}

export default Logo;
