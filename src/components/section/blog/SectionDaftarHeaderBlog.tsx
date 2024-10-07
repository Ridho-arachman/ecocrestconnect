import Button from "@/ui/Button";
import Card from "@/ui/card/Card";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionDaftarHeaderBlog = () => {
  return (
    <section className="mx-auto mb-16 mt-28 max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <div className="flex flex-col items-center justify-center gap-2 px-16 text-center">
        <p>Artikel</p>
        <h1 className="text-3xl font-bold">Temukan Blog Terbaru Kami</h1>
        <p>Baca blog terbaru kami dan dapatkan informasi menarik.</p>
      </div>
      <div className="mt-10 flex justify-start overflow-x-auto sm:justify-center sm:overflow-x-visible">
        <ul className="flex justify-center gap-6 whitespace-nowrap pb-5">
          <li className="text-shadow rounded-md bg-slate-400 p-3 font-bold text-white">
            Lihat semua
          </li>
          <li className="rounded-md bg-slate-400 p-3 font-bold text-white shadow-2xl">
            Kategori satu
          </li>
          <li className="rounded-md bg-slate-400 p-3 font-bold text-white">
            Kategori dua
          </li>
          <li className="rounded-md bg-slate-400 p-3 font-bold text-white">
            Kategori tiga
          </li>
          <li className="rounded-md bg-slate-400 p-3 font-bold text-white">
            Kategori empat
          </li>
        </ul>
      </div>
      <div className="mt-16 grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        <Card lessPadding>
          <Card.Header>
            <Image
              src={"/1.jpg"}
              alt="Gambar Card"
              width={300}
              height={300}
              className="h-60 w-full object-cover"
            />
          </Card.Header>
          <Card.Body>
            <div className="mb-3 flex items-center gap-3">
              <Button className="badge badge-primary rounded-none p-3">
                primary
              </Button>
              <p className="font-semibold">Bacaan 5 menit</p>
            </div>
            <h3 className="text-xl font-semibold">
              Judul Blog Akan Ada di Sini
            </h3>
            <p>Ringkasan blog akan ada di sini.</p>
          </Card.Body>
          <Card.Action position="justify-start">
            <Link
              href={""}
              className="group/link btn btn-ghost rounded-none hover:bg-white hover:underline hover:decoration-2 hover:underline-offset-8"
            >
              Baca selengkapnya{" "}
              <ChevronRight className="transition-all duration-500 group-hover/link:rotate-90" />
            </Link>
          </Card.Action>
        </Card>
        <Card lessPadding>
          <Card.Header>
            <Image
              src={"/1.jpg"}
              alt="Gambar Card"
              width={300}
              height={300}
              className="h-60 w-full object-cover"
            />
          </Card.Header>
          <Card.Body>
            <div className="mb-3 flex items-center gap-3">
              <Button className="badge badge-primary rounded-none p-3">
                primary
              </Button>
              <p className="font-semibold">Bacaan 5 menit</p>
            </div>
            <h3 className="text-xl font-semibold">
              Judul Blog Akan Ada di Sini
            </h3>
            <p>Ringkasan blog akan ada di sini.</p>
          </Card.Body>
          <Card.Action position="justify-start">
            <Link
              href={""}
              className="group/link btn btn-ghost rounded-none hover:bg-white hover:underline hover:decoration-2 hover:underline-offset-8"
            >
              Baca selengkapnya{" "}
              <ChevronRight className="transition-all duration-500 group-hover/link:rotate-90" />
            </Link>
          </Card.Action>
        </Card>
        <Card lessPadding>
          <Card.Header>
            <Image
              src={"/1.jpg"}
              alt="Gambar Card"
              width={300}
              height={300}
              className="h-60 w-full object-cover"
            />
          </Card.Header>
          <Card.Body>
            <div className="mb-3 flex items-center gap-3">
              <Button className="badge badge-primary rounded-none p-3">
                primary
              </Button>
              <p className="font-semibold">Bacaan 5 menit</p>
            </div>
            <h3 className="text-xl font-semibold">
              Judul Blog Akan Ada di Sini
            </h3>
            <p>Ringkasan blog akan ada di sini.</p>
          </Card.Body>
          <Card.Action position="justify-start">
            <Link
              href={""}
              className="group/link btn btn-ghost rounded-none hover:bg-white hover:underline hover:decoration-2 hover:underline-offset-8"
            >
              Baca selengkapnya{" "}
              <ChevronRight className="transition-all duration-500 group-hover/link:rotate-90" />
            </Link>
          </Card.Action>
        </Card>
      </div>
    </section>
  );
};

export default SectionDaftarHeaderBlog;
