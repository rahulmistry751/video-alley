import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { VideoContextProvider } from "./context/video-context";
import { AuthContextProvider } from "./context/auth-context";
import { createRoot } from "react-dom/client";
// Call make Server
makeServer();
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
    <AuthContextProvider>
      <VideoContextProvider>
      <App />
      </VideoContextProvider>
    </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
