import { ReactNode } from "react";

interface AccordionProps {
  children: ReactNode;
}

function Accordion({ children }: AccordionProps) {
  return <div className="w-full">{children}</div>;
}

export default Accordion;
