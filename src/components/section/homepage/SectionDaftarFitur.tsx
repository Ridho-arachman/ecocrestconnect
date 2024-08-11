import Button from "@/ui/Button";
import Card from "@/ui/card/Card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const SectionDaftarFitur = () => {
  return (
    <section className="flex flex-col items-center px-5 mt-16 justify-center">
      <div className="text-center mb-14">
        <span className="font-bold">EcoCrestConnect</span>
        <div className="mt-6">
          <h2 className="text-3xl font-bold mb-4 px-9">
            Temukan
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 px-2">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 m-auto">
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
        <div className="flex justify-center gap-5 mt-10">
          <Button className="btn btn-outline rounded-none">
            Lihat Selengkapnya
          </Button>
          <Link
            href={""}
            className="btn btn-ghost hover:underline hover:decoration-2 rounded-none hover:bg-white hover:underline-offset-8 group/link"
          >
            Daftar Sekarang{" "}
            <ChevronRight className="group-hover/link:rotate-90" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionDaftarFitur;
