import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../views/admin/admin";
import { AddPost } from "views/admin/addPost/addPost";
import { Profile } from "views/admin/profile/profile";
import { LayoutAdmin } from "./LayoutAdmin";

export function PrivateRouter() {
  return (
    <Routes>
      <Route path="dashboard" element={<LayoutAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="addPost" element={<AddPost />} />
      </Route>
    </Routes>
  );
}
