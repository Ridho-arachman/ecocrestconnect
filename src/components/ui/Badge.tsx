import { BadgeProps } from "@/types/badge";
import React from "react";

const Badge = ({ children }: BadgeProps) => {
  return <div className="badge badge-primary rounded-none p-3">{children}</div>;
};

export default Badge;
