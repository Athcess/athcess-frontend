import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import styles from "./scss/index.module.scss";
import "@mantine/core/styles.css";

import { MainProvider } from "./Provider/MainProvider";
import { AuthProvider } from 'react-auth-kit'




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
        <App></App>
    </MainProvider>
  </React.StrictMode>
);
