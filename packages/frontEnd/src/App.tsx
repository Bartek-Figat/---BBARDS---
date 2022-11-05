import { Navigate, useRoutes } from "react-router-dom";
import { Layout } from "router/Layout";
import Login from "views/login/Login";
import { BlogList } from "views/blogList/BlogList";
import { CategoryDetails } from "views/categoryDetails/CategoryDetails";
import { Home } from "views/home";
import { NotFound } from "views/NotFound/NotFound";
import { Activate } from "views/Activate/Activate";
import { ProtectedRoute } from "router/protectedRoutes";
import { LayoutAdmin } from "router/LayoutAdmin";
import { Dasboard } from "views/admin/admin";
import { Profile } from "views/admin/profile/profile";
import { AddPost } from "views/admin/addPost/addPost";

const token = localStorage.getItem("token") || null;

export const routes = [
  {
    path: `/`,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: `category-details`, element: <CategoryDetails /> },
      { path: `blog-list`, element: <BlogList /> },
      { path: `*`, element: <NotFound /> },
    ],
  },
  { path: `/login`, element: <Login /> },
  { path: `/activate/:token`, element: <Activate /> },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: `/dashboard`,
        element: <LayoutAdmin />,
        children: [
          { index: true, element: <Dasboard /> },
          { path: `profile`, element: <Profile /> },
          { path: `addPost`, element: <AddPost /> },
        ],
      },
    ],
  },
];

export function App() {
  const element = useRoutes(routes);
  return <>{element}</>;
}
