import Badge from "@/ui/Badge";
import { ChevronLeft, Instagram, Link2, Linkedin, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SectionKirimanHeaderBlog = ({ id }: { id: number }) => {
  return (
    <section className="mx-auto mt-32 max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <div className="flex flex-col items-start justify-start gap-3">
        <Link
          href={""}
          className="group/link btn btn-ghost rounded-none p-0 hover:bg-white hover:underline hover:decoration-2 hover:underline-offset-8"
        >
          <ChevronLeft className="transition-all duration-500 group-hover/link:-rotate-90" />{" "}
          Kembali
        </Link>
        <div className="flex items-center gap-3">
          <Badge>Kategory</Badge>
          <p className="font-semibold">Bacaan 5 menit</p>
        </div>
        <h1 className="text-3xl font-bold sm:text-5xl xl:max-w-2xl">
          Judul Blog Akan Ditempatkan Disini
        </h1>
      </div>
      <figure className="mt-8">
        <Image
          src={"/1.jpg"}
          alt="Gambar Blog"
          width={800}
          height={600}
          className="aspect-16/7 w-full object-cover"
        />
        <figcaption className="group/figcaption mt-5 flex flex-col gap-9 md:flex-row md:justify-between">
          <div className="flex gap-5">
            <div className="flex flex-col text-sm">
              Ditulis oleh
              <span className="font-medium">Nama Lengkap</span>
            </div>
            <div className="flex flex-col text-sm">
              Dipublikasikan pada
              <span className="font-medium">22 Januari 2021</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href={""}>
              <Link2 />
            </Link>
            <Link href={""}>
              <Linkedin />
            </Link>
            <Link href={""}>
              <X />
            </Link>
            <Link href={""}>
              <Instagram />
            </Link>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};

export default SectionKirimanHeaderBlog;
