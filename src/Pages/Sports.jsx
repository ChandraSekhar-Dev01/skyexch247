import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Helper from '../helper';
import { getAllEvents } from '../redux/slice/event/eventSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import News from '../components/News';
import { Carousel } from 'antd';

function Sports() {

  const navigate = useNavigate()
  const userInfo = Helper();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.events);

  const location = useLocation();
  const sportType = location.state?.sportType;
  console.log('location type : ', sportType)

  const [inplayEvents, setInplayEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  const [selectedSport, setSelectedSport] = useState("4");
  const [casinoModalOpen, setCasinoModalOpen] = useState(false);

  const images = {
    whatsAppIcon: "/Images/whatsApp-icon-grey.svg",
    skypeIcon: "/Images/skype-icon-grey.svg",
    emailIcon: "/Images/email-icon-grey.svg",
    igIcon: "/Images/ig-icon-grey.webp",
    betFairIcon: "/Images/not-verified.webp",
    accountIcon: "/Images/account-icon-white.webp",
    homeIcon: "/Images/home-icon.svg",
    multiBet: "/Images/multiBet-pin.svg",
    trophyIcon: "/Images/trophy.svg",
    clockIcon: "/Images/clock-icon-white.webp",
    referral: "/Images/Referral.webp",
    SportsGiff: "/Images/gamesGiff.gif",
    headphoneIcon: "/Images/headphone-icon-grey.svg",
    gcIcon: "/Images/gc-logo.webp",
    phoneIcon: "/Images/phone-icon.webp",
    mailIcon: "/Images/mail-icon.webp",
    AndroidAppIcon: "/Images/AndroidAppIcon.webp",
    browserIcon: "/Images/icon-browser-B.webp"
  };

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

      {/* Mobile Casino Modal */}
      {casinoModalOpen &&
        <div className='flex items-center justify-center fixed top-0 left-0 w-[100vw] h-full bg-[#000000b3] z-[99] text-[#1e1e1e] text-[3.4666vw] leading-[1.3] openBetsAnimation'>
          <div className='text-[#243a48] w-[84vw] bg-[#fff] text-[4vw] shadow-[0_0.8vw_2.6666666667vw_0_#00000080] rounded-[1.3333333333vw]'>
            <h3 className='text-[#ffb200] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] text-[4vw] leading-[1.2] rounded-[1.3333333333vw_1.3333333333vw_0_0] p-[2.4vw_1.8666666667vw] text-left font-bold'>Casino</h3>
            <div className='relative h-[22.6666vw] flex justify-center'>
              <h4 className='border-r-[0.2666666667vw] border-r-[#c3d5e0] text-[4.2666666667vw] font-bold leading-[5.3333333333vw] w-[50%] p-[1.3333333333vw_3.2vw_1.3333333333vw_3.2vw]'>
                <span className='block text-[3.2vw] font-normal'> Main Balance</span>
                206.70
              </h4>
              <h4 className='text-right text-[4.2666666667vw] font-bold leading-[5.3333333333vw] w-[50%] p-[1.3333333333vw_3.2vw_1.3333333333vw_3.2vw]'>
                <span className='block text-[3.2vw] font-normal text-right'> Main Balance</span>
                206.70
              </h4>
            </div>
            <div className='relative bg-[#cde3f0] flex justify-center items-center h-[21.3333333333vw] w-full mb-[2.6666666667vw]'>
              <div className='absolute top-[-10.4vw] left-[50%] z-[1] w-min leading-[5.3333333333vw] bg-[#fff] border-[0.2666666667vw] border-[#da8700] rounded-[1.0666666667vw] text-[5.8666666667vw] indent-0 transform -translate-x-1/2'>
                <span className='bg-[#fff0ca] absolute left-[50%] bottom-[-1.5vw] w-[2.6666666667vw] h-[2.6666666667vw] border-b-[0.2666666667vw] border-b-[#da8700] border-r-[0.2666666667vw] border-r-[#da8700] transform -translate-x-1/2 rotate-45'></span>
                <input type="text" defaultValue={0} className='leading-[5.3333333333vw] p-[1.3333333333vw] text-[#2963a7] font-bold rounded-[0.8vw] text-center shadow-[inset_0_2px_2px_0_#00000045] mb-[0.2666666667vw] relative bg-[#fff] text-[4vw]' />
              </div>
              <ul className='flex w-full h-[14.66666vw]'>
                <li className='border-[0.2666666667vw] border-[#bbb] rounded-[0] text-[4vw] leading-[16vw] text-center font-bold cursor-pointer flex justify-center items-center w-[14.666666vw] bg-[linear-gradient(180deg,_#fdfdfd_15%,_#eeeeee_100%)]'>0</li>
                <li className='relative flex flex-1 justify-center items-center w-[14.6666vw] bg-[linear-gradient(180deg,_#fdfdfd_15%,_#eeeeee_100%)] border-y-[0.266666vw] border-y-[#bbb]'>
                  <div className='absolute flex top-0 w-[90%] justify-between'>
                    <div className='bg-[#c7d4e300] block w-[0.8vw] h-[1.6vw]'></div>
                    <div className='bg-[#c7d4e300] block w-[0.8vw] h-[1.6vw]'></div>
                    <div className='bg-[#c7d4e300] block w-[0.8vw] h-[1.6vw]'></div>
                    <div className='bg-[#c7d4e300] block w-[0.8vw] h-[1.6vw]'></div>
                    <div className='bg-[#c7d4e300] block w-[0.8vw] h-[1.6vw]'></div>
                    <div className='bg-[#c7d4e300] block w-[0.8vw] h-[1.6vw]'></div>
                  </div>
                  <input type="text" className='absolute w-[1px] h-[1px] overflow-hidden opacity-0 bg-[#fff] border border-[#aaa] shadow-[inset_0_0.5333333333vw_0_0_#0000001a] rounded-[1.6vw] text-[#1e1e1e] text-[4vw] mb-[1.8666666667vw]' />
                  <div className='relative w-[90%] h-[3.2vw] bg-[#d1dde5] shadow-[inset_0_0.2666666667vw_0.2666666667vw_0_#0000004d] rounded-[1.6vw] m-0'>
                    <div className='w-[18px] absolute top-0 h-[2.66666vw] bg-[linear-gradient(180deg,_#ffb80c_15%,_#ffa00c_100%)] border-[0.2666666667vw] border-[#cb8009] rounded-[1.3333333333vw] bg-inherit'></div>
                    <div className='absolute left-0 z-[2] block top-[-2.66666vw] w-[8vw] h-[8vw] rounded-[4.266666666vw] bg-[linear-gradient(180deg,_#ffb80c_15%,_#ffa00c_100%)] border-[0.2666666667vw] border-[#cb8009] shadow-[inset_0_0.2666666667vw_0_0_#ffffff80] indent-[-99999px]'></div>
                  </div>
                </li>
                <li className='border-[0.2666666667vw] border-[#bbb] rounded-[0] text-[4vw] leading-[16vw] text-center font-bold cursor-pointer flex justify-center items-center w-[14.666666vw] bg-[linear-gradient(180deg,_#fdfdfd_15%,_#eeeeee_100%)]'>Max</li>
              </ul>
            </div>
            {/* Error Block */}
            <p className='indent-[2.6666666667vw] leading-[4vw] text-[#d0021b] text-[3.2vw]'></p>
            <ul className='flex flex-wrap p-[0_1.6vw_2.6666666667vw]'>
              <li className='flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden'>
                <span className='h-[10.9333333vw] leading-[10.9333333vw] bg-[linear-gradient(-180deg,_#ffffff_0%,_#eeeeee_89%)] border border-[#aaa] rounded-[1.6vw] text-[4vw] font-bold text-[#1e1e1e] block text-center' onClick={() => setCasinoModalOpen(false)}>Cancel</span>
              </li>
              <li className='flex-1 m-[1.6vw_0.8vw_0_0.8vw] overflow-hidden w-full' onClick={() => navigate('/lobby/platform')}>
                <span className='h-[10.9333333vw] leading-[10.9333333vw] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] border border-[#aaa] rounded-[1.6vw] text-[4vw] font-bold text-[#ffb200] block text-center'>Enter</span>
              </li>
            </ul>
          </div>
        </div>
      }


      {/* For Pc View */}
      <div className='hidden lg:block relative min-w-[1350px] max-w-[calc(100%-40px)] h-[calc(100vh-11.8vh)] m-[0_auto] mt-[1px] text-[12px] text-[#1e1e1e] leading-[15px]'>
        {/* Left Section */}
        <div className='h-full absolute left-0 top-0 w-[17.3611111111%] overflow-hidden bg-[#fff]'>
          <ul>
            <li className='text-xs text-white bg-black w-full py-1 px-2'>
              <span>Sports</span>
            </li>
            <li className='text-xs text-black bg-white w-full py-1 px-2'>
              <span>All Sports</span>
            </li>
            <li className='text-xs text-white bg-black w-full py-1 px-2'>
              <span>{sportType == "1" ? "Soccer" : sportType == "2" ? "Tennis" : sportType == "4" ? "Cricket" : sportType == "0" ? "E-Soccer" : sportType == "10" ? "Kabaddi" : ""}</span>
            </li>
            <li className='text-xs text-black bg-[#dddcd6] w-full py-1 px-2'>
              <span>Common</span>
            </li>
            {sportType !== "0" &&
              inplayEvents?.map((item) => (
                <li
                  key={item.id}
                  className="text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2 cursor-pointer"
                >
                  <span className="block w-[95%] truncate">{item.event_name}</span>
                </li>
              ))
            }
            {sportType == "0" &&
              <li
                className="text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2 cursor-pointer"
              >
                <span className="block w-[95%] truncate">E-Soccer</span>
              </li>
            }
            {sportType == "10" &&
              <li
                className="text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2 cursor-pointer"
              >
                <span className="block w-[95%] truncate">Kabaddi</span>
              </li>
            }
          </ul>
        </div>

        {/* Center Section */}
        <div className="h-full ml-[17.3611111111%] mr-[26.0416666667%] p-[0_15px]">
          {/* News Marquee */}
          <News />

          {/* Scrollable Events Section */}
          <div className="h-[calc(100vh-14.5vh)] overflow-y-auto scroll-hide">
            <div className="w-full mb-3 min-h-[182px]">
              <img src={`/Images/${sportType == "0" ? "kv_e-soccer" : sportType == "1" ? "kv_soccer" : sportType == "2" ? "kv_tennis" : sportType == "4" ? "sports_img" : sportType == "10" ? "kv10" : ""}.webp`} alt="" className="w-full h-full" />
            </div>

            <div>
              {/* Event Listing */}
              <div className="border-b border-[#7e97a7] bg-[#fff]">
                <div className="flex justify-between items-center text-xs leading-6 text-[#000] bg-[#ffb80c] px-2 py-1">
                  <div className="font-bold text-xs">Sports Highlights</div>
                  <div className="flex justify-center items-center ">
                    <span className="mr-2">View by</span>
                    <select className="p-1 bg-[#fff3] border border-[#0006] rounded">
                      <option value="Time">Time</option>
                      <option value="Competition">Competition</option>
                      <option value="Matched">Matched</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end text-xs bg-[#dddcd6] w-full">
                  <div className="flex w-[54%]">
                    <span className="w-full text-end">Matched</span>
                    <span className="w-full text-center">1</span>
                    <span className="w-full text-center">x</span>
                    <span className="w-full text-center">2</span>
                  </div>
                </div>
                <div>
                  <ul>

                    {(sportType == "1" || sportType == "2" || sportType == "4") && inplayEvents?.map((item) => (
                      <li className='flex w-full border-b border-[#eee]' key={item.id}>
                        <div className='flex justify-between items-center w-[60%] px-2 border-r border-[#eee]'>
                          <div className='flex justify-between items-start gap-1'>
                            <span className='pt-1'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.webp" alt="" /> : <img src="/Images/icon-no_play.webp" alt="" />} </span>
                            <Link to={`/matchupdates/${item.event_id}/${item.is_inplay === "True" ? "Inplay" : "Going Inplay"}`} className='flex flex-col leading-snug'>
                              <span className='text-xs font-bold text-[#2789ce]'>{item.event_name}</span>
                              <span className='flex justify-start items-center gap-[6px]'>
                                {item.is_inplay == "True" &&
                                  <span className='text-xs font-bold text-[#508d30]'>In-Play</span>
                                }
                                {item.is_inplay != "True" &&
                                  <span className='max-w-[105px] text-[12px] text-[#777] font-normal leading-[15px]'>{formatOpenDate(item.open_date)}
                                  </span>
                                }
                                <div className='flex justify-center items-center gap-1'>
                                  <span className='flex justify-center items-center w-[18px] h-4 rounded-[3px] bg-[#1876A9]'><img src="/Images/play_icon.svg" alt="" className='w-3' /></span>
                                  {item.is_fancy == "True" &&
                                    <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/fancy.svg" alt="" className='w-3' /></span></span>
                                  }
                                  {item.is_bm == "True" &&
                                    <span className='flex'><img src="/Images/icon-fancy_inplay.webp" alt="" className='rounded-l-sm' /><span className='flex justify-center items-center w-4 h-4 rounded-r-sm bg-[#1876A9]'><img src="/Images/bookmaker_icon.svg" alt="" className='w-3' /></span></span>
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
                          <span className=''><img src="/Images/add-pin-s.webp" alt="" /></span>
                        </div>
                      </li>
                    ))}
                    {sportType == "0" &&
                      <>
                        <li className='flex w-full border-b border-[#eee]'>
                          <div className='flex justify-between items-center w-[60%] px-2 border-r border-[#eee]'>
                            <div className='flex justify-between items-start gap-1'>
                              <span className='pt-1'><img src="/Images/icon-in_play.webp" alt="" /> </span>
                              <div className='flex flex-col leading-snug'>
                                <span className='text-xs font-bold text-[#2789ce]'>Real Madrid (Puyol) v Athletic Bilbao (Hussein)</span>
                                <span className='flex justify-start items-center gap-[6px]'>
                                  <span className='text-xs font-bold text-[#508d30]'>In-Play</span>
                                  <div className='flex justify-center items-center gap-1'>
                                    <span className='inline-flex justify-center items-center text-[10px] font-normal border border-[#1f5172] text-[#1f5172] rounded leading-[16px] p-0 [transform:scale(0.9)]'>
                                      <span className='flex justify-center items-center p-1 bg-[#1f5172]'>
                                        <img src="/Images/E-icon.svg" alt="" className=' w-[7px] h-[8px]' />
                                      </span>
                                      <span className='px-1 bg-[#fff] rounded'>e-Soccer</span>
                                    </span>
                                    <span className='flex justify-center items-center w-4 h-4 rounded-[3px] bg-[#e4550f]'>
                                      <img src="/Images/premium-icon.svg" alt="" className='w-3' />
                                    </span>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className='text-xs text-[#777]'>
                                PIN0
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
                            <span className=''><img src="/Images/add-pin-s.webp" alt="" /></span>
                          </div>
                        </li>
                        <li className='flex w-full border-b border-[#eee]'>
                          <div className='flex justify-between items-center w-[60%] px-2 border-r border-[#eee]'>
                            <div className='flex justify-between items-start gap-1'>
                              <span className='pt-1'><img src="/Images/icon-no_play.webp" alt="" /> </span>
                              <div className='flex flex-col leading-snug'>
                                <span className='text-xs font-bold text-[#2789ce]'>FC Barcelona (Razvan) v FC Barcelona (Razvan)</span>
                                <span className='flex justify-start items-center gap-[6px]'>
                                  <span className='max-w-[105px] text-[12px] text-[#777] font-normal leading-[15px]'>17:00
                                  </span>
                                  <div className='flex justify-center items-center gap-1'>
                                    <span className='inline-flex justify-center items-center text-[10px] font-normal border border-[#1f5172] text-[#1f5172] rounded leading-[16px] p-0 [transform:scale(0.9)]'>
                                      <span className='flex justify-center items-center p-1 bg-[#1f5172]'>
                                        <img src="/Images/E-icon.svg" alt="" className=' w-[7px] h-[8px]' />
                                      </span>
                                      <span className='px-1 bg-[#fff] rounded'>e-Soccer</span>
                                    </span>
                                    <span className='flex justify-center items-center w-4 h-4 rounded-[3px] bg-[#e4550f]'>
                                      <img src="/Images/premium-icon.svg" alt="" className='w-3' />
                                    </span>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className='text-xs text-[#777]'>
                                PIN0
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
                            <span className=''><img src="/Images/add-pin-s.webp" alt="" /></span>
                          </div>
                        </li>
                      </>
                    }
                    {sportType == "10" &&
                      <>
                        <li className='flex w-full border-b border-[#eee]'>
                          <div className='flex justify-between items-center w-[60%] px-2 border-r border-[#eee]'>
                            <div className='flex justify-between items-start gap-1'>
                              <span className='pt-1'><img src="/Images/icon-no_play.webp" alt="" /> </span>
                              <div className='flex flex-col leading-snug'>
                                <span className='text-xs font-bold text-[#2789ce]'>Telugu Titans v Tamil Thalaivas</span>
                                <span className='flex justify-start items-center gap-[6px]'>
                                  <span className='max-w-[105px] text-[12px] text-[#777] font-normal leading-[15px]'>17:00
                                  </span>
                                  <div className='flex justify-center items-center gap-1'>
                                    <span className='flex justify-center items-center w-4 h-4 rounded-[3px] bg-[#e4550f]'>
                                      <img src="/Images/premium-icon.svg" alt="" className='w-3' />
                                    </span>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className='text-xs text-[#777]'>
                                PIN0
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
                            <span className=''><img src="/Images/add-pin-s.webp" alt="" /></span>
                          </div>
                        </li>
                        <li className='flex w-full border-b border-[#eee]'>
                          <div className='flex justify-between items-center w-[60%] px-2 border-r border-[#eee]'>
                            <div className='flex justify-between items-start gap-1'>
                              <span className='pt-1'><img src="/Images/icon-no_play.webp" alt="" /> </span>
                              <div className='flex flex-col leading-snug'>
                                <span className='text-xs font-bold text-[#2789ce]'>Bengaluru Bulls v Puneri Paltan</span>
                                <span className='flex justify-start items-center gap-[6px]'>
                                  <span className='max-w-[105px] text-[12px] text-[#777] font-normal leading-[15px]'>17:00
                                  </span>
                                  <div className='flex justify-center items-center gap-1'>
                                    <span className='flex justify-center items-center w-4 h-4 rounded-[3px] bg-[#e4550f]'>
                                      <img src="/Images/premium-icon.svg" alt="" className='w-3' />
                                    </span>
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className='text-xs text-[#777]'>
                                PIN0
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
                            <span className=''><img src="/Images/add-pin-s.webp" alt="" /></span>
                          </div>
                        </li>
                      </>
                    }

                  </ul>
                </div>
              </div>
            </div>
            {/* Footer */}
            <div className='pb-0 bg-[#eeee]'>
              <div className="flex justify-center items-center">
                <div className='mx-5 lg:mx-36 pt-7 w-full'>
                  <div className='lg:flex justify-between mb-2 text-[13px] text-[#00000086]'>
                    <div className='py-3 bg-white lg:w-[49%] mb-2 lg:mb-0 flex gap-2 justify-center items-center rounded-lg border border-[#97979780]'><img src={images.headphoneIcon} className='w-[26px]' alt="" /> <span className='cursor-pointer hover:text-black' > Customer support1 </span> | <span className='cursor-pointer hover:text-black' > support2 </span></div>
                    <div className='py-3 bg-white lg:w-[49%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780]'><img src={images.whatsAppIcon} className='w-[26px]' alt="" /> <span className='cursor-pointer hover:text-black' >WhatsApp 3 </span> | <span className='cursor-pointer hover:text-black' > WhatsApp 4 </span></div>
                  </div>

                  <div className='w-full bg-white h-4 mb-2 rounded-lg border border-[#97979780]'></div>
                  {/*  for pc view */}
                  <div className='hidden  lg:flex justify-between gap-2 text-[13px] text-[#00000086]'>
                    <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] hover:text-black cursor-pointer' > <img src={images.skypeIcon} className='w-[25px]' alt="" /> exchskyofficial</div>
                    <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] hover:text-black cursor-pointer' > <img src={images.emailIcon} className='w-[25px]' alt="" /> info@exchsky.com</div>
                    <div className='py-4 bg-white  w-[48%] flex gap-2 justify-center items-center rounded-lg border border-[#97979780] hover:text-black cursor-pointer' > <img src={images.igIcon} className='w-[25px]' alt="" /> officialexchsky</div>
                  </div>

                </div>
              </div>

              <div className='hidden lg:flex flex-col mt-7 items-center mb-2'>
                <div className='flex gap-2  '>
                  <img src={images.browserIcon} alt="" className='h-[20px] w-[50px] opacity-50 mb-[5px]' />
                </div>

                <h1 className='text-[#00000099] text-[11px]'>Our website works best in the newest and last prior version of these browsers:</h1>

                <h1 className='text-[#00000099] text-[11px]'>Google Chrome. Firefox</h1>
              </div>

              <div className='flex flex-col justify-center lg:border-t mt-10 lg:mt-0 border-[#0000004d]'>
                {/* for pc view */}
                <p className='hidden lg:flex justify-center flex-wrap gap-2 mx-5 text-xs mt-2 text-[#00000099]'>
                  - <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('/privacy', '_blank', 'noopener,noreferrer,width=800,height=600');
                    }}
                    className="underline"
                  >
                    Privacy Policy
                  </a>
                  - <a
                    href="/siteTerms"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('/siteTerms', '_blank', 'noopener,noreferrer,width=800,height=600');
                    }}
                    className="underline"
                  >Terms and Conditions </a>
                  - <a
                    href="/siteRules"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('/siteRules', '_blank', 'noopener,noreferrer,width=800,height=600');
                    }}
                    className="underline"
                  >Rules and Regulations </a>
                  - <a
                    href="/kyc"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('/kyc', '_blank', 'noopener,noreferrer,width=800,height=600');
                    }}
                    className="underline"
                  > KYC</a>
                  -  <a
                    href="/rg"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('/rg', '_blank', 'noopener,noreferrer,width=800,height=600');
                    }}
                    className="underline"
                  > Responsible Gaming
                  </a>
                  - <a
                    href="/au"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('/au', '_blank', 'noopener,noreferrer,width=800,height=600');
                    }}
                    className="underline"
                  > About Us </a>
                  - <a
                    href="/skyExSelfExclusionPolicy"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('/skyExSelfExclusionPolicy', '_blank', 'noopener,noreferrer,width=800,height=600');
                    }}
                    className="underline"
                  >Self-exclusion Policy </a>
                  - <a
                    href="/skyUnderagePolicy"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open('/skyUnderagePolicy', '_blank', 'noopener,noreferrer,width=800,height=600');
                    }}
                    className="underline"
                  > Underage Policy </a> -
                </p>

                {/* for pc view */}
                <div className='flex flex-col items-center mt-5 mb-10'>
                  <img src={images.AndroidAppIcon} className='w-40' alt="" />
                  <p className='text-[#00000099] text-[10px]'>v1.11 - 2022-03-23 - 3.1MB</p>
                </div>
              </div>

            </div>
            <span className='block clear-both'></span>
          </div>

          <span className='block clear-both'></span>
        </div>

        {/* Right Section */}
        <div className='h-full absolute top-0 right-0 w-[26.0416666667%] bg-[#fff]'>
          <div className='flex justify-between items-center text-xs leading-6 text-[#fff] bg-[#243a48] px-2'>
            <div>Bet Slip</div>
            <div className='flex justify-center items-center rounded-sm h-3 w-3 border border-[#fff]'><span>-</span></div>
          </div>
        </div>
      </div>

      {/* For Mobile View */}
      <div className='block lg:hidden'>
        {/* Slider Banner */}
        <Carousel arrows dots={false} infinite={true} autoplay={true}>
          <div>
            <img src="/Images/dashboard-casino-img/banner-1.webp" alt="" className="w-full" />
          </div>
          <div>
            <img src="/Images/dashboard-casino-img/banner-2.webp" alt="" className="w-full" />
          </div>
        </Carousel>
        <div className='relative flex [background-image:linear-gradient(180deg,_#ffcc2e_0%,_#ffbd14_100%)] border-b-[0.7vw] border-[#070707]'>
          <div className="overflow-x-auto pl-2 pr-[21.3333333333vw] pt-[2.3vw] h-[12.2666666667vw]">
            <div className="flex justify-center items-center gap-2 min-w-max text-[3.5vw] font-semibold">

              <span
                className={`relative flex justify-center items-center gap-[5px] whitespace-nowrap flex-shrink-0 [background-image:linear-gradient(-180deg,_#806575_15%,_#4b2c3e_100%)] text-[#fff] px-2 py-[10px] rounded-t-md`}
                onClick={() => userInfo ? setCasinoModalOpen(true) : navigate('/login')}
              >
                <span
                  className="absolute top-[-1.8vw] right-[2.1333333333vw] w-[8.5333333333vw] h-[4.8vw] bg-center bg-no-repeat bg-contain text-[#fff] leading-[4vw] text-[2.4vw] font-bold text-center z-[2]"
                  style={{
                    backgroundImage: "url('/Images/ribbon.svg')",
                    filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))'
                  }}
                >
                  New
                </span>

                <img src='/Images/menu-casino.webp' alt="" className="w-[5.5vw]" />
                Casino

                <img src="/Images/open-link.svg" alt="" className='block w-[2.6666666667vw] h-[2.6666666667vw] bg-cover' />
              </span>

              <span
                className={`relative flex justify-center items-center gap-[5px] whitespace-nowrap flex-shrink-0 ${selectedSport == "4" ? '[background-image:linear-gradient(180deg,_#474747_0%,_#070707_100%)] text-[#ffb200]' : 'text-[#000]'} px-2 py-[10px] rounded-t-md`}
                onClick={() => setSelectedSport("4")}
              >
                <span className="absolute top-[-1.4vw] right-[1.3333vw] min-w-[9.3333vw] h-[3.2vw] rounded-[0.8vw] flex justify-center items-center box-border pr-[1.3333vw] text-white text-center text-[2.6667vw] leading-[3.2vw] bg-[linear-gradient(180deg,#fb3434_0%,#e80505_100%)] shadow-[0_0.2667vw_0.8vw_0_rgba(0,0,0,0.5)]">
                  <strong className="flex-1 h-full mr-[1.3333vw] px-[0.5333vw] rounded-[0.8vw_0_0_0.8vw] bg-[linear-gradient(180deg,#ffffff_0%,#eeeeee_89%)] flex justify-center items-center text-[0] indent-[-99999px]">
                    <img src="/Images/hotspot.svg" alt="" className="w-[3.7333vw] h-[2.13333vw] bg-contain live-icon" />
                  </strong>
                  {allEvents?.filter(item => item.event_type == "4" && item.is_inplay == "True").length}
                </span>

                <img src={selectedSport == "4" ? '/Images/cricket-yellow.svg' : '/Images/cricket-black.svg'} alt="" className="w-[5.5vw]" />
                Cricket
              </span>

              <span
                className={`relative flex justify-center items-center gap-[5px] whitespace-nowrap flex-shrink-0 
        ${selectedSport == "1" ? '[background-image:linear-gradient(180deg,_#474747_0%,_#070707_100%)] text-[#ffb200]' : 'text-[#000]'} 
        px-2 py-[10px] rounded-t-md`}
                onClick={() => setSelectedSport("1")}
              >
                <span className="absolute top-[-1.4vw] right-[1.3333vw] min-w-[9.3333vw] h-[3.2vw] rounded-[0.8vw] flex justify-center items-center box-border pr-[1.3333vw] text-white text-center text-[2.6667vw] leading-[3.2vw] bg-[linear-gradient(180deg,#fb3434_0%,#e80505_100%)] shadow-[0_0.2667vw_0.8vw_0_rgba(0,0,0,0.5)]">
                  <strong className="flex-1 h-full mr-[1.3333vw] px-[0.5333vw] rounded-[0.8vw_0_0_0.8vw] bg-[linear-gradient(180deg,#ffffff_0%,#eeeeee_89%)] flex justify-center items-center text-[0] indent-[-99999px]">
                    <img src="/Images/hotspot.svg" alt="" className="w-[3.7333vw] h-[2.13333vw] bg-contain live-icon" />
                  </strong>
                  {allEvents?.filter(item => item.event_type == "1" && item.is_inplay == "True").length}
                </span>
                <img src={selectedSport == "1" ? '/Images/soccer-yellow.svg' : '/Images/soccer-black.svg'} alt="" className="w-[5.5vw]" />
                Soccer
              </span>

              <span
                className={`relative flex justify-center items-center gap-[5px] whitespace-nowrap flex-shrink-0 
        ${selectedSport == "2" ? '[background-image:linear-gradient(180deg,_#474747_0%,_#070707_100%)] text-[#ffb200]' : 'text-[#000]'} 
        px-2 py-[10px] rounded-t-md`}
                onClick={() => setSelectedSport("2")}
              >
                <span className="absolute top-[-1.4vw] right-[1.3333vw] min-w-[9.3333vw] h-[3.2vw] rounded-[0.8vw] flex justify-center items-center box-border pr-[1.3333vw] text-white text-center text-[2.6667vw] leading-[3.2vw] bg-[linear-gradient(180deg,#fb3434_0%,#e80505_100%)] shadow-[0_0.2667vw_0.8vw_0_rgba(0,0,0,0.5)]">
                  <strong className="flex-1 h-full mr-[1.3333vw] px-[0.5333vw] rounded-[0.8vw_0_0_0.8vw] bg-[linear-gradient(180deg,#ffffff_0%,#eeeeee_89%)] flex justify-center items-center text-[0] indent-[-99999px]">
                    <img src="/Images/hotspot.svg" alt="" className="w-[3.7333vw] h-[2.13333vw] bg-contain live-icon" />
                  </strong>
                  {allEvents?.filter(item => item.event_type == "2" && item.is_inplay == "True").length}
                </span>
                <img src={selectedSport == "2" ? '/Images/tennis-yellow.svg' : '/Images/tennis-black.svg'} alt="" className="w-[5.5vw]" />
                Tennis
              </span>

              <span
                className={`relative flex justify-center items-center gap-[5px] whitespace-nowrap flex-shrink-0 
        ${selectedSport == "0" ? '[background-image:linear-gradient(180deg,_#474747_0%,_#070707_100%)] text-[#ffb200]' : 'text-[#000]'} 
        px-2 py-[10px] rounded-t-md`}
                onClick={() => setSelectedSport("0")}
              >
                <span className="absolute top-[-1.4vw] right-[1.3333vw] min-w-[9.3333vw] h-[3.2vw] rounded-[0.8vw] flex justify-center items-center box-border pr-[1.3333vw] text-white text-center text-[2.6667vw] leading-[3.2vw] bg-[linear-gradient(180deg,#fb3434_0%,#e80505_100%)] shadow-[0_0.2667vw_0.8vw_0_rgba(0,0,0,0.5)]">
                  <strong className="flex-1 h-full mr-[1.3333vw] px-[0.5333vw] rounded-[0.8vw_0_0_0.8vw] bg-[linear-gradient(180deg,#ffffff_0%,#eeeeee_89%)] flex justify-center items-center text-[0] indent-[-99999px]">
                    <img src="/Images/hotspot.svg" alt="" className="w-[3.7333vw] h-[2.13333vw] bg-contain live-icon" />
                  </strong>
                  0
                </span>
                <img src={selectedSport == "0" ? '/Images/e-soccer-yellow.svg' : '/Images/e-soccer-black.svg'} alt="" className="w-[5.5vw]" />
                E-Soccer
              </span>

              <span
                className={`relative flex justify-center items-center gap-[5px] whitespace-nowrap flex-shrink-0 
        ${selectedSport == "11" ? '[background-image:linear-gradient(180deg,_#474747_0%,_#070707_100%)] text-[#ffb200]' : 'text-[#000]'} 
        px-2 py-[10px] rounded-t-md`}
                onClick={() => setSelectedSport("11")}
              >
                <span className="absolute top-[-1.4vw] right-[1.3333vw] min-w-[9.3333vw] h-[3.2vw] rounded-[0.8vw] flex justify-center items-center box-border pr-[1.3333vw] text-white text-center text-[2.6667vw] leading-[3.2vw] bg-[linear-gradient(180deg,#fb3434_0%,#e80505_100%)] shadow-[0_0.2667vw_0.8vw_0_rgba(0,0,0,0.5)]">
                  <strong className="flex-1 h-full mr-[1.3333vw] px-[0.5333vw] rounded-[0.8vw_0_0_0.8vw] bg-[linear-gradient(180deg,#ffffff_0%,#eeeeee_89%)] flex justify-center items-center text-[0] indent-[-99999px]">
                    <img src="/Images/hotspot.svg" alt="" className="w-[3.7333vw] h-[2.13333vw] bg-contain live-icon" />
                  </strong>
                  0
                </span>
                <img src={selectedSport == "11" ? '/Images/kabaddi-yellow.svg' : '/Images/kabaddi-black.svg'} alt="" className="w-[5.5vw]" />
                Kabaddi
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

                    <span className='pt-4 pr-2'>{item.is_inplay == "True" ? <img src="/Images/icon-in_play.webp" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' /> : <img src="/Images/icon-no_play.webp" alt="" className='w-[2.6666666667vw] h-[2.6666666667vw]' />} </span>

                    <Link to={`/matchupdates/${item.event_id}/${item.is_inplay === "True" ? "Inplay" : "Going Inplay"}`} className='flex flex-col justify-start items-start'>
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
      </div >
    </>
  )
}

export default Sports