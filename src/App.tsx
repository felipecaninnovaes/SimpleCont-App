import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
// import "./App.css";
import { AppRoutes } from "./Routes";

function App() {

  return (
  <div >
    <AppRoutes/>
  </div>
  )


}

export default App;
