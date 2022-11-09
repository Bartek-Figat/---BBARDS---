import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { userApi } from "./services/FetchUserData";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApiProvider api={userApi}>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </ApiProvider>
  </React.StrictMode>
);
