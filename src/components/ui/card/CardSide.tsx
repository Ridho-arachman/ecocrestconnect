import { CardProps } from "@/types/card";
import Image from "next/image";
import Button from "../Button";

const CardSide = () => {
  return (
    <div className="card rounded-none bg-base-100 shadow-xl lg:card-side lg:grid lg:grid-cols-2">
      <div className="card-body m-auto">
        <h2 className="card-title text-4xl font-bold">
          Mulai Berkontribusi untuk Lingkungan
        </h2>
        <p>
          Bergabunglah dengan platform kami dan mulai berpartisipasi dalam upaya
          pelestarian lingkungan.
        </p>
        <div className="card-actions justify-start">
          <Button className="btn btn-neutral rounded-none">Daftar</Button>
          <Button className="btn btn-ghost text-black hover:btn-link hover:text-neutral">
            Bergabung
          </Button>
        </div>
      </div>
      <figure>
        <Image
          src={"/1.jpg"}
          alt="Gambar Card"
          width={300}
          height={300}
          className="max-h-96 min-h-64 w-full object-cover"
        />
      </figure>
    </div>
  );
};

export default CardSide;
