import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Platform() {
  const navigate = useNavigate();
  const [listView, setListView] = useState(true);



  return (
    <>
      <div className='pb-16 bg-cover p-3 min-h-[calc(100vh-70px)] lg:pb-0 IN2:bg-index-red SANA:bg-index-blue' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform.jpg')" }}>
        <div className='sticky top-0 flex items-center text-white bg-[#665030] font-bold py-2 mb-4 mx-auto z-20 lg:col-span-4 max-w-7xl lg:top-10 IN2:text-primary SANA:bg-black/55 SANA:rounded-full SANA:backdrop-blur-sm'>
          <span className='ml-4 flex-1 min-w-[100px]'>
            Platform List
          </span>
          <div className='relative icon-info flex items-center mr-1 ml-3 lg:mx-4'>
            <span className='mr-0 hidden lg:mr-2 lg:block'>List Mode</span>
            <button className={`${listView && 'text-[#fadda6]'} cursor-pointer`} onClick={() => setListView(true)}>
              <span className='relative mx-auto inline-block p-[0.375rem]'>
                <img src={`/Images/skyLobby/${listView ? 'list-brown' : 'list-white'}.webp`} alt="" className='block align-middle overflow-hidden w-6 h-6 lg:w-8 lg:h-8' />
              </span>
            </button>
            <button className={`${!listView && 'text-[#fadda6]'} cursor-pointer`} onClick={() => setListView(false)}>
              <span className='relative mx-auto inline-block w-full'>
                <img src={`/Images/skyLobby/${!listView ? 'tiles-brown' : 'tiles-white'}.webp`} alt="" className='block align-middle overflow-hidden w-6 h-6 lg:w-8 lg:h-8' />
              </span>
            </button>
            <div className={`overflow-hidden [transition:all_.4s_ease-in-out,background-position_.3s_ease-in] ${listView ? 'absolute bottom-0 w-5 h-0.5 bg-[#fadda6] lg:w-7 right-11 lg:right-[3.25rem]' : "absolute bottom-0 w-5 h-0.5 bg-[#fadda6] lg:w-7 right-2"}`}></div>
          </div>
          <div className=' flex flex-grow items-center bg-[#fff] p-2 mr-4 rounded-full lg:flex-none'>
            <input type="text" placeholder='Search' className='w-3/4 bg-transparent px-2 rounded-full text-[#663333] focus:outline-none focus:border-brown-highlight SANA:text-gray-600' />
          </div>
        </div>
        <div className='lg:col-span-4 max-w-7xl mx-auto'>
          {listView &&
            <div className='flex items-center flex-wrap lg:grid lg:grid-cols-4 lg:gap-4'>
              <div className='relative flex items-center w-full bg-cover p-2 my-2 cursor-pointer IN2:bg-platform-green IN2:p-0 IN2:shadow-lg SANA:rounded-md SANA:bg-entrance-bg-pattern SANA:bg-tertiary SANA:bg-contain SANA:bg-right SANA:bg-no-repeat SANA:shadow-md' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform1.jpg')" }}>
                <div className='relative w-20 h-20 p-0.5 bg-[linear-gradient(to_right_top,#654302,#f7c972,#644202,#f7c972,#694809,#f7c972,#6f4d0c)] rounded-full IN2:rounded-none IN2:p-0 SANA:rounded-md SANA:bg-none'>
                  <div className='p-1 bg-cover rounded-full min-h-16 IN2:rounded-none IN2:min-h-20 SANA:rounded-md SANA:bg-none SANA:bg-fifth' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform.jpg')" }}>
                    <img src="/Images/skyLobby/BETGAMES1.png" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                </div>
                <div className='mx-4'>
                  <div className='text-[#fadda6] text-lg font-bold'>
                    BETGAMES
                  </div>
                  <div className='absolute right-0 top-2 flex items-center p-1 text-white'>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                  </div>
                  <div className='absolute w-20 right-2 bottom-1'>
                    <button className='bg-no-repeat bg-contain w-20 h-7 IN2:bg-btn-play-now-red SANA:bg-btn-play-sana' style={{ backgroundImage: "url('/Images/skyLobby/btn-playnow.webp')" }}></button>
                  </div>
                </div>
              </div>
              <div className='relative flex items-center w-full bg-cover p-2 my-2 cursor-pointer IN2:bg-platform-green IN2:p-0 IN2:shadow-lg SANA:rounded-md SANA:bg-entrance-bg-pattern SANA:bg-tertiary SANA:bg-contain SANA:bg-right SANA:bg-no-repeat SANA:shadow-md' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform1.jpg')" }}>
                <div className='relative w-20 h-20 p-0.5 bg-[linear-gradient(to_right_top,#654302,#f7c972,#644202,#f7c972,#694809,#f7c972,#6f4d0c)] rounded-full IN2:rounded-none IN2:p-0 SANA:rounded-md SANA:bg-none'>
                  <div className='p-1 bg-cover rounded-full min-h-16 IN2:rounded-none IN2:min-h-20 SANA:rounded-md SANA:bg-none SANA:bg-fifth' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform.jpg')" }}>
                    <img src="/Images/skyLobby/HORSEBOOK1.png" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                </div>
                <div className='mx-4'>
                  <div className='text-[#fadda6] text-lg font-bold'>
                    HORSEBOOK
                  </div>
                  <div className='absolute right-0 top-2 flex items-center p-1 text-white'>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                  </div>
                  <div className='absolute w-20 right-2 bottom-1'>
                    <button className='bg-no-repeat bg-contain w-20 h-7 IN2:bg-btn-play-now-red SANA:bg-btn-play-sana' style={{ backgroundImage: "url('/Images/skyLobby/btn-playnow.webp')" }}></button>
                  </div>
                </div>
              </div>
              <div className='relative flex items-center w-full bg-cover p-2 my-2 cursor-pointer IN2:bg-platform-green IN2:p-0 IN2:shadow-lg SANA:rounded-md SANA:bg-entrance-bg-pattern SANA:bg-tertiary SANA:bg-contain SANA:bg-right SANA:bg-no-repeat SANA:shadow-md' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform1.jpg')" }} onClick={()=> navigate('/lobby/platform/JDB')}>
                <div className='relative w-20 h-20 p-0.5 bg-[linear-gradient(to_right_top,#654302,#f7c972,#644202,#f7c972,#694809,#f7c972,#6f4d0c)] rounded-full IN2:rounded-none IN2:p-0 SANA:rounded-md SANA:bg-none'>
                  <div className='p-1 bg-cover rounded-full min-h-16 IN2:rounded-none IN2:min-h-20 SANA:rounded-md SANA:bg-none SANA:bg-fifth' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform.jpg')" }}>
                    <img src="/Images/skyLobby/JDB.png" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                </div>
                <div className='mx-4'>
                  <div className='text-[#fadda6] text-lg font-bold'>
                    JDB
                  </div>
                  <div className='absolute right-0 top-2 flex items-center p-1 text-white'>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/slots.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/fishing.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                  </div>
                  <div className='absolute w-20 right-2 bottom-1'>
                    <button className='bg-no-repeat bg-contain w-20 h-7 IN2:bg-btn-play-now-red SANA:bg-btn-play-sana' style={{ backgroundImage: "url('/Images/skyLobby/btn-viewmore.webp')" }}></button>
                  </div>
                </div>
              </div>
              <div className='relative flex items-center w-full bg-cover p-2 my-2 cursor-pointer IN2:bg-platform-green IN2:p-0 IN2:shadow-lg SANA:rounded-md SANA:bg-entrance-bg-pattern SANA:bg-tertiary SANA:bg-contain SANA:bg-right SANA:bg-no-repeat SANA:shadow-md' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform1.jpg')" }}>
                <div className='relative w-20 h-20 p-0.5 bg-[linear-gradient(to_right_top,#654302,#f7c972,#644202,#f7c972,#694809,#f7c972,#6f4d0c)] rounded-full IN2:rounded-none IN2:p-0 SANA:rounded-md SANA:bg-none'>
                  <div className='p-1 bg-cover rounded-full min-h-16 IN2:rounded-none IN2:min-h-20 SANA:rounded-md SANA:bg-none SANA:bg-fifth' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform.jpg')" }}>
                    <img src="/Images/skyLobby/JILI.png" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                </div>
                <div className='mx-4'>
                  <div className='text-[#fadda6] text-lg font-bold'>
                    JILI
                  </div>
                  <div className='absolute right-0 top-2 flex items-center p-1 text-white'>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/table.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/slots.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                  </div>
                  <div className='absolute w-20 right-2 bottom-1'>
                    <button className='bg-no-repeat bg-contain w-20 h-7 IN2:bg-btn-play-now-red SANA:bg-btn-play-sana' style={{ backgroundImage: "url('/Images/skyLobby/btn-viewmore.webp')" }}></button>
                  </div>
                </div>
              </div>
              <div className='relative flex items-center w-full bg-cover p-2 my-2 cursor-pointer IN2:bg-platform-green IN2:p-0 IN2:shadow-lg SANA:rounded-md SANA:bg-entrance-bg-pattern SANA:bg-tertiary SANA:bg-contain SANA:bg-right SANA:bg-no-repeat SANA:shadow-md' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform1.jpg')" }}>
                <div className='relative w-20 h-20 p-0.5 bg-[linear-gradient(to_right_top,#654302,#f7c972,#644202,#f7c972,#694809,#f7c972,#6f4d0c)] rounded-full IN2:rounded-none IN2:p-0 SANA:rounded-md SANA:bg-none'>
                  <div className='p-1 bg-cover rounded-full min-h-16 IN2:rounded-none IN2:min-h-20 SANA:rounded-md SANA:bg-none SANA:bg-fifth' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform.jpg')" }}>
                    <img src="/Images/skyLobby/KINGMAKER.png" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                </div>
                <div className='mx-4'>
                  <div className='text-[#fadda6] text-lg font-bold'>
                    KINGMIDAS
                  </div>
                  <div className='absolute right-0 top-2 flex items-center p-1 text-white'>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/table.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                    {/* <span className='flex-none mr-1'>
                    <img src="/Images/skyLobby/slots.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                  </span> */}
                  </div>
                  <div className='absolute w-20 right-2 bottom-1'>
                    <button className='bg-no-repeat bg-contain w-20 h-7 IN2:bg-btn-play-now-red SANA:bg-btn-play-sana' style={{ backgroundImage: "url('/Images/skyLobby/btn-viewmore.webp')" }}></button>
                  </div>
                </div>
              </div>
              <div className='relative flex items-center w-full bg-cover p-2 my-2 cursor-pointer IN2:bg-platform-green IN2:p-0 IN2:shadow-lg SANA:rounded-md SANA:bg-entrance-bg-pattern SANA:bg-tertiary SANA:bg-contain SANA:bg-right SANA:bg-no-repeat SANA:shadow-md' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform1.jpg')" }}>
                <div className='relative w-20 h-20 p-0.5 bg-[linear-gradient(to_right_top,#654302,#f7c972,#644202,#f7c972,#694809,#f7c972,#6f4d0c)] rounded-full IN2:rounded-none IN2:p-0 SANA:rounded-md SANA:bg-none'>
                  <div className='p-1 bg-cover rounded-full min-h-16 IN2:rounded-none IN2:min-h-20 SANA:rounded-md SANA:bg-none SANA:bg-fifth' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform.jpg')" }}>
                    <img src="/Images/skyLobby/SEVENMOJOS1.png" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                </div>
                <div className='mx-4'>
                  <div className='text-[#fadda6] text-lg font-bold'>
                    SEVENMOJOS
                  </div>
                  <div className='absolute right-0 top-2 flex items-center p-1 text-white'>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/slots.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                  </div>
                  <div className='absolute w-20 right-2 bottom-1'>
                    <button className='bg-no-repeat bg-contain w-20 h-7 IN2:bg-btn-play-now-red SANA:bg-btn-play-sana' style={{ backgroundImage: "url('/Images/skyLobby/btn-viewmore.webp')" }}></button>
                  </div>
                </div>
              </div>
              <div className='relative flex items-center w-full bg-cover p-2 my-2 cursor-pointer IN2:bg-platform-green IN2:p-0 IN2:shadow-lg SANA:rounded-md SANA:bg-entrance-bg-pattern SANA:bg-tertiary SANA:bg-contain SANA:bg-right SANA:bg-no-repeat SANA:shadow-md' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform1.jpg')" }}>
                <div className='relative w-20 h-20 p-0.5 bg-[linear-gradient(to_right_top,#654302,#f7c972,#644202,#f7c972,#694809,#f7c972,#6f4d0c)] rounded-full IN2:rounded-none IN2:p-0 SANA:rounded-md SANA:bg-none'>
                  <div className='p-1 bg-cover rounded-full min-h-16 IN2:rounded-none IN2:min-h-20 SANA:rounded-md SANA:bg-none SANA:bg-fifth' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform.jpg')" }}>
                    <img src="/Images/skyLobby/SEXYBCRT1.png" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                </div>
                <div className='mx-4'>
                  <div className='text-[#fadda6] text-lg font-bold'>
                    SEXY
                  </div>
                  <div className='absolute right-0 top-2 flex items-center p-1 text-white'>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                  </div>
                  <div className='absolute w-20 right-2 bottom-1'>
                    <button className='bg-no-repeat bg-contain w-20 h-7 IN2:bg-btn-play-now-red SANA:bg-btn-play-sana' style={{ backgroundImage: "url('/Images/skyLobby/btn-playnow.webp')" }}></button>
                  </div>
                </div>
              </div>
              <div className='relative flex items-center w-full bg-cover p-2 my-2 cursor-pointer IN2:bg-platform-green IN2:p-0 IN2:shadow-lg SANA:rounded-md SANA:bg-entrance-bg-pattern SANA:bg-tertiary SANA:bg-contain SANA:bg-right SANA:bg-no-repeat SANA:shadow-md' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform1.jpg')" }}>
                <div className='relative w-20 h-20 p-0.5 bg-[linear-gradient(to_right_top,#654302,#f7c972,#644202,#f7c972,#694809,#f7c972,#6f4d0c)] rounded-full IN2:rounded-none IN2:p-0 SANA:rounded-md SANA:bg-none'>
                  <div className='p-1 bg-cover rounded-full min-h-16 IN2:rounded-none IN2:min-h-20 SANA:rounded-md SANA:bg-none SANA:bg-fifth' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform.jpg')" }}>
                    <img src="/Images/skyLobby/SKYCASINO1.png" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                </div>
                <div className='mx-4'>
                  <div className='text-[#fadda6] text-lg font-bold'>
                    SKYCASINO
                  </div>
                  <div className='absolute right-0 top-2 flex items-center p-1 text-white'>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                  </div>
                  <div className='absolute w-20 right-2 bottom-1'>
                    <button className='bg-no-repeat bg-contain w-20 h-7 IN2:bg-btn-play-now-red SANA:bg-btn-play-sana' style={{ backgroundImage: "url('/Images/skyLobby/btn-playnow.webp')" }}></button>
                  </div>
                </div>
              </div>
              <div className='relative flex items-center w-full bg-cover p-2 my-2 cursor-pointer IN2:bg-platform-green IN2:p-0 IN2:shadow-lg SANA:rounded-md SANA:bg-entrance-bg-pattern SANA:bg-tertiary SANA:bg-contain SANA:bg-right SANA:bg-no-repeat SANA:shadow-md' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform1.jpg')" }}>
                <div className='relative w-20 h-20 p-0.5 bg-[linear-gradient(to_right_top,#654302,#f7c972,#644202,#f7c972,#694809,#f7c972,#6f4d0c)] rounded-full IN2:rounded-none IN2:p-0 SANA:rounded-md SANA:bg-none'>
                  <div className='p-1 bg-cover rounded-full min-h-16 IN2:rounded-none IN2:min-h-20 SANA:rounded-md SANA:bg-none SANA:bg-fifth' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform.jpg')" }}>
                    <img src="/Images/skyLobby/SPADE1.png" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                </div>
                <div className='mx-4'>
                  <div className='text-[#fadda6] text-lg font-bold'>
                    SPADE
                  </div>
                  <div className='absolute right-0 top-2 flex items-center p-1 text-white'>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/slots.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                    {/* <span className='flex-none mr-1'>
                    <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                  </span> */}
                  </div>
                  <div className='absolute w-20 right-2 bottom-1'>
                    <button className='bg-no-repeat bg-contain w-20 h-7 IN2:bg-btn-play-now-red SANA:bg-btn-play-sana' style={{ backgroundImage: "url('/Images/skyLobby/btn-viewmore.webp')" }}></button>
                  </div>
                </div>
              </div>
              <div className='relative flex items-center w-full bg-cover p-2 my-2 cursor-pointer IN2:bg-platform-green IN2:p-0 IN2:shadow-lg SANA:rounded-md SANA:bg-entrance-bg-pattern SANA:bg-tertiary SANA:bg-contain SANA:bg-right SANA:bg-no-repeat SANA:shadow-md' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform1.jpg')" }}>
                <div className='relative w-20 h-20 p-0.5 bg-[linear-gradient(to_right_top,#654302,#f7c972,#644202,#f7c972,#694809,#f7c972,#6f4d0c)] rounded-full IN2:rounded-none IN2:p-0 SANA:rounded-md SANA:bg-none'>
                  <div className='p-1 bg-cover rounded-full min-h-16 IN2:rounded-none IN2:min-h-20 SANA:rounded-md SANA:bg-none SANA:bg-fifth' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform.jpg')" }}>
                    <img src="/Images/skyLobby/SPORTRADAR1.png" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                </div>
                <div className='mx-4'>
                  <div className='text-[#fadda6] text-lg font-bold'>
                    SPORTRADAR
                  </div>
                  <div className='absolute right-0 top-2 flex items-center p-1 text-white'>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/sports.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                  </div>
                  <div className='absolute w-20 right-2 bottom-1'>
                    <button className='bg-no-repeat bg-contain w-20 h-7 IN2:bg-btn-play-now-red SANA:bg-btn-play-sana' style={{ backgroundImage: "url('/Images/skyLobby/btn-playnow.webp')" }}></button>
                  </div>
                </div>
              </div>
              <div className='relative flex items-center w-full bg-cover p-2 my-2 cursor-pointer IN2:bg-platform-green IN2:p-0 IN2:shadow-lg SANA:rounded-md SANA:bg-entrance-bg-pattern SANA:bg-tertiary SANA:bg-contain SANA:bg-right SANA:bg-no-repeat SANA:shadow-md' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform1.jpg')" }}>
                <div className='relative w-20 h-20 p-0.5 bg-[linear-gradient(to_right_top,#654302,#f7c972,#644202,#f7c972,#694809,#f7c972,#6f4d0c)] rounded-full IN2:rounded-none IN2:p-0 SANA:rounded-md SANA:bg-none'>
                  <div className='p-1 bg-cover rounded-full min-h-16 IN2:rounded-none IN2:min-h-20 SANA:rounded-md SANA:bg-none SANA:bg-fifth' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform.jpg')" }}>
                    <img src="/Images/skyLobby/SUPERNOWA1.png" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                </div>
                <div className='mx-4'>
                  <div className='text-[#fadda6] text-lg font-bold'>
                    SUPERNOWA
                  </div>
                  <div className='absolute right-0 top-2 flex items-center p-1 text-white'>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                  </div>
                  <div className='absolute w-20 right-2 bottom-1'>
                    <button className='bg-no-repeat bg-contain w-20 h-7 IN2:bg-btn-play-now-red SANA:bg-btn-play-sana' style={{ backgroundImage: "url('/Images/skyLobby/btn-playnow.webp')" }}></button>
                  </div>
                </div>
              </div>
              <div className='relative flex items-center w-full bg-cover p-2 my-2 cursor-pointer IN2:bg-platform-green IN2:p-0 IN2:shadow-lg SANA:rounded-md SANA:bg-entrance-bg-pattern SANA:bg-tertiary SANA:bg-contain SANA:bg-right SANA:bg-no-repeat SANA:shadow-md' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform1.jpg')" }}>
                <div className='relative w-20 h-20 p-0.5 bg-[linear-gradient(to_right_top,#654302,#f7c972,#644202,#f7c972,#694809,#f7c972,#6f4d0c)] rounded-full IN2:rounded-none IN2:p-0 SANA:rounded-md SANA:bg-none'>
                  <div className='p-1 bg-cover rounded-full min-h-16 IN2:rounded-none IN2:min-h-20 SANA:rounded-md SANA:bg-none SANA:bg-fifth' style={{ backgroundImage: "url('/Images/skyLobby/bg-platform.jpg')" }}>
                    <img src="/Images/skyLobby/SV3881.png" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                </div>
                <div className='mx-4'>
                  <div className='text-[#fadda6] text-lg font-bold'>
                    SV388
                  </div>
                  <div className='absolute right-0 top-2 flex items-center p-1 text-white'>
                    <span className='flex-none mr-1'>
                      <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden w-4 h-4 SANA:w-5 SANA:h-5 SANA:fill-fifth invert brightness-0' />
                    </span>
                  </div>
                  <div className='absolute w-20 right-2 bottom-1'>
                    <button className='bg-no-repeat bg-contain w-20 h-7 IN2:bg-btn-play-now-red SANA:bg-btn-play-sana' style={{ backgroundImage: "url('/Images/skyLobby/btn-playnow.webp')" }}></button>
                  </div>
                </div>
              </div>
            </div>
          }
          {!listView && (
            <div className="flex flex-wrap">
              {[
                {
                  title: "BETGAMES",
                  cover: "/Images/skyLobby/BETGAMES_cover.png",
                  button: '/Images/skyLobby/btn-playnow.webp',
                  icons: ["/Images/skyLobby/live.webp"],
                },
                {
                  title: "HORSEBOOK",
                  cover: "/Images/skyLobby/HORSEBOOK_cover.png",
                  button: '/Images/skyLobby/btn-playnow.webp',
                  icons: ["/Images/skyLobby/live.webp"],
                },
                {
                  url: "/lobby/platform/JDB",
                  title: "JDB",
                  cover: "/Images/skyLobby/JDB_cover.png",
                  button: '/Images/skyLobby/btn-viewmore.webp',
                  icons: [
                    "/Images/skyLobby/slots.webp",
                    "/Images/skyLobby/fishing.webp",
                  ],
                },
                {
                  title: "JILI",
                  cover: "/Images/skyLobby/JILI_cover.png",
                  button: '/Images/skyLobby/btn-viewmore.webp',
                  icons: [
                    "/Images/skyLobby/table.webp",
                    "/Images/skyLobby/slots.webp",
                  ],
                },
                {
                  title: "KINGMAKER",
                  cover: "/Images/skyLobby/KINGMAKER_cover.png",
                  button: '/Images/skyLobby/btn-viewmore.webp',
                  icons: [
                    "/Images/skyLobby/table.webp",
                  ],
                },
                {
                  title: "SEVENMOJOS",
                  cover: "/Images/skyLobby/SEVENMOJOS_cover.png",
                  button: '/Images/skyLobby/btn-viewmore.webp',
                  icons: [
                    "/Images/skyLobby/slots.webp",
                    "/Images/skyLobby/live.webp",
                  ],
                },
                {
                  title: "SEXYBCRT",
                  cover: "/Images/skyLobby/SEXYBCRT_cover.png",
                  button: '/Images/skyLobby/btn-playnow.webp',
                  icons: [
                    // "/Images/skyLobby/slots.webp",
                    "/Images/skyLobby/live.webp",
                  ],
                },
                {
                  title: "SKYCASINO",
                  cover: "/Images/skyLobby/SKYCASINO_cover.png",
                  button: '/Images/skyLobby/btn-playnow.webp',
                  icons: [
                    // "/Images/skyLobby/slots.webp",
                    "/Images/skyLobby/live.webp",
                  ],
                },
                {
                  title: "SPADE",
                  cover: "/Images/skyLobby/SPADE_cover.png",
                  button: '/Images/skyLobby/btn-viewmore.webp',
                  icons: [
                    "/Images/skyLobby/slots.webp",
                    // "/Images/skyLobby/live.webp",
                  ],
                },
                {
                  title: "SPORTRADAR",
                  cover: "/Images/skyLobby/SPORTRADAR_cover.png",
                  button: '/Images/skyLobby/btn-playnow.webp',
                  icons: [
                    "/Images/skyLobby/sports.webp",
                    // "/Images/skyLobby/live.webp",
                  ],
                },
                {
                  title: "SUPERNOWA",
                  cover: "/Images/skyLobby/SUPERNOWA_cover.png",
                  button: '/Images/skyLobby/btn-playnow.webp',
                  icons: [
                    // "/Images/skyLobby/sports.webp",
                    "/Images/skyLobby/live.webp",
                  ],
                },
                {
                  title: "SV388",
                  cover: "/Images/skyLobby/SV388_cover.png",
                  button: '/Images/skyLobby/btn-playnow.webp',
                  icons: [
                    // "/Images/skyLobby/sports.webp",
                    "/Images/skyLobby/live.webp",
                  ],
                },
              ].map(({ url, title, cover, button, icons }, idx) => (
                <div
                  key={idx}
                  className="w-[48%] cursor-pointer md:w-[calc(240px-3rem)] md:mr-3 mb-3 min-h-[146px] odd:mr-3 border-2 border-[#1c1813] rounded-md shadow-md overflow-hidden IN2:border-none IN2:shadow-none IN2:rounded-none SANA:border-none SANA:bg-tertiary"
                  onClick={() => { url && navigate(url); }}
                >
                  <div
                    className="relative bg-cover IN2:bg-mask-black SANA:bg-entrance-bg-pattern-dark"
                    style={{ backgroundImage: "url('/Images/skyLobby/bg-platform1.jpg')" }}
                  >
                    <div>
                      <img
                        src={cover}
                        alt={title}
                        className="block align-middle w-full max-w-full h-auto"
                      />
                    </div>
                    <div className="absolute right-2 bottom-0 w-[50%] z-[1]">
                      <button
                        className="bg-contain bg-no-repeat bg-right w-24 h-8 IN2:bg-btn-play-now-red SANA:bg-btn-play-sana"
                        style={{ backgroundImage: `url(${button})` }}
                      ></button>
                    </div>
                    <div className="absolute flex w-full h-7 bottom-0 left-0 px-2 py-1 text-white bg-black bg-opacity-60">
                      {icons.map((icon, i) => (
                        <span key={i} className="flex-none m-1">
                          <img
                            src={icon}
                            alt=""
                            className="overflow-hidden w-4 h-4 invert brightness-0"
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-[#fadda6] text-center mt-2 mb-2 IN2:text-primary">
                    {title}
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </>
  )
}

export default Platform