import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;
  type: "sm-md" | "lg";
};

const Menu: React.FC<Props> = ({ href = "/", type }) => {
  const menuLg = (
    <ul className="hidden lg:flex menu menu-horizontal px-1 font-medium">
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
  const menuSmMd = (
    <ul className="menu lg:hidden fixed z-10 top-0 left-0 right-0 w-[100vw] h-max pt-16 bg-base-200">
      <li className="flex flex-row items-center justify-start">
        <Image src={"/logo.png"} alt="Gambar Logo" width={100} height={100} />
      </li>
      <li>
        <Link href={"/"}>Beranda</Link>
      </li>
      <li>
        <Link href={"/"}>Tentang Kami</Link>
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
  return (
    <>
      {type === "sm-md" && menuSmMd}
      {type === "lg" && menuLg}
    </>
  );
};

export default Menu;
