import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Helper from '../helper';
import { getAllEvents } from '../redux/slice/event/eventSlice';
import { Link } from 'react-router-dom';
import News from '../components/News';

function Result() {

  const userInfo = Helper();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.events);

  const [selectedEvent, setSelectedEvent] = useState("tod");
  const [inplayEvents, setInplayEvents] = useState([]);
  const [filterOpen, setFilterOpen] = useState("4");
  const [fancyBetMarket, setFancyBetMarket] = useState("1");


  function formatOpenDate(openDateStr) {
    const date = new Date(openDateStr); // "2025/07/29 15:30:00"
    const now = new Date();

    // Get time part as HH:mm
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

    // Format today and tomorrow
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const inputDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    if (inputDate.getTime() === today.getTime()) {
      return timeString;
    } else if (inputDate.getTime() === tomorrow.getTime()) {
      return `Tomorrow ${timeString}`;
    } else {
      // Format as YYYY-MM-DD HH:mm
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
      return `${formattedDate} ${timeString}`;
    }
  }


  useEffect(() => {
    dispatch(
      getAllEvents({
        user_id: userInfo ? userInfo._id : "",
      })
    );
  }, []);

  useEffect(() => {
    if (
      userInfos &&
      Array.isArray(userInfos.events) &&
      userInfos.events.length > 0
    ) {
      const allNewEvents = userInfos.events
        .flatMap((ev) => ev.competitions || [])
        .flatMap((comp) => comp.events || []);

      console.log('all events : ', allNewEvents)

      const today = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);

      // Format dates as YYYY-MM-DD
      const formatDate = (date) => {
        return date.toISOString().split("T")[0]; // "2025-07-29"
      };

      const todayStr = formatDate(today);
      const tomorrowStr = formatDate(tomorrow);

      const inPlayEvents = allNewEvents.filter((item) => {
        const itemDateStr = formatDate(new Date(item.open_date));

        if (selectedEvent == "inplay") {
          return item.is_inplay == "True";
          // return itemDateStr === todayStr;
        } else if (selectedEvent == "tod") {
          return itemDateStr === todayStr;
        } else if (selectedEvent == "tom") {
          return itemDateStr === tomorrowStr;
        }
        return false;
      });

      setInplayEvents(inPlayEvents);
    }
  }, [userInfos, selectedEvent]);


  return (
    <>
      {/* For Pc View */}
      <div className='hidden lg:block relative min-w-[1350px] max-w-[calc(100%-40px)] h-[calc(100%-105px)] m-[0_auto] text-[12px] text-[#1e1e1e] leading-[15px] mt-[1px]'>
        {/* center Section */}
        <div className="h-full ml-0 pl-0 overflow-hidden relative mr-[26.0416666667%] p-[0_15px]">
          {/* News Marquee */}
          <News />
          <div className='text-xs font-bold my-4'>
            <span className={`py-[6px] px-[4.5rem] border-r border-t border-b border-l border-[#243a38] rounded-l cursor-pointer hover:underline ${selectedEvent === "tod" ? 'text-[#fff] bg-[#3b5160]' : 'text-[#3b5160] bg-white'}`} onClick={() => setSelectedEvent("tod")}>Today</span>
            <span className={`py-[6px] px-[4.5rem] border-r border-t border-b border-l border-[#243a38] rounded-r cursor-pointer hover:underline ${selectedEvent === "tom" ? 'text-[#fff] bg-[#3b5160]' : 'text-[#3b5160] bg-white'}`} onClick={() => setSelectedEvent("tom")}>Yesterday</span>
            <select
              name=""
              id=""
              className='text-[14px] leading-[29px] font-normal mt-[-6px] w-[180px] h-[29px] float-right cursor-pointer border border-[#767676]'
              onChange={(e) => setFilterOpen(e.target.value)}
            >
              <option value="4" className='p-[3px] text-[#222]'>CRICKET</option>
              <option value="1" className='p-[3px] text-[#222]'>SOCCER</option>
              <option value="137" className='p-[3px] text-[#222]'>E_SOCCER</option>
              <option value="999999" className='p-[3px] text-[#222]'>FANCYBET</option>
            </select>
          </div>
          <div className='overflow-hidden overflow-y-scroll h-[calc(100vh-19.5vh)] scroll-hide'>
            {filterOpen !== "999999" &&
              <table className='w-full bg-[#fff] border-collapse border-b border-[#7e97a7] mb-[15px] text-right'>
                <caption className='bg-[#3b5160] border-b border-[#7e97a7] text-[#fff] leading-[24px] font-bold p-[0_10px] text-left'>Result </caption>
                <tbody>
                  <tr className=''>
                    <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left w-[20%]'>
                      Event Date/Time
                    </th>
                    <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] text-left'>
                      Event Name
                    </th>
                    {filterOpen === "4" &&
                      <>
                        <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] w-[20%]'>
                          Home
                        </th>
                        <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] w-[20%]'>
                          Away
                        </th>
                      </>
                    }
                    {filterOpen !== "4" &&
                      <>
                        <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] w-[20%]'>
                          HT
                        </th>
                        <th className='text-[#243a48] bg-[#e4e4e4] border-y border-[#7e97a7] p-[8px_10px] w-[20%]'>
                          FT
                        </th>
                      </>
                    }
                  </tr>
                </tbody>
                {filterOpen === "4" &&
                  <tbody>
                    <tr>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-left'>
                        2025-08-27 09:30
                      </td>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-left'>
                        Islamabad United SRL T20 v Quetta Gladiators SRL T20
                      </td>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-right'>
                        <strong>
                          <span>169/3</span>
                        </strong>
                      </td>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-right'>
                        <strong>
                          <span>168/5</span>
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-left'>
                        2025-08-27 10:00
                      </td>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-left'>
                        Boost Defenders v Band-e-Amir Dragons
                      </td>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-right'>
                        <strong>
                          <span>311</span>
                        </strong>
                      </td>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-right'>
                        <strong>
                          <span>264/8</span>
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-left'>
                        2025-08-27 11:30
                      </td>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-left'>
                        New Zealand SRL T20 v Australia SRL T20
                      </td>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-right'>
                        <strong>
                          <span>205/3</span>
                        </strong>
                      </td>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-right'>
                        <strong>
                          <span>188/3</span>
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-left'>
                        2025-08-27 13:30
                      </td>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-left'>
                        Rajasthan Royals SRL T20 v Delhi Capitals SRL T20
                      </td>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-right'>
                        <strong>
                          <span>134/9</span>
                        </strong>
                      </td>
                      <td className='border-t border-[#eee] p-[8px_10px] align-middle text-right'>
                        <strong>
                          <span>250/4</span>
                        </strong>
                      </td>
                    </tr>
                  </tbody>
                }
                {filterOpen !== "4" &&
                  <tbody>
                    <tr>
                      <td colSpan={4} className='border-t border-[#eee] p-[8px_10px] align-middle text-left'>
                        There are no events to be displayed.
                      </td>
                    </tr>
                  </tbody>
                }
              </table>
            }

            {/* FancyBet Table */}
            {filterOpen === "999999" &&
              <div className='block'>
                {/* Expandable Block */}
                <div className='block mb-[1px]'>
                  <div className='relative flex items-center bg-[#243a48] min-h-[26px] p-[5px]'>
                    <label className='text-[#fff] text-center bg-[#63727d] w-[130px] p-[5px] rounded mr-[8px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap'>
                      2025/08/28 19:00:00
                    </label>
                    <strong className='block text-[#fff] leading-[16px] w-[calc(100%-145px)] mr-[10px]'>North Delhi Strikers v New Delhi Tigers</strong>
                    <span className='block bg-no-repeat w-[9px] h-[9px]' style={{ background: "url('/Images/close-minus.svg')" }}></span>
                  </div>
                  {/* Expandable Block */}
                  <div className='expandable-block block'>
                    <div className='bg-[#fff] p-[8px] text-[13px]'>
                      <button
                        className={`${fancyBetMarket === "1" ? "bg-[#417393] text-[#fff]" : "bg-[#e3e3e3]"} h-[30px] min-w-[60px] rounded leading-[30px] p-[0_10px] m-[3px] cursor-pointe`}
                        onClick={() => setFancyBetMarket("1")}
                      >
                        All
                      </button>
                      <button
                        className={`${fancyBetMarket === "2" ? "bg-[#417393] text-[#fff]" : "bg-[#e3e3e3]"} h-[30px] min-w-[60px] rounded leading-[30px] p-[0_10px] m-[3px] cursor-pointe`}
                        onClick={() => setFancyBetMarket("2")}
                      >
                        Three Selections
                      </button>
                      <button
                        className={`${fancyBetMarket === "3" ? "bg-[#417393] text-[#fff]" : "bg-[#e3e3e3]"} h-[30px] min-w-[60px] rounded leading-[30px] p-[0_10px] m-[3px] cursor-pointe`}
                        onClick={() => setFancyBetMarket("3")}
                      >
                        Overs
                      </button>
                      <button
                        className={`${fancyBetMarket === "4" ? "bg-[#417393] text-[#fff]" : "bg-[#e3e3e3]"} h-[30px] min-w-[60px] rounded leading-[30px] p-[0_10px] m-[3px] cursor-pointe`}
                        onClick={() => setFancyBetMarket("4")}
                      >
                        Batsman
                      </button>
                      <button
                        className={`${fancyBetMarket === "5" ? "bg-[#417393] text-[#fff]" : "bg-[#e3e3e3]"} h-[30px] min-w-[60px] rounded leading-[30px] p-[0_10px] m-[3px] cursor-pointe`}
                        onClick={() => setFancyBetMarket("5")}
                      >
                        Single Over
                      </button>
                      <button
                        className={`${fancyBetMarket === "6" ? "bg-[#417393] text-[#fff]" : "bg-[#e3e3e3]"} h-[30px] min-w-[60px] rounded leading-[30px] p-[0_10px] m-[3px] cursor-pointe`}
                        onClick={() => setFancyBetMarket("6")}
                      >
                        Ball by Ball
                      </button>
                      <button
                        className={`${fancyBetMarket === "7" ? "bg-[#417393] text-[#fff]" : "bg-[#e3e3e3]"} h-[30px] min-w-[60px] rounded leading-[30px] p-[0_10px] m-[3px] cursor-pointe`}
                        onClick={() => setFancyBetMarket("7")}
                      >
                        Khadda
                      </button>
                      <button
                        className={`${fancyBetMarket === "8" ? "bg-[#417393] text-[#fff]" : "bg-[#e3e3e3]"} h-[30px] min-w-[60px] rounded leading-[30px] p-[0_10px] m-[3px] cursor-pointe`}
                        onClick={() => setFancyBetMarket("8")}
                      >
                        Lottery
                      </button>
                      <button
                        className={`${fancyBetMarket === "9" ? "bg-[#417393] text-[#fff]" : "bg-[#e3e3e3]"} h-[30px] min-w-[60px] rounded leading-[30px] p-[0_10px] m-[3px] cursor-pointe`}
                        onClick={() => setFancyBetMarket("9")}
                      >
                        Odd Event
                      </button>
                    </div>
                    <div>
                      <ul className='flex items-center bg-[#ced5da] border-b border-[#a4b7c4] h-[32px]'>
                        <li className='flex basis-[75%] text-left items-center text-[13px] text-[#243a48] h-[30px] p-[2px_8px]'>
                          <p className='w-full font-bold'> Market Name</p>
                        </li>
                        <li className='flex basis-[10%] items-center text-right text-[13px] text-[#243a48] h-[30px] p-[2px_8px]'>
                          <p className='w-full font-bold'>Result (Runs)</p>
                        </li>
                        <li className='flex basis-[15%] items-center text-right text-[13px] text-[#243a48] h-[30px] p-[2px_8px]'>
                          <p className='w-full font-bold'>Result Source</p>
                        </li>
                      </ul>
                      <ul className='flex items-center bg-[#fff] border-b border-[#e0e0e0]'>
                        <li className='flex basis-[75%] items-center text-[13px] text-[#243a48] h-[30px] p-[2px_8px] text-left'>
                          <p className='w-full'>6 Over NDS</p>
                        </li>
                        <li className='flex basis-[10%] items-center text-[13px] text-[#243a48] h-[30px] p-[2px_8px] text-right'>
                          <p className='w-full'>61</p>
                        </li>
                        <li className='flex basis-[15%] items-center text-[13px] text-[#243a48] h-[30px] p-[2px_8px] text-right'>
                          <p className='w-full'>-</p>
                        </li>
                      </ul>
                      <ul className='flex items-center bg-[#fff] border-b border-[#e0e0e0]'>
                        <li className='flex basis-[75%] items-center text-[13px] text-[#243a48] h-[30px] p-[2px_8px] text-left'>
                          <p className='w-full'>6 Over NDS</p>
                        </li>
                        <li className='flex basis-[10%] items-center text-[13px] text-[#243a48] h-[30px] p-[2px_8px] text-right'>
                          <p className='w-full'>61</p>
                        </li>
                        <li className='flex basis-[15%] items-center text-[13px] text-[#243a48] h-[30px] p-[2px_8px] text-right'>
                          <p className='w-full'>-</p>
                        </li>
                      </ul>
                      <ul className='flex items-center bg-[#fff] border-b border-[#e0e0e0]'>
                        <li className='flex basis-[75%] items-center text-[13px] text-[#243a48] h-[30px] p-[2px_8px] text-left'>
                          <p className='w-full'>6 Over NDS</p>
                        </li>
                        <li className='flex basis-[10%] items-center text-[13px] text-[#243a48] h-[30px] p-[2px_8px] text-right'>
                          <p className='w-full'>61</p>
                        </li>
                        <li className='flex basis-[15%] items-center text-[13px] text-[#243a48] h-[30px] p-[2px_8px] text-right'>
                          <p className='w-full'>-</p>
                        </li>
                      </ul>
                      <ul className='flex items-center bg-[#fff] border-b border-[#e0e0e0]'>
                        <li className='flex basis-[75%] items-center text-[13px] text-[#243a48] h-[30px] p-[2px_8px] text-left'>
                          <p className='w-full'>6 Over NDS</p>
                        </li>
                        <li className='flex basis-[10%] items-center text-[13px] text-[#243a48] h-[30px] p-[2px_8px] text-right'>
                          <p className='w-full'>61</p>
                        </li>
                        <li className='flex basis-[15%] items-center text-[13px] text-[#243a48] h-[30px] p-[2px_8px] text-right'>
                          <p className='w-full'>-</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Non-Expandable Block */}
                <div className='block mb-[1px]'>
                  <div className='relative flex items-center bg-[#243a48] min-h-[26px] p-[5px]'>
                    <label className='text-[#fff] text-center bg-[#63727d] w-[130px] p-[5px] rounded mr-[8px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap'>
                      2025/08/28 19:00:00
                    </label>
                    <strong className='block text-[#fff] leading-[16px] w-[calc(100%-145px)] mr-[10px]'>North Delhi Strikers v New Delhi Tigers</strong>
                    <span className='block bg-no-repeat w-[9px] h-[9px]' style={{ background: "url('/Images/close-plus.svg')" }}></span>
                  </div>
                </div>
                {/* Non-Expandable Block */}
                <div className='block mb-[1px]'>
                  <div className='relative flex items-center bg-[#243a48] min-h-[26px] p-[5px]'>
                    <label className='text-[#fff] text-center bg-[#63727d] w-[130px] p-[5px] rounded mr-[8px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap'>
                      2025/08/28 19:00:00
                    </label>
                    <strong className='block text-[#fff] leading-[16px] w-[calc(100%-145px)] mr-[10px]'>North Delhi Strikers v New Delhi Tigers</strong>
                    <span className='block bg-no-repeat w-[9px] h-[9px]' style={{ background: "url('/Images/close-plus.svg')" }}></span>
                  </div>
                </div>
                {/* Non-Expandable Block */}
                <div className='block mb-[1px]'>
                  <div className='relative flex items-center bg-[#243a48] min-h-[26px] p-[5px]'>
                    <label className='text-[#fff] text-center bg-[#63727d] w-[130px] p-[5px] rounded mr-[8px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap'>
                      2025/08/28 19:00:00
                    </label>
                    <strong className='block text-[#fff] leading-[16px] w-[calc(100%-145px)] mr-[10px]'>North Delhi Strikers v New Delhi Tigers</strong>
                    <span className='block bg-no-repeat w-[9px] h-[9px]' style={{ background: "url('/Images/close-plus.svg')" }}></span>
                  </div>
                </div>
                {/* Non-Expandable Block */}
                <div className='block mb-[1px]'>
                  <div className='relative flex items-center bg-[#243a48] min-h-[26px] p-[5px]'>
                    <label className='text-[#fff] text-center bg-[#63727d] w-[130px] p-[5px] rounded mr-[8px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap'>
                      2025/08/28 19:00:00
                    </label>
                    <strong className='block text-[#fff] leading-[16px] w-[calc(100%-145px)] mr-[10px]'>North Delhi Strikers v New Delhi Tigers</strong>
                    <span className='block bg-no-repeat w-[9px] h-[9px]' style={{ background: "url('/Images/close-plus.svg')" }}></span>
                  </div>
                </div>
              </div>
            }
          </div>
          <span className='block clear-both'></span>
        </div>
        {/* Left Section */}
        <div className='h-full absolute top-0 right-0 w-[26.0416666667%] bg-[#fff]'>
          <div className='flex justify-between items-center text-xs leading-6 text-[#fff] bg-[#243a48] px-2'>
            <div>Bet Slip</div>
            <div className='flex justify-center items-center rounded-sm h-3 w-3 border border-[#fff]'><span>-</span></div>
          </div>
        </div>
      </div>
      {/* For Mobile */}
      <div className='block lg:hidden'>
        <div className='relative flex bg-[#172832]'>
          <div className='py-[3.8vw] px-2 text-[3.6vw] font-bold'>
            <span className={` py-[2.5vw] px-[6.7vw] border-r border-t border-b border-l border-[#fff] rounded-l-md cursor-pointer ${selectedEvent == "inplay" ? 'text-[#3b5160] bg-white' : 'text-[#fff] '}`} onClick={() => setSelectedEvent("inplay")}>In-Play</span>
            <span className={` py-[2.5vw] px-[6.7vw] border-r border-t border-b border-l border-[#fff] cursor-pointer ${selectedEvent == "tod" ? 'text-[#3b5160] bg-white' : 'text-[#fff] '}`} onClick={() => setSelectedEvent("tod")}>Today</span>
            <span className={` py-[2.5vw] px-[6.7vw] border-r border-t border-b border-l border-[#fff] rounded-r-md cursor-pointer ${selectedEvent == "tom" ? 'text-[#3b5160] bg-white' : 'text-[#fff] '}`} onClick={() => setSelectedEvent("tom")}>Tomorrow</span>
          </div>

          <div className='absolute right-0 w-[15vw] h-full flex justify-center items-center [background-image:linear-gradient(-180deg,_rgba(255,_255,_255,_0.15)_0%,_rgba(0,_0,_0,_0.15)_100%)] border-l border-[#ffffff1a]'>
            <img src="/Images/search-icon.svg" alt="" className='w-[6vw]' />
          </div>
        </div>
        {/* Cricket */}
        <div>
          <span className='flex justify-center items-center p-[1.5vw] [background-image:linear-gradient(-180deg,_#2e4b5e_0%,_#243a48_82%)] text-[3.7333333333vw] text-white font-bold'>Cricket</span>
          <ul className='bg-[#fff] border-b-[0.8vw] border-[#070707]'>
            {inplayEvents?.filter(i => i.event_type == "4")?.map((item) => (
              <li key={item.id} className='py-1 px-2 border-b border-[#e0e6e6]'>
                <div className='flex justify-between items-center'>
                  <Link to={`/matchupdates/${item.event_id}/${item.is_inplay === "True" ? "Inplay" : "Going Inplay"}`} className='flex justify-start items-center'>

                    <span className='pt-4 pr-2'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.webp" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> : <img src="/Images/icon-no_play.webp" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' />} </span>

                    <div className='flex flex-col justify-start items-start'>
                      <span className='flex justify-start items-center gap-1'>
                        <div className='flex justify-center items-center gap-1'>
                          {item.is_tv == "True" &&
                            <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                            </span>
                          }
                          {item.is_fancy == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                          }
                          {item.is_bm == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                          }
                        </div>
                        <span className='flex justify-center items-center bg-[#e4550f] w-[4.2vw] h-[4vw] rounded-[0.8vw]'>
                          <img src="/Images/premium-icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>
                        {item.is_inplay == "True" &&
                          <span className='text-[3.2vw] text-[#777]'>In-Play</span>
                        }

                        {item.is_inplay != "True" &&
                          <span className='text-[3.2vw] text-[#777]'>{formatOpenDate(item.open_date)}
                          </span>
                        }
                      </span>
                      <span className='text-[4vw] font-bold text-[#2789ce] leading-snug truncate w-[82vw] max-w-[22rem]'>{item.event_name}</span>
                    </div>
                  </Link>
                  <div>
                    <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-[6.6666666667vw] h-[6.6666666667vw]' /></span>
                  </div>
                </div>
              </li>
            ))}

            <li className='py-1 px-2 border-b border-[#e0e6e6]'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center'>

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.webp" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                      </div>
                      <span className='flex justify-center items-center bg-[#e4550f] w-[4.2vw] h-[4vw] rounded-[0.8vw]'>
                        <img src="/Images/premium-icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                      </span>
                      <span className='text-[3.2vw] text-[#777]'>In-Play</span>
                      <span className='flex justify-center items-center text-[2.4vw] font-bold border border-[#1f5172] text-[#1f5172] rounded leading-[4vw]'>
                        <span className='flex justify-center items-center p-1 bg-[#1f5172]'>
                          <img src="/Images/E-icon.svg" alt="" className=' w-[1.8666666667vw] h-[2.1333333333vw]' />
                        </span>
                        <span className='px-2 bg-[#fff]'>Cricket</span>
                      </span>
                    </span>
                    <span className='text-[4vw] font-bold text-[#2789ce] leading-snug truncate w-[82vw] max-w-[22rem]'>Durban Super Giants SRL T20 vs Pretoria Capitals SRL T20</span>
                  </div>
                </div>
                <div>
                  <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-[6.6666666667vw] h-[6.6666666667vw]' /></span>
                </div>
              </div>
            </li>
            <li className='py-1 px-2 border-b border-[#e0e6e6]'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center'>

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.webp" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                      </div>
                      <span className='flex justify-center items-center bg-[#e4550f] w-[4.2vw] h-[4vw] rounded-[0.8vw]'>
                        <img src="/Images/premium-icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                      </span>
                      <span className='text-[3.2vw] text-[#777]'>In-Play</span>
                      <span className='flex justify-center items-center text-[2.4vw] font-bold border border-[#1f5172] text-[#1f5172] rounded leading-[4vw]'>
                        <span className='flex justify-center items-center p-1 bg-[#1f5172]'>
                          <img src="/Images/E-icon.svg" alt="" className=' w-[1.8666666667vw] h-[2.1333333333vw]' />
                        </span>
                        <span className='px-2 bg-[#fff]'>Cricket</span>
                      </span>
                    </span>
                    <span className='text-[4vw] font-bold text-[#2789ce] leading-snug truncate w-[82vw] max-w-[22rem]'>Brisbane Heat SRL T20 vs Perth Scorchers SRL T20</span>
                  </div>
                </div>
                <div>
                  <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-[6.6666666667vw] h-[6.6666666667vw]' /></span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Soccer */}
        <div className='mt-5'>
          <span className='flex justify-center items-center p-[1.5vw] [background-image:linear-gradient(-180deg,_#2e4b5e_0%,_#243a48_82%)] text-[3.7333333333vw] text-white font-bold'>Soccer</span>
          <ul className='bg-[#fff] border-b-[0.8vw] border-[#070707]'>
            {inplayEvents?.filter(i => i.event_type == "1")?.map((item) => (
              <li key={item.id} className='py-1 px-2 border-b border-[#e0e6e6]'>
                <div className='flex justify-between items-center'>
                  <Link to={`/matchupdates/${item.event_id}/${item.is_inplay === "True" ? "Inplay" : "Going Inplay"}`} className='flex justify-start items-center'>

                    <span className='pt-4 pr-2'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.webp" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> : <img src="/Images/icon-no_play.webp" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' />} </span>

                    <div className='flex flex-col justify-start items-start'>
                      <span className='flex justify-start items-center gap-1'>
                        <div className='flex justify-center items-center gap-1'>
                          {item.is_tv == "True" &&
                            <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                            </span>
                          }
                          {item.is_fancy == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                          }
                          {item.is_bm == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                          }
                        </div>
                        <span className='flex justify-center items-center bg-[#e4550f] w-[4.2vw] h-[4vw] rounded-[0.8vw]'>
                          <img src="/Images/premium-icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>
                        {item.is_inplay == "True" &&
                          <span className='text-[3.2vw] text-[#777]'>In-Play</span>
                        }
                        {item.is_inplay != "True" &&
                          <span className='text-[3.2vw] text-[#777]'>{formatOpenDate(item.open_date)}
                          </span>
                        }
                      </span>
                      <span className='text-[4vw] font-bold text-[#2789ce] leading-snug truncate w-[82vw] max-w-[22rem]'>{item.event_name}</span>
                    </div>
                  </Link>
                  <div>
                    <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-[6.6666666667vw] h-[6.6666666667vw]' /></span>
                  </div>
                </div>
              </li>
            ))}
            <li className='py-1 px-2 border-b border-[#e0e6e6]'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center'>

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.webp" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                      </div>
                      <span className='flex justify-center items-center bg-[#e4550f] w-[4.2vw] h-[4vw] rounded-[0.8vw]'>
                        <img src="/Images/premium-icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                      </span>
                      <span className='text-[3.2vw] text-[#777]'>In-Play</span>
                      <span className='flex justify-center items-center text-[2.4vw] font-bold border border-[#1f5172] text-[#1f5172] rounded leading-[4vw]'>
                        <span className='flex justify-center items-center p-1 bg-[#1f5172]'>
                          <img src="/Images/E-icon.svg" alt="" className=' w-[1.8666666667vw] h-[2.1333333333vw]' />
                        </span>
                        <span className='px-2 bg-[#fff]'>Cricket</span>
                      </span>
                    </span>
                    <span className='text-[4vw] font-bold text-[#2789ce] leading-snug truncate w-[82vw] max-w-[22rem]'>Durban Super Giants SRL T20 vs Pretoria Capitals SRL T20</span>
                  </div>
                </div>
                <div>
                  <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-[6.6666666667vw] h-[6.6666666667vw]' /></span>
                </div>
              </div>
            </li>
            <li className='py-1 px-2 border-b border-[#e0e6e6]'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center'>

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.webp" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                      </div>
                      <span className='flex justify-center items-center bg-[#e4550f] w-[4.2vw] h-[4vw] rounded-[0.8vw]'>
                        <img src="/Images/premium-icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                      </span>
                      <span className='text-[3.2vw] text-[#777]'>In-Play</span>
                      <span className='flex justify-center items-center text-[2.4vw] font-bold border border-[#1f5172] text-[#1f5172] rounded leading-[4vw]'>
                        <span className='flex justify-center items-center p-1 bg-[#1f5172]'>
                          <img src="/Images/E-icon.svg" alt="" className=' w-[1.8666666667vw] h-[2.1333333333vw]' />
                        </span>
                        <span className='px-2 bg-[#fff]'>Cricket</span>
                      </span>
                    </span>
                    <span className='text-[4vw] font-bold text-[#2789ce] leading-snug truncate w-[82vw] max-w-[22rem]'>Brisbane Heat SRL T20 vs Perth Scorchers SRL T20</span>
                  </div>
                </div>
                <div>
                  <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-[6.6666666667vw] h-[6.6666666667vw]' /></span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Tennis */}
        <div className='mt-5'>
          <span className='flex justify-center items-center p-[1.5vw] [background-image:linear-gradient(-180deg,_#2e4b5e_0%,_#243a48_82%)] text-[3.7333333333vw] text-white font-bold'>Tennis</span>
          <ul className='bg-[#fff] border-b-[0.8vw] border-[#070707]'>
            {inplayEvents?.filter(i => i.event_type == "2")?.map((item) => (
              <li key={item.id} className='py-1 px-2 border-b border-[#e0e6e6]'>
                <div className='flex justify-between items-center'>
                  <Link to={`/matchupdates/${item.event_id}/${item.is_inplay === "True" ? "Inplay" : "Going Inplay"}`} className='flex justify-start items-center'>

                    <span className='pt-4 pr-2'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.webp" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> : <img src="/Images/icon-no_play.webp" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' />} </span>

                    <div className='flex flex-col justify-start items-start'>
                      <span className='flex justify-start items-center gap-1'>
                        <div className='flex justify-center items-center gap-1'>
                          {item.is_tv == "True" &&
                            <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                            </span>
                          }
                          {item.is_fancy == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                          }
                          {item.is_bm == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                          }
                        </div>
                        <span className='flex justify-center items-center bg-[#e4550f] w-[4.2vw] h-[4vw] rounded-[0.8vw]'>
                          <img src="/Images/premium-icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>
                        {item.is_inplay == "True" &&
                          <span className='text-[3.2vw] text-[#777]'>In-Play</span>
                        }
                        {item.is_inplay != "True" &&
                          <span className='text-[3.2vw] text-[#777]'>{formatOpenDate(item.open_date)}
                          </span>
                        }
                      </span>
                      <span className='text-[4vw] font-bold text-[#2789ce] leading-snug truncate w-[82vw] max-w-[22rem]'>{item.event_name}</span>
                    </div>
                  </Link>
                  <div>
                    <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-[6.6666666667vw] h-[6.6666666667vw]' /></span>
                  </div>
                </div>
              </li>
            ))}
            <li className='py-1 px-2 border-b border-[#e0e6e6]'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center'>

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.webp" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                      </div>
                      <span className='flex justify-center items-center bg-[#e4550f] w-[4.2vw] h-[4vw] rounded-[0.8vw]'>
                        <img src="/Images/premium-icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                      </span>
                      <span className='text-[3.2vw] text-[#777]'>In-Play</span>
                      <span className='flex justify-center items-center text-[2.4vw] font-bold border border-[#1f5172] text-[#1f5172] rounded leading-[4vw]'>
                        <span className='flex justify-center items-center p-1 bg-[#1f5172]'>
                          <img src="/Images/E-icon.svg" alt="" className=' w-[1.8666666667vw] h-[2.1333333333vw]' />
                        </span>
                        <span className='px-2 bg-[#fff]'>Cricket</span>
                      </span>
                    </span>
                    <span className='text-[4vw] font-bold text-[#2789ce] leading-snug truncate w-[82vw] max-w-[22rem]'>Durban Super Giants SRL T20 vs Pretoria Capitals SRL T20</span>
                  </div>
                </div>
                <div>
                  <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-[6.6666666667vw] h-[6.6666666667vw]' /></span>
                </div>
              </div>
            </li>
            <li className='py-1 px-2 border-b border-[#e0e6e6]'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center'>

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.webp" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                      </div>
                      <span className='flex justify-center items-center bg-[#e4550f] w-[4.2vw] h-[4vw] rounded-[0.8vw]'>
                        <img src="/Images/premium-icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                      </span>
                      <span className='text-[3.2vw] text-[#777]'>In-Play</span>
                      <span className='flex justify-center items-center text-[2.4vw] font-bold border border-[#1f5172] text-[#1f5172] rounded leading-[4vw]'>
                        <span className='flex justify-center items-center p-1 bg-[#1f5172]'>
                          <img src="/Images/E-icon.svg" alt="" className=' w-[1.8666666667vw] h-[2.1333333333vw]' />
                        </span>
                        <span className='px-2 bg-[#fff]'>Cricket</span>
                      </span>
                    </span>
                    <span className='text-[4vw] font-bold text-[#2789ce] leading-snug truncate w-[82vw] max-w-[22rem]'>Brisbane Heat SRL T20 vs Perth Scorchers SRL T20</span>
                  </div>
                </div>
                <div>
                  <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-[6.6666666667vw] h-[6.6666666667vw]' /></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Result