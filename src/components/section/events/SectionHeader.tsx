const SectionHeader = () => {
  return (
    <section
      className="hero mt-16 aspect-[15/3]"
      style={{
        backgroundImage: "url(/1.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-5xl font-bold">Proyek Lingkungan</h1>
          <p className="mb-5">
            Menginspirasi dan memfasilitasi keterlibatan dalam proyek
            pelestarian lingkungan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
