import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Helper from '../helper';
import { getAllEvents } from '../redux/slice/event/eventSlice';
import { Link } from 'react-router-dom';

function Inplay() {

  const userInfo = Helper();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.events);

  const [selectedEvent, setSelectedEvent] = useState("inplay");
  const [inplayEvents, setInplayEvents] = useState([]);


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
      <div className='hidden lg:flex gap-4 px-4 pt-[1px]'>
        {/* Right Section */}
        <div className='w-[75%]'>
          <div className='text-xs font-bold mb-4 mt-[6px]'>
            <span className={`py-[6px] px-[4.5rem] border-r border-t border-b border-l border-[#243a38] rounded-l cursor-pointer hover:underline ${selectedEvent == "inplay" ? 'text-[#fff] bg-[#3b5160]' : 'text-[#3b5160] bg-white'}`} onClick={() => setSelectedEvent("inplay")}>In-Play</span>
            <span className={`py-[6px] px-[4.5rem] border-r border-t border-b border-l border-[#243a38] cursor-pointer hover:underline ${selectedEvent == "tod" ? 'text-[#fff] bg-[#3b5160]' : 'text-[#3b5160] bg-white'}`} onClick={() => setSelectedEvent("tod")}>Today</span>
            <span className={`py-[6px] px-[4.5rem] border-r border-t border-b border-l border-[#243a38] rounded-r cursor-pointer hover:underline ${selectedEvent == "tom" ? 'text-[#fff] bg-[#3b5160]' : 'text-[#3b5160] bg-white'}`} onClick={() => setSelectedEvent("tom")}>Tomorrow</span>
          </div>
          {selectedEvent == "inplay" &&
            <div className='overflow-y-auto' style={{ height: "calc(100vh - 112px)" }}>
              {/* Cricket */}
              <div className='border-b border-[#7e97a7] bg-[#fff]'>
                <div className='flex justify-between items-center text-xs leading-6 text-[#fff] bg-[#243a48] px-2'>
                  <div>Cricket</div>
                  <div className='flex justify-center items-center rounded-sm h-3 w-3 border border-[#fff]'><span>-</span></div>
                </div>
                <div className='flex justify-end text-xs bg-[#ced5da] w-full'>
                  <div className='flex w-[54%]'>
                    <span className='w-full text-end'>Matched</span>
                    <span className='w-full text-center'>1</span>
                    <span className='w-full text-center'>x</span>
                    <span className='w-full text-center'>2</span>
                  </div>
                </div>
                <div>
                  <ul>

                    {inplayEvents?.filter(i => i.event_type == "4")?.map((item) => (
                      <li className='flex w-full border-b border-[#eee]' key={item.id}>
                        <div className='flex justify-between items-center w-[60%] px-2 border-r border-[#eee]'>
                          <Link to={`/matchupdates/${item.event_id}/${item.is_inplay === "True" ? "Inplay" : "Going Inplay"}`} className='flex justify-between items-start gap-1'>
                            <span className='pt-1'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.png" alt="" /> : <img src="/Images/icon-no_play.png" alt="" />} </span>
                            <div className='flex flex-col leading-snug'>
                              <span className='text-xs font-bold text-[#2789ce] hover:underline'>{item.event_name}</span>
                              <span className='flex justify-start items-center gap-2'>
                                {item.is_inplay == "True" &&
                                  <span className='text-xs font-bold text-[#508d30]'>In-Play</span>
                                }
                                <div className='flex justify-center items-center gap-1'>
                                  <span className='flex justify-center items-center w-4 h-4 rounded-sm bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' /></span>
                                  {item.is_fancy == "True" &&
                                    <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/fancy.svg" alt="" className='w-3' /></span></span>
                                  }
                                  {item.is_bm == "True" &&
                                    <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='w-3' /></span></span>
                                  }
                                </div>
                              </span>
                            </div>
                          </Link>
                          <div>
                            <span className='text-xs text-[#777]'>
                              PIN47.62M
                            </span>
                          </div>
                        </div>
                        <div className=' w-[38%]'>
                          <ul className='flex py-[2px]'>
                            <li className='w-full border-r border-[#eee] pl-[2px] pr-1'>
                              <div className='flex '>
                                <div className='w-full h-8 bg-[#72bbef] mx-[1px]'></div>
                                <div className='w-full h-8 bg-[#faa9ba] mx-[1px]'></div>
                              </div>
                            </li>
                            <li className='w-full border-r border-[#eee] pl-[2px] pr-1'>
                              <div className='flex '>
                                <div className='w-full h-8 bg-[#72bbef] mx-[1px]'></div>
                                <div className='w-full h-8 bg-[#faa9ba] mx-[1px]'></div>
                              </div>
                            </li>
                            <li className='w-full border-r border-[#eee]'>
                              <div className='flex '>
                                <div className='w-full h-8 bg-[#72bbef] mx-[1px]'></div>
                                <div className='w-full h-8 bg-[#faa9ba] mx-[1px]'></div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className='flex justify-center items-center w-[2%]'>
                          <span className=''><img src="/Images/add-pin-s.png" alt="" /></span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Soccer */}
              <div className='border-b border-[#7e97a7] bg-[#fff] mt-4'>
                <div className='flex justify-between items-center text-xs leading-6 text-[#fff] bg-[#243a48] px-2'>
                  <div>Soccer</div>
                  <div className='flex justify-center items-center rounded-sm h-3 w-3 border border-[#fff]'><span>-</span></div>
                </div>
                <div className='flex justify-end text-xs bg-[#ced5da] w-full'>
                  <div className='flex w-[54%]'>
                    <span className='w-full text-end'>Matched</span>
                    <span className='w-full text-center'>1</span>
                    <span className='w-full text-center'>x</span>
                    <span className='w-full text-center'>2</span>
                  </div>
                </div>
                <div>
                  <ul>
                    {inplayEvents?.filter(i => i.event_type == "1")?.map((item) => (
                      <li className='flex w-full border-b border-[#eee]' key={item.id}>
                        <div className='flex justify-between items-center w-[60%] px-2 border-r border-[#eee]'>
                          <Link to={`/matchupdates/${item.event_id}/${item.is_inplay === "True" ? "Inplay" : "Going Inplay"}`} className='flex justify-between items-start gap-1'>
                            <span className='pt-1'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.png" alt="" /> : <img src="/Images/icon-no_play.png" alt="" />} </span>
                            <div className='flex flex-col leading-snug'>
                              <span className='text-xs font-bold text-[#2789ce] hover:underline'>{item.event_name}</span>
                              <span className='flex justify-start items-center gap-2'>
                                {item.is_inplay == "True" &&
                                  <span className='text-xs font-bold text-[#508d30]'>In-Play</span>
                                }
                                <div className='flex justify-center items-center gap-1'>
                                  <span className='flex justify-center items-center w-4 h-4 rounded-sm bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' /></span>
                                  {item.is_fancy == "True" &&
                                    <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/fancy.svg" alt="" className='w-3' /></span></span>
                                  }
                                  {item.is_bm == "True" &&
                                    <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='w-3' /></span></span>
                                  }
                                </div>
                              </span>
                            </div>
                          </Link>
                          <div>
                            <span className='text-xs text-[#777]'>
                              PIN47.62M
                            </span>
                          </div>
                        </div>
                        <div className=' w-[38%]'>
                          <ul className='flex py-[2px]'>
                            <li className='w-full border-r border-[#eee] pl-[2px] pr-1'>
                              <div className='flex '>
                                <div className='w-full h-8 bg-[#72bbef] mx-[1px]'></div>
                                <div className='w-full h-8 bg-[#faa9ba] mx-[1px]'></div>
                              </div>
                            </li>
                            <li className='w-full border-r border-[#eee] pl-[2px] pr-1'>
                              <div className='flex '>
                                <div className='w-full h-8 bg-[#72bbef] mx-[1px]'></div>
                                <div className='w-full h-8 bg-[#faa9ba] mx-[1px]'></div>
                              </div>
                            </li>
                            <li className='w-full border-r border-[#eee]'>
                              <div className='flex '>
                                <div className='w-full h-8 bg-[#72bbef] mx-[1px]'></div>
                                <div className='w-full h-8 bg-[#faa9ba] mx-[1px]'></div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className='flex justify-center items-center w-[2%]'>
                          <span className=''><img src="/Images/add-pin-s.png" alt="" /></span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Tennis */}
              <div className='border-b border-[#7e97a7] bg-[#fff] mt-4'>
                <div className='flex justify-between items-center text-xs leading-6 text-[#fff] bg-[#243a48] px-2'>
                  <div>Tennis</div>
                  <div className='flex justify-center items-center rounded-sm h-3 w-3 border border-[#fff]'><span>-</span></div>
                </div>
                <div className='flex justify-end text-xs bg-[#ced5da] w-full'>
                  <div className='flex w-[54%]'>
                    <span className='w-full text-end'>Matched</span>
                    <span className='w-full text-center'>1</span>
                    <span className='w-full text-center'>x</span>
                    <span className='w-full text-center'>2</span>
                  </div>
                </div>
                <div>
                  <ul>
                    {inplayEvents?.filter(i => i.event_type == "2")?.map((item) => (
                      <li className='flex w-full border-b border-[#eee]' key={item.id}>
                        <div className='flex justify-between items-center w-[60%] px-2 border-r border-[#eee]'>
                          <Link to={`/matchupdates/${item.event_id}/${item.is_inplay === "True" ? "Inplay" : "Going Inplay"}`} className='flex justify-between items-start gap-1'>
                            <span className='pt-1'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.png" alt="" /> : <img src="/Images/icon-no_play.png" alt="" />} </span>
                            <div className='flex flex-col leading-snug'>
                              <span className='text-xs font-bold text-[#2789ce] hover:underline'>{item.event_name}</span>
                              <span className='flex justify-start items-center gap-2'>
                                {item.is_inplay == "True" &&
                                  <span className='text-xs font-bold text-[#508d30]'>In-Play</span>
                                }
                                <div className='flex justify-center items-center gap-1'>
                                  <span className='flex justify-center items-center w-4 h-4 rounded-sm bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' /></span>
                                  {item.is_fancy == "True" &&
                                    <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/fancy.svg" alt="" className='w-3' /></span></span>
                                  }
                                  {item.is_bm == "True" &&
                                    <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='w-3' /></span></span>
                                  }
                                </div>
                              </span>
                            </div>
                          </Link>
                          <div>
                            <span className='text-xs text-[#777]'>
                              PIN47.62M
                            </span>
                          </div>
                        </div>
                        <div className=' w-[38%]'>
                          <ul className='flex py-[2px]'>
                            <li className='w-full border-r border-[#eee] pl-[2px] pr-1'>
                              <div className='flex '>
                                <div className='w-full h-8 bg-[#72bbef] mx-[1px]'></div>
                                <div className='w-full h-8 bg-[#faa9ba] mx-[1px]'></div>
                              </div>
                            </li>
                            <li className='w-full border-r border-[#eee] pl-[2px] pr-1'>
                              <div className='flex '>
                                <div className='w-full h-8 bg-[#72bbef] mx-[1px]'></div>
                                <div className='w-full h-8 bg-[#faa9ba] mx-[1px]'></div>
                              </div>
                            </li>
                            <li className='w-full border-r border-[#eee]'>
                              <div className='flex '>
                                <div className='w-full h-8 bg-[#72bbef] mx-[1px]'></div>
                                <div className='w-full h-8 bg-[#faa9ba] mx-[1px]'></div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className='flex justify-center items-center w-[2%]'>
                          <span className=''><img src="/Images/add-pin-s.png" alt="" /></span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>}

          {selectedEvent != "inplay" &&
            <>
              <div className='flex justify-between items-center text-xs bg-[#e0e6e6] border-b border-[#7e97a7] w-full p-3'>
                <div className='flex'>
                  <span className='font-bold mr-3'>Sports Filters:</span>
                  <span> Cricket E-Soccer Soccer Tennis</span>
                </div>
                <div className="py-1 px-8 [background-image:linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_rgba(255,255,255,0.5)] border border-[#bbb] rounded">
                  Filter
                </div>

              </div>
              <ul className='mt-2 bg-[#fff] overflow-y-auto' style={{ height: "calc(100vh - 112px)" }}>
                {inplayEvents?.map((item) => {
                  const time = new Date(item.open_date).toTimeString().slice(0, 5);

                  return (
                    <li className="p-2 border-b border-[#e0e6e6]" key={item.id}>
                      <div className="flex text-xs">
                        <span className="font-bold pr-7">{time}</span>
                        <div className="flex justify-center items-center text-xs">
                          {item.event_type === "4"
                            ? "Cricket"
                            : item.event_type === "1"
                              ? "Soccer"
                              : "Tennis"}
                          <img src="/Images/icon-fromto.png" alt="" className="px-1" />
                          <Link to={`/matchupdates/${item.event_id}/${item.is_inplay === "True" ? "Inplay" : "Going Inplay"}`} className="text-xs font-bold text-[#2789ce] hover:underline">
                            {item.event_name}
                          </Link>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </>}
        </div>
        {/* Left Section */}
        <div className='w-[25%] h-screen bg-[#fff]'>
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

                    <span className='pt-4 pr-2'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.png" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> : <img src="/Images/icon-no_play.png" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' />} </span>

                    <div className='flex flex-col justify-start items-start'>
                      <span className='flex justify-start items-center gap-1'>
                        <div className='flex justify-center items-center gap-1'>
                          {item.is_tv == "True" &&
                            <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                            </span>
                          }
                          {item.is_fancy == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                          }
                          {item.is_bm == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
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

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.png" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
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

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.png" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
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

                    <span className='pt-4 pr-2'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.png" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> : <img src="/Images/icon-no_play.png" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' />} </span>

                    <div className='flex flex-col justify-start items-start'>
                      <span className='flex justify-start items-center gap-1'>
                        <div className='flex justify-center items-center gap-1'>
                          {item.is_tv == "True" &&
                            <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                            </span>
                          }
                          {item.is_fancy == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                          }
                          {item.is_bm == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
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

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.png" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
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

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.png" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
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

                    <span className='pt-4 pr-2'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.png" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> : <img src="/Images/icon-no_play.png" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' />} </span>

                    <div className='flex flex-col justify-start items-start'>
                      <span className='flex justify-start items-center gap-1'>
                        <div className='flex justify-center items-center gap-1'>
                          {item.is_tv == "True" &&
                            <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                            </span>
                          }
                          {item.is_fancy == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
                          }
                          {item.is_bm == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
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

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.png" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
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

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.png" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-[4.5333333333vw] h-[4vw] rounded-[0.8vw] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' />
                        </span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-[0.8vw] h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#0a92a5]'><img src="/Images/fancy.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm h-[4vw] w-[4.2666666667vw]' /><span className='flex justify-center items-center rounded-r-[0.8vw] w-[4.2vw] bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='h-[2.9333333333vw] w-[2.9333333333vw]' /></span></span>
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

export default Inplay