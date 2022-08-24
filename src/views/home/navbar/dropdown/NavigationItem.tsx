import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface NavigationItemProps {
  path: string;
  children: ReactNode;
}

function NavigationItem({ path, children }: NavigationItemProps) {
  return (
    <li className="p-3 border-b-[1px] border-[#e8e8e8]">
      <Link to={path}>{children}</Link>
    </li>
  );
}

export default NavigationItem;
