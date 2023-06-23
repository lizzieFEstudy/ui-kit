import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "redux/config/configStore";
import GlobalModal from "components/modal/GlobalModal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalModal />
      <App />
    </Provider>
  </React.StrictMode>
);
