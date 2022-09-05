import { Route, Routes } from "react-router-dom";
import { Home } from "../views/home";
import Login from "../views/login/login";

export function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
