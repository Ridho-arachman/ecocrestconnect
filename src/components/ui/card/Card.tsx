import Image from "next/image";
import Button from "@/ui/Button";
import { cn } from "@/lib/utils";
import { CardProps } from "@/types/card";

const Card = ({
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
    <div
      className={cn(
        "card bg-base-100 max-w-80 min-w-64 shadow-xl",
        !!lessPadding && "card-compact"
      )}
    >
      <figure>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="object-cover w-full h-80"
        />
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title font-semibold">{title}</h2>
        <p>{description}</p>
        {!!btn && (
          <div className="card-actions justify-end">
            <Button className={btnClassname}>{btnDescription}</Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Card;
