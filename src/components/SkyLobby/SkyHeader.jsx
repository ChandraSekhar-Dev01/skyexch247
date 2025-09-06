import { FaChevronRight, FaGifts } from "react-icons/fa6";
import { MdOutlineFeedback, MdOutlineHistory } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import React, { useState } from 'react'
import { CloseOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import Helper from "../../helper";

function SkyHeader() {

  const location = useLocation();
  const isBabe = location.pathname.startsWith("/lobby/babe");
  const userInfo = Helper();

  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [balanceEye, setBalanceEye] = useState(false);
  return (
    <>

      <header
        className='py-1 bg-no-repeat [background-size:100%] md:bg-auto md:bg-repeat bg-[#fff] text-[#fff]'
        style={{
          backgroundImage: "url('/Images/skyLobby/head-bg.jpg')",
        }}>
        <div className='mx-auto relative flex items-center lg:max-w-screen-xl'>
          <span className='w-[20%] md:w-[5.5rem] md:max-w-[130px] mx-2'>
            <img src="/Images/skyLobby/skyLogo.webp" alt="" className='block align-middle w-full max-w-full h-auto' />
          </span>
          <ul className='grid grid-flow-col flex-grow rounded-[0.375rem] bg-[#fff] p-[0.5rem_0.2rem] text-[0.75rem] leading-[1rem] text-[#663333] m-0 md:max-w-[42rem] md:flex md:items-center md:justify-between'>
            <li className='flex col-span-2 mb-1 md:col-span-1 md:mb-0 md:items-center'>
              <span className='mx-1 block w-[0.875rem]'>
                <img src="/Images/skyLobby/userIcon.webp" alt="" className='block align-middle w-full max-w-full h-auto' />
              </span>
              <span>{userInfo?.user_name}</span>
            </li>
            <li className='flex items-center'>
              <span className='mx-1 block w-[0.875rem]'>
                <img src="/Images/skyLobby/balance.webp" alt="" className='block align-middle w-full max-w-full h-auto' />
              </span>
              <span>{`${balanceEye ? '01.00' : '************'}`}</span>
            </li>
            <li className='flex justify-self-end items-center w-[2rem] row-span-2'>
              <button className='cursor-pointer bg-transparent' onClick={() => setBalanceEye(!balanceEye)}>
                <img src={`/Images/skyLobby/${balanceEye ? 'balanceEyeOpen' : 'balanceEye'}.webp`} alt="" className='block align-middle w-full max-w-full h-auto' />
              </button>
            </li>
          </ul>
          <div className={`relative hidden md:flex mx-4 w-1/5 md:w-[36%] flex-center rounded-full bg-[#fff]`}>
            <img src="/Images/searchD-icon.svg" alt="" className='w-10 h-10 relative mx-auto inline-block p-[0.375rem]' />
            <input type="text" placeholder="Search game" className='w-[90%] h-10 px-2 pr-10 bg-transparent rounded-full focus:outline-none focus:border-brown-highlight' onClick={() => setIsSearchClicked(true)} />
            {isSearchClicked &&
              <span className='absolute top-3 right-3 rounded-full w-5 h-5 bg-[#b07d4a] cursor-pointer ml-auto mr-auto inline-block p-[0.375rem]' onClick={() => setIsSearchClicked(false)}>

                <span className='text-[13px] font-normal mt-[-0.5vw] overflow-hidden block align-middle'>x</span>
              </span>
            }
          </div>
          <div className='flex-none w-[2.5rem] ml-[0.25rem] z-[1] cursor-pointer'>
            <img src="/Images/skyLobby/menuBar.webp" className="w-full max-w-full h-auto block align-middle" alt="" onClick={() => setOpenSidebar(true)} />
          </div>
          {/* Right Sidebar */}
          <div
            className={`fixed top-0 left-0 w-full z-40 lg:absolute transition-opacity duration-300 ${openSidebar ? "opacity-100 visible h-screen" : "opacity-0 invisible"
              }`}
          >
            {/* Sidebar Panel */}
            <div
              className={`absolute z-[1] top-0 right-0 w-4/5 min-h-screen bg-[#fff] lg:w-3/12 lg:min-h-[60vh] lg:right-0 xl:right-6 transform transition-transform duration-500 ease-in-out ${openSidebar ? "translate-x-0" : "translate-x-full"}`}
            >
              <div className='text-[#663333] p-4 lg:col-span-4 max-w-7xl mx-auto'>
                <div className='flex items-center font-bold mb-3'>
                  <span className='flex-grow'>Language</span>
                  <CloseOutlined
                    className='overflow-hidden fill-[#663333] cursor-pointer'
                    onClick={() => setOpenSidebar(false)}
                  />
                </div>
                <ul className='flex flex-wrap text-center text-xs'>
                  <li className='pt-3 cursor-pointer w-1/6 rounded-[0.25rem] bg-[#efebe6]'>
                    <img src="/Images/skyLobby/eng.webp" alt="" className='px-3' />
                    <p className='mt-2 pb-3 text-gray-500'>EN</p>
                  </li>
                  <li className='pt-3 cursor-pointer w-1/6 opacity-50'>
                    <img src="/Images/skyLobby/thai.webp" alt="" className='px-3' />
                    <p className='mt-2 pb-3 text-gray-500'>THAI</p>
                  </li>
                  <li className='pt-3 cursor-pointer w-1/6 opacity-50'>
                    <img src="/Images/skyLobby/cn.webp" alt="" className='px-3' />
                    <p className='mt-2 pb-3 text-gray-500'>CN</p>
                  </li>
                  <li className='pt-3 cursor-pointer w-1/6 opacity-50'>
                    <img src="/Images/skyLobby/jp.webp" alt="" className='px-3' />
                    <p className='mt-2 pb-3 text-gray-500'>JP</p>
                  </li>
                  <li className='pt-3 cursor-pointer w-1/6 opacity-50'>
                    <img src="/Images/skyLobby/vn.webp" alt="" className='px-3' />
                    <p className='mt-2 pb-3 text-gray-500'>VN</p>
                  </li>
                  <li className='pt-3 cursor-pointer w-1/6 opacity-50'>
                    <img src="/Images/skyLobby/kr.webp" alt="" className='px-3' />
                    <p className='mt-2 pb-3 text-gray-500'>KR</p>
                  </li>
                </ul>
              </div>
              <div className='text-[#663333] max-w-7xl mx-auto'>
                <div className='sticky left-0 flex items-center font-bold p-3'>
                  <span className='flex-grow'>Reporting</span>
                </div>
                <ul>
                  <span>
                    <li className='flex justify-between items-center m-2 p-2 rounded-md cursor-pointer text-[#663333]'>
                      <MdOutlineHistory className='overflow-hidden fill-[#663333] w-7 h-7' />
                      <span className='flex-grow ml-2'>
                        Transaction History
                      </span>
                      <FaChevronRight className='overflow-hidden fill-[#663333] w-5 h-5' />
                    </li>
                  </span>
                  <span>
                    <li className='flex justify-between items-center m-2 p-2 rounded-md cursor-pointer text-[#663333]'>
                      <FaRegFileAlt className='overflow-hidden fill-[#663333] w-6 h-6' />
                      <span className='flex-grow ml-2'>
                        Promotion Report
                      </span>
                      <FaChevronRight className='overflow-hidden fill-[#663333] w-5 h-5' />
                    </li>
                  </span>
                  <span>
                    <li className='flex justify-between items-center m-2 p-2 rounded-md cursor-pointer text-[#663333]'>
                      <FaGifts className='overflow-hidden fill-[#663333] w-7 h-7' />
                      <span className='flex-grow ml-2'>
                        Tip History
                      </span>
                      <FaChevronRight className='overflow-hidden fill-[#663333] w-5 h-5' />
                    </li>
                  </span>
                </ul>
                <div className="sticky left-0 flex items-center font-bold p-3">
                  <span className='flex-grow'>Other</span>
                </div>
                <ul>
                  <span>
                    <li className='flex justify-between items-center m-2 p-2 rounded-md cursor-pointer text-[#663333]'>
                      <MdOutlineFeedback className='overflow-hidden fill-[#663333] w-7 h-7' />
                      <span className='flex-grow ml-2'>
                        Feedback
                      </span>
                    </li>
                  </span>
                </ul>
                <span className="block text-sm text-center underline mt-10">Quit</span>
              </div>
            </div>
            {/* Overlay */}
            <div
              className={`w-full h-screen bg-[#1c1202] fixed left-0 top-0 transition-opacity duration-500 ${openSidebar ? "opacity-80" : "opacity-0 pointer-events-none"
                }`}
              onClick={() => setOpenSidebar(false)}
            ></div>
          </div>
        </div>
        {location.pathname !== '/lobby/platform' &&
          <div className='relative flex md:hidden p-[0.5rem] [background-position:0%_70%] w-full'>
            <div className='bg-[#ffffff] rounded-[9999px] w-full relative flex items-center border'>
              <span className='text-[#663333] relative mx-auto inline-block p-[0.375rem]'>
                <img src="/Images/searchD-icon.svg" alt="" className='w-6 h-6' />
              </span>
              <input type="text" name="" id="" placeholder='Search game' className='w-[90%] px-2 pr-10 text-[#1e1e1e] bg-transparent rounded-full focus:outline-none focus:border-brown-highlight' onClick={() => setIsSearchClicked(true)} />
              {isSearchClicked &&
                <span className='absolute right-3 rounded-full w-4 h-4 bg-[#b07d4a] cursor-pointer ml-auto mr-auto inline-block p-[0.375rem]' onClick={() => setIsSearchClicked(false)}>

                  <span className='text-[3.2vw] font-normal mt-[-2vw] ml-[-0.56vw] overflow-hidden block align-middle'>x</span>
                </span>
              }
            </div>
          </div>
        }
        {isSearchClicked &&
          <div className='w-full h-screen z-[35] absolute'>
            <div className='absolute w-full top-0 left-0 bg-[#2a282a] py-6 md:py-10 z-50'>
              <div className='relative w-full max-h-[calc(80vh-128px)] overflow-hidden overflow-y-auto'>
                <div className='text-white mx-auto relative lg:max-w-screen px-4 box-border'>
                  <div className='text-center'>Key in game name</div>
                </div>
              </div>
              <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-[#2A282A] via-[#ffcd79] to-[#2A282A]"></div>

            </div>
            <div className='fixed opacity-80 bg-[#1c1202] w-full h-screen left-0 z-[-1]'></div>
          </div>
        }

      </header>
      <nav
        className="hidden md:block md:bg-[linear-gradient(to_bottom,#665030,#1c1202)] md:text-[.875rem] md:leading-[1.25rem] md:text-[#efebe6] md:sticky md:top-0 z-30">
        <div className="flex max-w-7xl lg:mx-auto">
          <Link to={'/lobby/recent'} className={`pb-0.5 flex-1 text-center md:flex items-center lg:max-w-[165px] lg:hover:bg-[#00000020] ${location.pathname == '/lobby/recent' ? "nav-active text-[#ffcd79] bg-center" : ""}`}>
            <span className="relative mx-auto inline-block p-[0.375rem]">
              <img src="/Images/skyLobby/recent-white.webp" alt="" className={`overflow-hidden w-8 h-8 lg:w-7 lg:h-7 ${location.pathname == '/lobby/recent' ? "opacity-50" : ""}`} />
            </span>
            <span className="flex-grow text-center md:-ml-4 block">Recent</span>
          </Link>
          <Link to={'/lobby/favorite'} className={`pb-0.5 flex-1 text-center md:flex items-center lg:max-w-[165px] lg:hover:bg-[#00000020] ${location.pathname == '/lobby/favorite' ? "nav-active text-[#ffcd79] bg-center" : ""}`}>
            <span className="relative mx-auto inline-block p-[0.375rem]">
              <img src="/Images/skyLobby/fvrt-star.webp" alt="" className={`overflow-hidden w-8 h-8 lg:w-7 lg:h-7 ${location.pathname == '/lobby/favorite' ? "opacity-50" : ""}`} />
            </span>
            <span className="flex-grow text-center md:-ml-4 block">Favorite</span>
          </Link>
          <Link to={'/lobby'} className={`pb-0.5 flex-1 text-center md:flex items-center lg:max-w-[165px] lg:hover:bg-[#00000020] ${location.pathname == '/lobby' ? "nav-active text-[#ffcd79] bg-center" : ""}`}>
            <span className="relative mx-auto inline-block p-[0.375rem]">
              <img src="/Images/skyLobby/ranking-star.webp" alt="" className={`overflow-hidden w-8 h-8 lg:w-7 lg:h-7 ${location.pathname == '/lobby' ? "opacity-50" : ""}`} />
            </span>
            <span className="flex-grow text-center md:-ml-4 block">Rankings</span>
          </Link>
          <Link to={'/lobby/babe/hot'} className={`pb-0.5 flex-1 text-center md:flex items-center lg:max-w-[165px] lg:hover:bg-[#00000020] ${isBabe ? "nav-active text-[#ffcd79] bg-center" : ""}`}>
            <span className="relative mx-auto inline-block p-[0.375rem]">
              <img src="/Images/skyLobby/games.webp" alt="" className={`overflow-hidden w-8 h-8 lg:w-7 lg:h-7 ${isBabe ? "opacity-50" : ""}`} />
            </span>
            <span className="flex-grow text-center md:-ml-4 block">Games</span>
          </Link>
          <Link to={'/lobby/platform'} className={`pb-0.5 flex-1 text-center md:flex items-center lg:max-w-[165px] lg:hover:bg-[#00000020] ${location.pathname == '/lobby/platform' ? "nav-active text-[#ffcd79] bg-center" : ""}`}>
            <span className="relative mx-auto inline-block p-[0.375rem]">
              <img src="/Images/skyLobby/platform.webp" alt="" className={`overflow-hidden w-8 h-8 lg:w-7 lg:h-7 ${location.pathname == '/lobby/platform' ? "opacity-50" : ""}`} />
            </span>
            <span className="flex-grow text-center md:-ml-4 block">Platform</span>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default SkyHeader