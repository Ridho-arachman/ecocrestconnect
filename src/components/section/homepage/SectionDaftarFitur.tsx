import Card from "@/ui/Card";

const SectionDaftarFitur = () => {
  return (
    <section className="flex flex-col items-center px-5 mt-16 justify-center">
      <div className="text-center mb-14">
        <span className="font-medium">Platform</span>
        <div className="mt-6">
          <h2 className="text-3xl font-bold mb-4 px-9">
            Temukan Fitur Utama Kami di Sini
          </h2>
          <p className="md:px-24">
            Kami menyediakan berbagai fitur yang akan membantu Anda terlibat
            dalam pelestarian lingkungan. Dari edukasi hingga kolaborasi,
            temukan apa yang Anda butuhkan di sini.
          </p>
        </div>
      </div>
      <div>
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-3">
          <Card
            alt="Gambar Card"
            title="Edukasi Lingkungan"
            description="Baca artikel, blog, dan tonton video tentang isu-isu lingkungan dan cara melestarikannya."
            src="/1.jpg"
            height={300}
            width={300}
          />
          <Card
            alt="Gambar Card"
            title="Kegiatan dan Event"
            description="Temukan kalender kegiatan lingkungan lokal dan global serta ikut serta dalam acara yang menarik."
            src="/1.jpg"
            height={300}
            width={300}
          />
          <Card
            alt="Gambar Card"
            title="Komunitas Lingkungan"
            description="Bergabunglah dengan forum dan grup diskusi untuk berbagi ide, tips, dan pengalaman tentang pelestarian lingkungan."
            src="/1.jpg"
            height={300}
            width={300}
          />
          <Card
            alt="Gambar Card"
            title="Komunitas Lingkungan"
            description="Bergabunglah dengan forum dan grup diskusi untuk berbagi ide, tips, dan pengalaman tentang pelestarian lingkungan."
            src="/1.jpg"
            height={300}
            width={300}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionDaftarFitur;