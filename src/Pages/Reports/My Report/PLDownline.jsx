import React from 'react'

function PLDownline() {
  return (
    <>
      <h2 className='flex w-full text-[13px] text-[#243a48] leading-[20px] font-bold pt-[6px] mb-[6px]'>Profit/Loss Report by Downline</h2>
      {/* Filter Section */}
      <div className='relative text-[12px] p-[10px_10px_0] mb-[10px] bg-[#e0e6e6] border-b border-[#7e97a7]'>
        <ul className='block mb-[5px] mr-[5px] leading-[25px]'>
          <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
            <label className='mr-[5px] cursor-pointer'>Time Zone</label>
          </li>
          <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
            <select className='w-[120px] h-[25px] m-[0_5px_5px_0] cursor-pointer'>
              <option className='p-[3px] text-[#222]' value="Pacific/Midway">Pacific/Midway(GMT-11:00)</option>
              <option className='p-[3px] text-[#222]' value="Pacific/Honolulu">Pacific/Honolulu(GMT-10:00)</option>
              <option className='p-[3px] text-[#222]' value="America/Juneau">America/Juneau(GMT-9:00)</option>
              <option className='p-[3px] text-[#222]' value="America/Los_Angeles">America/Los_Angeles(GMT-8:00)</option>
              <option className='p-[3px] text-[#222]' value="America/Phoenix">America/Phoenix(GMT-7:00)</option>
              <option className='p-[3px] text-[#222]' value="America/Chicago">America/Chicago(GMT-6:00)</option>
              <option className='p-[3px] text-[#222]' value="America/New_York">America/New_York(GMT-5:00)</option>
              <option className='p-[3px] text-[#222]' value="America/Santiago">America/Santiago(GMT-4:00)</option>
              <option className='p-[3px] text-[#222]' value="America/Sao_Paulo">America/Sao_Paulo(GMT-3:00)</option>
              <option className='p-[3px] text-[#222]' value="Atlantic/South_Georgia">
                Atlantic/South_Georgia(GMT-2:00)
              </option>
              <option className='p-[3px] text-[#222]' value="Atlantic/Azores">Atlantic/Azores(GMT-1:00)</option>
              <option className='p-[3px] text-[#222]' value="Europe/London">Europe/London(GMT+0:00)</option>
              <option className='p-[3px] text-[#222]' value="Europe/Paris">Europe/Paris(GMT+1:00)</option>
              <option className='p-[3px] text-[#222]' value="Africa/Cairo">Africa/Cairo(GMT+2:00)</option>
              <option className='p-[3px] text-[#222]' value="Asia/Qatar">Asia/Qatar(GMT+3:00)</option>
              <option className='p-[3px] text-[#222]' value="Asia/Dubai">Asia/Dubai(GMT+4:00)</option>
              <option className='p-[3px] text-[#222]' value="Asia/Karachi">Asia/Karachi(GMT+5:00)</option>
              <option className='p-[3px] text-[#222]' value="IST" selected="selected">
                IST(Bangalore / Bombay / New Delhi) (GMT+5:30)
              </option>
              <option className='p-[3px] text-[#222]' value="Asia/Kathmandu">Asia/Kathmandu(GMT+5:45)</option>
              <option className='p-[3px] text-[#222]' value="Asia/Dhaka">Asia/Dhaka(GMT+6:00)</option>
              <option className='p-[3px] text-[#222]' value="Asia/Bangkok">Asia/Bangkok(GMT+7:00)</option>
              <option className='p-[3px] text-[#222]' value="Asia/Hong_Kong">Asia/Hong_Kong(GMT+8:00)</option>
              <option className='p-[3px] text-[#222]' value="Asia/Tokyo">Asia/Tokyo(GMT+9:00)</option>
              <option className='p-[3px] text-[#222]' value="Australia/Adelaide">Australia/Adelaide(GMT+9:30)</option>
              <option className='p-[3px] text-[#222]' value="Australia/Melbourne">Australia/Melbourne(GMT+10:00)</option>
              <option className='p-[3px] text-[#222]' value="Asia/Magadan">Asia/Magadan(GMT+11:00)</option>
              <option className='p-[3px] text-[#222]' value="Pacific/Fiji">Pacific/Fiji(GMT+12:00)</option>
            </select>
          </li>
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
      <div className='m-[13px_0_10px_0] p-[0 5px] text-[12px] text-[#1e1e1e] leading-[15px]'>
        <div className='m-0 float-left'>
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
                </strong>
              </span>
            </li>

            <li className='hidden relative text-[16px] font-bold leading-[30px] pr-[5px] float-left'>
              <span className='block text-[#1e1e1e] leading-[26px] h-[30px]'>
                <img src="/Images/ag_path_arrow.png" alt="" className='ml-1 inline-block p-[0_5px_0_5px]' />
                <span className="w-[26px] h-[15px] leading-[15px] no-underline text-white rounded-[4px] mr-[5px] text-[10px] inline-block text-center mt-[8px] font-extralight bg-[#568bc8]">
                  PL
                </span>
                <strong className='text-[#1e1e1e] leading-[26px]'>jp1122user</strong>
              </span>
            </li>
            <span className='block clear-both'></span>
          </ul>
          <span className='block clear-both'></span>
        </div>
        <span className='block clear-both'></span>
      </div>
      <table className="w-full text-[11px] m-[20px_0_0] text-[#1e1e1e] border-collapse border-b border-[#7e97a7]">
        <thead>
          <tr className="">
            <th className="text-[#243a48] bg-[#e4e4e4] w-[5%] text-left p-[8px_5px] border-y border-[#7e97a7]">Serial No</th>
            <th className="text-[#243a48] bg-[#e4e4e4] text-left p-[8px_5px] border-y border-[#7e97a7]">UID</th>
            <th className="text-[#243a48] bg-[#e4e4e4] w-[18%] p-[8px_5px] border-y border-[#7e97a7]">Stake</th>
            <th className="text-[#243a48] bg-[#e4e4e4] w-[18%] p-[8px_5px] border-y border-[#7e97a7]">Player P/L</th>
            <th className="text-[#243a48] bg-[#e4e4e4] w-[18%] p-[8px_5px] border-y border-[#7e97a7]">Master Comm.</th>
            <th className="text-[#243a48] bg-[#e4e4e4] w-[18%] p-[8px_5px] border-y border-[#7e97a7]">Upline P/L</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-[#fff] border-y border-[#7e97a7]'>
            <td className='text-center p-[8px_3px]'>1</td>
            <td className='p-[8px_3px] relative border-t border-[#eee] align-middle text-left'>
              <span className='align-middle inline-block bg-[#568bc8] w-[26px] h-[15px] leading-[15px] text-[#fff] rounded mr-[5px] text-[10px] text-center'>PL</span>
              <span className="break-all w-[calc(100%-69px)] align-middle inline-block text-left text-[#2789ce] underline">
                jp1122user
              </span>
            </td>
            <td className='text-center p-[8px_3px]'>1,173.00</td>
            <td className='text-center p-[8px_3px] text-[#d0021b]'>( 293.30)</td>
            <td className='text-center p-[8px_3px]'>0.00</td>
            <td className='text-center p-[8px_3px]'>293.30</td>
          </tr>
          <tr className='bg-[#fff] border-y border-[#7e97a7]'>
            <td className='text-center p-[8px_3px]'></td>
            <td className='text-left text-[#243a48] font-bold p-[8px_3px] relative overflow-hidden text-ellipsis whitespace-nowrap align-middle'>Total</td>
            <td className='text-center text-[#243a48] font-bold p-[8px_3px] relative overflow-hidden text-ellipsis whitespace-nowrap align-middle'>1,173.00</td>
            <td className='text-center font-bold p-[8px_3px] relative overflow-hidden text-ellipsis whitespace-nowrap align-middle text-[#d0021b]'>( 293.30)</td>
            <td className='text-center text-[#243a48] font-bold p-[8px_3px] relative overflow-hidden text-ellipsis whitespace-nowrap align-middle'>0.00</td>
            <td className='text-center text-[#243a48] font-bold p-[8px_3px] relative overflow-hidden text-ellipsis whitespace-nowrap align-middle'>293.30</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default PLDownline