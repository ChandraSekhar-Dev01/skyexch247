import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Helper from '../helper';
import { getAllEvents } from '../redux/slice/event/eventSlice';
import { useLocation } from 'react-router-dom';
import News from '../components/News';

function Multimarket() {

  const userInfo = Helper();
  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.events);

  const location = useLocation();
  const sportType = location.state?.sportType;
  console.log('location type : ', sportType)

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

      if (sportType != undefined) {
        const inPlayEvents = allNewEvents?.filter(item => item.event_type == sportType)
        setInplayEvents(inPlayEvents);
        console.log('all events : ', inPlayEvents)
      } else {
        const inPlayEvents = allNewEvents?.filter(item => item.event_type == "4")
        setInplayEvents(inPlayEvents);
      }
    }
  }, [userInfos, sportType]);


  return (
    <>
      {/* For Pc View */}
      <div className='hidden lg:block relative min-w-[1350px] max-w-[calc(100%-40px)] h-[calc(100vh-11.8vh)] m-[0_auto] mt-[1px] text-[12px] text-[#1e1e1e] leading-[15px]'>
        {/* Left Section */}
        <div className='h-full absolute left-0 top-0 w-[17.3611111111%] overflow-hidden bg-[#fff]'>
          <ul>
            <li className='text-xs text-white bg-[#000] border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>Sports</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>Cricket</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>Soccer</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>Tennis</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>E_Tennis</span>
            </li>
            <li className='text-xs text-black bg-white border-b border-[#eee1c0] w-full py-1 px-2'>
              <span>FancyBet</span>
            </li>
          </ul>
        </div>
        {/* Center Section */}
        <div className="h-full ml-[17.3611111111%] mr-[26.0416666667%] p-[0_15px]">
          {/* News Marquee */}
          <News />
          <div>
            <span className='text-xs font-bold'>Multi Markets</span>
            <p className='text-xs'>There are no followed multi markets.</p>
          </div>
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
        <div className='block lg:hidden text-[#7e97a7] text-[4.2666vw] m-[5.3333333333vw_2.6666666667vw] p-[2.6666666667vw_1.8666666667vw_5.3333333333vw] rounded-[1.6vw] border border-[#7e97a7] bg-[#fff]'>
          <h3 className='flex items-center justify-center text-center text-[5.3333333333vw] text-[#7e97a7] mb-[1.3333vw] p-[1.8666666667vw_0] border-b border-[#e0e6e6] leading-loose'>
            <img src="/Images/icon-nodata.svg" alt="" className='w-[6.266vw] h-[6.533vw] mr-[1.333vw] bg-contain' />
            There are currently no followed multi markets.
          </h3>
          <p className='text-[4.2666666667vw] text-[#7e97a7] text-center'>Please add some markets from events.</p>
        </div>
      </div>
    </>
  )
}

export default Multimarket