import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import styles from "./scss/Index.module.scss";
import "@mantine/core/styles.css";

import { MainProvider } from "./Provider/MainProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <App></App>
    </MainProvider>
  </React.StrictMode>
);
