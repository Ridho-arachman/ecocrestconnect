import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href?: string;
  type: "sm-md" | "lg";
};

const Menu: React.FC<Props> = ({ href = "/", type }) => {
  const menuSmMd = (
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
  );
  const menuLg = (
    <ul className="menu lg:hidden fixed z-10 top-0 left-0 right-0 w-[100vw] h-max pt-16 bg-base-200">
      <li className="flex flex-row items-center justify-start">
        <Image src={"/logo.png"} alt="Gambar Logo" width={100} height={100} />
      </li>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <details open>
          <summary>Parent</summary>
          <ul>
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
            <li>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </ul>
  );
  return <>{type === "sm-md" ? menuSmMd : menuLg}</>;
};

export default Menu;
