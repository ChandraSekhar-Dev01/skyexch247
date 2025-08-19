import React from 'react'

function RiskManagement() {
  return (
    <>
      <div className="relative min-w-[1350px] max-w-[calc(100%-40px)] h-[calc(100%-105px)] my-0 mx-auto text-[12px] text-[#1e1e1e] leading-[15px]">
        <div className="m-[13px_0_10px_0] p-[0_5px]">
          <h2 className='block font-bold text-[16px] text-[#243a48] float-left leading-[20px] pt-[2px] mt-[6px]'>Risk Management Summary</h2>
          <span className='flex justify-center items-center h-[32px] w-[32px] m-[0_0_0_10px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] border border-[#bbb] rounded text-[#1e1e1e] font-bold leading-[23px] text-[12px] box-border text-center float-right cursor-pointer'>
            <img src="/Images/refresh-black.svg" alt="" className='m-0 h-[14px] bg-no-repeat bg-center bg-contain' />
          </span>
          <span className='block clear-both'></span>
        </div>
        <div className='mb-[20px]'>
          <div className='w-[calc(100%-467px-15px)] mr-[15px] mb-0 bg-[#fff] border-b border-[#7e97a7] float-left'>
            <h3 className='relative h-[25px] bg-[linear-gradient(180deg,_#2d4a5c_0%,_#203846_100%)] shadow-[0_2px_0_#0000001a] bg-[initial] text-[#fff] text-[12px] leading-[25px] font-normal pl-[10px] block'>
              <ul className='absolute top-[-3px] left-[12px] block'>
                <li className='h-[30px] z-[2] relative leading-[28px] font-bold p-[0_19px_0_5px] ml-[-12px] block float-left'>
                  <img src="/Images/bg-topplay-L-select.png" alt="" className='bg-no-repeat h-[30px] w-[5px] absolute left-0 block' />
                  <span className='text-[#254d6a] bg-repeat-x block h-full pl-[10px] cursor-pointer' style={{ backgroundImage: "url('/Images/bg-topplay-select.png')", }}>Top 10 Matched Amount Player</span>
                  <img src="/Images/bg-topplay-R-select.png" alt="" className='bg-no-repeat h-[30px] w-[19px] absolute top-0 right-0 block' />
                </li>
                <li className='relative h-[28px] leading-[28px] font-bold p-[0_19px_0_5px] ml-[-12px] block float-left'>
                  <img src="/Images/bg-topplay-L.png" alt="" className='absolute left-0 bg-no-repeat h-[28px] w-[5px] block' />
                  <span className='text-[#fff] bg-repeat-x block h-full pl-[10px] cursor-pointer' style={{ backgroundImage: "url('/Images/bg-topplay.png')", }}>Top 10 Exposure Player</span>
                  <img src="/Images/bg-topplay-R.png" alt="" className='bg-no-repeat h-[28px] w-[19px] absolute top-0 right-0 block' />
                </li>
                <span className='block clear-both'></span>
              </ul>
            </h3>
            <div className='w-[50%] float-left inline break-all'>
              <ul className='bg-[#ced5da] p-[0_10px] shadow-[inset_0_2px_0_#0000001a] block'>
                <li className='w-[calc(100%-100px-130px)] text-left p-[5px_0] block float-left'>UID</li>
                <li className='w-[100px] text-right p-[5px_0] block float-left'>Exposure</li>
                <li className='w-[130px] text-right p-[5px_0] block float-left'>
                  Matched Amount
                  <span className='bg-no-repeat h-[7px] w-[11px] inline-block ' style={{ backgroundImage: "url('/Images/arrow-sort_this.png')", }}></span>
                </li>
                <span className='block clear-both'></span>
              </ul>
              <table className='mb-0 w-full bg-[#fff] border-collapse border-b border-b-[#7e97a7] border-r border-r-[#eee] text-right'>
                <tbody>
                  <tr>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='w-[50%] float-left inline break-all'>
              <ul className='bg-[#ced5da] p-[0_10px] shadow-[inset_0_2px_0_#0000001a] block'>
                <li className='w-[calc(100%-100px-130px)] text-left p-[5px_0] block float-left'>UID</li>
                <li className='w-[100px] text-right p-[5px_0] block float-left'>Exposure</li>
                <li className='w-[130px] text-right p-[5px_0] block float-left'>
                  Matched Amount
                  <span className='bg-no-repeat h-[7px] w-[11px] inline-block ' style={{ backgroundImage: "url('/Images/arrow-sort_this.png')", }}></span>
                </li>
                <span className='block clear-both'></span>
              </ul>
              <table className='mb-0 w-full bg-[#fff] border-collapse border-b border-b-[#7e97a7] border-r border-r-[#eee] text-right'>
                <tbody>
                  <tr>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                  </tr>
                  <tr>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                    <td className='relative p-[8px_10px] align-middle border-t border-[#eee]'>&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <span className='block clear-both'></span>
          </div>
          <span className='block clear-both'></span>
        </div>
        {/* Match Odds */}
        <div className='bg-[#dddcd7] shadow-[0_2px_0_0_#fff,_inset_0_2px_0_0_#0000001a] rounded-[5px] p-[7px_10px_5px] mb-[25px]'>
          <div className='m-[0_0_5px] p-[0_5px]'>
            <h2 className='block font-bold text-[16px] text-[#243a48] float-left leading-[20px] pt-[2px] mt-[6px]'>Match Odds</h2>
            <span className='flex justify-center items-center h-[32px] w-[32px] m-[0_0_0_10px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] box-border text-center float-right rounded border border-[#bbb]'>
              <img src="/Images/refresh-black.svg" alt="" className='m-0 h-[14px] bg-no-repeat bg-center bg-contain' />
            </span>

            <span className='block clear-both'></span>
          </div>
          <table className='mb-[10px] w-full bg-[#fff] border-collapse border-b border-[#7e97a7] text-right'>
            <tbody>
              <tr>
                <th rowSpan={2} className='w-[10%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Sports</th>
                <th rowSpan={2} className='w-[7%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Market Date</th>
                <th rowSpan={2} className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Event/Market Name</th>
                <th colSpan={3} className='w-[21%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-center'>Player P/L</th>
                <th rowSpan={2} className='w-[6%] text-[#243a48] bg-[#e4e4e4]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-center'>Downline P/L</th>
              </tr>
              <tr>
                <th className='w-[7%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-center'>1</th>
                <th className='w-[7%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] p-[8px_10px] text-center'>X</th>
                <th className='w-[7%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] p-[8px_10px] text-center'>2</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={7} className='relative leading-[25px] border-t border-[#eee] align-middle text-left bg-[#fff] p-[10px_10px_5px]'>
                  <p>No Data</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className='mb-[10px] w-full bg-[#fff] border-collapse border-b border-[#7e97a7] text-right'>
            <tbody>
              <tr>
                <th rowSpan={2} className='w-[10%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Sports</th>
                <th rowSpan={2} className='w-[8%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Market Date</th>
                <th rowSpan={2} className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Event/Market Name</th>
                <th colSpan={3} className='w-[18%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-center'>Player P/L</th>
                <th rowSpan={2} className='w-[6%] text-[#243a48] bg-[#e4e4e4]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-center'>Downline P/L</th>
              </tr>
              <tr>
                <th className='w-[9%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-right'>1</th>
                <th className='w-[9%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] p-[8px_10px] text-right'>2</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={7} className='relative leading-[25px] border-t border-[#eee] align-middle text-left bg-[#fff] p-[10px_10px_5px]'>
                  <p>No Data</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Book Maker */}
        <div className='bg-[#dddcd7] shadow-[0_2px_0_0_#fff,_inset_0_2px_0_0_#0000001a] rounded-[5px] p-[7px_10px_5px] mb-[25px]'>
          <div className='m-[0_0_5px] p-[0_5px]'>
            <h2 className='block font-bold text-[16px] text-[#243a48] float-left leading-[20px] pt-[2px] mt-[6px]'>Book Maker</h2>
            <span className='flex justify-center items-center h-[32px] w-[32px] m-[0_0_0_10px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] box-border text-center float-right rounded border border-[#bbb]'>
              <img src="/Images/refresh-black.svg" alt="" className='m-0 h-[14px] bg-no-repeat bg-center bg-contain' />
            </span>

            <span className='block clear-both'></span>
          </div>
          <table className='mb-[10px] w-full bg-[#fff] border-collapse border-b border-[#7e97a7] text-right'>
            <tbody>
              <tr>
                <th rowSpan={2} className='w-[10%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Sports</th>
                <th rowSpan={2} className='w-[7%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Market Date</th>
                <th rowSpan={2} className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Event/Market Name</th>
                <th colSpan={3} className='w-[21%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-center'>Player P/L</th>
                <th rowSpan={2} className='w-[6%] text-[#243a48] bg-[#e4e4e4]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-center'>Downline P/L</th>
              </tr>
              <tr>
                <th className='w-[7%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-center'>1</th>
                <th className='w-[7%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] p-[8px_10px] text-center'>X</th>
                <th className='w-[7%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] p-[8px_10px] text-center'>2</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={7} className='relative leading-[25px] border-t border-[#eee] align-middle text-left bg-[#fff] p-[10px_10px_5px]'>
                  <p>No Data</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table className='mb-[10px] w-full bg-[#fff] border-collapse border-b border-[#7e97a7] text-right'>
            <tbody>
              <tr>
                <th rowSpan={2} className='w-[10%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Sports</th>
                <th rowSpan={2} className='w-[8%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Market Date</th>
                <th rowSpan={2} className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Event/Market Name</th>
                <th colSpan={3} className='w-[18%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-center'>Player P/L</th>
                <th rowSpan={2} className='w-[6%] text-[#243a48] bg-[#e4e4e4]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-center'>Downline P/L</th>
              </tr>
              <tr>
                <th className='w-[9%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-right'>1</th>
                <th className='w-[9%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] p-[8px_10px] text-right'>2</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={7} className='relative leading-[25px] border-t border-[#eee] align-middle text-left bg-[#fff] p-[10px_10px_5px]'>
                  <p>No Data</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Fancy Bet */}
        <div className='bg-[#dddcd7] shadow-[0_2px_0_0_#fff,_inset_0_2px_0_0_#0000001a] rounded-[5px] p-[7px_10px_5px] mb-[25px]'>
          <div className='m-[0_0_5px] p-[0_5px]'>
            <h2 className='block font-bold text-[16px] text-[#243a48] float-left leading-[20px] pt-[2px] mt-[6px]'>Fancy Bet</h2>
            <span className='flex justify-center items-center h-[32px] w-[32px] m-[0_0_0_10px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] box-border text-center float-right rounded border border-[#bbb]'>
              <img src="/Images/refresh-black.svg" alt="" className='m-0 h-[14px] bg-no-repeat bg-center bg-contain' />
            </span>

            <span className='block clear-both'></span>
          </div>
          <table className='mb-[10px] w-full bg-[#fff] border-collapse border-b border-[#7e97a7] text-right'>
            <tbody>
              <tr>
                <th rowSpan={2} className='w-[10%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Sports</th>
                <th rowSpan={2} className='w-[7%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Market Date</th>
                <th rowSpan={2} className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Event/Market Name</th>
                <th colSpan={3} className='w-[21%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-center'>Player P/L</th>
                <th rowSpan={2} className='w-[6%] text-[#243a48] bg-[#e4e4e4]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-center'>Books</th>
              </tr>
              <tr>
                <th className='w-[9%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] border-l border-l-[#7e97a7] p-[8px_10px] text-right'>MIN</th>
                <th className='w-[9%] text-[#243a48] bg-[#f3dfb0]  border-y border-y-[#7e97a7] p-[8px_10px] text-right'>MAX</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={7} className='relative leading-[25px] border-t border-[#eee] align-middle text-left bg-[#fff] p-[10px_10px_5px]'>
                  <p>No Data</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Sports Book */}
        <div className='bg-[#dddcd7] shadow-[0_2px_0_0_#fff,_inset_0_2px_0_0_#0000001a] rounded-[5px] p-[7px_10px_5px] mb-[25px]'>
          <div className='m-[0_0_5px] p-[0_5px]'>
            <h2 className='block font-bold text-[16px] text-[#243a48] float-left leading-[20px] pt-[2px] mt-[6px]'>Sports Book</h2>
            <span className='flex justify-center items-center h-[32px] w-[32px] m-[0_0_0_10px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] box-border text-center float-right rounded border border-[#bbb]'>
              <img src="/Images/refresh-black.svg" alt="" className='m-0 h-[14px] bg-no-repeat bg-center bg-contain' />
            </span>

            <span className='block clear-both'></span>
          </div>
          <table className='mb-[10px] w-full bg-[#fff] border-collapse border-b border-[#7e97a7] text-right'>
            <tbody>
              <tr>
                <th className='w-[10%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Sports</th>
                <th className='w-[8%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Market Date</th>
                <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Event/Market Name</th>
                <th className='w-[26%] text-[#243a48] bg-[#e4e4e4]  border-y border-y-[#7e97a7] p-[8px_10px]'>Matched Amount</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={4} className='relative leading-[25px] border-t border-[#eee] align-middle text-left bg-[#fff] p-[10px_10px_5px]'>
                  <p>No Data</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Premium Cricket */}
        <div className='bg-[#dddcd7] shadow-[0_2px_0_0_#fff,_inset_0_2px_0_0_#0000001a] rounded-[5px] p-[7px_10px_5px] mb-[25px]'>
          <div className='m-[0_0_5px] p-[0_5px]'>
            <h2 className='block font-bold text-[16px] text-[#243a48] float-left leading-[20px] pt-[2px] mt-[6px]'>Premium Cricket</h2>
            <span className='flex justify-center items-center h-[32px] w-[32px] m-[0_0_0_10px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] box-border text-center float-right rounded border border-[#bbb]'>
              <img src="/Images/refresh-black.svg" alt="" className='m-0 h-[14px] bg-no-repeat bg-center bg-contain' />
            </span>

            <span className='block clear-both'></span>
          </div>
          <table className='mb-[10px] w-full bg-[#fff] border-collapse border-b border-[#7e97a7] text-right'>
            <tbody>
              <tr>
                <th className='w-[10%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Sports</th>
                <th className='w-[8%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Market Date</th>
                <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Event/Market Name</th>
                <th className='w-[26%] text-[#243a48] bg-[#e4e4e4]  border-y border-y-[#7e97a7] p-[8px_10px]'>Matched Amount</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={4} className='relative leading-[25px] border-t border-[#eee] align-middle text-left bg-[#fff] p-[10px_10px_5px]'>
                  <p>No Data</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Other Markets */}
        <div className='bg-[#dddcd7] shadow-[0_2px_0_0_#fff,_inset_0_2px_0_0_#0000001a] rounded-[5px] p-[7px_10px_5px] mb-[25px]'>
          <div className='m-[0_0_5px] p-[0_5px]'>
            <h2 className='block font-bold text-[16px] text-[#243a48] float-left leading-[20px] pt-[2px] mt-[6px]'>Other Markets</h2>
            <span className='flex justify-center items-center h-[32px] w-[32px] m-[0_0_0_10px] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] box-border text-center float-right rounded border border-[#bbb]'>
              <img src="/Images/refresh-black.svg" alt="" className='m-0 h-[14px] bg-no-repeat bg-center bg-contain' />
            </span>

            <span className='block clear-both'></span>
          </div>
          <table className='mb-[10px] w-full bg-[#fff] border-collapse border-b border-[#7e97a7] text-right'>
            <tbody>
              <tr>
                <th className='w-[10%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Sports</th>
                <th className='w-[8%] text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Market Date</th>
                <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>Event/Market Name</th>
                <th className='w-[26%] text-[#243a48] bg-[#e4e4e4]  border-y border-y-[#7e97a7] p-[8px_10px]'>Matched Amount</th>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan={4} className='relative leading-[25px] border-t border-[#eee] align-middle text-left bg-[#fff] p-[10px_10px_5px]'>
                  <p>No Data</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default RiskManagement