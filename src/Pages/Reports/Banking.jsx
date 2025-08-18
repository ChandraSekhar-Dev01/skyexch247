import React from 'react'

function Banking() {
  return (
    <>
      <div className="relative min-w-[1350px] max-w-[calc(100%-40px)] h-[calc(100%-105px)] my-0 mx-auto text-[12px] text-[#1e1e1e] leading-[15px]">
        <h2 className='flex w-full text-[13px] text-[#243a48] leading-[20px] font-bold pt-[6px] mb-[6px]'>Banking</h2>
        <div className="flex items-center m-[13px_0_10px_0] p-[0_5px]">
          <div className="mr-[10px] relative">
            <span
              className="absolute z-[1] top-[50%] left-[2px] block w-[19px] h-[19px] bg-no-repeat bg-contain"
              style={{
                backgroundImage: "url('/Images/search.svg')",
                transform: "translateY(-50%)"
              }}
            ></span>
            <div>
              <input
                type="text"
                className="w-[280px] h-[32px] pl-[25px] text-[12px] text-[#1e1e1e] rounded p-[5px] border border-[#aaa] shadow-[inset_0px_2px_0px_#0000001a]"
              />
            </div>
          </div>

          <ul className="flex mb-0 mr-[20px]">
            <li className="m-[0_5px_0_0] leading-[32px] whitespace-nowrap">
              <span className="w-max p-[0_8px] h-[32px] leading-[30px] box-border font-bold min-w-[95px] text-[#ffb600] border border-[#222] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] shadow-[initial] text-center block rounded">
                Search
              </span>
            </li>
          </ul>
          <ul className="flex mb-0 mr-[20px] float-left">
            <li className="m-[0_5px_0_0] leading-[32px] whitespace-nowrap block float-left">
              <strong className='leading-[32px]'>Status</strong>
            </li>
            <li className="m-0 leading-[32px] whitespace-nowrap block float-left">
              <select name="" id="" className='h-[32px] leading-[30px] m-0 w-[120px] border border-[#767676] rounded-sm cursor-pointer'>
                <option value="0" className='p-[3px] text-[#222]'>ACTIVE</option>
                <option value="1" className='p-[3px] text-[#222]'>SUSPENDED</option>
                <option value="2" className='p-[3px] text-[#222]'>LOCKED</option>
                <option value="-1" className='p-[3px] text-[#222]'>ALL</option>
              </select>
            </li>
            <span className='block clear-both'></span>
          </ul>
          <span className='block clear-both'></span>
        </div>
        <div className='h-[calc(100%-208px)] overflow-auto'>
          <div className='block clear-both relative p-[10px_10px_0] bg-[#e0e6e6] border-b border-[#7e97a7] mb-[10px]'>
            <dl className='mb-[10px] float-left'>
              <dt className='text-[13px] font-bold text-[#3b5160] pr-[10px] mr-[-5px] border-r border-[#7e97a7] leading-[30px] align-top inline-block'>Your Balance</dt>
              <dd className='h-[30px] text-[23px] font-bold pl-[10px] leading-[30px] align-top inline-block'>
                <span className=' block float-left text-[13px] leading-[15px] font-normal text-[#3b5160] m-[8px_5px_0_0]'>PIN</span>
                293.00
                <span className='block clear-both'></span>
              </dd>
            </dl>
            <span className='block clear-both'></span>
          </div>
          <table className='table-fixed mb-0 w-full bg-[#fff] border-collapse border-b border-[#7e97a7] text-right'>
            <colgroup>
              <col span="1" width="190" />
              <col span="1" width="120" />
              <col span="1" width="120" />
              <col span="1" width="120" />

              <col span="1" width="220" />

              <col span="1" width="280" />
              <col span="1" width="230" />
              <col span="1" width="200" />
              <col span="1" width="120" />
              <col span="1" width="80" />
            </colgroup>
            <tbody>
              <tr>
                <th className='p-[4px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-left'>
                  UID
                  <span className='h-[7px] w-[11px] inline-block'
                    style={{
                      backgroundImage: "url('/Images/arrow-sort_this.png')",
                    }}></span>
                </th>
                <th className='p-[4px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-right'>
                  Balance
                </th>
                <th className='p-[4px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-right'>
                  Available D/W
                </th>
                <th className='p-[4px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-right'>
                  Exposure
                </th>
                <th className='p-[4px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border border-[#7e97a7] text-right'>
                  <span className='inline-block leading-[28px] w-full align-middle'>
                    Check Balance
                    <span className='p-[0_5px] w-fit float-left mr-[5px] h-[28px] leading-[28px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] border border-[#bbb] rounded text-[#1e1e1e] font-bold text-[12px] block text-center'>Check</span>
                  </span>
                </th>
                <th className='p-[4px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-r border-[#7e97a7] text-center'>
                  Deposit / Withdraw
                </th>
                <th className='p-[4px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7]'>
                  Credit Reference
                </th>
                <th className='p-[4px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-r border-[#7e97a7]'>
                  Reference P/L
                </th>
                <th className='p-[4px_10px] leading-[15px] text-[#243a48] bg-[#e4e4e4] border-y border-r border-[#7e97a7]'>
                  Remark
                </th>
                <th className='p-[4px_10px] leading-[30px] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] text-left'>
                  <span className='block w-[58px] h-[28px] leading-[28px] float-right m-0 text-[11px] text-[#ffb600] border border-[#222] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] shadow-[initial] rounded font-bold text-center'>All Log</span>
                </th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-[#eee] align-middle text-left'>
                  <span className='w-[30px] text-[#999] inline-block text-center align-middle'>1.</span>
                  <span className='w-[30px] inline-block text-left align-middle'>jp1122user</span>
                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-[#eee] align-middle'>
                  <span className='relative flex justify-end items-center text-[#2789ce]'>
                    206.70
                    <span className='inline-block w-[15px] h-[15px] align-top bg-no-repeat bg-center bg-contain ml-[5px]' style={{
                      backgroundImage: "url('/Images/plus-bal.svg')"
                    }}></span>
                  </span>
                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-[#eee] align-middle'>
                  206.70
                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-[#eee] align-middle'>
                  0.00
                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-t-[#eee] border-x border-x-[#7e97a7] align-middle'>

                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-t-[#eee] border-x border-x-[#7e97a7] align-middle text-left'>
                  <ul className='relative block float-left'>
                    <li className='block float-left'>
                      <span className='block text-center w-[30px] text-[14px] font-bold text-[#3b5160] h-[28px] leading-[28px] float-left m-0 bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] rounded-[4px_0_0_4px] border border-[#bbb] rounded-r-[0px]'>D</span>
                    </li>
                    <li className='block float-left'>
                      <span className='block text-center w-[30px] text-[14px] font-bold text-[#3b5160] h-[28px] leading-[28px] float-left m-0 bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] rounded-[0_4px_4px_0] border border-[#bbb] rounded-l-[0px]'>W</span>
                    </li>
                    <span className='block clear-both'></span>
                  </ul>
                  <input type="text" placeholder='0' className='w-[calc(100%-63px-47px-14px)] h-[30px] text-[13px] font-bold text-right float-left text-[#1e1e1e]  bg-[#fff] rounded box-border m-[0_7px] border border-[#aaa] p-[4px_5px] shadow-[inset_0px_2px_0px_#0000001a]' />
                  <span className='w-[45px] h-[28px] leading-[28px] bg-[#dfdfdf] text-[#999] shadow-none cursor-none float-left m-0 rounded border border-[#bbb] font-bold text-[12px] block text-center'>Full</span>
                  <span className='block clear-both'></span>
                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-[#eee] align-middle text-right'>
                  <span className='underline text-[#2789ce]'>0.00</span>
                  <span className='w-[48px] h-[28px] leading-[28px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] text-[#1e1e1e] shadow-[inset_0_2px_0_0_#ffffff80] float-right ml-[7px] rounded border border-[#bbb] font-bold text-[12px] block text-center cursor-pointer'>Edit</span>
                  <span className='block clear-both'></span>
                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-t-[#eee] border-r border-r-[#7e97a7] align-middle text-right'>206.70</td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-t-[#eee] border-r border-r-[#7e97a7] align-middle text-right'>
                  <input type="text" placeholder='Remark' className='w-full border border-[#aaa] p-[4px_5px] shadow-[inset_0px_2px_0px_#0000001a] m-0 h-[30px] text-right text-[#1e1e1e] text-[12px] bg-[#fff] rounded box-border' />
                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-t-[#eee] border-r border-r-[#7e97a7] align-middle text-right'>
                  <span className='w-[58px] h-[28px] leading-[28px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] text-[#1e1e1e] shadow-[inset_0_2px_0_0_#ffffff80] float-right ml-[7px] rounded border border-[#bbb] font-bold text-[12px] block text-center cursor-pointer'>Log</span>
                </td>
              </tr>
              <tr>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-[#eee] align-middle text-left'>
                  <span className='w-[30px] text-[#999] inline-block text-center align-middle'>2.</span>
                  <span className='w-[30px] inline-block text-left align-middle'>userteam</span>
                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-[#eee] align-middle'>
                  <span className='relative flex justify-end items-center text-[#2789ce]'>
                    0.00
                    <span className='inline-block w-[15px] h-[15px] align-top bg-no-repeat bg-center bg-contain ml-[5px]' style={{
                      backgroundImage: "url('/Images/plus-bal.svg')"
                    }}></span>
                  </span>
                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-[#eee] align-middle'>
                  0.00
                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-[#eee] align-middle'>
                  0.00
                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-t-[#eee] border-x border-x-[#7e97a7] align-middle'>

                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-t-[#eee] border-x border-x-[#7e97a7] align-middle text-left'>
                  <ul className='relative block float-left'>
                    <li className='block float-left'>
                      <span className='block text-center w-[30px] text-[14px] font-bold text-[#3b5160] h-[28px] leading-[28px] float-left m-0 bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] rounded-[4px_0_0_4px] border border-[#bbb] rounded-r-[0px]'>D</span>
                    </li>
                    <li className='block float-left'>
                      <span className='block text-center w-[30px] text-[14px] font-bold text-[#3b5160] h-[28px] leading-[28px] float-left m-0 bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] rounded-[0_4px_4px_0] border border-[#bbb] rounded-l-[0px]'>W</span>
                    </li>
                    <span className='block clear-both'></span>
                  </ul>
                  <input type="text" placeholder='0' className='w-[calc(100%-63px-47px-14px)] h-[30px] text-[13px] font-bold text-right float-left text-[#1e1e1e]  bg-[#fff] rounded box-border m-[0_7px] border border-[#aaa] p-[4px_5px] shadow-[inset_0px_2px_0px_#0000001a]' />
                  <span className='w-[45px] h-[28px] leading-[28px] bg-[#dfdfdf] text-[#999] shadow-none cursor-none float-left m-0 rounded border border-[#bbb] font-bold text-[12px] block text-center'>Full</span>
                  <span className='block clear-both'></span>
                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-[#eee] align-middle text-right'>
                  <span className='underline text-[#2789ce]'>0.00</span>
                  <span className='w-[48px] h-[28px] leading-[28px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] text-[#1e1e1e] shadow-[inset_0_2px_0_0_#ffffff80] float-right ml-[7px] rounded border border-[#bbb] font-bold text-[12px] block text-center cursor-pointer'>Edit</span>
                  <span className='block clear-both'></span>
                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-t-[#eee] border-r border-r-[#7e97a7] align-middle text-right'>206.70</td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-t-[#eee] border-r border-r-[#7e97a7] align-middle text-right'>
                  <input type="text" placeholder='Remark' className='w-full border border-[#aaa] p-[4px_5px] shadow-[inset_0px_2px_0px_#0000001a] m-0 h-[30px] text-right text-[#1e1e1e] text-[12px] bg-[#fff] rounded box-border' />
                </td>
                <td className='relative p-[4px_10px] leading-[25px] border-t border-t-[#eee] border-r border-r-[#7e97a7] align-middle text-right'>
                  <span className='w-[58px] h-[28px] leading-[28px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] text-[#1e1e1e] shadow-[inset_0_2px_0_0_#ffffff80] float-right ml-[7px] rounded border border-[#bbb] font-bold text-[12px] block text-center cursor-pointer'>Log</span>
                </td>
              </tr>
            </tbody>
          </table>
          {/* Pagination div */}
          <div>
            <ul className='relative m-[25px_0] text-center'>
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
        </div>
        <div className='sticky w-full bottom-0 z-[51] p-[10px_0] bg-[#eee] text-center'>
          <ul>
            <li className='align-middle inline-block'>
              <span className='w-[130px] h-[35px] m-0 p-0 leading-[33px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] text-[#1e1e1e] shadow-[inset_0_2px_0_0_#ffffff80] ml-[7px] rounded border border-[#bbb] font-bold text-[14px] block text-center cursor-pointer'>Clear All</span>
            </li>
            <li className='bg-[#c5d0d7] rounded-md p-[5px] ml-[10px] align-middle inline-block'>
              <input type="password" placeholder='Password' className='inline w-[180px] h-[35px] leading-[35px] text-[14px] m-0 p-0 text-center text-[#1e1e1e] bg-[#fff] shadow-[inset_0px_1px_0px_#00000080] rounded box-border' />
              <span className='w-[228px] ml-[5px] leading-[33px] text-[14px] m-0 inline-block text-[#ffb600] border border-[#222] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] rounded font-bold text-center'>
                Submit
                <span className="w-[24px] h-[24px] text-white font-normal text-[12px] leading-[24px] rounded-full align-top mt-[4px] mx-1 bg-[#ffffff33] inline-block">
                  0
                </span>
                Payment
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Banking