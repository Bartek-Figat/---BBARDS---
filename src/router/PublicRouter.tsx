import { Route } from "react-router-dom";
import { Home } from "../components/home";

export function PublicRouter() {
  return <Route path="/" element={<Home />} />;
}
