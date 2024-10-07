import { memo } from "react";
import { cn } from "@/lib/utils";
import { ActionCard, CardBody, CardHeader, CardProps } from "@/types/card";

const Card = ({ children, lessPadding = false }: CardProps) => {
  return (
    <article
      className={cn(
        "card min-w-64 max-w-80 bg-base-100 shadow-xl",
        !!lessPadding && "card-compact",
      )}
    >
      {children}
    </article>
  );
};

const Header = ({ children }: CardHeader) => {
  return <figure>{children}</figure>;
};

const Body = ({ children }: CardBody) => {
  return <div className="card-body">{children}</div>;
};

const Action = ({ children, position }: ActionCard) => {
  if (!position) return false;
  return <div className={`card-actions ${position}`}>{children}</div>;
};

Card.Header = memo(Header);
Card.Body = memo(Body);
Card.Action = memo(Action);

export default Card;
