import Image from "next/image";
import { AvatarProps } from "@/types/avatar";

const Avatar = ({ src, alt, height, width }: AvatarProps) => {
  return (
    <div className="avatar">
      <div className="w-20 rounded-full">
        <Image alt={alt} src={src} width={width} height={height} />
      </div>
    </div>
  );
};

export default Avatar;
