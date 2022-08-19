import { Route } from "react-router-dom";
import Dasboard from "../components/admin/admin";

export function PrivateRouter() {
  return <Route path="dashboard" element={<Dasboard />} />;
}
