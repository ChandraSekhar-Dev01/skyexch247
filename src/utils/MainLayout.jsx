import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <div className="mb-24">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
