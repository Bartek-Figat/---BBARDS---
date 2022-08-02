import { Outlet } from "react-router-dom";

export const Content: React.FunctionComponent = () => {
  return (
    <div className="bg-gray-400 h-full w-full">
      <Outlet />
    </div>
  );
};
