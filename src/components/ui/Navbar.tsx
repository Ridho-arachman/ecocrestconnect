"use client";
import { memo, useState } from "react";
import Button from "@/ui/Button";
import Image from "next/image";
import MenuLg from "./menu/MenuLg";
import MenuSmMd from "./menu/MenuSmMd";
import { Menu as MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (): void => setOpen(!open);
  return (
    <nav className="navbar fixed top-0 z-10 w-full bg-white px-10 shadow">
      <div className="navbar-start flex flex-row">
        <MenuLg />
        <Button
          className="absolute left-6 top-5 z-20 ml-5 text-black lg:hidden"
          onClick={handleClick}
        >
          {open ? <X /> : <MenuIcon />}
        </Button>
        {open && <MenuSmMd />}
      </div>
      <div className="navbar-center">
        <Image src={"/logo.png"} alt="Gambar Logo" width={50} height={50} />
      </div>
      <div className="navbar-end">
        <Button className="btn btn-primary btn-sm text-white md:btn-lg">
          Daftar
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
