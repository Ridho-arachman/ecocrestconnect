import Card from "@/ui/Card";

const SectionCaraKerja = () => {
  return (
    <section className="mt-16 text-center">
      <div className=" flex">
        <h1 className="text-3xl font-bold mt-16 mx-auto sm:w-3/4 sm:text-4xl  ">
          Panduan Penggunaan Platform untuk Edukasi dan Kolaborasi
        </h1>
      </div>
      <div className="flex mt-16">
        <div className="m-auto grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          <Card
            alt="Gambar Card"
            title="Panduan Penggunaan Platform untuk Berpartisipasi dalam Kegiatan"
            description="Temukan cara menggunakan platform ini untuk mendapatkan edukasi tentang lingkungan, berpartisipasi dalam kegiatan lingkungan, dan berkolaborasi dalam proyek lingkungan."
            height={300}
            width={300}
            src="/1.jpg"
            btn
            lessPadding
            btnClassname="btn btn-primary"
            btnDescription="Mulai"
          />
          <Card
            alt="Gambar Card"
            title="Panduan Penggunaan Platform untuk Kolaborasi Proyek"
            description="Temukan cara menggunakan platform ini untuk berkolaborasi dalam proyek lingkungan dan mendukung proyek-proyek yang membutuhkan dana."
            height={300}
            width={300}
            src="/1.jpg"
            btn
            lessPadding
            btnClassname="btn btn-primary"
            btnDescription="Mulai"
          />
          <Card
            alt="Gambar Card"
            title="Panduan Penggunaan Platform untuk Komunitas"
            description="Temukan cara menggunakan platform ini untuk bergabung dalam komunitas lingkungan, berbagi ide dan pengalaman, serta melihat profil pengguna lainnya."
            height={300}
            width={300}
            src="/1.jpg"
            btn
            lessPadding
            btnClassname="btn btn-primary"
            btnDescription="Mulai"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionCaraKerja;
