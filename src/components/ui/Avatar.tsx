import Image from "next/image";
import { AvatarProps } from "@/types/avatar";

const Avatar = ({ src }: AvatarProps) => {
  return (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <Image alt="avatar" src={src} width={100} height={50} />
      </div>
    </div>
  );
};

export default Avatar;
