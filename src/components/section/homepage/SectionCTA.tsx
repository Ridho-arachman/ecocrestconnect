import CardSide from "@/ui/card/CardSide";
import React from "react";

const SectionCTA = () => {
  return (
    <section className="mt-28 flex justify-center items-center mb-28">
      <div className="m-auto border-2 border-black mx-4 md:mx-10">
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
