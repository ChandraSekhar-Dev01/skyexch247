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
import Accounts from "./Pages/Accounts";
import Profile from "./Pages/Reports/Profile";
import DynamicViewport from "./utils/DynamicViewport";
import Privacy from "./Pages/Regulations/Privacy";
import TermsCondition from "./Pages/Regulations/TermsCondition";
import RulesRegulation from "./Pages/Regulations/RulesRegulation";
import Kyc from "./Pages/Regulations/Kyc";
import ResponsibleGaming from "./Pages/Regulations/ResponsibleGaming";
import AboutUs from "./Pages/Regulations/AboutUs";
import SelfExPolicy from "./Pages/Regulations/SelfExPolicy";
import UnderAgePolicy from "./Pages/Regulations/UnderAgePolicy";
import Result from "./Pages/Result";
import SkyHeader from "./components/SkyLobby/SkyHeader";
import SkyLobbyLayout from "./utils/SkyLobbyLayout";
import Recent from "./components/SkyLobby/skyPages/Recent";
import Favorite from "./components/SkyLobby/skyPages/Favorite";
import Ranking from "./components/SkyLobby/skyPages/Ranking";
import Games from "./components/SkyLobby/skyPages/Games";

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
                <Route path="/sky" element={<SkyHeader />} />
                <Route path="/lobby" element={<SkyLobbyLayout />}>
                  <Route index element={<Ranking />} />
                  <Route path="favorite" element={<Favorite />} />
                  <Route path="recent" element={<Recent />} />
                  <Route path="babe/:type" element={<Games />} />
                </Route>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home />} />
                  <Route path="inPlay" element={<Inplay />} />
                  <Route path="multimarket" element={<Multimarket />} />
                  <Route path="sports" element={<Sports />} />
                  <Route path="eventResult" element={<Result />} />
                  <Route
                    path="matchUpdates/:event_id/:is_inplay"
                    element={<Matchupdate />}
                  />
                  <Route path="account" element={<Accounts />} />
                  <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="privacy" element={<Privacy />} />
                <Route path="siteTerms" element={<TermsCondition />} />
                <Route path="siteRules" element={<RulesRegulation />} />
                <Route path="kyc" element={<Kyc />} />
                <Route path="rg" element={<ResponsibleGaming />} />
                <Route path="au" element={<AboutUs />} />
                <Route
                  path="skyExSelfExclusionPolicy"
                  element={<SelfExPolicy />}
                />
                <Route path="skyUnderagePolicy" element={<UnderAgePolicy />} />
              </Routes>
            </WebSocketContext.Provider>
          </BrowserRouter>
        </TimeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
