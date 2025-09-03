import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SkyFooter() {
  const location = useLocation();
  // console.log('location path name : ', location.pathname)
  return (
    <>
      <div className='block lg:hidden fixed bottom-0 w-full bg-[#fff] text-[0.75rem] leading-[1rem] shadow-[0_-5px_20px_#00000040] md:nav-setting-lg md:sticky md:top-0 z-30'>
        <div className='flex max-w-7xl lg:mx-auto text-xs text-[#9e9e9e]'>
          <Link
            to={'/lobby/recent'}
            className={`pb-0.5 flex-1 text-center ${location.pathname == '/lobby/recent' ? "text-[#663333]" : ""} md:nav-icon-lg lg:max-w-nav lg:hover:bg-glass`}
          >
            <span className={`relative mx-auto inline-block p-[0.375rem] ${location.pathname == '/lobby/recent' ? "top-[-0.5rem] mb-[-0.5rem] rounded-[9999px] border-[4px] border-[#fff] bg-[linear-gradient(to_bottom,_#9a734b,_#64401d,_#b16c28)] text-[#fff]" : ""}`}>
              <img
                src={`/Images/skyLobby/${location.pathname == '/lobby/recent' ? "recent-white" : "recent-grey"}.webp`}
                alt=''
                className="w-8 h-8 lg:w-7 lg:h-7"
              />
            </span>
            <span className='flex-grow text-center md:-ml-4 block'>
              Recent
            </span>
          </Link>
          <Link
            to={'/lobby/favorite'}
            className={`pb-0.5 flex-1 text-center ${location.pathname == '/lobby/favorite' ? "text-[#663333]" : ""} md:nav-icon-lg lg:max-w-nav lg:hover:bg-glass`}
          >
            <span className={`relative mx-auto inline-block p-[0.375rem] ${location.pathname == '/lobby/favorite' ? "top-[-0.5rem] mb-[-0.5rem] rounded-[9999px] border-[4px] border-[#fff] bg-[linear-gradient(to_bottom,_#9a734b,_#64401d,_#b16c28)] text-[#fff]" : ""}`}>
              <img
                src={`/Images/skyLobby/${location.pathname == '/lobby/favorite' ? "fvrt-star" : "favorite-grey"}.webp`}
                alt=''
                className="w-8 h-8 lg:w-7 lg:h-7"
              />
            </span>
            <span className='flex-grow text-center md:-ml-4 block'>
              Favorite
            </span>
          </Link>
          <Link
            to={'/lobby'}
            className={`pb-0.5 flex-1 text-center ${location.pathname == '/lobby' ? "text-[#663333]" : ""} md:nav-icon-lg lg:max-w-nav lg:hover:bg-glass`}
          >
            <span className={`relative mx-auto inline-block p-[0.375rem] ${location.pathname == '/lobby' ? "top-[-0.5rem] mb-[-0.5rem] rounded-[9999px] border-[4px] border-[#fff] bg-[linear-gradient(to_bottom,_#9a734b,_#64401d,_#b16c28)] text-[#fff]" : ""}`}>
              <img
                src={`/Images/skyLobby/${location.pathname == '/lobby' ? "ranking-star" : "ranking-grey"}.webp`}
                alt=''
                className="w-8 h-8 lg:w-7 lg:h-7"
              />
            </span>
            <span className='flex-grow text-center md:-ml-4 block'>
              Rankings
            </span>
          </Link>
          <Link className='pb-0.5 flex-1 text-center md:nav-icon-lg lg:max-w-nav lg:hover:bg-glass md:SANA:text-fifth'>
            <span className='relative mx-auto inline-block p-[0.375rem]'>
              <img
                src='/Images/skyLobby/games-grey.webp'
                alt=''
                className="w-8 h-8 lg:w-7 lg:h-7"
              />
            </span>
            <span className='flex-grow text-center md:-ml-4 block'>
              Games
            </span>
          </Link>
          <Link className='pb-0.5 flex-1 text-center md:nav-icon-lg lg:max-w-nav lg:hover:bg-glass md:SANA:text-fifth'>
            <span className='relative mx-auto inline-block p-[0.375rem]'>
              <img
                src='/Images/skyLobby/platform-grey.webp'
                alt=''
                className="w-8 h-8 lg:w-7 lg:h-7"
              />
            </span>
            <span className='flex-grow text-center md:-ml-4 block'>
              Platform
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default SkyFooter