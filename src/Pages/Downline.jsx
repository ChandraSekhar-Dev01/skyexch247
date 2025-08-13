import React from 'react'

function Downline() {
  return (
    <>
      <div className='text-[12px] leading-[25px] text-[#fff] w-[1350px] m-[0_auto]'>
        {/* News Marquee */}
        <div className='flex h-[25px] mb-[1px] bg-repeat-x bg-[linear-gradient(180deg,_#2a3a43_27%,_#1c282d_83%)] rounded'>
          <h4 className='flex basis-[72px] justify-center items-center relative font-bold'>
            <img src="/Images/icon-news.png" alt="" className='block w-[17px] h-[17px] mr-[2px] bg-no-repeat' />
            News
            <img src="/Images/path_arrow_new.png" alt="" className='absolute right-[-7px] top-0 w-[7px] h-[25px] mr-[2px] bg-no-repeat' />
          </h4>
          <div className="flex-1 overflow-hidden z-1">
            <div className="marquee">
              <span className="flex items-center h-[25px] leading-[25px] font-bold text-[#6ac2ff] mr-[100px]">
                <span className="h-[15px] leading-[15px] text-[11px] italic font-normal text-[#1c2834] bg-[#6ac2ff] rounded-[2px] px-[5px] mr-[5px]">13 Aug 2025</span>
                Event :- Birmingham Phoenix v Oval Invincibles: Market :- 88 Ball Run BP .... Whole Market Voided Because Wrong Commentary .. Sorry for the Inconvenience Caused
              </span>
              <span className="flex items-center h-[25px] leading-[25px] font-bold text-[#6ac2ff] mr-[100px]">
                <span className="h-[15px] leading-[15px] text-[11px] italic font-normal text-[#1c2834] bg-[#6ac2ff] rounded-[2px] px-[5px] mr-[5px]">04 Sep 2021</span>
                WHITE LABEL OF SKYEXCHANGE IS AVAILABLE NOW - CONTACT YOUR UPLINE.
              </span>
            </div>
          </div>

        </div>
        <div className='m-[13px_0_10px_0] p-[0_5px]'>
          <div className='mr-[10px] relative float-left '>
            <span className="absolute z-[1] top-[50%] left-[2px] block w-[19px] h-[19px] ">
              <img src="/Images/search.svg" alt="" className='bg-no-repeat bg-contain translate-y-[-50%]' />
            </span>
            <div>
              <input type="text" placeholder='Find member...' className='w-[280px] h-[32px] border border-[#aaa] shadow-[inset_0px_2px_0px_rgba(0,_0,_0,_.1)] pl-[25px] p-[5px] text-[#1e1e1e] bg-[#fff] rounded ' />
              <button className="text-[#ffb600] bg-[#444] absolute top-[50%] right-[3px] w-max h-[25px] border-0 rounded-[2px] -translate-y-1/2 text-[13px] font-bold cursor-pointer px-[8px]">
                Search
              </button>

            </div>

          </div>
          <ul className='mb-0 mr-[20px] float-left text-[#1e1e1e] leading-[15px]'>
            <li className='leading-[32px] m-[0_5px_0_0] whitespace-nowrap float-left'>
              <strong className='leading-[32px]'>Status</strong>
            </li>
            <li className='leading-[32px] whitespace-nowrap float-left'>
              <select name="accountStatus" id="" className='h-[32px]  w-[120px] leading-[30px] m-0 cursor-pointer border border-[#000] rounded-sm'>
                <option value="0" className='p-[3px] text-[#222]'>ACTIVE</option>
                <option value="1" className='p-[3px] text-[#222]'>SUSPENDED</option>
                <option value="2" className='p-[3px] text-[#222]'>LOCKED</option>
                <option value="3" className='p-[3px] text-[#222]'>ALL</option>

              </select>
            </li>
          </ul>
          <ul className='mb-0 mr-[20px] float-left text-[#1e1e1e] leading-[15px]'>
            <li className='leading-[32px] m-[0_5px_0_0] whitespace-nowrap float-left'>
              <span className='p-[0_8px] h-[32px] w-[inherit] min-w-[95px] m-0 leading-[30px] font-bold bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] border border-[#bbb] rounded text-center block'>
                <img src="/Images/download.svg" alt="" className='w-[9px] h-[10px] bg-no-repeat bg-contain align-middle mr-[3px] inline-block' />
                Download CSV
              </span>
            </li>
          </ul>
          <div className='flex justify-center items-center bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] h-[32px] w-[32px] m-[0_0_0_10px] border border-[#bbb] rounded text-[#1e1e1e] font-bold leading-[23px] text-[12px] text-center float-right'>
            <img src="/Images/refresh-black.svg" alt="" className='h-[14px] bg-no-repeat bg-contain bg-center mr-0' />
          </div>
          <div className='m-0 leading-[30px] p-[0_15px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] border border-[#bbb] rounded text-[#1e1e1e] font-bold text-[12px] block text-center float-right align-middle'>
            <img src="/Images/add_member.png" alt="" className='bg-no-repeat h-[15px] w-[26px] mr-[3px] align-text-bottom inline-block' />
            Add Player
          </div>
        </div>
        <div className='flex justify-between w-full p-[7px_0_5px] mt-[64px] bg-[#fff] text-[#3b5160] border-b border-[#7e97a7] mb-[15px] leading-[15px]'>
          <dl className='flex-1 p-[0_10px] border-r border-[#d2d2d2]'>
            <dt className='text-[12px] m-[0_0_5px_0] text-[#9b9b9b]'>Total Balance</dt>
            <dd className='text-[15px] text-[#243a48] leading-[20px] font-bold'>PIN 206.70</dd>
          </dl>
          <dl className='flex-1 p-[0_10px] border-r border-[#d2d2d2]'>
            <dt className='text-[12px] m-[0_0_5px_0] text-[#9b9b9b]'>Total Exposure</dt>
            <dd className='text-[15px] text-[#243a48] leading-[20px] font-bold'>PIN 0.00</dd>
          </dl>
          <dl className='flex-1 p-[0_10px] border-r border-[#d2d2d2]'>
            <dt className='text-[12px] m-[0_0_5px_0] text-[#9b9b9b]'>Total Avail. bal.</dt>
            <dd className='text-[15px] text-[#243a48] leading-[20px] font-bold'>PIN 206.70</dd>
          </dl>
          <dl className='flex-1 p-[0_10px] border-r border-[#d2d2d2]'>
            <dt className='text-[12px] m-[0_0_5px_0] text-[#9b9b9b]'>Balance</dt>
            <dd className='text-[15px] text-[#243a48] leading-[20px] font-bold'>PIN 293.00</dd>
          </dl>
          <dl className='flex-1 p-[0_10px] border-r border-[#d2d2d2]'>
            <dt className='text-[12px] m-[0_0_5px_0] text-[#9b9b9b]'>Available Balance</dt>
            <dd className='text-[15px] text-[#243a48] leading-[20px] font-bold'>PIN 499.70</dd>
          </dl>
          <dl className='flex-1 p-[0_10px]'>
            <dt className='text-[12px] m-[0_0_5px_0] text-[#9b9b9b]'>Total Users</dt>
            <dd className='text-[15px] text-[#243a48] leading-[20px] font-bold'>2</dd>
          </dl>
        </div>
        <div className=''>
          <table className=' w-[1350px] bg-[#fff] text-[#1e1e1e] border-collapse border-y border-[#7e97a7] mb-[15px] text-right absolute h-[36px]'>
            <tbody>
              <tr>
                <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[3px_10px] text-left'>
                  Account
                </th>
                <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[3px_10px] text-right'>
                  Credit Ref.
                </th>
                <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[3px_10px] text-right'>
                  Balance
                </th>
                <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[3px_10px] text-right'>
                  Exposure
                </th>
                <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[3px_10px] text-right'>
                  Avail. bal.
                </th>
                <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[3px_10px] text-right'>
                  Exposure Limit
                </th>
                <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[3px_10px] text-right'>
                  Ref P/L
                </th>
                <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[3px_10px] text-right'>
                  Status
                </th>
                <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[3px_10px] text-right'>
                  Action
                </th>
              </tr>
              <tr>
                <td className='p-[8px] relative border-t border-[#eee] align-middle text-left'>
                  <span className='w-[30px] text-[#999] inline-block text-center align-middle'>1.</span>
                  <span className='align-middle inline-block bg-[#568bc8] w-[26px] h-[15px] leading-[15px] text-[#fff] rounded mr-[5px] text-[10px] text-center'>PL</span>
                  <span className="break-all w-[calc(100%-69px)] align-middle inline-block text-left">
                    jp1122user
                  </span>
                </td>
                <td className='block relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[26px]'>
                  <span className=' text-[#2789ce] flex text-right float-right'><span className='underline leading-[25px] pr-[2px]'>0.00</span><img src="/Images/icon-manage.png" alt="" className='bg-right bg-no-repeat' /></span>
                </td>
                <td className='relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[26px]'>
                  <span className='relative flex justify-end items-center text-[#2789ce]'>
                    206.70
                    <img src="/Images/plus-bal.svg" alt="" className='inline-block w-[15px] h-[15px] align-top bg-no-repeat bg-contain bg-center ml-[5px]' />
                  </span>
                </td>
                <td className='relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[26px]'>0.00</td>
                <td className='relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[26px]'>206.70</td>
                <td className='relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[26px]'>10,000.00</td>
                <td className='relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[26px]'>206.70</td>
                <td className='relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[15px]'>
                  <span className='align-middle inline-block bg-[#e5f1dc] border border-[#bedca7] text-[#508d0e] text-[11px] font-bold p-[2px_5px] rounded-[3px] text-right'>
                    <img src="/Images/icon-status-active.png" alt="" className='h-[8px] w-[8px] bg-no-repeat mr-[5px] inline-block' />
                    Active
                  </span>
                </td>
                <td className='relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[15px]'>
                  <ul className='block float-right'>
                    <li className='float-left'>
                      <span className='w-[26px] h-[26px] ml-[3px] float-right'>
                        <img src="/Images/p_l.png" alt="" />
                      </span>
                    </li>
                    <li className='float-left'>
                      <span className='w-[26px] h-[26px] ml-[3px] float-right'>
                        <img src="/Images/betting_history.png" alt="" />
                      </span>
                    </li>
                    <li className='float-left'>
                      <span className='w-[26px] h-[26px] ml-[3px] float-right'>
                        <img src="/Images/status.png" alt="" />
                      </span>
                    </li>
                    <li className='float-left'>
                      <span className='w-[26px] h-[26px] ml-[3px] float-right'>
                        <img src="/Images/person.png" alt="" />
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className='p-[8px] relative border-t border-[#eee] align-middle text-left'>
                  <span className='w-[30px] text-[#999] inline-block text-center align-middle'>2.</span>
                  <span className='align-middle inline-block bg-[#568bc8] w-[26px] h-[15px] leading-[15px] text-[#fff] rounded mr-[5px] text-[10px] text-center'>PL</span>
                  <span className="break-all w-[calc(100%-69px)] align-middle inline-block text-left">
                    userteam
                  </span>
                </td>
                <td className='block relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[26px]'>
                  <span className=' text-[#2789ce] flex text-right float-right'><span className='underline leading-[25px] pr-[2px]'>0.00</span><img src="/Images/icon-manage.png" alt="" className='bg-right bg-no-repeat' /></span>
                </td>
                <td className='relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[26px]'>
                  <span className='relative flex justify-end items-center text-[#2789ce]'>
                    206.70
                    <img src="/Images/plus-bal.svg" alt="" className='inline-block w-[15px] h-[15px] align-top bg-no-repeat bg-contain bg-center ml-[5px]' />
                  </span>
                </td>
                <td className='relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[26px]'>0.00</td>
                <td className='relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[26px]'>206.70</td>
                <td className='relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[26px]'>10,000.00</td>
                <td className='relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[26px]'>206.70</td>
                <td className='relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[15px]'>
                  <span className='align-middle inline-block bg-[#e5f1dc] border border-[#bedca7] text-[#508d0e] text-[11px] font-bold p-[2px_5px] rounded-[3px] text-right'>
                    <img src="/Images/icon-status-active.png" alt="" className='h-[8px] w-[8px] bg-no-repeat mr-[5px] inline-block' />
                    Active
                  </span>
                </td>
                <td className='relative p-[8px_10px] border-t border-[#eee] align-middle text-right leading-[15px]'>
                  <ul className='block float-right'>
                    <li className='float-left'>
                      <span className='w-[26px] h-[26px] ml-[3px] float-right'>
                        <img src="/Images/p_l.png" alt="" />
                      </span>
                    </li>
                    <li className='float-left'>
                      <span className='w-[26px] h-[26px] ml-[3px] float-right'>
                        <img src="/Images/betting_history.png" alt="" />
                      </span>
                    </li>
                    <li className='float-left'>
                      <span className='w-[26px] h-[26px] ml-[3px] float-right'>
                        <img src="/Images/status.png" alt="" />
                      </span>
                    </li>
                    <li className='float-left'>
                      <span className='w-[26px] h-[26px] ml-[3px] float-right'>
                        <img src="/Images/person.png" alt="" />
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <ul className='relative mt-[180px] mb-[30px] text-center'>
            <li className='leading-[25px] mr-[5px] inline-block'>
              <span className='bg-[#dfdfdf] text-[#999] inline-block font-normal m-0 p-[4px_10px] border border-[#bbb] rounded leading-[15px] text-[12px] text-center'>Prev</span>
            </li>
            <li className='leading-[25px] mr-[5px] inline-block'>
              <span className='bg-[#444] text-[#ffb600] inline-block font-normal m-0 p-[4px_10px] border border-[#222] rounded leading-[15px] text-[12px] text-center shadow-[inset_0_2px_0_0_rgba(0,_0,_0,_.1)]'>1</span>
            </li>
            <li className='leading-[25px] mr-[5px] inline-block'>
              <span className='bg-[#dfdfdf] text-[#999] inline-block font-normal m-0 p-[4px_10px] border border-[#bbb] rounded leading-[15px] text-[12px] text-center'>Next</span>
            </li>
            <input type="text" className='text-[#1e1e1e] text-[12px] bg-[#fff] p-[5px] m-[0_5px_5px_0] w-[65px] rounded shadow-[inset_0px_1px_0px_rgba(0,_0,_0,_.5)] leading-[15px]' />
            <span className="inline-block font-normal m-0 py-[4px] px-[10px] bg-[linear-gradient(180deg,#ffffff_0%,#eeeeee_89%)] shadow-[inset_0_2px_0_0_rgba(255,255,255,0.5)] rounded text-[#1e1e1e] leading-[15px] text-[12px] text-center border border-[#bbb]">
              GO
            </span>

          </ul>
        </div>

        {/* Footer */}
        <div className='sticky bottom-0 w-full z-[51]'>
          <div className='relative w-[1350px] m-[0_auto] bg-[#eee] border-t border-[#d4d4d4]'>
            <ul className='m-[0_auto] p-[5px_0] float-right text-[11px] flex text-[#1e1e1e]'>
              <li className='h-[26px] text-[11px] flex'>
                <img src="/Images/bank.png" alt="" className='' />
                <p className='leading-[11px] pt-[7px] mr-[20px] ml-[5px] mb-[7px]'>Bank</p>
              </li>
              <li className='h-[26px] text-[11px] flex'>
                <img src="/Images/p_l.png" alt="" />
                <p className='leading-[11px] pt-[7px] mr-[20px] ml-[5px] mb-[7px]'>Betting Profit & Loss</p>
              </li>
              <li className='h-[26px] text-[11px] flex'>
                <img src="/Images/betting_history.png" alt="" />
                <p className='leading-[11px] pt-[7px] mr-[20px] ml-[5px] mb-[7px]'>Betting History</p>
              </li>
              <li className='h-[26px] text-[11px] flex'>
                <img src="/Images/Person.png" alt="" />
                <p className='leading-[11px] pt-[7px] mr-[20px] ml-[5px] mb-[7px]'>Profile</p>
              </li>
              <li className='h-[26px] text-[11px] flex'>
                <img src="/Images/status.png" alt="" />
                <p className='leading-[11px] pt-[7px] mr-[20px] ml-[5px] mb-[7px]'>Change Status</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Downline