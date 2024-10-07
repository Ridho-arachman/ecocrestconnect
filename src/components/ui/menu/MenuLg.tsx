"use client";
import Link from "next/link";
import navbarLink from "@/data/link.json";
import { usePathname } from "next/navigation";
const MenuLg = () => {
  const pathname = usePathname();
  return (
    <ul className="menu menu-horizontal hidden px-1 font-medium lg:flex">
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
        <details>
          <summary>Layanan</summary>
          <ul className="top-11 rounded-none p-2">
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

export default MenuLg;
