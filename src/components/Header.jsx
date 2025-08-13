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
  const dropdownRef = useRef(null);
  const AccountMenu = useRef(null);
  const userInfo = Helper();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.events);
  const accountMenuRef = useRef(null);


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inplayEvents, setInplayEvents] = useState([])
  const { login, logout, setShowLoginModel, setCurrentBalance } = useAuth();
  console.log('header userinfo : ', userInfo)

  const [activeSportType, setActiveSportType] = useState(null);
  const [isMyAccountModelOpen, setIsMyAccountModelOpen] = useState(false);
  const [vCode, setVCode] = useState("")
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
    site_code: apiBaseUrl.sitecodes,
    user_type: "User",
  });
  const [validationCode, setValidationCode] = useState("");
  const [userCode, setUserCode] = useState("");
  const [activeItem, setActiveItem] = useState("Home");
  const [loginClicked, setLoginClicked] = useState(false);
  const [balance, setBalance] = useState(0);
  const [exposure, setExposure] = useState(0);
  const [balanceDetails, setBalanceDetails] = useState(false);

  let balanceWithExp = balance - Math.abs(exposure);
  setCurrentBalance(balanceWithExp);

  function getBalance() {
    var data = JSON.stringify({
      user_id: userInfo?._id,
    });

    var config = {
      method: "post",
      url: `${Appconfig.apiUrl}ledger/getUserBalance`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        if (response.data.result == 0) {
        } else {
          // console.log('Balance response : ', response)
          setBalance(response.data.resultData?.balance);
          setExposure(response.data.resultData?.exposure);
          // setCurrentExposure(response.data.resultData?.exposure);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData?.user_name == "") {
      toast.error("Please Enter Your Username", { autoClose: 1000 });
      return;
    }

    if (formData?.password == "") {
      toast.error("Please Enter Your Password", { autoClose: 1000 });
      return;
    }

    if (vCode == "") {
      toast.error("Validation code is empty", { autoClose: 1000 });
      return;
    }

    if (vCode != validationCode) {
      toast.error("Invalid validation code!", { autoClose: 1000 });
      return;
    }

    var config = {
      method: "post",
      url: `${apiBaseUrl.apiUrl}users/userAuthenticate`,
      headers: {
        "Content-Type": "application/json",
      },

      data: JSON.stringify(formData),
    };
    axios(config)
      .then(function (response) {
        if (response.data.result) {
          toast.success(response.data.resultMessage, { autoClose: 500 });
          login(response.data.resultData);
          setShowLoginModel(false);
          console.log('response data : ', response)
        } else {
          toast.error("Invalid Credentials", { autoClose: 800 });
        }
        formData.user_name = "";
        formData.password = "";
        setVCode("");
      })
      .catch(function (error) {
        console.log(error);
        toast.error("An error occurred during login", { autoClose: 800 });
      });
  };

  const handleLogout = () => {
    logout();
    // setShowSidebar(false);
  };

  const menuItems = [
    { name: "Home", url: "/" },
    { name: "In-Play", url: "/inPlay" },
    { name: "Multi Markets", url: "/multimarket" },
    { name: "Cricket", live: `${inplayEvents?.filter(item => item.event_type == "4").length}`, url: "/sports" },
    { name: "Soccer", live: `${inplayEvents?.filter(item => item.event_type == "2").length}`, url: "/sports" },
    { name: "Tennis", live: `${inplayEvents?.filter(item => item.event_type == "1").length}`, url: "/sports" },
    { name: "Virtual Cricket", url: "" },
    { name: "E-Soccer", live: "0", url: "" },
  ];

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



  useEffect(() => {
    const randomCode = Math.floor(1000 + Math.random() * 9000).toString();
    setValidationCode(randomCode);
  }, []);

  useEffect(() => {
    if (userInfo) {
      getBalance();
    }
  }, []);


  useEffect(() => {
    if (location.pathname === "/sports" && location.state?.sportType) {
      setActiveSportType(location.state.sportType);
    }
  }, [location]);


  // Close My Account modal of outside click 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountMenuRef.current &&
        !accountMenuRef.current.contains(event.target)
      ) {
        setIsMyAccountModelOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <>
      {/* {isModalOpen && (
      )} */}
      {/* Modal */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-[#000000b3] z-[99999] flex flex-col justify-start items-center transition-opacity duration-300 ${isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className={`absolute top-0 left-0 w-full transform transition-all duration-500 ease-in-out ${isModalOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } text-[3.2vw] text-[#3b5160] bg-[#e0e6e6] shadow-[0_0.8vw_2.67vw_0_rgba(0,_0,_0,_.5)] z-[9999]`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="fixed top-0 left-0 w-screen h-screen z-[99999] flex flex-col justify-start items-center">
            <div className="absolute top-0 left-0 w-full text-[3.2vw] text-[#3b5160] bg-[#e0e6e6] shadow-[0_0.8vw_2.67vw_0_rgba(0,_0,_0,_.5)] z-[9999]" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col bg-[#fff] m-[3.2vw_1.87vw] p-[2.67vw_1.87vw_0] rounded-[0.8vw] shadow-[0_0.27vw_0.27vw_0_rgba(0,_0,_0,_.3)]">
                <h3 className="leading-[1.6] mb-[0.8vw]">Main Balance</h3>
                <div className="flex items-center text-[#1e1e1e] text-[4.53vw] font-bold leading-[1.2] pr-[21.33vw] pb-[2.67vw]">
                  <span className="flex mr-[0.8vw] p-[0_1.33vw] leading-[4.27vw] text-[2.67vw] font-bold text-[#fff] bg-[#5f849d] rounded-[0.8vw]">PIN</span>
                  {balance && Math.abs(balanceWithExp).toFixed(2)}
                </div>
                <div className="flex justify-between font-normal p-[1.87vw_0] border-t border-[#e0e6e6]">
                  <span>Exposure</span> <span>{Math.abs(exposure).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex flex-col bg-[#fff] m-[3.2vw_1.87vw] p-[2.67vw_1.87vw_0] rounded-[0.8vw] shadow-[0_0.27vw_0.27vw_0_rgba(0,_0,_0,_.3)]">
                <div className="flex justify-between items-center pb-[2.67vw] border-b border-[#e0e6e6]">
                  <div>
                    <h3 className="leading-[1.6] mb-[0.8vw]">Royal Gaming Balance</h3>
                    <div className="flex items-center text-[#1e1e1e] text-[4.53vw] font-bold leading-[1.2] pr-[21.33vw]">
                      <span className="flex mr-[0.8vw] p-[0_1.33vw] leading-[4.27vw] text-[2.67vw] font-bold text-[#fff] bg-[#5f849d] rounded-[0.8vw]">PIN</span>
                      0
                    </div>
                  </div>
                  <div className="text-[#3b5160] text-[4vw] font-bold leading-[2.2] p-[0_2.13vw] bg-[#5ebeff26] hover:bg-[#5ebeff4d] rounded-[1.07vw] border border-[#7e97a7] cursor-pointer">Recall</div>
                </div>

                <div className="flex justify-between items-center py-[2.67vw] border-b border-[#e0e6e6]">
                  <div>
                    <h3 className="leading-[1.6] mb-[0.8vw]">Casino Balance</h3>
                    <div className="flex items-center text-[#1e1e1e] text-[4.53vw] font-bold leading-[1.2] pr-[21.33vw]">
                      <span className="flex mr-[0.8vw] p-[0_1.33vw] leading-[4.27vw] text-[2.67vw] font-bold text-[#fff] bg-[#5f849d] rounded-[0.8vw]">PIN</span>
                      0
                    </div>
                  </div>
                  <div className="text-[#3b5160] text-[4vw] font-bold leading-[2.2] p-[0_2.13vw] bg-[#5ebeff26] hover:bg-[#5ebeff4d] rounded-[1.07vw] border border-[#7e97a7] cursor-pointer">Recall</div>
                </div>

                <div className="flex justify-between items-center py-[2.67vw] border-b border-[#e0e6e6]">
                  <div>
                    <h3 className="leading-[1.6] mb-[0.8vw]">BPoker Balance</h3>
                    <div className="flex items-center text-[#1e1e1e] text-[4.53vw] font-bold leading-[1.2] pr-[21.33vw]">
                      <span className="flex mr-[0.8vw] p-[0_1.33vw] leading-[4.27vw] text-[2.67vw] font-bold text-[#fff] bg-[#5f849d] rounded-[0.8vw]">PIN</span>
                      0 Points
                    </div>
                  </div>
                  <div className="text-[#3b5160] text-[4vw] font-bold leading-[2.2] p-[0_2.13vw] bg-[#5ebeff26] hover:bg-[#5ebeff4d] rounded-[1.07vw] border border-[#7e97a7] cursor-pointer">Recall</div>
                </div>

                <div className="flex justify-end items-center py-[2.67vw] border-b border-[#e0e6e6]">
                  <div className="text-[#3b5160] text-[4vw] font-bold leading-[2.2] p-[0_2.13vw] bg-[#5ebeff26] hover:bg-[#5ebeff4d] rounded-[1.07vw] border border-[#7e97a7] cursor-pointer">Recall All</div>
                </div>
              </div>

              <div className="p-[0 1.8666666667vw_2.6666666667vw] flex justify-center items-center">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-[4vw] text-[#1e1e1e] font-bold leading-[2.6] m-[0_1.33vw_2.67vw_0] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_0.53vw_0_0_rgba(255,_255,_255,_.5)] border border-[#bbb] rounded-[1.6vw] w-[50%]"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <header className="w-full">
        {/* Top PC Header */}
        <div className="hidden lg:block [background-image:linear-gradient(180deg,_#383838_0%,_#010101_100%)] bg-[#000] pt-3 pb-2 px-4">
          <div className="hidden sm:flex items-center justify-between">
            {/* Logo + Search */}
            <div className="flex items-center gap-4 ml-2">
              <img src="/logo.png" alt="Logo" className="w-14 cursor-pointer" onClick={() => { navigate("/") }} />
              <div className="relative w-72 leading-0  mb-3">
                {/* <FaSearch className="absolute left-2 top-1.5 text-black font-light w-4 " /> */}
                <SearchOutlined className="absolute left-2 top-1 text-black font-light w-3.5 " />
                <input
                  type="text"
                  placeholder="Search Events"
                  className={`${inputClass} w-full px-1 py-[3px] pl-7`}
                />
              </div>
            </div>

            {/* Login Fields */}
            {!userInfo && <div className="flex items-center gap-1 mb-2">
              <FaUser className="text-yellow-400 w-3 mr-1" />
              <input
                type="text"
                name="user_name"
                placeholder="Username"
                required
                value={formData.user_name}
                onChange={(e) => handleInputChange(e)} className={`${inputClass} px-1 py-[3px]`} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={(e) => handleInputChange(e)}
                className={`${inputClass} px-1 py-[3px]`}
              />
              <div className="relative w-[150px]">
                <input
                  type="text"
                  maxLength={4}
                  name="validation"
                  placeholder="Validation"
                  value={vCode}
                  onChange={(e) => setVCode(e.target.value)}
                  className={`${inputClass} w-full text-black px-1 py-[3px]`}
                />
                {/* <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none">
                  Validation
                </span> */}
                <span className="absolute left-[100px] top-1/2 -translate-y-1/2 text-base text-black font-bold pointer-events-none">
                  {validationCode}
                </span>
              </div>
              <button
                onClick={(e) => { handleSubmit(e) }}
                className="bg-[#e83523] [background:linear-gradient(-180deg,#f72424_0%,#bb1c00_100%)] text-white px-3 py-1 ml-1 text-xs font-bold rounded flex items-center gap-1"
              >
                Login <FaSignInAlt />
              </button>
              <button className="bg-[#666] [background:linear-gradient(-180deg,#666666_0%,#333333_100%)] text-white px-3 py-1 text-xs font-bold rounded">Sign up</button>
            </div>}

            {/* for pc view */}
            {userInfo &&
              <div className="flex gap-5">
                <div className="hidden lg:flex relative" onClick={() => { setBalanceDetails(true); }}>
                  {/* Balance details */}
                  {balanceDetails &&
                    <div className="absolute top-[25px] left-0 w-full text-[12px] text-[#3b5160] bg-[#e0e6e6] shadow-[0_3px_10px_0_rgba(0,_0,_0,_.5)] z-[9999]" onClick={(e) => e.stopPropagation()}>
                      <div className="flex flex-col bg-[#fff] m-[12px_7px] p-[10px_7px_0] rounded-[3px] shadow-[0_1px_1px_0_rgba(0,_0,_0,_.3)]">
                        <h3 className="leading-[1.6] mb-[3px]">
                          Main Balance
                        </h3>
                        <div className="flex items-center text-[#3b5160] text-[17px] font-bold leading-[1.2] pr-[80px] pb-[10px]">
                          <span className="flex mr-[3px] p-[0_5px] leading-[16px] text-[10px] font-bold text-[#fff] bg-[#5f849d] rounded-[3px] opacity-[0.7]">PIN</span>
                          {balance && Math.abs(balanceWithExp).toFixed(2)}
                        </div>
                        <div className="flex justify-between font-normal p-[7px_0] border-t border-[#e0e6e6]">
                          <span>Exposure</span> <span> {Math.abs(exposure).toFixed(2)}</span>
                        </div>
                      </div>
                      <div className="flex flex-col bg-[#fff] m-[12px_7px] p-[10px_7px_0] rounded-[3px] shadow-[0_1px_1px_0_rgba(0,_0,_0,_.3)]">
                        <div className="flex justify-between items-center pb-[10px] border-b border-[#e0e6e6]">
                          <div>
                            <h3 className="leading-[1.6] mb-[3px]">
                              Royal Gaming Balance
                            </h3>
                            <div className="flex items-center text-[#3b5160] text-[17px] font-bold leading-[1.2] pr-[80px]">
                              <span className="flex mr-[3px] p-[0_5px] leading-[16px] text-[10px] font-bold text-[#fff] bg-[#5f849d] rounded-[3px] opacity-[0.7]">PIN</span>
                              0
                            </div>
                          </div>
                          <div className="text-[#3b5160] text-[15px] font-bold leading-[2.2] p-[0_8px] bg-[#5ebeff26] hover:bg-[#5ebeff4d] rounded-[4px] border border-[#7e97a7] cursor-pointer">Recall</div>
                        </div>
                        <div className="flex justify-between items-center py-[10px] border-b border-[#e0e6e6]">
                          <div>
                            <h3 className="leading-[1.6] mb-[3px]">
                              Casino Balance
                            </h3>
                            <div className="flex items-center text-[#3b5160] text-[17px] font-bold leading-[1.2] pr-[80px]">
                              <span className="flex mr-[3px] p-[0_5px] leading-[16px] text-[10px] font-bold text-[#fff] bg-[#5f849d] rounded-[3px] opacity-[0.7]">PIN</span>
                              0
                            </div>
                          </div>
                          <div className="text-[#3b5160] text-[15px] font-bold leading-[2.2] p-[0_8px] bg-[#5ebeff26] hover:bg-[#5ebeff4d] rounded-[4px] border border-[#7e97a7] cursor-pointer">Recall</div>
                        </div>
                        <div className="flex justify-between items-center py-[10px] border-b border-[#e0e6e6]">
                          <div>
                            <h3 className="leading-[1.6] mb-[3px]">
                              BPoker Balance
                            </h3>
                            <div className="flex items-center text-[#3b5160] text-[17px] font-bold leading-[1.2] pr-[80px]">
                              <span className="flex mr-[3px] p-[0_5px] leading-[16px] text-[10px] font-bold text-[#fff] bg-[#5f849d] rounded-[3px] opacity-[0.7]">PIN</span>
                              0 Points
                            </div>
                          </div>
                          <div className="text-[#3b5160] text-[15px] font-bold leading-[2.2] p-[0_8px] bg-[#5ebeff26] hover:bg-[#5ebeff4d] rounded-[4px] border border-[#7e97a7] cursor-pointer">Recall</div>
                        </div>
                        <div className="flex justify-end items-center py-[10px] border-b border-[#e0e6e6]">
                          <div className="text-[#3b5160] text-[15px] font-bold leading-[2.2] p-[0_8px] bg-[#5ebeff26] hover:bg-[#5ebeff4d] rounded-[4px] border border-[#7e97a7] cursor-pointer">Recall All</div>
                        </div>
                      </div>
                      <div className="p-[0_7px_0]">
                        <button
                          type="button"
                          onClick={() => setBalanceDetails(false)}
                          className="text-[13px] text-[#1e1e1e] font-black leading-[31px] m-[0_5px_10px_0] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_rgba(255,255,255,.5)] border border-[#bbb] rounded-[4px] w-full"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  }
                  <div
                    className="text-[#ffb600] text-xs px-2 py-1 flex justify-center items-center gap-2 font-bold  bg-[#ffffff1a] rounded-l border border-[#000] cursor-pointer"
                    style={{
                      boxShadow: "inset 0 0.0666666667vw 0 0 rgba(255,255,255,.5)",
                    }}
                  >
                    <div>
                      <span className="font-normal opacity-70">Main Balance </span>{" "}
                      PIN {balance && Math.abs(balanceWithExp).toFixed(2)}
                    </div>
                    <div>
                      <span className="font-normal opacity-70"> Exposure</span>{" "}
                      <span style={{ color: "" }}>
                        {Math.abs(exposure).toFixed(2)}
                      </span>
                    </div>
                    <p className='border border-[#ffb600] text-[10px] px-2 leading-snug flex items-center justify-center rounded-sm'>+ 5</p>
                  </div>
                  <div
                    className="text-[#ffb600] text-xs p-1 flex gap-1 font-bold h-[25px]  bg-[#ffffff1a] rounded-r border border-[#000] cursor-pointer"
                    style={{
                      boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.5)",
                    }}
                  >
                    {/* {" "} */}
                    <img src="/Images/refresh.svg" alt="" />
                    {/* <TbReload
                    className="flipReload"
                    style={{ cursor: "pointer" }}
                  />{" "} */}
                  </div>
                </div>
                <div
                  ref={AccountMenu}
                  onClick={() => {
                    setIsMyAccountModelOpen((prev) => !prev);
                  }}
                  className="text-[#ffb600] text-xs py-1 px-2 flex justify-center items-center gap-2  h-[25px]  bg-[#ffffff1a] rounded border border-[#00000040] cursor-pointer"
                  style={{
                    boxShadow: "inset 0 0.0666666667vw 0 0 rgba(255,255,255,.5)",
                  }}
                >
                  {/* <img src="/Images/profile-icon-gold.png" alt="" className="w-2" /> */}
                  <FaUserAlt />
                  <h1 className="text-[12px] hover:underline">
                    My Account
                    <div
                      ref={accountMenuRef}
                      onClick={(e) => e.stopPropagation()}
                      className={`w-[220px]  ${isMyAccountModelOpen ? "block" : "hidden"
                        } right-0 z-[40] mt-2 rounded-[4px] bg-white absolute`}
                    >
                      <div className="flex justify-between items-center px-1 border-b border-[#7e97a7]">
                        <h1 className="text-[#3b5160] p-1 font-bold">
                          {userInfo?.user_name}
                        </h1>
                        <p className="text-[#8b98a1] border-l text-xs px-1 font-semibold border-[#c5d0d7]">
                          GMT+5:30
                        </p>
                      </div>
                      <Link to={"/profile"} state={{ state: 'profilePage' }}>
                        <h1
                          className="text-black border-b border-[#e0e6e6] p-1 px-2 hover:bg-[#eee]"
                        >
                          My Profile
                        </h1>
                      </Link>
                      <Link to={"/profile"} state={{ state: 'summaryPage' }}>
                        <h1
                          className="text-black border-b border-[#e0e6e6] p-1 px-2 hover:bg-[#eee]"
                        >
                          Balance Overview
                        </h1>
                      </Link>
                      <Link to={"/profile"} state={{ state: 'accountStatement' }}>
                        <h1
                          className="text-black border-b border-[#e0e6e6] p-1 px-2 hover:bg-[#eee]"
                        >
                          Account Statement
                        </h1>
                      </Link>
                      <Link to={"/profile"} state={{ state: 'bets', eventType: 'cb' }}>
                        <h1
                          className="text-black border-b border-[#e0e6e6] p-1 px-2 hover:bg-[#eee]"
                        >
                          My Bets
                        </h1>
                      </Link>
                      <Link to={"/profile"} state={{ state: 'bets', eventType: 'bh' }}>
                        <h1
                          className="text-black border-b border-[#e0e6e6] p-1 px-2 hover:bg-[#eee]"
                        >
                          Bets History
                        </h1>
                      </Link>
                      <Link to={"/profile"} state={{ state: 'bets', eventType: 'pl' }}>
                        <h1
                          className="text-black border-b border-[#e0e6e6] p-1 px-2 hover:bg-[#eee]"
                        >
                          Profit & Loss
                        </h1>
                      </Link>
                      <Link to={"/profile"} state={{ state: 'log' }}>
                        <h1
                          className="text-black border-b border-[#e0e6e6] p-1 px-2 hover:bg-[#eee]"
                        >
                          Activity Log
                        </h1>
                      </Link>
                      <button
                        className="flex justify-center items-center bg-[#7e97a7] w-[90%] rounded-[4px] text-white font-bold py-1 m-2"
                        onClick={() => handleLogout()}
                      >
                        LOGOUT <img src="/Images/exit-icon.svg" alt="" className="ml-1" />
                      </button>
                    </div>
                  </h1>
                  <IoMdArrowDropdown className="" />
                </div>
              </div>}
          </div>
        </div>

        {/* Top Mobile Header */}
        <div className="block lg:hidden py-[6px] px-2 h-[14.6666666667vw] [background-image:linear-gradient(180deg,_#474747_0%,_#070707_100%)] bg-[#000]">
          {!userInfo &&
            <div className="flex sm:hidden items-center justify-between">
              <div className="flex items-center cursor-pointer" onClick={() => { navigate("/") }}>
                <img src="/logo.png" alt="Logo" className="h-[11.4566vw] max-h-[12.2666666667vw]  " />
              </div>
              <div className="flex items-center gap-[2px] w-[55%]">
                <button className="[background-image:linear-gradient(-180deg,_#666666_0%,_#333333_100%)] border border-[#000] text-white text-[3.4666666667vw] font-bold h-[8.5333333333vw] rounded w-full max-w-[28.8vw]">Sign up</button>
                <button className="[background-image:linear-gradient(-180deg,_#f72424_0%,_#bb1c00_100%)] [border:0.2666666667vw_solid_#710b0b] text-white text-[3.4666666667vw] font-bold h-[8.5333333333vw] rounded flex justify-center items-center gap-[2px] w-full max-w-[28.8vw]" onClick={() => { navigate('/login') }}>
                  <img src="/Images/user-icon.svg" alt="" /> Login
                </button>
              </div>
            </div>
          }

          {userInfo &&
            <>
              <div className="flex justify-between">
                <div
                  className="flex lg:hidden gap-2 items-center justify-center w-[130px] h-[40px] pr-[3%] rounded-[1.0666666667vw] border border-black text-white bg-[rgba(51,51,51,0.4)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)]"
                >
                  <Link className="flex gap-1 items-center">
                    <img src="/Images/bet-icon-gold.svg" alt="" height={10} width={23} />
                    <h1 className="font-bold  text-sm text-[#ffb200]">
                      Bets
                    </h1>
                  </Link>
                </div>

                <div className="flex lg:hidden">
                  {/* Exposure Block */}
                  <div
                    className="h-[39px] w-[185px] flex justify-between items-center px-2 bg-[rgba(255,255,255,0.1)] text-[#ffb200] rounded-sm border border-black border-r-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)]"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="cursor-pointer text-[2.66667vw] font-extrabold">
                      <p>
                        <span className="opacity-70">Main</span>PBU
                        <span className="font-bold">
                          {" "}
                          {balance && Math.abs(balanceWithExp).toFixed(2)}
                        </span>
                      </p>
                      <p>
                        <span className="font-semibold opacity-70">Exposer</span>
                        <span className="font-bold">
                          {Math.abs(exposure).toFixed()}
                        </span>
                      </p>
                    </div>
                    <p className="h-[16px] w-[31px] border border-[#ffb200] text-[10px] flex justify-center items-center rounded-sm">
                      +3
                    </p>
                  </div>

                  {/* Reload Button */}
                  <div
                    className="h-[39px] w-[36px] flex justify-center items-center bg-[rgba(51,51,51,0.4)] rounded-[1.0666666667vw] rounded-l-none border border-black border-l-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)] text-white"
                  >
                    <TbReload
                      className="text-2xl text-[#ffb200] w-[55%] cursor-pointer"
                    />
                  </div>

                  {/* Settings Button */}
                  <div
                    className="h-[39px] w-[36px] ml-1 flex justify-center items-center bg-[rgba(51,51,51,0.4)] rounded-[1.0666666667vw] border border-black shadow-[inset_0_1px_0_0_rgba(255,255,255,0.4)] text-white"
                  >
                    <IoSettingsSharp
                      className="text-2xl text-[#ffb200] cursor-pointer"
                    />
                  </div>
                </div>

              </div>
            </>
          }
        </div>

        {/* Menu Bar */}
        <nav className="hidden lg:block bg-[#f7c419] border-t border-b border-yellow-500 text-xs font-bold text-black">
          <div className="flex items-center justify-between px-4">
            {/* Menu Items */}
            <div className=" flex ">
              {menuItems.map(({ name, live, url }) => {
                let sportType;
                if (name === "Cricket") sportType = "4";
                else if (name === "Soccer") sportType = "1";
                else if (name === "Tennis") sportType = "2";

                const isActive =
                  location.pathname === url &&
                  (url !== "/sports" || activeSportType === sportType);

                return (
                  <>
                    <div key={name} className="relative">
                      <button
                        onClick={() => {
                          if (sportType) setActiveSportType(sportType);
                          navigate(url, sportType ? { state: { sportType } } : undefined);
                        }}
                        className={`px-3 py-1.5 border-r border-[#0003] whitespace-nowrap flex items-center transition-all duration-200 ${isActive
                          ? "bg-[#ffdc7a] text-black shadow-[inset_0_0_5px_0_rgba(83,33,33,0.5)]"
                          : "hover:bg-[#f0b800]"
                          }`}
                      >
                        {name}
                      </button>
                      {live && (
                        <div className="absolute bottom-6 right-1 h-[12px] flex flex-row items-center gap-1 rounded-sm bg-[linear-gradient(180deg,_#fb3434_0%,_#e80505_100%)] shadow-[0_0_5px_0_rgba(83,_33,_33,_0.5)] z-[999999999999]">

                          {/* SVG in white circle */}
                          <div className="flex justify-center items-center bg-white px-1 rounded-l-sm h-[12px]">
                            <img src="/Images/hotspot.svg" alt="" className='live-icon w-[4.2666666667vw] h-[2.6666666667vw]  lg:w-3 lg:h-2' />
                          </div>

                          {/* Red badge number */}
                          <div className="text-white text-[10px] pr-[5px] font-bold">
                            {live}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                );
              })}

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 text-xs">
              <div className="text-[#0009] font-extralight">
                Time Zone: <span className="text-[#000] font-bold">GMT+5:30</span>
              </div>

              {/* One Click Bet */}
              <div className="flex items-center gap-1 bg-[#3c3c3c] text-yellow-400 h-full py-1 px-2">
                <input type="checkbox" id="oneclick" className="bg-[#fff] w-4 h-4 rounded-sm" />
                <label htmlFor="oneclick" className="cursor-pointer font-semibold text-xs">
                  One Click Bet
                </label>
              </div>

              <div className="flex font-semibold">Setting <img src="/Images/setting-icon.png" alt="" className="ml-2 w-4 h-4" /></div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
