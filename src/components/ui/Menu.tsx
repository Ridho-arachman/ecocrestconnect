import Link from "next/link";
import React from "react";

type Props = {
  href?: string;
  type: "sm-md" | "lg";
};

const Menu: React.FC<Props> = ({ href = "/", type }) => {
  return (
    <>
      {type === "sm-md" && (
        <ul className="hidden lg:flex menu menu-horizontal px-1">
          <li>
            <Link href={href}>Beranda</Link>
          </li>
          <li>
            <Link href={"/"}>Tentang Kami</Link>
          </li>
          <li>
            <details>
              <summary>Layanan</summary>
              <ul className="p-2">
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
      )}
    </>
  );
};

export default Menu;
