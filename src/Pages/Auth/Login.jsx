import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import apiBaseUrl from "../../config/config";
import { Link, useNavigate } from "react-router-dom";
const Login = ({ onClose }) => {

  const navigate = useNavigate();
  const { login, setShowLoginModel } = useAuth();


  const [code, setCode] = useState();
  const [screenHeight, SetScreenHeight] = useState(100);
  const [errorMessage, setErrorMessage] = useState("");
  const [vCode, setVCode] = useState("")
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
    site_code: apiBaseUrl.sitecodes,
    user_type: "User",
  });

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

    if (vCode != code) {
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
          navigate('/');
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

  const loginDemoID = async () => {

    var demoData = {
      user_name: "demo_user",
      password: "12345678",
      site_code: apiBaseUrl.sitecodes,
      user_type: "User",
    };

    var config = {
      method: "post",
      url: `${apiBaseUrl.apiUrl}users/userAuthenticate`,
      headers: {
        "Content-Type": "application/json",
      },

      data: JSON.stringify(demoData),
    };
    axios(config)
      .then(function (response) {

        if (response.data.result != 0) {
          toast.success(response.data.resultMessage, { autoClose: 500 });
          login(response.data.resultData);
          setShowLoginModel(false);
          onClose();
          console.log('response data : ', response)
        } else {
          toast.error(response.data.resultMessage, { autoClose: 800 });
          console.log('response data error : ', response)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };







  useEffect(() => {
    let number1 = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * 10);
    let number3 = Math.floor(Math.random() * 10);
    let number4 = Math.floor(Math.random() * 10);
    setCode(String(number1) + String(number2) + String(number3) + String(number4));

    const height = window.innerHeight;
    ////console.log(height);
    SetScreenHeight(height);
  }, []);

  return (
    <div className={` lg:hidden relative h-[${String(screenHeight)}px] w-screen`} style={{ background: "#ffb80c" }}>
      {/*  for back to home page */}
      <div className=" right-5 top-5 fixed rounded-full bg-[#000000b3] h-8 w-8 flex justify-center items-center" onClick={onClose}>
        <Link to="/">
          <img src="/Images/cut-white.svg" className=" h-3" alt="" />
        </Link>
      </div>

      <img src='/Images/KV-pic.png' alt="" />
      <img src="/logo.png" className='absolute top-20 right-[35%] h-28' alt="" />
      {/* <div className='absolute  top-56  right-[37%]' style={{top: '16rem'}}>
        <p className='text-[#aaaaaa] text-xs text-center'>Powered By</p>
      <img src={BetfairMobileLogo} className='h-5 text-[#aaaaaa]' alt="" />
      </div> */}

      {/* form */}
      <div className="flex flex-col gap-4 mx-8 mt-12">
        <input
          type="text"
          name="user_name"
          placeholder="Username"
          required
          value={formData.user_name}
          onChange={(e) => handleInputChange(e)}
          style={{ boxShadow: "inset 0 0.5333333333vw 0 0 rgba(0,0,0,.1)" }} className="rounded-lg py-2 pl-2 bg-[#fff] text-[#1e1e1e] focus:bg-[#fff0ca] focus:outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={(e) => handleInputChange(e)}
          className="rounded-lg py-2 pl-2 bg-[#fff] focus:bg-[#fff0ca] focus:outline-none"
          style={{ boxShadow: "inset 0 0.5333333333vw 0 0 rgba(0,0,0,.1)" }}
        />
        <div className='relative flex'>
          <input
            type="number"
            maxLength={3}
            name="validation"
            placeholder='Validation'
            value={vCode}
            onChange={(e) => setVCode(e.target.value)}
            className='rounded-l-lg w-2/3 py-2 pl-2 bg-[#fff] m-0  focus:bg-[#fff0ca] focus:outline-none'
            style={{ boxShadow: "inset 0 0.5333333333vw 0 0 rgba(0,0,0,.1)" }}
          />
          <div style={{ boxShadow: "inset 0 0.5333333333vw 0 0 rgba(0,0,0,.1)", fontSize: '150%' }} className='bg-white w-1/3 rounded-r-lg px-3 pt-2 text-end font-bold text-base'>{code}</div>
        </div>
        <div className="flex flex-col w-full gap-1">
          <button className="[background-image:linear-gradient(180deg,_#474747_0%,_#070707_100%)] text-[#ffb80c] font-bold py-3 rounded-lg" onClick={(e) => { handleSubmit(e) }}>
            Login
          </button>
          {/* <button className="[background-image:linear-gradient(180deg,_#474747_0%,_#070707_100%)] text-[#ffb80c] font-bold py-3 rounded-lg mt-1" onClick={loginDemoID}>
            Login with Demo Id{" "}
          </button> */}
        </div>
        <h1 className="text-red-500 text-center"> {errorMessage} </h1>
      </div>

      {/* -------------- footer ------------------------------------------*/}
      <div className={`pb-10 lg:px-40`}>
        <div className="flex flex-col justify-center lg:border-t mt-0 border-[#0000004d]">
          {/* for mobile view */}
          <p className="lg:hidden flex justify-center flex-wrap gap-1  text-xs mt-2 text-[#00000099]">
            <Link className="underline">Privacy Policy </Link>|<Link className="underline">Terms and Conditions</Link>|<Link className="underline">Rules and Regulations </Link>|<Link className="underline"> KYC</Link>|<Link className="underline"> Responsible Gaming</Link>|<Link className="underline"> About Us </Link>|<Link className="underline">Self-exclusion Policy </Link>|<Link className="underline"> Underage Policy </Link>
          </p>
        </div>

        <div className="mx-5 lg:mx-36 pt-7">
          <div className="lg:flex justify-between mb-2 ">
            <div className="py-3 bg-[#ffffff99] lg:w-[49%] mb-2 lg:mb-0 flex gap-2 justify-center items-center rounded-lg  text-sm text-[#000000b3]">
              <img src="/Images/headphone-black.svg" className="w-8" alt="" /> <span className="cursor-pointer hover:text-black"> Customer support1 </span> | <span className="cursor-pointer hover:text-black"> support2 </span>
            </div>
            <div className="py-3 bg-[#ffffff99] lg:w-[49%] flex gap-2 justify-center items-center rounded-lg  text-sm text-[#000000b3]">
              <img src="/Images/whatsapp-black.png" className="w-7" alt="" /> <span className="cursor-pointer hover:text-black">WhatsApp 3 </span> | <span className="cursor-pointer hover:text-black"> WhatsApp 4 </span>
            </div>
          </div>

          <div className="w-full bg-[#ffffff99] h-4 mb-2 rounded-lg"></div>

          {/*  for mobile view */}
          <div className="flex lg:hidden justify-between gap-2">
            <div className="py-4 bg-[#ffffff99]  w-[48%] flex gap-2 justify-center items-center rounded-lg  text-sm text-[#000000b3] hover:text-black cursor-pointer">
              {" "}
              <img src="/Images/skype-black.png" className="w-5" alt="" /> Skype
            </div>
            <div className="py-4 bg-[#ffffff99]  w-[48%] flex gap-2 justify-center items-center rounded-lg  text-sm text-[#000000b3] hover:text-black cursor-pointer">
              {" "}
              <img src="/Images/mail-black.png" className="w-5" alt="" /> Email
            </div>
            <div className="py-4 bg-[#ffffff99]  w-[48%] flex gap-2 justify-center items-center rounded-lg  text-sm text-[#000000b3] hover:text-black cursor-pointer">
              {" "}
              <img src="/Images/ig-black.png" className="w-5" alt="" /> Instagram
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
