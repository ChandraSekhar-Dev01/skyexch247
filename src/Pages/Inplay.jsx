import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Helper from '../helper';
import { getAllEvents } from '../redux/slice/event/eventSlice';

function Inplay() {

  const userInfo = Helper();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.events);

  const [selectedEvent, setSelectedEvent] = useState("inplay");
  const [inplayEvents, setInplayEvents] = useState([])

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
                          <div className='flex justify-between items-start gap-1'>
                            <span className='pt-1'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.png" alt="" /> : <img src="/Images/icon-no_play.png" alt="" />} </span>
                            <div className='flex flex-col leading-snug'>
                              <span className='text-xs font-bold text-[#2789ce]'>{item.event_name}</span>
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
                          </div>
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
                          <div className='flex justify-between items-start gap-1'>
                            <span className='pt-1'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.png" alt="" /> : <img src="/Images/icon-no_play.png" alt="" />} </span>
                            <div className='flex flex-col leading-snug'>
                              <span className='text-xs font-bold text-[#2789ce]'>{item.event_name}</span>
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
                          </div>
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
                          <div className='flex justify-between items-start gap-1'>
                            <span className='pt-1'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.png" alt="" /> : <img src="/Images/icon-no_play.png" alt="" />} </span>
                            <div className='flex flex-col leading-snug'>
                              <span className='text-xs font-bold text-[#2789ce]'>{item.event_name}</span>
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
                          </div>
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
                          <span className="text-xs font-bold text-[#2789ce]">
                            {item.event_name}
                          </span>
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
        <div className='flex text-base font-bold bg-[#172832]'>
          <div className='py-4 px-2'>
            <span className={` py-2 px-8 border-r border-t border-b border-l border-[#fff] rounded-l-md cursor-pointer ${selectedEvent == "inplay" ? 'text-[#3b5160] bg-white' : 'text-[#fff] '}`} onClick={() => setSelectedEvent("inplay")}>In-Play</span>
            <span className={` py-2 px-8 border-r border-t border-b border-l border-[#fff] cursor-pointer ${selectedEvent == "tod" ? 'text-[#3b5160] bg-white' : 'text-[#fff] '}`} onClick={() => setSelectedEvent("tod")}>Today</span>
            <span className={` py-2 px-8 border-r border-t border-b border-l border-[#fff] rounded-r-md cursor-pointer ${selectedEvent == "tom" ? 'text-[#3b5160] bg-white' : 'text-[#fff] '}`} onClick={() => setSelectedEvent("tom")}>Tomorrow</span>
          </div>

          {/* <div className="flex justify-center items-center w-full bg-[#1f5172] [background-image:linear-gradient(-180deg,_rgba(255,255,255,0.15)_0%,_rgba(0,0,0,0.15)_100%)]">
            <img src="/Images/search-icon.svg" alt="Search" className="w-4 h-4" />
          </div> */}

        </div>
        {/* Cricket */}
        <div>
          <span className='flex justify-center items-center p-2 [background-image:linear-gradient(-180deg,_#2e4b5e_0%,_#243a48_82%)] text-base text-white font-bold'>Cricket</span>
          <ul className='bg-[#fff] border-b-4 border-[#070707]'>
            {inplayEvents?.filter(i => i.event_type == "4")?.map((item) => (
              <li key={item.id} className='py-1 px-2 border-b border-[#e0e6e6]'>
                <div className='flex justify-between items-center'>
                  <div className='flex justify-start items-center border-r border-[#eee]'>

                    <span className='pt-4 pr-2'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.png" alt="" className='w-3' /> : <img src="/Images/icon-no_play.png" alt="" className='w-3' />} </span>

                    <div className='flex flex-col justify-start items-start'>
                      <span className='flex justify-start items-center gap-1'>
                        <div className='flex justify-center items-center gap-1'>
                          {item.is_tv == "True" &&
                            <span className='flex justify-center items-center w-4 h-4 rounded-sm bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' />
                            </span>}
                          {item.is_fancy == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/fancy.svg" alt="" className='w-3' /></span></span>
                          }
                          {item.is_bm == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='w-3' /></span></span>
                          }
                        </div>
                        <span className='bg-[#e4550f] w-4 p-[2px] rounded'>
                          <img src="/Images/premium-icon.svg" alt="" />
                        </span>
                        {item.is_inplay == "True" &&
                          <span className='text-sm text-[#777]'>In-Play</span>
                        }
                      </span>
                      <span className='text-md font-bold text-[#2789ce] leading-snug truncate w-[80vw] max-w-[20rem]'>{item.event_name}</span>
                    </div>
                  </div>
                  <div>
                    <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-7' /></span>
                  </div>
                </div>
              </li>
            ))}

            <li className='py-1 px-2 border-b border-[#e0e6e6]'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center border-r border-[#eee]'>

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.png" alt="" className='w-3' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-4 h-4 rounded-sm bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' />
                        </span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/fancy.svg" alt="" className='w-3' /></span></span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='w-3' /></span></span>
                      </div>
                      <span className='bg-[#e4550f] w-4 p-[2px] rounded'>
                        <img src="/Images/premium-icon.svg" alt="" />
                      </span>
                      <span className='text-sm text-[#777]'>In-Play</span>
                      <span className='flex justify-center items-center text-[10px] font-bold border border-[#1f5172] text-[#1f5172] rounded leading-snug'>
                        <span className='flex justify-center items-center w-4 h-4 bg-[#1f5172]'>
                          <img src="/Images/E-icon.svg" alt="" className=' px-1' />
                        </span>
                        <span className='py-[0px] px-2 bg-[#fff]'>Cricket</span>
                      </span>
                    </span>
                    <span className='text-md font-bold text-[#2789ce] leading-snug truncate w-[80vw] max-w-[20rem]'>Durban Super Giants SRL T20 vs Pretoria Capitals SRL T20</span>
                  </div>
                </div>
                <div>
                  <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-7' /></span>
                </div>
              </div>
            </li>
            <li className='py-1 px-2 border-b border-[#e0e6e6]'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center border-r border-[#eee]'>

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.png" alt="" className='w-3' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-4 h-4 rounded-sm bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' />
                        </span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/fancy.svg" alt="" className='w-3' /></span></span>

                        <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='w-3' /></span></span>
                      </div>
                      <span className='bg-[#e4550f] w-4 p-[2px] rounded'>
                        <img src="/Images/premium-icon.svg" alt="" />
                      </span>
                      <span className='text-sm text-[#777]'>In-Play</span>
                      <span className='flex justify-center items-center text-[10px] font-bold border border-[#1f5172] text-[#1f5172] rounded leading-snug'>
                        <span className='flex justify-center items-center w-4 h-4 bg-[#1f5172]'>
                          <img src="/Images/E-icon.svg" alt="" className=' px-1' />
                        </span>
                        <span className='py-[0px] px-2 bg-[#fff]'>Cricket</span>
                      </span>
                    </span>
                    <span className='text-md font-bold text-[#2789ce] leading-snug truncate w-[80vw] max-w-[20rem]'>Melbourne Stars SRL T20 vs Brisbane Heat SRL T20</span>
                  </div>
                </div>
                <div>
                  <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-7' /></span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Soccer */}
        <div className='mt-5'>
          <span className='flex justify-center items-center p-2 [background-image:linear-gradient(-180deg,_#2e4b5e_0%,_#243a48_82%)] text-base text-white font-bold'>Soccer</span>
          <ul className='bg-[#fff] border-b-4 border-[#070707]'>
            {inplayEvents?.filter(i => i.event_type == "1")?.map((item) => (
              <li key={item.id} className='py-1 px-2 border-b border-[#e0e6e6]'>
                <div className='flex justify-between items-center'>
                  <div className='flex justify-start items-center border-r border-[#eee]'>

                    <span className='pt-4 pr-2'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.png" alt="" className='w-3' /> : <img src="/Images/icon-no_play.png" alt="" className='w-3' />} </span>

                    <div className='flex flex-col justify-start items-start'>
                      <span className='flex justify-start items-center gap-1'>
                        <div className='flex justify-center items-center gap-1'>
                          {item.is_tv == "True" &&
                            <span className='flex justify-center items-center w-4 h-4 rounded-sm bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' />
                            </span>}
                          {item.is_fancy == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/fancy.svg" alt="" className='w-3' /></span></span>
                          }
                          {item.is_bm == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='w-3' /></span></span>
                          }
                        </div>
                        {item.is_inplay == "True" &&
                          <span className='text-sm text-[#777]'>In-Play</span>
                        }
                      </span>
                      <span className='text-md font-bold text-[#2789ce] leading-snug truncate w-[80vw] max-w-[20rem]'>{item.event_name}</span>
                    </div>
                  </div>
                  <div>
                    <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-7' /></span>
                  </div>
                </div>
              </li>
            ))}
            <li className='py-1 px-2 border-b border-[#e0e6e6]'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center border-r border-[#eee]'>

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.png" alt="" className='w-3' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-4 h-4 rounded-sm bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' />
                        </span>
                      </div>
                      <span className='bg-[#e4550f] w-4 p-[2px] rounded'>
                        <img src="/Images/premium-icon.svg" alt="" />
                      </span>
                      <span className='text-sm text-[#777]'>In-Play</span>
                      <span className='flex justify-center items-center text-[10px] font-bold border border-[#1f5172] text-[#1f5172] rounded leading-snug'>
                        <span className='flex justify-center items-center w-4 h-4 bg-[#1f5172]'>
                          <img src="/Images/E-icon.svg" alt="" className=' px-1' />
                        </span>
                        <span className='py-[0px] px-2 bg-[#fff]'>Soccer</span>
                      </span>
                    </span>
                    <span className='text-md font-bold text-[#2789ce] leading-snug truncate w-[80vw] max-w-[20rem]'>PSV Eindhoven SRL vs Olympique Marseille SRL</span>
                  </div>
                </div>
                <div>
                  <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-7' /></span>
                </div>
              </div>
            </li>
            <li className='py-1 px-2 border-b border-[#e0e6e6]'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center border-r border-[#eee]'>

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.png" alt="" className='w-3' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-4 h-4 rounded-sm bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' />
                        </span>
                      </div>
                      <span className='bg-[#e4550f] w-4 p-[2px] rounded'>
                        <img src="/Images/premium-icon.svg" alt="" />
                      </span>
                      <span className='text-sm text-[#777]'>In-Play</span>
                      <span className='flex justify-center items-center text-[10px] font-bold border border-[#1f5172] text-[#1f5172] rounded leading-snug'>
                        <span className='flex justify-center items-center w-4 h-4 bg-[#1f5172]'>
                          <img src="/Images/E-icon.svg" alt="" className=' px-1' />
                        </span>
                        <span className='py-[0px] px-2 bg-[#fff]'>Soccer</span>
                      </span>
                    </span>
                    <span className='text-md font-bold text-[#2789ce] leading-snug truncate w-[80vw] max-w-[20rem]'>HNK Rijeka SRL vs Venezia FC SRL</span>
                  </div>
                </div>
                <div>
                  <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-7' /></span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Tennis */}
        <div className='mt-5'>
          <span className='flex justify-center items-center p-2 [background-image:linear-gradient(-180deg,_#2e4b5e_0%,_#243a48_82%)] text-base text-white font-bold'>Tennis</span>
          <ul className='bg-[#fff] border-b-4 border-[#070707]'>
            {inplayEvents?.filter(i => i.event_type == "2")?.map((item) => (
              <li key={item.id} className='py-1 px-2 border-b border-[#e0e6e6]'>
                <div className='flex justify-between items-center'>
                  <div className='flex justify-start items-center border-r border-[#eee]'>

                    <span className='pt-4 pr-2'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.png" alt="" className='w-3' /> : <img src="/Images/icon-no_play.png" alt="" className='w-3' />} </span>

                    <div className='flex flex-col justify-start items-start'>
                      <span className='flex justify-start items-center gap-1'>
                        <div className='flex justify-center items-center gap-1'>
                          {item.is_tv == "True" &&
                            <span className='flex justify-center items-center w-4 h-4 rounded-sm bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' />
                            </span>}
                          {item.is_fancy == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/fancy.svg" alt="" className='w-3' /></span></span>
                          }
                          {item.is_bm == "True" &&
                            <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='w-3' /></span></span>
                          }
                        </div>
                        {item.is_inplay == "True" &&
                          <span className='text-sm text-[#777]'>In-Play</span>
                        }
                      </span>
                      <span className='text-md font-bold text-[#2789ce] leading-snug truncate w-[80vw] max-w-[20rem]'>{item.event_name}</span>
                    </div>
                  </div>
                  <div>
                    <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-7' /></span>
                  </div>
                </div>
              </li>
            ))}
            <li className='py-1 px-2 border-b border-[#e0e6e6]'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center border-r border-[#eee]'>

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.png" alt="" className='w-3' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-4 h-4 rounded-sm bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' />
                        </span>
                      </div>
                      <span className='bg-[#e4550f] w-4 p-[2px] rounded'>
                        <img src="/Images/premium-icon.svg" alt="" />
                      </span>
                      <span className='text-sm text-[#777]'>In-Play</span>
                      <span className='flex justify-center items-center text-[10px] font-bold border border-[#1f5172] text-[#1f5172] rounded leading-snug'>
                        <span className='flex justify-center items-center w-4 h-4 bg-[#1f5172]'>
                          <img src="/Images/E-icon.svg" alt="" className=' px-1' />
                        </span>
                        <span className='py-[0px] px-2 bg-[#fff]'>Tennis</span>
                      </span>
                    </span>
                    <span className='text-md font-bold text-[#2789ce] leading-snug truncate w-[80vw] max-w-[20rem]'>Paolini, Jasmine SRL vs Linette, Magda SRL</span>
                  </div>
                </div>
                <div>
                  <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-7' /></span>
                </div>
              </div>
            </li>
            <li className='py-1 px-2 border-b border-[#e0e6e6]'>
              <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center border-r border-[#eee]'>

                  <span className='pt-4 pr-2'><img src="/Images/icon-in_play.png" alt="" className='w-3' /> </span>

                  <div className='flex flex-col justify-start items-start'>
                    <span className='flex justify-start items-center gap-1'>
                      <div className='flex justify-center items-center gap-1'>

                        <span className='flex justify-center items-center w-4 h-4 rounded-sm bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' />
                        </span>
                      </div>
                      <span className='bg-[#e4550f] w-4 p-[2px] rounded'>
                        <img src="/Images/premium-icon.svg" alt="" />
                      </span>
                      <span className='text-sm text-[#777]'>In-Play</span>
                      <span className='flex justify-center items-center text-[10px] font-bold border border-[#1f5172] text-[#1f5172] rounded leading-snug'>
                        <span className='flex justify-center items-center w-4 h-4 bg-[#1f5172]'>
                          <img src="/Images/E-icon.svg" alt="" className=' px-1' />
                        </span>
                        <span className='py-[0px] px-2 bg-[#fff]'>Tennis</span>
                      </span>
                    </span>
                    <span className='text-md font-bold text-[#2789ce] leading-snug truncate w-[80vw] max-w-[20rem]'>Kostyuk, Marta SRL vs Minnen, Greet SRL</span>
                  </div>
                </div>
                <div>
                  <span className=''><img src="/Images/bookmark-pin.svg" alt="" className='w-7' /></span>
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