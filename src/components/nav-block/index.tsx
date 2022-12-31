import React from "react";
import { NavContainer } from "./styles";

interface NavBlockProps {
  children?: React.ReactNode | React.ReactNode[];
}

export function NavBlock({ children }: NavBlockProps) {
  return <NavContainer>{children}</NavContainer>;
}
