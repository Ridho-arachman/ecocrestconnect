import { CardProps } from "@/types/card";
import Image from "next/image";
import Button from "../Button";

const CardSide = ({
  title,
  description,
  src,
  alt,
  height,
  width,
  btn = false,
  btnDescription,
}: CardProps) => {
  return (
    <div className="card rounded-none bg-base-100 shadow-xl lg:card-side lg:grid lg:grid-cols-2">
      <div className="card-body m-auto">
        <h2 className="card-title text-4xl font-bold">{title}</h2>
        <p>{description}</p>
        {!!btn && (
          <div className="card-actions justify-start">
            <Button className="btn btn-neutral rounded-none">
              {btnDescription}
            </Button>
            <Button className="btn btn-ghost text-black hover:btn-link hover:text-neutral">
              Bergabung
            </Button>
          </div>
        )}
      </div>
      <figure>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="max-h-96 min-h-64 w-full object-cover"
        />
      </figure>
    </div>
  );
};

export default CardSide;
