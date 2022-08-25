import { HashRouter } from "react-router-dom";
import { PrivateRouter } from "router/PrivateRouter";
import { PublicRouter } from "./router/PublicRouter";

export function App() {
  return (
    <HashRouter>
      <PublicRouter />
      <PrivateRouter />
    </HashRouter>
  );
}
