import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import News from "../components/News";
import Helper from "../helper";

function MainLayout() {
  const userInfo = Helper();
  return (
    <>
      <Header />
      {userInfo &&
        <div className="block lg:hidden">
          <News />
        </div>
      }
      <div className="mb-[20vw] lg:mb-24">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
