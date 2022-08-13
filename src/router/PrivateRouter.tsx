import { Route, Routes } from "react-router-dom";
import Dasboard from "../components/admin/admin";

export function PrivateRouter() {
  return (
    <Routes>
      <Route
        path="dashboard"
        element={
          <div className="flex h-screen w-scree bg-[#f2f2f4]">
            <Dasboard />
          </div>
        }
      />
    </Routes>
  );
}
