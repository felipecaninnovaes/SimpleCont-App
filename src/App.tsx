import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
// import "./App.css";
import { AppRoutes } from "./Routes";
import "./styles/base.css";

function App() {

  return (
  <div className="AppStyle2">
    <AppRoutes/>
  </div>
  )


}

export default App;
