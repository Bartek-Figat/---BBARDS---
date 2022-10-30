import { Route, Routes } from "react-router-dom";
import { Home } from "../views/home";
import Login from "../views/login/Login";
import { CategoryDetails } from "../views/categoryDetails/CategoryDetails";
import { Layout } from "./Layout";
import { NotFound } from "views/NotFound/NotFound";
import { BlogList } from "../views/blogList/BlogList";

export function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category-details" element={<CategoryDetails />} />
        <Route path="blog-list" element={<BlogList />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
