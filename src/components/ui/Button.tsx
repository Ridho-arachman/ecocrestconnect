import { ButtonProps } from "@/types/button";

const Button = ({ className, children, onClick }: ButtonProps) => {
  return (
    <button
      aria-label="button"
      type="button"
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
