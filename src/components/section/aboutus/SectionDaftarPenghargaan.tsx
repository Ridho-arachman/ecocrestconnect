import Image from "next/image";

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
        <div className="flex items-center justify-center bg-slate-600">
          <Image
            src={"/logo/logopenghargaan/1.png"}
            alt={"Gambar"}
            width={50}
            height={50}
          />
        </div>
        <div className="flex items-center justify-center bg-slate-600">
          <Image
            src={"/logo/logopenghargaan/2.png"}
            alt={"Gambar"}
            width={50}
            height={50}
          />
        </div>
        <div className="flex items-center justify-center bg-slate-600">
          <Image
            src={"/logo/logopenghargaan/3.png"}
            alt={"Gambar"}
            width={50}
            height={50}
          />
        </div>
        <div className="flex items-center justify-center bg-slate-600">
          <Image
            src={"/logo/logopenghargaan/4.png"}
            alt={"Gambar"}
            width={50}
            height={50}
          />
        </div>
        <div className="flex items-center justify-center bg-slate-600">
          <Image
            src={"/logo/logopenghargaan/5.png"}
            alt={"Gambar"}
            width={50}
            height={50}
          />
        </div>
        <div className="flex items-center justify-center bg-slate-600">
          <Image
            src={"/logo/logopenghargaan/6.png"}
            alt={"Gambar"}
            width={50}
            height={50}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionDaftarPenghargaan;
