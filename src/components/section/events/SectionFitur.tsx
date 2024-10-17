import Image from "next/image";

const SectionFitur = () => {
  return (
    <section className="mx-auto mt-28 grid max-w-xs grid-cols-2 gap-10 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <div className="flex flex-col items-center justify-center gap-4 px-20">
        <h4 className="text-3xl font-bold">
          Fitur Utama: Menjelajahi Kegiatan Lingkungan yang Menarik dan
          Bermanfaat
        </h4>
        <p>
          Temukan berbagai artikel, blog, dan video inspiratif tentang isu-isu
          lingkungan serta cara-cara untuk melestarikan lingkungan. Ikuti kursus
          dan webinar kami untuk memperluas pengetahuan Anda tentang daur ulang,
          penghematan energi, pertanian organik, dan topik lainnya.
        </p>
      </div>
      <Image
        src="/1.jpg"
        alt="Gambar Fitur"
        width={500}
        height={500}
        className="mx-auto h-96 object-cover"
      />
    </section>
  );
};

export default SectionFitur;
