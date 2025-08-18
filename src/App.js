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
import PLDownline from "./Pages/Reports/My Report/PLDownline";
import PLMarket from "./Pages/Reports/My Report/PLMarket";
import BetList from "./Pages/Reports/BetList";
import Banking from "./Pages/Reports/Banking";
import PlayerPL from "./Pages/Reports/PlayerLog&Report/PlayerPL";
import PlayerBettingHistory from "./Pages/Reports/PlayerLog&Report/PlayerBettingHistory";

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
                  <Route
                    path="myReport/downlineProfitLoss"
                    element={<PLDownline />}
                  />
                  <Route
                    path="myReport/marketProfitLoss"
                    element={<PLMarket />}
                  />
                  <Route path="betList" element={<BetList />} />
                  <Route path="cashBanking" element={<Banking />} />
                  <Route path="playerProfitLoss" element={<PlayerPL />} />
                  <Route
                    path="playerBettingHistory"
                    element={<PlayerBettingHistory />}
                  />
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
