import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Helper from '../helper';
import { getAllEvents } from '../redux/slice/event/eventSlice';
import { useLocation } from 'react-router-dom';

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
      <div className='hidden lg:flex gap-2 px-4 pt-[1px]'>
        {/* Right Section */}
        <div className='w-[20%] h-screen bg-[#fff]'>
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
        <div className='w-[70%] p-1'>
          <div>
            <span className='text-xs font-bold'>Multi Markets</span>
            <p className='text-xs'>There are no followed multi markets.</p>
          </div>
        </div>
        {/* Left Section */}
        <div className='w-[30%] h-screen bg-[#fff]'>
          <div className='flex justify-between items-center text-xs leading-6 text-[#fff] bg-[#243a48] px-2'>
            <div>Bet Slip</div>
            <div className='flex justify-center items-center rounded-sm h-3 w-3 border border-[#fff]'><span>-</span></div>
          </div>
        </div>
      </div>

      {/* For Mobile View */}
      <div className='block lg:hidden text-[#7e97a7] text-[4.2666vw] m-[5.3333333333vw_2.6666666667vw] p-[2.6666666667vw_1.8666666667vw_5.3333333333vw] rounded-[1.6vw] border border-[#7e97a7] bg-[#fff]'>
        <h3 className='flex items-center justify-center text-center text-[5.3333333333vw] text-[#7e97a7] mb-[1.3333vw] p-[1.8666666667vw_0] border-b border-[#e0e6e6] leading-loose'>
          <img src="/Images/icon-nodata.svg" alt="" className='w-[6.266vw] h-[6.533vw] mr-[1.333vw] bg-contain' />
          There are currently no followed multi markets.
        </h3>
        <p className='text-[4.2666666667vw] text-[#7e97a7] text-center'>Please add some markets from events.</p>
      </div>
    </>
  )
}

export default Multimarket