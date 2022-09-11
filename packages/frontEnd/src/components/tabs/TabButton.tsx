import React, { ReactNode } from "react";
import clsx from "clsx";

interface TabButtonProps {
  className?: string;
  selected: boolean;
  children: ReactNode;
}

export function TabButton({ className, selected, children }: TabButtonProps) {
  return (
    <button
      className={clsx(
        `w-full px-9 py-2 text-xs uppercase font-medium leading-6 ${
          selected
            ? "bg-[#F5F5F5] text-[#0044bb] border-b-[3px] border-[#0044bb]"
            : "border-b-[1px] border-[#e8e8e8]"
        }`,
        className
      )}
    >
      {children}
    </button>
  );
}
