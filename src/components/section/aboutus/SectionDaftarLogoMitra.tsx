import Image from "next/image";

const SectionDaftarLogoMitra = () => {
  return (
    <section className="mt-16 overflow-x-hidden">
      <h4 className="text-center font-bold mb-6">
        Daftar mitra dan organisasi yang mendukung inisiatif lingkungan.
      </h4>
      <div className="grid grid-cols-2 w-[200vw] group-animate">
        <div className="flex justify-around  animate-infinitSlide">
          <Image src={"/logo.ico"} alt="gambar" height={100} width={100} />
          <Image src={"/logo.ico"} alt="gambar" height={100} width={100} />
          <Image src={"/logo.ico"} alt="gambar" height={100} width={100} />
          <Image src={"/logo.ico"} alt="gambar" height={100} width={100} />
        </div>
        <div className="flex justify-around  animate-infinitSlide">
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
