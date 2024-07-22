import Image from "next/image";
import Button from "@/ui/Button";
import { cn } from "@/lib/utils";

type CardType = "normal" | "side";

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
  type?: CardType;
};
const Card: React.FC<Props> = ({
  title,
  description,
  src,
  alt,
  height,
  type = "normal",
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
        {!!btn && (
          <div className="card-actions justify-end">
            <Button className={btnClassname}>{btnDescription}</Button>
          </div>
        )}
      </div>
    </div>
  );

  const side = (
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
  return <>{type === "normal" ? normalCard : side}</>;
};
export default Card;
