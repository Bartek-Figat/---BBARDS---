import { HashRouter } from "react-router-dom";
import { PrivateRouter } from "router/PrivateRouter";
import { PublicRouter } from "./router/PublicRouter";

function App() {
  return (
    <HashRouter>
      <PublicRouter />
      <PrivateRouter />
    </HashRouter>
  );
}

export default App;
