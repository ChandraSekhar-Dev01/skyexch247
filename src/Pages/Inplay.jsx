import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Helper from '../helper';
import { getAllEvents } from '../redux/slice/event/eventSlice';
import { Link } from 'react-router-dom';
import News from '../components/News';

function Inplay() {

  const userInfo = Helper();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.events);

  const [selectedEvent, setSelectedEvent] = useState("inplay");
  const [selectedResultEvent, setSelectedResultEvent] = useState("tod");
  const [resultFilter, setResultFilter] = useState("4");
  const [inplayEvents, setInplayEvents] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);


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
            <span className={`py-[6px] px-[4.5rem] border-r border-t border-b border-l border-[#243a38] rounded-l cursor-pointer hover:underline ${selectedEvent == "inplay" ? 'text-[#fff] bg-[#3b5160]' : 'text-[#3b5160] bg-white'}`} onClick={() => setSelectedEvent("inplay")}>In-Play</span>
            <span className={`py-[6px] px-[4.5rem] border-r border-t border-b border-l border-[#243a38] cursor-pointer hover:underline ${selectedEvent == "tod" ? 'text-[#fff] bg-[#3b5160]' : 'text-[#3b5160] bg-white'}`} onClick={() => setSelectedEvent("tod")}>Today</span>
            <span className={`py-[6px] px-[4.5rem] border-r border-t border-b border-l border-[#243a38] rounded-r cursor-pointer hover:underline ${selectedEvent == "tom" ? 'text-[#fff] bg-[#3b5160]' : 'text-[#3b5160] bg-white'}`} onClick={() => setSelectedEvent("tom")}>Tomorrow</span>
          </div>
          {selectedEvent == "inplay" &&
            <div className='overflow-hidden overflow-y-scroll h-[calc(100vh-19.5vh)] scroll-hide'>
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
                                  <span className='flex justify-center items-center w-[18px] h-4 rounded-[3px] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' /></span>
                                  {item.is_fancy == "True" &&
                                    <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/fancy.svg" alt="" className='w-3' /></span></span>
                                  }
                                  {item.is_bm == "True" &&
                                    <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='w-3' /></span></span>
                                  }
                                  <span className='flex justify-center items-center w-4 h-4 rounded-[3px] bg-[#e4550f]'>
                                    <img src="/Images/premium-icon.svg" alt="" className='w-3' />
                                  </span>
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
                                  <span className='flex justify-center items-center w-[18px] h-4 rounded-[3px] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' /></span>
                                  {item.is_fancy == "True" &&
                                    <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/fancy.svg" alt="" className='w-3' /></span></span>
                                  }
                                  {item.is_bm == "True" &&
                                    <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='w-3' /></span></span>
                                  }
                                  <span className='flex justify-center items-center w-4 h-4 rounded-[3px] bg-[#e4550f]'>
                                    <img src="/Images/premium-icon.svg" alt="" className='w-3' />
                                  </span>
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
                                  <span className='flex justify-center items-center w-[18px] h-4 rounded-[3px] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' /></span>
                                  {item.is_fancy == "True" &&
                                    <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/fancy.svg" alt="" className='w-3' /></span></span>
                                  }
                                  {item.is_bm == "True" &&
                                    <span className='flex'><img src="/Images/icon-fancy_inplay.png" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='w-3' /></span></span>
                                  }
                                  <span className='flex justify-center items-center w-4 h-4 rounded-[3px] bg-[#e4550f]'>
                                    <img src="/Images/premium-icon.svg" alt="" className='w-3' />
                                  </span>
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
              {/* Filter Section */}
              <div className='relative p-[10px_10px_0] mb-[10px] bg-[#e0e6e6] border-b border-[#7e97a7] text-[12px] text-[#1e1e1e] leading-[15px]'>
                <ul className='block clear-both mb-[5px] mr-[5px]'>
                  <li className='block float-left w-[85px] font-bold leading-[25px] m-[0_5px_5px_0] whitespace-nowrap'>Sport Filters:</li>
                  <li className='block float-left w-[calc(100%-195px)] h-[25px] overflow-hidden text-ellipsis whitespace-nowrap leading-[25px] m-[0_5px_5px_0]'>
                    <span className='pl-0 mr-[5px] text-[#243a48] whitespace-nowrap leading-[25px]'>Cricket</span>
                    <span className='pl-[10px] mr-[5px] text-[#243a48] whitespace-nowrap leading-[25px] bg-no-repeat bg-left' style={{ backgroundImage: "url('/Images/filter_dot.png')" }}>E-Soccer</span>
                    <span className='pl-[10px] mr-[5px] text-[#243a48] whitespace-nowrap leading-[25px] bg-no-repeat bg-left' style={{ backgroundImage: "url('/Images/filter_dot.png')" }}>Kabaddi</span>
                    <span className='pl-[10px] mr-[5px] text-[#243a48] whitespace-nowrap leading-[25px] bg-no-repeat bg-left' style={{ backgroundImage: "url('/Images/filter_dot.png')" }}>Soccer</span>
                    <span className='pl-[10px] mr-[5px] text-[#243a48] whitespace-nowrap leading-[25px] bg-no-repeat bg-left' style={{ backgroundImage: "url('/Images/filter_dot.png')" }}>Tennis</span>
                  </li>
                  <li className='block float-leftw-[95px] leading-[25px] m-[0_5px_5px_0] whitespace-nowrap'>
                    <span
                      className='block float-left text-center whitespace-nowrap w-[93px] min-w-[95px] m-0 font-normal bg-[linear-gradient(180deg,#ffffff_0%,#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] border border-[#bbb] rounded text-[#1e1e1e] leading-[23px] text-[12px] cursor-pointer hover:bg-[linear-gradient(0deg,_#ffffff_0%,_#ececec_89%)] hover:shadow-[inset_0_0px_0_0_#ffffff80]'
                      onClick={() => setFilterOpen(!filterOpen)}
                    >
                      Filter
                    </span>
                  </li>
                  <span className='block clear-both'></span>
                </ul>
                {filterOpen &&
                  <div className='block absolute right-0 w-[500px] rounded bg-[#fff] p-[8px_8px_0] ml-[-500px] z-[3] shadow-[0_4px_5px_#00000080]'>
                    <ul className='flex clear-both mb-[5px]'>
                      <li className='block w-[250px]'>
                        <li className="block float-left list-none w-[250px] mb-[3px]">
                          <input name='sportFilter' type='checkbox' value='1' defaultChecked className='w-auto h-auto p-0 text-[#1e1e1e] text-[12px] bg-[#fff] m-[0_5px_5px_0] box-border [accent-color:#0275ff] inline-block' />
                          <label className='cursor-pointer'>All</label>
                        </li>
                        <li className="block float-left list-none w-[250px] mb-[3px]">
                          <input name='sportFilter' type='checkbox' value='-1' defaultChecked className='w-auto h-auto p-0 text-[#1e1e1e] text-[12px] bg-[#fff] m-[0_5px_5px_0] box-border [accent-color:#0275ff] inline-block' />
                          <label className='cursor-pointer'>Tennis</label>
                        </li>
                        <li className="block float-left list-none w-[250px] mb-[3px]">
                          <input name='sportFilter' type='checkbox' value='-1' defaultChecked className='w-auto h-auto p-0 text-[#1e1e1e] text-[12px] bg-[#fff] m-[0_5px_5px_0] box-border [accent-color:#0275ff] inline-block' />
                          <label className='cursor-pointer'>E-Soccer</label>
                        </li>
                      </li>
                      <li className='block w-[250px]'>
                        <li className="block float-left list-none w-[250px] mb-[3px]">
                          <input name='sportFilter' type='checkbox' value='-1' defaultChecked className='w-auto h-auto p-0 text-[#1e1e1e] text-[12px] bg-[#fff] m-[0_5px_5px_0] box-border [accent-color:#0275ff] inline-block' />
                          <label className='cursor-pointer'>Soccer</label>
                        </li>
                        <li className="block float-left list-none w-[250px] mb-[3px]">
                          <input name='sportFilter' type='checkbox' value='-1' defaultChecked className='w-auto h-auto p-0 text-[#1e1e1e] text-[12px] bg-[#fff] m-[0_5px_5px_0] box-border [accent-color:#0275ff] inline-block' />
                          <label className='cursor-pointer'>Cricket</label>
                        </li>
                        <li className="block float-left list-none w-[250px] mb-[3px]">
                          <input name='sportFilter' type='checkbox' value='-1' defaultChecked className='w-auto h-auto p-0 text-[#1e1e1e] text-[12px] bg-[#fff] m-[0_5px_5px_0] box-border [accent-color:#0275ff] inline-block' />
                          <label className='cursor-pointer'>Kabaddi</label>
                        </li>
                      </li>
                      <span className='block clear-both'></span>
                    </ul>
                    <div className='block clear-both border-t border-[#ccc] pt-[8px] mb-[7px] text-[12px] text-[#1e1e1e] leading-[15px]'>
                      <span className='block text-center w-[20%] mr-[10px] float-left m-0 text-[#ffb600] border border-[#222] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] box-[initial] rounded font-bold leading-[23px] text-[12px]'>Save</span>
                      <span className='block text-center w-[15%] mr-[10px] float-left m-0 text-[#1e1e1e] border border-[#bbb] bg-[linear-gradient(180deg,_#ffffff_0%,_#eeeeee_89%)] shadow-[inset_0_2px_0_0_#ffffff80] rounded font-bold leading-[23px] text-[12px]'>Cancel</span>
                      <span className='block clear-both'></span>
                    </div>
                  </div>
                }
              </div>

              {/* Events Listing */}
              <ul className='mt-2 bg-[#fff] overflow-y-auto h-[calc(100vh-26vh)]'>
                {inplayEvents?.map((item) => {
                  const time = new Date(item.open_date).toTimeString().slice(0, 5);

                  return (
                    <li className="p-2 border-b border-[#e0e6e6]" key={item.id}>
                      <div className="flex text-xs">
                        <span className="font-bold pr-7 text-[#243a48]">{time}</span>
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
        {selectedEvent !== "result" &&
          <>
            <div className='bg-[#172832] text-[#fff] text-[3.46666vw] leading-[8.8vw] font-bold box-border flex'>
              <ul className='border border-[#fff] rounded-[1.6vw] flex flex-1 m-[1.6vw_1.86666vw]'>
                <li
                  className={`${selectedEvent == "inplay" ? 'text-[#172832] bg-[#fff]' : 'text-[#fff] '} flex flex-1 items-center justify-center border-r border-[#fff] rounded-[1.3333333333vw_0_0_1.3333333333vw] text-center list-none`}
                  onClick={() => setSelectedEvent("inplay")}
                >
                  <span className='block'>In-Play</span>
                </li>
                <li
                  className={`${selectedEvent == "tod" ? 'text-[#172832] bg-[#fff]' : 'text-[#fff] '} flex flex-1 items-center justify-center border-r border-r-[#fff] text-center list-none`}
                  onClick={() => setSelectedEvent("tod")}
                >
                  <span className='block'>Today</span>
                </li>
                <li
                  className={`${selectedEvent == "tom" ? 'text-[#172832] bg-[#fff]' : 'text-[#fff] '} flex flex-1 items-center justify-center text-center list-none ${userInfo ? "border-r border-r-[#fff]" : "rounded-[0_1.3333333333vw_1.3333333333vw_0]"}`}
                  onClick={() => setSelectedEvent("tom")}
                >
                  <span className='block'>Tomorrow</span>
                </li>
                {userInfo &&
                  <li
                    className={`${selectedEvent == "result" ? 'text-[#172832] bg-[#fff]' : 'text-[#fff] '} flex flex-1 items-center justify-center border-r border-r-[#fff] text-center list-none rounded-[0_1.3333333333vw_1.3333333333vw_0]`}
                    onClick={() => setSelectedEvent("result")}
                  >
                    <span className='block'>Result</span>
                  </li>
                }
              </ul>
              <span className='flex-[0_1_12.5333333333vw] relative bg-[linear-gradient(-180deg,_#ffffff26_0%,_#00000026_100%)] text-[#fff] block z-[2] right-0 w-[12.8vw] h-[12.26666vw] p-0 border-l border-l-[#ffffff1a] indent-[-99999px]'>
                <span
                  className='absolute top-[25%] left-[25%] [transform-translate(-50%, -50%)] w-[5.866666vw] h-[5.8666666vw] bg-no-repeat bg-center bg-cover'
                  style={{ backgroundImage: "url('/Images/search-icon.svg')" }}></span>
              </span>
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
          </>}

        {/* Result */}
        {selectedEvent === "result" &&
          <>
            <div className='block p-[1.6vw_1.8666666667vw] bg-[#172832] text-[#fff] text-[3.4666666vw] leading-[8.8vw] font-bold box-border'>
              <ul className='m-0 mb-[1.866666vw] border border-[#fff] rounded-[1.6vw] flex'>
                <li
                  className={`${selectedResultEvent === "tod" ? "text-[#172832] bg-[#fff]" : "text-[#fff]"} rounded-[1.3333333333vw_0_0_1.3333333333vw] flex-1 border-r border-r-[#fff] text-center`}
                  onClick={() => setSelectedResultEvent('tod')}
                >
                  <span className='block'>Today</span>
                </li>
                <li
                  className={`${selectedResultEvent === "yes" ? "text-[#172832] bg-[#fff]" : "text-[#fff]"} rounded-[0_1.3333333333vw_1.3333333333vw_0] flex-1 border-r border-r-[#fff] text-center`}
                  onClick={() => setSelectedResultEvent('yes')}
                >
                  <span className='block'>Yesterday</span>
                </li>
              </ul>
              <div className='mb-0 relative w-full h-[10.6666vw] m-0 bg-[#fff] rounded-[1.6vw] text-[#1e1e1e]'>
                <select
                  name=""
                  id=""
                  className='w-full h-full m-0 p-0 px-[1rem] bg-[#00000000] text-[#1e1e1e] font-normal cursor-pointer text-[4.26666vw] leading-[4.8vw] rounded-[1.6vw]'
                  onChange={(e) => setResultFilter(e.target.value)}
                >
                  <option value="4" className=''>CRICKET</option>
                  <option value="1" className=''>SOCCER</option>
                  <option value="999999" className=''>E_SOCCER</option>
                  <option value="11" className=''>FANCYBET</option>
                </select>

                <span className='absolute top-[44%] right-[0.133333%] [transform-translate(0,-50%)] border-t-[2.13333vw] border-t-[#1e1e1e] border-l-[2.133333vw] border-l-[#00000000] border-r-[2.1333333vw] border-r-[#00000000]'></span>
              </div>
            </div>
            {resultFilter !== "11" &&
              <div className='block mb-[2.666vw]'>
                <dl className='flex items-stretch min-h-[17.3333vw] bg-[#fff] border-b border-b-[#7e97a7] text-[#666] box-border'>
                  <dt className='flex flex-[2] text-[4.266666vw] leading-[5.33333vw] relative justify-start items-center p-[6.6666666667vw_1.6vw_1.6vw_1.6vw] box-border'>
                    <p className='absolute left-[1.6vw] w-full top-[1.6vw] text-[2.93333vw] leading-[3.7333333vw] box-border'>2025-09-01 09:30</p>
                    <strong className=''>Islamabad United SRL T20 v Karachi Kings SRL T20</strong>
                  </dt>
                  <dd className='flex flex-1 text-center text-[5.3333vw] border-l border-l-[#e0e6e6] relative justify-start items-center p-[6.6666666667vw_1.6vw_1.6vw_1.6vw] box-border'>
                    <p className='absolute w-full top-[1.6vw] left-0 text-[2.933333vw] leading-[3.733333vw] box-border'>{resultFilter === '4' ? 'Home' : 'HT'}</p>
                    <strong className='text-[#000] w-full'>{resultFilter === '4' ? '181/5' : '0-0'}</strong>
                  </dd>
                  <dd className='flex flex-1 text-center text-[5.3333vw] border-l border-l-[#e0e6e6] relative justify-start items-center p-[6.6666666667vw_1.6vw_1.6vw_1.6vw] box-border'>
                    <p className='absolute w-full top-[1.6vw] left-0 text-[2.933333vw] leading-[3.733333vw] box-border'>{resultFilter === '4' ? 'Away' : 'FT'}</p>
                    <strong className='text-[#000] w-full'>{resultFilter === '4' ? '176/2' : '0-0'}</strong>
                  </dd>
                </dl>
                <dl className='flex items-stretch min-h-[17.3333vw] bg-[#fff] border-b border-b-[#7e97a7] text-[#666] box-border'>
                  <dt className='flex flex-[2] text-[4.266666vw] leading-[5.33333vw] relative justify-start items-center p-[6.6666666667vw_1.6vw_1.6vw_1.6vw] box-border'>
                    <p className='absolute left-[1.6vw] w-full top-[1.6vw] text-[2.93333vw] leading-[3.7333333vw] box-border'>2025-09-01 09:30</p>
                    <strong className=''>Chennai Super Kings SRL T20 v Sunrisers Hyderabad SRL T20</strong>
                  </dt>
                  <dd className='flex flex-1 text-center text-[5.3333vw] border-l border-l-[#e0e6e6] relative justify-start items-center p-[6.6666666667vw_1.6vw_1.6vw_1.6vw] box-border'>
                    <p className='absolute w-full top-[1.6vw] left-0 text-[2.933333vw] leading-[3.733333vw] box-border'>{resultFilter === '4' ? 'Home' : 'HT'}</p>
                    <strong className='text-[#000] w-full'>{resultFilter === '4' ? '181/5' : '0-0'}</strong>
                  </dd>
                  <dd className='flex flex-1 text-center text-[5.3333vw] border-l border-l-[#e0e6e6] relative justify-start items-center p-[6.6666666667vw_1.6vw_1.6vw_1.6vw] box-border'>
                    <p className='absolute w-full top-[1.6vw] left-0 text-[2.933333vw] leading-[3.733333vw] box-border'>{resultFilter === '4' ? 'Away' : 'FT'}</p>
                    <strong className='text-[#000] w-full'>{resultFilter === '4' ? '176/2' : '0-0'}</strong>
                  </dd>
                </dl>
              </div>
            }
            {resultFilter === "11" &&
              <div className='block'>
                <dl className='relative flex items-center flex-wrap p-[2.133333vw] bg-[#fff] border-b-[0.26666vw] border-b-[#89aec4]'>
                  <p className='text-[2.93333vw] leading-[2.93333vw] mb-[1.3333vw] text-[#777]'>2025/08/31 14:30:00</p>
                  <strong className='text-[4vw] w-[95%]'>Trivandrum Royals v Aries Kollam Sailors</strong>
                  <span
                    className='block absolute top-[35%] right-[2%] [transform-translate(-50%, -50%)] w-[4vw] h-[4vw] bg-no-repeat bg-contain'
                    style={{ backgroundImage: "url('/Images/collapse.svg')" }}
                  ></span>
                </dl>
                {/* Expandable block Start*/}
                <div className='bg-[#b8c8d1] block p-[1.6vw_1.86666vw] text-[#fff] text-[3.466666vw] leading-[8.8vw] font-bold box-border'>
                  <div className='mb-0 relative w-full h-[10.6666vw] m-0 bg-[#fff] rounded-[1.6vw] text-[#1e1e1e]'>
                    <select name="" id="" className='w-full h-full m-0 p-0 px-[1rem] bg-[#00000000] text-[#1e1e1e] font-normal cursor-pointer text-[4.266666vw] leading-[8.8vw] rounded-[1.6vw]'>
                      <option value="All">All</option>
                      <option value="7">Three Selections</option>
                      <option value="1">Overs</option>
                      <option value="2">Batsman</option>
                      <option value="3">Single Over</option>
                      <option value="8">Ball by Ball</option>
                      <option value="4">Khadda</option>
                      <option value="5">Lottery</option>
                      <option value="6">Odd Event</option>
                    </select>


                    <span className='absolute top-[42%] right-[0.13333vw] [transform-translate(0, -50%)] border-t-[2.13333vw] border-t-[#1e1e1e] border-l-[2.133333vw] border-l-[#00000000] border-r-[2.1333333vw] border-r-[#00000000]'></span>
                  </div>
                </div>
                {/* Listing */}
                <div>
                  <dl className='flex bg-[#e7eff3] border-b-[0.2666666vw] border-b-[#7e97a7]'>
                    <dt className='flex flex-[8] flex-wrap items-center p-[2.13333vw]'>
                      <label className='block text-[2.933333vw] leading-[2.933333vw] mb-[1.333333vw] text-[#536a74]'>cricbuzz</label>
                      <strong className='block text-[3.7333333vw] w-full'>6 Over TR</strong>
                    </dt>
                    <dd className='flex flex-1 flex-wrap items-center p-[2.133333vw] border-l-[0.266666vw] border-l-[#bfcfd9]'>
                      <label className='block text-[2.933333vw] leading-[2.933333vw] mb-[1.333333vw] text-[#536a74]'>Runs</label>
                      <strong className='block text-[3.7333333vw] w-full'>60</strong>
                    </dd>
                  </dl>
                </div>

                <div>
                  <dl className='flex bg-[#e7eff3] border-b-[0.2666666vw] border-b-[#7e97a7]'>
                    <dt className='flex flex-[8] flex-wrap items-center p-[2.13333vw]'>
                      <label className='block text-[2.933333vw] leading-[2.933333vw] mb-[1.333333vw] text-[#536a74]'>cricbuzz</label>
                      <strong className='block text-[3.7333333vw] w-full'>10 Over TR</strong>
                    </dt>
                    <dd className='flex flex-1 flex-wrap items-center p-[2.133333vw] border-l-[0.266666vw] border-l-[#bfcfd9]'>
                      <label className='block text-[2.933333vw] leading-[2.933333vw] mb-[1.333333vw] text-[#536a74]'>Runs</label>
                      <strong className='block text-[3.7333333vw] w-full'>87</strong>
                    </dd>
                  </dl>
                </div>
                {/* Expandable block End*/}
                <dl className='relative flex items-center flex-wrap p-[2.133333vw] bg-[#fff] border-b-[0.26666vw] border-b-[#89aec4]'>
                  <p className='text-[2.93333vw] leading-[2.93333vw] mb-[1.3333vw] text-[#777]'>2025/08/31 14:30:00</p>
                  <strong className='text-[4vw] w-[95%]'>Trivandrum Royals v Aries Kollam Sailors</strong>
                  <span
                    className='block absolute top-[35%] right-[2%] [transform-translate(-50%, -50%)] w-[4vw] h-[4vw] bg-no-repeat bg-contain'
                    style={{ backgroundImage: "url('/Images/expand.svg')" }}
                  ></span>
                </dl>
                <dl className='relative flex items-center flex-wrap p-[2.133333vw] bg-[#fff] border-b-[0.26666vw] border-b-[#89aec4]'>
                  <p className='text-[2.93333vw] leading-[2.93333vw] mb-[1.3333vw] text-[#777]'>2025/08/31 14:30:00</p>
                  <strong className='text-[4vw] w-[95%]'>Trivandrum Royals v Aries Kollam Sailors</strong>
                  <span
                    className='block absolute top-[35%] right-[2%] [transform-translate(-50%, -50%)] w-[4vw] h-[4vw] bg-no-repeat bg-contain'
                    style={{ backgroundImage: "url('/Images/expand.svg')" }}
                  ></span>
                </dl>
                <dl className='relative flex items-center flex-wrap p-[2.133333vw] bg-[#fff] border-b-[0.26666vw] border-b-[#89aec4]'>
                  <p className='text-[2.93333vw] leading-[2.93333vw] mb-[1.3333vw] text-[#777]'>2025/08/31 14:30:00</p>
                  <strong className='text-[4vw] w-[95%]'>Trivandrum Royals v Aries Kollam Sailors</strong>
                  <span
                    className='block absolute top-[35%] right-[2%] [transform-translate(-50%, -50%)] w-[4vw] h-[4vw] bg-no-repeat bg-contain'
                    style={{ backgroundImage: "url('/Images/expand.svg')" }}
                  ></span>
                </dl>
              </div>
            }
          </>
        }

      </div>
    </>
  )
}

export default Inplay