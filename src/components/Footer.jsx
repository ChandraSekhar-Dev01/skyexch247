import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Helper from "../helper";
// import GlobalContext from "../context/GlobalContext";
// import Cookies from "js-cookie";
// import './footer.css'

const Footer = () => {
  let location = useLocation();
  const userInfo = Helper();

  // Image paths object
  const images = {
    whatsAppIcon: "/Images/whatsApp-icon-grey.svg",
    skypeIcon: "/Images/skype-icon-grey.svg",
    emailIcon: "/Images/email-icon-grey.svg",
    igIcon: "/Images/ig-icon-grey.webp",
    betFairIcon: "/Images/not-verified.webp",
    accountIcon: "/Images/account-icon-white.webp",
    homeIcon: "/Images/home-icon.svg",
    multiBet: "/Images/multiBet-pin.svg",
    trophyIcon: "/Images/trophy.svg",
    clockIcon: "/Images/clock-icon-white.webp",
    referral: "/Images/Referral.webp",
    SportsGiff: "/Images/gamesGiff.gif",
    headphoneIcon: "/Images/headphone-icon-grey.svg",
    gcIcon: "/Images/gc-logo.webp",
    phoneIcon: "/Images/phone-icon.webp",
    mailIcon: "/Images/mail-icon.webp",
    AndroidAppIcon: "/Images/AndroidAppIcon.webp",
    browserIcon: "/Images/icon-browser-B.webp"
  };


  // pages where footer will be shown
  const [isUserLoggedIn, setisUserLoggedIn] = useState(true);

  // const context = useContext(GlobalContext);
  // const { isUserLoggedIn } = context;

  return (
    <>
      {/*    sticky navbar for mobileView */}
      <div className="fixed bottom-0 left-0 right-0 text-white lg:hidden flex items-end bg-[#eee] z-50">
        <span className="absolute rounded-t-full w-[18vw] h-[16.8vw] py-[1.5vw] pl-[1.5vw]" style={{
          background:
            "linear-gradient(-180deg, rgb(36, 58, 72) 20%, rgb(23, 39, 50) 91%)"
        }}>
          <img
            src={images.SportsGiff}
            className="w-[17.8666666667vw] h-[15.2666666667vw]"
            alt=""
          />
        </span>
        <ul
          className="grid grid-cols-5 pl-[18vw] w-full"
          style={{
            background:
              "linear-gradient(-180deg, #243a48 20%, #172732 91%)",
          }}
        >
          {[
            { to: "/sports", icon: images.trophyIcon, label: "Sports", extra: "h-[5.3333333333vw] w-[5.8666666667vw]" },
            { to: "/inPlay", icon: images.clockIcon, label: "In-Play", extra: "h-[5.3333333333vw] w-[5.8666666667vw]" },
            { to: "/", icon: images.homeIcon, label: "Home", extra: "h-[5.3333333333vw] w-[6.8666666667vw]" },
            {
              to: !userInfo ? "/login" : "/multimarket",
              icon: images.multiBet,
              label: "Multi...",
              extra: "h-[5.3333333333vw] w-[5.8666666667vw]"
            },
            {
              to: !userInfo ? "/login" : "/account",
              icon: images.accountIcon,
              label: "Acc...",
              extra: "h-[5.3333333333vw] w-[5.8666666667vw]"
            },
          ].map(({ to, icon, label, svg, extra = "" }, index) => {
            const isActive = location.pathname == to;
            return (
              <Link
                key={index}
                to={to}
                className={`flex flex-col justify-center items-center h-[12.8333333333vw] w-[16.15vw] ${isActive
                  ? "bg-[linear-gradient(-180deg,_#32617f_20%,_#1f4258_91%)]"
                  : "bg-[linear-gradient(-180deg,#243a48_20%,#172732_91%)]"
                  } py-1`}
              >
                {svg ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 25 25"
                    className={`h-[5.3333333333vw] w-[6.6666666667vw] ${extra}`}
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
                    className={`${extra}`}
                    alt={label}
                  />
                )}
                <span className="text-[3.2vw] truncate">{label}</span>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default React.memo(Footer);