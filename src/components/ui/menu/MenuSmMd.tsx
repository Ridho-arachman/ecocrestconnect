"use client";
import { MenuProps } from "@/types/menu";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = ({ href = "/" }: MenuProps) => {
  const pathname = usePathname();
  return (
    <ul className="menu lg:hidden fixed z-10 top-0 left-0 right-0 w-[100vw] h-max pt-16 bg-base-200">
      <li className="flex flex-row items-center justify-start">
        <Image src={"/logo.png"} alt="Gambar Logo" width={100} height={100} />
      </li>
      <li>
        <Link href={"/"}>Beranda</Link>
      </li>
      <li>
        <Link href={"/tentang-kami"}>Tentang Kami</Link>
      </li>
      <li>
        <details open>
          <summary>Layanan</summary>
          <ul>
            <li>
              <Link href={"/"}>Artikel</Link>
            </li>
            <li>
              <Link href={"/"}>Acara</Link>
            </li>
            <li>
              <Link href={"/"}>Komunitas</Link>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default Menu;
