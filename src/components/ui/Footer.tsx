import Link from "next/link";
import Image from "next/image";
import React, { memo } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 shadow-inner">
      <nav className="flex flex-col items-center justify-center gap-10 lg:w-full lg:flex-row lg:justify-between lg:gap-0">
        <Image
          src={"/logo/logoapp/logo.ico"}
          alt="Gambar Icon"
          width={80}
          height={0}
        />
        <div className="flex flex-col gap-3 md:flex-row md:gap-10 lg:ml-10">
          <Link href={"/"}>Tautan 1</Link>
          <Link href={"/"}>Tautan 2</Link>
          <Link href={"/"}>Tautan 3</Link>
          <Link href={"/"}>Tautan 4</Link>
          <Link href={"/"}>Tautan 5</Link>
        </div>
        <div className="flex gap-5 lg:gap-1">
          <Facebook className="hover:text-blue-600" />
          <Instagram className="hover:text-violet-500" />
          <Twitter className="hover:text-blue-500" />
          <Linkedin className="hover:text-blue-800" />
          <Youtube className="hover:text-red-600" />
        </div>
      </nav>
      <hr className="w-full border-black" />
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col gap-3 md:order-2 md:flex-row">
          <p>Kebijakan Privasi</p>
          <p>Syarat Layanan</p>
          <p>Pengaturan Cookie</p>
        </div>
        <p className="md:order-1">© 2024 Copyright: EcoCrestConnect</p>
      </div>
    </footer>
  );
};

export default memo(Footer);
