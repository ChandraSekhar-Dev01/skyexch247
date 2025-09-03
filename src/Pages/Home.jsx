import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Helper from "../helper";
import Appconfig from "../config/config";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../redux/slice/event/eventSlice";
import { Carousel } from 'antd';
import News from '../components/News';

function Home() {

  const navigate = useNavigate();
  const userInfo = Helper();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.events);


  const [inplayEvents, setInplayEvents] = useState([])
  const [isModalOpen, setIsModalOpen] = useState("");


  const images = {
    whatsAppIcon: "/Images/whatsApp-icon-grey.svg",
    skypeIcon: "/Images/skype-icon-grey.svg",
    emailIcon: "/Images/email-icon-grey.svg",
    igIcon: "/Images/ig-icon-grey.png",
    betFairIcon: "/Images/not-verified.png",
    accountIcon: "/Images/account-icon-white.png",
    homeIcon: "/Images/home-icon.svg",
    multiBet: "/Images/multiBet-pin.svg",
    trophyIcon: "/Images/trophy.svg",
    clockIcon: "/Images/clock-icon-white.png",
    referral: "/Images/Referral.webp",
    SportsGiff: "/Images/gamesGiff.gif",
    headphoneIcon: "/Images/headphone-icon-grey.svg",
    gcIcon: "/Images/gc-logo.png",
    phoneIcon: "/Images/phone-icon.png",
    mailIcon: "/Images/mail-icon.png",
    AndroidAppIcon: "/Images/AndroidAppIcon.png",
    browserIcon: "/Images/icon-browser-B.png"
  };


  const casinoSmall = [
    // {
    //   img: "/Images/dashboard-casino-img/black-jack.png",
    //   p: "Blackjack"
    // },
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



      {/* Footer Modal */}
      {/* Privacy Policy Modal */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-[#000000b3] z-[99999] flex flex-col justify-start items-center transition-opacity duration-300 ${isModalOpen !== "" ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className={`w-[89.3333333333vw] h-[90%] mt-[8.5vw]`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className=''>
            {isModalOpen === "PP" &&
              <>
                <div className='flex flex-[0_0_12.8vw] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] rounded-[1.6vw_1.6vw_0_0]'>
                  <h3 className='flex flex-1 justify-center items-center text-[#ffb200] text-[4.8vw] font-bold leading-[1] bg-[#0000] p-[4vw_1.8666666667vw] '>Privacy Policy</h3>
                </div>
                <div className='flex-1 p-[4.2666666667vw_3.4666666667vw] bg-[#fff] text-[4vw] leading-[1.5] overflow-y-scroll h-[77vh]'>
                  <p className="m-[0_0_3.2vw_0]">
                    Your privacy is important to us, and we are committed to protecting your
                    personal information. We will be clear and open about why we collect your
                    personal information and how we use it. Where you have choices or rights, we
                    will explain these to you.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    This Privacy Policy explains how exchsky.art uses your personal information
                    when you are using one of our website.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    If you do not agree with any statements contained within this Privacy
                    Policy, please do not proceed any further on our website. Please be aware
                    that registering an account on our website, placing bets and transferring
                    funds will be deemed confirmation of your full agreement with our Terms and
                    Conditions and our Privacy Policy. You have the right to cease using the
                    website at any time; however, we may still be legally required to retain
                    some of your personal information.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We may periodically make changes to this Privacy Policy and will notify you
                    of these changes by posting the modified terms on our platforms. We
                    recommend that you revisit this Privacy Policy regularly.
                  </p>
                  <h2 className="text-[5.8666666667vw] font-bold leading-[1.2] text-[#1b2d38] pb-[2.1333333333vw] mb-[4.8vw] border-b border-dashed border-[#e0e6e6]">
                    Who is in control of your information?
                  </h2>
                  <p className="m-[0_0_3.2vw_0]">
                    Throughout this Privacy Policy, " exchsky.art", "we", "our" and "us" relates
                    to Sky Infotech N.V., a limited liability company, registered in Curacao
                    with company number 152377, having its registered address at Abraham de
                    Veerstraat 9, Curacao. We control the ways your Personal Data is collected
                    and the purposes for which your Personal Data is used by exchsky.art, acting
                    as the "data controller" for the purposes of applicable European data
                    protection legislation.
                  </p>
                  <h2 className="text-[5.8666666667vw] font-bold leading-[1.2] text-[#1b2d38] pb-[2.1333333333vw] mb-[4.8vw] border-b border-dashed border-[#e0e6e6]">
                    Our Data Protection Officer
                  </h2>
                  <p className="m-[0_0_3.2vw_0]">
                    If you have concerns or would like any further information about how
                    exchsky.art handles your personal information, you can contact our Data
                    Protection Officer at{" "}
                    <a href="/" className="no-underline text-[#2789ce] outline-none [-webkit-tap-highlight-color:rgba(182,223,253,.5)]">support@exchsky.art</a>.
                  </p>
                  <h2 className="text-[5.8666666667vw] font-bold leading-[1.2] text-[#1b2d38] pb-[2.1333333333vw] mb-[4.8vw] border-b border-dashed border-[#e0e6e6]">
                    Information we collect about you
                  </h2>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">
                    Personally identifiable information
                  </h3>
                  <p className="m-[0_0_3.2vw_0]">
                    You provide this information to us in the process of setting up an account,
                    placing bets and using the services of the website. This information is
                    required to give you access to certain parts of our website and related
                    services. This data is collected when you:
                  </p>
                  <ul className="list-disc ml-[6.4vw]">
                    <li className="mb-[3.4666666667vw]">Register an account with exchsky.art</li>
                    <li className="mb-[3.4666666667vw]">voluntarily provide it when using the website</li>
                    <li className="mb-[3.4666666667vw]">personally disclose the information in public areas of the website</li>
                    <li className="mb-[3.4666666667vw]">Provide it when you contact our customer support team</li>
                  </ul>
                  <p className="m-[0_0_3.2vw_0]">The information includes your:</p>
                  <ul className="list-disc ml-[6.4vw]">
                    <li className="mb-[3.4666666667vw]">Username</li>
                    <li className="mb-[3.4666666667vw]">First and surname</li>
                    <li className="mb-[3.4666666667vw]">Date of birth</li>
                    <li className="mb-[3.4666666667vw]">Email address</li>
                    <li className="mb-[3.4666666667vw]">Residential address</li>
                    <li className="mb-[3.4666666667vw]">Phone number</li>
                    <li className="mb-[3.4666666667vw]">Billing address</li>
                    <li className="mb-[3.4666666667vw]">Identification documents</li>
                    <li className="mb-[3.4666666667vw]">Proof of address documents</li>
                    <li className="mb-[3.4666666667vw]">Transaction history</li>
                    <li className="mb-[3.4666666667vw]">Website usage preferences</li>
                    <li className="mb-[3.4666666667vw]">Any other information you provide us when using our platforms</li>
                    <li className="mb-[3.4666666667vw]">Credit/debit card details, or other payment information</li>
                  </ul>
                  <p className="m-[0_0_3.2vw_0]">
                    The information is also required for billing purposes and for the protection
                    of minors. You can amend and update this information by contacting Customer
                    Support. This data is for internal use only and is never passed to any third
                    parties except those stated below.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">
                    Telephone Calls
                  </h3>
                  <p className="m-[0_0_3.2vw_0]">
                    Telephone calls to and from our Customer Contact Centre are recorded for
                    training and security purposes along with the resolution of any queries
                    arising from the service you receive.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">
                    Social Features of Our Products
                  </h3>
                  <p className="m-[0_0_3.2vw_0]">
                    If you choose to participate in any of the social features that we provide
                    with our products (such as chat rooms) exchsky.art may store record or
                    otherwise process this data.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">
                    Non-personally identifiable information and traffic analysis
                  </h3>
                  <p className="m-[0_0_3.2vw_0]">
                    exchsky.art strives to make our website as user friendly as possible and
                    easy to find on the Internet. exchsky.art collects data on how you use the
                    site, which does not identify you personally. When you interact with the
                    services, our servers keep an activity log unique to you that collects
                    certain administrative and traffic information including: source IP address,
                    time of access, date of access, web page(s) visited, language use, software
                    crash reports and type of browser used. This information is essential for
                    the provision and quality of our services.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">
                    Cookies
                  </h3>
                  <p className="m-[0_0_3.2vw_0]">
                    exchsky.art uses cookies to ensure our website works efficiently and to
                    enhance your visits to our platforms. Further information can be found in
                    our Cookie Policy.
                  </p>
                  <h2 className="text-[5.8666666667vw] font-bold leading-[1.2] text-[#1b2d38] pb-[2.1333333333vw] mb-[4.8vw] border-b border-dashed border-[#e0e6e6]">
                    How and why we use your personal information
                  </h2>
                  <p className="m-[0_0_3.2vw_0]">
                    We use your personal information in a range of ways that fall into the
                    following categories:
                  </p>
                  <ul className="list-disc ml-[6.4vw]">
                    <li className="mb-[3.4666666667vw]">To provide you with the products or services you have requested;</li>
                    <li className="mb-[3.4666666667vw]">To meet our legal or regulatory obligations;</li>
                    <li className="mb-[3.4666666667vw]">To monitor our website performance; and</li>
                    <li className="mb-[3.4666666667vw]">To provide you with marketing information</li>
                  </ul>
                  <p className="m-[0_0_3.2vw_0]">
                    Your rights over your personal information differ according to which
                    category and lawful basis this fall into. This section provides more
                    information about each category, the rights it gives you, and how to
                    exercise these rights.
                    <strong>These rights are in bold following each category.</strong>
                  </p>
                  <h2 className="text-[5.8666666667vw] font-bold leading-[1.2] text-[#1b2d38] pb-[2.1333333333vw] mb-[4.8vw] border-b border-dashed border-[#e0e6e6]">
                    Providing our products and services
                  </h2>
                  <p className="m-[0_0_3.2vw_0]">
                    We use your personal information to enable you to use our websites, to set
                    up your account, participate in the online sports book, casino and to
                    provide you with customer service assistance.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    To provide our products and services, we share your information with
                    external organisations working on our behalf. Further information can be
                    found in the Sharing Information section.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    <strong>
                      This category covers the essential activities required in order for us to
                      provide you with the services you use or have signed up for. If you don't
                      want your information used in this way, your option is to not use our
                      services and close your account.
                    </strong>
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    exchsky.art will use your identification document and/or proof of address to
                    check your details in order for us to protect our users from fraudulent
                    behaviour and to promote responsible gambling.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We may conduct a security review at any time to validate the registration
                    data provided by you and to verify your use of the services and your
                    financial transactions for potential breach of our Terms and Conditions and
                    of applicable law. Security reviews may include but are not limited to
                    ordering a credit report and/or otherwise verifying the information you
                    provide against third-party databases.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    <strong>
                      We are required to carry out these activities to provide our products and
                      services legally, responsibly, and in line with the requirements
                      stipulated by regulators. We cannot provide you with our services without
                      carrying out these activities, if you don't want your information used in
                      this way, your option is to not use our services and close your account.
                    </strong>
                  </p>
                  <h2 className="text-[5.8666666667vw] font-bold leading-[1.2] text-[#1b2d38] pb-[2.1333333333vw] mb-[4.8vw] border-b border-dashed border-[#e0e6e6]">
                    To monitor our website performance
                  </h2>
                  <p className="m-[0_0_3.2vw_0]">
                    As detailed above, we use cookies and traffic analysis in order to improve
                    the performance of our website and services available. We have a legitimate
                    interest in carrying out these activities and we ensure that we minimise any
                    impact on your privacy.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    <strong>
                      You have the 'right to object' to activities carried out for our
                      legitimate interest if you believe your right to privacy outweighs our
                      legitimate business interests. However, as the activities involved are
                      central to our business, if you wish to object further than managing your
                      cookies this may mean you need to close your account.
                    </strong>
                  </p>
                  <h2 className="text-[5.8666666667vw] font-bold leading-[1.2] text-[#1b2d38] pb-[2.1333333333vw] mb-[4.8vw] border-b border-dashed border-[#e0e6e6]">
                    Marketing
                  </h2>
                  <p className="m-[0_0_3.2vw_0]">
                    If you have given us your consent to do so, we will send you offers and
                    promotions via email, SMS or online. We do not share your information with
                    third parties for them to use for their own marketing.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    <strong>
                      You have the right to withdraw consent or update your marketing
                      preferences at any time.
                    </strong>
                  </p>
                  <h2 className="text-[5.8666666667vw] font-bold leading-[1.2] text-[#1b2d38] pb-[2.1333333333vw] mb-[4.8vw] border-b border-dashed border-[#e0e6e6]">
                    Your rights
                  </h2>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">
                    Your rights to rectification
                  </h3>
                  <p className="m-[0_0_3.2vw_0]">
                    If you believe the personal information we hold on you is incorrect, you
                    have the right for this to be rectified. For any information that cannot be
                    updated through My Account,please contact
                    <a href="/" className="no-underline text-[#2789ce] outline-none [-webkit-tap-highlight-color:rgba(182,223,253,.5)]">support@exchsky.art</a>.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">
                    Your right to request a copy of your personal information
                  </h3>
                  <p className="m-[0_0_3.2vw_0]">
                    If you would like a copy of the personal information we hold about you, you
                    should request it through live chat or by emailing{" "}
                    <a href="/" className="no-underline text-[#2789ce] outline-none [-webkit-tap-highlight-color:rgba(182,223,253,.5)]">support@exchsky.art</a> and we will
                    provide you with a form to complete. The form is not compulsory but helps us
                    to provide you with the information you are looking for in a timely manner.
                    To ensure the security of your personal information, we will ask you for
                    valid proof of identity and once we've received it we will provide our
                    response within one month. If your request is unusually complex and likely
                    to take longer than a month, we will let you know as soon as we can and tell
                    you how long we think it will take, such request may also incur an
                    administration cost.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">
                    Your right of erasure
                  </h3>
                  <p className="m-[0_0_3.2vw_0]">
                    You can request us to erase your personal data where there is no compelling
                    reason to continue processing. This right only applies in certain
                    circumstances; it is not a guaranteed or absolute right.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    The right to erasure does not apply if processing is necessary for one of
                    the following reasons: to exercise the right of freedom of expression and
                    information; to comply with a legal obligation; for the performance of a
                    task carried out in the public interest or in the exercise of official
                    authority; for archiving purposes in the public interest, scientific
                    research historical research or statistical purposes where erasure is likely
                    to render impossible or seriously impair the achievement of that processing;
                    or *for the establishment, exercise or defence of legal claims.
                  </p>
                  <h2 className="text-[5.8666666667vw] font-bold leading-[1.2] text-[#1b2d38] pb-[2.1333333333vw] mb-[4.8vw] border-b border-dashed border-[#e0e6e6]">
                    Sharing your personal information
                  </h2>
                  <p className="m-[0_0_3.2vw_0]">We may disclose your Personal Data to third parties:</p>
                  <ul className="list-disc ml-[6.4vw]">
                    <li className="mb-[3.4666666667vw]">
                      if we are under a duty to disclose or share your personal information in
                      order to comply with any legal or regulatory obligation;
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      in order to enforce or apply the terms of this notice or any other
                      agreements;
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      to assist us in providing you with the products and services you request,
                      including but not limited to third party software providers;
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      if, in our sole determination, you are found to have cheated or attempted
                      to defraud us, or other users of the service in any way including but not
                      limited to game manipulation or payment fraud;
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      for the purpose of research on the prevention of addiction (this data will
                      be made anonymous)
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      to protect the rights, property or safety of us, our customers or others;
                      and
                    </li>
                    <li className="mb-[3.4666666667vw]">where we have received your permission for us to do so.</li>
                  </ul>
                  <p className="m-[0_0_3.2vw_0]">
                    Personal Information collected on the services may be stored and processed
                    in any country in which we or our affiliates, suppliers or agents maintain
                    facilities. By using our services, you expressly consent to any transfer of
                    information outside of your country. When we transfer any part of your
                    Personal Data outside the EEA or adequate jurisdictions we will take
                    reasonable steps to ensure that it is treated as securely as it is within
                    the EEA or adequate jurisdictions. These steps include but are not limited
                    to the following:
                  </p>
                  <ul className="list-disc ml-[6.4vw]">
                    <li className="mb-[3.4666666667vw]">Binding corporate rules;</li>
                    <li className="mb-[3.4666666667vw]">Model contracts; or</li>
                    <li className="mb-[3.4666666667vw]">US/EU privacy shield</li>
                  </ul>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">
                    Security
                  </h3>
                  <p className="m-[0_0_3.2vw_0]">
                    We understand the importance of security and the techniques needed to secure
                    information. We store all of the Personal Information we receive directly
                    from you in an encrypted and password protected database residing within our
                    secure network behind active state-of-the-art firewall software. (Our
                    Services support SSL Version 3 with 128-bit encryption). We also take
                    measures to ensure our subsidiaries, agents, affiliates and suppliers employ
                    adequate security measures.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">
                    Retention
                  </h3>
                  <p className="m-[0_0_3.2vw_0]">
                    We retain personal information for as long as we reasonably require it for
                    legal or business purposes. In determining data retention periods,
                    exchsky.art takes into consideration local laws, contractual obligations,
                    and the expectations and requirements of our customers. When we no longer
                    need your personal information, we securely delete or destroy it.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">
                    Third-Party Practices
                  </h3>
                  <p className="m-[0_0_3.2vw_0]">
                    We cannot ensure the protection of any information that you provide to a
                    third-party online site that links to or from the services or any
                    information collected by any third party administering our affiliate program
                    (if applicable) or any other program, since these third-party online sites
                    are owned and operated independently from us. Any information collected by
                    these third parties is governed by the privacy policy, if any, of such third
                    party.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Our web site may contain links to other web sites, which are outside our
                    control and are not covered by this Privacy Policy. If you access other
                    sites using the links provided, the operators of these sites may collect
                    information from you which will be used by them in accordance with their
                    privacy policy, which may differ from ours. We are not responsible solely
                    the operators of these websites shall be responsible for their functionality
                    or possible errors on the linked sites.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">
                    Analytics
                  </h3>
                  <p className="m-[0_0_3.2vw_0]">
                    The services contained in this section enable the Owner to monitor and
                    analyse web traffic and can be used to keep track of user behaviour.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">Google Analytics (Google Inc.)</p>
                  <p className="m-[0_0_3.2vw_0]">
                    Google Analytics is a web analysis service provided by Google Inc.
                    ("Google"). Google utilizes the Data collected to track and examine the use
                    of exchsky.art, to prepare reports on its activities and share them with
                    other Google services.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Google may use the Data collected to contextualize and personalize the ads
                    of its own advertising network.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">Personal Data collected: Cookies and Usage Data</p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">
                    Disclaimer
                  </h3>
                  <p className="m-[0_0_3.2vw_0]">
                    The Services operate 'AS-IS' and 'AS-AVAILABLE' without liability of any
                    kind. We are not responsible for events beyond our direct control. Due to
                    the complex and ever-changing nature of our technology and business, we
                    cannot guarantee, nor do we claim that there will be error-free performance
                    regarding the privacy of your Personal Information, and we will not be
                    liable for any indirect, incidental, consequential or punitive damages
                    relating to the use or release of said Personal Information.
                  </p>
                  <h2 className="text-[5.8666666667vw] font-bold leading-[1.2] text-[#1b2d38] pb-[2.1333333333vw] mb-[4.8vw] border-b border-dashed border-[#e0e6e6]">
                    Changes to our Privacy Statement
                  </h2>
                  <p className="m-[0_0_3.2vw_0]">
                    We may update this policy from time to time, so please review it frequently.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    If any material changes are made to this Privacy Policy we will use
                    reasonable endeavours to inform you in advance by email, notice on the
                    Website or other agreed communications channels. We will communicate the
                    changes to you in advance, giving an appropriate amount of time for you to
                    consider and understand the changes before they become effective.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We will not enforce material changes to the Privacy Policy without your
                    express consent. If you decline to accept the changes to the Privacy Policy,
                    or otherwise do not accept the changes within the time period, we may not be
                    able to continue to provide some or all products and services.
                  </p>
                </div>
              </>
            }
            {isModalOpen === "TC" &&
              <>
                <div className='flex flex-[0_0_12.8vw] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] rounded-[1.6vw_1.6vw_0_0]'>
                  <h3 className='flex flex-1 justify-center items-center text-[#ffb200] text-[4.8vw] font-bold leading-[1] bg-[#0000] p-[4vw_1.8666666667vw] '>Terms and Conditions</h3>
                </div>
                <div className='flex-1 p-[4.2666666667vw_3.4666666667vw] bg-[#fff] text-[4vw] leading-[1.5] overflow-y-scroll h-[77vh]'>
                  <h2 className="text-[5.8666666667vw] font-bold leading-[1.2] text-[#1b2d38] pb-[2.1333333333vw] mb-[4.8vw] border-b border-dashed border-[#e0e6e6]">Description: Initial Terms and Conditions replacing general rules</h2>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">Introduction</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    These terms and conditions and the documents referred and linked to below
                    (the “Terms”) set out the basis upon which the website operated under the
                    URL{" "}
                    <a className="text-[#2789ce]" href="#" target="_blank">
                      https://www.skyech.art/
                    </a>
                    (the “Website”) and its related or connected services (collectively, the
                    “Service”) will be provided to you.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Please read these terms very carefully as they form a binding legal
                    agreement between you - our customer (the “Customer”) - and us. By opening
                    an account (the “Account”) and using the Service you agree to be bound by
                    these terms, together with any amendment which may be published from time to
                    time.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    If anything is not clear to you please contact us using the contact details
                    below.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">The Service is supplied by Sky Infotech N.V.</p>
                  <p className="m-[0_0_3.2vw_0]">
                    Transactions and payment services are operated by Sky Infotech N.V a limited
                    liability company registered in Curacao, with company registration number
                    152377 and holding a license no. 365/JAZ Sub-License GLH- OCCHKTW0707072017.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    exchsky.art will only communicate with Customers by email to their
                    registered email address (the “Registered Email Address”) as provided when
                    opening your Exchange Sky account: Communication from exchsky.art will be
                    issued through the following:
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    mail only:&nbsp;<a className="text-[#2789ce]" href="#">support@exchsky.art</a>
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">General Terms</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    We reserve the right to amend the terms (including to any documents referred
                    and linked to below) at any time. When such amendment is not substantial, we
                    may not provide you with prior notice. You will be notified in advance for
                    material changes to the terms and may require you to re-confirm acceptance
                    to the updated terms before the changes come into effect. If you object to
                    any such changes, you must immediately stop using the service and the
                    termination provisions below will apply. Continued use of the service
                    indicates your agreement to be bound by such changes. Any bets not settled
                    prior to the changed terms taking effect will be subject to the pre-existing
                    terms.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    If at any time you are in any doubt about how to place bets or otherwise use
                    the service you should refer back to these terms or contact our customer
                    service department (Customer Service Department) at
                    <a className="text-[#2789ce]" href="#">support@exchsky.art</a>
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">1. Your Obligations</h3>
                  <p className="m-[0_0_3.2vw_0]">You agree that at all times when using the Service:</p>
                  <p className="m-[0_0_3.2vw_0]">
                    You are over 18 years of age (or over the age of majority as stipulated in
                    the laws of the jurisdiction applicable to you) and can enter into a binding
                    legal agreement with us.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    It is the User’s responsibility to check and enter this site only if the
                    user is in a country where it is lawful to place bets on the service (if in
                    doubt, you should seek local legal advice). It is your responsibility to
                    ensure that your use of the service is legal.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    When sending money to us you are authorised to do so e.g. you are the
                    authorised user of the debit/credit card or other payment method you use.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You will not, by participating in the Services and/or placing bets be placed
                    in a position of actual, potential or perceived conflict of interest in any
                    manner.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You have never failed to pay, or attempted to fail to pay a liability on a
                    bet.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You are acting solely on your own behalf as a private individual in a
                    personal capacity and not on behalf of another party or for any commercial
                    purposes.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    By placing bets you may lose some or all of your money lodged with us in
                    accordance with these terms and you will be fully responsible for that loss.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You must use the service for legitimate betting purposes only and must not
                    nor attempt to manipulate any market or element within the service in bad
                    faith or in a manner that adversely affects the integrity of the Service or
                    us.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    When placing bets on the service you must not use any information obtained
                    in breach of any legislation in force in the country in which you were when
                    the bet was placed.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You must make all payments to us in good faith and not attempt to reverse a
                    payment made or take any action which will cause such payment to be reversed
                    by a third party in order to avoid a liability legitimately incurred.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You must otherwise generally act in good faith in relation to us of the
                    service at all times and for all bets made through the service.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">2. Registration</h3>
                  <p className="m-[0_0_3.2vw_0]">You agree that at all times when using the service:</p>
                  <p className="m-[0_0_3.2vw_0]">
                    In order to protect the integrity of the service and for other operational
                    reasons we reserve the right to refuse to accept a registration application
                    from any applicant at our sole discretion and without any obligation to
                    communicate a specific reason.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Before using the service, you must personally complete the registration form
                    and read and accept these terms. In order to start betting on the service,
                    we will require you to become a verified Customer which includes passing
                    certain checks. You may be required to provide a valid proof of
                    identification and any other document as it may be deemed necessary.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    This includes but is not limited to, a picture ID (copy of passport,
                    driver’s licence or national ID card) and a recent utility bill listing your
                    name and address as proof of residence to the minimum. We reserve the right
                    to suspend wagering or restrict Account options on any Account until the
                    required information is received. This procedure is a statutory requirement
                    and is done in accordance with the applicable gaming regulation and the
                    anti-money laundering legal requirements. Additionally, you will need to
                    fund your exchsky.art Account using the payment methods set out on the
                    payment section of our Website.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You must provide complete and accurate information about yourself, inclusive
                    of a valid name, surname, address and email address, and update such
                    information in the future to keep it complete and accurate. It is your
                    responsibility to keep your contact details up to date on your account.
                    Failure to do so may result in you failing to receive important account
                    related notifications and information from us, including changes we make to
                    these terms. We identify and communicate with our Customers via their
                    Registered Email Address. It is the responsibility of the Customer to
                    maintain an active and unique email account, to provide us with the correct
                    email address and to advise exchsky.art of any changes in their email
                    address. Each Customer is wholly responsible for maintaining the security of
                    his Registered Email Address to prevent the use of his Registered Email
                    Address by any third party. exchsky.art shall not be responsible for any
                    damages or losses deemed or alleged to have resulted from communications
                    between exchsky.art and the Customer using the Registered Email Address. Any
                    Customer not having an email address reachable by exchsky.art will have his
                    Account suspended until such an address is provided to us. We will
                    immediately suspend your Account upon written notice to you to this effect
                    if you intentionally provide false or inaccurate personal information. We
                    may also take legal action against you for doing so in certain circumstances
                    and/or contact the relevant authorities who may also take action against
                    you.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You are only allowed to register one Account with the service. Accounts are
                    subject to immediate closure if it is found that you have multiple Accounts
                    registered with us.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    This includes the use of representatives, relatives, associates, affiliates,
                    related parties, connected persons and/ or third parties operating on your
                    behalf.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    In order to ensure your financial worthiness and to confirm your identity,
                    we may use any third party information providers we consider necessary.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You must keep your password for the service confidential. Provided that the
                    Account information requested has been correctly supplied, we are entitled
                    to assume that bets, deposits and withdrawals have been made by you. We
                    advise you to change your password on a regular basis and never disclose it
                    to any third party. Passwords must contain at least one letter, one number
                    and one special character and must be at least eight characters long. It is
                    your responsibility to protect your password and any failure to do so shall
                    be at your sole risk and expense. You must log out of the Service at the end
                    of each session. If you believe any of your Account information is being
                    misused by a third party, or your Account has been hacked into, or your
                    password has been discovered by a third party, you must notify us
                    immediately by email using your registered Email Address to
                    <a className="text-[#2789ce]" href="#">support@exchsky.art</a>
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You must notify us if your registered email Address has been hacked into, we
                    may, however, require you to provide additional information/ documentation
                    so that we can verify your identity. We will immediately suspend your
                    Account once we are aware of such an incident. In the meantime you are
                    responsible for all activity on your Account including third party access,
                    regardless of whether or not their access was authorised by you.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You must not at any time transmit any content or other information on the
                    service to another Customer or any other party by way of a screen capture
                    (or other similar method), nor display any such information or content in a
                    frame or in any other manner that is different from how it would appear if
                    such Customer or third party had typed the URL for the service into the
                    browser line;
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    When registering, you will be required to choose the currency in which you
                    will operate your account. This will be the currency of your deposits,
                    withdrawals and bets placed and matched into the service as set out in these
                    terms. Some payment methods do not process in all currencies. In such cases
                    a processing currency will be displayed, along with a conversion calculator
                    available on the page.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We are under no obligation to open an account for you and our website
                    sign-up page is merely an invitation to treat. It is entirely within our
                    sole discretion whether or not to proceed with the opening of an account for
                    you and, should we refuse to open an Account for you, we are under no
                    obligation to provide you with a reason for the refusal.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Upon receipt of your application, we may be in touch to request further
                    information and/ or documentation from you in order for us to comply with
                    our regulatory and legal obligations.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">3. Restricted Use</h3>
                  <p className="m-[0_0_3.2vw_0]">3.1 You must not use the Service:</p>
                  <p className="m-[0_0_3.2vw_0]">
                    if you are under the age of 18 years (or below the age of majority as
                    stipulated in the laws of the jurisdiction applicable to you) or if you are
                    not legally able to enter into a binding legal agreement with us;
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    to collect nicknames, e-mail addresses and/or other information of other
                    Customers by any means (for example, by sending spam, other types of
                    unsolicited e-mails or the unauthorised framing of, or linking to, the
                    Service);
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    to disrupt or unduly affect or influence the activities of other Customers
                    or the operation of the Service generally;.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    to promote unsolicited commercial advertisements, affiliate links, and other
                    forms of solicitation which may be removed from the Service without notice;
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    in any way which, in our reasonable opinion, could be considered as an
                    attempt to: (i) cheat the Service or another Customer using the Service; or
                    (ii) collude with any other Customer using the Service in order to obtain a
                    dishonest advantage;
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    to scrape our odds or violate any of our Intellectual Property Rights; or
                  </p>
                  <p className="m-[0_0_3.2vw_0]">for any unlawful activity whatsoever.</p>
                  <p className="m-[0_0_3.2vw_0]">
                    3.2 You cannot sell or transfer your account to third parties, nor can you
                    acquire a player account from a third party.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">3.3 You may not, in any manner, transfer funds between player accounts.</p>
                  <p className="m-[0_0_3.2vw_0]">
                    3.4 We may immediately terminate your Account upon written notice to you if
                    you use the Service for unauthorised purposes. We may also take legal action
                    against you for doing so in certain circumstances.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">4. Privacy</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    Any information provided to us by you will be protected and processed in
                    strict accordance with these Terms and our Privacy Policy.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We will not reveal the identity of any person who places bets using the
                    service unless the information is lawfully required by competent authorities
                    such as Regulators, the Police (e.g. to investigate fraud, money laundering
                    or sports integrity issues), or by Financial Entities such as banks or
                    payment suppliers or as permitted from time to time pursuant to the Privacy
                    Policy.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Upon registration, your information will be stored in our database. This
                    means that your personal information may be transferred outside the European
                    Economic Area (EEA) to jurisdictions that may not provide the same level of
                    protection and security as applied within the EU or EEA. By agreeing to
                    these Terms you agree to the transfer of your personal information for the
                    purpose of the provision of the Service object of this agreement and as
                    further detailed in our&nbsp;Privacy Policy.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">5. Your Account</h3>
                  <p className="m-[0_0_3.2vw_0]">We accept Accounts in multiple currencies, please refer to:</p>
                  <p className="m-[0_0_3.2vw_0]">
                    <a className="text-[#2789ce]" href="#">https://exchsky.art/currency</a>{" "}
                    account balances and transactions appear in the currency selected when the
                    account was originally opened.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">We do not give credit for the use of the service.</p>
                  <p className="m-[0_0_3.2vw_0]">
                    We may close or suspend an Account and refund any monies held if you are not
                    or we reasonably believe that you are not complying with these Terms, or to
                    ensure the integrity or fairness of the Service or if we have other
                    reasonable grounds to do so. We may not always be able to give you prior
                    notice.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We reserve the right to suspend an account without prior notice and return
                    all funds. Contractual obligations already matured will however be honoured.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We reserve the right to refuse, restrict, cancel or limit any wager at any
                    time for whatever reason, including any bet perceived to be placed in a
                    fraudulent manner in order to circumvent our betting limits and/ or our
                    system regulations.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    If we close or suspend your account due to you not complying with these
                    terms, we may cancel and/or void any of your bets.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    If any amount is mistakenly credited to your account it remains our property
                    and when we become aware of any such mistake, we shall notify you and the
                    amount will be withdrawn from your Account.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    If, for any reason, your account goes overdrawn, you shall be in debt to us
                    for the amount overdrawn.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You must inform us as soon as you become aware of any errors with respect to
                    your Account.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Customers have the right to self-exclude themselves
                    from&nbsp;bertbarter.com.. These requests have to be received from the
                    Customer’s Registered Email Address and have to be sent to{" "}
                    <a className="text-[#2789ce]" href="#">support@exchsky.art</a>.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Customers may set limitations on the amount they may wager and lose. Such
                    request has to be sent from the Customer’s Registered Email Address to&nbsp;
                    <a className="text-[#2789ce]" href="#">support@exchsky.art</a>.
                    Implementation and increasing of limits shall be processed diligently,
                    however, any request for removing or reducing limitations shall be done
                    after a cooling-off period of seven days following your request.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Should you wish to close your account with us, please send an email from
                    your Registered Email Address to&nbsp;
                    <a className="text-[#2789ce]" href="#">support@exchsky.art</a>.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">6. Deposit of Funds</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    You may deposit funds into your Account by any of the methods set out on our
                    Website. All deposits should be made in the same currency as your Account
                    and any deposits made in any other currency will be converted using the
                    daily exchange rate obtained from&nbsp;www.oanda.com, or at our own bank’s
                    prevailing rate of exchange following which your Account will be deposited
                    accordingly.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Fees and charges may apply to customer’s deposits and withdrawals. Fee and
                    charge details can be found here:https://www.skyech.art/ payment-options.
                    Any deposit made to an account which is not rolled over (risked) three times
                    will incur a 3% processing fee and any applicable withdrawal fee. You are
                    responsible for your own bank charges that you may incur due to depositing
                    funds with us. Exceptions to this rule are outlined in our “Payment Options”
                    pages.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    exchsky.art is not a financial institution and uses a third party electronic
                    payment processors to process credit and debit card deposits; they are not
                    processed directly by us. If you deposit funds by either a credit card or a
                    debit card, your Account will only be credited if we receive an approval and
                    authorisation code from the payment issuing institution. If your card’s
                    issuer gives no such authorisation, your account will not be credited with
                    those funds.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Your funds are deposited and held in the respective client account based on
                    the currency of your account.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We are not a financial institution and you will not be entitled to any
                    interest on any outstanding account balances and any interest accrued on the
                    client accounts will be paid to us.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">Funds originating from ill-gotten means must not be deposited with us.</p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">7. Withdrawal of Funds</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    You may withdraw any or all of your account Balance within the transaction
                    maximums as shown on the Website
                    here:&nbsp;https://https://www.skyech.art//payment-options. Note that fees
                    may apply as outlined in section 7.b.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    All withdrawals must be made in the currency of your account, unless
                    otherwise stipulated by us.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We reserve the right to request documentation for the purpose of identity
                    verification prior to granting any withdrawals from your Account. We also
                    reserve our rights to request this documentation at any time during the
                    lifetime of your relationship with us.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    All withdrawals must be made to the original debit, credit card, bank
                    account, method of payment used to make the payment to your exchsky.art
                    Account. We may, and always at our own discretion, allow you to withdraw to
                    a payment method from which your original deposit did not originate. This
                    will always be subject to additional security checks.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Should you wish to withdraw funds but your account is either inaccessible,
                    dormant, locked or closed, please contact our Customer Service Department at{" "}
                    <a className="text-[#2789ce]" href="#">support@exchsky.art</a>
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">8. Payment Transactions and Processors</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    You are fully responsible for paying all monies owed to us. You must make
                    all payments to us in good faith and not attempt to reverse a payment made
                    or take any action which will cause such payment to be reversed by a third
                    party in order to avoid a liability legitimately incurred. You will
                    reimburse us for any charge-backs, denial or reversal of payment you make
                    and any loss suffered by us as a consequence thereof. We reserve the right
                    to also impose an administration fee of €60, or currency equivalent per
                    charge-back, denial or reversal of payment you make.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We reserve the right to use third party electronic payment processors and or
                    merchant banks to process payments made by you and you agree to be bound by
                    their terms and conditions providing they are made aware to you and those
                    terms do not conflict with these Terms.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    All transactions made on our site might be checked to prevent money
                    laundering or terrorism financing activity. Suspicious transactions will be
                    reported to the relevant authority depending on the jurisdiction governing
                    the transaction.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">9. Errors</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    In the event of an error or malfunction of our system or processes, all bets
                    are rendered void. You are under an obligation to inform us immediately as
                    soon as you become aware of any error with the service. In the event of
                    communication or system errors or bugs or viruses occurring in connection
                    with the service and/or payments made to you as a result of a defect or
                    effort in the Service, we will not be liable to you or to any third party
                    for any direct or indirect costs, expenses, losses or claims arising or
                    resulting from such errors, and we reserve the right to void all games/bets
                    in question and take any other action to correct such errors.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    In the event of a casino system malfunction, or disconnection issues, all
                    bets are rendered void. In the event of such error or any system failure or
                    game error that results in an error in any odds calculation, charges, fees,
                    rake, bonuses or payout, or any currency conversion as applicable, or other
                    casino system malfunction (the “Casino Error”), we reserve the right to
                    declare null and void any wagers or bets that were the subject of such
                    Casino Error and to take any money from your Account relating to the
                    relevant bets or wagers.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We make every effort to ensure that we do not make errors in posting lines.
                    However, if as a result of human error or system problems a bet is accepted
                    at an odd that is: materially different from those available in the general
                    market at the time the bet was made; or clearly incorrect given the chance
                    of the event occurring at the time the bet was made then we reserve the
                    right to cancel or void that wager, or to cancel or void a wager made after
                    an event has started.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We have the right to recover from you any amount overpaid and to adjust your
                    account to rectify any mistake. An example of such a mistake might be where
                    a price is incorrect or where we enter a result of an event incorrectly. If
                    there are insufficient funds in your Account, we may demand that you pay us
                    the relevant outstanding amount relating to any erroneous bets or wagers.
                    Accordingly, we reserve the right to cancel, reduce or delete any pending
                    plays, whether placed with funds resulting from the error or not.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">10. General Rules</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    If a sport-specific rule contradicts a general rule, then the general rule
                    will not apply.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    The winner of an event will be determined on the date of the event’s
                    settlement; we do not recognise protested or overturned decisions for
                    wagering purposes. The result of an event suspended after the start of
                    competition will be decided according to the wagering rules specified for
                    that sport by us.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    All results posted shall be final after 72 hours and no queries will be
                    entertained after that period of time. Within 72 hours after results are
                    posted, the company will only reset/correct the results due to human error,
                    system error or mistakes made by the referring results source.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Minimum and maximum wager amounts on all sporting events will be determined
                    by us and are subject to change without prior written notice. We also
                    reserve the right to adjust limits on individual Accounts as well.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Customers are solely responsible for their own account transactions. Please
                    be sure to review your wagers for any mistakes before sending them in. Once
                    a transaction is complete, it cannot be changed. We do not take
                    responsibility for missing or duplicate wagers made by the Customer and will
                    not entertain discrepancy requests because a play is missing or duplicated.
                    Customers may review their transactions in the My Account section of the
                    site after each session to ensure all requested wagers were accepted.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    For a wager to have action on any named contestant in a Yes/No Proposition,
                    the contestant must enter and compete in the event.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We attempt to follow the normal conventions to indicate home and away teams
                    by indicating the home and away team by means of vertical placement on the
                    desktop site version. This means in American Sports we would place the home
                    team on the bottom. For Non-US sports, we would indicate the home team on
                    top. In the case of a neutral venue, we attempt to include the letter “N”
                    next to the team names to indicate this. For the Asian and mobile versions,
                    we do not distinguish between European and American Sports. On the Asian and
                    mobile versions of the site, the home team is always listed first. However,
                    we do not guarantee the accuracy of this information and unless there is an
                    official venue change subsequent to bets being placed, all wagers have
                    action.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    A game/match will have action regardless of the League heading that is
                    associated with the matchup. For example, two teams from the same League are
                    playing in a Cup competition. If the matchup is mistakenly placed in the
                    League offering, the game/match will still have action, as long as the
                    matchup is correct. In other words, a matchup will have action as long as
                    the two teams are correct, and regardless of the League header in which it
                    is placed on our Website.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    If an event is not played on the same date as announced by the governing
                    body, then all wagers on the event have no action. If an event is posted by
                    us, with an incorrect date, all wagers have action based on the date
                    announced by the governing body.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    exchsky.art reserves the right to remove events, markets and any other
                    product from the website.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    exchsky.art eserves the right to restrict the casino access of any player
                    without prior notice.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    In all futures wagering (for example, total season wins, Super Bowl winner,
                    etc.), the winner as determined by the Governing Body will also be declared
                    the winner for betting purposes except when the minimum number of games
                    required for the future to have “action” has not been completed.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">11. Communications and Notices</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    All communications and notices to be given under these terms by you to us
                    shall be sent to&nbsp;
                    <a className="text-[#2789ce]" href="#">support@exchsky.art</a>
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    All communications and notices to be given under these terms by us to you
                    shall, unless otherwise specified in these terms, be either posted on the
                    Website and/or sent to the Registered Email Address we hold on our system
                    for the relevant Customer. The method of such communication shall be in our
                    sole and exclusive discretion.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    All communications and notices to be given under these terms by either you
                    or us shall be in writing in the English language when the service is not
                    operated by exchsky.art , and must be given to and from the Registered Email
                    Address in your Account.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">12. Matters Beyond Our Control</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    We cannot be held liable for any failure or delay in providing the service
                    due to an event of Force Majeure which could reasonably be considered to be
                    outside our control despite our execution of reasonable preventative
                    measures such as: an act of God; trade or labour dispute; power cut; act,
                    failure or omission of any government or authority; obstruction or failure
                    of telecommunication services; or any other delay or failure caused by a
                    third party, and we will not be liable for any resulting loss or damage that
                    you may suffer. In such an event, we reserve the right to cancel or suspend
                    the Service without incurring any liability.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">13. Liability</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    TO THE EXTENT PERMITTED BY APPLICABLE LAW, WE WILL NOT COMPENSATE YOU FOR
                    ANY REASONABLY FORESEEABLE LOSS OR DAMAGE (EITHER DIRECT OR INDIRECT) YOU
                    MAY SUFFER IF WE FAIL TO CARRY OUT OUR OBLIGATIONS UNDER THESE TERMS UNLESS
                    WE BREACH ANY DUTIES IMPOSED ON US BY LAW (INCLUDING IF WE CAUSE DEATH OR
                    PERSONAL INJURY BY OUR NEGLIGENCE) IN WHICH CASE WE SHALL NOT BE LIABLE TO
                    YOU IF THAT FAILURE IS ATTRIBUTED TO
                  </p>
                  <p className="m-[0_0_3.2vw_0]">(I) YOUR OWN FAULT;</p>
                  <p className="m-[0_0_3.2vw_0]">
                    (II) A THIRD PARTY UNCONNECTED WITH OUR PERFORMANCE OF THESE TERMS (FOR
                    INSTANCE PROBLEMS DUE TO COMMUNICATIONS NETWORK PERFORMANCE, CONGESTION, AND
                    CONNECTIVITY OR THE PERFORMANCE OF YOUR COMPUTER EQUIPMENT); OR(III) ANY
                    OTHER EVENTS WHICH NEITHER WE NOR OUR SUPPLIERS COULD HAVE FORESEEN OR
                    FORESTALLED EVEN IF WE OR THEY HAD TAKEN REASONABLE CARE. AS THIS SERVICE IS
                    FOR CONSUMER USE ONLY WE WILL NOT BE LIABLE FOR ANY BUSINESS LOSSES OF ANY
                    KIND.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    IN THE EVENT THAT WE ARE HELD LIABLE FOR ANY EVENT UNDER THESE TERMS, OUR
                    TOTAL AGGREGATE LIABILITY TO YOU UNDER OR IN CONNECTION WITH THESE TERMS
                    SHALL NOT EXCEED
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    (A) THE VALUE OF THE BETS AND OR WAGERS YOU PLACED VIA YOUR ACCOUNT IN
                    RESPECT OF THE RELEVANT BET/WAGER OR PRODUCT THAT GAVE RISE TO THE RELEVANT
                    LIABILITY, OR
                  </p>
                  <p className="m-[0_0_3.2vw_0]">(B) EUR €500 IN AGGREGATE, WHICHEVER IS LOWER.</p>
                  <p className="m-[0_0_3.2vw_0]">
                    WE STRONGLY RECOMMEND THAT YOU (I) TAKE CARE TO VERIFY THE SUITABILITY AND
                    COMPATIBILITY OF THE SERVICE WITH YOUR OWN COMPUTER EQUIPMENT PRIOR TO USE;
                    AND(II) TAKE REASONABLE PRECAUTIONS TO PROTECT YOURSELF AGAINST HARMFUL
                    PROGRAMS OR DEVICES INCLUDING THROUGH INSTALLATION OF ANTI-VIRUS SOFTWARE.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">14. Gambling By Those Under Age</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    If we suspect that you are or receive notification that you are currently
                    under 18 years or were under 18 years (or below the age of majority as
                    stipulated in the laws of the jurisdiction applicable to you) when you
                    placed any bets through the service your account will be suspended to
                    prevent you placing any further bets or making any withdrawals from your
                    account. We will then investigate the matter, including whether you have
                    been betting as an agent for, or otherwise on behalf, of a person under 18
                    years (or below the age of majority as stipulated in the laws of the
                    jurisdiction applicable to you). If having found that you: (a) are
                    currently; (b) were under 18 years or below the majority age which applies
                    to you at the relevant time; or © have been betting as an agent for or at
                    the behest of a person under 18 years or below the majority age which
                    applies:
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    i. all winnings currently or due to be credited to your account will be
                    retained;
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    ii. all winnings gained from betting through the service whilst under age
                    must be paid to us on demand (if you fail to comply with this provision we
                    will seek to recover all costs associated with recovery of such sums);
                    and/or
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    iii. any monies deposited in your exchsky.art account which are not winnings
                    will be returned to you.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    This condition also applies to you if you are over the age of 18 years but
                    you are placing your bets within a jurisdiction which specifies a higher age
                    than 18 years for legal betting and you are below that legal minimum age in
                    that jurisdiction.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    In the event we suspect you are in breach of the provisions of this Clause
                    15 or are attempting to rely on them for a fraudulent purpose, we reserve
                    the right to take any action necessary in order to investigate the matter,
                    including informing the relevant law enforcement agencies.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">15. Fraud</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    We will seek criminal and contractual sanctions against any Customer
                    involved in fraud, dishonesty or criminal acts. We will withhold payment to
                    any Customer where any of these are suspected. The Customer shall indemnify
                    and shall be liable to pay to us on demand, all costs, charges or losses
                    sustained or incurred by us (including any direct, indirect or consequential
                    losses, loss of profit, loss of business and loss of reputation) arising
                    directly or indirectly from the Customer’s fraud, dishonesty or criminal
                    act.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">16. Intellectual Property</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    We trade as exchsky.art and the exchsky.art name and logo are registered
                    trademarks. Any unauthorised use of our trademark and logo may result in
                    legal action being taken against you.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    The <a className="text-[#2789ce]" href="#">https://www.skyech.art/</a>{" "}
                    uniform resource locator (URL) is owned by us and no unauthorised use of the
                    URL is permitted on another website or digital platform without our prior
                    written consent.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    As between us and you, we are the sole owners of the rights in and to the
                    Service, our technology, software and business systems (the “Systems”) as
                    well as our odds.
                  </p>
                  <ul className="list-disc ml-[6.4vw]">
                    <li className="mb-[3.4666666667vw]">
                      you must not use your personal profile for your own commercial gain (such
                      as selling your status update to an advertiser); and
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      when selecting a nickname for your Account we reserve the right to remove
                      or reclaim it if we believe it appropriate.
                    </li>
                  </ul>
                  <p className="m-[0_0_3.2vw_0]">
                    You may not use our URL, trademarks, trade names and/or trade dress, logos
                    (the “Marks”) and/or our odds in connection with any product or service that
                    is not ours, that in any manner is likely to cause confusion among Customers
                    or in the public or that in any manner disparages us.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Except as expressly provided in these Terms, we and our licensors do not
                    grant you any express or implied rights, licence, title or interest in or to
                    the Systems or the Marks and all such rights, licence, title and interest
                    specifically retained by us and our licensors. You agree not to use any
                    automatic or manual device to monitor or copy web pages or content within
                    the Service. Any unauthorised use or reproduction may result in legal action
                    being taken against you.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">17. Your Licence</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    Subject to these terms and your compliance with them, we grant to you a
                    non-exclusive, limited, non transferable and non sub-licensable licence to
                    access and use the Service for your personal non-commercial purposes only.
                    Our licence to you terminates if our agreement with you under these Terms
                    ends.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Save in respect of your own content, you may not under any circumstances
                    modify, publish, transmit, transfer, sell, reproduce, upload, post,
                    distribute, perform, display, create derivative works from, or in any other
                    manner exploit, the service and/or any of the content thereon or the
                    software contained therein, except as we expressly permit in these terms or
                    otherwise on the website. No information or content on the service or made
                    available to you in connection with the Service may be modified or altered,
                    merged with other data or published in any form including for example screen
                    or database scraping and any other activity intended to collect, store,
                    reorganise or manipulate such information or content.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Any non-compliance by you with this Clause may also be a violation of our or
                    third parties’ intellectual property and other proprietary rights which may
                    subject you to civil liability and/or criminal prosecution.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">18. Your Conduct and Safety</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    We would like you to enjoy the Service. However, for your protection and
                    that of all Customers, the posting of any content on the service, as well as
                    conduct in connection therewith and/or the service, which is in any way
                    unlawful, inappropriate or undesirable is strictly prohibited - it is
                    Prohibited Behaviour. If you engage in Prohibited Behaviour, or we determine
                    in our sole discretion that you are engaging in Prohibited Behaviour, your
                    exchsky.art Account and/or your access to or use of the Service may be
                    terminated immediately without notice to you.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Legal action may be taken against you by another Customer, other third
                    party, enforcement authorities and/or us with respect to you having engaged
                    in Prohibited Behaviour.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Prohibited Behaviour includes, but is not limited to, accessing or using the
                    Service to:
                  </p>
                  <ul className="list-disc ml-[6.4vw]">
                    <li className="mb-[3.4666666667vw]">
                      i. promote or share information that you know is false, misleading or
                      unlawful;
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      ii. conduct any unlawful or illegal activity, such as, but not limited to,
                      any activity that furthers or promotes any criminal activity or
                      enterprise, provides instructional information about making or buying
                      weapons, violates another Customer’s or any other third party’s privacy or
                      other rights or that creates or spreads computer viruses;
                    </li>
                    <li className="mb-[3.4666666667vw]">iii. harm minors in any way;</li>
                    <li className="mb-[3.4666666667vw]">
                      iv. transmit or make available any content that is unlawful, harmful,
                      threatening, abusive, tortuous, defamatory, vulgar, obscene, lewd,
                      violent, hateful, or racially or ethnically or otherwise objectionable;
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      v. transmit or make available any content that the user does not have a
                      right to make available under any law or contractual or fiduciary
                      relationship, including without limitation, any content that infringes a
                      third party’s copyright, trademark or other intellectual property and
                      proprietary rights;
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      vi. transmit or make available any content or material that contains any
                      software virus or other computer or programming code (including HTML)
                      designed to interrupt, destroy or alter the functionality of the Service,
                      its presentation or any other website, computer software or hardware;
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      vii. interfere with, disrupt or reverse engineer the Service in any
                      manner, including, without limitation, intercepting, emulating or
                      redirecting the communication protocols used by us, creating or using
                      cheats, mods or hacks or any other software designed to modify the
                      Service, or using any software that intercepts or collects information
                      from or through the Service;
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      viii. retrieve or index any information from the Service using any robot,
                      spider or other automated mechanism;
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      ix. participate in any activity or action that, in the sole and entire
                      unfettered discretion of us results or may result in another Customer
                      being defrauded or scammed;
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      x. transmit or make available any unsolicited or unauthorised advertising
                      or mass mailing such as, but not limited to, junk mail, instant messaging,
                      "spim", "spam", chain letters, pyramid schemes or other forms of
                      solicitations;
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      xi. create exchsky.art Accounts by automated means or under false or
                      fraudulent pretences;
                    </li>
                    <li className="mb-[3.4666666667vw]">xii. impersonate another Customer or any other third party, or</li>
                    <li className="mb-[3.4666666667vw]">
                      xiii. any other act or thing done that we reasonably consider to be
                      contrary to our business principles.
                    </li>
                  </ul>
                  <p className="m-[0_0_3.2vw_0]">
                    The above list of Prohibited Behaviour is not exhaustive and may be modified
                    by us at any time or from time to time. If you become aware of the misuse of
                    the service by another Customer or any other person, please contact us
                    through the “Contact Us” section of the Website. We reserve the right to
                    investigate and to take all such actions as we in our sole discretion deems
                    appropriate or necessary under the circumstances, including without
                    limitation, deleting the Customer’s posting(s) from the Service and/or
                    terminating their account, and take any action against any Customer or third
                    party who directly or indirectly in, or knowingly permits any third party to
                    directly or indirectly engage in, Prohibited Behaviour, with or without
                    notice to such Customer or third party.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">19. Links to Other Websites</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    The Service may contain links to third party websites that are not
                    maintained by, or related to, us, and over which we have no control. Links
                    to such websites are provided solely as a convenience to Customers, and are
                    in no way investigated, monitored or checked for accuracy or completeness by
                    us. Links to such websites do not imply any endorsement by us of, and/or any
                    affiliation with, the linked websites or their content or their owner(s). We
                    have no control over or responsibility for the availability nor their
                    accuracy, completeness, accessibility and usefulness. Accordingly when
                    accessing such websites we recommend that you should take the usual
                    precautions when visiting a new website including reviewing their privacy
                    policy and terms of use.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">20. Complaints</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    If you have any concerns or questions regarding these terms you should
                    contact our Customer Service Department via email at{" "}
                    <a className="text-[#2789ce]" href="#">support@exchsky.art</a>.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    NOTWITHSTANDING THE FOREGOING, WE TAKE NO LIABILITY WHATSOEVER TO YOU OR TO
                    ANY THIRD PARTY WHEN RESPONDING TO ANY COMPLAINT THAT WE RECEIVED OR TOOK
                    ACTION IN CONNECTION THEREWITH.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Any Customer of the Service who has any concerns or questions regarding
                    these Terms regarding the settlement of any exchsky.art market should
                    contact our Customer Service Department at{" "}
                    <a className="text-[#2789ce]" href="#">support@exchsky.art</a> using their
                    Registered Email Address.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    If a Customer is not satisfied with how a bet has been settled then the
                    Customer should provide details of their grievance to our Customer Service
                    Department via email at&nbsp;
                    <a className="text-[#2789ce]" href="#">support@exchsky.art</a> We shall use
                    our reasonable endeavours to respond to queries of this nature within a few
                    days (and in any event we intend to respond to all such queries within 28
                    days of receipt).
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Disputes must be lodged within three (3) days from the date the wager in
                    question has been decided. No claims will be honored after this period. The
                    Customer is solely responsible for their Account transactions.
                    Complaints/disputes have to be sent to&nbsp;support@exchsky.art and must be
                    sent from the Customer’s Registered Email Address.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    In the event of a dispute arising between you and us our Customer Service
                    Department will attempt to reach an agreed solution. Should our Customer
                    Service Department be unable to reach an agreed solution with you, the
                    matter will be escalated to our management in accordance with our Complaints
                    Procedure (available upon request).
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    The Customer has the right to lodge a complaint with one of our licensing
                    bodies should all efforts to resolve a dispute to the Customer’s
                    satisfaction have failed.{" "}
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">21. Registration and Account Security</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    Customers of the service must provide their real names and information and,
                    in order to comply with this, all Customers must commit to the following
                    rules when registering &amp; maintaining your Account:
                  </p>
                  <ul className="list-disc ml-[6.4vw]">
                    <li className="mb-[3.4666666667vw]">
                      you must not provide any false personal information on the Service, or
                      create an Account for anyone other than yourself;
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      you must not use your personal profile for your own commercial gain (such
                      as selling your status update to an advertiser); and
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      when selecting a nickname for your Account we reserve the right to remove
                      or reclaim it if we believe appropriate.
                    </li>
                  </ul>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">22. Assignment</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    Neither these terms nor any of the rights or obligations hereunder may be
                    assigned by you without the prior written consent of us, which consent will
                    not be unreasonably withheld. We may, without your consent, assign all or
                    any portion of our rights and obligations hereunder to any third party
                    provided such third party is able to provide a service of substantially
                    similar quality to the Service by posting written notice to this effect on
                    the Service.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">23. Severability</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    In the event that any provision of these terms is deemed by any competent
                    authority to be unenforceable or invalid, the relevant provision shall be
                    modified to allow it to be enforced in line with the intention of the
                    original text to the fullest extent permitted by applicable law. The
                    validity and enforceability of the remaining provisions of these terms shall
                    not be affected.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">24. Breach of These Terms</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    Without limiting our other remedies, we may suspend or terminate your
                    account and refuse to continue to provide you with the service, in either
                    case without giving you prior notice, if, in our reasonable opinion, you
                    breach any material term of these Terms. Notice of any such action taken
                    will, however, be promptly provided to you.
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">25. Governing Law and Jurisdiction</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    This Agreement shall in all respects be governed, interpreted by, and
                    construed in accordance with the laws of Curacao. All disputes, differences,
                    complaints etc., shall be subject to Arbitration under the Curacao. The
                    arbitrator will be appointed by the company after due consent from the
                    company and the user. The place of arbitration shall be Curacao.{" "}
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">26. General Provisions</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    Term of agreement. These terms shall remain in full force and effect while
                    you access or use the service or are a Customer of exchsky.art. These terms
                    will survive the termination of your exchsky.art Account for any reason.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Gender. Words importing the singular number shall include the plural and
                    vice versa, words importing the masculine gender shall include the feminine
                    and neuter genders and vice versa and words importing persons shall include
                    individuals, partnerships, associations, trusts, unincorporated
                    organisations and corporations.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Waiver. No waiver by us, whether by conduct or otherwise, of a breach or
                    threatened breach by you of any term or condition of these Terms shall be
                    effective against, or binding upon, us unless made in writing and duly
                    signed by us, and, unless otherwise provided in the written waiver, shall be
                    limited to the specific breach waived. The failure of us to enforce at any
                    time any term or condition of these Terms shall not be construed to be a
                    waiver of such provision or of the right of us to enforce such provision at
                    any other time.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Headings. The division of these Terms into paragraphs and sub-paragraphs and
                    the insertion of headings are for convenience of reference only, and shall
                    not affect or be utilised in the construction or interpretation of these
                    Terms agreement. The terms "these Terms", "hereof", “hereunder” and similar
                    expressions refer to these Terms and not to any particular paragraph or
                    sub-paragraph or other portion hereof and include any agreement supplemental
                    hereto. Unless the subject matter or context is inconsistent therewith,
                    references herein to paragraphs and sub-paragraphs are to paragraphs and
                    sub-paragraphs of these Terms.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Acknowledgement. By hereafter accessing or using the Service, you
                    acknowledge having read, understood and agreed to each and every paragraph
                    of these Terms. As a result, you hereby irrevocably waive any future
                    argument, claim, demand or proceeding to the contrary of anything contained
                    in these Terms.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Language. In the event of there being a discrepancy between the English
                    language version of these rules and any other language version, the English
                    language version will be deemed to be correct.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Entire agreement. These Terms constitute the entire agreement between you
                    and us with respect to your access to and use of the Service, and supersedes
                    all other prior agreements and communications, whether oral or written with
                    respect to the subject matter hereof.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">Betting Rules</p>
                  <p className="m-[0_0_3.2vw_0]">
                    Any dispute related to the sports betting product shall be emailed to:{" "}
                    <a className="text-[#2789ce]" href="#">support@exchsky.art</a>
                  </p>
                  <p className="m-[0_0_3.2vw_0]">Casino Rules</p>
                  <p className="m-[0_0_3.2vw_0]">
                    Any dispute related to the casino product shall be emailed to:{" "}
                    <a className="text-[#2789ce]" href="#">support@exchsky.art</a>
                  </p>
                  <p className="m-[0_0_3.2vw_0]">Complete casino rules can be accessed from within the casino games.</p>
                  <p className="m-[0_0_3.2vw_0]">ACCEPTING THE TERMS AND CONDITIONS </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You hereby accept the fact that you have read, understood and are willing to
                    abide by the above Terms and Conditions.{" "}
                  </p>
                  <h3 className="text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] mb-[3.2vw]">Casino Payout restrictions</h3>
                  <ul className="list-disc ml-[6.4vw]">
                    <li className="mb-[3.4666666667vw]">
                      Restriction of payout is applicable for <strong>all Casino games</strong>
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      In Single round, User is eligible for a{" "}
                      <strong>max payout of 100 times his bet amount</strong>, example if the
                      bet is 100 then max payout shall be 100 X 100 = 10000, any winning above
                      this multiplier shall not be paid out by the company.
                    </li>
                    <li className="mb-[3.4666666667vw]">
                      Another restriction is{" "}
                      <strong>
                        max payout amount is capped at 2,00,00,000 (2 Crore points){" "}
                      </strong>
                      , if net winning amount is beyond this amount then user shall be paid only
                      this amount as max winning in Casino games.
                    </li>
                  </ul>
                </div>
              </>}

            {isModalOpen === "RR" &&
              <>
                <div className='flex flex-[0_0_12.8vw] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] rounded-[1.6vw_1.6vw_0_0]'>
                  <h3 className='flex flex-1 justify-center items-center text-[#ffb200] text-[4.8vw] font-bold leading-[1] bg-[#0000] p-[4vw_1.8666666667vw] '>Exchange Rules and Regulations</h3>
                </div>
                <div className='flex-1 p-[4.2666666667vw_3.4666666667vw] bg-[#fff] text-[4vw] leading-[1.5] overflow-y-scroll h-[77vh]'>
                  <div className="declared bg-[#aed5f5] text-[3.4666666667vw] leading-[1.3] p-[2.6666666667vw] mb-[2.6666666667vw] rounded-[2.1333333333vw]">
                    <p className="m-[0_0_3.2vw_0]">NOTE:</p>
                    <p className="m-[0_0_3.2vw_0]">
                      Players using VPN and login from different IP frequently may result to
                      void bets. And on the basis of different IP from multiple city we can
                      suspend the account and void bets.
                    </p>
                  </div>
                  <p className="m-[0_0_3.2vw_0]">
                    All Exchange Sky users including ‘Super’, ‘Master’ and ‘Sub’ account holders
                    are advised to read the following ‘Terms and Conditions’. All users who use
                    Exchange Sky agree and accept to the following:
                  </p>
                  <ol className="list-decimal ml-[6.4vw]">
                    <li className='mb-[3.4666666667vw]'>
                      The site www.exchangesky.com and all of its original content are the sole
                      property of ‘Sky Infotech Limited’ and are, as such, fully protected by
                      International Copyright and other intellectual property rights laws.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Any form of ‘Passing of funds’, ‘Self Matching’ will not be tolerated on
                      Exchange Sky. Any users found participating in such activites will be
                      locked with the funds being reversed. Accounts participating in such
                      activities must note that Exchange Sky reserves the right to Void any bets
                      of such nature at any time within 1 week of the bet being placed.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Any self matching ( punching ) bets on non favorite teams when liquidity
                      is low will be voided even if the player account is in minus for the event
                      , the upline will be responsible for the same.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Please note that if any account has been locked due to ‘any sort of
                      cheating or suspicious’ within the last 72 hours, Company reserves the
                      right to void any bet of this nature within the account irrespective of
                      when the bet was placed.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      No Arguments or claim in the above context will be entertained by Sky
                      Exchange and the decision made by Exchange Sky will stand as final.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Exchange Sky Endeavors to have our services run 24 hours a day. However
                      due to any technical issue, or disruption of services from our provider
                      (Betfair.com), Exchange Sky will not be liable for any market positions
                      that any account holders may hold.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Betfair.com reserves the right to resettle or void any market for reasons
                      such as technical delayed suspension from the provider. In any such case
                      Exchange Sky will settle according to Betfair.com
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      ‘Super’ and ‘Master’ account holders will be held responsible for the
                      financial penalties incurred for any misuse or ‘passing of funds’ from any
                      of the ‘Sub’ account holders under their accounts irregardless whether or
                      not the financial positions of the sub accounts have been settled by their
                      superior ‘Super’ or ‘Master’ holders.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In case anyone is found using 2 different IDs and logging in from same IP
                      his winning in both accounts will be cancelled.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Any bets which are deemed of being suspicious, including bets which have
                      been placed from the stadium or from a source at the stadium maybe voided
                      at anytime. The decision of whether to void the particular bet in question
                      or to void the entire market will remain at the discretion of Sky
                      Exchange. The final decision of whether bets are suspicious will be taken
                      by Exchange Sky and that decision will be full and final.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Any sort of cheating bet , any sort of Matching (Passing of funds), Court
                      Siding (Ghaobaazi on commentary), Sharpening, Commission making is not
                      allowed in Exchange Sky, If any exchangesky User is caught in any of such
                      act then all the funds belonging that account would be seized and
                      confiscated. No argument or claim in that context would be entertained and
                      the decision made by Exchange Sky management will stand as final
                      authority.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Fluke hunting/Seeking is prohibited in Exchange Sky, All the fluke bets
                      will be reversed. Cricket commentary is just an additional feature and
                      facility for Exchange Sky user but Exchange Sky is not responsible for any
                      delay or mistake in commentary.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Members are not permitted to hold multiple accounts. This includes holding
                      an account with any associated site operating on the same platform as this
                      site. Where maximum bet or maximum market limits are imposed, the Site
                      reserves to the right to void bets from accounts found to be exceeding
                      these limits by using multiple accounts across this and any other
                      associated sites.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Scalping and jobbing trades strictily prohibited in meta for all symbol.
                    </li>
                    <li className='mb-[3.4666666667vw]'>Company reserve rights to void all profitable jobbing trades.</li>
                    <li className='mb-[3.4666666667vw]'>Manipulation and cheating (chamka) trade will be deleted any time.</li>
                    <li className='mb-[3.4666666667vw]'>
                      Fresh limit and fresh stop loss not allowed – only allowed when you have
                      existing holding.
                    </li>
                    <li className='mb-[3.4666666667vw]'>Position will be stop out at 20% margin Level.</li>
                    <li className='mb-[3.4666666667vw]'>All the issues will be solved according to the Exchange decision.</li>
                    <li className='mb-[3.4666666667vw]'>Parking is strictly prohibited.</li>
                    <li className='mb-[3.4666666667vw]'>Trading is compulsory only standing not allowed.</li>
                  </ol>
                  <h1 className="mt-[12.8vw] mb-[6.4vw] p-[2.6666666667vw] text-[6.4vw] text-[#000] font-bold bg-[#0000001a] rounded-[1.3333333333vw]">Exchange Rules and Regulations</h1>
                  <h2 className="mb-[4.8vw] pb-[2.1333333333vw] text-[5.8666666667vw] leading-[1.2] text-[#1b2d38] font-bold border-b border-dotted border-[#e0e6e6]">Part A - Introduction</h2>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">Restricted territory information</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    Please be advised that our restricted territory information pertains to both
                    residents and visitors in the restricted areas. Accounts registered in a
                    non-restricted territory will become restricted if they are attempt to
                    access and have betting activity from a territory which is restricted.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Restricted territory countries are Algeria, Australia, Austria, Bulgaria,
                    Canada, China, Cyprus, Czech Republic, Democratic People’s Republic of
                    Korea, Denmark, Europe, France (and French territories), Gibraltar, Germany,
                    Iran, Iraq, Ireland, Italy, Japan, Malta, New Zealand, Poland, Portugal,
                    Qatar, Romania, Singapore, South Africa, Spain, Turkey, United Kingdom and
                    United States of America (and US territories){" "}
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We have the right to void all players winnings if they are deemed to come
                    from a restricted territory.
                  </p>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">1. Use and interpretation</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    The Exchange Rules and Regulations ("Exchange Rules") are part of terms and
                    conditions.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    The Exchange Rules apply to all bets placed on Exchange markets. The
                    Exchange Rules also apply to Exchange ’Multiples’ product (see the Multiples
                    section below for further details). The Exchange Rules consist of the
                    following:
                  </p>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>This INTRODUCTION section (Part A);</li>
                    <li className='mb-[3.4666666667vw]'>The GENERAL RULES (set out in Part B below);</li>
                    <li className='mb-[3.4666666667vw]'>
                      The SPECIFIC SPORTS RULES (set out in Part C below – these apply to
                      certain sports and to financial markets); and
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      The MARKET INFORMATION (located on every market either under the tab
                      entitled "Rules" or under the ‘Rules’).
                    </li>
                  </ul>
                  <p className="m-[0_0_3.2vw_0]">
                    The General Rules apply to all bets unless stated otherwise in the Market
                    Information or the Specific Sports Rules. If there is any inconsistency
                    between the Specific Sports Rules and the General Rules, the Specific Sports
                    Rules shall prevail. If there is any inconsistency between the Market
                    Information and either the General Rules or the Specific Sports Rules, the
                    Market Information shall prevail, except where the General Rules or Specific
                    Sports Rules use the phrase 'regardless of what it says in the Market
                    Information' or similar wording.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    For any category or market not referred to in the Specific Sports Rules
                    (e.g. ’Special Bets’ or beach volleyball), the General Rules and Market
                    Information will apply.
                  </p>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">2. Market information</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    The Market Information is provided for information purposes as an
                    at-a-glance guide on how to manage the market. The Market Information may
                    also contain rules on market settlement, however it must always be read in
                    conjunction with the General Rules and the relevant Specific Sports Rules
                    and a link to this Rules and Regulations page will usually be provided in
                    the Market Information for each market.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Whilst the Market Information may give a guide to how markets will be
                    managed, regardless of what it says in the Market Information, it reserves
                    the right to suspend any market at any time at its sole discretion,
                    including in order to carry out necessary administration and/or to take any
                    necessary action to protect the customers.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    It shall not amend the Market Information after a market has been loaded
                    except to correct obvious errors and/or to add wording to clarify the Market
                    Information where appropriate.
                  </p>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">3. Customer responsibility</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    The customers should make themselves aware of all the Exchange Rules
                    affecting any market on which they wish to place a bet. Customers should not
                    simply rely on the Market Information as the Market Information is unlikely
                    to contain all of the applicable rules relating to a market.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    By their nature ‘Special Bets’ markets are unpredictable so should be
                    treated with particular caution. Customers are responsible for managing
                    their own positions at all times in such markets. Customers should pay
                    particular attention to the Market Information on ‘Special Bets’ markets to
                    ensure they understand the basis on which the market will be administered
                    and settled.
                  </p>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">4. Customer betting disputes &amp; IBAS</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    Any customer who has any concerns or questions regarding the Exchange Rules
                    or regarding the settlement of any market should contact.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    If a customer is not satisfied with how a bet or a market has been settled
                    then the customer should provide details of their grievance.
                  </p>
                  <h2 className="mb-[4.8vw] pb-[2.1333333333vw] text-[5.8666666667vw] leading-[1.2] text-[#1b2d38] font-bold border-b border-dotted border-[#e0e6e6]">Part B - General rules</h2>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">1. Managing markets In-Play</h3>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">a) General</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      For everything other than horseracing and greyhound racing, if a market is
                      not scheduled to be turned in-play but fails to suspend the market at the
                      relevant time, then:
                      <ul className='list-disc ml-[6.4vw]'>
                        <li className='mb-[3.4666666667vw]'>
                          if the event has a scheduled 'off' time, all bets matched after that
                          scheduled off time will be void; and
                        </li>
                        <li className='mb-[3.4666666667vw]'>
                          if the event does not have a scheduled 'off' time, it will use its
                          reasonable endeavours to ascertain the time of the actual 'off' and
                          all bets after the time of the 'off' determined will be void.
                        </li>
                      </ul>
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For horseracing and greyhound racing, if a market is not scheduled to be
                      turned in-play but fails to suspend the market at the relevant time, then
                      all bets matched after the official 'off' time will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      It aims to use its reasonable endeavours to suspend in-play markets at the
                      start of and at the end of the event. However, regardless of what it says
                      in the Market Information, it does not guarantee that such markets will be
                      suspended at the relevant time.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      It will not part-suspend outcomes/selections in an Exchange market that
                      has been turned in-play.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Customers are responsible for managing their in-play bets at all times.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For the purposes of in-play betting, customers should be aware that
                      transmissions described as "live" by some broadcasters may be delayed or
                      pre-recorded. The extent of any delay may vary depending on the set-up
                      through which they are receiving pictures or data.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">
                    b) All markets other than soccer markets and Australian markets - not
                    suspending at the time of the 'off'
                  </h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      In relation to markets which are scheduled to be turned in-play, aims to
                      use its reasonable endeavours to turn such markets in-play at the time of
                      the 'off'. The time of the 'off' for such markets should be set out in the
                      Market Information. However, regardless of what it says in the Market
                      Information, it does not guarantee that such markets will be suspended and
                      turned in-play at the time of the 'off'.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a market is scheduled to be turned in-play but does not suspend the
                      market and cancel unmatched bets at the time of the 'off' and the market
                      is not turned in-play with unmatched bets cancelled at any time during the
                      event, all bets matched after the scheduled time of the 'off' will be void
                      (in the case of horseracing and greyhound racing, bets will be void from
                      the official rather than the scheduled 'off' time).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If the event does not have a scheduled 'off' time, it will use its
                      reasonable endeavours to ascertain the time of the actual 'off' and all
                      bets after the time of the 'off' determined will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a market is scheduled to be turned in-play but does not suspend the
                      market at the time of the 'off' (so unmatched bets are not cancelled at
                      that time), but the market is intentionally turned in-play at a later time
                      during the event, all bets matched after the time of the 'off' will stand
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">
                    c) Soccer markets (with the exception of Australian soccer markets) - not
                    suspending at kick-off or on the occurrence of a Material Event
                  </h4>
                  <h5 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5] underline">Not suspending at kick-off</h5>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      In relation to soccer markets that are scheduled to be turned in-play,
                      aims to use its reasonable endeavours to turn such markets in-play at
                      kick-off and to suspend such markets on the occurrence of a Material Event
                      (see definition of "Material Event" below).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      The relevant scheduled kick-off time should be set out in the Market
                      Information. However, regardless of what it says in the Market
                      Information, it does not guarantee that such markets will be suspended and
                      turned in-play at kick-off.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a market is scheduled to be turned in-play but not suspend the market
                      at kick-off and the market is not turned in-play at any time during the
                      match, all bets matched after the scheduled time of the kick-off will be
                      void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a market is scheduled to be turned in-play but not suspend the market
                      at kick-off (so unmatched bets are not cancelled at that time), but the
                      market is turned in-play at a later time during the match, all bets
                      matched after the scheduled time of the kick-off and before the first
                      "Material Event" will stand. However, if there has been one or more
                      "Material Events", any bets matched between the first "Material Event" and
                      the market being turned in-play will be void.
                    </li>
                  </ul>
                  <h5 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5] underline">Not suspending on the occurrence of a Material Event</h5>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      If it does not suspend a market on time for the occurrence of a Material
                      Event, it reserves the right to void bets unfairly matched after the
                      Material Event has occurred. Voiding of these bets may take place during
                      the event or retrospectively once a game is completed.
                    </li>
                  </ul>
                  <h5 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5] underline">Definition of “Material Event”</h5>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      For the purpose of these Exchange Rules, a "Material Event" shall mean a
                      goal being scored, a penalty being awarded or a player being sent off.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">d) In-play Australian markets</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Notwithstanding the other in-play rules described above, in relation
                      specifically to any Australian market that is scheduled to be turned
                      in-play, if it fails to suspend the market at the 'off' then all bets
                      matched after the scheduled time of the 'off' and before the market is
                      turned in-play will be void (in the case of horseracing and greyhound
                      racing, bets will be void from the official rather than the scheduled
                      ‘off’ time). If the event does not have a scheduled 'off' time, it will
                      use its reasonable endeavours to ascertain the time of the actual 'off'
                      and all bets after the time of the 'off' as determined will be void.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">2. Results and market settlement</h3>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">a) General</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Markets will be settled as set out in the Market Information and/or the
                      Specific Sports Rules.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Where the Market Information or Specific Sports Rules do not specify how
                      and on what basis a market will be settled, markets will be settled on the
                      official result of the relevant governing body regardless of any
                      subsequent disqualification or amendment to the result (except if an
                      amendment is announced within 24 hours of the initial settlement of the
                      relevant market in order to correct an error in reporting the result).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If no official result of a relevant governing body is available, the
                      result will be determined by using information from independent sources.
                      In such cases, if any new information comes into the public domain within
                      48 hours of settlement, then it shall (acting reasonably) determine
                      either: (i) whether the market should be reinstated or resettled in light
                      of this new information; or (ii) whether or not to wait for further
                      information before deciding whether to reinstate or resettle the market.
                      Except it has announced that it is waiting for further information, any
                      information that comes into the public domain more than 48 hours after a
                      market has been settled shall not be considered (regardless of whether or
                      not such information may have led to a different result).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In the event of any uncertainty about any result or potential result, it
                      reserves the right to suspend settlement of any market for an unlimited
                      period until the uncertainty can be resolved to the reasonable
                      satisfaction. It reserves the right to void any market if the uncertainty
                      regarding settlement cannot be resolved to reasonable satisfaction.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">b) Resettlements</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Markets are generally settled shortly after the end of the event in
                      question. It may settle (or part-settle) some markets before the official
                      result is declared (or may increase a customer's 'available to bet'
                      balance by the minimum potential winnings of that customer on a given
                      market) purely as a customer service benefit. However, it reserves the
                      right to amend the settlement of the market if: (i) the official result is
                      different to the result on which initially settled the market (for
                      example, a horseracing result being changed by the relevant governing body
                      shortly after a race, but before the result is official); or (ii) if the
                      whole market is eventually voided (e.g. for an abandoned event).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      It reserves the right to reverse the settlement of a market if a market is
                      settled in error (for example, a human or technical error).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If resettles a market, this may lead to amendments being made to a
                      customer's balance to reflect changes in market settlement.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">c) Non-runners, withdrawals and disqualifications</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Subject always right to void bets under its terms and conditions or for
                      any exception under the Exchange Rules, if a market contains a statement
                      that says, "All bets stand, run or not" (or something similar) in the
                      Market Information, then all bets on a team or competitor will stand
                      regardless of whether or not the team or competitor starts the event or
                      takes any part in the event.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Where the Market Information does not stipulate that all bets will stand
                      regardless of participation, customers should refer to the relevant
                      Specific Sports Rules.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a team or competitor is disqualified, withdraws or forfeits after
                      starting an event they will be deemed a loser providing at least one other
                      team or competitor completes the event. If no team or competitor completes
                      an event (having started) then all bets will be void except for bets on
                      any markets which have been unconditionally determined.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">d) Winner with [named selection]' markets</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      It may from time to time offer markets that are dependent on the
                      participation of a particular competitor. If the competitor named either
                      in a 'Winner with …' market title or in the Market Information does not
                      participate in the tournament or event then all bets on the market will be
                      void. For example, if there was a "Winner with Federer" tennis market, all
                      bets on the market would be void if Federer did not participate in the
                      tournament. However, if any other competitor did not participate, then
                      bets would stand.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      A team or competitor will be deemed to have participated if they have
                      taken part to the extent necessary to record an official result or
                      classification (including any disqualification but excluding any "did not
                      start" or equivalent classification).
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">3. Abandonments, Cancellations, Postponements</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Some markets have different rules and these are listed in the Specific
                      Sports Rules and/or the Market Information. However, where a market has no
                      rules in the Specific Sports Rules or the Market Information in relation
                      to an abandonment, cancellation and/or postponement the following shall
                      apply.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In relation to any match, fixture, game, individual event, race or
                      similar: If the event is not completed within three days after the
                      scheduled completion date, then all bets on markets for this event will be
                      void, except for bets on any markets that have been unconditionally
                      determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In relation to any tournament, competition or similar: If the event is not
                      completed within three days after the scheduled completion date, then any
                      markets relating to the event will be settled in accordance with the
                      official ruling of the relevant governing body, providing such a decision
                      is given within 90 days after the scheduled completion date. If no
                      official ruling is announced in this 90-day period, then bets on any
                      market relating to this event will be void, except for bets on any markets
                      which have been unconditionally determined. If a market is to be voided
                      but has been part-settled as a courtesy to customers, then such
                      part-settled bets will be reversed and all bets on the market will be
                      void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      It will decide (acting reasonably) whether a market relates to a match (or
                      similar) or a tournament (or similar). However, by way of example, the
                      following shall apply: (i) Europa League outright = tournament; (ii)
                      Champions’ League Group outright = tournament; (iii) Top Premiership goal
                      scorer = tournament; (iv) 72-hole Golf Match bet = match; (v) Ryder Cup
                      outright = tournament; (vi) Golf tournament outright = tournament; (vii)
                      Tennis Tournament outright = tournament;(viii) 5-day Cricket Test Match =
                      match; (ix) Ashes Series outright winner = tournament; (x) Motor Race
                      (e.g. Grand Prix) = match.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">4. Change of venue</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Some markets have different rules and these are listed in the Specific
                      Sports Rules and/or the Market Information. However, if change of venue is
                      not dealt with in the Specific Sports Rules and/or the Market Information
                      then the following shall apply:
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For any team sport: if the scheduled venue is changed after the market is
                      loaded, all bets will be void only if the new venue is a home ground of
                      the original away team
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For all categories or markets other than team sports: if the scheduled
                      venue is changed after the market is loaded, all bets will stand.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If there is a change in the type of scheduled surface (e.g. a hockey match
                      switching from grass to Astor-turf) after the market has been loaded, all
                      bets will stand.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">5. Periods of time</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Some markets have different rules and these are listed in the Specific
                      Sports Rules and/or the Market Information. However, if not dealt with in
                      the Specific Sports Rules or the Market Information then the following
                      shall apply.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If the scheduled duration of an event is changed after the market has been
                      loaded but before the start of the event, then all bets will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Some markets refer to the length of time until an occurrence in the event
                      (e.g. time of first goal). If an event happens in stoppage or injury time
                      after any regular time period then it will be deemed to have occurred at
                      the end of the regular time period. For example, if a goal is scored in
                      first half stoppage-time in a soccer match it will be deemed to have
                      occurred on 45 minutes.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      All bets apply to the relevant full 'regular time' period including
                      stoppage time. Any extra-time and/or penalty shoot-out is not included.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      References within these Rules and Regulations to a particular number of
                      'days' shall mean the end of the day local time after the expiry of the
                      specified number of days. For example, if a rugby match is scheduled for
                      the 1st of December, then the rule that allows the match to be completed
                      within three days after the scheduled completion date (see Paragraph 3
                      above) would mean that the deadline for completion of that match would be
                      23.59:59 on the 4th of December.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">6. Match bets</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Some markets have different rules and these are listed in the Specific
                      Sports Rules and/or the Market Information. For example, for match bets on
                      Golf markets the rules are set out in the Specific Sports Rules. However,
                      if not dealt with in the Specific Sports Rules or the Market Information
                      then the following shall apply.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      'Match Bets' for one-off events are determined by the competitor or team
                      with the best score, time or finishing position in the event. If none of
                      the competitors or teams involved in the match bet complete the event or
                      register a score, time or finishing position then bets are void unless
                      specified otherwise in the Specific Sports Rules and/or the Market
                      Information. Any competitor or team not completing an event or registering
                      a score, time or finishing position having taken part in the match bet
                      event will be settled as a loser providing at least one other team or
                      competitor completes that event or registers a score, time or finishing
                      position.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      'Match Bets' for progress in a competition or event with multiple heats or
                      rounds are determined by the competitor or team which qualifies to the
                      furthest round (whether it takes part in the further round or not) or with
                      the best score, time or finishing position in the final or same heat of
                      that competition or event. If the relevant competitors or teams fail to
                      qualify in the same round of the competition but in different heats then
                      dead-heat rules will apply, irrespective of the finishing positions in
                      their respective heats. Markets will be part-settled after the end of each
                      round and any subsequent disqualifications, penalties or amendments to
                      results or qualifications will not have any effect on the market. Where
                      one or more of the competitors or teams are disqualified, for the purposes
                      of settlement, the disqualified competitor or team will be deemed to have
                      progressed further in the competition or event than all those eliminated
                      from the competition or event prior to the disqualification, and will be
                      deemed to have finished last (or joint last if there is more than one
                      disqualification) of those still competing in the competition or event.
                      Disqualification will be considered to have taken place at the time of the
                      competitor's or team's removal from the competition or event by the
                      relevant governing body, rather than at the time of the event which caused
                      disqualification.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If one of the competitors or teams does not take any part in the event,
                      then all relevant match bets will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If an event or tournament is abandoned or reduced in duration such that
                      any competitor or team fails to complete the match bet, event or
                      tournament for any reason other than withdrawal or disqualification then
                      all bets will be void except for those on markets which have been
                      unconditionally determined.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">7. "To qualify" markets</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Some markets have different rules and these are listed in the Specific
                      Sports Rules and/or the Market Information. However, if not dealt with in
                      the Specific Sports Rules or the Market Information then the following
                      shall apply.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Any 'to qualify' market (e.g. "to reach the final" markets) will be
                      determined by the competitor or team that qualifies under the terms set
                      out in Market Information, whether or not they take part in the next round
                      or event for which they have qualified. Markets will be settled after the
                      qualifying stage and any subsequent disqualification or amendment to the
                      result will not count.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">8. Dead heats</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Unless stated otherwise in the Specific Sports Rules and/or the Market
                      Information the Dead Heat Rule applies to bets on a market where there are
                      more winners than expected (as set out in the Market Information).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For each bet matched on a relevant winning selection, the stake money is
                      first reduced in proportion by multiplying it by the sum of the number of
                      winners expected (as set out in the Market Information), divided by the
                      number of actual winners (i.e. stake multiplied by (number of winners
                      expected/number of actual winners)). The winnings are then paid to the
                      successful backers on this 'reduced stake' (reduced stake multiplied by
                      traded price) and the remaining stake money is paid to the appropriate
                      layers.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For example, assume there is a dead heat for first place between three
                      horses. 'Client A' has backed one of the winners for a stake of 300 at the
                      traded price of 4.0 and 'Client B' has taken the other side of this bet.
                      When the event is settled, the stake (300) is multiplied by 1/3 (i.e. the
                      number of expected winners (1) divided by the number of actual winners
                      (3)) to calculate the reduced stake (100) and the remainder given to the
                      layer (200). The backer then receives the traded price matched (4.0)
                      multiplied by the reduced stake (4 x 100 = 400). In this example, Client
                      A's net winnings are 100 (400 payout minus the original 300 stake), and
                      Client B's net losses are 100. Alternatively, this can be viewed as the
                      full amount paid to the traded price divided by the number of
                      dead-heaters. In the above example, this would be 300 at the traded price
                      of 4.0 (1200) divided by 3; making 400 payouts and 100 net winnings.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      By way of another example, assume there is an outright winner in a golf
                      tournament but 7 players tie for 2nd place. In the "top 5 finish" market,
                      after settling on the outright winner in the top 5 market there would be 4
                      others designated winner’s places available. 'Client A' has backed one of
                      the winners for 300 at the traded price of 4.0 and 'Client B' has taken
                      the other side of this bet. When the event is settled, the stake (300) is
                      multiplied by 4/7 (i.e. the number of expected winners (4) divided by the
                      number of actual winners (7)) to calculate the reduced stake (171.43) and
                      the remainder given to the layer (128.57). The backer then receives the
                      traded price matched (4.0) multiplied by the reduced stake (4 x 171.43 =
                      685.72). In this example, Client A's net winnings are 385.72 (685.72
                      payout minus the original 300 stake), and Client B's net losses are
                      385.72.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In relation to customers whose betting counterparty, for the purposes of
                      this section of the Exchange Rules dealing with dead heats, the terms
                      'Client A', 'Client B' and 'appropriate layers' should, where relevant, be
                      read
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">9. Exchange Multiples</h3>
                  <p className="m-[0_0_3.2vw_0]">The Exchange Rules only apply to Exchange Multiples. </p>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Customers placing a multiple bet will be betting with each other will act
                      as the counterparty to the bet.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      A multiple bet consists of a number of legs. A leg is defined as one or
                      more chosen selections in any individual event market.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      It reserves the right in its sole discretion not to accept certain
                      multiple bets or to scale back stakes in certain circumstances.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      All multiple bets placed are subject to the Exchange Rules that apply to
                      each individual sport that relates to any leg of any multiple bet.
                    </li>
                    <li className='mb-[3.4666666667vw]'>The maximum payout limit for Exchange Multiples is £1,000,000.</li>
                    <li className='mb-[3.4666666667vw]'>
                      Customers can place an Exchange Multiple bet using back, or where
                      available lay or a mixture of back and lay selections. However, customers
                      cannot have a combination of back and lay selections in any one leg.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If customers choose more than one selection in one leg the odds for this
                      leg will be "dutched" which means they will be combined to reflect the
                      chances of any of the selections within the leg winning (if backed) or all
                      of the selections losing (if laid). If customers wish to place a
                      cross-multiple bet (i.e. more than one selection in any event market but
                      not using "dutched" prices) they will need to enter each Exchange Multiple
                      bet separately.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Other than Exchange Multiples bets struck at Starting Price ("BSP"), the
                      odds available via the Exchange Multiples product will be broadly based on
                      the relevant singles markets on the Exchange and any such winning multiple
                      bet will be subject to commission as set out in the Charges' section of
                      the website.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Any winnings from Exchange Multiples bets struck at BSP will not be
                      subject to commission, but the odds returned on each leg in such a
                      multiple will be subject to a 5% deduction from the BSP.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      A BSP each way Exchange Multiple bet is a bet for selections in the
                      multiple to win and a bet on the same selections to place. For example, a
                      £2 each way double represents a £2 bet on both selections to win and a £2
                      bet on both selections to be placed, with a total stake for the bet of £4.
                      The number of places for each event in each way multiples bet are shown on
                      the multiples win Market Information and do not change. Should the number
                      of runners be equal to or less than the number of places available, the
                      relevant place leg of any multiples bet will be void
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      The minimum total stake for any Exchange Multiple bet is £2. For example,
                      a 20p "Yankee" (11 bet combinations) representing a total stake of £2.20
                      is permitted. However, a 1p "Heinz" (57 bet combinations) representing a
                      total stake of £0.57 or a £1 double (1 bet combination) representing a
                      total stake of £1 will not be permitted. For customers betting in
                      currencies other than English Sterling, the minimum total stake which
                      applies to an Exchange Multiple bet will not necessarily be the equivalent
                      of £2, though it will be calculated as described in the example above.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If, in its sole discretion, will determine the markets that are available
                      for Exchange Multiples. Events available for Exchange Multiples will be
                      those listed within any individual Exchange Multiple group (e.g. UK
                      football fixtures for any given day). Not all markets will be available
                      via the Exchange Multiples product.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      With the exception of the rule directly below, if any selection in any leg
                      is a non-runner or otherwise void under the Exchange Rules (e.g. an
                      abandoned match) then all bets on that individual leg will be void and the
                      Exchange Multiple bet shall be adjusted accordingly. For example, a treble
                      including one void leg will become a double. This means that if customers
                      have more than one selection in any leg (i.e. in cases of 'ditching') and
                      one of those selections is a non-runner, the whole leg will be void. In
                      the event that voided legs mean that an individual bet within a multiple
                      becomes a single bet, then this single bet will stand.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Notwithstanding the rule directly above, for Exchange Multiples bets
                      struck at BSP, if customers have more than one selection in any leg and
                      one of those selections is a non-runner the leg will stand. For example,
                      if customers back both Desert Orchid and Red Rum in an individual horse
                      race and Red Rum is a non-runner, the leg will become a back of just
                      Desert Orchid.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      It reserves the right not to accept certain combinations of Exchange
                      Multiples, such as those including related contingencies (i.e. where the
                      outcome of one event is likely to affect the odds on the outcome of
                      another event). This may happen automatically at the bet placement stage.
                      Alternatively, if such bet is taken in error, it may void the individual
                      bet combinations which include two or more of the related contingency
                      selections.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      It may offer special markets on related events from time to time,
                      including within its normal markets (i.e. outside of the Exchange
                      Multiples product), for example a market on Chelsea to win the English
                      domestic double (i.e. Premiership and FA Cup).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      When placing any Exchange Multiple bet, the prices shown only give an
                      indicative guide as to the price available for each leg and the overall
                      multiple. Other than Exchange Multiples bets struck at BSP, the price of
                      each leg and the overall multiple price that customers get will be fixed
                      when the multiple bet is actually placed and customers will then be able
                      to see these prices. For more details on this customer should refer to the
                      'help' files.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Horseracing Exchange Multiples are based on ‘day of the race’ markets (and
                      not ante-post markets). Horseracing ante-post rules do not therefore apply
                      in relation to horseracing Exchange Multiples.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">10. Rules for Starting Price</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Starting Price ('SP') is available on the Exchange. Exchange SP bets (‘SP
                      bets’) are therefore a type of Exchange bet. The SP is calculated as, by
                      balancing all SP bets and other Exchange bets when the market is suspended
                      at the 'off' of the relevant event. The details of this calculation are
                      provided directly below.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Please note that for all customers, an SP bet cannot be cancelled once it
                      has been placed.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      A bet at SP is a fixed odd bet, with the odds on each selection being
                      calculated and bets matched when the event starts. The odds are calculated
                      by matching SP backers and other Exchange backers against SP layers and
                      other Exchange layers. The inclusion of other Exchange bets in the SP
                      reconciliation is necessary to ensure that: SP backers get the benefit of
                      unmatched Exchange offers to lay if those offers could increase the SP;
                      and SP layers get the benefit of unmatched Exchange offers to back if
                      those offers could reduce the SP. Including unmatched other Exchange in
                      the SP reconciliation also ensures that the bets of other Exchange backers
                      and layers, which would otherwise lapse, are matched where possible.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      The minimum liability for a bet placed at SP is £10 for a lay bet and £2
                      for a back bet (or the currency equivalent in each case).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Example 1: on selection A there is £1,000 of backers' stakes and £6,000 of
                      layers' liabilities at SP and there are £500 of unmatched other Exchange
                      back bets available to lay at an average of 5.0. If we ignored the
                      Exchange market in this case the SP would be 7.0. However, this would
                      leave other Exchange back bets, that could also have been matched at their
                      requested price against SP layers, unmatched. Therefore, the SP will be
                      5.0 and all SP backers and SP layers will be matched at that price. The
                      £500 of Exchange backers' stakes will also be matched at their requested
                      price of 5.0 against the SP layers.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Example 2: on selection B there are £831 of backers' stakes and £4,428 of
                      layers' liabilities at SP and the following unmatched other Exchange lay
                      bets, available to back: £20 at 6.8, £31.13 at 6.6 and £100 at 6.4. In
                      this case the SP will be 6.68. This is calculated by including the £20
                      available to back at 6.8 and the £31.13 available to back at 6.6 and
                      balancing those amounts against the SP backers' stakes and SP layers'
                      liabilities. The £100 available to back on the Exchange at 6.4 remains
                      unmatched as to include any of this amount would lead to an imbalance
                      between SP backers and SP layers.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      The SP is calculated to six decimal places for each selection, though it
                      may be displayed in the relevant market view (or in any form/results data)
                      to two decimal places, rounded up or down as applicable. After
                      reconciliation, the full SP on each selection is available by clicking on
                      the relevant individual runner graph.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If for whatever reason the site is unavailable when an event starts or the
                      SP cannot otherwise be reconciled at the 'off’, it will determine the SP
                      using all available information. For the avoidance of doubt this
                      information will not be limited to betting activity on the relevant
                      market(s). Also in these circumstances, a licensed betting operator within
                      the group may act as risk counterparty to SP bets if necessary to ensure a
                      fair SP. The personnel involved in determining the SP in such
                      circumstances will have no undeclared personal or other interest in the SP
                      in question.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If the SP reconciliation process is undertaken prematurely (for example if
                      a horserace is turned in-play in error), then it will endeavor to reverse
                      the reconciliation so that the SP is determined when the event starts.
                      There may however be circumstances in which this is not possible, in which
                      case the SP will be based on the initial reconciliation.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In cases where an SP reconciliation is reversed: SP bets (including SP
                      limit bets), 'At In-play: Take SP' bets and 'At In-play: Keep' bets will
                      all revert to their status before the reconciliation; and 'At In-play:
                      Cancel' bets will either remain cancelled if not matched as part of the
                      reconciliation process, or if matched as part of the reconciliation
                      process, will revert to their unmatched status before the reconciliation.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If the SP reconciliation process is undertaken later than scheduled (i.e.
                      after the event has started) and determines that a material event has
                      occurred (this will generally mean that the event is not turned in-play),
                      the SP will be determined based solely on SP bets (and ‘At In-play: Take
                      SP’ bets which are unmatched when suspends the relevant market), placed
                      before the 'off'. This means that ‘At In-play: Take SP’ bets matched after
                      the off, will be made void and not included in the reconciliation process.
                      In addition, SP bets placed after the 'off' will be voided. However, if
                      the SP reconciliation process is undertaken later than scheduled but
                      determines that no material event has occurred, all bets will stand.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a SP 'each way' option is offered this will be processed as two
                      separate bets: a win bet at SP and a 'to be placed' bet at SP.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If for any reason unmatched bets are cancelled prior to a market going
                      in-play, then any unmatched bets that have been selected to 'At In-play:
                      Take SP' will be converted to SP bets. Once those bets are converted, they
                      cannot be cancelled.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Party against whom you are betting at SP</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      When you place a bet at SP you are betting against other customers.
                      However, during the reconciliation of the SP, it acts as counterparty in
                      order to balance liabilities between SP bets and other Exchange bets
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Placing a SP bet</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Selecting the 'SP' button in the market view gives customers two different
                      ways to request an SP bet. These are as follows:
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      The first way to request a bet at SP is by leaving the 'Set SP odds limit'
                      box unticked at the top right of the bet manager. For a back bet you are
                      required to enter the stake you wish to bet on the selection. For a lay
                      bet, you are required to enter the liability you are prepared to risk
                      against the selection – in other words the amount that you are prepared to
                      lose, should the selection win (or be placed as applicable).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      The second way to request a bet at SP is to select the 'Set SP odds limit'
                      option. Using this you can request a bet at SP conditional upon minimum SP
                      odds in the case of a back bet, or maximum SP odds in the case of a lay
                      bet. If SP is shorter than the minimum price requested by a backer or is
                      longer than the maximum price requested by a layer, then the relevant bet
                      will lapse when the event starts. If SP is longer than the minimum price
                      requested by a backer or is shorter than the maximum price requested by a
                      layer, the bet will be matched at the SP. Where an SP is equal to the
                      price limit specified by customers, those bets will be included based on
                      the time they were submitted, on a first come, first served basis as is
                      the existing convention for other Exchange bets. This means that such bets
                      may be unmatched or partially matched.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Please note that if a non-runner cannot be removed from the relevant
                      market until after the completion of the event, the application to all
                      bets matched at or before the "off" (including SP bets) of any reduction
                      factor, may mean that the matched price for an SP back bet with an odds
                      limit requested, is adjusted to a price below the lower limit requested.
                      It may also mean that an SP lay bet request with maximum odds requested,
                      may not be matched even though the odds on the selection, after any
                      post-race adjustment for the late non-runner, is below the maximum odds
                      requested.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If an SP bet with an odds limit is requested, the minimum/maximum odds
                      requested can be shortened in the case of a back bet or a lengthened in
                      the case of a lay bet at any time before the event starts. However, as
                      mentioned above, an SP bet request cannot actually be cancelled by a
                      customer once it has been placed. Details of the impact of non-runners on
                      the SP re provided below.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Exchange bets which are unmatched at the 'off'</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      A normal Exchange bet is placed by choosing the odds of your selection
                      from the market view (as opposed to clicking on the 'SP' of your
                      selection). When such an Exchange bet is fully or partially unmatched it
                      can be adjusted and cancelled in the normal course. Previously, unmatched
                      bets were automatically cancelled when a market was suspended at the 'off'
                      of the relevant event. You can now choose to either have your unmatched
                      Exchange bet convert to an SP bet when the market suspends at the start of
                      the event, or to have the bet 'persist' when the event goes in-play (see
                      the 'keep' option below).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In order to convert your unmatched Exchange bet to an SP bet when the
                      market suspends you should select the 'At In-Play: Take SP' option in the
                      bet manager. If there is a non-runner in a win market with a reduction
                      factor of at least 2.5%, or a non-runner in a place market with a
                      reduction factor of at least 4%, it is policy to cancel unmatched lay bets
                      on all other runners in the market. In the case of any such non-runner,
                      instead of being cancelled a lay bet for which the 'At In-Play: Take SP'
                      option has been selected, will automatically convert to an SP bet. After
                      this conversion, the bet cannot be cancelled. Otherwise, unlike an SP bet,
                      you can choose to cancel an Exchange bet once it has been placed, even if
                      you have chosen for the bet to persist or to convert to an SP bet at the
                      start of the event.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If you choose to convert an unmatched Exchange lay bet to an SP bet, the
                      liability of your Exchange lay bet will be converted into a liability for
                      the SP bet. Your liability for that SP bet will never be more than the
                      liability for the Exchange bet you had specified. However, the amount you
                      can win on the SP lay bet may differ from the amount you would have won
                      had the Exchange bet been matched, depending on the final SP.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Adjustments to SP bets for non-runners</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      For SP back bets, will at no point amend either the stake or the odds
                      requested by a customer, despite any non-runners or withdrawals. However,
                      customers who have selected the SP limit option can reduce the minimum SP
                      odds they are prepared to accept on a selection.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For SP lay bets on win markets, it will reduce a customer's liability
                      based on the reduction factor(s) of any non-runner(s) and the reduction
                      factor of the runner on which the customer's bet has been placed. This is
                      to ensure that the balance between the backers' stakes and the layers'
                      liability reflects the revised market after the runner has been removed.
                      For example, if a horse with a 50% reduction factor becomes a non-runner,
                      then another horse in the same market priced at about 5 (i.e. a reduction
                      factor of 20%) will change to a price of about 2.5. Therefore, the
                      liability on a £200 lay bet on that runner will need to change to a
                      liability of about £75 to ensure that a balancing back bet will have the
                      same £50 stake. This is done by multiplying the liability by 37.5% (i.e.
                      100%-(50%/ (100%-20%))).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Where an SP lay bet in a win market has a maximum odds limit specified,
                      this limit will be reduced by the reduction factor of any non-runner, if
                      the non-runner has a reduction factor of at least 2.5%.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For SP lay bets on place markets, it will still reduce a customer's
                      liability based on the reduction factor(s) of any non-runner(s) but the
                      calculation will be slightly different, in line with the application of
                      place market reduction factors. The liability will be reduced by the
                      reduction factor of the removed runner. Where the lay bet on a place
                      market has a maximum odds limit specified, the potential winnings on the
                      bet (i.e. the odds – 1) will be reduced by the reduction factor of the
                      removed runner.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Where an SP lay bet in a place market has a maximum odds limit specified
                      this limit will be reduced by the reduction factor of any non-runner.
                    </li>
                    <li className='mb-[3.4666666667vw]'>SP lay bets will not be cancelled when there is a non-runner.</li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">
                    ➢ Specific conditions for SP bets for non-runners in greyhound racing
                    markets
                  </h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      ALL SP bets will stand so long as your trap selection is not vacant or
                      after your bet placement a reserve runner is not subsequently entered to
                      run from your trap selection.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      ALL unmatched ‘Convert to SP’ bets will be cancelled when a reserve is
                      added or a vacant trap removed.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">11. 'Keep' bets option</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      For markets that are scheduled to be turned in-play at the 'off', a
                      customer can request that an unmatched Exchange bet should not be
                      cancelled when the market is turned in-play. This is done by selecting the
                      'At In-Play: Keep' option in the bet manager (and confirming that request)
                      and means that the unmatched bet persists when other unmatched bets are
                      cancelled at the start of the event.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      As described above, when a non-runner is removed from a horseracing market
                      (apart for late withdrawals as described in the next bullet point below),
                      it is policy to cancel unmatched offers to lay all other horses in the
                      market if the non-runner has a reduction factor of 2.5% or greater for win
                      markets, or 4.0% or greater for place markets. In these circumstances
                      offers to lay a horse with the 'At In-Play: Keep' option selected will not
                      be cancelled. Instead the lay odds offered in place markets will be
                      reduced in proportion with the reduction factors of any non-runner(s) and
                      the same will apply in win markets providing the relevant non-runner has a
                      reduction factor of at least 2.5%.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      When there is a late withdrawal, may not have time to remove the
                      non-runner from the market before turning it in-play. In such cases if can
                      determine that the late withdrawal is a material runner (i.e. a selection
                      with a reduction factor of approx. 20% or greater in the win market), it
                      reserves the right to cancel ALL lay 'keep' bets (in both the win and ‘to
                      be placed’ markets) before turning the market in-play. If it does not
                      cancel lay 'keep' bets in the case of a late withdrawal (for example, it
                      may not be possible to know which horse is withdrawn, at the time of the
                      off), any such bets placed before the off and matched in-play will remain
                      at the original selected price. This means that those lay 'keep' bets will
                      not be subject to any reduction factor which as a result of the late
                      withdrawal, will be applied after the completion of the race to bets
                      matched at or before the 'off'.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Otherwise, in exceptional cases reserves the right to cancel 'keep' bets
                      to protect customers but, unless stipulated in the market rules or the
                      market information, the general principle is that at no point will a
                      'keep' bet be cancelled by unless it remains unmatched when the market is
                      closed (for the final time) at the end of the event.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For the avoidance of doubt this means that (for example) when a Material
                      Event occurs in a soccer match and other unmatched bets are cancelled
                      before the market is reopened, a keep bet will not be cancelled.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">12. Rules for Tote betting</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      When you place a Tote bet on the platform (for example a UK or South
                      African Tote bet), you are betting against as counterparty to your bet. I
                      will then strike a corresponding bet into the relevant Tote pool as
                      applicable.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      A link to the rules which apply to Tote bets struck as counterparty is
                      provided within each of the relevant. If there is any conflict between
                      those rules and either: the equivalent rules available on the relevant
                      Tote website (for example on the UK Tote website in the case of UK Tote
                      bets); or the equivalent rules applied by the relevant host racetrack, the
                      rules on the relevant Tote website or applied by the relevant host
                      racetrack, will prevail.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">13. Miscellaneous</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      All references to time periods in the Exchange Rules relate to the time
                      zone in which the event takes place. For example, a reference to the start
                      time of a football match, relates to the local kick-off time.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      All information is done so in good faith. However, it cannot accept
                      liability for any errors or omissions in respect of any information, such
                      as the posting of prices, runners, times, scores, results or general
                      statistics.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      It reserves the right to correct any obvious errors and shall take all
                      reasonable steps to ensure markets are administered with integrity and
                      transparency.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If an incorrect team or competitor name is displayed (excluding minor
                      spelling mistakes) or the incorrect number of teams, competitors or
                      outcomes is displayed in any complete market or a market is otherwise
                      loaded using incorrect information (for example the application of an
                      incorrect exposure algorithm or a cross matching tool utilising an
                      incorrect algorithm) or includes any obvious error such as the incorrect
                      deployment of the cross matching tool, then It reserves the right to
                      suspend the market and (providing it acts reasonably) to void all bets
                      matched on the market.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Customers are responsible for ensuring that they satisfy themselves that
                      the selection on which they place a bet is their intended selection. For
                      example, in the case of a competitor bearing the same name as another
                      individual not competing in the relevant event, the onus is on the
                      customer to ensure that they know which competitor It has loaded into the
                      relevant market and to ensure that they are placing their bet on their
                      chosen competitor.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      It reserves the right at any time in its sole and absolute discretion to
                      suspend an Exchange market.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      It may, in its sole and absolute discretion, decide to suspend betting on
                      a market at any time (even if such suspension is earlier than anticipated
                      by the Exchange Rules). In the interests of maintaining integrity and
                      fairness in the markets, it may also void certain bets in a market or void
                      a whole market in its entirety.
                    </li>
                    <li className='mb-[3.4666666667vw]'>It reserves the right to amend the Exchange Rules at any time.</li>
                    <li className='mb-[3.4666666667vw]'>
                      It reserves the right to cancel unmatched bets to protect customers at any
                      time.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      On the settlement of any market, amounts relating to
                      <ul className='list-disc ml-[6.4vw]'>
                        <li className='mb-[3.4666666667vw]'>winnings/losses on bets; and</li>
                        <li className='mb-[3.4666666667vw]'>commission charges</li>
                      </ul>
                      will be rounded up or down to the nearest two decimal places (with the
                      exception that rounding will always be down (and never up) in respect of
                      amounts relating to winnings/losses in respect of BSP bets). By way of
                      example, £3.333, will be settled as £3.33, whereas £3.335, will be settled
                      as £3.34 (except that it will be settled as £3.33 in respect of an amount
                      relating to winnings/losses in respect of BSP bets).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      The Exchange Rules have been prepared in various languages other than
                      English for reference only. In the event of any differences between the
                      English version and the non-English version, the English version shall
                      prevail.
                    </li>
                  </ul>
                  <h2 className="mb-[4.8vw] pb-[2.1333333333vw] text-[5.8666666667vw] leading-[1.2] text-[#1b2d38] font-bold border-b border-dotted border-[#e0e6e6]">Part C - Specific sports rules</h2>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">1. American Football</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      All markets will be settled on the result including overtime unless stated
                      otherwise in these American Football Rules or in the Market Information
                      (e.g. the half time/full time market) or where the market has been
                      unconditionally determined. If the game results in a tie after overtime
                      all bets on the outright match winner market will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match does not start on the scheduled starting date and is not
                      completed within three days of the scheduled completion date, all bets
                      will be void except for those on markets which have been unconditionally
                      determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match starts but is later abandoned or postponed, then within three
                      days of the scheduled start date:(a) at least 55 minutes of play must have
                      elapsed; or (b) an official result must be 'called' by the relevant
                      governing body; otherwise all bets will be void, except for those on
                      markets which have been unconditionally determined. In those instances, if
                      the scores are tied then all bets on the outright match winner market will
                      be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For 'Individual player' markets, bets shall be void on any player who does
                      not start in any down during the match.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">2. Athletics</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Where there is a presentation ceremony, markets will be settled on the
                      official result of the relevant governing body at the time of the
                      ceremony, regardless of any subsequent disqualification or amendment to
                      the result.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If there is no presentation ceremony, outcomes will be determined in
                      accordance with the official result of the relevant governing body,
                      regardless of any subsequent disqualification or amendment to the result
                      (except if an amendment is announced within 24 hours of the initial
                      settlement of the relevant market in order to correct an error in
                      reporting the result).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Unless stated otherwise in the Market Information, if a track or field
                      event is abandoned, cancelled or postponed and not completed within 7 days
                      of the scheduled completion date, all bets will be void except for those
                      on markets which have been unconditionally determined.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">3. Australian Rules Football</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Bets apply to regular time excluding overtime. However, bets on "Finals"
                      matches apply to regular time including overtime except for those on
                      markets which have been unconditionally determined or as stated otherwise
                      in the Market Information (e.g. half-time/full-time markets). If the game
                      results in a tie, dead-heat rules apply to bets on the match odds market.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match does not start on the scheduled starting date and is not
                      completed within three days of the scheduled start date, all bets will be
                      void except for those on markets which have been unconditionally
                      determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match starts but is abandoned or postponed before half-time and not
                      completed within three days of the scheduled start date then the match
                      shall be deemed to be a tie and settled on dead-heat rules. If a match
                      starts but is abandoned or postponed in the second half and not completed
                      within three days of the scheduled start date then the match shall be
                      settled on the official result of the relevant governing body. In both
                      instances, bets on the match odds market will be settled as set out above
                      and all other bets will be void except for those on markets which have
                      been unconditionally determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      All bets relating to any individual player will stand if they are listed
                      in any 22-player squad on the match day, irrespective of whether they take
                      any part in the match or not.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">4. Baseball</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      These Baseball Rules apply to Major League Baseball (MLB), World Baseball
                      Classic and Japanese Baseball only. All other baseball, including Finnish
                      Baseball for example, will be governed by the rules set out in the General
                      Rules and the Market Information.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match does not start on the scheduled starting date, all bets will be
                      void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If an MLB match starts but is later abandoned or postponed and an official
                      result is not declared within three days of the scheduled start date, all
                      bets will be void, except for those on markets which have been
                      unconditionally determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a Japanese Baseball match starts but is later abandoned or postponed
                      and the match is not completed within three days of the scheduled start
                      date, all bets will be void except for those on markets which have been
                      unconditionally determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      All bets will include extra innings, unless otherwise stated in the Market
                      Information.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      All bets on 'Total runs' or 'Run line' markets will be void unless there
                      have been at least 9 innings completed (8 1/2 if the home team is ahead)
                      except those on market which have been unconditionally determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In "Listed" markets, bets will be void unless both named pitchers listed
                      in the market start as pitchers in the first fielding innings for their
                      respective teams.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">5. Basketball</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Bets will be settled on the result including overtime unless stated
                      otherwise in the Market Information or where the market has been
                      unconditionally determined or as set out in these Basketball rules.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match does not start on the scheduled start date then all bets will
                      be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match starts but is later abandoned or postponed then, within three
                      days of the scheduled start date, (a) at least 43 minutes of play must
                      have elapsed in any NBA match or 35 minutes of play must have elapsed in
                      any other match; or (b) an official result must be 'called' by the
                      relevant governing body; otherwise all bets will be void, except for those
                      on markets which have been unconditionally determined. In these instances,
                      if the scores are tied then dead heat rules will apply to bets on the
                      outright match winner market.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">6. Boxing and Mixed Martial Arts</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      All individual bout markets will be settled according to the official
                      result of the relevant governing body immediately after the end of the
                      fight, regardless of any subsequent disqualification or amendment to the
                      result (except if an amendment is announced within 24 hours of the initial
                      settlement of the relevant market in order to correct an error in tallying
                      the points or in order to correct an error in reporting the result).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a fight is abandoned, cancelled or postponed and not completed within
                      three days of the scheduled start date, or a boxer is withdrawn or
                      substituted before the first-round bell, all bets will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a boxer retires before the start of a round, fails to answer the bell,
                      or is disqualified for any reason between rounds, the fight will be deemed
                      to have finished at the end of the previous round.
                    </li>
                    <li className='mb-[3.4666666667vw]'>If one of the boxers is disqualified they will be deemed a loser.</li>
                    <li className='mb-[3.4666666667vw]'>
                      If the scheduled duration of the fight is altered in time or number of
                      rounds after the loading of the relevant markets, then all bets will be
                      void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If the scheduled venue is changed after the market has been loaded so that
                      the new venue is changed to a venue in a different country then all bets
                      will be void. For all other changes to the scheduled venue bets will
                      stand.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In mixed martial arts, if a fight is declared a 'no contest', a draw or a
                      technical draw then all bets will be void.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">7. Cricket</h3>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ General</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      If a ball is not bowled during a competition, series or match then all
                      bets will be void except for those on any market that has been
                      unconditionally determined (e.g. in the 'Completed Match' market).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match is shortened by weather, all bets will be settled according to
                      the official result (including for limited overs matches, the result
                      determined by the Duckworth Lewis method).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In the event of a match being decided by a bowl-off or toss of the coin,
                      all bets will be void except for those on markets that have been
                      unconditionally determined.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Test matches</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      If a match starts but is later abandoned for any reason other than weather
                      (which may include but is not limited to: dangerous or unplayable wicket
                      or outfield; pitch vandalism; strike or boycott; crowd protests/violence;
                      stadium damage; acts of terrorism; and acts of God), It reserves the right
                      to void all bets, except for those on markets that have been
                      unconditionally determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If the match is not scheduled to be completed within five days after the
                      original scheduled completion date, then all bets on markets for this
                      event will be void, except for bets on any markets that have been
                      unconditionally determined.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Limited Over matches</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      If a match is declared "No Result'', bets will be void on all markets for
                      the event except for those markets which have been unconditionally
                      determined or where the minimum number of overs have been bowled as laid
                      out in the market specific information.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In the event of a new toss taking place on a scheduled reserve day for a
                      limited over match all bets that were placed after 30 minutes before the
                      original scheduled start of play on the first day will be made void. This
                      rule relates to all markets except those that have been unconditionally
                      determined (e.g. in the win the toss and toss combination markets).
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Super Over rule</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Which team will win this Super Over? This market will be suspended on site
                      and activated once Betfair are aware a Super Over is to be played. The
                      market will be turned in-play at the start of the Super Over. This market
                      will not be actively managed therefore it is the responsibility of all
                      customers to manage their positions. This market will be settled based on
                      the number of runs scored by each team in the initial Super Over. For the
                      avoidance of doubt, if scores are tied at the completion of both innings
                      in the Super Over then the market will be settled as a Dead Heat except in
                      cases where more than one Super Over is played, where it will be settled
                      on the winner of the final over. Any tie breaker that may be used to
                      determine a winner including but not limited to higher number of
                      boundaries, higher number of sixes, losing fewer wickets, coin toss etc.
                      do not count for the purposes of this market.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">8. Cycling</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Where there is a presentation ceremony, markets will be settled on the
                      official result of the relevant governing body at the time of the
                      ceremony, regardless of any subsequent disqualification or amendment to
                      the result.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If there is no presentation ceremony, outcomes will be determined in
                      accordance with the official result of the relevant governing body,
                      regardless of any subsequent disqualification or amendment to the result
                      (except if an amendment is announced within 24 hours of the initial
                      settlement of the relevant market in order to correct an error in
                      reporting the result).
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">9. Darts</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      If a match is not completed for any reason then bets on the match odds
                      market will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match is not completed for any reason then bets on 'any correct
                      score' or 'next leg/game/set' market will be void unless the market has
                      been unconditionally determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match is not completed for any reason then bets on any handicap
                      market will be void unless the market has been unconditionally determined.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">10. Financial markets</h3>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Indices</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Intraday, Midday and PM markets will be settled on the first Bloomberg
                      price stamp past the market closure time regardless of any subsequent
                      amendment to the result (except if an amendment is announced within 24
                      hours of the initial settlement of the relevant market in order to correct
                      an error in reporting the result).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      All Daily markets, weekly markets and end of day Intraday markets will be
                      settled on the official close price following any relevant auction period
                      regardless of any subsequent amendment to the result (except if an
                      amendment is announced within 24 hours of the initial settlement of the
                      relevant market in order to correct an error in reporting the result).
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Equities</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      All equity markets will be settled on the official close price given by
                      Bloomberg regardless of any subsequent amendment to the result (except if
                      an amendment is announced within 24 hours of the initial settlement of the
                      relevant market in order to correct an error in reporting the result).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Should a share split be announced, the market will be determined by the
                      net change in value of the new share price at the close of the day’s
                      trading.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Interest Rates</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Interest rate markets will be settled once the result is regardless of any
                      subsequent amendment to the result (except if an amendment is announced
                      within 24 hours of the initial settlement of the relevant market in order
                      to correct an error in reporting the result).
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">11. House Price</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      For settlement purposes, the Standardized Average Price (seasonally
                      adjusted) provided by HBOS will be used and markets will be settled once
                      the result is regardless of any subsequent amendment to the result (except
                      if an amendment is announced within 24 hours of the initial settlement of
                      the relevant market in order to correct an error in reporting the result).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      It will only use prices provided by HBOS. If the HBOS figures are
                      discontinued or not available for any relevant period then all bets will
                      be void unless stated otherwise in the Market Information.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      All Quarterly markets may be incomplete markets and therefore additional
                      "runners" may be added at any time to reflect the movements in house
                      prices.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Currency markets</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      All Currency markets will be settled using the first Spot price given by
                      Bloomberg past the market closure time regardless of any subsequent
                      amendment to the result (except if an amendment is announced within 24
                      hours of the initial settlement of the relevant market in order to correct
                      an error in reporting the result).
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">12. Golf</h3>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ General</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Tournament bets will only be settled if the minimum number of holes
                      stipulated in the Market Information has been completed.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Where there is a presentation ceremony, markets will be settled on the
                      official result of the relevant governing body at the time of the
                      ceremony, regardless of any subsequent disqualification or amendment to
                      the result.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If there is no presentation ceremony, outcomes will be determined in
                      accordance with the official result of the relevant governing body,
                      regardless of any subsequent disqualification or amendment to the result
                      (except if an amendment is announced within 24 hours of the initial
                      settlement of the relevant market in order to correct an error in
                      reporting the result).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a player does not start a tournament then all bets on that player will
                      be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Any player starting a tournament but withdrawing or being disqualified
                      before the end of the tournament will be settled as a loser.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a tournament is shortened and settles the tournament markets then all
                      bets matched after the last completed round will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In any 'to qualify' market for any tournament the winners are the number
                      of golfers that qualify for the tournament under the terms set out in the
                      Market Information, whether they compete in the tournament or not. Markets
                      will be settled after the qualifying stage and any subsequent
                      disqualification or amendment to results will not count.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a Tournament/Round is restarted from the beginning, all bets placed
                      after the official off time will be void, except on markets which have
                      been unconditionally determined, which will stand. Bets on 2 or 3 balls
                      will only be void if matched after the tee time of the relevant 2 or 3
                      balls.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If it does not suspend a tournament market and cancel unmatched bets at
                      the time stated in the market rules but the market is turned in-play at a
                      later time, all bets matched between the start of a day’s play and the
                      time the market is turned in-play will be void.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Tournament match betting (i.e. 72-hole match bets)</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      If a player withdraws without playing a stroke all bets on the relevant
                      market will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If all players fail to complete a particular round for any reason the
                      winner is the player with the lowest total score after the previous round.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a player is disqualified or withdraws during any round they will be
                      settled as a loser providing at least one other player completes that
                      round.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Should all players fail to complete the first round then all bets will be
                      void.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Round betting markets (e.g. 2 balls, 3 balls etc.)</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      If a player withdraws without playing a stroke in that round all bets on
                      the relevant market will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If one player fails to complete a round for any reason other than a
                      withdrawal or disqualification then all bets will be void except for those
                      on markets which have been unconditionally determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Any player withdrawing or being disqualified having played a stroke in
                      that round will be settled as a loser providing at least one other player
                      completes that round.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Should all players fail to complete the round then all bets will be void.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">
                    ➢ Stroke play hole-by-hole markets (i.e. performance of a named player on a
                    given hole)
                  </h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Should a hole not be completed for any reason all bets on that hole will
                      be void unless the market has been unconditionally determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Markets are settled on completion of the hole and any subsequent penalties
                      or disqualification will not be taken into account.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">
                    ➢ Match play hole-by-hole markets (i.e. performance of players against each
                    other on a given hole)
                  </h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      With the exception of a player or team conceding a hole (where they are
                      deemed a loser), if a hole is not completed by any player or team (other
                      than for withdrawal or disqualification) all bets on that hole will be
                      void unless the market has been unconditionally determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Any player or team withdrawing or being disqualified having played a
                      stroke on that hole will be settled as a loser providing at least one
                      other player completes that hole.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If any player or team does not play a stroke on a hole all bets will be
                      void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Markets are settled on completion of the hole and any subsequent penalties
                      or disqualification will not be taken into account.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">13. Greyhound racing</h3>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ General</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      All bets (excluding those struck on ante-post and Australian licensed
                      markets) are placed on trap numbers. Greyhound names are displayed for
                      information purposes only.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Markets will be determined according to the official result at the time
                      the track gives the result green light status, either in the form of an
                      announcement or by display. Subsequent disqualifications, appeals or
                      amendments to the result will be disregarded.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a non-runner or reserve runner is declared, then all bets prior to the
                      update of the market on It will be void and all unmatched bets including
                      ‘Take SP’ and ‘keep’ bets will be cancelled (except for certain SP bets as
                      set out in Paragraph 10.5 of Part B above).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If there are no finishers in any race or any race is declared void before
                      the official result is declared then all bets will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If the scheduled venue is changed after the market has been loaded by It,
                      all bets will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In ante-post markets, all bets on individual greyhounds stand whether the
                      greyhound runs or not. All ante-post bets will be void if the competition
                      is abandoned or the venue is changed.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Trap Challenge</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Bets on 'Trap challenge' markets are based on which trap results in the
                      most winners during a race meeting, unless stated otherwise in the Market
                      Information.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      These markets are unaffected by any changes due to non-runners or reserve
                      runners.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a race results in a dead heat each trap will receive a half-win, with a
                      3-way dead heat giving a one third-win, and so on.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Standard dead heat rules apply if two or more traps have an equal number
                      of winners at the end of both meetings.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a whole meeting is abandoned all bets are void. However, if at least
                      one race has been completed then bets on these markets will stand.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Multi-trap or Multiplied Trap Numbers</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      'Multi-trap' or 'multiplied trap numbers' bets are on the cumulative sum
                      of the winning trap multiplied by the second trap for each race during a
                      race meeting, unless stated otherwise in the Market Information. If the
                      cumulative sum is not a round number then that sum shall be rounded up to
                      give the applicable cumulative sum.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      These markets are unaffected by any changes due to non-runners or reserve
                      runners.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a race is cancelled, void or abandoned or if there is only one finisher
                      in a race, an eight runner-greyhound races will be allocated 20 points and
                      all other races will be allocated 12 points.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a whole meeting is abandoned all bets are void however if at least one
                      race has been completed then bets on these markets will stand with the
                      remaining races allocated 20 points for eight runner greyhound races and
                      12 points for all other races.
                    </li>
                    <li className='mb-[3.4666666667vw]'>Re-run races will be treated as cancelled races.</li>
                    <li className='mb-[3.4666666667vw]'>
                      If there is a dead heat for the winner between two greyhounds then to
                      calculate the applicable multi-trap number for that race the trap numbers
                      for the greyhounds involved in the dead heat will be multiplied by each
                      other to give the applicable multi-trap number.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If there is a dead heat for the winner between three or more greyhounds
                      then to calculate the applicable multi-trap number for that race the trap
                      numbers for the greyhounds involved in the dead heat will be added up and
                      divided by the number of greyhounds involved in the dead heat and the
                      resulting number will be multiplied by itself to give the applicable
                      multi-trap number (even if not a round number). By way of example: traps
                      1, 3 and 6 dead heat for first. Add these numbers up gives 10; divide this
                      number by the number of greyhounds in the dead heat (3) which gives a
                      resulting number of 3.33; multiply 3.33 by itself to give 11.11.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If there is a dead heat for the runner up between two or more greyhounds
                      then to calculate the applicable multi-trap number for that race the trap
                      numbers for the greyhounds involved in the dead heat will be added up and
                      divided by the number of greyhounds involved in the dead heat and the
                      resulting number will be multiplied by the number of the winner to give
                      the applicable multi-trap number (even if not a round number). By way of
                      example: trap 1 wins and traps 3 and 6 dead heat for second. Adding the
                      numbers of the dead heating runners up gives 9; divide this number by the
                      number of greyhounds in the dead heat (2) which gives a resulting number
                      of 4.5; multiple 4.5 by the winning number (1) to give 4.5.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Winning Distances</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      'Winning distances' bets are on the sum of the winning distances for all
                      races during a race meeting, unless otherwise stated in the Market
                      Information.
                    </li>
                    <li className='mb-[3.4666666667vw]'>The maximum winning distance in any race is 10 lengths.</li>
                    <li className='mb-[3.4666666667vw]'>
                      If there is only one finisher in any race the winning distance will be
                      deemed to be 10 lengths.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a race is cancelled, void or abandoned the winning distance will be
                      deemed to be 2 lengths.
                    </li>
                    <li className='mb-[3.4666666667vw]'>Re-run races will be treated as cancelled races.</li>
                    <li className='mb-[3.4666666667vw]'>
                      For distances below half a length, the following scale will be applied:
                      Short-head 0.1; Head 0.2; Neck 0.3.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      The sum of all the winning distances will be rounded to the nearest whole
                      number at the end of the meeting (rounded up, if half) and bets will be
                      settled on this result.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a whole meeting is abandoned all bets are void. However, if at least
                      one race has been completed then the remaining races are allocated 2
                      lengths each and bets will stand.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Match Bets</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      'Match Bets' for a race are determined by the greyhound with the highest
                      finishing position in that race. If neither greyhound finishes the race
                      bets are void. If only one of the greyhounds finishes the race, that
                      greyhound will be deemed the winner. If a non-runner or reserve runner is
                      declared then all bets will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      'Match Bets' for progress in a competition are determined by the greyhound
                      which qualifies to the furthest round (whether it runs in the further
                      round or not). If the greyhounds concerned fail to qualify in the same
                      round of the competition then the market will be settled as a dead heat,
                      irrespective of their finishing positions in their individual heats.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Reverse Forecasts</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      'Reverse Forecast' markets are determined by those greyhounds placed first
                      and second in a race.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a dead heat affects the reverse forecast then dead heat rules apply.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Place markets</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      The number of winners in 'to be placed' markets is as set out in the
                      Market Information and is determined with reference to the number of
                      runners when the market is loaded.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Once opened, the number of winners in 'to be placed' markets (as set out
                      in the Market Information) will not be affected by further non-runners. If
                      the number of potential winners is equal to or is greater than the number
                      of runners, all bets in this market will be void.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ To Reach the Final and To Qualify markets</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      'Reach the Final' markets shall be determined by the first six greyhounds
                      who qualify from the Semi Finals of the competition and be settled as such
                      regardless of whether they go on to run in the final or not.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      'To qualify' markets shall be determined by the greyhounds that qualify in
                      the relevant heats irrespective of whether they run in the next round or
                      not.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      The 'reach the final' or 'to qualify' markets will be settled after the
                      qualifying stages and any subsequent disqualification or amendment to
                      results will not count.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Ante-post</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      If a greyhound listed in an ante-post market dies, it will use the
                      available information to determine the time of the greyhound's death. It
                      will then, acting reasonably, determine whether the greyhound was a
                      'material runner' in the market. In determining whether a greyhound is a
                      material runner, it will look at the general price of the greyhound
                      immediately before the greyhound's death, in the market and in the wider
                      betting market. Broadly, it will consider a greyhound to be a material
                      runner if it is deemed to have an approximate chance of winning of 8-10
                      per cent or better.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If It determines that the greyhound was a 'material runner', then all bets
                      struck in the market (on all selections) between the time of death and the
                      suspension of the market will be void and all unmatched bets will be
                      cancelled before the market is reopened.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If It determines that the greyhound was not a 'material runner', then just
                      bets struck on the greyhound in question between the time of death and the
                      suspension of the market will be void and unmatched bets will not be
                      cancelled before the market is reopened.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Bets matched on greyhounds after they have forfeited their entry at a
                      particular entry stage or where they have not qualified by the applicable
                      qualifying date will be voided unless the race in question has a
                      subsequent supplementary entry stage.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Where an event is postponed or rescheduled to another day at the same
                      venue then ante-post bets will stand unless entries are reopened in which
                      case all bets will be void.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Australian Specific Non-Runner Rules</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Notwithstanding any of the above, the following rules apply to declared
                      non-runners in Australian greyhound markets.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a greyhound becomes a notified non-runner after the market is loaded
                      but prior to the commencement of the race it will be removed and all bets
                      on the market, matched prior to the update of the market will be voided.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If, following the completion of a race, the stewards declare a greyhound a
                      non-runner, it will resettle the market and will void all bets that were
                      placed on that runner only. It will then apply a reduction factor to all
                      bets placed on the winner (or place getters in the case of place markets)
                      based on that runner’s weighted average price.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">14. Horseracing</h3>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ General</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      All individual race markets will be determined according to the official
                      result at the time of the 'weigh-in' announcement (or equivalent).
                      Subsequent disqualifications, appeals or amendments to the result will be
                      disregarded.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a race is abandoned or otherwise declared void, or in the event of a
                      walkover, all bets on that race will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If the scheduled venue is changed after the market has been loaded, all
                      bets will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Where a race does not take part on its scheduled day, all bets will be
                      void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a scheduled surface type is changed (e.g. turf to dirt) all bets will
                      stand.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Horseracing Exchange Multiples are based on ‘day of the race’ markets (and
                      not ante-post markets). Horseracing ante-post rules do not therefore apply
                      in relation to horseracing Exchange Multiples.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Ante-post</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Subject to the points below, in ante-post markets, all bets on an
                      individual horse stand whether the horse runs or not.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For GB and Irish racing: if a horse is balloted out, all bets on that
                      horse will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a horse listed in an ante-post market dies, it will use the available
                      information to determine the time of the horse's death. It will be acting
                      reasonably, determine whether the horse was a 'material runner' in the
                      market. It will undertake a similar determination in cases where it is
                      advised through official channels that a runner has been formally
                      scratched from an ante-post race. In determining whether a horse is a
                      material runner, it will consider the general price of the horse
                      immediately before the horse's death (or immediately before being advised
                      it has been scratched), in the market and in the wider betting market.
                      Broadly, it will consider a horse to be a material runner if it is deemed
                      to have an approximate chance of winning of 8-10 per cent or better.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If it determines that the horse was a 'material runner', then all bets
                      struck in the market (on all selections) between the time of death (or the
                      time that the formal scratching notification was created) and the
                      suspension of the market will be void and all unmatched bets will be
                      cancelled before the market is reopened.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If it determines that the horse was not a 'material runner', then just
                      bets struck on the horse in question between the time of death (or the
                      time that the formal scratching notification was created) and the
                      suspension of the market will be void and unmatched bets will not be
                      cancelled before the market is reopened.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Bets matched on horses after they have forfeited their entry at a
                      particular entry stage or where they have not qualified by the applicable
                      qualifying date will be voided unless the race in question has a
                      subsequent supplementary entry stage.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Please be aware that runners who have not been entered at the various
                      entry stages may be removed from relevant race markets and all matched
                      customer bet prices set to 1.0 even if there are later supplementary
                      stages. Should it appear likely that a specific runner may actually be
                      supplemented into the race this runner will be reinstated with all matched
                      customer bets set back to the original prices.
                    </li>
                    <li className='mb-[3.4666666667vw]'>No Non-Runner Rule' reductions are made to ante-post bets.</li>
                    <li className='mb-[3.4666666667vw]'>
                      All relevant bets will be void where an event is: abandoned and not
                      rescheduled; or postponed and rescheduled to another venue; or postponed
                      and rescheduled to another day at the same venue with entries for the race
                      being reopened or reverting back to a previous entry or declaration stage
                      provided any additional horses are entered or re-entered and such entries
                      or declarations are considered, in absolute discretion, material to the
                      betting on the race. For the avoidance of doubt, where a race is postponed
                      and rescheduled to another day at the same venue, relevant bets will stand
                      where entries/declarations at the time of postponement remain unaltered or
                      include any non-material addition(s) prior to the rescheduled race.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Place Terms for Exchange markets</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      The number of winners in 'to be placed' markets is as set out in the
                      Market Information and is determined with reference to the number of
                      runners when the market is loaded.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Once opened, the number of winners in 'to be placed' markets will not be
                      affected by further non-runners.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If the number of winners stated in the Market Information is equal to or
                      is greater than the number of runners, all bets in this market will be
                      void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If the number of placed horses is less than the number of potential
                      winners listed in the Market Information, the winners will only be the
                      placed horse or horses.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ EW markets</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      The place portion of any "Each Way" bet will be settled according to the
                      number of 'places' and at the fraction of the win portion profit stated in
                      the market information.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For example: “EW Terms: 1/5th odds, 3 places”. That “1/5th” is applied to
                      the traditional or fractional odds, which are 1 less than decimal odds, so
                      the calculation of the Place odds corresponding to Win odds of 8.0 in this
                      market is ((8.0 – 1) / 5) + 1 = 2.4.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Once opened, the number of places in 'EW” markets will not be affected by
                      further non-runners unless the number of ‘places’ which are offered on the
                      ‘Each Way’ market is equal to or exceeds the number of runners in which
                      case, the place portion of any EW bet will be voided at settlement.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Winning Distance Bets</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Unless stated otherwise in the Market Information, winning distances' bets
                      are on the sum of the winning distances from each race on one particular
                      day at a race meeting.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      The winning distance in a race will be the officially declared distance
                      between the first two horses past the post. However, if either the first
                      or second horse past the post is disqualified because: (i) of an incorrect
                      weight carried; (ii) they have taken the wrong course; (iii) the jockey of
                      either horse fails to weigh in, or weighs in light after the race; then in
                      each case the winning distance shall be that between the first and second
                      horse under the official result.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For the purpose of this bet, the maximum distance on any individual race
                      will be 12 lengths for Flat races and 30 lengths for National Hunt races
                      (which includes National Hunt Flat Races) and these distances will be
                      applied where only one horse finishes a race. For distances below half a
                      length, the following scale will be applied:
                      <ul className='list-disc ml-[6.4vw]'>
                        <li className='mb-[3.4666666667vw]'>Nose: 0.05 length</li>
                        <li className='mb-[3.4666666667vw]'>Short-head: 0.1</li>
                        <li className='mb-[3.4666666667vw]'>Head: 0.2</li>
                        <li className='mb-[3.4666666667vw]'>Short-neck: 0.25</li>
                        <li className='mb-[3.4666666667vw]'>Neck: 0.3</li>
                      </ul>
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a meeting has three or more races abandoned or declared void, then all
                      'winning distance' bets will be void, unless the entire market has been
                      unconditionally determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      When only one or two races are abandoned or declared void, then 'winning
                      distance' bets will be settled with a default distance used for each
                      abandoned or void race. The default distances are 2 lengths for Flat races
                      and 10 lengths for National Hunt races.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In the case of a walkover the following distances will be applied:
                      <ul className='list-disc ml-[6.4vw]'>
                        <li className='mb-[3.4666666667vw]'>Flat: 5 lengths</li>
                        <li className='mb-[3.4666666667vw]'>National Hunt: 12 lengths</li>
                      </ul>
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Non-Runner Rule</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Non-runner rule relates to the adjustment of odds on bets already matched
                      when a horse in a race is declared a non-runner. In order to make the
                      adjustment applies a reduction factor to the remaining runners. The
                      reduction factor allocated to a non-runner is a calculation (the details
                      of which are described below) of that horse's chances of winning (or being
                      placed, etc. as appropriate) and is applied to bets already matched on the
                      other runners in the relevant market or markets.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Any horse listed when the relevant market is loaded which does not
                      subsequently come under starter's orders is deemed to be a non-runner.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      When the market is loaded each horse is given a 'reduction factor', based
                      on a forecast price, which is expressed as a percentage. These reduction
                      factors may be updated periodically at the discretion based on trading in
                      the market, but after approximately 15 minutes (approximately 5 minutes
                      for Australian and US markets) from the scheduled 'off' time of a given
                      race, they will be updated only in exceptional circumstances.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Reductions will be made to both win and place markets but applied
                      differently (as described below), and horses will have a different
                      reduction factor for each market.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      As soon as becomes aware that a horse is an official non-runner or a
                      highly likely non-runner, following a statement to the press from
                      connections, the following will happen:
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      All matched bets on that horse will be void and the horse will be removed
                      from the market.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In the win market: if the reduction factor of the non-runner is 2.5% or
                      greater, the traded price of all the matched bets on the remaining horses
                      will be reduced by an amount equal to the non-runner's final reduction
                      factor and all the unmatched offers to lay will be cancelled. If the
                      non-runner's reduction factor is less than 2.5%, reductions will not be
                      applied and unmatched bets will not be cancelled.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In the place market, the reduction factor of all non-runners will be
                      applied (even if less than 2.5%) and the potential winnings in relation to
                      matched bets on the remaining horses will be reduced by an amount equal to
                      the non-runner's final reduction factor. Only if the non-runner's
                      reduction factor is 4.0% or greater will all the unmatched offers to lay
                      be cancelled.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      All the reduction factors on the remaining horses will be adjusted to
                      reflect their improved chance of winning.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Reduction factors are not applied to bets which are struck in-play.
                      However, if a market is turned in-play prematurely by error (or, for
                      example, there is a false start), all bets matched during this time will
                      be subject to any later reduction factor, provided the market is turned
                      out of play before the race commences. In the event of a late withdrawal,
                      it reserves the right to remove the runner after completion of the race.
                      In this case only those bets matched prior to the off will be affected by
                      a reduction factor.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In the event of a non-runner being removed from a race in error or
                      following incorrect information regarding a runner’s participation, it
                      will reinstate both the runner and all previously matched bets associated
                      with that runner. All bets made between the time of withdrawal and
                      reinstatement will be void in both the place market and the win market.
                      The reduction factor applied to matched bets at the time of withdrawal
                      will be reversed and the original prices will become valid.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Any non-runners will be removed from the relevant markets in the order in
                      which they are brought to attention. If It becomes aware of more than one
                      non-runner at the same time, it will remove the non-runners from the
                      relevant markets in race card order.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a runner is not included in a market because of an error or because of
                      incorrect information regarding a runner’s participation, It reserve the
                      right to introduce the missing runner into the market at any time prior to
                      settlement (even after the race has been run), provided that It has
                      determined that the missing runner is not a material runner (i.e. a
                      selection with a reduction factor of approx. 2.5% or less in the win
                      market). In such circumstances, all pre-play unmatched and matched bets
                      will stand, however if the runner is not introduced before the start of
                      the race, all in-play bets will be void. However, if the missing runner is
                      deemed to be a material runner, then the malformed market will be void and
                      a new market will be loaded where possible.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ How the Reductions are applied for Exchange markets</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>In the win market, reductions will be made on the traded price.</li>
                    <li className='mb-[3.4666666667vw]'>
                      For example: if the non-runner's final reduction factor is 25% the traded
                      price on all previously matched bets on other horses will be reduced by
                      25% - traded price of 8.0 would become 6.0 etc. And these might be further
                      reduced if another horse is subsequently declared a non-runner.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In the EW Market, reductions will be made on the traded win price. The
                      advertised place terms will then apply to the revised win prices.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For example: if the non-runner's final reduction factor is 25% the traded
                      price on all previously matched bets on other horses will be reduced by
                      25% - - traded price of 8.0 would become 6.0. If each Way terms were 1/5th
                      odds for 3 places, the corresponding price for the Place portion of the
                      bet would reduce from 2.4 to 2.0.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In the place market, reductions will be made to the potential winnings on
                      the bet only, and not the traded price.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For example: if the non-runner's final reduction factor is 25% the
                      potential winnings on all previously matched bets on the other horses will
                      be reduced by 25% - a traded price of 8.0 would become 6.25. For example,
                      a £10 bet on a horse to be placed at a traded price of 8.0 would provide
                      winnings of £70. If there is a non-runner with a reduction factor of 25%
                      in the race, that factor will be applied to the £70 of potential winnings
                      leaving potential winnings of £52.50. Therefore, the revised traded price
                      will be 6.25.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      The traded price may be further reduced if any other horse(s) is
                      subsequently declared a non-runner, however odds cannot be reduced below
                      1.01.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Reserves: A reserve runner may appear in the relevant markets but will
                      have a non-applicable reduction factor until It has received confirmation
                      that it is a confirmed runner, in which case an applicable reduction
                      factor may apply to it.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For the avoidance of doubt, any reduction factor applicable to a
                      non-runner replaced by a reserve, will be applied to all bets struck on
                      the relevant markets, prior to the removal from those markets of such
                      non-runner. Likewise, should a reserve runner become a confirmed runner
                      but subsequently become a non-runner, any reduction factor applicable to
                      such non-runner will be applied to all bets struck on the relevant
                      markets, prior to the removal from those markets of such non-runner.
                    </li>
                  </ul>
                  <h4 className="text-[4vw] text-[#1e1e1ee6] mb-[2.6666666667vw] leading-[1.5]">➢ Additional rules</h4>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Card numbers are posted as a guide only: bets are placed on a named horse.
                    </li>
                    <li className='mb-[3.4666666667vw]'>Horses will not be coupled.</li>
                    <li className='mb-[3.4666666667vw]'>
                      Where any horse(s) runs for purse money only it is deemed a non-runner for
                      betting purposes. Should this result in the number of possible winners
                      stated in the relevant Market Information being equal to or greater than
                      the number of runners in the relevant market, all bets in the market will
                      be void.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">15. Ice Hockey</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      All bets on "Regular Time" markets will be settled on the result at the
                      end of regular time, excluding overtime. All bets on " Moneyline " markets
                      will be settled at the result at the end of regular time including
                      "overtime and any shootouts that may be played".
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      'Puck Line' markets (i.e. handicap markets for NHL (National Hockey
                      League) matches) will be settled on the final result including any
                      overtime and any shootouts that may be played. All 'handicap' markets on
                      other matches will be settled on the result at the end of regular time,
                      excluding overtime.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match does not start on the scheduled start date and is not completed
                      within three days of the scheduled start date, all bets will be void
                      except for those on markets which have been unconditionally determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match starts but is later abandoned or postponed then, within three
                      days of the scheduled start date, (a) at least 55 minutes of play must
                      have elapsed in any match; or (b) an official result must be 'called' by
                      the relevant governing body; otherwise all bets will be void, except for
                      those which have been unconditionally determined. In these instances, if
                      the scores are tied then for " Moneyline " matches (where no tie is
                      offered) dead heat rules will apply to bets on the outright match winner
                      market.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">16. Rowing</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      If a crew or individual starts a race but does not complete it then they
                      will be deemed a loser providing at least one other crew or individual
                      completes the race. If no crew or individual completes a race then all
                      bets will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a regatta is cancelled for any reason, all bets will be void, except
                      those on markets which have been unconditionally determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Where there is a presentation ceremony, markets will be settled on the
                      official result of the relevant governing body at the time of the
                      ceremony, regardless of any subsequent disqualification or amendment to
                      the result.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If there is no presentation ceremony, outcomes will be determined in
                      accordance with the official result of the relevant governing body,
                      regardless of any subsequent disqualification or amendment to the result
                      (except if an amendment is announced within 24 hours of the initial
                      settlement of the relevant market in order to correct an error in
                      reporting the result).
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">17. Rugby Union and Rugby League</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      'Tournament points' and 'tournament tries' bets will apply to all playing
                      time, including any extra-time in any match where an official result is
                      declared.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For 'time of first try' bets, if the try is scored in the second half, the
                      first half is deemed to have lasted 40 minutes, regardless of
                      stoppage-time. If no try is scored, or the try is scored in second half
                      stoppage-time or extra-time, the result is 80.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For the purpose of markets involving tries, penalty tries will count with
                      the exception of 'first individual try scorer' markets where penalty tries
                      will not count.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match starts but is abandoned before its completion, all bets will be
                      void unless an official result is declared by the applicable governing
                      body. Where an official result has been declared by the official governing
                      body, that official result will govern match and handicap market
                      settlement but all other markets will be void unless their result has
                      already been determined at the point of abandonment (i.e. at the point of
                      abandonment, it would not have been possible for the outcome of the bet to
                      change had the match continued to its natural conclusion). By way of
                      example, if 37 points have been scored at the time a match is abandoned:
                      (i) a bet placed on 35 points or more to be scored would be settled as a
                      winning bet, (ii) a bet placed on 30-35 points to be scored would be
                      settled as a losing bet and (iii) a bet placed on 40-45 points to be
                      scored would be void. In such circumstances, bets on last try scorer /
                      team to score last / team to score last try / last scoring play would all
                      be void.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">18. Snooker and Pool</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      In the event of a match starting but not being completed, the player
                      progressing to the next round will be deemed the winner (or in the case of
                      the final the player declared the winner).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match is not completed for any reason then bets on 'any correct
                      score' or 'next frame' market will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match is not completed for any reason, bets on any handicap market
                      will be void unless the market has been unconditionally determined.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">19. Soccer</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      If it does not suspend a market on time for the occurrence of a Material
                      Event, it reserves the right to void bets unfairly matched after the
                      Material Event has occurred. Voiding of these bets may take place during
                      the event or retrospectively once a game is completed.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match has not started (or believes that a match will not have
                      started) by 23:59 (local time) on its scheduled start date, then all bets
                      will be void unless it has knowledge that the match has been rescheduled
                      to be played within three days of its original start date.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a match starts but is later abandoned or postponed and believes that
                      the match will not have been completed by 23:59 (local time) on its
                      scheduled start date, then all markets, with the exception of any
                      unconditionally determined markets, will be void unless it has knowledge
                      that the match has been rescheduled to be played within three days of its
                      original start date. If it does have knowledge that the game will be
                      played within three days and the game is played within three days, then
                      all bets will stand except if the match is restarted from the beginning.
                      If the match is restarted from the beginning then all bets matched before
                      the market went in-play will stand, but any bets placed in-play will be
                      void, except for any bets placed in-play on markets which have been
                      unconditionally determined, which will stand.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For Friendly matches, all bets apply to the full duration of play
                      according to the match officials, plus any stoppage time. If a friendly
                      match starts but is later abandoned or postponed and is not completed
                      (i.e. the full duration of play according to match officials, plus any
                      stoppage time) within three days of the scheduled start date, all bets
                      will be void except for those on markets which have been unconditionally
                      determined. In the case of ambiguity over the official result from match
                      officials, the outcome will be determined (acting reasonably) using
                      information from independent sources.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If an official fixture lists different team details to those listed (for
                      example, the team name, reserves, age group, gender, etc.), then all bets
                      matched on the affected markets will be void. In all other cases, bets
                      will stand (including instances where a team name is listed without
                      specifying the term 'XI' in the name). If an official fixture is shown on
                      the website under an incorrect competition name, then it reserves the
                      right to void all bets matched on the affected markets.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If a team is relegated from a league because, at the end of a season, it
                      has finished within the relegation positions which are relevant to that
                      league (i.e. usually any of the bottom three league positions), bets on
                      that team to be relegated will be settled as winning bets. If a team is
                      otherwise disqualified, thrown out or removed from a league (i.e. in
                      circumstances other than those where it has finished the season within the
                      relevant relegation positions): (i) if such team is disqualified, thrown
                      out or removed from the league before the relevant season has started, all
                      bets on the affected market will be void (and a new market will
                      subsequently be loaded) and (ii) if such team is disqualified, thrown out
                      or removed from the league after the relevant season has started (or a
                      determination is made by the applicable governing body, during the season,
                      that the team will be thrown out or removed from the league following the
                      season’s conclusion), all bets on the affected team will be void. For the
                      avoidance of doubt, if a points deduction is imposed on a team such that
                      it finishes the season within the relegation places which are relevant to
                      the applicable league, bets on that team to be relegated will be settled
                      as winning bets.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      The relevant season will be deemed to have started once the first league
                      game has been played. For the purposes of this rule, markets relating to
                      individual matches will not be deemed to be "affected markets".
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      'Shirt numbers' bets will refer to the shirt number allocated at the start
                      of the match. 'Shirt numbers' bets will include own-goal scorers. Any
                      player whose shirt bears no number will be allocated the number 12.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For 'time of first goal' bets (i.e. "First Goal Odds" markets), the first
                      half is deemed to last 45 minutes, regardless of stoppage time. Also for
                      these markets, please note that the "0 - 10 Minutes" selection covers the
                      first 10 minutes of the match. In other words, it runs from 0:00 until
                      just before the clock hits 10:00. The "11 – 20 Minutes" selection runs
                      from 10:00 until just before the clock hits 20:00. The same principle
                      applies to each of the other selections in this market.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For 'top goal scorer' markets only the goals scored in the league or
                      competition stated in the Market Information count. For example, if a
                      player joins a club mid-season any goals scored in a different league will
                      not count, however goals scored for a different club in the same league
                      will count. Own goals will not count.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      In markets which relate to the number of incidents to occur, such as
                      'number of corners', these will be determined on the basis of the number
                      taken, rather than awarded.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      For markets that relate to the number of bookings given, the number of
                      corners taken, any goal scorer or the time of a particular goal, the
                      result will be determined (acting reasonably) using information from
                      independent sources. In such cases, if any new information comes into the
                      public domain within 48 hours of settlement, then it shall (acting
                      reasonably) determine either: (i) whether the market should be reinstated
                      or resettled in light of this new information; or (ii) to wait for further
                      information before deciding whether to reinstate or resettle the market.
                      Except it has announced that it is waiting for further information, any
                      information that comes into the public domain more than 48 hours after a
                      market has been settled shall not be considered (regardless of whether or
                      not such information may have led to a different result).
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">20. Swimming</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Where there is a presentation ceremony, markets will be settled on the
                      official result of the relevant governing body at the time of the
                      ceremony, regardless of any subsequent disqualification or amendment to
                      the result.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If there is no presentation ceremony, outcomes will be determined in
                      accordance with the official result of the relevant governing body,
                      regardless of any subsequent disqualification or amendment to the result
                      (except if an amendment is announced within 24 hours of the initial
                      settlement of the relevant market in order to correct an error in
                      reporting the result)
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">21. Tennis</h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      If a player or pairing retires or is disqualified in any match, the player
                      or pairing progressing to the next round (or winning the tournament in the
                      case of a final) will be deemed the winner. However, if less than one set
                      has been completed at the time of the retirement or disqualification then
                      all bets relating to that individual match will be void.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      All bets relating to the number of occurrences of certain events within a
                      tournament will be void if the tournament is reduced in length, postponed
                      or cancelled, except for those on markets which have been unconditionally
                      determined.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      All bets will stand regardless of changes to scheduled venues, including
                      any changes to a different type of surface.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If the scheduled duration of a match is reduced or increased in the number
                      of games/sets required to win, all bets will be void except for those on
                      markets which have been unconditionally determined. Please note that this
                      does not apply to ‘Match Odds’ or ‘Set Winner’ markets on Davis Cup
                      matches or ‘dead rubber’ matches that have been shortened from five sets
                      to three sets after the market has been loaded, provided that the match
                      has been shortened in accordance with the competition’s rules.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Where markets are offered on individual games or sets within a match, a
                      retirement or disqualification during a game or set will render bets on
                      that game or set market and all individual game or set markets void except
                      those on markets which have been unconditionally determined.
                    </li>
                  </ul>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">
                    22. Winter sports (which may include, amongst others, Alpine Skiing,
                    Biathlon, Cross-Country Skiing and Ski-Jumping)
                  </h3>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Where there is a presentation ceremony, markets will be settled on the
                      official result of the relevant governing body at the time of the
                      ceremony, regardless of any subsequent disqualification or amendment to
                      the result.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      If there is no presentation ceremony, outcomes will be determined in
                      accordance with the official result of the relevant governing body,
                      regardless of any subsequent disqualification or amendment to the result
                      (except if an amendment is announced within 24 hours of the initial
                      settlement of the relevant market in order to correct an error in
                      reporting the result).
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Unless stated otherwise in the Market Information, if an event is
                      abandoned, postponed or cancelled, all bets will be void unless (a) the
                      event is completed at the same venue within 7 days of the official
                      scheduled completion date; or (b) a result is 'called' by the relevant
                      governing body.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      The General Rules will apply for 'match bets'. However, in respect of
                      "Nordic Combined" if all competitors involved in the match bet do not
                      start both sections of the event (ski jumping and cross country) then bets
                      will be void.
                    </li>
                  </ul>
                </div>

              </>}
            {isModalOpen === "KYC" &&
              <>
                <div className='flex flex-[0_0_12.8vw] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] rounded-[1.6vw_1.6vw_0_0]'>
                  <h3 className='flex flex-1 justify-center items-center text-[#ffb200] text-[4.8vw] font-bold leading-[1] bg-[#0000] p-[4vw_1.8666666667vw] '>KYC</h3>
                </div>
                <div className='flex-1 p-[4.2666666667vw_3.4666666667vw] bg-[#fff] text-[4vw] leading-[1.5] overflow-y-scroll h-[77vh]'>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">KNOW YOUR CUSTOMER POLICY</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    To maintain the highest level of security, we require all our members to
                    provide us with certain documentation in order to validate their accounts.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Please note that the identification procedures shall be done before a
                    cardholder starts operating and using services of our merchants.
                  </p>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">Why do I need to provide documentation?</h3>
                  <p className="m-[0_0_3.2vw_0]">There are several reasons:</p>
                  <p className="m-[0_0_3.2vw_0]">
                    We are committed to providing a socially responsible platform for online
                    gaming. All of our members must be 18 or older and we are bound by our
                    licensing agreement to verify this.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Secondly, as a respected online and global company it is in our interests to
                    guarantee maximum security on all transactions.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Thirdly, our payment processors require that our policies are in line with
                    international banking standards. A proven business relationship with each
                    and every member is mandatory for the protection of all parties. Our
                    licensing agreement also obliges us to comply with this.{" "}
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Finally, by ensuring that your account details are absolutely correct, the
                    inconvenience of 'missing payments' can be avoided. It can take weeks (and
                    sometimes months) to trace, recall and resend using the correct information.
                    This lengthy process also results in additional fees from our processors.
                  </p>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">WHAT DOCUMENTS DO I NEED TO PROVIDE?</h3>
                  <p className="m-[0_0_3.2vw_0]">PROOF OF ID:</p>
                  <p className="m-[0_0_3.2vw_0]">
                    A color copy of a valid government issued form of ID (Driver's License,
                    Passport, State ID or Military ID)
                  </p>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">PROOF OF ADDRESS:</h3>
                  <p className="m-[0_0_3.2vw_0]">A copy of a recent utility bill showing your address</p>
                  <p className="m-[0_0_3.2vw_0]">
                    Note: If your government Id shows your address, you do not need to provide
                    further proof of address.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Additional documentation might be required depending on the withdrawal
                    method you choose
                  </p>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">When do I need to provide these documents?</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    We greatly appreciate your cooperation in providing these at your earliest
                    possible convenience to avoid any delays in processing your transactions. We
                    must be in receipt of the documents before any cash transactions can be sent
                    back to you. Under special circumstances we may require the documents before
                    further activity (deposits and wagering) can take place on your account
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Please understand, if we do not have the required documents on file, your
                    pending withdrawals will be cancelled and credited back to your account. You
                    will be notified when this happens via the notification system.
                  </p>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">How can I send you these documents?</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    Please scan your documents, or take a high quality digital camera picture,
                    save the images as jpegs, then upload the files using our secure form.
                  </p>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">How do I know my documents are safe with you?</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    The security of your documentation is of paramount importance. All files are
                    protected with the highest level of encryption at every step of the review
                    process. All documentation received is treated with the utmost respect and
                    confidentiality.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We’d like to thank you for your cooperation in helping us make exchsky.art a
                    safer place to play. As always, if you have any questions about this policy,
                    or anything else, don’t hesitate to contact us using the contact us links on
                    this page.
                  </p>
                </div>

              </>}
            {isModalOpen === "RG" &&
              <>
                <div className='flex flex-[0_0_12.8vw] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] rounded-[1.6vw_1.6vw_0_0]'>
                  <h3 className='flex flex-1 justify-center items-center text-[#ffb200] text-[4.8vw] font-bold leading-[1] bg-[#0000] p-[4vw_1.8666666667vw] '>Responsible Gaming</h3>
                </div>
                <div className='flex-1 p-[4.2666666667vw_3.4666666667vw] bg-[#fff] text-[4vw] leading-[1.5] overflow-y-scroll h-[77vh]'>
                  <p className="m-[0_0_3.2vw_0]">
                    exchsky.art is committed to endorsing responsible wagering among its
                    customers as well as promoting the awareness of problem gambling and
                    improving prevention, intervention and treatment.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    exchsky.art’s Responsible Gambling Policy sets out its commitment to
                    minimizing the negative effects of problem gambling and to promoting
                    responsible gambling practices.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    exchsky.art supports the generation of online gamblers offering them a wide
                    range of games and entertainment. We also take responsibility for our
                    product line-up.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    The aim of exchsky.art is to provide the world’s safest and most innovative
                    gaming platform for adults. The offered clear and safe products allow each
                    user to play within his financial means and to receive the highest quality
                    service. Integrity, fairness and reliability are the guiding principles of
                    exchsky.art’s work. It is therefore clear that exchsky.art should do its
                    best to avoid and reduce the problems, which can arise from participation in
                    gambling, particularly in cases of immoderate playing. At the same time it
                    is important to respect the rights of those who take part in games of chance
                    to a reasonable extent as means of entertainment.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Responsible Gaming at exchsky.art is based on three fundamental principles:
                    Security of the player, Security of the game and Protection against gaming
                    addiction. Together with research institutes, associations and therapy
                    institutions, we work on creation of a responsible, secure and reliable
                    framework for online gaming.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    <strong>Player security</strong>
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We take responsibility for the security of our players. Protection of the
                    players is based on forbidding the attendance of the minors from
                    participation in games and the protection of privacy, which involves
                    responsible processing of personal data and payments. Fairness and the
                    random nature of the products offered are monitored closely by independent
                    organizations. Marketing communication is also geared towards player
                    protection: we promise only what players can receive in our transparent
                    line.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    <strong>
                      Protection against gaming addiction: research – prevention – intervention
                    </strong>
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    The majority of users who make sports bets, casino bets and other gaming
                    offers play in moderation for entertainment. Certain habits and behavior
                    patterns (such as shopping, playing sports, eating or consumption of
                    alcohol) which are considered to be normal and not causing any concern can
                    develop into addiction for some people and cause problems. In the same way,
                    bets on sports and gambling can lead to problems for a small group of
                    customers.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Clients with gaming addiction are prohibited from further participation in
                    the gaming line-up. Subsequently the customers are provided with contacts of
                    organizations where they can receive professional advice and support.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    <strong>
                      Self-responsibility is the most sustainable form of prevention
                    </strong>
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    The basic principle promoted by exchsky.art is that the final decision and
                    responsibility on whether to play or not, and how much money can be spent on
                    the game should be assumed by the customer himself.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Self-responsibility of the customer is therefore the most effective form of
                    protection from addiction. exchsky.art sees its responsibility in assisting
                    the customers by providing transparent products, full information and
                    keeping a clear line of conduct.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    <strong>Protection of minors</strong>
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    exchsky.art does not allow minors (persons under the age of 18) to
                    participate in games and make bets. That’s why the confirmation of having
                    reached the age of majority and the confirmation of date of birth are
                    mandatory requirements during registration. exchsky.art considers the issue
                    of minors taking part in games and betting very seriously. In order to offer
                    the best possible protection of minors, we also rely on the support of
                    parents and caregivers. Please keep your data for account access in a safe
                    place (user ID and password).
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Furthermore, we would recommend that you install filter software. This
                    software will allow you to restrict the access to Internet resources
                    inappropriate for children and teenagers.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    <strong>Responsibility towards problems</strong>
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    exchsky.art offers a variety of games and bets, which are forms of
                    entertainment for the majority of customers. At the same time the company
                    takes responsibility for its customers by providing support and tools for
                    maintenance of a secure and entertaining environment taking into account the
                    associated risks.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    The clients who have difficulty in assessing risks, recognizing their own
                    limits or those who suffer from gambling addiction are not able to enjoy our
                    product line-up responsibly and perceive it as a form of entertainment.
                    exchsky.art takes responsibility for such users by blocking their access to
                    its products for their own protection.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    <strong>Get informed with the main issues!</strong>
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Most people play for pleasure. Moderate participation in games within their
                    financial capacity is fully acceptable. However, for a small percentage of
                    people gambling is not a form of entertainment, it is a challenge that must
                    be considered seriously.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    <strong>What is the problematic game behavior?</strong>
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    A problematic game behavior is considered to be such behavior, which
                    interferes mode of life, work, financial position or health of a person or
                    his family. Long participation in games is counter indicative to such person
                    as it can lead to negative consequences.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    In 1980 the pathological game dependence has been officially recognized and
                    enlisted in the list of psychological diseases of international
                    classification system DSM-IV and ICD-10. It is defined as long, repeating
                    and frequently amplifying inclination for game, despite of existing negative
                    personal and social circumstances, such as a debt, rupture of family
                    relations and delay of professional growth.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    <strong>
                      In what cases behavior of a person should be considered as dependence?
                    </strong>
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    It is necessary to underline that the diagnoses of game dependence can be
                    qualified only by experts. The material presented on this web-page will help
                    you to estimate and define your own game behaviour.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    The special hazard of addictions that are not associated with any substance
                    is that it is very difficult to define the line between pleasure and
                    addiction. Nevertheless, there are some diagnostic signals that may point
                    out the existing problems. In the presence of at least five of the following
                    symptoms, the likelihood of the severe dependence is high:
                  </p>
                  <ol className="list-decimal ml-[6.4vw]">
                    <li className='mb-[3.4666666667vw]'>
                      The player is deeply involved in gambling, all his thoughts are only about
                      the game.
                    </li>
                    <li className='mb-[3.4666666667vw]'>Bet sum increases in course of time.</li>
                    <li className='mb-[3.4666666667vw]'>
                      Attempts to quit or control his participation in the games appear to be
                      unsuccessful.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      When limiting his participation in gambling, a person experiences
                      irritation and disappointment.
                    </li>
                    <li className='mb-[3.4666666667vw]'>The game is a way to escape from problems or discomfort.</li>
                    <li className='mb-[3.4666666667vw]'>The player tries to win back the lost amount,</li>
                    <li className='mb-[3.4666666667vw]'>Lies about his playing behavior,</li>
                    <li className='mb-[3.4666666667vw]'>Commits illegal acts,</li>
                    <li className='mb-[3.4666666667vw]'>Spoils or breaks the relationship with family and colleagues,</li>
                    <li className='mb-[3.4666666667vw]'>Borrows to participate in the games.</li>
                  </ol>
                  <p className="m-[0_0_3.2vw_0]">
                    <strong>Rules for responsible games</strong>
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Following the rules placed below, you can enjoy the game without anxiety:
                  </p>
                  <ol className="list-decimal ml-[6.4vw]">
                    <li className='mb-[3.4666666667vw]'>Start playing only when you are calm and concentrated.</li>
                    <li className='mb-[3.4666666667vw]'>Take regular breaks.</li>
                    <li className='mb-[3.4666666667vw]'>
                      Define for yourself beforehand the monthly amount you can spend on the
                      game.
                    </li>
                    <li className='mb-[3.4666666667vw]'>Once setting a maximum limit, do not further increase it.</li>
                    <li className='mb-[3.4666666667vw]'>
                      Before you start playing, define the maximum amount of winning, after
                      reaching of which you should stop playing.
                    </li>
                    <li className='mb-[3.4666666667vw]'>Define the amount you can afford to lose beforehand.</li>
                    <li className='mb-[3.4666666667vw]'>Do not start playing under alcohol or drug influence.</li>
                    <li className='mb-[3.4666666667vw]'>Do not start playing in a depressed state.</li>
                  </ol>
                </div>
              </>}
            {isModalOpen === "AU" &&
              <>
                <div className='flex flex-[0_0_12.8vw] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] rounded-[1.6vw_1.6vw_0_0]'>
                  <h3 className='flex flex-1 justify-center items-center text-[#ffb200] text-[4.8vw] font-bold leading-[1] bg-[#0000] p-[4vw_1.8666666667vw] '>About Us</h3>
                </div>
                <div className='flex-1 p-[4.2666666667vw_3.4666666667vw] bg-[#fff] text-[4vw] leading-[1.5] overflow-y-scroll h-[77vh]'>
                  <ul className='list-disc ml-[6.4vw]'>
                    <li className='mb-[3.4666666667vw]'>
                      Sky Infotech Group is one of the upcoming providers for online gaming
                      entertainment across Sports Betting, Online and Live Casino operating in
                      the emerging and the regulated markets.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      We aim to utilize the latest technologies to provide innovative and
                      interactive gaming experiences in a secure environment.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      <strong>
                        We have dedicated ourselves to offering our customers a seamless and
                        thrilling gaming experience while you are on the go. We aim to provide
                        an exceptional and fully customizable online betting experience.
                      </strong>
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      <strong>
                        We are innovative, ambitious and passionate about what we do. We do it
                        in a credible and responsible way, always aiming for the top.
                      </strong>
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      We only operate in regulated markets where we hold the appropriate
                      licenses. We take our responsibilities to customers and our other
                      stakeholders seriously and place great emphasis on working to a
                      ‘compliance first’ model across the business.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      <strong>Dedicated Customer Service Team:</strong> We are here for you
                      every step of the way with dedicated customer service managers standing by
                      to provide you with a 24/7 top notch customer care service, handling any
                      issues quickly and efficiently.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      When customers bet on our site they can rest assured that they are getting
                      a wide variety of betting options, up to date information and the best
                      odds available.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      Our customers also have peace of mind, knowing that when it’s time to
                      collect, they are betting with a well-known reputable company.
                    </li>
                    <li className='mb-[3.4666666667vw]'>
                      We have integrated best and secured payment methods on our site and a
                      transaction process that is quick, easy enabling our players to cash out
                      their winnings quickly and securely.
                    </li>
                  </ul>
                  <h2 className="mb-[4.8vw] pb-[2.1333333333vw] text-[5.8666666667vw] leading-[1.2] text-[#1b2d38] font-bold border-b border-dotted border-[#e0e6e6]">BUSINESS ADDRESS</h2>
                  <address className="text-[3.4666666667vw] mb-[4vw]">
                    Name- Sky Infotech N.V.
                    <br />
                    Address- Abraham de Veerstraat 9 , Curacao P.O Box 3421
                  </address>
                  <address className="text-[3.4666666667vw] mb-[4vw]">
                    Name- Sky Technology Limited
                    <br />
                    Address- 71-75 Shelton Street Covent Garden London WC2H 9JQ
                  </address>
                </div>
              </>}
            {isModalOpen === "SEP" &&
              <>
                <div className='flex flex-[0_0_12.8vw] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] rounded-[1.6vw_1.6vw_0_0]'>
                  <h3 className='flex flex-1 justify-center items-center text-[#ffb200] text-[4.8vw] font-bold leading-[1] bg-[#0000] p-[4vw_1.8666666667vw] '>Self-Exclusion Policy</h3>
                </div>
                <div className='flex-1 p-[4.2666666667vw_3.4666666667vw] bg-[#fff] text-[4vw] leading-[1.5] overflow-y-scroll h-[77vh]'>
                  <p className="m-[0_0_3.2vw_0]">
                    If you feel you are at risk of developing a gambling problem or believe you
                    currently have a gambling problem, please consider using Self-Exclusion
                    which prevents you gambling with exchsky.art for a specified period of 6
                    months, 1 year, 2 years, 5 years or permanently.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    If you want to stop playing for other reasons, please consider a Time-Out or
                    using Account Closure.
                  </p>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">What happens when you self-exclude?</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    During a period of Self-Exclusion you will not be able to use your account
                    for betting, although you will still be able to login and withdraw any
                    remaining balance. It will not be possible to re-open your account for any
                    reason, and exchsky.art will do all it can to detect and close any new
                    accounts you may open.
                  </p>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]">Next steps</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    Whilst we will remove you from our marketing databases, we also suggest that
                    you remove exchsky.art from your notifications and delete/uninstall all
                    exchsky.art apps, downloads and social media links. You may also wish to
                    consider installing software that blocks access to gambling websites, click
                    here for more information.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    We recommend that you seek support from a problem gambling support service
                    to help you deal with your problem.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You can self-exclude your account in the My Gambling Controls section of
                    Members by choosing Self-Exclusion.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Alternatively you can contact our customer care team for assistance and
                    further information.
                  </p>
                  <h3 className="mb-[3.2vw] text-[4.5333333333vw] font-bold leading-[1.2] text-[#1e1e1ee6] bg-[#0000]"> Self-Exclusion Notice</h3>
                  <p className="m-[0_0_3.2vw_0]">
                    Should you opt to self-exclude from exchsky.art, we strongly recommend that
                    you seek exclusion from all other gambling operators you have an account
                    with.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    You can self-exclude by contacting other gambling operators directly or you
                    can exclude from other licensed operators by completing a Self-Exclusion
                    Notice form.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Once completed the Self-Exclusion Notice form should be submitted to the
                    nominated site, sports bookmaker or betting exchange operator.
                  </p>
                </div>
              </>}
            {isModalOpen === "UP" &&
              <>
                <div className='flex flex-[0_0_12.8vw] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] rounded-[1.6vw_1.6vw_0_0]'>
                  <h3 className='flex flex-1 justify-center items-center text-center text-[#ffb200] text-[4.8vw] font-bold leading-[1] bg-[#0000] p-[2vw_1.8666666667vw] '>Underage Gaming Policy – exchsky.art</h3>
                </div>
                <div className='flex-1 p-[4.2666666667vw_3.4666666667vw] bg-[#fff] text-[4vw] leading-[1.5] overflow-y-scroll h-[77vh]'>
                  <p className="m-[0_0_3.2vw_0]">
                    It is illegal for anyone under the age of 18 to open an account or gamble
                    with{" "}
                    <a className="text-[#2789ce]">
                      https://www.exchsky.art/
                    </a>
                    (hereinafter "exchsky.art"). We strictly prohibit minors from registering or
                    gambling, and we require new members to declare that they are over 18 years
                    of age.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    exchsky.art takes all reasonable steps to prevent underage gamblers from
                    accessing and using our services, including the use of identity verification
                    services to ensure that all users are eligible to play. As a registered
                    user, you can help us prevent underage gambling online.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Especially if you access your exchsky.art account on a shared computer, or
                    if you have underage individuals in your household, it's important that you
                    take precautions to prevent underage gambling. Do not use software that
                    saves your username and password on shared devices, and consider installing
                    parental control programs that can help prevent minors from accessing online
                    gambling websites.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    exchsky.art includes several mechanisms that can help you detect
                    unauthorized use of your player account. Note the last login time and IP
                    address when you log into your account, and review your game transactions
                    and financial transactions in your account details to ensure that there is
                    no suspicious activity.
                  </p>
                  <p className="m-[0_0_3.2vw_0]">
                    Parents with immediate concerns about underage gambling should report
                    immediately to either email
                    <a className="text-[#2789ce]">support@exchsky.art</a> or the support
                    chat.
                  </p>
                </div>

              </>}

            {/* Footer */}
            <div className='flex justify-center items-center p-[2.1333333333vw_0] border-t border-[#e0e6e6] rounded-[0_0_1.3333333333vw_1.3333333333vw] bg-[#fff]'>
              <button className='m-[0_auto] w-[45.3333333333vw] h-[10.6666666667vw] text-[4vw] font-bold leading-[10.6666666667vw] text-[#ffb200] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] border-[0.2666666667vw] border-[#222] rounded-[1.6vw]' onClick={() => setIsModalOpen("")}>CLOSE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="w-full lg:w-[74%] mx-auto mt-[1px]">
        {/* News Marquee */}
        <div className="hidden lg:block">
          <News />
        </div>
        {/* Slider Banner */}
        <Carousel arrows dots={false} infinite={true} autoplay={true}>
          <div>
            <img src="/Images/dashboard-casino-img/banner-1.webp" alt="" className="w-full" />
          </div>
          <div>
            <img src="/Images/dashboard-casino-img/banner-2.webp" alt="" className="w-full" />
          </div>
        </Carousel>
        {/* <div className="flex justify-center items-center w-full">
          <img src="/Images/dashboard-casino-img/banner-1.webp" alt="" className="w-full" />
        </div> */}
        {/* Sub Banners */}
        <div className='px-1.5 lg:px-0 mt-[5px] lg:mt-[15px]'>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-1.5 lg:gap-2.5">
            <Link to={"/inplay"} className="relative w-full lg:w-1/2">
              <div className="absolute z-[3] text-white right-0 top-0 leading-snug [background-image:linear-gradient(180deg,_#000000_0%,_rgba(0,_0,_0,_0.7)_82%,_rgba(0,_0,_0,_0)_100%)] w-[23%] lg:w-[15%] p-[2px] lg:p-0">
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
                <div className="flex text-[2.6666666667vw] lg:text-xs my-1 justify-between px-1 inPlay-sport">
                  Kabaddi <span className="text-[#333] h-[3.7333333333vw] lg:h-4 min-w-[3.7333333333vw] lg:min-w-3 px-1 bg-white rounded-[0.5333333333vw] lg:rounded-sm">0</span>{" "}
                </div>
              </div>
              <img src="/Images/dashboard-casino-img/banner_sports.png" alt="" className="w-full h-auto" />
              <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)" }} className="absolute bottom-0 flex w-full justify-between border-b-[1.12vw] lg:border-b-[5px] border-[#ffb80c] z-[9]">
                <p className="flex justify-start items-center text-white text-[3.7333333333vw] lg:text-lg font-bold pl-2">
                  Sports
                </p>
                <p className="flex justify-center items-center font-bold text-[2.8vw] lg:text-sm text-center py-[1vw] lg:py-3 pl-4 pr-1 leading-relaxed" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                  Play Now
                </p>
              </div>
            </Link>
            <div className="relative  w-full lg:w-1/2">
              <img
                src="/Images/dashboard-casino-img/banner_kabaddi.png"
                alt=""
                className="w-full h-full object-cover"
              />
              <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)" }} className="absolute bottom-0 flex w-full justify-between border-b-[1.12vw] lg:border-b-[5px] border-[#ffb80c]">
                <p className="flex justify-start items-center text-white text-[3.7333333333vw] lg:text-lg font-bold pl-2">
                  Kabaddi
                </p>
                <p className="flex justify-center items-center font-bold text-[2.8vw] lg:text-sm text-center py-[1vw] lg:py-3 pl-4 pr-1 leading-relaxed" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                  Play Now
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-1.5 lg:gap-2.5 pt-[5px] lg:pt-[10px]">
            <div className=" w-full lg:w-1/2">
              <img src="/Images/dashboard-casino-img/banner_blog.png" alt="" className="w-full h-auto" />
            </div>
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
          </div>

          {/* Dual Banner Row */}
          <div className="flex flex-col lg:flex-row items-stretch gap-1.5 lg:gap-2.5 pt-[5px] lg:pt-[10px]">
            {/* Left Side - Natural image */}
            <div className=" w-full lg:w-1/2 flex gap-1.5 lg:gap-2.5">
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
                  src="/Images/dashboard-casino-img/banner_smartsoft-half.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
                <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)" }} className="absolute bottom-0 flex w-full justify-between border-b-[1.12vw] lg:border-b-[5px] border-[#ffb80c]">
                  <p className="flex justify-start items-center text-white text-[3.7333333333vw] lg:text-lg font-bold pl-2">
                    Smartsoft
                  </p>
                  <p className="flex justify-center items-center font-bold text-[2.8vw] lg:text-sm text-center py-[1vw] lg:py-3 pl-4 pr-1 leading-relaxed" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                    Play now
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Two small images inside half width */}
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
                  Play Now
                </p>
              </div>
            </div>
          </div>

          {/* Dual Banner Row */}
          <div className="flex flex-col lg:flex-row gap-1.5 items-stretch py-[5px] lg:py-[10px]">
            {/* Left Side - Natural image */}
            <div className=" w-full lg:w-1/2 flex gap-1.5 lg:gap-2.5 mr-[5px]">
              <div className="relative w-1/2">
                <img
                  src="/Images/dashboard-casino-img/ezugi.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
                <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)" }} className="absolute bottom-0 flex w-full justify-between border-b-[1.12vw] lg:border-b-[5px] border-[#ffb80c]">
                  <p className="flex justify-start items-center text-white text-[3.7333333333vw] lg:text-lg font-bold pl-2">
                    Ezugi
                  </p>
                  <p className="flex justify-center items-center font-bold text-[2.8vw] lg:text-sm text-center py-[1vw] lg:py-3 pl-4 pr-1 leading-relaxed" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                    Play now
                  </p>
                </div>
              </div>
              <div className="relative w-1/2" onClick={() => navigate('/lobby')}>
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

            {/* Right Side - Two small images inside half width */}
            <div className=" w-full lg:w-1/2 flex gap-1.5 lg:gap-2.5">
              <div className="relative w-1/2">
                <img
                  src="/Images/dashboard-casino-img/spribe.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
                <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)" }} className="absolute bottom-0 flex w-full justify-between border-b-[1.12vw] lg:border-b-[5px] border-[#ffb80c]">
                  <p className="flex justify-start items-center text-white text-[3.7333333333vw] lg:text-lg font-bold pl-2">
                    Spribe
                  </p>
                  <p className="flex justify-center items-center font-bold text-[2.8vw] lg:text-sm text-center py-[1vw] lg:py-3 pl-4 pr-1 leading-relaxed" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                    Play now
                  </p>
                </div>
              </div>
              <div className="relative w-1/2">
                <img
                  src="/Images/dashboard-casino-img/black-jack.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
                <div style={{ background: "linear-gradient(270deg, rgba(69, 94, 104, 0) 4%, rgb(0, 0, 0) 97%)" }} className="absolute bottom-0 flex w-full justify-between border-b-[1.12vw] lg:border-b-[5px] border-[#ffb80c]">
                  <p className="flex justify-start items-center text-white text-[3.7333333333vw] lg:text-lg font-bold pl-2">
                    Blackjack
                  </p>
                  <p className="flex justify-center items-center font-bold text-[2.8vw] lg:text-sm text-center py-[1vw] lg:py-3 pl-4 pr-1 leading-relaxed" style={{ clipPath: "polygon(16% 0, 100% 0, 100% 100%, 0% 100%)", background: "#ffb80c" }}>
                    Play now
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Small casino */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 lg:gap-2.5">
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
      <div className={` pb-0 lg:px-40 bg-[#eeee]`} style={{ marginTop: "" }}>
        <div className="flex justify-center items-center">
          <div className='mx-5 lg:mx-36 pt-7 w-full lg:w-[45%]'>
            <div className='lg:flex justify-between mb-2 '>
              <div className='py-3 bg-white lg:w-[49%] mb-2 lg:mb-0 flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086]'><img src={images.headphoneIcon} className='w-8' alt="" /> <span className='cursor-pointer hover:text-black' > Customer support1 </span> | <span className='cursor-pointer hover:text-black' > support2 </span></div>
              <div className='py-3 bg-white lg:w-[49%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086]'><img src={images.whatsAppIcon} className='w-7' alt="" /> <span className='cursor-pointer hover:text-black' >WhatsApp 3 </span> | <span className='cursor-pointer hover:text-black' > WhatsApp 4 </span></div>
            </div>

            <div className='w-full bg-white h-4 mb-2 rounded-lg border border-[#97979780]'></div>
            {/*  for pc view */}
            <div className='hidden  lg:flex justify-between gap-2'>
              <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086] hover:text-black cursor-pointer' > <img src={images.skypeIcon} className='w-7' alt="" /> exchskyofficial</div>
              <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086] hover:text-black cursor-pointer' > <img src={images.emailIcon} className='w-7' alt="" /> info@exchsky.com</div>
              <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086] hover:text-black cursor-pointer' > <img src={images.igIcon} className='w-7' alt="" /> officialexchsky</div>
            </div>
            {/*  for mobile view */}
            <div className='flex lg:hidden justify-between gap-2'>
              <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086] hover:text-black cursor-pointer' > <img src={images.skypeIcon} className='w-5' alt="" /> Skype</div>
              <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086] hover:text-black cursor-pointer' > <img src={images.emailIcon} className='w-5' alt="" /> Email</div>
              <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] text-sm text-[#00000086] hover:text-black cursor-pointer' > <img src={images.igIcon} className='w-5' alt="" /> Instagram</div>
            </div>

            {/* only for pc */}
            <div className='hidden  border border-[#a6a6a6] mt-6 p-2 lg:flex justify-center item-center rounded-lg' >
              <div className=' flex justify-center items-center w-full' >
                <div className='flex w-[30%] mr-2'>
                  <div className='flex justify-start item-center w-[150px] h-[50px] bg-white'>
                    <img src={images.betFairIcon} className='w-16 h-12' alt="" />
                  </div>
                </div>
                <div className='w-full'>
                  <div className='text-[11px] py-1 text-[#00000080]'>exchsky.com is operated by exchsky company incorporated under the laws of Curacao with company Registration number 091237 with registered office at Abraham de Veerstraat 9 , Curacao P.O Box 3421 and is licensed and regulated by the Curacao authority as the regulatory body responsible holding a (Sub-license with License number 365/JAZ Sub-License GLH- OCCHKTW0707072023 granted on 6.07.2023).
                    <br />
                    Players are requested not to contact any untrusted sources for https://exchsky.com/ accounts as this is an online site and they can only register independently without any agents. Only deposit through the account details generated by the system or provided by our official support team.</div>

                  <div className='flex justify-end items-center'>

                    <div className='flex justify-between items-center border-t border-[#a6a6a6] w-[80%]'>
                      <p className='pt-1 flex justify-center items-center text-xs text-[#00000080]'>
                        <img src={images.phoneIcon} className='h-4' alt="" />
                        <span>
                          +91 0000000000 / +91 0000000000
                        </span>
                      </p>
                      <p className='pt-1 flex justify-center items-center text-xs gap-1 underline text-[#00000080]'>
                        <img src={images.mailIcon} className='h-4' alt="" />
                        <span>
                          support@exchsky.com
                        </span>
                      </p>
                    </div>
                  </div>
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
            - <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('/privacy', '_blank', 'noopener,noreferrer,width=800,height=600');
              }}
              className="underline"
            >
              Privacy Policy
            </a>
            - <a
              href="/siteTerms"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('/siteTerms', '_blank', 'noopener,noreferrer,width=800,height=600');
              }}
              className="underline"
            >Terms and Conditions </a>
            - <a
              href="/siteRules"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('/siteRules', '_blank', 'noopener,noreferrer,width=800,height=600');
              }}
              className="underline"
            >Rules and Regulations </a>
            - <a
              href="/kyc"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('/kyc', '_blank', 'noopener,noreferrer,width=800,height=600');
              }}
              className="underline"
            > KYC</a>
            -  <a
              href="/rg"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('/rg', '_blank', 'noopener,noreferrer,width=800,height=600');
              }}
              className="underline"
            > Responsible Gaming
            </a>
            - <a
              href="/au"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('/au', '_blank', 'noopener,noreferrer,width=800,height=600');
              }}
              className="underline"
            > About Us </a>
            - <a
              href="/skyExSelfExclusionPolicy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('/skyExSelfExclusionPolicy', '_blank', 'noopener,noreferrer,width=800,height=600');
              }}
              className="underline"
            >Self-exclusion Policy </a>
            - <a
              href="/skyUnderagePolicy"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('/skyUnderagePolicy', '_blank', 'noopener,noreferrer,width=800,height=600');
              }}
              className="underline"
            > Underage Policy </a> -
          </p>

          {/* for mobile view */}
          <p className='lg:hidden flex justify-center flex-wrap gap-[2px] text-[3.4666666667vw] text-center m-[3.2vw_auto_8vw] p-[0_1.8666666667vw] text-[#bbb] w-[100vw]'>
            <Link className='underline mb-[1.3333333333vw] mr-[0.8vw] text-[#666]' onClick={() => setIsModalOpen("PP")}>Privacy Policy </Link>
            |<Link className='underline mb-[1.3333333333vw] mr-[0.8vw] text-[#666]' onClick={() => setIsModalOpen("TC")}>Terms and Conditions</Link>
            |<Link className='underline mb-[1.3333333333vw] mr-[0.8vw] text-[#666]' onClick={() => setIsModalOpen("RR")} >Rules and Regulations </Link>
            |<Link className='underline mb-[1.3333333333vw] mr-[0.8vw] text-[#666]' onClick={() => setIsModalOpen("KYC")} > KYC</Link>
            |<Link className='underline mb-[1.3333333333vw] mr-[0.8vw] text-[#666]' onClick={() => setIsModalOpen("RG")} > Responsible Gaming</Link>
            |<Link className='underline mb-[1.3333333333vw] mr-[0.8vw] text-[#666]' onClick={() => setIsModalOpen("AU")} > About Us </Link>
            |<Link className='underline mb-[1.3333333333vw] mr-[0.8vw] text-[#666]' onClick={() => setIsModalOpen("SEP")} >Self-exclusion Policy </Link>
            |<Link className='underline mb-[1.3333333333vw] mr-[0.8vw] text-[#666]' onClick={() => setIsModalOpen("UP")} > Underage Policy </Link>
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