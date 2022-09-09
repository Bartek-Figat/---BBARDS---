import { ReactNode } from "react";

interface AccordionProps {
  children: ReactNode;
}

export function Accordion({ children }: AccordionProps) {
  return <div className="w-full">{children}</div>;
}
