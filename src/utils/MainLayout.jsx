import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  const location = useLocation();
  console.log("mainlayout : ", location.pathname)
  return (
    <>
      <Header />
      <div className={` ${(location.pathname == '/betList' || location.pathname == '/cashBanking' || location.pathname == '/playerLogReport/balanceLog') ? " m-[0_auto]" : "content-screen-width m-[0_auto]"}`}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
