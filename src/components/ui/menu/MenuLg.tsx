"use client";
import Link from "next/link";
import { MenuProps } from "@/types/menu";
import { usePathname } from "next/navigation";
const MenuLg = ({ href = "/" }: MenuProps) => {
  const pathname = usePathname();
  return (
    <ul className="hidden lg:flex menu menu-horizontal px-1 font-medium">
      <li>
        <Link href={href} className={pathname === href ? "active" : ""}>
          Beranda
        </Link>
      </li>
      <li>
        <Link
          href={"/tentang-kami"}
          className={pathname === "/tentang-kami" ? "active" : ""}
        >
          Tentang Kami
        </Link>
      </li>
      <li>
        <details>
          <summary>Layanan</summary>
          <ul className="p-2 rounded-none top-11">
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

export default MenuLg;
