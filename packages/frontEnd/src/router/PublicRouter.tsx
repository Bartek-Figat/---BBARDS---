import { Route, Routes } from "react-router-dom";
import { Home } from "../views/home";
import Login from "../views/login/Login";
import { CategoryDetails } from "../views/categoryDetails/CategoryDetails";
import { Layout } from "./Layout";
import { NotFound } from "views/NotFound/NotFound";

export function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="category-details" element={<CategoryDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
