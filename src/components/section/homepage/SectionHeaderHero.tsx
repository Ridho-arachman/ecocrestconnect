import Button from "@/ui/Button";

const SectionHeaderHero = () => {
  return (
    <section
      className="hero min-h-screen mt-16"
      style={{
        backgroundImage: "url(/1.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md lg:max-w-lg text-white">
          <h1 className="mb-5 text-4xl font-bold">
            Platform Pelestarian Lingkungan yang Menginspirasi dan Memfasilitasi
          </h1>
          <p className="mb-5 text-lg">
            Bergabunglah dengan kami dalam upaya pelestarian lingkungan untuk
            masa depan yang lebih baik.
          </p>
          <Button className="btn btn-primary text-lg">Gabung</Button>
        </div>
      </div>
    </section>
  );
};

export default SectionHeaderHero;
