import React, { ReactNode } from "react";

interface TabButtonProps {
  selected: boolean;
  children: ReactNode;
}

function TabButton({ selected, children }: TabButtonProps) {
  return (
    <button
      className={`px-9 py-2 text-xs uppercase font-medium leading-6 ${
        selected
          ? "bg-[#F5F5F5] text-[#0044bb] border-b-[3px] border-[#0044bb]"
          : "border-b-[1px] border-[#e8e8e8]"
      }`}
    >
      {children}
    </button>
  );
}
export default TabButton;
