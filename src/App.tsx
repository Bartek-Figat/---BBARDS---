import { BrowserRouter } from "react-router-dom";
import { PrivateRouter } from "router/PrivateRouter";
import { PublicRouter } from "./router/PublicRouter";

function App() {
  return (
    <BrowserRouter>
      <PublicRouter />
      <PrivateRouter />
    </BrowserRouter>
  );
}

export default App;
