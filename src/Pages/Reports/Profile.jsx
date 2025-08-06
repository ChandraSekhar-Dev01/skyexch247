import React, { useState } from 'react'
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleNavigate = () => {

  }
  return (
    <>
      <Modal
        open={isModalOpen}
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
            <h1 className="text-[#3b5160] text-[16px] font-bold">Change Password</h1>
            <img src="/Images/close_pop.png" alt="" className='cursor-pointer' onClick={() => { setIsModalOpen(false); }} />
          </div>

          <div className="flex flex-col gap-2 w-full text-[12px]">

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
          </div>
          <div className='flex justify-center items-center'>

            <button className='flex justify-center text-[#ffb600] text-[12px] font-bold leading-[23px] border border-[#222] rounded-[4px] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] w-[35%] m-[15px_0_0]'>Change</button>
          </div>
        </div>
      </Modal>

      <div className='flex w-full lg:max-w-[1320px] m-[0_auto]'>
        <div className='hidden lg:block w-full lg:w-[23.361111%]'>
          <ul className='border-b border-[#7e97a7]'>
            <li className='text-xs text-right text-white bg-[#000] w-full py-1 px-2'>
              <span>My Account</span>
            </li>
            <li className={`text-xs ${(locationState?.state === null || locationState?.state == "profilePage") ? "text-[#fff] bg-[#0009]" : "text-black bg-white"} border-b border-[#eee1c0] w-full py-1 px-2 cursor-pointer`} onClick={() => navigate('/profile', { state: { state: 'profilePage' } })}>
              <span>My Profile</span>
            </li>
            <li className={`text-xs ${locationState?.state == "summaryPage" ? "text-[#fff] bg-[#0009]" : "text-black bg-white"} border-b border-[#eee1c0] w-full py-1 px-2 cursor-pointer`} onClick={() => navigate('/profile', { state: { state: 'summaryPage' } })}>
              <span>Balance Overview</span>
            </li>
            <li className={`text-xs ${locationState?.state == "accountStatement" ? "text-[#fff] bg-[#0009]" : "text-black bg-white"} border-b border-[#eee1c0] w-full py-1 px-2 cursor-pointer`} onClick={() => navigate('/profile', { state: { state: 'accountStatement' } })}>
              <span>Account Statement</span>
            </li>
            <li className={`text-xs ${locationState?.state == "bets" ? "text-[#fff] bg-[#0009]" : "text-black bg-white"} border-b border-[#eee1c0] w-full py-1 px-2 cursor-pointer`} onClick={() => navigate('/profile', { state: { state: 'bets' } })}>
              <span>My Bets</span>
            </li>
            <li className={`text-xs ${locationState?.state == "log" ? "text-[#fff] bg-[#0009]" : "text-black bg-white"} border-b border-[#eee1c0] w-full py-1 px-2 cursor-pointer`} onClick={() => navigate('/profile', { state: { state: 'log' } })}>
              <span>Activity Log</span>
            </li>
          </ul>
        </div>
        {(locationState?.state === null || locationState?.state == "profilePage") &&
          <div className='flex flex-col justify-start w-full lg:ml-[1rem] p-1 lg:p-0'>
            <h2 className='flex w-full text-[12px] leading-[20px] font-bold pt-[6px] mb-[6px]'>Account Details</h2>
            <div className='flex flex-col lg:flex-row justify-start items-start text-[11px]'>
              <div className='flex flex-col w-full'>
                <div className='mb-[15px] bg-[#fff] border-b border-[#7e97a7]'>
                  <h3 className='text-[#fff] text-[14px] font-bold p-[0_10px] bg-[#7e97a7] leading-[24px]'>About You</h3>
                  <ul className=''>
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
                        <span className='flex justify-center items-center text-[#2789ce] text-[13px] hover:underline cursor-pointer' onClick={showModal}>Edit <img src="/Images/edit-pen.png" alt="" className='pl-1  h-[15px]' /></span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='mb-[15px] bg-[#fff] border-b border-[#7e97a7]'>
                  <h3 className='text-[#fff] text-[14px] font-bold p-[0_10px] bg-[#7e97a7] leading-[24px]'>Address</h3>
                  <ul className=''>
                    <li className='flex border-b border-[#e0e6e6]'>
                      <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                        Address
                      </span>
                      <span className='min-h-[16px] p-[5px_0_5px_10px]'>
                        --
                      </span>
                    </li>
                    <li className='flex border-b border-[#e0e6e6]'>
                      <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                        Town/City
                      </span>
                      <span className='min-h-[16px] p-[5px_0_5px_10px]'>
                        --
                      </span>
                    </li>
                    <li className='flex border-b border-[#e0e6e6]'>
                      <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                        Country
                      </span>
                      <span className='min-h-[16px] p-[5px_0_5px_10px]'>
                        --
                      </span>
                    </li>
                    <li className='flex border-b border-[#e0e6e6]'>
                      <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                        Country/State
                      </span>
                      <span className='min-h-[16px] p-[5px_0_5px_10px]'>
                        --
                      </span>
                    </li>
                    <li className='flex border-b border-[#e0e6e6]'>
                      <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                        Postcode
                      </span>
                      <span className='min-h-[16px] p-[5px_0_5px_10px]'>
                        --
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
              <div className='flex flex-col lg:ml-[1rem] w-full'>
                <div className='mb-[15px] bg-[#fff] border-b border-[#7e97a7]'>
                  <h3 className='text-[#fff] text-[14px] font-bold p-[0_10px] bg-[#7e97a7] leading-[24px]'>Setting</h3>
                  <ul className=''>
                    <li className='flex border-b border-[#e0e6e6]'>
                      <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                        Currency
                      </span>
                      <span className='min-h-[16px] text-[13px] p-[5px_0_5px_10px]'>
                        PIN
                      </span>
                    </li>
                    <li className='flex border-b border-[#e0e6e6]'>
                      <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                        Odds Formate
                      </span>
                      <span className='min-h-[16px] p-[5px_0_5px_10px]'>
                        --
                      </span>
                    </li>
                  </ul>
                </div>
                <div className='mb-[15px] bg-[#fff] border-b border-[#7e97a7]'>
                  <h3 className='text-[#fff] text-[14px] font-bold p-[0_10px] bg-[#7e97a7] leading-[24px]'>Commission</h3>
                  <ul className=''>
                    <li className='flex border-b border-[#e0e6e6]'>
                      <span className='w-[135px] p-[5px_0_5px_10px] text-[#243a48]'>
                        Comm charged
                      </span>
                      <span className='min-h-[16px] text-[13px] p-[5px_0_5px_10px]'>
                        2.00%
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        }
        {locationState?.state == "summaryPage" &&
          <div className='flex flex-col justify-start w-full lg:ml-[1rem] p-1 lg:p-0'>
            <h2 className='flex w-full text-[12px] leading-[20px] font-bold pt-[6px] mb-[6px]'>Summary</h2>
            <div className='flex justify-between items-center p-[7px_10px_5px] mb-[15px] text-[#3b5160] w-full border-b border-[#7e97a7] bg-[#fff]'>
              <div className='flex flex-col justify-start mr-[10px] w-[31.3725%] border-r border-[#d8d8d8]'>
                <span className='text-[15px] font-bold mb-[7px]'>Your Balances</span>
                <span className='text-[30px] font-bold leading-[36px] text-[#2789ce]'>
                  {Math.abs(currentBalance).toFixed(2)}
                  <span className='text-[12px] text-[#7e97a7] font-normal ml-2'>PIN</span>
                </span>
              </div>
              <div>
                <h3 className='text-[15px] font-bold mb-[7px]'>Welcome,</h3>
                <p className='text-[13px] leading-[18px] mb-[5px] w-[85%]'>View your account details here. You can manage funds, review and change your settings and see the performance of your betting activity.
                </p>
              </div>
            </div>
            <table className="w-full text-[12px] text-[#1e1e1e] mb-[15px] border-b border-[#7e97a7]">
              <thead>
                <tr className="">
                  <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-left p-[8px_10px] border-y border-[#7e97a7]">Date</th>
                  <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-left p-[8px_10px] border-y border-[#7e97a7]">Transaction №</th>
                  <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-left p-[8px_10px] border-y border-[#7e97a7]">Debits</th>
                  <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-left p-[8px_10px] border-y border-[#7e97a7]">Credits</th>
                  <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-left p-[8px_10px] border-y border-[#7e97a7]">Balance</th>
                  <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-left p-[8px_10px] border-y border-[#7e97a7]">Remarks</th>
                  <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-left p-[8px_10px] border-y border-[#7e97a7]">From/To</th>
                </tr>
              </thead>
            </table>
          </div>}

        {locationState?.state == "accountStatement" &&
          <div className='flex flex-col justify-start w-full lg:ml-[1rem] p-1 lg:p-0'>
            <h2 className='flex w-full text-[12px] leading-[20px] font-bold pt-[6px] mb-[6px]'>Account Statement</h2>
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
            <h2 className='flex w-full text-[12px] leading-[20px] font-bold pt-[6px] mb-[6px]'>Activity Log</h2>
            <table className="w-full text-[12px] text-[#1e1e1e] mb-[15px] border-b border-[#7e97a7]">
              <thead>
                <tr className="">
                  <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-left p-[8px_10px] border-y border-[#7e97a7]">Login Date & Time</th>
                  <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-right p-[8px_10px] border-y border-[#7e97a7]">Login Status</th>
                  <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-right p-[8px_10px] border-y border-[#7e97a7]">IP Address</th>
                  <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-right p-[8px_10px] border-y border-[#7e97a7]">ISP</th>
                  <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-right p-[8px_10px] border-y border-[#7e97a7]">City/State/Country</th>
                  <th className="text-[#243a48] bg-[#e4e4e4] w-[13%] text-right p-[8px_10px] border-y border-[#7e97a7]">User Agent Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-[#fff] border-y border-[#7e97a7]'>
                  <td className='text-left p-[8px_10px]'>2025-08-06 11:31:37</td>
                  <td className='text-right p-[8px_10px] text-[#508d0e ]'>Login Success</td>
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
            <h2 className='flex w-full text-[12px] leading-[20px] font-bold pt-[6px] mb-[6px]'>My Bets</h2>
          </div>}
      </div>
    </>
  )
}

export default Profile