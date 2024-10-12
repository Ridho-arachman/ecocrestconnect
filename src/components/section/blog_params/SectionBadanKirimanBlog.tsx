import Avatar from "@/ui/Avatar";
import { ChevronRight } from "lucide-react";
import React from "react";

const SectionBadanKirimanBlog = () => {
  return (
    <article className="mx-auto mt-20 max-w-4xl">
      <div className="flex flex-col gap-8">
        <span className="flex text-base">
          <p className="font-semibold">Artikel</p>
          <ChevronRight />
          <p> Linkungan</p>
        </span>
        <p className="text-xl">
          Pada artikel ini, kami akan membahas informasi, tips, dan cerita
          terkait isu-isu lingkungan. Kami akan mengulas berbagai topik seperti
          daur ulang, penghematan energi, pertanian organik, dan masih banyak
          lagi. Dalam artikel ini, Anda akan menemukan pengetahuan baru dan
          solusi praktis untuk melestarikan lingkungan.
        </p>
        <hr className="border-black" />
        <div className="flex flex-col items-center justify-center">
          <Avatar alt="Gambar" src="/1.jpg" width={300} height={300} />
          <p className="mt-2">Muhammad Ridho Arachman</p>
          <p>Direktur, ABC Company</p>
        </div>
      </div>
    </article>
  );
};

export default SectionBadanKirimanBlog;
