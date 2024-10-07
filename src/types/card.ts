export interface CardProps {
  children: React.ReactNode;
  lessPadding?: boolean;
}

export interface CardHeader {
  children: React.ReactNode;
}

export interface CardBody {
  children: React.ReactNode;
}

export interface ActionCard {
  children: React.ReactNode;
  position?: "justify-end" | "justify-start";
}
