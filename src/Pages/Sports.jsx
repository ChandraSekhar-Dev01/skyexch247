import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Helper from '../helper';
import { getAllEvents } from '../redux/slice/event/eventSlice';
import { Link, useLocation } from 'react-router-dom';
import News from '../components/News';

function Sports() {

  const userInfo = Helper();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.events);

  const location = useLocation();
  const sportType = location.state?.sportType;
  console.log('location type : ', sportType)

  const [inplayEvents, setInplayEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [selectedSport, setSelectedSport] = useState("4");

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

      setAllEvents(allNewEvents)
      if (sportType != undefined) {
        const inPlayEvents = allNewEvents?.filter(item => item.event_type == sportType)
        setInplayEvents(inPlayEvents);
        console.log('all events : ', inPlayEvents)
      } else {
        const inPlayEvents = allNewEvents?.filter(item => item.event_type == "4")
        setInplayEvents(inPlayEvents);
      }
    }
  }, [userInfos, sportType, selectedSport]);


  return (
    <>
      {/* For Pc View */}
      <div className='hidden lg:flex gap-4 px-4 pt-[1px]'>
        {/* Right Section */}
        <div className='w-[22%] h-screen bg-[#fff]'>
          <ul>
            <li className='text-xs text-white bg-black w-full py-1 px-2'>
              <span>Sports</span>
            </li>
            <li className='text-xs text-black bg-white w-full py-1 px-2'>
              <span>All Sports</span>
            </li>
            <li className='text-xs text-white bg-black w-full py-1 px-2'>
              <span>{sportType == "1" ? "Soccer" : sportType == "2" ? "Tennis" : "Cricket"}</span>
            </li>
            <li className='text-xs text-black bg-[#dddcd6] w-full py-1 px-2'>
              <span>Common</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>Big Bash League SRL</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>Big Bash League SRL</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>Big Bash League SRL</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>Big Bash League SRL</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>Big Bash League SRL</span>
            </li>
          </ul>
        </div>
        {/* Center Section */}
        <div className='w-[67%] overflow-hidden overflow-y-scroll h-[calc(100vh_-_0.5vh)] scroll-hide'>
          {/* News Marquee */}
          <News />

          <div className='w-full mb-3'>
            <img src="/Images/sports_img.jpg" alt="" className='w-full h-60' />
          </div>
          <div className='overflow-y-auto' style={{ height: "calc(100vh - 112px)" }}>
            {/* Cricket */}
            <div className='border-b border-[#7e97a7] bg-[#fff]'>
              <div className='flex justify-between items-center text-xs leading-6 text-[#000] bg-[#ffb80c] px-2 py-1'>
                <div className='font-bold text-xs'>Sports Highlights</div>
                <div className='flex justify-center items-center '>
                  <span className='mr-2'>View by</span>
                  <select name="" id="" className='p-1 bg-[#fff3] border border-[#0006] rounded'>
                    <option value="Time">Time</option>
                    <option value="Compitition">Compitition</option>
                    <option value="Matched">Matched</option>
                  </select>
                </div>
              </div>
              <div className='flex justify-end text-xs bg-[#dddcd6] w-full'>
                <div className='flex w-[54%]'>
                  <span className='w-full text-end'>Matched</span>
                  <span className='w-full text-center'>1</span>
                  <span className='w-full text-center'>x</span>
                  <span className='w-full text-center'>2</span>
                </div>
              </div>
              <div>
                <ul>

                  {inplayEvents?.map((item) => (
                    <li className='flex w-full border-b border-[#eee]' key={item.id}>
                      <div className='flex justify-between items-center w-[60%] px-2 border-r border-[#eee]'>
                        <div className='flex justify-between items-start gap-1'>
                          <span className='pt-1'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.png" alt="" /> : <img src="/Images/icon-no_play.png" alt="" />} </span>
                          <Link to={`/matchupdates/${item.event_id}/${item.is_inplay === "True" ? "Inplay" : "Going Inplay"}`} className='flex flex-col leading-snug'>
                            <span className='text-xs font-bold text-[#2789ce]'>{item.event_name}</span>
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
                          </Link>
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
          </div>
        </div>
        {/* Left Section */}
        <div className='w-[32%] h-screen bg-[#fff]'>
          <div className='flex justify-between items-center text-xs leading-6 text-[#fff] bg-[#243a48] px-2'>
            <div>Bet Slip</div>
            <div className='flex justify-center items-center rounded-sm h-3 w-3 border border-[#fff]'><span>-</span></div>
          </div>
        </div>
      </div>

      {/* For Mobile View */}
      <div className='block lg:hidden'>
        {/* Slider Banner */}
        <div className="flex justify-center items-center w-full">
          <img src="/Images/dashboard-casino-img/banner-1.webp" alt="" className="w-full" />
        </div>
        <div className='relative flex [background-image:linear-gradient(180deg,_#ffcc2e_0%,_#ffbd14_100%)] border-b-[0.7vw] border-[#070707]'>
          <div className="overflow-x-auto pl-2 pr-[21.3333333333vw] pt-2">
            <div className="flex justify-center items-center gap-[1px] min-w-max text-[3.5vw] font-semibold">
              <span
                className={`flex justify-center items-center gap-[5px] whitespace-nowrap flex-shrink-0 
        ${selectedSport == "4" ? '[background-image:linear-gradient(180deg,_#474747_0%,_#070707_100%)] text-[#ffb200]' : 'text-[#000]'} 
        px-2 py-[10px] rounded-t-md`}
                onClick={() => setSelectedSport("4")}
              >
                <img src={selectedSport == "4" ? '/Images/cricket-yellow.svg' : '/Images/cricket-black.svg'} alt="" className="w-[5.5vw]" />
                Cricket
              </span>

              <span
                className={`flex justify-center items-center gap-[5px] whitespace-nowrap flex-shrink-0 
        ${selectedSport == "1" ? '[background-image:linear-gradient(180deg,_#474747_0%,_#070707_100%)] text-[#ffb200]' : 'text-[#000]'} 
        px-2 py-[10px] rounded-t-md`}
                onClick={() => setSelectedSport("1")}
              >
                <img src={selectedSport == "1" ? '/Images/soccer-yellow.svg' : '/Images/soccer-black.svg'} alt="" className="w-[5.5vw]" />
                Soccer
              </span>

              <span
                className={`flex justify-center items-center gap-[5px] whitespace-nowrap flex-shrink-0 
        ${selectedSport == "2" ? '[background-image:linear-gradient(180deg,_#474747_0%,_#070707_100%)] text-[#ffb200]' : 'text-[#000]'} 
        px-2 py-[10px] rounded-t-md`}
                onClick={() => setSelectedSport("2")}
              >
                <img src={selectedSport == "2" ? '/Images/tennis-yellow.svg' : '/Images/tennis-black.svg'} alt="" className="w-[5.5vw]" />
                Tennis
              </span>

              <span
                className={`flex justify-center items-center gap-[5px] whitespace-nowrap flex-shrink-0 
        ${selectedSport == "0" ? '[background-image:linear-gradient(180deg,_#474747_0%,_#070707_100%)] text-[#ffb200]' : 'text-[#000]'} 
        px-2 py-[10px] rounded-t-md`}
                onClick={() => setSelectedSport("0")}
              >
                <img src={selectedSport == "0" ? '/Images/e-soccer-yellow.svg' : '/Images/e-soccer-black.svg'} alt="" className="w-[5.5vw]" />
                E-Soccer
              </span>
            </div>
          </div>


          <div className='absolute right-[13vw] [background-image:linear-gradient(90deg,_rgba(0,_0,_0,_0)_0%,_#000000_110%)] w-[9vw] h-full'>

          </div>
          <div className='absolute right-0 w-[13vw] h-full flex justify-center items-center [background-image:linear-gradient(180deg,_#525252_0%,_#2d2d2d_100%)]'>
            <img src="/Images/search-icon.svg" alt="" className='w-[6vw]' />
          </div>
        </div>
        <div>
          <span className='flex justify-center items-center p-2 [background-image:linear-gradient(-180deg,_#2e4b5e_0%,_#243a48_82%)] text-[3.7333333333vw] text-white font-bold'>Highlights</span>
          <div className='flex justify-center items-center p-1'>
            <div className='flex justify-center items-center text-[3.2vw] font-bold text-black bg-[#e3e3e3] shadow-[inset_0_1px_3px_0_rgba(0,_0,_0,_0.15)] rounded w-[80%]'>
              <span className="flex justify-center item-center text-[#0074c4] bg-white shadow-[0_0_3px_0_rgba(0,_0,_0,_0.15)] rounded py-[6px] w-[50%]">
                by Time
              </span>
              <span className="flex justify-center item-center py-[6px] w-[50%]">
                by Competition
              </span>
            </div>
          </div>
          <ul className='bg-[#fff] border-b-[0.8vw] border-[#070707]'>
            {allEvents?.filter(i => i.event_type == selectedSport)?.map((item) => (
              <li key={item.id} className='py-1 px-2 border-b border-[#e0e6e6]'>
                <div className='flex justify-between items-center'>
                  <div className='flex justify-start items-center'>

                    <span className='pt-4 pr-2'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.png" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> : <img src="/Images/icon-no_play.png" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' />} </span>

                    <Link to={`/matchupdates/${item.event_id}/${item.is_inplay === "True" ? "Inplay" : "Going Inplay"}`} className='flex flex-col justify-start items-start'>
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
                      <span className='text-[4vw] font-bold text-[#2789ce] leading-snug truncate w-[80vw] max-w-[20rem]'>{item.event_name}</span>
                    </Link>
                  </div>
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

export default Sports