import Button from "@/ui/Button";
import Image from "next/image";

const SectionManfaat = () => {
  return (
    <section className="mt-24 px-5 md:px-10">
      <div className="md:grid md:grid-cols-2">
        <div className="md:px-6">
          <div>
            <h4 className="mb-4 font-medium">Bergabung</h4>
            <div>
              <h1 className="mb-4 text-4xl font-bold">
                Manfaat Bergabung dengan Platform Ini
              </h1>
              <p>
                Bergabunglah dengan platform ini dan dapatkan manfaatnya bagi
                individu, komunitas, dan bisnis. Temukan artikel, blog, dan
                video inspiratif tentang pelestarian lingkungan. Ikuti kursus
                dan webinar yang membahas topik-topik penting seperti daur
                ulang, penghematan energi, dan pertanian organik. Jelajahi
                kalender kegiatan lingkungan dan bergabunglah dalam acara lokal
                dan global. Sertai forum dan grup diskusi untuk berbagi ide,
                tips, dan pengalaman dengan komunitas yang peduli terhadap
                lingkungan. Mulai proyek lingkungan dan dapatkan dukungan dari
                platform ini. Juga, nikmati gamifikasi dengan poin dan badge
                untuk aktivitas dan partisipasi Anda.
              </p>
            </div>
          </div>
          <div className="mb-6 mt-5">
            <Button className="btn btn-outline rounded-none">Gabung</Button>
          </div>
        </div>
        <div className="md:flex md:items-center md:justify-center">
          <Image
            src={"/1.jpg"}
            alt="Gambar Manfaat"
            width={600}
            height={300}
            className="mx-auto h-64 object-cover md:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionManfaat;
