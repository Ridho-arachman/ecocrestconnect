"use client";

import { useState } from "react";
import Menu from "./Menu";
import Button from "./Button";
import { Menu as MenuIcon, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (): void => setOpen(!open);
  return (
    <nav className="navbar w-full fixed top-0 shadow ">
      <div className="navbar-start flex flex-row">
        <Menu type="sm-md" />
        <Button
          className="absolute top-5 left-6 lg:hidden z-20"
          onClick={handleClick}
        >
          {open ? <X /> : <MenuIcon />}
        </Button>
        {open && <Menu type="lg" />}
      </div>
      <div className="navbar-center ">
        <Image src={"/logo.png"} alt="Gambar Logo" width={50} height={50} />
      </div>
      <div className="navbar-end">
        <Button className="btn btn-primary btn-md">Masuk</Button>
      </div>
    </nav>
  );
};

export default Navbar;
