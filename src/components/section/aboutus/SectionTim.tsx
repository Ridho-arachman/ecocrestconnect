import Avatar from "@/ui/Avatar";
import tim from "@/data/mock/tim.json";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const SectionTim = () => {
  return (
    <section>
      <div className="mt-16 flex flex-col gap-2 text-center">
        <p className="text-sm">Platform</p>
        <h1 className="text-3xl font-bold">Tim Kami</h1>
        <p>Kami adalah tim yang mengelola dan menjalankan platform ini.</p>
      </div>
      <div className="mx-20 mt-7 grid grid-cols-1 gap-y-20 sm:grid-cols-2 lg:grid-cols-4">
        {tim.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center gap-1 text-center"
            key={index}
          >
            <Avatar src={item.src} alt={item.alt} width={50} height={50} />
            <p className="mt-2 font-medium">{item.nama}</p>
            <p>{item.jabatan}</p>
            <p>{item.deskripsi}</p>
            <div className="mt-2 flex gap-4">
              <Linkedin className="cursor-pointer" />
              <Twitter className="cursor-pointer" />
              <Instagram className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTim;
