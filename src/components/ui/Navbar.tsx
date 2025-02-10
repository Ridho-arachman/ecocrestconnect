"use client";
import { useState } from "react";
import Button from "@/ui/Button";
import Image from "next/image";
import MenuLg from "./menu/MenuLg";
import MenuSmMd from "./menu/MenuSmMd";
import link from "@/data/link.json";
import { Menu as MenuIcon, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (): void => setOpen(!open);

  return (
    <nav className="navbar glass fixed top-0 z-10 w-full px-10 shadow-sm">
      <div className="navbar-start flex flex-row">
        <MenuLg />
        <Button
          className="absolute top-5 left-6 z-20 ml-5 text-black lg:hidden"
          onClick={handleClick}
        >
          {open ? <X /> : <MenuIcon />}
        </Button>
        {open && <MenuSmMd />}
      </div>
      <div className="navbar-center">
        <Image
          src={"/logo/logoapp/logo.ico"}
          alt="Gambar Logo"
          width={50}
          height={50}
        />
      </div>
      <div className="navbar-end flex-col md:flex-row md:gap-4">
        <Button className="btn btn-primary btn-sm md:btn-lg mb-2 text-white md:order-2">
          Daftar
        </Button>
        <ThemeToggle variant="md" />
      </div>
    </nav>
  );
};

export default Navbar;
