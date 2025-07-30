import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Helper from "../helper";
import Appconfig from "../config/config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../redux/slice/event/eventSlice";

function Home() {

  const userInfo = Helper();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.events);


  const [inplayEvents, setInplayEvents] = useState([])

  const casinoSmall = [
    {
      img: "/Images/dashboard-casino-img/spribe.png",
      p: "Spribe"
    },
    {
      img: "/Images/dashboard-casino-img/black-jack.png",
      p: "Blackjack"
    },
    {
      img: "/Images/dashboard-casino-img/7up7down.png",
      p: "7 Up Down"
    },
    {
      img: "/Images/dashboard-casino-img/andarBahar.png",
      p: "Andar Bahar VR"
    },
    {
      img: "/Images/dashboard-casino-img/supernowa.png",
      p: "Supernowa"
    },
    {
      img: "/Images/dashboard-casino-img/7Mojos.png",
      p: "7mojos"
    },
    {
      img: "/Images/dashboard-casino-img/horse-racing.png",
      p: "HORSEBOOK"
    },
    {
      img: "/Images/dashboard-casino-img/minesweeper.png",
      p: "Minesweeper"
    },
    {
      img: "/Images/dashboard-casino-img/teenpatti.png",
      p: "Teen Patti"
    },
    {
      img: "/Images/dashboard-casino-img/superover.png",
      p: "Super Over VR"
    },
    {
      img: "/Images/dashboard-casino-img/teenpatti2020.png",
      p: "TeenPatti 20-20"
    },
    {
      img: "/Images/dashboard-casino-img/numberKing.png",
      p: "NumberKing"
    },
    {
      img: "/Images/dashboard-casino-img/bigSmall.png",
      p: "Big small"
    },
    {
      img: "/Images/dashboard-casino-img/teenPattiJoker.png",
      p: "TeenPatti Joker"
    },
    {
      img: "/Images/dashboard-casino-img/7up7down-half.png",
      p: "7up7down"
    },
    {
      img: "/Images/dashboard-casino-img/DragonNTiger.png",
      p: "Dragon & Tiger"
    },
    {
      img: "/Images/dashboard-casino-img/autoRoulette.png",
      p: "Auto Roulette"
    },
    {
      img: "/Images/dashboard-casino-img/DusKaDumVR.png",
      p: "Dus Ka Dum"
    },
    {
      img: "/Images/dashboard-casino-img/CallbreakQuick.png",
      p: "Callbreak Quick"
    },
    {
      img: "/Images/dashboard-casino-img/SicBo-Jili.png",
      p: "Sic Bo"
    },
    {
      img: "/Images/dashboard-casino-img/Baccarat.png",
      p: "Baccarat"
    },
    {
      img: "/Images/dashboard-casino-img/BonusDice.png",
      p: "Bonus Dice"
    },
    {
      img: "/Images/dashboard-casino-img/Heist.png",
      p: "Heist"
    },
    {
      img: "/Images/dashboard-casino-img/5CardPoker.png",
      p: "5 Card Poker"
    },
    {
      img: "/Images/dashboard-casino-img/ColorGame.png",
      p: "Color Game"
    },
    {
      img: "/Images/dashboard-casino-img/32card.png",
      p: "32 Cards"
    },
    {
      img: "/Images/dashboard-casino-img/rummy.png",
      p: "Rummy"
    },
    {
      img: "/Images/dashboard-casino-img/dragonTiger.png",
      p: "Dragon Tiger"
    },
    {
      img: "/Images/dashboard-casino-img/worliMatkaVR.png",
      p: "Worli Matka VR"
    },
    {
      img: "/Images/dashboard-casino-img/betgames.png",
      p: "BetGames"
    },
    {
      img: "/Images/dashboard-casino-img/andarBahar-half.png",
      p: "Andar Bahar"
    },
    {
      img: "/Images/dashboard-casino-img/sicbo.png",
      p: "Sicbo"
    },
    {
      img: "/Images/dashboard-casino-img/7up7down-half.png",
      p: "7 UP 7 Down"
    },
    {
      img: "/Images/dashboard-casino-img/CoinToss.png",
      p: "Coin Toss"
    },
    {
      img: "/Images/dashboard-casino-img/teenPatti-half.png",
      p: "Teen Patti"
    },
    {
      img: "/Images/dashboard-casino-img/cardMatka.png",
      p: "Card Matka"
    },
    {
      img: "/Images/dashboard-casino-img/numberMatka.png",
      p: "Number Matka"
    },
    {
      img: "/Images/dashboard-casino-img/bpoker.png",
      p: "Bpoker"
    },

  ]


  useEffect(() => {
    dispatch(
      getAllEvents({
        user_id: userInfo ? userInfo._id : "",
      })
    );
  }, []);

  useEffect(() => {
    if (
      userInfos &&
      Array.isArray(userInfos.events) &&
      userInfos.events.length > 0
    ) {
      // Flatten all competitions' events into one array
      const allNewEvents = userInfos.events
        .flatMap((ev) => ev.competitions || [])
        .flatMap((comp) => comp.events || []);
      // console.log('all events : ', allNewEvents)

      const inPlayEvents = allNewEvents?.filter(item => item.is_inplay == "True")
      setInplayEvents(inPlayEvents)
    }
  }, [userInfos]);


  return (
    <div className="w-full lg:w-[74%] mx-auto">
      {/* Slider Banner */}
      <div className="flex justify-center items-center w-full">
        <img src="/Images/dashboard-casino-img/banner-1.webp" alt="" className="w-full" />
      </div>
      {/* Sub Banners */}
      <div className='px-1.5 lg:px-0'>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-1.5 pt-1.5">
          <div className="relative w-full lg:w-1/2">
            <Link>
              <div className="absolute z-[3] text-white right-0 top-0 leading-snug" style={{ background: " linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.7) 82%, rgba(0, 0, 0, 0) 100%)", minWidth: "93px" }}>
                <span className="pl-2 rounded flex justify-start w-fit my-1 mx-1 items-center right-[10%] bg-white  text-white text-xs">
                  <svg width="14" height="8" className="animate-pulse" xmlns="http://www.w3.org/2000/svg">
                    <g fill="rgb(255,0,0)" fillRule="evenodd">
                      <path d="M12.012 0l-.698.727c1.734 1.808 1.734 4.738 0 6.546l.698.727c2.117-2.207 2.117-5.79 0-8zM10.3 1.714l-.7.735c.967 1.014.967 2.66 0 3.673l.7.735c1.352-1.418 1.352-3.721 0-5.143zM1.588 0l.698.727c-1.734 1.808-1.734 4.738 0 6.546L1.588 8c-2.117-2.207-2.117-5.79 0-8zM3.3 1.714l.7.735c-.967 1.014-.967 2.66 0 3.673l-.7.735c-1.352-1.418-1.352-3.721 0-5.143z" />
                      <circle cx="6.8" cy="4.4" r="1.6" />
                    </g>
                  </svg>
                  <span className="text-white text-xs ml-2 bg-red-500 px-1 rounded-r-sm">LIVE</span>
                </span>
                <div className="flex text-[10px] my-1 justify-between px-1 inPlay-sport">
                  Cricket <span className="text-black h-[16px] px-1 text-[10px] lg:text-sm bg-white rounded-sm span-style">{inplayEvents?.filter(item => item.event_type == "4").length}</span>{" "}
                </div>
                <div className="flex text-[10px] my-1 justify-between px-1 inPlay-sport">
                  Soccer <span className="text-black h-[16px] px-1 text-[10px] lg:text-sm bg-white rounded-sm span-style">{inplayEvents?.filter(item => item.event_type == "1").length}</span>{" "}
                </div>
                <div className="flex text-[10px] my-1 justify-between px-1 inPlay-sport">
                  E-Soccer <span className="text-black h-[16px] px-1 text-[10px] lg:text-sm bg-white rounded-sm span-style">0</span>{" "}
                </div>
                <div className="flex text-[10px] my-1 justify-between px-1 inPlay-sport">
                  Tennis <span className="text-black h-[16px] px-1 text-[10px] lg:text-sm bg-white rounded-sm span-style">{inplayEvents?.filter(item => item.event_type == "2").length}</span>{" "}
                </div>
              </div>
            </Link>
            <img src="/Images/dashboard-casino-img/banner_sports.png" alt="" className="w-full h-auto" />
            <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)", borderBottom: "5px solid #ffb80c" }} className="absolute bottom-0 flex w-full justify-between">
              <p className="flex justify-start items-center text-white text-sm lg:text-lg font-bold pl-2" style={{ marginBottom: "0px" }}>
                Sports
              </p>
              <p className="font-bold text-xs lg:text-sm text-center py-1.5 lg:py-3 px-4" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                Play Now
              </p>
            </div>
          </div>
          <div className=" w-full lg:w-1/2">
            <img src="/Images/dashboard-casino-img/banner_blog.png" alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* Dual Banner Row */}
        <div className="flex flex-col lg:flex-row gap-1.5 items-stretch pt-1.5">
          {/* Left Side - Natural image */}
          <div className="relative  w-full lg:w-1/2">
            <img
              src="/Images/dashboard-casino-img/virtualsports-poster.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)", borderBottom: "5px solid #ffb80c" }} className="absolute bottom-0 flex w-full justify-between">
              <p className="flex justify-start items-center text-white text-sm lg:text-lg font-bold pl-2" style={{ marginBottom: "0px" }}>
                Virtual Cricket
              </p>
              <p className="font-bold text-xs lg:text-sm text-center py-1.5 lg:py-3 px-4" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                Play Now
              </p>
            </div>
          </div>

          {/* Right Side - Two small images inside half width */}
          <div className=" w-full lg:w-1/2 flex gap-1.5">
            <div className="relative w-1/2">
              <img
                src="/Images/dashboard-casino-img/evolution.png"
                alt=""
                className="w-full h-full object-contain"
              />
              <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)", borderBottom: "5px solid #ffb80c" }} className="absolute bottom-0 flex w-full justify-between">
                <p className="flex justify-start items-center text-white text-sm lg:text-lg font-bold pl-2" style={{ marginBottom: "0px" }}>
                  EVO
                </p>
                <p className="font-bold text-xs lg:text-sm text-center py-1.5 lg:py-3 px-4" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                  Play now
                </p>
              </div>
            </div>
            <div className="relative w-1/2">
              <img
                src="/Images/dashboard-casino-img/ezugi.png"
                alt=""
                className="w-full h-full object-contain"
              />
              <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)", borderBottom: "5px solid #ffb80c" }} className="absolute bottom-0 flex w-full justify-between">
                <p className="flex justify-start items-center text-white text-sm lg:text-lg font-bold pl-2" style={{ marginBottom: "0px" }}>
                  EZUGI
                </p>
                <p className="font-bold text-xs lg:text-sm text-center py-1.5 lg:py-3 px-4" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                  Play now
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Banner Row */}
        <div className="flex flex-col lg:flex-row gap-1.5 items-stretch py-1.5">
          {/* Left Side - Natural image */}
          <div className="relative  w-full lg:w-1/2">
            <img
              src="/Images/dashboard-casino-img/banner_royalgaming.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)", borderBottom: "5px solid #ffb80c" }} className="absolute bottom-0 flex w-full justify-between">
              <p className="flex justify-start items-center text-white text-sm lg:text-lg font-bold pl-2" style={{ marginBottom: "0px" }}>
                Royal Gaming
              </p>
              <p className="font-bold text-xs lg:text-sm text-center py-1.5 lg:py-3 px-4" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                Play now
              </p>
            </div>
          </div>

          {/* Right Side - Two small images inside half width */}
          <div className=" w-full lg:w-1/2 flex gap-1.5">
            <div className="relative w-1/2">
              <img
                src="/Images/dashboard-casino-img/skycasino.png"
                alt=""
                className="w-full h-full object-contain"
              />
              <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)", borderBottom: "5px solid #ffb80c" }} className="absolute bottom-0 flex w-full justify-between">
                <p className="flex justify-start items-center text-white text-sm lg:text-lg font-bold pl-2" style={{ marginBottom: "0px" }}>
                  SKYCASINO
                </p>
                <p className="font-bold text-xs lg:text-sm text-center py-1.5 lg:py-3 px-4" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                  Play now
                </p>
              </div>
            </div>
            <div className="relative w-1/2">
              <img
                src="/Images/dashboard-casino-img/casino.png"
                alt=""
                className="w-full h-full object-contain"
              />
              <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)", borderBottom: "5px solid #ffb80c" }} className="absolute bottom-0 flex w-full justify-between">
                <p className="flex justify-start items-center text-white text-sm lg:text-lg font-bold pl-2" style={{ marginBottom: "0px" }}>
                  Live Casino
                </p>
                <p className="font-bold text-xs lg:text-sm text-center py-1.5 lg:py-3 px-4" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                  Play now
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Small casino */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5">
          {casinoSmall.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <img src={item.img} alt={item.p} className="w-full object-contain" />
              <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)", borderBottom: "5px solid #ffb80c" }} className="absolute bottom-0 flex w-full justify-between">
                <p className="flex justify-start items-center text-white text-sm lg:text-lg font-bold pl-2" style={{ marginBottom: "0px" }}>
                  {item.p}
                </p>
                <p className="font-bold text-xs lg:text-sm text-center py-1.5 lg:py-3 px-4" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                  Play now
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Home