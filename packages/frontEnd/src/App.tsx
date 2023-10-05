import { useRoutes } from "react-router-dom";
import { HomeLayout, Layout } from "router/Layout";
import Login from "views/login/Login";
import { BlogList } from "views/blogList/BlogList";
import { CategoryDetails } from "views/categoryDetails/CategoryDetails";
import { Home } from "views/home/homePage";
import { NotFound } from "views/NotFound/NotFound";
import { Activate } from "views/Activate/Activate";
import { ProtectedRoute } from "router/protectedRoutes";
import { LayoutAdmin } from "router/LayoutAdmin";
import { Dasboard } from "views/admin/admin";
import { Profile } from "views/admin/profile/profile";
import { AddPost } from "views/admin/addPost/addPost";

export function App() {
  const element = useRoutes([
    {
      path: `/`,
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: `category-details`, element: <CategoryDetails /> },
        { path: `blog-list`, element: <BlogList /> },
        { path: `*`, element: <Home /> },
      ],
    },
    !localStorage.getItem("token")
      ? {
          path: `/login`,
          element: <Login />,
        }
      : {
          path: `/dashboard`,
          element: <LayoutAdmin />,
          children: [{ index: true, element: <Dasboard /> }],
        },
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
  ]);
  return element;
}
