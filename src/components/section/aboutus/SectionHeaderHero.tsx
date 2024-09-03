import Button from "@/ui/Button";
import Image from "next/image";

const SectionHeaderHero = () => {
  return (
    <section className="mt-16">
      <div className="flex flex-col items-center justify-center gap-0">
        <Image
          src="/1.jpg"
          alt="Gambar Header Hero"
          width={700}
          height={500}
          className="h-80 w-full object-cover"
        />
        <div className="grid grid-cols-1 gap-4 p-3 px-4 sm:grid-cols-2 sm:gap-14 md:p-20">
          <h1 className="text-left text-5xl font-bold">
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
              <Button className="btn btn-outline btn-neutral rounded-none text-black">
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
