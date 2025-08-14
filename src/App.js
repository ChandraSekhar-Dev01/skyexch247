import React from "react";
import Header from "./components/Header";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./utils/MainLayout";
import { AuthProvider } from "./AuthContext";
import { TimeProvider } from "./TimeContext/TimeContext";
import { socket, WebSocketContext } from "./Context/websocket";
import Login from "./Pages/Auth/Login";
import DynamicViewport from "./utils/DynamicViewport";
import Downline from "./Pages/Downline";
import Profile from "./Pages/Reports/Profile";

function App() {
  return (
    <>
      {" "}
      <AuthProvider>
        <TimeProvider>
          <BrowserRouter>
            <DynamicViewport />
            <WebSocketContext.Provider value={socket}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Downline />} />
                  <Route path="profile" element={<Profile />} />
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
