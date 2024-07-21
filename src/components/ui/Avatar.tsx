import Image from "next/image";

type Props = {
  src: string;
};
const Avatar: React.FC<Props> = ({ src }) => {
  return (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <Image alt="avatar" src={src} width={100} height={50} />
      </div>
    </div>
  );
};

export default Avatar;
