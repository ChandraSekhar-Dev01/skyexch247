import { CloseOutlined, DownCircleOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function Games() {
  const location = useLocation();
  const { type } = useParams();


  const map = {
    hot: "hot",
    live: "live",
    fh: "fishing",
    slot: "slots",
    table: "table",
    sports: "sports",
  };

  const imgName = map[type] || "default";

  const labelMap = {
    hot: "Hot",
    live: "Live",
    fh: "Fishing",
    slot: "Slot",
    table: "Table",
    sports: "Sports",
  };

  const tabs = [
    { type: "hot", label: "Hot", img: "Hot.webp" },
    { type: "live", label: "Live", img: "live.webp" },
    { type: "fh", label: "Fishing", img: "fishing.webp" },
    { type: "slot", label: "Slot", img: "slots.webp" },
    { type: "table", label: "Table", img: "table.webp" },
    { type: "sports", label: "Sports", img: "sports.webp" },
  ];

  const [gamesOpen, setGamesOpen] = useState(false)
  const [selectGames, setSelectGames] = useState('1');

  useEffect(() => {
    setGamesOpen(false)
  }, [type])


  return (
    <>
      <div className='pb-16 md:pb-0'>
        <div className='sticky top-0 lg:top-10 z-20 grid py-4 -mb-[4.5rem] justify-end max-w-7xl mx-auto'>
          <button className={`flex items-center mr-4 min-w-[30%] h-10 px-4 text-white ${!gamesOpen && "bg-[#553d11f2]"} IN2:bg-primary bg-opacity-95 rounded-full lg:min-w-auto relative z-10 SANA:bg-primary`} onClick={() => setGamesOpen(!gamesOpen)}>
            <span className='flex-none mr-1 mb-1'>
              <img
                src={`/Images/skyLobby/${imgName}.webp`}
                alt={imgName}
                className="overflow-hidden w-6 h-6 invert brightness-0"
              />
            </span>
            {tabs.map(({ type, label, img }) => {
              const isActive = location.pathname === `/lobby/babe/${type}`;
              return (
                <span className={`flex-grow font-bold uppercase ${gamesOpen && "text-xs"}`}>
                  {isActive && label}
                </span>
              )
            })
            }
            <span className={`flex-none ml-2 ${gamesOpen && "flex justify-center items-center w-8 h-8 text-center bg-[#553d11f2] rounded-full"}`}>
              {gamesOpen ?
                <CloseOutlined className='overflow-hidden text-[1rem] font-bold' />
                :
                <DownCircleOutlined className='overflow-hidden text-[1.3rem] font-bold' />
              }
            </span>
          </button>
          {gamesOpen &&
            <div className='flex items-center flex-wrap px-1 py-3 w-full lg:mt-2 lg:rounded-md lg:py-0 lg:px-2 absolute text-[#d5b565] UFA:bg-mask-black IN2:bg-gradient-to-b IN2:from-tertiary IN2:to-secondary bg-cover bg-full pt-16 lg:pt-2 backdrop-blur-sm SANA:bg-black/55 SANA:bg-none lg:SANA:rounded-full' style={{ backgroundImage: "url('/Images/skyLobby/bg-mask.webp')", backgroundSize: "100% 100%" }}>
              {tabs.map(({ type, label, img }) => {
                const isActive = location.pathname === `/lobby/babe/${type}`;
                return (
                  <Link
                    key={type}
                    to={`/lobby/babe/${type}`}
                    className="flex-none p-1 mb-2 text-xs text-center w-1/5 lg:w-1/12 lg:flex lg:items-center lg:justify-center SANA:text-white"
                  >
                    <span
                      className={`block w-14 p-2 mb-1 mx-auto lg:w-6 lg:mr-2 lg:ml-0 lg:p-0 ${isActive ? "rounded-full bg-[#663333] text-[#432a12]" : ""
                        }`}
                    >
                      <img
                        src={`/Images/skyLobby/${img}`}
                        alt={label}
                        className={`${isActive ? "w-full h-full mix-blend-multiply" : ""}`}
                      />
                    </span>
                    {label}
                  </Link>
                );
              })}
            </div>
          }
        </div>

        {type == "hot" &&
          <div className='relative min-h-[calc(100vh-70px)] w-full overflow-hidden bg-cover bg-fixed bg-no-repeat bg-new-img bg-[#18090a] IN2:bg-index-red SANA:bg-index-blue' style={{ backgroundImage: "url('/Images/skyLobby/bg-games1.jpg')" }}>
            <div className='overflow-hidden h-[240px] lg:h-[280px]'>
              <div className='absolute w-full h-[240px] max-w-7xl overflow-hidden lg:overflow-visible left-2/4 -translate-x-2/4'>
                <div className='absolute w-36 left-4 top-4 lg:w-52 lg:top-16'>
                  <img src="/Images/skyLobby/img-hot.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-40 right-14 top-2 opacity-0 plus:right-14 lg:w-48 lg:top-14 lg:right-36 animate-fadeIn-left animate-delay-750'>
                  <img src="/Images/skyLobby/img-char05.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-[135%] -left-28 bottom-0 lg:w-full lg:top-20 lg:-mt-2'>
                  <img src="/Images/skyLobby/img-coinpile02.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-28 right-4 top-20 opacity-0 lg:w-28 lg:right-28 lg:top-36 animate-fadeIn-left animate-delay-500'>
                  <img src="/Images/skyLobby/img-char06.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-28 opacity-0 lg:w-32 left-16 lg:left-48 top-8 lg:top-16 animate-fadeIn-right animate-delay-750'>
                  <img src="/Images/skyLobby/img-char03.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-28 left-6 top-32 opacity-0 lg:w-32 lg:top-40 animate-fadeIn-right animate-delay-500'>
                  <img src="/Images/skyLobby/img-char04.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-24 right-16 mr-6 bottom-0 opacity-0 plus:right-20 lg:w-28 lg:right-72 lg:top-36 animate-fadeIn-left animate-delay-250'>
                  <img src="/Images/skyLobby/img-char02.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-48 left-24 top-12 plus:w-48 lg:w-56 lg:left-64 lg:top-16 lg:z-[1] animate-fadeIn'>
                  <img src="/Images/skyLobby/img-char01.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-full -left-10 bottom-0 lg:w-9/12 lg:top-48 lg:left-16 lg:-mt-0.5'>
                  <img src="/Images/skyLobby/img-coinpile01.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
              </div>
              <div>
                <img src="/Images/skyLobby/bg-games2.jpg" alt="" className='w-full max-w-full h-auto block align-middle' />
              </div>
            </div>
            <div className='relative flex flex-wrap mx-1 md:mx-4 lg:max-w-7xl lg:mx-auto z-[1] -mt-12 IN2:mt-6 lg:-mt-8 lg:SANA:bg-tertiary lg:SANA:rounded-md lg:SANA:shadow-md lg:SANA:p-6 SANA:z-2 text-[#ffd489]'>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h01.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>SV388</span>
                </div>
                <div className='relative mb-3'>
                  <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div>
                  <img src="/Images/skyLobby/SV388.png" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>SV888</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h02.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/table.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>KINGMIDAS</span>
                </div>
                <div className='relative mb-3'>
                  <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div>
                  <img src="/Images/skyLobby/KM-TABLE-032.png" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>Andar Bahar</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h03.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/slots.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>JILLI</span>
                </div>
                <div className='relative mb-3'>
                  <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div>
                  <img src="/Images/skyLobby/JILI-SLOT-040.png" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>RomaX</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h02.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/table.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>KINGMIDAS</span>
                </div>
                <div className='relative mb-3'>
                  <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div>
                  <img src="/Images/skyLobby/KM-TABLE-015.png" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>sicbo</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h01.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>SEXY</span>
                </div>
                <div className='relative mb-3'>
                  <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div>
                  <img src="/Images/skyLobby/SEXYBCRT.png" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>SEXY</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h01.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>HORSEBOOK</span>
                </div>
                <div className='relative mb-3'>
                  <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div>
                  <img src="/Images/skyLobby/HORSEBOOK.png" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>HORSEBOOK</div>
              </div>
            </div>
          </div>
        }
        {type == "live" &&
          <div className='relative min-h-[calc(100vh-70px)] w-full overflow-hidden bg-cover bg-fixed bg-no-repeat bg-new-img bg-[#18090a] IN2:bg-index-red SANA:bg-index-blue' style={{ backgroundImage: "url('/Images/skyLobby/bg-games3.jpg')" }}>
            <div className='overflow-hidden h-[240px] lg:h-[280px]'>
              <div className='absolute w-full h-[240px] max-w-7xl overflow-hidden lg:overflow-visible left-2/4 -translate-x-2/4'>
                <div className='absolute w-7 left-56 top-40 animate-fadeIn lg:w-12 lg:left-80 lg:top-48'>
                  <img src="/Images/skyLobby/ele1.webp" alt="" className='animate-balloon-normal w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-9 -right-3 top-14 animate-fadeIn lg:top-24'>
                  <img src="/Images/skyLobby/ele2.webp" alt="" className='animate-balloon-normal animate-delay-500 w-full max-w-full h-auto block align-middle' />
                </div>
              </div>
              <div>
                <img src="/Images/skyLobby/bg-games2.jpg" alt="" className='w-full max-w-full h-auto block align-middle' />
              </div>
            </div>
            <div className='relative flex flex-wrap mx-1 md:mx-4 lg:max-w-7xl lg:mx-auto z-[1] -mt-12 IN2:mt-6 lg:-mt-8 lg:SANA:bg-tertiary lg:SANA:rounded-md lg:SANA:shadow-md lg:SANA:p-6 SANA:z-2 text-[#ffd489]'>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h01.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>SV388</span>
                </div>
                <div className='relative mb-3'>
                  <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div>
                  <img src="/Images/skyLobby/SV388.png" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>SV888</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h02.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/table.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>KINGMIDAS</span>
                </div>
                <div className='relative mb-3'>
                  <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div>
                  <img src="/Images/skyLobby/KM-TABLE-032.png" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>Andar Bahar</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h03.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/slots.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>JILLI</span>
                </div>
                <div className='relative mb-3'>
                  <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div>
                  <img src="/Images/skyLobby/JILI-SLOT-040.png" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>RomaX</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h02.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/table.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>KINGMIDAS</span>
                </div>
                <div className='relative mb-3'>
                  <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div>
                  <img src="/Images/skyLobby/KM-TABLE-015.png" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>sicbo</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h01.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>SEXY</span>
                </div>
                <div className='relative mb-3'>
                  <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div>
                  <img src="/Images/skyLobby/SEXYBCRT.png" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>SEXY</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h01.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>HORSEBOOK</span>
                </div>
                <div className='relative mb-3'>
                  <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div>
                  <img src="/Images/skyLobby/HORSEBOOK.png" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>HORSEBOOK</div>
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Games