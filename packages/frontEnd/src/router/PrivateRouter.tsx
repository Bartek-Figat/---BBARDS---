import { Route, Routes } from "react-router-dom";
import { Dasboard } from "../views/admin/admin";
import { AddPost } from "views/admin/addPost/addPost";
import { Profile } from "views/admin/profile/profile";
import { LayoutAdmin } from "./LayoutAdmin";
import { ProtectedRoute } from "../router/protectedRoutes";

export function PrivateRouter() {
  return (
    <Routes>
      <Route path="dashboard" element={<LayoutAdmin />}>
        <Route index element={<Dasboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="addPost" element={<AddPost />} />
      </Route>
    </Routes>
  );
}
