import Avatar from "@/ui/Avatar";
import Image from "next/image";

const SectionTestimonial = () => {
  return (
    <section className="mt-16 flex flex-col gap-10">
      <div className="mt-16 flex items-center justify-center">
        <Image
          src={"/logo/logoapp/logo.ico"}
          alt="Gambar Icon"
          width={30}
          height={0}
        />
        <h1 className="ml-2 text-xl font-black">EcoCrestConnect</h1>
      </div>
      <div className="m-auto flex">
        <div>
          <h4 className="m-auto w-4/5 text-center text-2xl font-bold">
            Platform ini benar-benar mengubah cara saya melihat lingkungan. Saya
            sekarang lebih sadar akan pentingnya pelestarian alam.
          </h4>
          <div className="mt-10 flex flex-col items-center justify-center [&>p]:font-medium">
            <Avatar src={"/1.jpg"} alt="Gambar" width={100} height={100} />
            <p className="mt-2">Muhammad Ridho Arachman</p>
            <p>Direktur, ABC Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonial;
