import Button from "@/ui/Button";
import Image from "next/image";

const SectionHeaderHero = () => {
  return (
    <section className="mt-16">
      <div className="flex flex-col gap-6">
        <Image
          src="/1.jpg"
          alt="Gambar Header Hero"
          width={700}
          height={500}
          className="object-cover w-full h-96"
        />
        <div className="grid grid-cols-2 p-20">
          <h1 className="text-5xl font-bold px-10">
            Menginspirasi dan memfasilitasi pelestarian lingkungan.
          </h1>
          <div className="flex flex-col gap-6">
            <p>
              Kami adalah platform yang mengedukasi, menghubungkan, dan
              memberdayakan individu serta komunitas untuk terlibat dalam
              kegiatan yang mendukung keberlanjutan lingkungan.
            </p>
            <div className="flex gap-3">
              <Button className="btn btn-neutral rounded-none">Mulai</Button>
              <Button className="btn btn-neutral btn-outline rounded-none text-black">
                Daftar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHeaderHero;
