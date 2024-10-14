import Avatar from "@/ui/Avatar";

const SectionTestimonial = () => {
  return (
    <section className="mx-auto mt-32 max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <h1 className="text-4xl font-bold">Komentar Postingan</h1>
      <p className="mt-3">
        Baca apa yang dikatakan pelanggan kami tentang artikel kami.
      </p>
      <div className="mt-10 grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-2 lg:grid-cols-3">
        <article>
          <div className="rating rating-md">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>
            “Artikel ini sangat informatif dan membantu saya dalam memahami isu
            lingkungan.”
          </p>
          <div>
            <Avatar src="/1.jpg" alt="Gambar" width={100} height={100} />
            <h4>Nama Lengkap</h4>
            <p>Jabatan, Nama Perusahaan</p>
          </div>
        </article>
        <article>
          <div className="rating rating-md">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>
            “Artikel ini sangat informatif dan membantu saya dalam memahami isu
            lingkungan.”
          </p>
          <div>
            <Avatar src="/1.jpg" alt="Gambar" width={100} height={100} />
            <h4>Nama Lengkap</h4>
            <p>Jabatan, Nama Perusahaan</p>
          </div>
        </article>
        <article>
          <div className="rating rating-md">
            <input
              type="radio"
              name="rating-3"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <p>
            “Artikel ini sangat informatif dan membantu saya dalam memahami isu
            lingkungan.”
          </p>
          <div>
            <Avatar src="/1.jpg" alt="Gambar" width={100} height={100} />
            <h4>Nama Lengkap</h4>
            <p>Jabatan, Nama Perusahaan</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SectionTestimonial;
