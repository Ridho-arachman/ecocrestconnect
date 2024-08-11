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
  lessPadding = false,
  btn = false,
  btnClassname,
  btnDescription,
}: CardProps) => {
  return (
    <div className="card lg:card-side rounded-none bg-base-100 shadow-xl lg:grid lg:grid-cols-2">
      <div className="card-body m-auto">
        <h2 className="card-title text-4xl font-bold">{title}</h2>
        <p>{description}</p>
        {!!btn && (
          <div className="card-actions justify-start">
            <Button className="btn btn-neutral rounded-none">
              {btnDescription}
            </Button>
            <Button className="btn btn-ghost hover:btn-link hover:text-neutral">
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
          className="object-cover w-full min-h-64 max-h-96 "
        />
      </figure>
    </div>
  );
};

export default CardSide;
