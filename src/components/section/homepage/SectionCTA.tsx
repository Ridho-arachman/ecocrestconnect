import CardSide from "@/ui/card/CardSide";
import React from "react";

const SectionCTA = () => {
  return (
    <section className="mb-28 mt-28 flex items-center justify-center">
      <div className="m-auto mx-4 border-2 border-black md:mx-10">
        <CardSide
          btn
          btnClassname="btn btn-neutral rounded-none "
          btnDescription="Daftar"
          alt="Gambar Card"
          title="Mulai Berkontribusi untuk Lingkungan"
          description="Bergabunglah dengan platform kami dan mulai berpartisipasi dalam upaya pelestarian lingkungan."
          height={300}
          width={300}
          src="/1.jpg"
        />
      </div>
    </section>
  );
};

export default SectionCTA;
