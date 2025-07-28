import { useEffect, useState } from "react";
import { FaUser, FaSearch, FaSignInAlt, FaPiggyBank } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { IoSettingsSharp } from "react-icons/io5";
import { SearchOutlined } from "@ant-design/icons";
import Login from "../Pages/Auth/Login";
import { Link } from "react-router-dom";
import Helper from "../helper";
import Appconfig from "../config/config";
import axios from "axios";
import apiBaseUrl from "../config/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../AuthContext";

const Header = () => {


  const userInfo = Helper();
  const { login, setShowLoginModel } = useAuth();
  console.log('header userinfo : ', userInfo)

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

  let balanceWithExp = balance - Math.abs(exposure);
  // setCurrentBalance(balanceWithExp);

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
    rounded-sm text-xs 
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

  const handleLogin = () => {
    if (userCode === validationCode) {
      alert("Validation matched ✅");
    } else {
      alert("Incorrect code ❌");
    }
  };

  const menuItems = [
    { name: "Home" },
    { name: "In-Play" },
    { name: "Multi Markets" },
    { name: "Cricket", live: 11 },
    { name: "Soccer", live: 3 },
    { name: "Tennis", live: 7 },
    { name: "Virtual Cricket" },
    { name: "E-Soccer", live: 5 },
  ];



  useEffect(() => {
    const randomCode = Math.floor(1000 + Math.random() * 9000).toString();
    setValidationCode(randomCode);
  }, []);

  useEffect(() => {
    if (userInfo) {
      getBalance();
    }
  }, []);




  return (
    <>
      {loginClicked && (
        <div className="fixed inset-0 z-50 bg-[#ffb80c] overflow-auto">
          <Login onClose={() => setLoginClicked(false)} />
        </div>
      )}
      <header className="w-full">
        {/* Top PC Header */}
        <div className="hidden lg:block [background:var(--theme3-bg)] bg-[#000] pt-3 pb-2 px-4">
          <div className="hidden sm:flex items-center justify-between">
            {/* Logo + Search */}
            <div className="flex items-center gap-4 ml-2">
              <img src="/logo.png" alt="Logo" className="w-14" />
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
            {!userInfo && <div className="flex items-center gap-1">
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
                  value={vCode}
                  onChange={(e) => setVCode(e.target.value)}
                  className={`${inputClass} w-full text-black px-1 py-[3px] pl-[70px] font-bold`}
                />
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none">
                  Validation
                </span>
                <span className="absolute left-[100px] top-1/2 -translate-y-1/2 text-base text-black font-bold pointer-events-none">
                  {validationCode}
                </span>
              </div>
              <button
                onClick={(e) => { handleSubmit(e) }}
                className="bg-[#e83523] [background:linear-gradient(-180deg,#f72424_0%,#bb1c00_100%)] text-white px-3 py-1.5 text-xs font-bold rounded-sm flex items-center gap-1"
              >
                Login <FaSignInAlt />
              </button>
              <button className="bg-[#666] [background:linear-gradient(-180deg,#666666_0%,#333333_100%)] text-white px-3 py-1.5 text-xs font-bold rounded-sm">Sign up</button>
            </div>}

            {/* for pc view */}
            {userInfo && <div className="flex gap-5">
              <div className="hidden lg:flex">
                <div
                  className="text-[#ffb600] text-xs p-1 flex gap-1 font-bold h-[25px]  bg-[#ffffff1a] rounded-l-md border border-[#00000040] cursor-pointer"
                  style={{
                    boxShadow: "inset 0 0.0666666667vw 0 0 rgba(255,255,255,.5)",
                  }}
                >
                  <span className="opacity-70">Main Balance </span>{" "}
                  {balance && Math.abs(balanceWithExp).toFixed(2)}
                  <span className="opacity-70"> Exposure</span>{" "}
                  <span style={{ color: "" }}>
                    {Math.abs(exposure).toFixed()}
                  </span>
                  <p className='border border-[#ffb600] px-2 flex items-center justify-center mt-[0.5px] py-1 rounded-sm'>+5</p>
                </div>
                <div
                  className="h-[24px] w-[25px] bg-[#535353] flex justify-center items-center px-1 rounded-r-md"
                  style={{
                    boxShadow: "inset 0 0.0666666667vw 0 0 rgba(255,255,255,.5)",
                  }}
                >
                  {" "}
                  <TbReload
                    className="flipReload"
                    style={{ cursor: "pointer" }}
                  />{" "}
                </div>
              </div>
            </div>}
          </div>
        </div>

        {/* Top Mobile Header */}
        <div className="block lg:hidden py-1 px-2 [background-image:linear-gradient(180deg,_#474747_0%,_#070707_100%)] bg-[#000]">
          {!userInfo &&
            <div className="flex sm:hidden items-center justify-between">
              <div className="flex items-center">
                <img src="/logo.png" alt="Logo" className="w-12" />
              </div>
              <div className="flex items-center gap-1">
                <button className="[background-image:linear-gradient(-180deg,_#666666_0%,_#333333_100%)] border border-[#000] text-white text-sm font-bold px-6 py-2 rounded-sm">Sign up</button>
                <button className="[background-image:linear-gradient(-180deg,_#f72424_0%,_#bb1c00_100%)] [border:0.2666666667vw_solid_#710b0b] text-white text-sm font-bold px-6 py-2 rounded-sm flex items-center gap-1" onClick={() => { setLoginClicked(prev => !prev) }}>
                  <FaUser /> Login
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
            <div className="relative z-10 flex overflow-x-auto">
              {menuItems.map(({ name, live }) => (
                <div key={name} className="relative">
                  <button
                    onClick={() => setActiveItem(name)}
                    className={`px-3 py-1.5 border-r border-[#0003]  whitespace-nowrap flex items-center transition-all duration-200 ${activeItem === name
                      ? "bg-[#ffdc7a] text-black shadow-[inset_0_0_5px_0_rgba(83,33,33,0.5)]"
                      : "hover:bg-[#f0b800]"
                      }`}
                  >
                    {name}
                  </button>

                  {/* Live badge row aligned */}
                  {live && (
                    <div className="absolute z-[9999] -top-3 right-1 h-[12px] flex flex-row items-center gap-1 z-50 rounded-sm bg-[linear-gradient(180deg,_#fb3434_0%,_#e80505_100%)] shadow-[0_0_5px_0_rgba(83,33,33,0.5)]">

                      {/* SVG in white circle */}
                      <div className="bg-white p-[1px] rounded-sm rounded-tr-none rounded-br-none h-[12px]">
                        <img
                          src="data:image/svg+xml,%3Csvg width='15' height='15' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='rgb(255,0,0)' fill-rule='evenodd'%3E%3Cpath d='M12.012 0l-.698.727c1.734 1.808 1.734 4.738 0 6.546l.698.727c2.117-2.207 2.117-5.79 0-8zM10.3 1.714l-.7.735c.967 1.014.967 2.66 0 3.673l.7.735c1.352-1.418 1.352-3.721 0-5.143zM1.588 0l.698.727c-1.734 1.808-1.734 4.738 0 6.546L1.588 8c-2.117-2.207-2.117-5.79 0-8zM3.3 1.714l.7.735c-.967 1.014-.967 2.66 0 3.673l-.7.735c-1.352-1.418-1.352-3.721 0-5.143z'/%3E%3Ccircle cx='6.8' cy='4.4' r='1.6'/%3E%3C/g%3E%3C/svg%3E"
                          alt="live"
                          className="w-5 h-5 animate-pulse"
                        />
                      </div>

                      {/* Red badge number */}
                      <div className="text-white text-[10px] pr-[5px] font-bold">
                        {live}
                      </div>
                    </div>
                  )}
                </div>
              ))}

            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 text-xs">
              <div className="text-[#0009] font-extralight">
                Time Zone: <span className="text-[#000] font-bold">GMT+5:30</span>
              </div>

              {/* One Click Bet */}
              <div className="flex items-center gap-1 bg-[#3c3c3c] text-yellow-400 py-1 px-2 rounded border-l-4 border-yellow-400">
                <input type="checkbox" id="oneclick" />
                <label htmlFor="oneclick" className="cursor-pointer font-semibold text-sm">
                  One Click Bet
                </label>
              </div>

              <div className="font-semibold">Setting ⚙️</div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
