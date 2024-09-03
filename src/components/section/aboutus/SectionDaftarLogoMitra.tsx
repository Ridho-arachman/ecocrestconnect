import Image from "next/image";

const SectionDaftarLogoMitra = () => {
  return (
    <section className="mt-16 overflow-x-hidden">
      <h4 className="mb-6 text-center font-bold">
        Daftar mitra dan organisasi yang mendukung inisiatif lingkungan.
      </h4>
      <div className="group-animate grid w-[200vw] grid-cols-2">
        <div className="flex animate-infinitSlide justify-around">
          <Image src={"/logo.ico"} alt="gambar" height={100} width={100} />
          <Image src={"/logo.ico"} alt="gambar" height={100} width={100} />
          <Image src={"/logo.ico"} alt="gambar" height={100} width={100} />
          <Image src={"/logo.ico"} alt="gambar" height={100} width={100} />
        </div>
        <div className="flex animate-infinitSlide justify-around">
          <Image src={"/logo.ico"} alt="gambar" height={100} width={100} />
          <Image src={"/logo.ico"} alt="gambar" height={100} width={100} />
          <Image src={"/logo.ico"} alt="gambar" height={100} width={100} />
          <Image src={"/logo.ico"} alt="gambar" height={100} width={100} />
        </div>
      </div>
    </section>
  );
};

export default SectionDaftarLogoMitra;
