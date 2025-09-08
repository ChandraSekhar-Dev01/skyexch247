import React, { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

function SubGames() {
  const navigate = useNavigate();
  const [filterData, setFilterData] = useState('All')
  return (
    <>
      <div className='pb-[4rem] bg-cover lg:pb-0 IN2:bg-index-red IN2:bg-fixed SANA:bg-index-blue SANA:bg-fixed' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform.webp')" }}>
        <div className='sticky top-0 lg:top-nav-desktop z-20 bg-cover min-h-[110px] overflow-hidden lg:overflow-visible IN2:bg-gradient-to-b IN2:from-secondary IN2:to-fourth IN2:backdrop-blur-sm SANA:bg-secondary SANA:bg-none' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform1.webp')" }}>
          <div className='relative lg:col-span-4 max-w-7xl mx-auto'>
            <span className='block text-white font-bold z-10 cursor-pointer w-52 IN2:text-primary SANA:text-primary'>
              <div className='flex items-center p-4' onClick={() => navigate('/lobby/platform')}>
                <span className='mr-2'>
                  <FaChevronRight className='rotate-180 overflow-hidden fill-[#fff] w-7 h-7' />
                </span>
                <span className='flex-none mr-4'>JDB</span>
              </div>
            </span>
            <div className='absolute right-5 top-5 lg:left-8 lg:top-12 lg:IN2:left-10 lg:IN2:top-16'>
              <div className="relative w-20 h-20 p-0.5 bg-[linear-gradient(to_right_top,_#654302,_#f7c972,_#644202,_#f7c972,_#694809,_#f7c972,_#6f4d0c)] rounded-full lg:IN2:w-20 lg:IN2:h-20 IN2:bg-transparent lg:IN2:p-0 SANA:bg-none">
                <div className='p-2 bg-black rounded-full min-h-[60px] lg:IN2:rounded-lg SANA:rounded-md SANA:bg-none SANA:bg-fifth SANA:shadow-sm'>
                  <img src="/Images/skyLobby/JDB.webp" alt="" className='block align-middle w-full max-w-full h-auto' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sticky top-[110px] z-20 bg-[linear-gradient(to_bottom,#665030,#1c1202)] flex lg:col-span-4 lg:max-w-5xl lg:top-32 lg:mx-auto lg:rounded-full lg:overflow-hidden text-sm'>
          <div className={`p-2 flex-1 text-center lg:hover:bg-[#00000020] ${filterData == "All" ? "bg-center text-[#ffcd79]" : "text-[#9e9e9e]"} cursor-pointer`} style={{ backgroundImage: filterData == "All" && "url('/Images/skyLobby/nav-active-bg.webp')", backgroundSize: "100% 100%" }} onClick={() => setFilterData('All')}>
            All
          </div>
          <div className={`p-2 flex-1 text-center lg:hover:bg-[#00000020] ${filterData == "slot" ? "bg-center text-[#ffcd79]" : "text-[#9e9e9e]"} cursor-pointer`} style={{ backgroundImage: filterData == "slot" && "url('/Images/skyLobby/nav-active-bg.webp')", backgroundSize: "100% 100%" }} onClick={() => setFilterData('slot')}>
            Slot
          </div>
          <div className={`p-2 flex-1 text-center lg:hover:bg-[#00000020] ${filterData == "fishing" ? "bg-center text-[#ffcd79]" : "text-[#9e9e9e]"} cursor-pointer`} style={{ backgroundImage: filterData == "fishing" && "url('/Images/skyLobby/nav-active-bg.webp')", backgroundSize: "100% 100%" }} onClick={() => setFilterData('fishing')}>
            Fishing
          </div>
        </div>
        <div className='min-h-[calc(100vh-185px)] overflow-hidden SANA:bg-tertiary'>
          <div className='relative flex flex-wrap mx-1 md:mx-4 lg:max-w-7xl lg:mx-auto mt-5 text-[#d5b565]'>
            <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
              <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h04.webp')" }}>
                <span className='block flex-none w-3 lg:w-4.5'>
                  <img src="/Images/skyLobby/fishing.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                </span>
                <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>JDB</span>
              </div>
              <div className='relative mb-3'>
                {/* <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                  <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                </div> */}
                <img src="/Images/skyLobby/JDB-FISH-008.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                  <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                </button>
                <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
              </div>
              <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>Cai Shen Fishing</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubGames