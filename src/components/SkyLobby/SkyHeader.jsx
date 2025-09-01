import React, { useState } from 'react'

function SkyHeader() {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  return (
    <>

      <header className='py-1 bg-no-repeat [background-size:100%] text-[#fff]' style={{ backgroundImage: "url('/Images/skyLobby/head-bg.jpg')" }}>
        <div className='mx-auto relative flex items-center'>
          <span className='w-[20%] mx-2'>
            <img src="/Images/skyLobby/skyLogo.webp" alt="" className='block align-middle w-full max-w-full h-auto' />
          </span>
          <ul className='grid grid-flow-col flex-grow rounded-[0.375rem] bg-[#fff] opacity-[0.7] p-[0.5rem_0.2rem] text-[0.75rem] leading-[1rem] text-[#663333] m-0'>
            <li className='flex col-span-2 mb-[0.25rem]'>
              <span className='ml-[0.25rem] mr-[0.25rem] block w-[0.875rem]'>
                <img src="/Images/skyLobby/userIcon.webp" alt="" className='block align-middle w-full max-w-full h-auto' />
              </span>
              <span>001jp1122user</span>
            </li>
            <li className='flex items-center'>
              <span className='ml-[0.25rem] mr-[0.25rem] block w-[0.875rem]'>
                <img src="/Images/skyLobby/balance.webp" alt="" className='block align-middle w-full max-w-full h-auto' />
              </span>
              <span>************</span>
            </li>
            <li className='flex justify-self-end items-center w-[2rem] row-span-2'>
              <button className='cursor-pointer bg-transparent '>
                <img src="/Images/skyLobby/balanceEye.webp" alt="" className='block align-middle w-full max-w-full h-auto' />
              </button>
            </li>
          </ul>
          <div className='flex-none w-[2.5rem] ml-[0.25rem] z-[1] cursor-pointer'>
            <img src="/Images/skyLobby/menuBar.webp" className="w-full max-w-full h-auto block align-middle" alt="" />
          </div>
        </div>
        <div className='relative flex p-[0.5rem] [background-position:0% 70%] w-full'>
          <div className='bg-[#ffffff] rounded-[9999px] w-full relative flex items-center border'>
            <span className='text-[#663333] relative mx-auto inline-block p-[0.375rem]'>
              <img src="/Images/searchD-icon.svg" alt="" className='w-6 h-6' />
            </span>
            <input type="text" name="" id="" placeholder='Search game' className='w-[90%] px-2 pr-10 text-[#1e1e1e] bg-transparent rounded-full focus:outline-none focus:border-brown-highlight' onClick={() => setIsSearchClicked(true)} />
            {isSearchClicked &&
              <span className='absolute right-3 rounded-full w-4 h-4 bg-[#b07d4a] cursor-pointer ml-auto mr-auto inline-block p-[0.375rem]' onClick={() => setIsSearchClicked(false)}>

                <span className='text-[3.2vw] font-normal mt-[-2vw] ml-[-0.56vw] overflow-hidden block align-middle'>x</span>
              </span>
            }
          </div>
        </div>
        {isSearchClicked &&
          <div className='w-full h-screen z-[35] absolute'>
            <div className='absolute w-full top-0 left-0 bg-[#2a282a] py-6 md:py-10 z-50'>
              <div className='relative w-full max-h-[calc(80vh-128px)] overflow-hidden overflow-y-auto'>
                <div className='text-white mx-auto relative lg:max-w-screen px-4 box-border'>
                  <div className='text-center'>Key in game name</div>
                </div>
              </div>
              <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-[#2A282A] via-[#ffcd79] to-[#2A282A]"></div>

            </div>
            <div className='fixed opacity-80 bg-[#1c1202] w-full h-screen left-0 z-[-1]'></div>
          </div>
        }
      </header>
    </>
  )
}

export default SkyHeader