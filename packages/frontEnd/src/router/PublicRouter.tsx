import { Route, Routes } from "react-router-dom";
import { Home } from "../views/home";
import Login from "../views/login/Login";
import { Layout } from "./Layout";

export function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
