import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import UserInterface from "./App/Interface.tsx";
import Background from "./App/Background.tsx";
import ActionButtons from "./App/ActionButtons";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div id="Canvas" className=" w-screen h-screen overflow-hidden">
      <ActionButtons />
      <Background />
      <UserInterface />
    </div>
  </React.StrictMode>
);
