import Button from "@/ui/Button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionTentang = () => {
  return (
    <section className="mt-16 mx-3 md:mx-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        <div className="flex flex-col gap-3">
          <Image
            src={"/logo.ico"}
            alt="Gambar Icon"
            width={100}
            height={100}
            className="grayscale hover:grayscale-0 cursor-pointer"
          />
          <h1 className="font-bold text-3xl">
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
              className="btn btn-ghost hover:underline hover:decoration-2 rounded-none hover:bg-white  hover:underline-offset-8 group/link"
            >
              Daftar Sekarang{" "}
              <ChevronRight className="group-hover/link:rotate-90 transition-all duration-500" />
            </Link>
          </div>
        </div>
        <div className="sm:flex sm:justify-center items-center">
          <Image
            src={"/1.jpg"}
            alt="Gambar Icon"
            width={900}
            height={300}
            className="object-cover w-full h-[400px] "
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTentang;
