import React from "react";
import Header from "./components/Header";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./utils/MainLayout";
import Home from "./Pages/Home";
import { AuthProvider } from "./AuthContext";
import { TimeProvider } from "./TimeContext/TimeContext";
import { socket, WebSocketContext } from "./Context/websocket";
import Inplay from "./Pages/Inplay";
import Sports from "./Pages/Sports";
import Login from "./Pages/Auth/Login";
import Multimarket from "./Pages/Multimarket";
import Matchupdate from "./Pages/Matchupdate";

function App() {
  return (
    <>
      {" "}
      <AuthProvider>
        <TimeProvider>
          <BrowserRouter>
            <WebSocketContext.Provider value={socket}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="inPlay" element={<Inplay />} />
                  <Route path="multimarket" element={<Multimarket />} />
                  <Route path="sports" element={<Sports />} />
                  <Route path="matchUpdate" element={<Matchupdate />} />
                </Route>
              </Routes>
            </WebSocketContext.Provider>
          </BrowserRouter>
        </TimeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
