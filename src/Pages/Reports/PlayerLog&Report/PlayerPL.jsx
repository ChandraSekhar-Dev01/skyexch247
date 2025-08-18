import React, { useState } from 'react'

function PlayerPL() {
  const [selectMarket, setSelectMarket] = useState("1");
  return (
    <>
      <h2 className='flex w-full text-[13px] text-[#243a48] leading-[20px] font-bold pt-[6px] mb-[6px]'>Profit & Loss</h2>
      <div className=' my-[15px] text-[12px] text-[#3b5160] leading-[15px]'>
        <ul className='flex mb-[5px] leading-[15px]'>
          <li className='flex justify-start gap-1 items-center mr-[15px]'>
            <input type="text" placeholder='enter userId...' className='h-[32px] m-[0_5px_0_5px] text-[#1e1e1e] text-[12px] bg-[#fff] rounded p-[5px] box-border border border-[#aaa] shadow-[inset_0px_2px_0px_#0000001a]' />
          </li>
        </ul>
        {/* Select Market Type Section */}
        <ul className='mt-[16px] relative text-[15px] font-bold leading-[15px]'>
          <span className='absolute bottom-0 left-0 w-full h-[4px]  bg-[#3b5160]'></span>
          <li className={`inline-block ${selectMarket == '1' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("1"); }}>Exchange</li>
          <li className={`inline-block ${selectMarket == '2' ? "text-[#fff] bg-[#3b5160]" : "text-[#3b5160] bg-[#fff]"} p-[5px_10px_9px] border border-[#3b5160] rounded-[3px_3px_0_0] cursor-pointer mr-1`} onClick={() => { setSelectMarket("2"); }}>FancyBet</li>
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
        <div className='text-[12px] text-[#1e1e1e]'>
          <p className='mb-[7px]'>
            Betting Profit & Loss enables you to review the bets you have placed. <br />
            Specify the time period during which your bets were placed, the type of markets on which the bets were placed, and the sport.
          </p>
          <p className='mb-[7px]'>Betting Profit & Loss is available online for the past 62 days.</p>
          <p className='mb-[7px]'>User can search up to 14 days records per query only .</p>
        </div>
      </div>
    </>
  )
}

export default PlayerPL