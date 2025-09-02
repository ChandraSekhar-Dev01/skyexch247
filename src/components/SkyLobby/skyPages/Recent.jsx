import React from 'react'

function Recent() {
  return (
    <>
      <div className='pb-16 md:pb-0 min-h-[calc(100vh-70px-6rem)]'>
        <div className='min-h-[calc(100vh-70px-6rem)] overflow-hidden max-w-7xl mx-auto text-[#663333] lg:col-span-4 lg:my-4 lg:px-4 lg:bg-[#fff] lg:rounded-md lg:min-h-0'>
          <div className='flex items-center text-[#663333] font-bold p-3'>
            <span className='flex-none my-2 mr-2'>
              <img src="/Images/skyLobby/recent.webp" alt="" className='overflow-hidden w-8 h-8' />
            </span>
            <span className='flex-grow'>Recent</span>
          </div>
          <div className='text-[#663333] text-center w-3/4 my-20 mx-auto'>
            <div className='mx-auto w-40 mb-10'>
              <img src="/Images/skyLobby/recent-nodata.png" alt="" />
            </div>
            <span className='font-bold text-lg'>
              Begin your journey by playing some games!
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recent