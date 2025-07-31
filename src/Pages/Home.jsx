import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Helper from "../helper";
import Appconfig from "../config/config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../redux/slice/event/eventSlice";

function Home() {

  const navigate = useNavigate();
  const userInfo = Helper();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.events);


  const [inplayEvents, setInplayEvents] = useState([])

    const images = {
    whatsAppIcon: "/Images/whatsApp-icon-grey.png",
    skypeIcon: "/Images/skype-icon-grey.png",
    emailIcon: "/Images/email-icon-grey.png",
    igIcon: "/Images/ig-icon-grey.png",
    betFairIcon: "/Images/not-verified.png",
    accountIcon: "/Images/account-icon-white.png",
    homeIcon: "/Images/home-icon.svg",
    multiBet: "/Images/multiBet-pin.svg",
    trophyIcon: "/Images/trophy.svg",
    clockIcon: "/Images/clock-icon-white.png",
    referral: "/Images/Referral.webp",
    SportsGiff: "/Images/gamesGiff.gif",
    headphoneIcon: "/Images/headphone-icon-grey.png",
    gcIcon: "/Images/gc-logo.png",
    phoneIcon: "/Images/phone-icon.png",
    mailIcon: "/Images/mail-icon.png",
    AndroidAppIcon: "/Images/AndroidAppIcon.png",
    browserIcon: "/Images/icon-browser-B.png"
  };


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
    <>
      <div className="w-full lg:w-[74%] mx-auto">
        {/* Slider Banner */}
        <div className="flex justify-center items-center w-full">
          <img src="/Images/dashboard-casino-img/banner-1.webp" alt="" className="w-full" />
        </div>
        {/* Sub Banners */}
        <div className='px-1.5 lg:px-0'>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-1.5 pt-1.5">
            <Link to={"/inplay"} className="relative w-full lg:w-1/2">
              <div className="absolute z-[3] text-white right-0 top-0 leading-snug [background-image:linear-gradient(180deg,_#000000_0%,_rgba(0,_0,_0,_0.7)_82%,_rgba(0,_0,_0,_0)_100%)] w-[23%] lg:w-[15%]">
                <span className="flex justify-start w-fit my-1 mx-1 items-center right-[10%] [background-image:linear-gradient(180deg,_#fb3434_0%,_#e80505_100%)]  text-white text-[3.4666666667vw] lg:text-xs rounded-[0.8vw] lg:rounded-sm">
                  <span className="flex justify-center items-center h-[4.6vw] lg:h-4 [background-image:linear-gradient(180deg,_#ffffff_0%,_#e8e8e8_100%)] mr-[1.3333333333vw] lg:mr-2 px-[0.8vw] rounded-[0.8vw_0_0_0.8vw] lg:rounded-sm">
                    <img src="/Images/hotspot.svg" alt="" className='live-icon w-[4.2666666667vw] h-[2.6666666667vw]  lg:w-3 lg:h-3' />
                  </span>
                  <span className="pr-[1.3333333333vw] lg:pr-2 font-bold">LIVE</span>
                </span>
                <div className="flex text-[2.6666666667vw] lg:text-xs my-1 justify-between px-1 inPlay-sport">
                  Cricket <span className="text-[#333] h-[3.7333333333vw] lg:h-4 min-w-[3.7333333333vw] lg:min-w-3 px-1 bg-white rounded-[0.5333333333vw] lg:rounded-sm">{inplayEvents?.filter(item => item.event_type == "4").length}</span>{" "}
                </div>
                <div className="flex text-[2.6666666667vw] lg:text-xs my-1 justify-between px-1 inPlay-sport">
                  Soccer <span className="text-[#333] h-[3.7333333333vw] lg:h-4 min-w-[3.7333333333vw] lg:min-w-3 px-1 bg-white rounded-[0.5333333333vw] lg:rounded-sm">{inplayEvents?.filter(item => item.event_type == "1").length}</span>{" "}
                </div>
                <div className="flex text-[2.6666666667vw] lg:text-xs my-1 justify-between px-1 inPlay-sport">
                  E-Soccer <span className="text-[#333] h-[3.7333333333vw] lg:h-4 min-w-[3.7333333333vw] lg:min-w-3 px-1 bg-white rounded-[0.5333333333vw] lg:rounded-sm">0</span>{" "}
                </div>
                <div className="flex text-[2.6666666667vw] lg:text-xs my-1 justify-between px-1 inPlay-sport">
                  Tennis <span className="text-[#333] h-[3.7333333333vw] lg:h-4 min-w-[3.7333333333vw] lg:min-w-3 px-1 bg-white rounded-[0.5333333333vw] lg:rounded-sm">{inplayEvents?.filter(item => item.event_type == "2").length}</span>{" "}
                </div>
              </div>
              <img src="/Images/dashboard-casino-img/banner_sports.png" alt="" className="w-full h-auto" />
              <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)" }} className="absolute bottom-0 flex w-full justify-between border-b-[1.12vw] lg:border-b-[5px] border-[#ffb80c]">
                <p className="flex justify-start items-center text-white text-[3.7333333333vw] lg:text-lg font-bold pl-2">
                  Sports
                </p>
                <p className="flex justify-center items-center font-bold text-[2.8vw] lg:text-sm text-center py-[1vw] lg:py-3 pl-4 pr-1 leading-relaxed" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                  Play Now
                </p>
              </div>
            </Link>
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
              <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)" }} className="absolute bottom-0 flex w-full justify-between border-b-[1.12vw] lg:border-b-[5px] border-[#ffb80c]">
                <p className="flex justify-start items-center text-white text-[3.7333333333vw] lg:text-lg font-bold pl-2">
                  Virtual Cricket
                </p>
                <p className="flex justify-center items-center font-bold text-[2.8vw] lg:text-sm text-center py-[1vw] lg:py-3 pl-4 pr-1 leading-relaxed" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
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
                <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)" }} className="absolute bottom-0 flex w-full justify-between border-b-[1.12vw] lg:border-b-[5px] border-[#ffb80c]">
                  <p className="flex justify-start items-center text-white text-[3.7333333333vw] lg:text-lg font-bold pl-2">
                    EVO
                  </p>
                  <p className="flex justify-center items-center font-bold text-[2.8vw] lg:text-sm text-center py-[1vw] lg:py-3 pl-4 pr-1 leading-relaxed" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
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
                <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)" }} className="absolute bottom-0 flex w-full justify-between border-b-[1.12vw] lg:border-b-[5px] border-[#ffb80c]">
                  <p className="flex justify-start items-center text-white text-[3.7333333333vw] lg:text-lg font-bold pl-2">
                    EZUGI
                  </p>
                  <p className="flex justify-center items-center font-bold text-[2.8vw] lg:text-sm text-center py-[1vw] lg:py-3 pl-4 pr-1 leading-relaxed" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
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
              <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)" }} className="absolute bottom-0 flex w-full justify-between border-b-[1.12vw] lg:border-b-[5px] border-[#ffb80c]">
                <p className="flex justify-start items-center text-white text-[3.7333333333vw] lg:text-lg font-bold pl-2">
                  Royal Gaming
                </p>
                <p className="flex justify-center items-center font-bold text-[2.8vw] lg:text-sm text-center py-[1vw] lg:py-3 pl-4 pr-1 leading-relaxed" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
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
                <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)" }} className="absolute bottom-0 flex w-full justify-between border-b-[1.12vw] lg:border-b-[5px] border-[#ffb80c]">
                  <p className="flex justify-start items-center text-white text-[3.7333333333vw] lg:text-lg font-bold pl-2">
                    SKYCASINO
                  </p>
                  <p className="flex justify-center items-center font-bold text-[2.8vw] lg:text-sm text-center py-[1vw] lg:py-3 pl-4 pr-1 leading-relaxed" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
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
                <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)" }} className="absolute bottom-0 flex w-full justify-between border-b-[1.12vw] lg:border-b-[5px] border-[#ffb80c]">
                  <p className="flex justify-start items-center text-white text-[3.7333333333vw] lg:text-lg font-bold pl-2">
                    Live Casino
                  </p>
                  <p className="flex justify-center items-center font-bold text-[2.8vw] lg:text-sm text-center py-[1vw] lg:py-3 pl-4 pr-1 leading-relaxed" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
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
                <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)" }} className="absolute bottom-0 flex w-full justify-between border-b-[1.12vw] lg:border-b-[5px] border-[#ffb80c]">
                  <p className="flex justify-start items-center text-white text-[3.7333333333vw] lg:text-lg font-bold pl-2">
                    {item.p}
                  </p>
                  <p className="flex justify-center items-center font-bold text-[2.8vw] lg:text-sm text-center py-[1vw] lg:py-3 pl-4 pr-1 leading-relaxed" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                    Play now
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className={` $ pb-10 lg:px-40 bg-[#eeee]`} style={{ marginTop: "" }}>
        <div className="flex justify-center items-center">
          <div className='mx-5 lg:mx-36 pt-7 w-full lg:w-[45%]'>
            <div className='lg:flex justify-between mb-2 '>
              <div className='py-3 bg-white lg:w-[49%] mb-2 lg:mb-0 flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086]'><img src={images.headphoneIcon} className='w-8' alt="" /> <span className='cursor-pointer hover:text-black' > Customer support1 </span> | <span className='cursor-pointer hover:text-black' > support2 </span></div>
              <div className='py-3 bg-white lg:w-[49%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086]'><img src={images.whatsAppIcon} className='w-7' alt="" /> <span className='cursor-pointer hover:text-black' >WhatsApp 3 </span> | <span className='cursor-pointer hover:text-black' > WhatsApp 4 </span></div>
            </div>

            <div className='w-full bg-white h-4 mb-2 rounded-lg border border-[#97979780]'></div>
            {/*  for pc view */}
            <div className='hidden  lg:flex justify-between gap-2'>
              <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086] hover:text-black cursor-pointer' > <img src={images.skypeIcon} className='w-7' alt="" /> skyexchofficial</div>
              <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086] hover:text-black cursor-pointer' > <img src={images.emailIcon} className='w-7' alt="" /> info@skyexch.com</div>
              <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086] hover:text-black cursor-pointer' > <img src={images.igIcon} className='w-7' alt="" /> officialskyexch</div>
            </div>
            {/*  for mobile view */}
            <div className='flex lg:hidden justify-between gap-2'>
              <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086] hover:text-black cursor-pointer' > <img src={images.skypeIcon} className='w-5' alt="" /> Skype</div>
              <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086] hover:text-black cursor-pointer' > <img src={images.emailIcon} className='w-5' alt="" /> Email</div>
              <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086] hover:text-black cursor-pointer' > <img src={images.igIcon} className='w-5' alt="" /> Instagram</div>
            </div>

            {/* only for pc */}
            <div className='hidden  border border-[#a6a6a6] mt-6 pb-2 lg:flex justify-center item-center rounded-lg' >
              <div className=' flex justify-center items-center w-full lg:w-[30%]' >
                <div className='flex justify-start item-center w-full ml-5 bg-white'>
                  <img src={images.betFairIcon} className='w-16 h-12' alt="" />
                </div>

                <div className='w-1/2 p-2'>
                  <img src={images.gcIcon} className=' bg-white' alt="" />
                </div>
              </div>

              <div className='w-full lg:w-[70%]'>
                <div className='text-[12px] py-1 text-[#00000080]'>skyexch.com is operated by skyexch company incorporated under the laws of Curacao with company Registration number 091237 with registered office at Abraham de Veerstraat 9 , Curacao P.O Box 3421 and is licensed and regulated by the Curacao authority as the regulatory body responsible holding a (Sub-license with License number 365/JAZ Sub-License GLH- OCCHKTW0707072023 granted on 6.07.2023).
                  Players are requested not to contact any untrusted sources for https://skyexch.com/ accounts as this is an online site and they can only register independently without any agents. Only deposit through the account details generated by the system or provided by our official support team.</div>

                <div className='flex justify-between items-center border-t border-[#a6a6a6]'>
                  <p className='pt-1 flex justify-center items-center text-xs text-[#00000080]'>
                    <img src={images.phoneIcon} className='h-4' alt="" />
                    <span>
                      +91 0000000000 / +91 0000000000
                    </span>
                  </p>
                  <p className='pt-1 flex justify-center items-center text-xs gap-1 underline text-[#00000080]'>
                    <img src={images.mailIcon} className='h-4' alt="" />
                    <span>
                      support@skyexch.com
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='hidden lg:flex flex-col mt-7 items-center mb-2'>
          <div className='flex gap-2  '>
            <img src={images.browserIcon} alt="" />
            <img src="" alt="" />
          </div>

          <h1 className='text-[#00000099] text-xs'>Our website works best in the newest and last prior version of these browsers:</h1>

          <h1 className='text-[#00000099] text-xs'>Google Chrome. Firefox</h1>
        </div>

        <div className='flex flex-col justify-center lg:border-t mt-10 lg:mt-0 border-[#0000004d]'>
          {/* for pc view */}
          <p className='hidden lg:flex justify-center flex-wrap gap-2 mx-5 text-xs mt-2 text-[#00000099]'>
            - <Link className='underline' >Privacy Policy </Link>
            - <Link className='underline' >Terms and Conditions</Link>
            - <Link className='underline' >Rules and Regulations </Link>
            - <Link className='underline' > KYC</Link>
            - <Link className='underline' > Responsible Gaming</Link>
            - <Link className='underline' > About Us </Link>
            - <Link className='underline' >Self-exclusion Policy </Link>
            - <Link className='underline' > Underage Policy </Link> -
          </p>

          {/* for mobile view */}
          <p className='lg:hidden flex justify-center flex-wrap gap-1  text-xs mt-2 text-[#00000099]'>
            <Link className='underline' >Privacy Policy </Link>
            |<Link className='underline' >Terms and Conditions</Link>
            |<Link className='underline' >Rules and Regulations </Link>
            |<Link className='underline' > KYC</Link>
            |<Link className='underline' > Responsible Gaming</Link>
            |<Link className='underline' > About Us </Link>
            |<Link className='underline' >Self-exclusion Policy </Link>
            |<Link className='underline' > Underage Policy </Link>
          </p>

          {/* for pc view */}
          <div className='flex flex-col items-center mt-5 mb-10'>
            <img src={images.AndroidAppIcon} className='w-40' alt="" />
            <p className='text-[#00000099] text-[10px]'>v1.11 - 2022-03-23 - 3.1MB</p>
          </div>

          {/* for mobile view */}
          {/* <div className='flex lg:hidden flex-col items-center   mt-5'>
                <div className='border border-[#0000004d] p-2 rounded-lg'>
                  <p className='text-[#00000099] text-[10px]'>Powered by</p>
                  <img src={images.AndroidAppIcon} className='w-32' alt="" />
                </div>
              </div> */}
        </div>

      </div>

    </>

  )
}

export default Home