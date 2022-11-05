import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  </Provider>
);
