import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <div className=" w-[1350px] m-[0_auto]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
