import { ReactNode, useState } from "react";
import clsx from "clsx";
import { FaPlus } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="w-full cursor-pointer">
      <div
        className={clsx(
          "p-3",
          isOpen
            ? "border-b-[2px] border-[#0044bb]"
            : "border-b-[1px] border-[#e8e8e8]"
        )}
        onClick={() => setOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <p>{title}</p>
          <FaPlus size={10} />
        </div>
      </div>

      {isOpen && <div className="w-full shadow-lg">{children}</div>}
    </div>
  );
}

export default AccordionItem;
