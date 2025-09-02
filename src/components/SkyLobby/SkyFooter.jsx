import React from 'react'
import { Link } from 'react-router-dom'

function SkyFooter() {
  return (
    <>
      <div className='fixed bottom-0 w-full bg-[#fff] text-[0.75rem] leading-[1rem] shadow-[0_-5px_20px_#00000040] md:nav-setting-lg md:sticky md:top-0 z-30'>
        <div className='flex max-w-7xl lg:mx-auto'>
          <Link className='pb-0.5 flex-1 text-center text-[#663333] md:nav-icon-lg lg:max-w-nav lg:hover:bg-glass md:SANA:text-fifth'>
            <span className='relative mx-auto inline-block p-[0.375rem] top-[-0.5rem] mb-[-0.5rem] rounded-[9999px] border-[4px] border-[#fff] bg-[linear-gradient(to_bottom,_#9a734b,_#64401d,_#b16c28)] text-[#fff]'>
              <img
                src='/Images/skyLobby/recent-white.webp'
                alt=''
                className="w-8 h-8 lg:w-7 lg:h-7"
              />
            </span>
            <span className='flex-grow text-center md:-ml-4 block'>
              Recent
            </span>
          </Link>
          <Link className='pb-0.5 flex-1 text-center text-[#663333] md:nav-icon-lg lg:max-w-nav lg:hover:bg-glass md:SANA:text-fifth'>
            <span className='relative mx-auto inline-block p-[0.375rem]'>
              <img
                src='/Images/skyLobby/recent-white.webp'
                alt=''
                className="w-8 h-8 lg:w-7 lg:h-7"
              />
            </span>
            <span className='flex-grow text-center md:-ml-4 block'>
              Recent
            </span>
          </Link>
          <Link className='pb-0.5 flex-1 text-center text-[#663333] md:nav-icon-lg lg:max-w-nav lg:hover:bg-glass md:SANA:text-fifth'>
            <span className='relative mx-auto inline-block p-[0.375rem]'>
              <img
                src='/Images/skyLobby/recent-white.webp'
                alt=''
                className="w-8 h-8 lg:w-7 lg:h-7"
              />
            </span>
            <span className='flex-grow text-center md:-ml-4 block'>
              Recent
            </span>
          </Link>
          <Link className='pb-0.5 flex-1 text-center text-[#663333] md:nav-icon-lg lg:max-w-nav lg:hover:bg-glass md:SANA:text-fifth'>
            <span className='relative mx-auto inline-block p-[0.375rem]'>
              <img
                src='/Images/skyLobby/recent-white.webp'
                alt=''
                className="w-8 h-8 lg:w-7 lg:h-7"
              />
            </span>
            <span className='flex-grow text-center md:-ml-4 block'>
              Recent
            </span>
          </Link>
          <Link className='pb-0.5 flex-1 text-center text-[#663333] md:nav-icon-lg lg:max-w-nav lg:hover:bg-glass md:SANA:text-fifth'>
            <span className='relative mx-auto inline-block p-[0.375rem]'>
              <img
                src='/Images/skyLobby/recent-white.webp'
                alt=''
                className="w-8 h-8 lg:w-7 lg:h-7"
              />
            </span>
            <span className='flex-grow text-center md:-ml-4 block'>
              Recent
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SkyFooter