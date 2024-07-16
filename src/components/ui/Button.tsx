import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ className, children, onClick }) => {
  return (
    <>
      <button
        aria-label="button"
        type="button"
        className={cn("text-white", className)}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
