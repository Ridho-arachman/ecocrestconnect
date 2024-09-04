import Button from "@/ui/Button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionTentang = () => {
  return (
    <section className="mx-3 mt-16 md:mx-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-3">
          <Image
            src={"/logo/logoapp/logo.ico"}
            alt="Gambar Icon"
            width={100}
            height={100}
            className="cursor-pointer grayscale hover:grayscale-0"
          />
          <h1 className="text-3xl font-bold">
            Sejarah, Visi, dan Misi Platform Kami
          </h1>
          <p>
            Platform kami didirikan dengan tujuan untuk menginspirasi dan
            memfasilitasi masyarakat dalam pelestarian lingkungan. Kami ingin
            mengedukasi, menghubungkan, dan memberdayakan individu serta
            komunitas untuk terlibat dalam kegiatan yang mendukung keberlanjutan
            lingkungan.
          </p>
          <div>
            <Button className="btn btn-outline rounded-none text-black">
              Lihat Selengkapnya
            </Button>
            <Link
              href={""}
              className="group/link btn btn-ghost rounded-none hover:bg-white hover:underline hover:decoration-2 hover:underline-offset-8"
            >
              Daftar Sekarang{" "}
              <ChevronRight className="transition-all duration-500 group-hover/link:rotate-90" />
            </Link>
          </div>
        </div>
        <div className="items-center sm:flex sm:justify-center">
          <Image
            src={"/1.jpg"}
            alt="Gambar Icon"
            width={900}
            height={300}
            className="h-[400px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTentang;
