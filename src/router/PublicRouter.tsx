import { Route, Routes } from "react-router-dom";
import { Home } from "../components/home";

export function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}