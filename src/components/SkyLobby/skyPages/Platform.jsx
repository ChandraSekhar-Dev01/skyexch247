import React from 'react'

function Platform() {
  return (
    <>
      <div className='pb-16 bg-black-img bg-cover p-3 min-h-full lg:pb-0 IN2:bg-index-red SANA:bg-index-blue' style={{ backgroundImage: "/Images/skyLobby/bg-platform.jpg" }}>
        <div className='sticky top-0 flex items-center text-white bg-[#665030] font-bold py-2 mb-4 mx-auto z-20 lg:col-span-4 max-w-7xl lg:top-10 IN2:text-primary SANA:bg-black/55 SANA:rounded-full SANA:backdrop-blur-sm'>
          <span className='ml-4 flex-1 min-w-[100px]'>
            Platform List
          </span>
          <div className='relative icon-info flex items-center mr-1 ml-3 lg:mx-4'>
            <span className='mr-0 hidden lg:mr-2 lg:block'>List Mode</span>
            <button className='text-[#fadda6] cursor-pointer'>
              <span className='relative mx-auto inline-block p-[0.375rem]'>
                <img src="/Images/skyLobby/list-brown.webp" alt="" className='overflow-hidden w-full h-6 lg:w-8 lg:h-8' />
              </span>
            </button>
            <button className='cursor-pointer'>
              <span className='relative mx-auto inline-block p-[0.375rem] w-full'>
                <img src="/Images/skyLobby/block-white.webp" alt="" className='overflow-hidden w-full h-6 lg:w-8 lg:h-8' />
              </span>
            </button>
            <div className="overflow-hidden [transition: all .4s ease-in-out, background-position .3s ease-in] absolute bottom-0 w-5 h-0.5 bg-[#fadda6] lg:w-7 right-11 lg:right-13"></div>
          </div>
          <div className='flex-grow flex items-center bg-[#fff] p-2 mr-4 rounded-full lg:flex-none'>
            <input type="text" placeholder='Search' className='w-3/4 bg-transparent px-2 rounded-full text-[#663333] focus:outline-none focus:border-brown-highlight SANA:text-gray-600' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Platform