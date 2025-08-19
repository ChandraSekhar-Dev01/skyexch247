import { useEffect, useRef, useState } from "react";
import { FaUser, FaSearch, FaSignInAlt, FaPiggyBank, FaUserAlt } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { SearchOutlined } from "@ant-design/icons";
import Login from "../Pages/Auth/Login";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Helper from "../helper";
import Appconfig from "../config/config";
import axios from "axios";
import apiBaseUrl from "../config/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../AuthContext";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {

  const location = useLocation();
  const navigate = useNavigate()

  const inputClass = `
    rounded text-xs 
    bg-white 
    border border-transparent 
    focus:border-black 
    focus:outline-none 
    focus:ring-2 
    focus:ring-[#72bcef] 
    focus:ring-opacity-80 
    transition duration-150
  `;

  const menuItems = [
    { name: "Downline List", url: "/" },
    { name: "My Account", url: "/profile" },
    {
      name: "My Report",
      dropdown: [
        { tab: "Profit/Loss Report by Downline", url: "/myReport/downlineProfitLoss" },
        { tab: "Profit/Loss Report by Market", url: "/myReport/marketProfitLoss" },
      ],
    },
    { name: "BetList", url: "/betList" },
    {
      name: "Risk",
      dropdown: [{ tab: "Risk Management", url: "/riskManagement/riskManagement" }],
    },
    { name: "Banking", url: "/cashBanking" },
    {
      name: "Player Log & Report",
      dropdown: [
        { tab: "Balance Log", url: "playerLogReport/balanceLog" },
        { tab: "Player Betting History", url: "playerLogReport/playerBettingHistory" },
        { tab: "Player Profit and Loss", url: "playerLogReport/playerProfitLoss" },
      ],
    },
  ];


  return (
    <>
      <header className="w-full">
        {/* Top PC Header */}
        <div className="hidden lg:block [background-image:linear-gradient(180deg,_#383838_0%,_#010101_100%)] bg-[#000] pt-3 pb-2 px-4">
          <div className="hidden sm:flex items-center justify-between w-[1350px] m-[0_auto]">
            {/* Logo + Search */}
            <div className="flex items-center gap-4 ml-2">
              <img src="/logo.png" alt="Logo" className="w-14 cursor-pointer" onClick={() => { navigate("/") }} />
            </div>


            {/* for pc view */}
            <div className="flex gap-5 pb-[20px]">
              <ul className="flex items-center">
                <li className="relative ml-[15px] text-[#ffb600]">
                  <span className="text-white h-[15px] leading-[15px] text-[10px] px-[5px] rounded-[4px] bg-black mr-[3px]">
                    MA
                  </span>
                  <strong className="text-[12px]">teamj</strong>
                </li>
                <li className="flex flex-1 w-auto rounded-[4px] text-[#ffb600] relative ml-[15px]">
                  <span className="flex items-center h-auto rounded-[4px_0_0_4px] p-0">
                    <ul className="flex items-center relative w-auto h-full leading-[12px] p-[0_7px]">
                      <li className="relative indent-0 m-0 leading-[24px] font-bold text-[12px]">
                        <span className="inline-block text-[10px] text-[#fff] font-normal h-[15px] leading-[15px] p-[0_5px] rounded bg-[#000] mr-[3px]">Main</span>
                        <strong>PIN 293.00</strong>
                      </li>
                    </ul>
                  </span>
                  <span className="flex justify-center items-center w-[28px] h-[24px] rounded-[4px] bg-[#ffffff1a] cursor-pointer border border-[#000] shadow-[inset_0_1px_0_0_#ffffff80]">
                    <img src="/Images/refresh.svg" alt="" className="h-[14px] bg-no-repeat bg-contain border-[0px] border-[#fff]" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Menu Bar */}
        <nav className="hidden lg:block bg-[#f7c419] border-t border-b border-yellow-500 text-xs font-bold text-black">
          <div className="flex items-center justify-between w-[1350px] m-[0_auto]">
            {/* Menu Items */}
            <div className=" flex ">
              {menuItems.map(({ name, dropdown, url }) => {
                const isActive = location.pathname === url;
                return (
                  <div key={name} className="relative group">
                    {/* Menu Button */}
                    <button
                      onClick={() => { url == "/profile" ? navigate(url, { state: { state: 'summaryPage', accountType: 'parent' } }) : navigate(url) }}
                      className={`px-3 py-1.5 border-r border-[#0003] whitespace-nowrap flex items-center transition-all duration-200 ${isActive
                        ? "bg-[#ffdc7a] text-black shadow-[inset_0_0_5px_0_rgba(83,33,33,0.5)]"
                        : "hover:bg-[#fff3]"
                        }`}
                    >
                      {name}
                      {dropdown && (
                        <span className="w-0 h-0 ml-[10px] align-middle border-l-[3px] border-r-[3px] border-t-[5px] border-b-0 border-l-transparent border-r-transparent border-t-black"></span>
                      )}
                    </button>

                    {/* Dropdown */}
                    {dropdown && (
                      <ul className="absolute hidden group-hover:flex flex-col font-bold bg-[#ffbd14] border-t border-[#00000033] z-[99] w-max">
                        {dropdown.map((item) => (
                          <li
                            key={item.id}
                            className="border-b border-[#00000033] leading-[30px] text-[12px] flex whitespace-nowrap hover:bg-[#fff3] cursor-pointer"
                            onClick={() => { navigate(item.url) }}
                          >
                            <span className="text-[#000] px-[10px]">{item.tab}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}

            </div>

            {/* Right Side */}
            <div className="flex items-center text-xs">
              <div className="text-[#0009] font-extralight p-[0_10px] border-r border-[#0003]">
                Time Zone: <span className="text-[#000] font-bold">GMT+5:30</span>
              </div>
              <div className="flex items-center font-semibold p-[0_10px] border-r border-[#0003]">Logout <img src="/Images/logout.svg" alt="" className="ml-[5px] w-[10px] h-[11px]" /></div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
