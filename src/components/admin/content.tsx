import { Outlet } from "react-router-dom";

export const Content: React.FunctionComponent = () => {
  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  );
};
