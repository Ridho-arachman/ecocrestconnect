import Button from "@/ui/Button";
import Image from "next/image";

const SectionHeaderHero = () => {
  return (
    <section className="mt-16">
      <div className="flex flex-col justify-center items-center gap-0">
        <Image
          src="/1.jpg"
          alt="Gambar Header Hero"
          width={700}
          height={500}
          className="object-cover w-full h-80"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-14 px-4 md:p-20 p-3">
          <h1 className="text-5xl font-bold text-left">
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
