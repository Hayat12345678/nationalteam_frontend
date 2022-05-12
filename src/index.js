import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "App";
import { useParam } from "react-router-dom";
import PlayerList from "./components/PlayerList.jst";
const root = ReactDOM.createRoot(document.getElementById(root));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/nationalteam" element={<PlayerList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
