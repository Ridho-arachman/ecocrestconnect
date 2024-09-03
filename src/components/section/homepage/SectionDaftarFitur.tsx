import Button from "@/ui/Button";
import Card from "@/ui/card/Card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const SectionDaftarFitur = () => {
  return (
    <section className="mt-16 flex flex-col items-center justify-center px-5">
      <div className="mb-14 text-center">
        <span className="font-bold">EcoCrestConnect</span>
        <div className="mt-6">
          <h2 className="mb-4 px-9 text-3xl font-bold">
            Temukan
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text px-2 text-transparent">
              Fitur Utama
            </span>
            Kami di Sini
          </h2>
          <p className="md:px-24">
            Kami menyediakan berbagai fitur yang akan membantu Anda terlibat
            dalam pelestarian lingkungan. Dari edukasi hingga kolaborasi,
            temukan apa yang Anda butuhkan di sini.
          </p>
        </div>
      </div>
      <div>
        <div className="flex">
          <div className="m-auto grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            <Card
              alt="Gambar Card"
              title="Edukasi Lingkungan"
              description="Baca artikel, blog, dan tonton video tentang isu-isu lingkungan dan cara melestarikannya."
              src="/1.jpg"
              height={300}
              width={300}
            />
            <Card
              alt="Gambar Card"
              title="Kegiatan dan Event"
              description="Temukan kalender kegiatan lingkungan lokal dan global serta ikut serta dalam acara yang menarik."
              src="/1.jpg"
              height={300}
              width={300}
            />
            <Card
              alt="Gambar Card"
              title="Komunitas Lingkungan"
              description="Bergabunglah dengan forum dan grup diskusi untuk berbagi ide, tips, dan pengalaman tentang pelestarian lingkungan."
              src="/1.jpg"
              height={300}
              width={300}
            />
            <Card
              alt="Gambar Card"
              title="Komunitas Lingkungan"
              description="Bergabunglah dengan forum dan grup diskusi untuk berbagi ide, tips, dan pengalaman tentang pelestarian lingkungan."
              src="/1.jpg"
              height={300}
              width={300}
            />
          </div>
        </div>
        <div className="mt-24 flex justify-center gap-5">
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
    </section>
  );
};

export default SectionDaftarFitur;
