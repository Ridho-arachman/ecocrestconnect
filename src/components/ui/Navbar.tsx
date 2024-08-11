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
    <nav className="navbar w-full fixed top-0 shadow z-10 bg-white px-10">
      <div className="navbar-start flex flex-row">
        <MenuLg />
        <Button
          className="absolute top-5 left-6 lg:hidden z-20  ml-5"
          onClick={handleClick}
        >
          {open ? <X /> : <MenuIcon />}
        </Button>
        {open && <MenuSmMd />}
      </div>
      <div className="navbar-center ">
        <Image src={"/logo.png"} alt="Gambar Logo" width={50} height={50} />
      </div>
      <div className="navbar-end">
        <Button className="btn btn-primary btn-sm md:btn-lg text-white">
          Daftar
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
