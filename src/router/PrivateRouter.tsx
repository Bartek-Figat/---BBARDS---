import { Route, Routes } from "react-router-dom";
import Dasboard from "../views/admin/admin";

export function PrivateRouter() {
  return (
    <Routes>
      <Route path="dashboard" element={<Dasboard />} />
    </Routes>
  );
}
