import { memo } from "react";

const Accordion = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="collapse collapse-arrow border-t-2 border-black">
      <input type="radio" name="my-accordion-2" defaultChecked />
      {children}
    </div>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  return <div className="collapse-title text-xl font-medium">{children}</div>;
};
const Body = ({ children }: { children: React.ReactNode }) => {
  return <div className="collapse-content">{children}</div>;
};

Accordion.Header = memo(Header);
Accordion.Body = memo(Body);

export default Accordion;
