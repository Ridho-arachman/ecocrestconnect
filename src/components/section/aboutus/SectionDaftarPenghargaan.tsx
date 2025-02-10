import Image from "next/image";
import daftarpenghargaan from "@/data/mock/daftarpenghargaan.json";

const SectionDaftarPenghargaan = () => {
  return (
    <section className="mx-20 mb-16 mt-36 gap-5 sm:grid sm:grid-cols-2">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold">Penghargaan dan Pengakuan</h1>
        <p>
          Platform kami telah menerima berbagai penghargaan atas kontribusi
          dalam pelestarian lingkungan.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-2 sm:mt-0">
        {daftarpenghargaan.map((item, index) => (
          <div
            className="relative flex cursor-pointer items-center justify-center bg-slate-600 shadow-sm"
            key={index}
          >
            <Image src={item.src} alt={item.alt} width={50} height={50} />
            <div className="absolute bottom-0 left-0 right-0 top-0 w-full bg-white/5 backdrop-blur-xs transition-all duration-500 hover:backdrop-blur-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionDaftarPenghargaan;
