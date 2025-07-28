import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
// import GlobalContext from "../context/GlobalContext";
// import Cookies from "js-cookie";
// import './footer.css'

const Footer = () => {
  // Image paths object
  const images = {
    whatsAppIcon: "/Images/whatsApp-icon-grey.png",
    skypeIcon: "/Images/skype-icon-grey.png",
    emailIcon: "/Images/email-icon-grey.png",
    igIcon: "/Images/ig-icon-grey.png",
    betFairIcon: "/Images/not-verified.png",
    accountIcon: "/Images/account-icon-white.png",
    homeIcon: "/Images/home-icon-white2.png",
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

  let location = useLocation();

  // pages where footer will be shown
  const [isUserLoggedIn, setisUserLoggedIn] = useState(true);

  // const context = useContext(GlobalContext);
  // const { isUserLoggedIn } = context;

  return (
    <>
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
          <div className='flex flex-col items-center mt-5'>
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

      {/*    sticky navbar for mobileView */}
      <div className="fixed bottom-0 left-0 right-0 text-white lg:hidden flex items-end bg-[#eee] z-50">
        <img
          src={images.SportsGiff}
          className="rounded-t-full absolute bg-[#020024] p-[6px] pl-[10px] w-[20%] h-[10vh] ml-[-1%] min-[350px]:h-[84px] min-[350px]:w-[96px] h-20 w-20"
          alt=""
          style={{
            background:
              "linear-gradient(-180deg, rgb(36, 58, 72) 20%, rgb(23, 39, 50) 91%)",
          }}
        />
        <ul
          className="grid grid-cols-5 pl-20 w-full"
          style={{
            background:
              "linear-gradient(-180deg, #243a48 20%, #172732 91%)",
          }}
        >
          {[
            { to: "", icon: images.trophyIcon, label: "Sports" },
            { to: "", icon: images.clockIcon, label: "In-Play", extra: "pt-[2%] mt-[6%] mb-[4%]" },
            { to: "/", icon: images.homeIcon, label: "Home", extra: "mb-[5px]" },
            {
              to: "",
              icon: null,
              label: "Multi Bet",
              svg: true
            },
            {
              to: "",
              icon: images.accountIcon,
              label: "Account",
              extra: "mb-[5px]",
            },
          ].map(({ to, icon, label, svg, extra = "" }, index) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={index}
                to={to}
                className={`flex flex-col justify-center items-center w-[85px] ${isActive
                  ? "bg-[linear-gradient(0deg,rgba(4,29,83,1)_7%,rgba(44,88,115,1)_61%)]"
                  : "bg-[linear-gradient(-180deg,#243a48_20%,#172732_91%)]"
                  }`}
              >
                {svg ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 25"
                    className={`h-[30px] w-[30px] ${extra}`}
                  >
                    <path
                      fill="rgb(255,255,255)"
                      fillRule="evenodd"
                      d="M12.5 25C5.596 25 0 19.404 0 12.5S5.596 0 12.5 0 25 5.596 25 12.5 19.404 25 12.5 25zm5.09-13.203c-.09 0-.18-.032-.27-.095-.49-.19-.802-.49-.936-.9L15.18 5.203v-.237c0-.253.222-.46.668-.617l.067-.048h.067c.536-.158.804-.426.804-.806 0-.443-.09-.72-.268-.83-.18-.11-.49-.166-.938-.166H9.42c-.447 0-.76.055-.938.166-.178.11-.268.387-.268.83 0 .38.268.648.804.806h.067l.067.048c.446.158.67.364.67.617v.237L8.615 10.8c-.134.412-.446.712-.937.902-.09.063-.18.095-.27.095-1.606.57-2.41 1.44-2.41 2.61 0 .378.067.64.2.78.135.144.403.215.804.215h5.425l.802 8.348h.536l.803-8.348h5.426c.4 0 .67-.063.803-.19.133-.126.2-.395.2-.806 0-1.17-.804-2.04-2.41-2.61z"
                    />
                  </svg>
                ) : (
                  <img
                    src={icon}
                    className={`h-[30px] w-[30px] ${extra}`}
                    alt={label}
                  />
                )}
                <span className="text-[12px]">{label}</span>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default React.memo(Footer);