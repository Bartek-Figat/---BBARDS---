import { Route, Routes } from "react-router-dom";

export function PublicRouter() {
  return (
    <Routes>
      <Route path="/" element={<p>HOME</p>} />
    </Routes>
  );
}
