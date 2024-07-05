"use client";

import { useState } from "react";
import Menu from "./Menu";
import Button from "./Button";
import { Menu as MenuIcon, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
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

        {open && (
          <ul className="menu lg:hidden fixed z-10 top-0 left-0 right-0 w-[100vw] h-max pt-16 bg-base-200">
            <li className="flex flex-row items-center justify-start">
              <Image
                src={"/logo.png"}
                alt="Gambar Logo"
                width={100}
                height={100}
              />
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
        )}
      </div>
      <div className="navbar-center ">
        <Image src={"/logo.png"} alt="Gambar 1" width={50} height={50} />
      </div>
      <div className="navbar-end">
        <Button className="btn btn-primary btn-md">Masuk</Button>
      </div>
    </nav>
  );
};

export default Navbar;
