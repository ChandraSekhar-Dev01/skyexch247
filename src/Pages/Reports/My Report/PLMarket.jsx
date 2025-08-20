import React from 'react'

function PLMarket() {
  return (
    <>
      <h2 className='flex w-full text-[13px] text-[#243a48] leading-[20px] font-bold pt-[6px] mb-[6px]'>Profit/Loss Report by Market</h2>
      {/* Filter Section */}
      <div className='relative text-[12px] p-[10px_10px_0] bg-[#e0e6e6] border-b border-[#7e97a7]'>
        <ul className='block mb-[5px] mr-[5px] leading-[25px]'>
          <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
            <label className='mr-[5px] cursor-pointer'>Sports</label>
          </li>
          <li className='m-[0_5px_5px_0] whitespace-nowrap float-left'>
            <select className='w-[120px] h-[25px] m-[0_5px_5px_0] cursor-pointer'>
              <option className='p-[3px] text-[#222]' value={-1} selected="selected">
                All
              </option>
              <option className='p-[3px] text-[#222]' value={1}>SOCCER</option>
              <option className='p-[3px] text-[#222]' value={1} data-eventreporttype={1}>
                SOCCER_BOOK
              </option>
              <option className='p-[3px] text-[#222]' value={2}>TENNIS</option>
              <option className='p-[3px] text-[#222]' value={2} data-eventreporttype={1}>
                TENNIS_BOOK
              </option>
              <option className='p-[3px] text-[#222]' value={4}>CRICKET</option>
              <option className='p-[3px] text-[#222]' value={4} data-eventreporttype={5}>
                CRICKET_FANCY
              </option>
              <option className='p-[3px] text-[#222]' value={4} data-eventreporttype={1}>
                CRICKET_BOOK
              </option>
              <option className='p-[3px] text-[#222]' value={5}>RUGBY_UNION</option>
              <option className='p-[3px] text-[#222]' value={7}>HORSE_RACING</option>
              <option className='p-[3px] text-[#222]' value={4339}>GREYHOUND_RACING</option>
              <option className='p-[3px] text-[#222]' value={6423}>AMERICAN_FOOTBALL</option>
              <option className='p-[3px] text-[#222]' value={7522}>BASKETBALL</option>
              <option className='p-[3px] text-[#222]' value={2378962} data-eventreporttype={5}>
                ELECTION_FANCY
              </option>
              <option className='p-[3px] text-[#222]' value={2378962} data-eventreporttype={1}>
                ELECTION_BOOK
              </option>
              <option className='p-[3px] text-[#222]' value={9999999} data-eventreporttype={5}>
                FANCYBET_FANCY
              </option>
              <option className='p-[3px] text-[#222]' value={2378961}>POLITICS</option>
              <option className='p-[3px] text-[#222]' value={137}>E_SOCCER</option>
              <option className='p-[3px] text-[#222]' value={138}>KABADDI</option>
              <option className='p-[3px] text-[#222]' value={138} data-eventreporttype={1}>
                KABADDI_BOOK
              </option>
              <option className='p-[3px] text-[#222]' value={-99}>CASINO</option>
              <option className='p-[3px] text-[#222]' value={-97}>BPOKER</option>
              <option className='p-[3px] text-[#222]' value={-95}>SABA</option>
              <option className='p-[3px] text-[#222]' value={-93}>ROYAL GAMING</option>
              <option className='p-[3px] text-[#222]' value={-94}>LUCKCO7</option>
            </select>
          </li>
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

      <table className="w-full text-[11px] m-[10px_0_0] text-[#1e1e1e] border-collapse border-b border-[#7e97a7]">
        <thead>
          <tr className="">
            <th className="text-[#243a48] bg-[#e4e4e4] text-left p-[8px_5px] border-y border-[#7e97a7]">UID</th>
            <th className="text-[#243a48] bg-[#e4e4e4] w-[18%] p-[8px_5px] border-y border-[#7e97a7]">Stake</th>
            <th className="text-[#243a48] bg-[#e4e4e4] w-[18%] p-[8px_5px] border-y border-[#7e97a7]">Player P/L</th>
            <th className="text-[#243a48] bg-[#e4e4e4] w-[18%] p-[8px_5px] border-y border-[#7e97a7]">Master Comm.</th>
            <th className="text-[#243a48] bg-[#e4e4e4] w-[18%] p-[8px_5px] border-y border-[#7e97a7]">Upline P/L</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-[#fff] border-y border-[#7e97a7]'>
            <td className='p-[8px_3px] relative border-t border-[#eee] align-middle text-left whitespace-nowrap'>
              <span className='float-left min-w-[13px] w-[15px] h-[15px] px-0 text-[#2789ce] bg-no-repeat bg-left inline-block' style={{ backgroundImage: "url('/Images/expand-open.png')" }}></span>
              <span className='align-middle inline-block'>Casino</span>
              <img src="/Images/icon-fromto.png" alt="" className='m-[0_5px] bg-no-repeat h-[8px] w-[7px] inline-block' />
              <strong>RNG</strong>
            </td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle '>173.00</td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle  text-[#d0021b]'>( 53.30)</td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle '>0.00</td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle '>293.30</td>
          </tr>
          {/* Expandable Row Start */}
          <tr className='border-y border-[#7e97a7] bg-[#e2e8ed] shadow-[inset_0_2px_0_#0000001a]'>
            <td className='pl-[20px] relative border-t border-t-[#eee] border-b border-b-[#7e97a7] align-middle text-left overflow-hidden text-ellipsis whitespace-nowrap shadow-[inset_0_2px_0_#0000001a]'>
              TABLE
            </td>
            <td className='p-[8px_3px] border-t border-t-[#eee] border-b border-b-[#7e97a7] align-middle text-center overflow-hidden text-ellipsis whitespace-nowrap shadow-[inset_0_2px_0_#0000001a] '>173.00</td>
            <td className=' border-t border-t-[#eee] border-b border-b-[#7e97a7] align-middle text-center overflow-hidden text-ellipsis whitespace-nowrap shadow-[inset_0_2px_0_#0000001a]  text-[#d0021b]'>( 53.30)</td>
            <td className=' border-t border-t-[#eee] border-b border-b-[#7e97a7] align-middle text-center overflow-hidden text-ellipsis whitespace-nowrap shadow-[inset_0_2px_0_#0000001a] '>0.00</td>
            <td className=' border-t border-t-[#eee] border-b border-b-[#7e97a7] align-middle text-center overflow-hidden text-ellipsis whitespace-nowrap shadow-[inset_0_2px_0_#0000001a] '>293.30</td>
          </tr>
          {/* Expandable Row End */}
          <tr className='bg-[#fff] border-y border-[#7e97a7]'>
            <td className='p-[8px_3px] relative border-t border-[#eee] align-middle text-left whitespace-nowrap'>
              <span className='float-left min-w-[13px] w-[15px] h-[15px] px-0 text-[#2789ce] bg-no-repeat bg-left inline-block' style={{ backgroundImage: "url('/Images/expand-close.png')" }}></span>
              <span className='align-middle inline-block'>Fancy CRICKET</span>
              <img src="/Images/icon-fromto.png" alt="" className='m-[0_5px] bg-no-repeat h-[8px] w-[7px] inline-block' />
              <strong>Outer Delhi Warriors v Purani Delhi 6</strong>
            </td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle '>400.00</td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle  text-[#d0021b]'>( 230.30)</td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle '>0.00</td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle '>230.30</td>
          </tr>
          <tr className='bg-[#fff] border-y border-[#7e97a7]'>
            <td className='p-[8px_3px] relative border-t border-[#eee] align-middle text-left whitespace-nowrap'>
              <span className='float-left min-w-[13px] w-[15px] h-[15px] px-0 text-[#2789ce] bg-no-repeat bg-left inline-block' style={{ backgroundImage: "url('/Images/expand-close.png')" }}></span>
              <span className='align-middle inline-block'>Book SOCCER</span>
              <img src="/Images/icon-fromto.png" alt="" className='m-[0_5px] bg-no-repeat h-[8px] w-[7px] inline-block' />
              <strong> Tallinna Kalev v Parnu JK Vaprus</strong>
            </td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle '>200.00</td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle  text-[#d0021b]'>( 12.00)</td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle '>0.00</td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle '>12.00</td>
          </tr>
          <tr className='bg-[#fff] border-y border-[#7e97a7]'>
            <td className='p-[8px_3px] relative border-t border-[#eee] align-middle text-left whitespace-nowrap'>
              <span className='float-left min-w-[13px] w-[15px] h-[15px] px-0 text-[#2789ce] bg-no-repeat bg-left inline-block' style={{ backgroundImage: "url('/Images/expand-close.png')" }}></span>
              <span className='align-middle inline-block'>Book CRICKET</span>
              <img src="/Images/icon-fromto.png" alt="" className='m-[0_5px] bg-no-repeat h-[8px] w-[7px] inline-block' />
              <strong>Outer Delhi Warriors v Purani Delhi 6</strong>
            </td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle '>400.00</td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle '>2.00</td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle '>0.00</td>
            <td className='text-center p-[8px_3px] relative border-t border-[#eee] align-middle  text-[#d0021b]'>( 2.00)</td>
          </tr>

          {/* Total Row */}
          <tr className='bg-[#fff] border-y border-[#7e97a7]'>
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

export default PLMarket