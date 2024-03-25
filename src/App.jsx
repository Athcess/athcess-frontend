import { useState, useEffect, createContext, useContext } from "react";
import AppRouter from "./Router/Router.jsx";
import { io } from "socket.io-client";

const socket = io("<http://localhost:3000>");

function App() {
  return (
    <>
      <AppRouter></AppRouter>
    </>
  );
}

export default App;
