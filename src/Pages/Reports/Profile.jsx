import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'antd';
import Helper from '../../helper';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthContext';

function Profile() {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location?.state;
  // console.log('Location State : ', locationState)
  const userInfo = Helper();
  const { currentBalance } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState({ isOpen: false, modal: '' });
  const [selectedEvent, setSelectedEvent] = useState("cb");
  const [selectMarket, setSelectMarket] = useState("1");

  const showModal = (modal) => {
    setIsModalOpen({ isOpen: true, modal: modal });
  };

  useEffect(() => {
    // console.log(' location event type : ', location?.state?.eventType)
    if (location?.state?.eventType !== undefined) {
      setSelectedEvent(location?.state?.eventType);
      setSelectMarket("1");
    }
  }, [location?.state?.eventType])
  return (
    <>
      <Modal
        open={isModalOpen?.isOpen}
        closable={false}
        classNames={{
          footer: 'hidden'
        }}
        styles={{
          content: {
            width: '400px',
            padding: '0px'
          }
        }}
      >
        <div className="bg-[#eee] p-[15px] rounded-[5px]">
          <div className='flex justify-between items-center mb-[18px]'>
            <h1 className="text-[#3b5160] text-[16px] font-bold">{isModalOpen?.modal}</h1>
            <img src="/Images/close_pop.png" alt="" className='cursor-pointer' onClick={() => { setIsModalOpen({ isOpen: false, modal: '' }); }} />
          </div>

          <div className="flex flex-col gap-2 w-full text-[12px]">

            {isModalOpen?.modal === "Change User Name" &&
              <>
                {/* First Name */}
                <div className="flex items-center gap-2 w-full">
                  <span className="w-[132px] text-right">First Name</span>
                  <input
                    type="text"
                    placeholder='Enter'
                    className="text-[#1e1e1e] shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] border-[0px] border-[#aaa] rounded-[4px] w-[160px] m-0 p-[3px]"
                  />
                  {/* <span className="text-red-600">*</span> */}
                </div>

                {/* Last Name */}
                <div className="flex items-center gap-2 w-full">
                  <span className="w-[132px] text-right">Last Name</span>
                  <input
                    type="text"
                    placeholder='Enter'
                    className="text-[#1e1e1e] shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] border-[0px] border-[#aaa] rounded-[4px] w-[160px] m-0 p-[3px]"
                  />
                  {/* <span className="text-red-600">*</span> */}
                </div>
              </>}
            {isModalOpen?.modal === "Change Exposure Limit" &&
              <>
                {/* First Name */}
                <div className="flex items-center gap-2 w-full">
                  <span className="w-[132px] text-right">Exposure Limit</span>
                  <strong>10,000.00</strong>
                </div>

                {/* Last Name */}
                <div className="flex items-center gap-2 w-full">
                  <span className="w-[132px] text-right">Exposure</span>
                  <input
                    type="text"
                    placeholder='Enter'
                    className="text-[#1e1e1e] shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] border-[0px] border-[#aaa] rounded-[4px] w-[160px] m-0 p-[3px]"
                  />
                  <span className="text-red-600">*</span>
                </div>
              </>}
            {isModalOpen?.modal === "Change Commission" &&
              <>
                {/* First Name */}
                <div className="flex items-center gap-2 w-full">
                  <span className="w-[132px] text-right">Change Commission</span>
                  <input
                    type="text"
                    placeholder='Enter'
                    className="text-[#1e1e1e] shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] border-[0px] border-[#aaa] rounded-[4px] w-[160px] m-0 p-[3px]"
                  />
                  <span className="text-red-600">*</span>
                </div>
              </>}
            {isModalOpen?.modal === "Change Password" &&
              <>
                {/* New Password */}
                <div className="flex items-center gap-2 w-full">
                  <span className="w-[132px] text-right">New Password</span>
                  <input
                    type="text"
                    placeholder='Enter'
                    className="text-[#1e1e1e] shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] border-[0px] border-[#aaa] rounded-[4px] w-[160px] m-0 p-[3px]"
                  />
                  <span className="text-red-600">*</span>
                </div>

                {/* New Password Confirm */}
                <div className="flex items-center gap-2 w-full">
                  <span className="w-[132px] text-right">New Password Confirm</span>
                  <input
                    type="text"
                    placeholder='Enter'
                    className="text-[#1e1e1e] shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] border-[0px] border-[#aaa] rounded-[4px] w-[160px] m-0 p-[3px]"
                  />
                  <span className="text-red-600">*</span>
                </div>
              </>}

            {isModalOpen?.modal === "Change Password" &&
              <>
                {/* Your Password */}
                <div className="flex items-center gap-2 w-full">
                  <span className="w-[132px] text-right">Your Password</span>
                  <input
                    type="text"
                    placeholder='Enter'
                    className="text-[#1e1e1e] shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] border-[0px] border-[#aaa] rounded-[4px] w-[160px] m-0 p-[3px]"
                  />
                  <span className="text-red-600">*</span>
                </div>
              </>}
            {isModalOpen?.modal !== "Change Password" &&
              <>
                {/* Your Password */}
                <div className="flex items-center gap-2 w-full">
                  <span className="w-[132px] text-right">Password</span>
                  <input
                    type="text"
                    placeholder='Enter'
                    className="text-[#1e1e1e] shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] border-[0px] border-[#aaa] rounded-[4px] w-[160px] m-0 p-[3px]"
                  />
                  <span className="text-red-600">*</span>
                </div>
              </>}
          </div>
          <div className='flex justify-center items-center'>

            <button className='flex justify-center text-[#ffb600] text-[12px] font-bold leading-[23px] border border-[#222] rounded-[4px] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] w-[35%] m-[15px_0_0]'>Change</button>
          </div>
        </div>
      </Modal>
      <div>

        {/* Upline detail */}
        <div className='w-full flex text-[#1e1e1e] text-[12px] leading-[15px] m-[15px_0_10px_0]'>
          <ul className='block clear-both bg-[#eee] p-[0_5px_0_5px] shadow-[inset_0_1px_0_0_#fff] border border-[#7e97a7] rounded-[3px] float-left'>
            <li className='hidden relative text-[16px] font-bold leading-[30px] pr-[5px] float-left'>
              <span className='block text-[#1e1e1e] leading-[26px] h-[30px]'>
                <span className="w-[26px] h-[15px] leading-[15px] no-underline text-white rounded-[4px] mr-[5px] text-[10px] inline-block text-center mt-[8px] font-extralight bg-[#d77319]">
                  COM
                </span>
                <strong className='text-[#1e1e1e] leading-[26px]'>
                  teamj
                  <img src="/Images/ag_path_arrow.png" alt="" className='ml-1 inline-block p-[0_5px_0_5px]' />
                </strong>
              </span>
            </li>
            <li className='hidden relative text-[16px] font-bold leading-[30px] pr-[5px] float-left'>
              <span className='block text-[#1e1e1e] leading-[26px] h-[30px]'>
                <span className="w-[26px] h-[15px] leading-[15px] no-underline text-white rounded-[4px] mr-[5px] text-[10px] inline-block text-center mt-[8px] font-extralight bg-[#d65d5d]">
                  SS
                </span>
                <strong className='text-[#1e1e1e] leading-[26px]'>
                  teamj
                  <img src="/Images/ag_path_arrow.png" alt="" className='ml-1 inline-block p-[0_5px_0_5px]' />
                </strong>
              </span>
            </li>
            <li className='hidden relative text-[16px] font-bold leading-[30px] pr-[5px] float-left'>
              <span className='block text-[#1e1e1e] leading-[26px] h-[30px]'>
                <span className="w-[26px] h-[15px] leading-[15px] no-underline text-white rounded-[4px] mr-[5px] text-[10px] inline-block text-center mt-[8px] font-extralight bg-[#a762b5]">
                  SUP
                </span>
                <strong className='text-[#1e1e1e] leading-[26px]'>
                  teamj
                  <img src="/Images/ag_path_arrow.png" alt="" className='ml-1 inline-block p-[0_5px_0_5px]' />
                </strong>
              </span>
            </li>
            <li className='block relative text-[16px] font-bold leading-[30px] pr-[5px] float-left'>
              <span className='block text-[#1e1e1e] leading-[26px] h-[30px]'>
                <span className="w-[26px] h-[15px] leading-[15px] no-underline text-white rounded-[4px] mr-[5px] text-[10px] inline-block text-center mt-[8px] font-extralight bg-[#85b352]">
                  MA
                </span>
                <strong className='text-[#1e1e1e] leading-[26px]'>
                  teamj
                  <img src="/Images/ag_path_arrow.png" alt="" className='ml-1 inline-block p-[0_5px_0_5px]' />
                </strong>
              </span>
            </li>

            <li className='block relative text-[16px] font-bold leading-[30px] pr-[5px] float-left'>
              <span className='block text-[#1e1e1e] leading-[26px] h-[30px]'>
                <span className="w-[26px] h-[15px] leading-[15px] no-underline text-white rounded-[4px] mr-[5px] text-[10px] inline-block text-center mt-[8px] font-extralight bg-[#568bc8]">
                  PL
                </span>
                <strong className='text-[#1e1e1e] leading-[26px]'>jp1122user</strong>
              </span>
            </li>
          </ul>
        </div>
        <div className='flex m-[0_auto]'>
          {/* Left Section */}
          <div className='hidden lg:block w-full lg:w-[21.361111%]'>
            <ul className='border-b border-[#7e97a7]'>
              <li className='text-xs text-white leading-[25px] bg-[#243a48] w-full p-[0_10px] border-b border-[#eee1c0]'>
                Position
              </li>
              {locationState?.accountType === 'parent' &&
                <li className={`text-xs ${locationState?.state == "accountStatement" ? "text-[#fff] bg-[#0009]" : "text-black bg-white"} border-b border-[#eee1c0] w-full p-[0_10px] leading-[25px] cursor-pointer`} onClick={() => navigate('/profile', { state: { state: 'accountStatement', accountType: locationState?.accountType } })}>
                  <span>Account Statement</span>
                </li>
              }
              <li className={`text-xs ${locationState?.state == "summaryPage" ? "text-[#fff] bg-[#0009]" : "text-black bg-white"} border-b border-[#eee1c0] w-full p-[0_10px] leading-[25px] cursor-pointer`} onClick={() => navigate('/profile', { state: { state: 'summaryPage', accountType: locationState?.accountType } })}>
                Account Summary
              </li>
              {locationState?.accountType === 'parent' &&
                <>
                  <li className='text-xs text-white leading-[25px] bg-[#243a48] w-full p-[0_10px] border-b border-[#eee1c0]'>
                    Account Details
                  </li>
                  <li className={`text-xs ${(locationState?.state === null || locationState?.state == "profilePage") ? "text-[#fff] bg-[#0009]" : "text-black bg-white"} border-b border-[#eee1c0] w-full p-[0_10px] leading-[25px] cursor-pointer`} onClick={() => navigate('/profile', { state: { state: 'profilePage', accountType: locationState?.accountType } })}>
                    <span>Profile</span>
                  </li>
                  <li className={`text-xs ${locationState?.state == "log" ? "text-[#fff] bg-[#0009]" : "text-black bg-white"} border-b border-[#eee1c0] w-full p-[0_10px] leading-[25px] cursor-pointer`} onClick={() => navigate('/profile', { state: { state: 'log', accountType: locationState?.accountType } })}>
                    <span>Activity Log</span>
                  </li>
                </>
              }
              {locationState?.accountType !== 'parent' &&
                <>
                  <li className='text-xs text-white leading-[25px] bg-[#243a48] w-full p-[0_10px] border-b border-[#eee1c0]'>
                    Performance
                  </li>
                  <li className={`text-xs ${locationState?.eventType == "bh" ? "text-[#fff] bg-[#0009]" : "text-black bg-white"} border-b border-[#eee1c0] w-full p-[0_10px] leading-[25px] cursor-pointer`} onClick={() => navigate('/profile', { state: { state: 'bets', eventType: 'bh', accountType: locationState?.accountType } })}>
                    <span>Betting History</span>
                  </li>
                  <li className={`text-xs ${locationState?.eventType == "pl" ? "text-[#fff] bg-[#0009]" : "text-black bg-white"} border-b border-[#eee1c0] w-full p-[0_10px] leading-[25px] cursor-pointer`} onClick={() => navigate('/profile', { state: { state: 'bets', eventType: 'pl', accountType: locationState?.accountType } })}>
                    <span>Betting Profit & Loss</span>
                  </li>
                  <li className={`text-xs ${locationState?.state == "accountStatement" ? "text-[#fff] bg-[#0009]" : "text-black bg-white"} border-b border-[#eee1c0] w-full p-[0_10px] leading-[25px] cursor-pointer`} onClick={() => navigate('/profile', { state: { state: 'accountStatement', accountType: locationState?.accountType } })}>
                    <span>Transaction History</span>
                  </li>
                  <li className={`text-xs ${locationState?.state == "log" ? "text-[#fff] bg-[#0009]" : "text-black bg-white"} border-b border-[#eee1c0] w-full p-[0_10px] leading-[25px] cursor-pointer`} onClick={() => navigate('/profile', { state: { state: 'log', accountType: locationState?.accountType } })}>
                    <span>Activity Log</span>
                  </li>
                </>
              }
            </ul>
          </div>
          {/* Center Section */}
          {(locationState?.state === null || locationState?.state == "profilePage") &&
            <div className='flex flex-col justify-start w-full lg:ml-[1rem] p-1 lg:p-0'>
              <h2 className='flex w-full text-[16px] text-[#243a48] leading-[16px] font-bold pt-[6px] mb-[15px]'>Profile</h2>
              <div className='mb-[15px] w-[49.5%] bg-[#fff] border-b border-[#7e97a7]'>
                <h3 className='text-[#fff] text-[14px] font-bold p-[0_10px] bg-[#7e97a7] leading-[24px]'>About You</h3>
                <ul className='text-[11px]'>
                  <li className='flex border-b border-[#e0e6e6]'>
                    <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                      First Name
                    </span>
                    <span className='min-h-[16px] text-[13px] p-[5px_0_5px_10px]'>
                      {userInfo?.user_name}
                    </span>
                  </li>
                  <li className='flex border-b border-[#e0e6e6]'>
                    <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                      Last Name
                    </span>
                    <span className='min-h-[16px] text-[13px] p-[5px_0_5px_10px]'>
                      --
                    </span>
                  </li>
                  <li className='flex border-b border-[#e0e6e6]'>
                    <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                      Birthday
                    </span>
                    <span className='min-h-[16px] p-[5px_0_5px_10px]'>
                      --
                    </span>
                  </li>
                  <li className='flex border-b border-[#e0e6e6]'>
                    <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                      Password
                    </span>
                    <span className='flex justify-between items-center w-[24rem] min-h-[16px] p-[5px_10px_5px_10px]'>
                      <span>*******************************</span>
                      <span className='flex justify-center items-center text-[#2789ce] text-[13px] hover:underline cursor-pointer' onClick={() => { showModal('Change Password') }}>Edit <img src="/Images/edit-pen.png" alt="" className='pl-1  h-[15px]' /></span>
                    </span>
                  </li>
                  <li className='flex border-b border-[#e0e6e6]'>
                    <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                      Timezone
                    </span>
                    <span className='min-h-[16px] text-[13px] p-[5px_0_5px_10px]'>
                      IST
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          }
          {locationState?.state == "summaryPage" &&
            <div className='flex flex-col justify-start w-full lg:ml-[1rem] p-1 lg:p-0'>
              <h2 className='flex w-full text-[16px] text-[#243a48] leading-[16px] font-bold pt-[6px] mb-[15px]'>Account Summary</h2>
              {locationState?.accountType === 'parent' &&
                <div className='flex justify-between items-center p-[7px_10px_5px] mb-[15px] text-[#3b5160] w-full border-b border-[#7e97a7] bg-[#fff]'>
                  <div className='flex flex-col justify-start mr-[10px] w-[31.3725%] border-r border-[#d8d8d8]'>
                    <span className='text-[15px] font-bold mb-[7px]'>Your Balances</span>
                    <span className='text-[30px] font-bold leading-[36px] text-[#2789ce]'>
                      {Math.abs(currentBalance).toFixed(2)}
                      <span className='text-[12px] text-[#7e97a7] font-normal ml-2'>PIN</span>
                    </span>
                  </div>
                </div>
              }
              {locationState?.accountType === 'child' &&
                <>
                  <ul className='flex text-[12px] mb-[5px] leading-[15px]'>
                    <li className='flex justify-start gap-1 items-center mr-[15px]'> <img src="/Images/Person_blue.png" alt="" className='w-[15px] h-[15px] bg-no-repeat' /><span>jp1122user</span></li>
                  </ul>
                  <table className="w-full text-[12px] text-[#1e1e1e] mb-[15px] bg-[#fff] border-collapse border-b border-[#7e97a7]">
                    <tbody>
                      <tr className="">
                        <th className="text-[#243a48] bg-[#e4e4e4] w-[20%] text-left p-[8px_10px] border-y border-[#7e97a7]">Wallet</th>
                        <th className="text-[#243a48] bg-[#e4e4e4] w-[25%] text-right p-[8px_10px] border-y border-[#7e97a7]">Available to Bet</th>
                        <th className="text-[#243a48] bg-[#e4e4e4] text-right p-[8px_10px] border-y border-[#7e97a7]">Funds available to withdraw</th>
                        <th className="text-[#243a48] bg-[#e4e4e4] w-[25%] text-right p-[8px_10px] border-y border-[#7e97a7]">Current exposure</th>
                      </tr>
                      <tr>
                        <td className="relative w-[20%] text-left p-[8px_10px] border-t border-[#eee] align-middle">Main wallet</td>
                        <td className="relative w-[25%] text-right p-[8px_10px] border-t border-[#eee] align-middle">206.70</td>
                        <td className="relative text-right p-[8px_10px] border-t border-[#eee] align-middle">206.70</td>
                        <td className="relative w-[25%] text-right p-[8px_10px] border-t border-[#eee] align-middle">0.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <h2 className='flex w-full text-[16px] text-[#243a48] leading-[16px] font-bold pt-[6px] mb-[15px]'>Profile</h2>
                  <div className='flex flex-col lg:flex-row justify-start items-start text-[11px]'>
                    <div className='flex flex-col w-full'>
                      <div className='mb-[15px] bg-[#fff] border-b border-[#7e97a7]'>
                        <h3 className='text-[#fff] text-[14px] font-bold p-[0_10px] bg-[#7e97a7] leading-[24px]'>About You</h3>
                        <ul className='leading-[15px]'>
                          <li className='relative flex border-b border-[#e0e6e6]'>
                            <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                              First Name
                            </span>
                            <span className='min-h-[16px] text-[13px] p-[5px_0_5px_10px]'>
                              aaa
                              <span className='absolute right-0 top-1/2 -translate-y-1/2 flex items-center text-[#2789ce] text-[13px] hover:underline cursor-pointer' onClick={() => { showModal('Change User Name') }}>Edit <img src="/Images/edit-pen.png" alt="" className='pl-1 h-[15px] inline-block' /></span>
                            </span>
                          </li>
                          <li className='relative flex border-b border-[#e0e6e6]'>
                            <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                              Last Name
                            </span>
                            <span className='min-h-[16px] text-[13px] p-[5px_0_5px_10px]'>
                              aaaaaa
                            </span>
                            <span className='absolute right-0 top-1/2 -translate-y-1/2 flex items-center text-[#2789ce] text-[13px] hover:underline cursor-pointer' onClick={() => { showModal('Change User Name') }}>Edit <img src="/Images/edit-pen.png" alt="" className='pl-1 h-[15px] inline-block' /></span>
                          </li>
                          <li className='relative flex border-b border-[#e0e6e6]'>
                            <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                              Password
                            </span>
                            <span className='flex justify-between items-center w-[24rem] min-h-[16px] p-[5px_10px_5px_10px]'>
                              *******************************
                              <span className='absolute right-0 top-1/2 -translate-y-1/2 flex items-center text-[#2789ce] text-[13px] hover:underline cursor-pointer' onClick={() => { showModal('Change Password') }}>Edit <img src="/Images/edit-pen.png" alt="" className='pl-1 h-[15px] inline-block' /></span>
                            </span>
                          </li>
                          <li className='flex border-b border-[#e0e6e6]'>
                            <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                              Time Zone
                            </span>
                            <span className='min-h-[16px] text-[13px] p-[5px_0_5px_10px]'>
                              IST
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='flex flex-col lg:ml-[1rem] w-full'>
                      <div className='mb-[15px] bg-[#fff] border-b border-[#7e97a7]'>
                        <h3 className='text-[#fff] text-[14px] font-bold p-[0_10px] bg-[#7e97a7] leading-[24px]'>Limits & Commission</h3>
                        <ul className='leading-[15px]'>
                          <li className='relative flex border-b border-[#e0e6e6]'>
                            <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                              Exposure Limit
                            </span>
                            <span className='min-h-[16px] text-[13px] p-[5px_0_5px_10px]'>
                              10,000.00
                              <span className='absolute right-0 top-1/2 -translate-y-1/2 flex items-center text-[#2789ce] text-[13px] hover:underline cursor-pointer' onClick={() => { showModal('Change Exposure Limit') }}>Edit <img src="/Images/edit-pen.png" alt="" className='pl-1 h-[15px] inline-block' /></span>
                            </span>
                          </li>
                          <li className='relative flex border-b border-[#e0e6e6]'>
                            <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                              Commission
                            </span>
                            <span className='min-h-[16px] text-[13px] p-[5px_0_5px_10px]'>
                              2.00%
                              <span className='absolute right-0 top-1/2 -translate-y-1/2 flex items-center text-[#2789ce] text-[13px] hover:underline cursor-pointer' onClick={() => { showModal('Change Commission') }}>Edit <img src="/Images/edit-pen.png" alt="" className='pl-1 h-[15px] inline-block' /></span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              }
            </div>}

          {locationState?.state == "accountStatement" &&
            <div className='flex flex-col justify-start w-full lg:ml-[1rem] p-1 lg:p-0'>
              <h2 className='flex w-full text-[16px] text-[#243a48] leading-[16px] font-bold pt-[6px] mb-[15px]'>Account Statement</h2>
              {/* Filter Section */}
              <div className='relative text-[12px] p-[10px_10px_0] mb-[10px] bg-[#e0e6e6] border-b border-[#7e97a7]'>
                <ul className='block mb-[5px] mr-[5px] leading-[25px]'>
                  <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
                    <label className='mr-[5px] cursor-pointer'>Period</label>
                  </li>
                  <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
                    <input
                      type="date"
                      placeholder="YYYY-MM-DD"
                      className="p-[5px] w-[110px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
                      style={{ backgroundImage: "url('/Images/btn-cala.png')" }}
                    />
                    <input
                      type="text"
                      placeholder="09:00"
                      className="p-[5px] w-[45px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
                    />
                    {" "}to{" "}
                    <input
                      type="date"
                      placeholder="YYYY-MM-DD"
                      className="p-[5px] w-[110px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
                      style={{ backgroundImage: "url('/Images/btn-cala.png')" }}
                    />
                    <input
                      type="text"
                      placeholder="08:59"
                      className="p-[5px] w-[45px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
                    />
                  </li>
                  <span className='block clear-both'></span>
                </ul>
                <ul className='mb-[5px] mr-[5px] leading-[25px]'>
                  <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
                    <span className="block min-w-[95px] text-[12px] text-[#1e1e1e] font-normal leading-[23px] text-center bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_rgba(255,_255,_255,_.5)] border border-[#bbb] rounded-[4px]">
                      Just For Today
                    </span>
                  </li>
                  <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
                    <span className="block min-w-[95px] text-[12px] text-[#1e1e1e] font-normal leading-[23px] text-center bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_rgba(255,_255,_255,_.5)] border border-[#bbb] rounded-[4px]">
                      From Yesterday
                    </span>
                  </li>
                  <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
                    <span className="block min-w-[95px] text-[12px] text-[#ffb600] font-bold leading-[23px] text-center bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] shadow-initial border border-[#222] rounded-[4px]">
                      Get History
                    </span>
                  </li>
                  <span className='block clear-both'></span>
                </ul>
              </div>
              <div className='text-[12px] mb-[7px]'>
                <p className='mb-[7px]'>Banking log reserves 62 days data. Search time&nbsp;period is date between 14 days, ex: 1/1~1/14, 1/15~28.</p>
                <div>
                  <span className="inline-block min-w-[95px] text-[12px] text-[#ffb600] font-bold leading-[23px] text-center bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] shadow-initial border border-[#222] rounded-[4px]">
                    Download
                  </span>
                </div>
              </div>
              <table className="w-full text-[12px] text-[#1e1e1e] mb-[15px] border-b border-[#7e97a7]">
                <thead>
                  <tr className="">
                    <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-left p-[8px_10px] border-y border-[#7e97a7]">Date/Time</th>
                    <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-right p-[8px_10px] border-y border-[#7e97a7]">Deposit</th>
                    <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-right p-[8px_10px] border-y border-[#7e97a7]">Withdraw</th>
                    <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-right p-[8px_10px] border-y border-[#7e97a7]">Balance</th>
                    <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-right p-[8px_10px] border-y border-[#7e97a7]">Remark</th>
                    <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-right p-[8px_10px] border-y border-[#7e97a7]">From/To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-[#fff] border-y border-[#7e97a7]'>
                    <td className='text-left p-[8px_10px]'>2025-08-05 13:24:57</td>
                    <td className='text-right p-[8px_10px]'>500.00</td>
                    <td className='text-right p-[8px_10px]'>-</td>
                    <td className='text-right p-[8px_10px]'>500.00</td>
                    <td className='text-right p-[8px_10px]'></td>
                    <td className='flex justify-end items-center text-right p-[8px_10px]'><span>Master Agent</span><img src="/Images/icon-fromto.png" alt="" className="m-[0_5px] h-[8px] w-[7px]" /> <span>jp1122user</span></td>
                  </tr>
                </tbody>
              </table>
              <div className='flex justify-center items-center'>
                <div>
                  <span className='text-[#999] text-[12px] font-normal leading-[23px] p-[4px_10px] mr-[5px] rounded-[4px] border border-[#bbb] bg-[#dfdfdf]'>Prev</span>
                  <span className='text-[#ffb600] text-[12px] font-normal leading-[23px] p-[4px_10px] mr-[5px] rounded-[4px] border border-[#222] bg-[#444]'>1</span>
                  <span className='text-[#999] text-[12px] font-normal leading-[23px] p-[4px_10px] mr-[5px] rounded-[4px] border border-[#bbb] bg-[#dfdfdf]'>Next</span>
                </div>
              </div>
            </div>}

          {locationState?.state == "log" &&
            <div className='flex flex-col justify-start w-full lg:ml-[1rem] p-1 lg:p-0'>
              <h2 className='flex w-full text-[16px] text-[#243a48] leading-[16px] font-bold pt-[6px] mb-[15px]'>Activity Log</h2>
              <table className="w-full text-[12px] text-[#1e1e1e] mb-[15px] border-b border-[#7e97a7]">
                <thead>
                  <tr className="">
                    <th className="text-[#243a48] bg-[#e4e4e4] w-[15%] text-left p-[8px_10px] border-y border-[#7e97a7]">Login Date & Time</th>
                    <th className="text-[#243a48] bg-[#e4e4e4] w-[15%] text-left p-[8px_10px] border-y border-[#7e97a7]">Login Status</th>
                    <th className="text-[#243a48] bg-[#e4e4e4] w-[12%] text-right p-[8px_10px] border-y border-[#7e97a7]">IP Address</th>
                    <th className="text-[#243a48] bg-[#e4e4e4] w-[28%] text-right p-[8px_10px] border-y border-[#7e97a7]">ISP</th>
                    <th className="text-[#243a48] bg-[#e4e4e4] text-right p-[8px_10px] border-y border-[#7e97a7]">City/State/Country</th>
                    <th className="text-[#243a48] bg-[#e4e4e4] text-right p-[8px_10px] border-y border-[#7e97a7]">User Agent Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='bg-[#fff] border-y border-[#7e97a7]'>
                    <td className='text-left p-[8px_10px]'>2025-08-06 11:31:37</td>
                    <td className='text-left p-[8px_10px] text-[#508d0e]'>Login Success</td>
                    <td className='text-right p-[8px_10px]'>122.180.35.173</td>
                    <td className='text-right p-[8px_10px]'>Bharti Airtel Ltd.</td>
                    <td className='text-right p-[8px_10px]'>Udaipur, Rajasthan, IN</td>
                    <td className='text-right p-[8px_10px]'>Browser</td>
                  </tr>
                </tbody>
              </table>
              <div className='flex justify-center items-center'>
                <div>
                  <span className='text-[#999] text-[12px] font-normal leading-[23px] p-[4px_10px] mr-[5px] rounded-[4px] border border-[#bbb] bg-[#dfdfdf]'>Prev</span>
                  <span className='text-[#ffb600] text-[12px] font-normal leading-[23px] p-[4px_10px] mr-[5px] rounded-[4px] border border-[#222] bg-[#444]'>1</span>
                  <span className='text-[#999] text-[12px] font-normal leading-[23px] p-[4px_10px] mr-[5px] rounded-[4px] border border-[#bbb] bg-[#dfdfdf]'>Next</span>
                </div>
              </div>
            </div>}

          {locationState?.state == "bets" &&
            <div className='flex flex-col justify-start w-full lg:ml-[1rem] p-1 lg:p-0'>
              <h2 className='flex w-full text-[16px] text-[#243a48] leading-[16px] font-bold pt-[6px] mb-[15px]'>{selectedEvent != "pl" ? 'Betting History' : 'Betting Profit & Loss : Main Wallet'}</h2>
              {selectedEvent != "pl" &&
                <>
                  {/* Select Market Type Section */}
                  <ul className=' relative text-[15px] font-bold leading-[15px]'>
                    <span className='absolute bottom-0 left-0 w-full h-[4px]  bg-[#3b5160]'></span>
                    <li className={`inline-block ${selectMarket == '1' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("1"); }}>Exchange</li>
                    <li className={`inline-block ${selectMarket == '2' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("2"); }}>Fancy Bet</li>
                    <li className={`inline-block ${selectMarket == '3' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("3"); }}>Sportsbook</li>
                    <li className={`inline-block ${selectMarket == '4' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("4"); }}>BookMaker</li>
                  </ul>
                  {/* Filter Section */}
                  <div className='relative text-[12px] p-[10px_10px_0] mb-[10px] bg-[#e0e6e6] border-b border-[#7e97a7]'>
                    <ul className='block mb-[5px] mr-[5px] leading-[25px]'>
                      <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
                        <label className='mr-[5px] cursor-pointer'>Bet Status</label>
                      </li>
                      <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
                        <select className='w-[120px] h-[25px] m-[0_5px_5px_0] cursor-pointer'>
                          {selectedEvent !== "bh" && <>
                            <option className='p-[3px] text-[#222]' value="">All</option>
                            <option className='p-[3px] text-[#222]' value="">Unmatched</option>
                            <option className='p-[3px] text-[#222]' value="">Matched</option>
                          </>}
                          {selectedEvent === "bh" && <>
                            <option className='p-[3px] text-[#222]' value="">Settled</option>
                            <option className='p-[3px] text-[#222]' value="">Cancelled</option>
                            <option className='p-[3px] text-[#222]' value="">Voided</option>
                          </>}
                        </select>
                      </li>
                      <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'></li>
                      {selectedEvent !== "bh" && <>
                        <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
                          <label className='mr-[5px] cursor-pointer'>Order By</label>
                        </li>
                        <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
                          <input type="checkbox" checked className='w-auto h-auto p-0 m-[0_5px_5px_0] bg-[#0000]' />
                          <label className='mr-[5px] cursor-pointer'>Bet Placed</label>
                          <input type="checkbox" className='w-auto h-auto p-0 m-[0_5px_5px_0] bg-[#0000]' />
                          <label className='mr-[5px] cursor-pointer'>Market</label>
                        </li>
                      </>}
                      {selectedEvent === "bh" && <>
                        <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
                          <label className='mr-[5px] cursor-pointer'>Period</label>
                        </li>
                        <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
                          <input
                            type="date"
                            placeholder="YYYY-MM-DD"
                            className="p-[5px] w-[110px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
                            style={{ backgroundImage: "url('/Images/btn-cala.png')" }}
                          />
                          <input
                            type="text"
                            placeholder="09:00"
                            className="p-[5px] w-[45px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
                          />
                          {" "}to{" "}
                          <input
                            type="date"
                            placeholder="YYYY-MM-DD"
                            className="p-[5px] w-[110px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
                            style={{ backgroundImage: "url('/Images/btn-cala.png')" }}
                          />
                          <input
                            type="text"
                            placeholder="08:59"
                            className="p-[5px] w-[45px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
                          />
                        </li>
                      </>}
                      <span className='block clear-both'></span>
                    </ul>
                    {selectedEvent === "bh" && <>
                      <ul className='mb-[5px] mr-[5px] leading-[25px]'>
                        <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
                          <span className="block min-w-[95px] text-[12px] text-[#1e1e1e] font-normal leading-[23px] text-center bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_rgba(255,_255,_255,_.5)] border border-[#bbb] rounded-[4px]">
                            Just For Today
                          </span>
                        </li>
                        <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
                          <span className="block min-w-[95px] text-[12px] text-[#1e1e1e] font-normal leading-[23px] text-center bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_rgba(255,_255,_255,_.5)] border border-[#bbb] rounded-[4px]">
                            From Yesterday
                          </span>
                        </li>
                        <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
                          <span className="block min-w-[95px] text-[12px] text-[#ffb600] font-bold leading-[23px] text-center bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] shadow-initial border border-[#222] rounded-[4px]">
                            Get History
                          </span>
                        </li>
                        <span className='block clear-both'></span>
                      </ul>
                    </>}
                  </div>
                  {selectedEvent === "bh" &&
                    <>
                      {/* No Bet Section */}
                      <div className='text-[12px]'>
                        <p className='mb-[7px]'>
                          Betting History enables you to review the bets you have placed. <br />
                          Specify the time period during which your bets were placed, the type of
                          markets on which the bets were placed, and the sport.
                        </p>
                        <p className='mb-[7px]'>Betting History is available online for the past 62 days.</p>
                        <p className='mb-[7px]'>User can search up to 14 days records per query only .</p>
                      </div>
                    </>}
                  {selectedEvent != "bh" &&
                    <>
                      {(selectMarket === "1" || selectMarket === "3") &&
                        <table className='text-[12px] leading-[15px] w-full bg-[#fff] border-collapse border-b border-[#7e97a7] mb-[15px]'>
                          <caption className='text-left text-[#fff] leading-[24px] font-bold p-[0_10px] bg-[#3b5160] border-b border-[#7e97a7]'>Unmatched</caption>
                          <tbody>
                            <tr>
                              <th className='p-[5px] text-[#243a48] text-left bg-[#e4e4e4] border-y border-[#7e97a7]'>Market</th>
                              <th className='p-[5px] text-[#243a48] text-right bg-[#e4e4e4] border-y border-[#7e97a7] w-[10%]'>Selection</th>
                              <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[3%]'>Type</th>
                              <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[9%]'>Bet ID</th>
                              <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[8%]'>Bet placed</th>
                              <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[8%]'>Odds req.</th>
                              <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[9%]'>Macthed</th>
                              <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[10%]'>Unmatched</th>
                              <th className='hidden p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[10%]'>Avg. odds matched</th>
                              <th className='p-[5px] text-[#243a48] text-right bg-[#e4e4e4] border-y border-[#7e97a7] w-[10%]'>Date matched</th>
                            </tr>
                          </tbody>
                          <tbody className='text-right'>
                            <tr>
                              <td colSpan={9} className='text-left p-[10px_10px_5px] bg-[#fff]'>
                                <p className='mb-[7px]'>You have no bets in this time period.</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      }
                      {(selectMarket === "3") &&
                        <table className='text-[12px] leading-[15px] w-full bg-[#fff] border-collapse border-b border-[#7e97a7] mb-[15px]'>
                          <caption className='text-left text-[#fff] leading-[24px] font-bold p-[0_10px] bg-[#3b5160] border-b border-[#7e97a7]'>Pending</caption>
                          <tbody>
                            <tr>
                              <th className='p-[5px] text-[#243a48] text-left bg-[#e4e4e4] border-y border-[#7e97a7]'>Market</th>
                              <th className='p-[5px] text-[#243a48] text-right bg-[#e4e4e4] border-y border-[#7e97a7] w-[10%]'>Selection</th>
                              <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[3%]'>Type</th>
                              <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[9%]'>Bet ID</th>
                              <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[8%]'>Bet placed</th>
                              <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[8%]'>Odds req.</th>
                              <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[9%]'>Macthed</th>
                              <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[10%]'>Unmatched</th>
                              <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[10%]'>Avg. odds matched</th>
                              <th className='p-[5px] text-[#243a48] text-right bg-[#e4e4e4] border-y border-[#7e97a7] w-[10%]'>Date matched</th>
                            </tr>
                          </tbody>
                          <tbody className='text-right'>
                            <tr>
                              <td colSpan={9} className='text-left p-[10px_10px_5px] bg-[#fff]'>
                                <p className='mb-[7px]'>You have no bets in this time period.</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      }

                      <table className='text-[12px] leading-[15px] w-full bg-[#fff] border-collapse border-b border-[#7e97a7] mb-[15px]'>
                        <caption className='text-left text-[#fff] leading-[24px] font-bold p-[0_10px] bg-[#3b5160] border-b border-[#7e97a7]'>Matched</caption>
                        <tbody>
                          <tr>
                            <th className='p-[5px] text-[#243a48] text-left bg-[#e4e4e4] border-y border-[#7e97a7]'>Market</th>
                            <th className='p-[5px] text-[#243a48] text-right bg-[#e4e4e4] border-y border-[#7e97a7] w-[10%]'>Selection</th>
                            <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[3%]'>Type</th>
                            <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[9%]'>Bet ID</th>
                            <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[8%]'>Bet placed</th>
                            <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[8%]'>Odds req.</th>
                            <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[9%]'>Macthed</th>
                            <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[10%]'>Unmatched</th>
                            <th className='p-[5px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] w-[10%]'>Avg. odds matched</th>
                            <th className='p-[5px] text-[#243a48] text-right bg-[#e4e4e4] border-y border-[#7e97a7] w-[10%]'>Date matched</th>
                          </tr>
                        </tbody>
                        <tbody className='text-right'>
                          <tr>
                            <td colSpan={9} className='text-left p-[10px_10px_5px] bg-[#fff]'>
                              <p className='mb-[7px]'>You have no bets in this time period.</p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </>}
                </>}

              {selectedEvent == "pl" &&
                <>
                  <div className=' mb-[15px] text-[12px] text-[#3b5160] border-b border-[#7e97a7] leading-[15px]'>
                    <ul className='flex mb-[5px] leading-[15px]'>
                      <li className='flex justify-start gap-1 items-center mr-[15px]'> <img src="/Images/Person_blue.png" alt="" className='w-4 h-4 bg-no-repeat' /><span>{userInfo ? userInfo?.user_name : 'teamj'}</span></li>
                    </ul>
                    {/* Select Market Type Section */}
                    <ul className='mt-[16px] relative text-[15px] font-bold leading-[15px]'>
                      <span className='absolute bottom-0 left-0 w-full h-[4px]  bg-[#3b5160]'></span>
                      <li className={`inline-block ${selectMarket == '1' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("1"); }}>Exchange</li>
                      <li className={`inline-block ${selectMarket == '2' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("2"); }}>Fancy Bet</li>
                      <li className={`inline-block ${selectMarket == '5' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("5"); }}>Casino</li>
                      <li className={`inline-block ${selectMarket == '3' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("3"); }}>Sportsbook</li>
                      <li className={`inline-block ${selectMarket == '4' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("4"); }}>BookMaker</li>
                      <li className={`inline-block ${selectMarket == '6' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("6"); }}>BPoker</li>
                      <li className={`inline-block ${selectMarket == '7' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("7"); }}>SABA</li>
                      <li className={`inline-block ${selectMarket == '8' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("8"); }}>MiniGame</li>
                      <li className={`inline-block ${selectMarket == '9' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("9"); }}>Royal</li>
                    </ul>
                    {/* Filter Section */}
                    <div className='relative text-[12px] p-[10px_10px_0] mb-[10px] bg-[#e0e6e6] border-b border-[#7e97a7]'>
                      <ul className='block mb-[5px] mr-[5px] leading-[25px]'>
                        {/* <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
                        <label className='mr-[5px] cursor-pointer'>Bet Status</label>
                      </li>
                      <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
                        <select className='w-[120px] h-[25px] m-[0_5px_5px_0] cursor-pointer'>
                          <option className='p-[3px] text-[#222]' value="">All</option>
                          <option className='p-[3px] text-[#222]' value="">Unmatched</option>
                          <option className='p-[3px] text-[#222]' value="">Matched</option>
                        </select>
                      </li>
                      <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'></li>
                      <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
                        <label className='mr-[5px] cursor-pointer'>Order By</label>
                      </li>
                      <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
                        <input type="checkbox" checked className='w-auto h-auto p-0 m-[0_5px_5px_0] bg-[#0000]' />
                        <label className='mr-[5px] cursor-pointer'>Bet Placed</label>
                        <input type="checkbox" className='w-auto h-auto p-0 m-[0_5px_5px_0] bg-[#0000]' />
                        <label className='mr-[5px] cursor-pointer'>Market</label>
                      </li> */}
                        <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
                          <label className='mr-[5px] cursor-pointer'>Period</label>
                        </li>
                        <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
                          <input
                            type="date"
                            placeholder="YYYY-MM-DD"
                            className="p-[5px] w-[110px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
                            style={{ backgroundImage: "url('/Images/btn-cala.png')" }}
                          />
                          <input
                            type="text"
                            placeholder="09:00"
                            className="p-[5px] w-[45px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
                          />
                          {" "}to{" "}
                          <input
                            type="date"
                            placeholder="YYYY-MM-DD"
                            className="p-[5px] w-[110px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
                            style={{ backgroundImage: "url('/Images/btn-cala.png')" }}
                          />
                          <input
                            type="text"
                            placeholder="08:59"
                            className="p-[5px] w-[45px] m-[0_5px_5px_0] cursor-pointer bg-white bg-no-repeat bg-right shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] rounded-[4px] leading-[15px]"
                          />
                        </li>
                        <span className='block clear-both'></span>
                      </ul>
                      <ul className='mb-[5px] mr-[5px] leading-[25px]'>
                        <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
                          <span className="block min-w-[95px] text-[12px] text-[#1e1e1e] font-normal leading-[23px] text-center bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_rgba(255,_255,_255,_.5)] border border-[#bbb] rounded-[4px]">
                            Just For Today
                          </span>
                        </li>
                        <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
                          <span className="block min-w-[95px] text-[12px] text-[#1e1e1e] font-normal leading-[23px] text-center bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_rgba(255,_255,_255,_.5)] border border-[#bbb] rounded-[4px]">
                            From Yesterday
                          </span>
                        </li>
                        <li className="m-[0_5px_5px_0] whitespace-nowrap float-left">
                          <span className="block min-w-[95px] text-[12px] text-[#ffb600] font-bold leading-[23px] text-center bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] shadow-initial border border-[#222] rounded-[4px]">
                            Get P & L
                          </span>
                        </li>
                        <span className='block clear-both'></span>
                      </ul>
                    </div>
                    {/* No Bet Section */}
                    <div className='text-[12px]'>
                      <p className='mb-[7px]'>
                        Betting Profit & Loss enables you to review the bets you have placed. <br />
                        Specify the time period during which your bets were placed, the type of markets on which the bets were placed, and the sport.
                      </p>
                      <p className='mb-[7px]'>Betting Profit & Loss is available online for the past 62 days.</p>
                      <p className='mb-[7px]'>User can search up to 14 days records per query only .</p>
                    </div>
                  </div>
                </>
              }
            </div>}
        </div>
      </div>
    </>
  )
}

export default Profile