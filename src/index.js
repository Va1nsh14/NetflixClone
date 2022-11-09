import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// import { store } from "./app/store";
import { Provider } from "react-redux";
import store from "./app/store";
// import router from "./app/router";
// import { sync } from "vuex-router-sync";

// sync(store, router);

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
