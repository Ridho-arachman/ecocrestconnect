import Link from "next/link";
import Image from "next/image";
import Button from "@/ui/Button";
import Card from "@/ui/card/Card";
import { ChevronRight } from "lucide-react";
import daftarfitur from "@/data/mock/daftarfitur.json";

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
            {daftarfitur.map((item, index) => (
              <Card key={index}>
                <Card.Header>
                  <Image
                    alt={item.alt}
                    src={item.src}
                    height={300}
                    width={300}
                    className="h-64 w-full object-cover"
                  />
                </Card.Header>
                <Card.Body>
                  <div className="flex flex-col items-center">
                    <h2 className="card-title font-semibold">{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                  <Card.Action>
                    <Button>Masuk</Button>
                  </Card.Action>
                </Card.Body>
              </Card>
            ))}
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
