import Button from "@/ui/Button";

const SectionHeaderHero = () => {
  return (
    <section
      className="hero mt-16 min-h-screen"
      style={{
        backgroundImage: "url(/1.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white lg:max-w-lg">
          <h1 className="mb-5 text-4xl font-bold">
            Platform Pelestarian Lingkungan yang Menginspirasi dan Memfasilitasi
          </h1>
          <p className="mb-5 text-lg">
            Bergabunglah dengan kami dalam upaya pelestarian lingkungan untuk
            masa depan yang lebih baik.
          </p>
          <Button className="btn btn-primary text-lg text-white">Gabung</Button>
        </div>
      </div>
    </section>
  );
};

export default SectionHeaderHero;
