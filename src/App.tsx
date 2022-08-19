import { BrowserRouter, Routes } from "react-router-dom";
import { PrivateRouter } from "router/PrivateRouter";
import { PublicRouter } from "./router/PublicRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <PublicRouter />
        <PrivateRouter />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
