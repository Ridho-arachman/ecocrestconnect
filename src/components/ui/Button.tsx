type Props = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ className, children, onClick }) => {
  return (
    <>
      <button type="button" className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};
export default Button;
