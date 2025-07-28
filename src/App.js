import React from "react";
import Header from "./components/Header";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./utils/MainLayout";
import Home from "./Pages/Home";
import { AuthProvider } from "./AuthContext";
import { TimeProvider } from "./TimeContext/TimeContext";
import { socket, WebSocketContext } from "./Context/websocket";

function App() {
  return (
    <>
      {" "}
      <AuthProvider>
        <TimeProvider>
          <BrowserRouter>
            <WebSocketContext.Provider value={socket}>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  {/* <Route
              path="all-games-lobby"
              element={
                <PrivateRoute>
                  <AllGamesLobby />
                </PrivateRoute>
              }
            /> */}
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
