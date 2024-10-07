"use client";

import Image from "next/image";
import Link from "next/link";
import navbarLink from "@/data/link.json";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();
  return (
    <ul className="menu fixed left-0 right-0 top-0 z-10 h-max w-screen bg-base-200 pt-12 lg:hidden">
      <div className="mb-1 flex flex-row items-center justify-start">
        <Image
          src={"/logo/logoapp/logo.ico"}
          alt="Gambar Logo"
          width={80}
          height={80}
        />
      </div>
      {navbarLink.slice(0, 2).map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className={pathname === link.href ? "active" : ""}
          >
            {link.linkname}
          </Link>
        </li>
      ))}
      <li>
        <details open>
          <summary>Layanan</summary>
          <ul>
            {navbarLink.slice(2).map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : ""}
                >
                  {link.linkname}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default Menu;
