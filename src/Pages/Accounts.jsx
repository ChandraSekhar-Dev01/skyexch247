import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Helper from '../helper';
import { useAuth } from '../AuthContext';
import { RightOutlined } from '@ant-design/icons';

function Accounts() {
  const navigate = useNavigate();
  const userInfo = Helper();
  const { login, logout, setShowLoginModel } = useAuth();
  const handleLogout = () => {
    navigate('/');
    logout();
    // setShowSidebar(false);
  };
  return (
    <>
      <div className="w-full bg-[#f0ece1]">
        <div className="flex text-white items-center justify-between px-2 bg-[#1e1e1e]">
          <div className=" flex justify-center items-center gap-1">
            <img src="/Images/accountUser.svg" alt="" className='w-[5.3333333333vw] h-[5.3333333333vw]' />
            <h1 className="text-white text-[3.4666666667vw] font-bold">
              {" "}
              {userInfo?.user_name}{" "}
            </h1>
          </div>

          <h2 className="text-white text-[3.4666666667vw] font-bold py-2 border-l border-[#4b4b4b]">
            <span className='pl-2'>GMT+5:30</span>
          </h2>
        </div>

        <ul className="text-[#2789ce] mb-[5.3333333333vw] bg-white border-b border-[#7e97a7]">
          <Link to={"/profile"} state={{ state: 'profilePage' }} className="text-[4vw] font-bold p-2 border-b border-[#e0e6e6] flex justify-between items-center" style={{ fontFamily: "Helvetica, Tahoma, sans-serif", borderBottom: "1px solid #e0e6e6", lineHeight: "1.6" }}>
            My Profile
            <img src="/Images/right-angle.svg" alt="" className="text-black font-bold text-center flex justify-center items-center h-[6.4vw] w-[6.4vw] rounded border border-[#e0e6e6]" />
          </Link>
          <Link to={"/profile"} state={{ state: 'summaryPage' }} className="text-[4vw] font-bold p-2 border-b border-[#e0e6e6] flex justify-between items-center" style={{ fontFamily: "Helvetica, Tahoma, sans-serif", borderBottom: "1px solid #e0e6e6", lineHeight: "1.6" }}>
            Balance Overview
            <img src="/Images/right-angle.svg" alt="" className="text-black font-bold text-center flex justify-center items-center h-[6.4vw] w-[6.4vw] rounded border border-[#e0e6e6]" />
          </Link>
          <Link to={"/profile"} state={{ state: 'accountStatement' }} className="text-[4vw] font-bold p-2 border-b border-[#e0e6e6] flex justify-between items-center" style={{ fontFamily: "Helvetica, Tahoma, sans-serif", borderBottom: "1px solid #e0e6e6", lineHeight: "1.6" }}>
            Account Statement
            <img src="/Images/right-angle.svg" alt="" className="text-black font-bold text-center flex justify-center items-center h-[6.4vw] w-[6.4vw] rounded border border-[#e0e6e6]" />
          </Link>
          <Link to={"/profile"} state={{ state: 'bets', eventType: 'cb' }} className="text-[4vw] font-bold p-2 border-b border-[#e0e6e6] flex justify-between items-center" style={{ fontFamily: "Helvetica, Tahoma, sans-serif", borderBottom: "1px solid #e0e6e6", lineHeight: "1.6" }}>
            My Bets
            <img src="/Images/right-angle.svg" alt="" className="text-black font-bold text-center flex justify-center items-center h-[6.4vw] w-[6.4vw] rounded border border-[#e0e6e6]" />
          </Link>
          <Link to={"/profile"} state={{ state: 'bets', eventType: 'bh' }} className="text-[4vw] font-bold p-2 border-b border-[#e0e6e6] flex justify-between items-center" style={{ fontFamily: "Helvetica, Tahoma, sans-serif", borderBottom: "1px solid #e0e6e6", lineHeight: "1.6" }}>
            Bets History
            <img src="/Images/right-angle.svg" alt="" className="text-black font-bold text-center flex justify-center items-center h-[6.4vw] w-[6.4vw] rounded border border-[#e0e6e6]" />
          </Link>
          <Link to={"/profile"} state={{ state: 'bets', eventType: 'pl' }} className="text-[4vw] font-bold p-2 border-b border-[#e0e6e6] flex justify-between items-center" style={{ fontFamily: "Helvetica, Tahoma, sans-serif", borderBottom: "1px solid #e0e6e6", lineHeight: "1.6" }}>
            Profit & Loss
            <img src="/Images/right-angle.svg" alt="" className="text-black font-bold text-center flex justify-center items-center h-[6.4vw] w-[6.4vw] rounded border border-[#e0e6e6]" />
          </Link>
          <Link to={"/profile"} state={{ state: 'log' }} className="text-[4vw] font-bold p-2 border-b border-[#e0e6e6] flex justify-between items-center" style={{ fontFamily: "Helvetica, Tahoma, sans-serif", borderBottom: "1px solid #e0e6e6", lineHeight: "1.6" }}>
            Activity Log
            <img src="/Images/right-angle.svg" alt="" className="text-black font-bold text-center flex justify-center items-center h-[6.4vw] w-[6.4vw] rounded border border-[#e0e6e6]" />
          </Link>
        </ul>

        <button className="h-[12.8vw] w-full border mt-5 mb-[5.3333333333vw] border-[#8a0011] font-semibold flex justify-center items-center text-[4.2666666667vw] text-white bg-[linear-gradient(-180deg,_#e93522_0%,_#be2414_100%)]" onClick={handleLogout}>
          LOGOUT <img src="/Images/enter-icon.svg" alt="" className='w-[4vw] h-[4vw] ml-[1.3333333333vw]' />{" "}
        </button>
      </div>
    </>
  )
}

export default Accounts