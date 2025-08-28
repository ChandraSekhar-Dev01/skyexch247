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
  const editStakeRef = useRef(null);



  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [editStakeOpen, setEditStakeOpen] = useState(false);
  const [openBetsOpen, setOpenBetsOpen] = useState(false);
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
    setErrorMessage("");
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData?.user_name == "") {
      setErrorMessage("Username is empty");
      return;
    }

    if (formData?.password == "") {
      setErrorMessage("password is empty");
      return;
    }

    if (vCode == "") {
      setErrorMessage("Validation code is empty");
      return;
    }

    if (vCode != validationCode) {
      setErrorMessage("Invalid validation code!");
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
          login(response.data.resultData);
          setShowLoginModel(false);
          console.log('response data : ', response)
        } else {
          setErrorMessage("Login name or password is invalid! Please try again.");
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
    window.location.href = "/";
    setIsMyAccountModelOpen(false);
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
    if (location.pathname === "/profile") {
      setIsMyAccountModelOpen(false);
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
    const handleClickOutsideEditStake = (event) => {
      if (
        editStakeRef.current &&
        !editStakeRef.current.contains(event.target)
      ) {
        setEditStakeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutsideEditStake);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutsideEditStake);

    };
  }, []);



  return (
    <>
      {/* Login Modal */}
      {!userInfo && isLoginModal &&
        <div className="block fixed top-0 left-0 w-full h-full bg-[#0000004d] z-[100] text-[#1e1e1e] text-[12px] leading-[15px]">
          <div className="bg-[linear-gradient(180deg,_#ffb600_1%,_#ffb600_100%)] absolute top-[18%] left-[calc(50%-270px)] w-[540px] h-[408px] rounded-lg shadow-[0_5px_20px_#00000080]">
            <div className="relative w-[250px] h-full rounded-[8px_0_0_8px] float-left" style={{ backgroundImage: "url('/Images/bg-login_wrap.png')" }}></div>
            <dl className="text-[#243a48] m-[100px_0_0_25px] float-left">
              <dt className="text-[#000] text-[20px] leading-[24px] mb-[15px]">Please login to continue</dt>
              <dd className="relative w-[220px] mb-[7px]">
                <input
                  name="user_name"
                  type="text"
                  placeholder="Username"
                  required
                  value={formData.user_name}
                  onChange={(e) => handleInputChange(e)}
                  className="w-full h-[33px] text-[14px] leading-[21px] border border-[#aaa] shadow-[inset_0px_2px_0px_0px_#0000001a] m-0 text-[#1e1e1e] bg-[#fff] rounded p-[5px] box-border" />
              </dd>
              <dd className="relative w-[220px] mb-[7px]">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  required
                  value={formData.password}
                  onChange={(e) => handleInputChange(e)}
                  className="w-full h-[33px] text-[14px] leading-[21px] border border-[#aaa] shadow-[inset_0px_2px_0px_0px_#0000001a] m-0 text-[#1e1e1e] bg-[#fff] rounded p-[5px] box-border" />
              </dd>
              <dd className="block relative w-[220px] mb-[7px]">
                <input
                  name="validation"
                  type="text"
                  placeholder="Validation Code"
                  maxLength={4}
                  value={vCode}
                  onChange={(e) => setVCode(e.target.value)}
                  className="w-full h-[33px] text-[14px] leading-[21px] border border-[#aaa] shadow-[inset_0px_2px_0px_0px_#0000001a] m-0 text-[#1e1e1e] bg-[#fff] rounded p-[5px] box-border" />
                <span className="absolute right-[5px] top-[7px] text-end font-black text-[20px] text-[#000] tracking-tighter">{validationCode}</span>
              </dd>
              <dd className="block relative w-[220px] mb-[7px]">
                <span
                  className="w-full h-[38px] text-[15px] leading-[36px] font-bold border border-[#222] shadow-[initial] m-[15px_0_0] text-[#ffb600] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] rounded box-border block text-center cursor-pointer"
                  onClick={(e) => { handleSubmit(e) }}
                >
                  Login
                  <img src="/Images/login.svg" alt="" className="bg-no-repeat w-[10px] h-[11px] absolute top-[14px] right-[80px]" />
                </span>
              </dd>
              <dd className="hidden text-[#d0021b] text-[13px] leading-[16px] relative w-[220px] mb-[7px]">error</dd>
            </dl>
            <span
              className="absolute mt-[10px] ml-[15px] w-[20px] h-[20px] cursor-pointer"
              style={{ backgroundImage: "url('/Images/black-cross.svg')" }}
              onClick={() => { setIsLoginModal(false); }}
            ></span>
            <span className='block clear-both'></span>
          </div>
        </div>
      }
      {/* Balance Overview Modal */}
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

      {/* Open Bets section */}
      <div className={`${openBetsOpen ? "block" : "hidden"} fixed top-0 left-0 w-[100vw] h-full bg-[#000000b3] z-[99] openBetsAnimation`}>
        <div className="flex flex-col relative w-full h-full bg-[#eee] shadow-[0.5333333333vw_0_1.6vw_0_#00000080] rounded-[0_1.6vw_1.6vw_0]">
          <div className="flex flex-[0_0_10.4vw] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] rounded-[0_1.6vw_0_0]">
            <h3 className="flex flex-1 items-center relative text-center text-[#ffb200] p-[0_1.8666666667vw] leading-[2.6] text-[4vw] font-bold bg-transparent">
              <img src="/Images/bets-icon.svg" alt="" className="bg-no-repeat bg-contain float-left w-[5.3333333333vw] h-[5.3333333333vw] align-middle mr-[1.333vw]" />
              Open Bets
            </h3>
            <span
              className="flex justify-center items-center p-[0_3.4666667vw] border-l border-[#ffb2004d]"
              onClick={() => { setOpenBetsOpen(false); }}
            >
              <img src="/Images/cross-yellow.svg" alt="" className="block bg-contain w-[2.4vw] h-[2.4vw]" />
            </span>
          </div>
        </div>
      </div>

      {/* Open Edit Stake Setting section */}
      <div className={`${editStakeOpen ? "block lg:hidden" : "hidden"} fixed top-0 left-0 w-[100vw] h-full bg-[#000000b3] z-[99] openBetsAnimation`}>
        <div className="flex flex-col relative w-full h-full bg-[#eee] shadow-[0.5333333333vw_0_1.6vw_0_#00000080] rounded-[0_1.6vw_1.6vw_0]">
          <div className="flex flex-[0_0_10.4vw] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] rounded-[0_1.6vw_0_0]">
            <h3 className="flex flex-1 items-center relative text-center text-[#ffb200] p-[0_1.8666666667vw] leading-[2.6] text-[4vw] font-bold bg-transparent">
              <img src="/Images/setting-yellow.svg" alt="" className="bg-no-repeat bg-contain float-left w-[5.3333333333vw] h-[5.3333333333vw] align-middle mr-[1.333vw]" />
              Setting
            </h3>
            <span
              className="flex justify-center items-center p-[0_3.4666667vw] border-l border-[#ffb2004d]"
              onClick={() => { setEditStakeOpen(false); }}
            >
              <img src="/Images/cross-yellow.svg" alt="" className="block bg-contain w-[2.4vw] h-[2.4vw]" />
            </span>
          </div>
          <div className="rounded-[0_0_0_1.6vw]">
            <h3 className="flex justify-between items-center p-[0_1.8666666667vw] bg-[linear-gradient(-180deg,_#2e4b5e_0%,_#243a48_82%)] text-[#fff] text-[3.7333333333vw] leading-[2.2] font-bold">Stake</h3>
            <dl className="flex flex-wrap text-[4vw] text-[#243a48] border-b border-[#e0e6e6] p-[1.8666666667vw_0_0_1.8666666667vw]">
              <dt className="flex flex-1 items-center p-[0_1.8666666667vw_1.8666666667vw_0] box-border">
                Default stake
                <input type="number" name="" id="" pattern="[0-9]" className="w-[26.6666666667vw] m-[0_0_0_1.3333333333vw] text-right relative bg-[#fff] border border-[#aaa] shadow-[inset_0_0.5333333333vw_0_0_#0000001a] rounded-[1.6vw] text-[#1e1e1e] text-[4vw] p-[2.6666666667vw_1.8666666667vw]" />
              </dt>
            </dl>

            <dl className="flex flex-wrap text-[4vw] text-[#243a48] border-b border-[#e0e6e6] p-[1.8666666667vw_0_0_1.8666666667vw]">
              <dt className="flex flex-[1_1_100%] items-center box-border p-[0_1.8666666667vw_1.8666666667vw_0]">Quick Stakes</dt>
              <dd className="flex flex-[1_1_25%] items-center p-[0_1.8666666667vw_1.8666666667vw_0] box-border">
                <span className="block flex-1 text-[#ffb600] leading-[2.2] bg-[#444] border border-[#222] shadow-[inset_0_0.5333333333vw_0_0_#0000001a] rounded-[1.6vw] text-[4vw] font-bold text-center">100</span>
              </dd>
              <dd className="flex flex-[1_1_25%] items-center p-[0_1.8666666667vw_1.8666666667vw_0] box-border">
                <span className="block flex-1 text-[#ffb600] leading-[2.2] bg-[#444] border border-[#222] shadow-[inset_0_0.5333333333vw_0_0_#0000001a] rounded-[1.6vw] text-[4vw] font-bold text-center">10000</span>
              </dd>
              <dd className="flex flex-[1_1_25%] items-center p-[0_1.8666666667vw_1.8666666667vw_0] box-border">
                <span className="block flex-1 text-[#ffb600] leading-[2.2] bg-[#444] border border-[#222] shadow-[inset_0_0.5333333333vw_0_0_#0000001a] rounded-[1.6vw] text-[4vw] font-bold text-center">30000</span>
              </dd>
              <dd className="flex flex-[1_1_25%] items-center p-[0_1.8666666667vw_1.8666666667vw_0] box-border">
                <span className="block flex-1 text-[#ffb600] leading-[2.2] bg-[#444] border border-[#222] shadow-[inset_0_0.5333333333vw_0_0_#0000001a] rounded-[1.6vw] text-[4vw] font-bold text-center">50000</span>
              </dd>
              <dd className="flex flex-[1_1_25%] items-center p-[0_1.8666666667vw_1.8666666667vw_0] box-border">
                <span className="block flex-1 text-[#ffb600] leading-[2.2] bg-[#444] border border-[#222] shadow-[inset_0_0.5333333333vw_0_0_#0000001a] rounded-[1.6vw] text-[4vw] font-bold text-center">100000</span>
              </dd>
              <dd className="flex flex-[1_1_25%] items-center p-[0_1.8666666667vw_1.8666666667vw_0] box-border">
                <span className="block flex-1 text-[#ffb600] leading-[2.2] bg-[#444] border border-[#222] shadow-[inset_0_0.5333333333vw_0_0_#0000001a] rounded-[1.6vw] text-[4vw] font-bold text-center">150000</span>
              </dd>
              <dd className="flex flex-[1_1_25%] items-center p-[0_1.8666666667vw_1.8666666667vw_0] box-border">
                <span className="block flex-1 text-[#ffb600] leading-[2.2] bg-[#444] border border-[#222] shadow-[inset_0_0.5333333333vw_0_0_#0000001a] rounded-[1.6vw] text-[4vw] font-bold text-center">300000</span>
              </dd>
              <dd className="flex flex-[1_1_25%] items-center p-[0_1.8666666667vw_1.8666666667vw_0] box-border">
                <span className="block flex-1 text-[#ffb600] leading-[2.2] bg-[#444] border border-[#222] shadow-[inset_0_0.5333333333vw_0_0_#0000001a] rounded-[1.6vw] text-[4vw] font-bold text-center">500000</span>
              </dd>
              <dd className="flex flex-[1_1_25%] items-center p-[0_1.8666666667vw_1.8666666667vw_0] box-border">
                <span className="block w-full leading-[2.6] font-bold text-center text-[#243a48] bg-[#c5d0d766] border-[0.2666666667vw] border-[#7e97a7] shadow-[inset_0_0.5333333333vw_0_0_#ffffffcc] rounded-[1.6vw]">
                  Edit Stake
                  <span className="w-[4vw] h-[4vw] bg-no-repeat bg-contain align-top mt-[2.6666666667vw] ml-[1.3333333333vw] inline-block" style={{ backgroundImage: "url('/Images/edit-pen1.svg')" }}></span>
                </span>
              </dd>
            </dl>
            <h3 className="flex justify-between items-center p-[0_1.8666666667vw] bg-[linear-gradient(-180deg,_#2e4b5e_0%,_#243a48_82%)] text-[#fff] text-[3.7333333333vw] leading-[2.2] font-bold">Odds</h3>
            <dl className="flex text-[4vw] text-[#243a48] border-b border-[#e0e6e6] p-[1.8666666667vw_0_0_1.8666666667vw]">
              <dt className="flex flex-[1_1_100%] items-center box-border p-[0_1.8666666667vw_1.8666666667vw_0]">Highlight when odds change</dt>
              <dd className="flex flex-[0_1_9.3333333333vw] items-center p-[0_1.8666666667vw_1.8666666667vw_0] box-border">
                <span className="block relative w-[9.3333333333vw] h-[9.3333333333vw] bg-[#6bbd11] shadow-[inset_0_0.2666666667vw_0.8vw_0_#00000080] rounded-[1.6vw] overflow-hidden float-right">
                  <span className="flex justify-center items-center absolute right-[1.0666666667vw] top-[1.0666666667vw] w-[2.6666666667vw] h-[7.2vw] bg-[#fff] shadow-[0_0.5333333333vw_1.0666666667vw_0_#00000080,_inset_0_-0.8vw_0_0_#cad5d5] rounded-[1.0666666667vw]">
                    <span className="w-[1.0666666667vw] h-[1.3333333333vw] bg-[#e0e6e6] shadow-[inset_0_0.2666666667vw_0.2666666667vw_0_#00000042] rounded-[0.5333333333vw] block"></span>
                  </span>
                </span>
              </dd>
            </dl>
            <h3 className="flex justify-between items-center p-[0_1.8666666667vw] bg-[linear-gradient(-180deg,_#2e4b5e_0%,_#243a48_82%)] text-[#fff] text-[3.7333333333vw] leading-[2.2] font-bold">FancyBet</h3>
            <dl className="flex text-[4vw] text-[#243a48] border-b border-[#e0e6e6] p-[1.8666666667vw_0_0_1.8666666667vw]">
              <dt className="flex flex-[1_1_100%] items-center box-border p-[0_1.8666666667vw_1.8666666667vw_0]">Accept Any Odds</dt>
              <dd className="flex flex-[0_1_9.3333333333vw] items-center p-[0_1.8666666667vw_1.8666666667vw_0] box-border">
                <span className="block relative w-[9.3333333333vw] h-[9.3333333333vw] bg-[#6bbd11] shadow-[inset_0_0.2666666667vw_0.8vw_0_#00000080] rounded-[1.6vw] overflow-hidden float-right">
                  <span className="flex justify-center items-center absolute right-[1.0666666667vw] top-[1.0666666667vw] w-[2.6666666667vw] h-[7.2vw] bg-[#fff] shadow-[0_0.5333333333vw_1.0666666667vw_0_#00000080,_inset_0_-0.8vw_0_0_#cad5d5] rounded-[1.0666666667vw]">
                    <span className="w-[1.0666666667vw] h-[1.3333333333vw] bg-[#e0e6e6] shadow-[inset_0_0.2666666667vw_0.2666666667vw_0_#00000042] rounded-[0.5333333333vw] block"></span>
                  </span>
                </span>
              </dd>
            </dl>
            <h3 className="flex justify-between items-center p-[0_1.8666666667vw] bg-[linear-gradient(-180deg,_#2e4b5e_0%,_#243a48_82%)] text-[#fff] text-[3.7333333333vw] leading-[2.2] font-bold">SportsBook</h3>
            <dl className="flex text-[4vw] text-[#243a48] border-b border-[#e0e6e6] p-[1.8666666667vw_0_0_1.8666666667vw]">
              <dt className="flex flex-[1_1_100%] items-center box-border p-[0_1.8666666667vw_1.8666666667vw_0]">Accept Any Odds</dt>
              <dd className="flex flex-[0_1_9.3333333333vw] items-center p-[0_1.8666666667vw_1.8666666667vw_0] box-border">
                <span className="block relative w-[9.3333333333vw] h-[9.3333333333vw] bg-[#6bbd11] shadow-[inset_0_0.2666666667vw_0.8vw_0_#00000080] rounded-[1.6vw] overflow-hidden float-right">
                  <span className="flex justify-center items-center absolute right-[1.0666666667vw] top-[1.0666666667vw] w-[2.6666666667vw] h-[7.2vw] bg-[#fff] shadow-[0_0.5333333333vw_1.0666666667vw_0_#00000080,_inset_0_-0.8vw_0_0_#cad5d5] rounded-[1.0666666667vw]">
                    <span className="w-[1.0666666667vw] h-[1.3333333333vw] bg-[#e0e6e6] shadow-[inset_0_0.2666666667vw_0.2666666667vw_0_#00000042] rounded-[0.5333333333vw] block"></span>
                  </span>
                </span>
              </dd>
            </dl>
            <h3 className="flex justify-between items-center p-[0_1.8666666667vw] bg-[linear-gradient(-180deg,_#2e4b5e_0%,_#243a48_82%)] text-[#fff] text-[3.7333333333vw] leading-[2.2] font-bold">Win Selection forecast</h3>
            <dl className="flex text-[4vw] text-[#243a48] border-b border-[#e0e6e6] p-[1.8666666667vw_0_0_1.8666666667vw]">
              <dt className="flex flex-[1_1_100%] items-center box-border p-[0_1.8666666667vw_1.8666666667vw_0]">With Commission</dt>
              <dd className="flex flex-[0_1_9.3333333333vw] items-center p-[0_1.8666666667vw_1.8666666667vw_0] box-border">
                <span className="block relative w-[9.3333333333vw] h-[9.3333333333vw] bg-[#a2b1ba] shadow-[inset_0_0.2666666667vw_0.8vw_0_#00000080] rounded-[1.6vw] overflow-hidden float-right">
                  <span className="flex justify-center items-center absolute left-[1.0666666667vw] top-[1.0666666667vw] w-[2.6666666667vw] h-[7.2vw] bg-[#fff] shadow-[0_0.5333333333vw_1.0666666667vw_0_#00000080,_inset_0_-0.8vw_0_0_#cad5d5] rounded-[1.0666666667vw]">
                    <span className="w-[1.0666666667vw] h-[1.3333333333vw] bg-[#e0e6e6] shadow-[inset_0_0.2666666667vw_0.2666666667vw_0_#00000042] rounded-[0.5333333333vw] block"></span>
                  </span>
                </span>
              </dd>
            </dl>
            <ul className="flex flex-wrap mt-[1.8666666667vw] p-[0_1.6vw_2.6666666667vw]">
              <li
                className="flex flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden"
                onClick={() => { setEditStakeOpen(false); }}
              >
                <span className="block text-center font-bold text-[4vw]  text-[#1e1e1e] h-[10.9333vw] w-full leading-[10.9333vw] rounded-[1.6vw] border-[0.2666666667vw] border-[#aaa] bg-[linear-gradient(-180deg,#ffffff_0%,#eeeeee_89%)]">Cancel</span>
              </li>
              <li className="flex flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden">
                <span className="block text-center font-bold text-[4vw]  text-[#ffb200] h-[10.9333vw] w-full leading-[10.9333vw] rounded-[1.6vw] border-[0.2666666667vw] border-[#222] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)]">Save</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header Content */}
      <header className="w-full">
        {/* Top PC Header */}
        <div className="hidden lg:block [background-image:linear-gradient(180deg,_#383838_0%,_#010101_100%)] bg-[#000] pt-3 pb-2 px-4">
          <div className="hidden sm:flex items-center justify-between">
            {/* Logo + Search */}
            <div className="flex items-center gap-4 ml-2">
              <img src="/logo.png" alt="Logo" className="w-14 cursor-pointer" onClick={() => { navigate("/") }} />
              <div className="relative w-72 leading-0  mb-3 float-left">
                {/* <FaSearch className="absolute left-2 top-1.5 text-black font-light w-4 " /> */}
                <img src="/Images/searchD-icon.svg" alt="" className="absolute z-[1] top-[50%] left-[2px] block w-[19px] h-[19px] bg-no-repeat bg-contain [transform:translateY(-50%)]" />
                <input
                  type="text"
                  placeholder="Search Events"
                  className={`${inputClass} h-[25px] w-[280px] pl-[25px] py-[3px] m-0 box-border`}
                />
              </div>
            </div>

            {/* Login Fields */}
            {!userInfo && <div className="relative flex items-center gap-1 mb-2">
              <span className="absolute top-[25px] text-[12px] text-[#f8d61c] m-[0_5px_2px_0] pl-[22px] float-left">
                {errorMessage}
              </span>
              <img src="/Images/user-icon-yellow.svg" alt="" className="bg-no-repeat mr-1" />
              <input
                type="text"
                name="user_name"
                placeholder="Username"
                required
                value={formData.user_name}
                onChange={(e) => handleInputChange(e)}
                className={`${inputClass} px-1 py-[3px] h-[25px] w-[130px] m-0`} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={(e) => handleInputChange(e)}
                className={`${inputClass} px-1 py-[3px] h-[25px] w-[130px] m-0`}
              />
              <div className="relative">
                <input
                  type="text"
                  maxLength={4}
                  name="validation"
                  placeholder="Validation"
                  value={vCode}
                  onChange={(e) => setVCode(e.target.value)}
                  className={`${inputClass}text-black pl-1 py-[3px] h-[25px] w-[130px] m-0`}
                />
                <span className="absolute top-0 right-0 h-[15px] w-[50px] text-base text-black font-bold pointer-events-none">
                  {validationCode}
                </span>
              </div>
              <button
                onClick={(e) => { handleSubmit(e) }}
                className="bg-[#e83523] [background:linear-gradient(-180deg,#f72424_0%,#bb1c00_100%)] text-white ml-1 text-xs font-bold rounded block text-center h-[25px] w-[80px] leading-[25px] float-left"
              >
                Login 
                <img src="/Images/loginD.svg" alt="" className="w-[10px] h-[11px] m-[-3px_0_0_3px] align-middle bg-no-repeat inline-block" />

              </button>
              <button className="bg-[#666] [background:linear-gradient(-180deg,#666666_0%,#333333_100%)] text-white text-xs font-bold rounded block text-center h-[25px] w-[80px] leading-[25px] float-left">Sign up</button>
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
                  onClick={() => { setOpenBetsOpen(true); }}
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
                        <span className="font-semibold opacity-70">Exposure</span>
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
                    onClick={() => { setEditStakeOpen(true); }}
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
              <span
                className="block relative mt-[-3px] indent-[30px] text-[#ffc828] font-bold leading-[30px] p-[0_12px_0_7px] border-t-[3px] border-[#ffb600] bg-[linear-gradient(180deg,_#4b4b4b_0%,_#1e1e1e_100%)] cursor-pointer"
                onClick={() => { setIsLoginModal(true); }}
              >
                One Click Bet
                <span className="absolute top-0 left-[10%] translate-y-[50%] flex w-[16px] h-[16px] rounded z-[1] bg-[#ffffff33]"></span>
              </span>

              <div
                className="flex font-semibold cursor-pointer"
                onClick={() => {
                  !userInfo ?
                    setIsLoginModal(true) : setEditStakeOpen(true)
                }}
              >
                Setting
                <img src="/Images/setting-icon.png" alt="" className="ml-2 w-4 h-4" />
              </div>
            </div>
            {/* Edit stake Setting */}
            {editStakeOpen &&
              <div ref={editStakeRef} className="block absolute top-[11%] right-0 w-[282px] z-[99] rounded-[0_0_4px_4px] shadow-[0_4px_5px_#00000080]">
                <div className="clear-both min-h-[100px] bg-[#e0e6e6] text-[11px] text-[#3b5160] p-[10px] rounded-[0_0_4px_4px]">
                  <dl className="relative border-b border-[#7e97a7] shadow-[0_1px_0_#ffffffcc] leading-[15px] pb-[2px] mb-[5px]">
                    <dd className="w-full flex items-center m-[0_5px_5px_0] float-left">
                      <label className="cursor-pointer">
                        <strong>Default stake</strong>
                      </label>
                      <input type="text" maxLength={7} className="w-[29.1666666667%] text-[11px] ml-[5px] h-[20px] leading-[20px] p-[0_5px] m-[0_5px_0_0] text-[#1e1e1e] bg-[#fff] shadow-[inset_0px_1px_0px_#00000080] rounded box-border" />
                    </dd>


                    <span className="block clear-both"></span>
                  </dl>
                  <dl className="relative border-b border-[#7e97a7] shadow-[0_1px_0_#ffffffcc] leading-[15px] pb-[2px] mb-[5px]">
                    <dt className="mb-[5px] font-bold">Stake</dt>
                    <dd className="w-[50px] m-[0_5px_5px_0] float-left">
                      <span className="block text-[#ffb600] bg-[#444] border border-[#222] leading-[18px] font-normal text-[11px] m-0 p-0 shadow-[inset_0_2px_0_0_#0000001a] rounded text-center cursor-pointer">100</span>
                    </dd>
                    <dd className="w-[50px] m-[0_5px_5px_0] float-left">
                      <span className="block text-[#ffb600] bg-[#444] border border-[#222] leading-[18px] font-normal text-[11px] m-0 p-0 shadow-[inset_0_2px_0_0_#0000001a] rounded text-center cursor-pointer">10000</span>
                    </dd>
                    <dd className="w-[50px] m-[0_5px_5px_0] float-left">
                      <span className="block text-[#ffb600] bg-[#444] border border-[#222] leading-[18px] font-normal text-[11px] m-0 p-0 shadow-[inset_0_2px_0_0_#0000001a] rounded text-center cursor-pointer">30000</span>
                    </dd>
                    <dd className="w-[50px] m-[0_5px_5px_0] float-left">
                      <span className="block text-[#ffb600] bg-[#444] border border-[#222] leading-[18px] font-normal text-[11px] m-0 p-0 shadow-[inset_0_2px_0_0_#0000001a] rounded text-center cursor-pointer">50000</span>
                    </dd>
                    <dd className="w-[50px] m-[0_5px_5px_0] float-left">
                      <span className="block text-[#ffb600] bg-[#444] border border-[#222] leading-[18px] font-normal text-[11px] m-0 p-0 shadow-[inset_0_2px_0_0_#0000001a] rounded text-center cursor-pointer">100000</span>
                    </dd>
                    <dd className="w-[50px] m-[0_5px_5px_0] float-left">
                      <span className="block text-[#ffb600] bg-[#444] border border-[#222] leading-[18px] font-normal text-[11px] m-0 p-0 shadow-[inset_0_2px_0_0_#0000001a] rounded text-center cursor-pointer">150000</span>
                    </dd>
                    <dd className="w-[50px] m-[0_5px_5px_0] float-left">
                      <span className="block text-[#ffb600] bg-[#444] border border-[#222] leading-[18px] font-normal text-[11px] m-0 p-0 shadow-[inset_0_2px_0_0_#0000001a] rounded text-center cursor-pointer">300000</span>
                    </dd>
                    <dd className="w-[50px] m-[0_5px_5px_0] float-left">
                      <span className="block text-[#ffb600] bg-[#444] border border-[#222] leading-[18px] font-normal text-[11px] m-0 p-0 shadow-[inset_0_2px_0_0_#0000001a] rounded text-center cursor-pointer">500000</span>
                    </dd>
                    <dd className="absolute top-[20px] right-0 w-[42px] mr-0 float-left">
                      <span className="block text-center text-[#3b5160] font-normal h-[45px] leading-[43px] rounded shadow-[inset_0_1px_0_0_#ffffffcc] border border-[#7e97a7]">
                        Edit
                        <img src="/Images/icon-stake_edit.png" alt="" className="h-[9px] w-[9px] ml-1 bg-no-repeat bg-right inline-block" />
                      </span>
                    </dd>


                    <span className="block clear-both"></span>
                  </dl>
                  <dl className="relative border-b border-[#7e97a7] shadow-[0_1px_0_#ffffffcc] leading-[15px] pb-[2px] mb-[5px]">
                    <dt className="mb-[5px] font-bold">Odds</dt>
                    <dd className="w-full flex items-center m-[0_5px_5px_0] float-left">
                      <input type="checkbox" className="text-[12px] h-auto w-auto leading-[20px] p-0 m-[0_5px_0_0] text-[#1e1e1e] bg-[#00000000] accent-[#0275ff] box-border" />
                      <label className="cursor-pointer font-normal">Highlight when odds change</label>
                    </dd>
                    <span className="block clear-both"></span>
                  </dl>
                  <dl className="relative border-b border-[#7e97a7] shadow-[0_1px_0_#ffffffcc] leading-[15px] pb-[2px] mb-[5px]">
                    <dt className="mb-[5px] font-bold">FancyBet</dt>
                    <dd className="w-full flex items-center m-[0_5px_5px_0] float-left">
                      <input type="checkbox" className="text-[12px] h-auto w-auto leading-[20px] p-0 m-[0_5px_0_0] text-[#1e1e1e] bg-[#00000000] accent-[#0275ff] box-border" />
                      <label className="cursor-pointer font-normal">Accept Any Odds</label>
                    </dd>
                    <span className="block clear-both"></span>
                  </dl>
                  <dl className="relative border-b border-[#7e97a7] shadow-[0_1px_0_#ffffffcc] leading-[15px] pb-[2px] mb-[5px]">
                    <dt className="mb-[5px] font-bold">SportBook</dt>
                    <dd className="w-full flex items-center m-[0_5px_5px_0] float-left">
                      <input type="checkbox" className="text-[12px] h-auto w-auto leading-[20px] p-0 m-[0_5px_0_0] text-[#1e1e1e] bg-[#00000000] accent-[#0275ff] box-border" />
                      <label className="cursor-pointer font-normal">Accept Any Odds</label>
                    </dd>
                    <span className="block clear-both"></span>
                  </dl>
                  <dl className="relative border-b border-[#7e97a7] shadow-[0_1px_0_#ffffffcc] leading-[15px] pb-[2px] mb-[5px]">
                    <dt className="mb-[5px] font-bold">Win Selection forecast</dt>
                    <dd className="w-full flex items-center m-[0_5px_5px_0] float-left">
                      <input type="checkbox" className="text-[12px] h-auto w-auto leading-[20px] p-0 m-[0_5px_0_0] text-[#1e1e1e] bg-[#00000000] accent-[#0275ff] box-border" />
                      <label className="cursor-pointer font-normal">With Commission</label>
                    </dd>
                    <span className="block clear-both"></span>
                  </dl>
                  <ul className="block clear-both mb-0">
                    <li className="block float-left w-[50%]">
                      <span
                        className="cursor-pointer font-bold leading-[23px] w-[80%] m-0 text-[11px] text-[#1e1e1e] p-0 block bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] border border-[#bbb] text-center rounded"
                        onClick={() => setEditStakeOpen(false)}
                      > Cancel</span>
                    </li>
                    <li className="block float-left w-[50%] border-r border-[#00000033]">
                      <span className="cursor-pointer font-bold leading-[23px] w-[95%] m-0 float-right text-[11px] text-[#ffb600] p-0 block bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] shadow-[initial] border border-[#222] text-center rounded">Save</span>
                    </li>
                    <span className="block clear-both"></span>
                  </ul>
                </div>
              </div>
            }
          </div>
        </nav>
      </header >
    </>
  );
};

export default Header;
