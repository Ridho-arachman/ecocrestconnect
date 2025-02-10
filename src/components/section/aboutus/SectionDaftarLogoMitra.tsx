import Image from "next/image";
import daftarlogomitra from "@/data/mock/daftarlogomitra.json";

const SectionDaftarLogoMitra = () => {
  return (
    <section className="mt-28 overflow-x-hidden">
      <h4 className="mb-5 text-center font-bold">
        Daftar mitra dan organisasi yang mendukung inisiatif lingkungan.
      </h4>
      <div className="group/animate mb-16 grid w-[200vw] grid-cols-2">
        <div className="animate-infinit-slide group-hover/animate:paused flex justify-around">
          {daftarlogomitra.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              height={100}
              width={100}
              className="cursor-pointer grayscale transition-all duration-700 hover:grayscale-0"
            />
          ))}
        </div>
        <div className="animate-infinit-slide group-hover/animate:paused flex justify-around">
          {daftarlogomitra.map((item, index) => (
            <Image
              key={index}
              src={item.src}
              alt={item.alt}
              height={100}
              width={100}
              className="cursor-pointer grayscale transition-all duration-700 hover:grayscale-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionDaftarLogoMitra;
