import Image from "next/image";

const SectionDaftarLogoMitra = () => {
  return (
    <section className="mt-16 overflow-x-hidden">
      <h4 className="mb-6 text-center font-bold">
        Daftar mitra dan organisasi yang mendukung inisiatif lingkungan.
      </h4>
      <div className="group/animate grid w-[200vw] grid-cols-2">
        <div className="flex animate-infinitSlide justify-around group-hover/animate:paused">
          <Image
            src={"/logo/logoapp/logo.ico"}
            alt="gambar"
            height={100}
            width={100}
            className="cursor-pointer grayscale hover:grayscale-0"
          />
          <Image
            src={"/logo/logoapp/logo.ico"}
            alt="gambar"
            height={100}
            width={100}
            className="cursor-pointer grayscale hover:grayscale-0"
          />
          <Image
            src={"/logo/logoapp/logo.ico"}
            alt="gambar"
            height={100}
            width={100}
            className="cursor-pointer grayscale hover:grayscale-0"
          />
          <Image
            src={"/logo/logoapp/logo.ico"}
            alt="gambar"
            height={100}
            width={100}
            className="cursor-pointer grayscale hover:grayscale-0"
          />
        </div>
        <div className="flex animate-infinitSlide justify-around group-hover/animate:paused">
          <Image
            src={"/logo/logoapp/logo.ico"}
            alt="gambar"
            height={100}
            width={100}
            className="cursor-pointer grayscale hover:grayscale-0"
          />
          <Image
            src={"/logo/logoapp/logo.ico"}
            alt="gambar"
            height={100}
            width={100}
            className="cursor-pointer grayscale hover:grayscale-0"
          />
          <Image
            src={"/logo/logoapp/logo.ico"}
            alt="gambar"
            height={100}
            width={100}
            className="cursor-pointer grayscale hover:grayscale-0"
          />
          <Image
            src={"/logo/logoapp/logo.ico"}
            alt="gambar"
            height={100}
            width={100}
            className="cursor-pointer grayscale hover:grayscale-0"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionDaftarLogoMitra;
