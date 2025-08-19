import React from 'react'

function BalanceLog() {
  return (
    <>
      <div className="relative min-w-[1350px] max-w-[calc(100%-40px)] h-[calc(100%-105px)] my-0 mx-auto text-[12px] text-[#1e1e1e] leading-[15px]">
        <h2 className='flex w-full text-[13px] text-[#243a48] leading-[20px] font-bold pt-[6px] mb-[6px]'>Balance log</h2>
        <div>
          <div className='relative p-[10px_10px_0] bg-[#e0e6e6] border-b border-[#7e97a7] mb-[10px]'>
            <ul className='mb-0 mr-[5px] block'>
              <li className='leading-[25px] m-[0_5px_5px_0] whitespace-nowrap block float-left'>
                eventId:
                <input type="text" placeholder="enter eventId..." className='text-[#1e1e1e] text-[12px] bg-[#fff] shadow-[inset_0px_1px_0px_#00000080] rounded-[4px] p-[5px] m-[0_5px_5px_0] box-border leading-[15px]' />
              </li>
              <li className='leading-[25px] m-[0_5px_5px_0] whitespace-nowrap block float-left'>
                marketId:
                <input type="text" placeholder="enter eventId..." className='text-[#1e1e1e] text-[12px] bg-[#fff] shadow-[inset_0px_1px_0px_#00000080] rounded-[4px] p-[5px] m-[0_5px_5px_0] box-border leading-[15px]' />
              </li>
              <li className='leading-[25px] m-[0_5px_5px_0] whitespace-nowrap block float-left'>
                <span className='align-top'>*userId:</span>
                <textarea type="text" cols={30} rows={3} placeholder="enter userId..." className='text-[#1e1e1e] text-[12px] bg-[#fff] shadow-[inset_0px_1px_0px_#00000080] rounded-[4px] p-[5px] m-[0_5px_5px_0] box-border leading-[15px]' />
              </li>
              <li className='leading-[25px] m-[0_5px_5px_0] whitespace-nowrap block float-left'>
                From:
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
              <li className='leading-[25px] m-[0_5px_5px_0] whitespace-nowrap block float-left'>
                <span className='font-bold text-[12px] leading-[23px] min-w-[95px] m-0 text-[#ffb600] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] border border-[#222] shadow-[initial] block text-center rounded'>Submit</span>
              </li>
              <span className='block clear-both'></span>
            </ul>
          </div>
        </div>
        <table className='mb-[15px] w-full bg-[#fff] border-collapse border-b border-[#7e97a7] text-right'>
          <tbody>
            <tr>
              <th className='p-[8px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-center'>UserId</th>
              <th className='p-[8px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-center'>Site</th>
              <th className='p-[8px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-center'>EventId</th>
              <th className='p-[8px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-center'>EventName</th>
              <th className='p-[8px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-center'>MarketId</th>
              <th className='p-[8px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-center'>MarketName</th>
              <th className='p-[8px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-center'>categoryType</th>
              <th className='p-[8px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-center'>Before Total Balance</th>
              <th className='p-[8px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-center'>After Total Balance</th>
              <th className='p-[8px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-center'>profitLoss</th>
              <th className='p-[8px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-center'>remark</th>
              <th className='p-[8px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-center'>createDate</th>

            </tr>
          </tbody>
          <tbody id="content"></tbody>
        </table>
      </div>
    </>
  )
}

export default BalanceLog