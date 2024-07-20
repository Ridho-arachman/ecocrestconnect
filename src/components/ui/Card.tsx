import Image from "next/image";
import Button from "@/ui/Button";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  description?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  lessPadding?: boolean;
  btn?: boolean;
  btnClassname?: string;
  btnDescription?: string;
};
const Card: React.FC<Props> = ({
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
}) => {
  const normalCard = (
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
        <div className="card-actions justify-end">
          {!!btn && <Button className={btnClassname}>{btnDescription}</Button>}
        </div>
      </div>
    </div>
  );
  return <>{normalCard}</>;
};
export default Card;
