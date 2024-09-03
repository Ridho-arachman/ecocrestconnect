import Avatar from "@/ui/Avatar";
import Image from "next/image";

const SectionTestimonial = () => {
  return (
    <section className="mt-16 flex flex-col gap-10">
      <div className="flex justify-center items-center mt-16">
        <Image src={"/logo.ico"} alt="Gambar Icon" width={30} height={0} />
        <h1 className="text-xl font-black ml-2">EcoCrestConnect</h1>
      </div>
      <div className="m-auto flex">
        <div>
          <h4 className="text-2xl font-bold text-center w-4/5 m-auto">
            Platform ini benar-benar mengubah cara saya melihat lingkungan. Saya
            sekarang lebih sadar akan pentingnya pelestarian alam.
          </h4>
          <div className="[&>p]:font-medium flex flex-col justify-center items-center mt-10">
            <Avatar src={"/1.jpg"} />
            <p className="mt-2">Muhammad Ridho Arachman</p>
            <p>Direktur, ABC Company</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTestimonial;
