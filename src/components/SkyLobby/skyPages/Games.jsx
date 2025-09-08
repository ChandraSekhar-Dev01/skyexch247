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
          <div className='relative min-h-[calc(100vh-70px)] w-full overflow-hidden bg-cover bg-fixed bg-no-repeat bg-new-img bg-[#18090a] IN2:bg-index-red SANA:bg-index-blue' style={{ backgroundImage: "url('/Images/skyLobby/bg-games1.webp')" }}>
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
                <img src="/Images/skyLobby/bg-games2.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
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
                  <img src="/Images/skyLobby/SV388.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
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
                  <img src="/Images/skyLobby/KM-TABLE-032.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
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
                  <img src="/Images/skyLobby/JILI-SLOT-040.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
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
                  <img src="/Images/skyLobby/KM-TABLE-015.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
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
                  <img src="/Images/skyLobby/SEXYBCRT.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
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
                  <img src="/Images/skyLobby/HORSEBOOK.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
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
          <div className='relative min-h-[calc(100vh-70px)] w-full overflow-hidden bg-cover bg-fixed bg-no-repeat bg-new-img bg-[#18090a] IN2:bg-index-red SANA:bg-index-blue' style={{ backgroundImage: "url('/Images/skyLobby/bg-games3.webp')" }}>
            <div className='overflow-hidden h-[240px] lg:h-[280px]'>
              <div className='absolute w-full h-[240px] max-w-7xl overflow-hidden lg:overflow-visible left-2/4 -translate-x-2/4'>
                <div className='absolute w-7 left-56 top-40 animate-fadeIn lg:w-12 lg:left-80 lg:top-48'>
                  <img src="/Images/skyLobby/ele1.webp" alt="" className='animate-balloon-normal w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-9 -right-3 top-14 animate-fadeIn lg:top-24'>
                  <img src="/Images/skyLobby/ele2.webp" alt="" className='animate-balloon-normal animate-delay-500 w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-7 -left-1 top-20 animate-fadeIn opacity-0 animate-delay-500 lg:w-14 lg:top-32 lg:left-[42%]'>
                  <img src="/Images/skyLobby/ele3.webp" alt="" className='animate-balloon-slow animate-delay-75 w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-20 right-10 top-28 animate-fadeIn lg:w-40 lg:top-36 lg:right-2/4'>
                  <img src="/Images/skyLobby/ele4.webp" alt="" className='animate-balloon-normal animate-delay-500 w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-12 right-20 top-8 opacity-0 animate-fadeIn animate-delay-500 lg:w-32 lg:top-16 md:right-72'>
                  <img src="/Images/skyLobby/ele5.webp" alt="" className='animate-balloon-slow animate-delay-500 w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-16 right-28 top-12 animate-fadeIn lg:w-40 lg:top-28 md:right-44'>
                  <img src="/Images/skyLobby/ele6.webp" alt="" className='animate-balloon-slow w-full max-w-full h-auto block align-middle' />
                </div>
                <div className='absolute w-6 right-24 top-36 mr-2 opacity-0 animate-fadeIn animate-delay-750 md:w-16 md:top-40 md:right-72 lg:top-48'>
                  <img src="/Images/skyLobby/ele7.webp" alt="" className='animate-balloon-slow w-full max-w-full h-auto block align-middle' />
                </div>
                <div className="absolute w-6 left-4 top-24 animate-fadeIn md:w-12 md:left-14 md:top-28 lg:top-36">
                  <img src="/Images/skyLobby/ele8.webp" alt="" className='animate-balloon-normal w-full max-w-full h-auto block align-middle' />
                </div>
                <div className="absolute w-10 right-36 top-24 opacity-0 animate-fadeIn animate-delay-500 lg:top-36">
                  <img src="/Images/skyLobby/ele9.webp" alt="" className='animate-balloon-slow w-full max-w-full h-auto block align-middle' />
                </div>
                <div className="absolute w-14 right-4 top-40 opacity-0 animate-fadeIn animate-delay-750 lg:top-52">
                  <img src="/Images/skyLobby/ele10.webp" alt="" className='animate-balloon-fast animate-delay-1000 w-full max-w-full h-auto block align-middle' />
                </div>
                <div className="absolute top-4 md:w-[48%] md:left-28 lg:w-4/12 lg:top-12 animate-fadeIn-left">
                  <img src="/Images/skyLobby/ele11.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
                <div className="absolute w-7 left-9 top-44 animate-fadeIn lg:top-52">
                  <img src="/Images/skyLobby/ele12.webp" alt="" className='animate-balloon-slow w-full max-w-full h-auto block align-middle' />
                </div>
              </div>
              <video
                autoPlay
                loop
                playsInline
                muted
                className="w-full lg:-mt-20 xl:-mt-44"
              >
                <source src="/Images/skyLobby/bg-live-Bk0VhKTx.mp4" type="video/mp4" />
              </video>
            </div>

            <div className='relative flex flex-wrap mx-1 md:mx-4 lg:max-w-7xl lg:mx-auto z-[1] -mt-12 IN2:mt-6 lg:-mt-8 lg:SANA:bg-tertiary lg:SANA:rounded-md lg:SANA:shadow-md lg:SANA:p-6 SANA:z-2 text-[#ffd489]'>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h01.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/live.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>SEVENMOJOS</span>
                </div>
                <div className='relative mb-3'>
                  {/* <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div> */}
                  <img src="/Images/skyLobby/SEVENMOJOS.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>SEVENMOJOS</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h02.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/table.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>SKYCASINO</span>
                </div>
                <div className='relative mb-3'>
                  {/* <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div> */}
                  <img src="/Images/skyLobby/SKYCASINO.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>SKYCASINO</div>
              </div>
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
                  <img src="/Images/skyLobby/SV388.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>SV888</div>
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
                  <img src="/Images/skyLobby/HORSEBOOK.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>HORSEBOOK</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h02.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/table.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>SUPERNOWA  </span>
                </div>
                <div className='relative mb-3'>
                  {/* <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div> */}
                  <img src="/Images/skyLobby/SUPERNOWA.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>SUPERNOWA</div>
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
                  <img src="/Images/skyLobby/SEXYBCRT.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
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
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>BETGAMES</span>
                </div>
                <div className='relative mb-3'>
                  {/* <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div> */}
                  <img src="/Images/skyLobby/BETGAMES.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>BETGAMES</div>
              </div>
            </div>
          </div>
        }
        {type == "fh" &&
          <div className='relative min-h-[calc(100vh-70px)] w-full overflow-hidden bg-cover bg-fixed bg-no-repeat bg-new-img bg-[#18090a] IN2:bg-index-red SANA:bg-index-blue' style={{ backgroundImage: "url('/Images/skyLobby/bg-games4.webp')" }}>
            <div className='overflow-hidden h-[240px] lg:h-[280px]'>
              <div className='absolute w-full h-[240px] max-w-7xl overflow-hidden lg:overflow-visible left-2/4 -translate-x-2/4'>
                <div className='absolute w-6/12 md:w-52 lg:w-1/5 lg:top-14 top-6 left-8 animate-fadeIn-left'>
                  <img src="/Images/skyLobby/ele14.webp" alt="" className='animate-laugh w-full max-w-full h-auto block align-middle' />
                </div>
              </div>
              <div className="absolute w-12 top-11 right-14 md:w-24 md:top-2 md:right-56 lg:top-16 opacity-0 animate-fadeIn-right animate-delay-750">
                <img src="/Images/skyLobby/ele15.webp" alt="" className='animate-balloon-slow animate-delay-500 w-full max-w-full h-auto block align-middle' />
              </div>
              <div className="absolute w-16 top-24 right-24 md:w-28 md:right-96 lg:top-32 opacity-0 animate-fadeIn-left animate-delay-500">
                <img src="/Images/skyLobby/ele16.webp" alt="" className='animate-balloon-slow animate-delay-500 w-full max-w-full h-auto block align-middle' />
              </div>
              <div className="absolute w-28 top-28 -right-4 md:w-56 md:top-16 md:right-16 lg:top-32">
                <img src="/Images/skyLobby/ele17.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
              </div>
              <div className="absolute w-10 top-40 left-44 animate-bubble-normal">
                <img src="/Images/skyLobby/ele18.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
              </div>
              <div className="absolute w-16 -top-2 right-20 opacity-0 animate-bubble-normal animate-delay-250">
                <img src="/Images/skyLobby/ele19.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
              </div>
              <div className="absolute w-9 top-10 -left-3 opacity-0 animate-bubble-fast animate-delay-500">
                <img src="/Images/skyLobby/ele20.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
              </div>
              <div className="absolute w-9 top-28 -right-3 opacity-0 animate-bubble-fast animate-delay-750">
                <img src="/Images/skyLobby/ele21.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
              </div>


              <div>
                <img src="/Images/skyLobby/bg-games4-sub.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
              </div>
            </div>

            <div className='relative flex flex-wrap mx-1 md:mx-4 lg:max-w-7xl lg:mx-auto z-[1] -mt-12 IN2:mt-6 lg:-mt-8 lg:SANA:bg-tertiary lg:SANA:rounded-md lg:SANA:shadow-md lg:SANA:p-6 SANA:z-2 text-[#ffd489]'>
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
                  <img src="/Images/skyLobby/JDB.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button>
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>JDB</div>
              </div>
            </div>
          </div>
        }
        {type == "slot" &&
          <div className='relative min-h-[calc(100vh-70px)] w-full overflow-hidden bg-cover bg-fixed bg-no-repeat bg-new-img bg-[#18090a] IN2:bg-index-red SANA:bg-index-blue' style={{ backgroundImage: "url('/Images/skyLobby/bg-games3.webp')" }}>
            <div className='overflow-hidden h-[240px] lg:h-[280px]'>
              <div className='absolute w-full h-[240px] max-w-7xl overflow-hidden lg:overflow-visible left-2/4 -translate-x-2/4'>
                <div className='relative w-9/12 sm:w-[420px] lg:w-[540px] m-auto mt-[4.5rem] lg:mt-14'>
                  <div className="absolute z-20 w-9 h-24 bg-slot-bar bg-cover -right-5 -top-4 bg-no-repeat lg:-right-11 lg:w-20 lg:h-48 sm:-right-8 sm:top-0 sm:w-14 sm:h-32 cursor-pointer -translate-x-[1px] translate-y-[21px] sm:-translate-x-[2px] sm:translate-y-0" style={{ backgroundImage: "url('/Images/skyLobby/ele22.webp')" }}></div>

                  <img src="/Images/skyLobby/ele23.webp" alt="" className='absolute top-0 left-0 z-10 w-full max-w-full h-auto block align-middle' />
                  <div className="absolute left-1/2 top-1/2 z-[1] w-[80%] -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                    <div className="w-[calc(100%/3)] h-[160px] mx-2 overflow-hidden lg:mx-4 lg:h-[180px] sm:h-[170px]">
                      <div className="bg-slot-tyre bg-center bg-repeat-y w-full h-full scale-[0.64] lg:scale-[1] sm:scale-[0.81] transition-background-position ease-slot-spin duration-500" style={{ backgroundImage: "url('/Images/skyLobby/ele24.webp')", backgroundPositionY: "3259.5px" }}>
                      </div>
                    </div>
                    <div className="w-[calc(100%/3)] h-[160px] mx-2 overflow-hidden lg:mx-4 lg:h-[180px] sm:h-[170px]">
                      <div className="bg-slot-tyre bg-center bg-repeat-y w-full h-full scale-[0.64] lg:scale-[1] sm:scale-[0.81] transition-background-position ease-slot-spin duration-500" style={{ backgroundImage: "url('/Images/skyLobby/ele24.webp')", backgroundPositionY: "3259.5px" }}>
                      </div>
                    </div>
                    <div className="w-[calc(100%/3)] h-[160px] mx-2 overflow-hidden lg:mx-4 lg:h-[180px] sm:h-[170px]">
                      <div className="bg-slot-tyre bg-center bg-repeat-y w-full h-full scale-[0.64] lg:scale-[1] sm:scale-[0.81] transition-background-position ease-slot-spin duration-500" style={{ backgroundImage: "url('/Images/skyLobby/ele24.webp')", backgroundPositionY: "3259.5px" }}>
                      </div>
                    </div>
                  </div>
                  <img src="/Images/skyLobby/ele25.webp" alt="" className='w-full max-w-full h-auto block align-middle' />

                </div>

              </div>



              <video
                autoPlay
                loop
                playsInline
                muted
                className="w-full lg:-mt-20 xl:-mt-44"
              >
                <source src="/Images/skyLobby/bg-slot-4eMaFA-t.mp4" type="video/mp4" />
              </video>
            </div>

            <div className='relative flex flex-wrap mx-1 md:mx-4 lg:max-w-7xl lg:mx-auto z-[1] -mt-12 IN2:mt-6 lg:-mt-8 lg:SANA:bg-tertiary lg:SANA:rounded-md lg:SANA:shadow-md lg:SANA:p-6 SANA:z-2 text-[#ffd489]'>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h03.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/slots.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>JDB</span>
                </div>
                <div className='relative mb-3'>
                  {/* <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div> */}
                  <img src="/Images/skyLobby/JDB.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  {/* <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button> */}
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>JDB</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h03.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/slots.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>SPADE</span>
                </div>
                <div className='relative mb-3'>
                  {/* <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div> */}
                  <img src="/Images/skyLobby/SPADE.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  {/* <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button> */}
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>SPADE</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h03.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/slots.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>JILI</span>
                </div>
                <div className='relative mb-3'>
                  {/* <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div> */}
                  <img src="/Images/skyLobby/JILI.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  {/* <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button> */}
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>JILI</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h03.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/slots.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>SEVENMOJOS</span>
                </div>
                <div className='relative mb-3'>
                  {/* <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div> */}
                  <img src="/Images/skyLobby/SEVENMOJOS.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  {/* <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button> */}
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>SEVENMOJOS</div>
              </div>
            </div>
          </div>
        }
        {type == "table" &&
          <div className='relative min-h-[calc(100vh-70px)] w-full overflow-hidden bg-cover bg-fixed bg-no-repeat bg-new-img bg-[#18090a] IN2:bg-index-red SANA:bg-index-blue' style={{ backgroundImage: "url('/Images/skyLobby/bg-games5.webp')" }}>
            <div className='overflow-hidden h-[240px] lg:h-[280px]'>
              <div className='absolute w-full h-[240px] max-w-7xl overflow-hidden lg:overflow-visible left-2/4 -translate-x-2/4'>
                <div className="animate-fadeIn">
                  <div className="absolute w-7/12 top-2 opacity-0 animate-fadeIn-left animate-delay-250 lg:w-3/12 lg:left-20 lg:top-8">
                    <img src="/Images/skyLobby/ele26.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                  <div className="absolute w-[10%] top-36 -left-3 -rotate-10 animate-balloon-small animate-delay-250 lg:top-48 lg:-left-5 lg:w-20">
                    <img src="/Images/skyLobby/ele27.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                  <div className="absolute w-[5%] top-2 left-8 -rotate-10 animate-balloon-middle animate-delay-500 lg:left-80 lg:w-16 lg:top-10">
                    <img src="/Images/skyLobby/ele28.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                  <div className="absolute w-[14%] top-16 -left-2 z-20 animate-rotate-fast lg:w-20 lg:left-[42%] lg:-ml-12 lg:top-8">
                    <img src="/Images/skyLobby/ele29.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                  <div className="absolute w-[12%] top-9 -left-3 rotate-20 animate-balloon-middle animate-delay-250 lg:left-[42%] lg:-ml-5 lg:w-28 lg:top-16">
                    <img src="/Images/skyLobby/ele30.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                  <div className="absolute w-[12%] top-24 left-48 z-10 animate-rotate-middle lg:left-auto lg:right-2/4 lg:w-12 lg:top-52">
                    <img src="/Images/skyLobby/ele31.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                  <div className="absolute w-[13%] top-32 left-52 rotate-20 animate-balloon-large lg:w-14 lg:left-1/2 lg:top-36">
                    <img src="/Images/skyLobby/ele28.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                  <div className="absolute w-[10%] top-9 left-56 -rotate-20 animate-balloon-middle lg:left-0 lg:top-20">
                    <img src="/Images/skyLobby/ele29.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                  <div className="absolute w-[12%] top-8 left-44 animate-rotate-slow lg:w-16 lg:left-auto lg:right-1/4 lg:top-10">
                    <img src="/Images/skyLobby/ele30.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                  <div className="absolute w-1/12 -top-3 left-36 animate-rotate-slow lg:w-10 lg:left-20 lg:top-10">
                    <img src="/Images/skyLobby/ele27.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                  <div className="absolute w-[5%] top-3 left-40 -rotate-20 animate-balloon-small lg:left-72 lg:top-12">
                    <img src="/Images/skyLobby/ele30.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                </div>
                <div className='relative z-[1]'>
                  <div className='absolute w-2/12 top-24 -right-4 opacity-0 animate-spray-fast md:w-32 md:-right-16 lg:right-10 lg:top-48'>
                    <img src="/Images/skyLobby/ele32.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                  <div className='absolute w-1/5 top-28 right-4 opacity-0 animate-spray-fast animate-delay-250 md:w-28 lg:right-40 lg:top-40'>
                    <img src="/Images/skyLobby/ele33.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                  <div className='absolute w-1/6 top-20 right-20 opacity-0 animate-spray-fast animate-delay-500 md:w-28 lg:right-56 lg:top-28'>
                    <img src="/Images/skyLobby/ele34.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                  <div className='absolute w-1/5 -top-3 right-10 opacity-0 animate-spray-slow animate-delay-750 md:w-32 md:right-24 md:-top-8 lg:top-4'>
                    <img src="/Images/skyLobby/ele35.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                  </div>
                </div>
                <div className="absolute w-40 left-[10%] top-4 animate-fadeIn-left z-40 lg:w-48 lg:top-14 md:left-80">
                  <img src="/Images/skyLobby/ele36.webp" alt="" className='absolute top-0 left-0 animate-wink w-full max-w-full h-auto block align-middle' />
                  <img src="/Images/skyLobby/ele37.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
              </div>
              <div>
                <img src="/Images/skyLobby/bg-games6.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
              </div>
            </div>

            <div className='relative flex flex-wrap mx-1 md:mx-4 lg:max-w-7xl lg:mx-auto z-[1] -mt-12 IN2:mt-6 lg:-mt-8 lg:SANA:bg-tertiary lg:SANA:rounded-md lg:SANA:shadow-md lg:SANA:p-6 SANA:z-2 text-[#ffd489]'>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h02.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/table.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>JILLI</span>
                </div>
                <div className='relative mb-3'>
                  {/* <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div> */}
                  <img src="/Images/skyLobby/JILI.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  {/* <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button> */}
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>JILLI</div>
              </div>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h02.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/table.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>KINGMIDAS</span>
                </div>
                <div className='relative mb-3'>
                  {/* <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div> */}
                  <img src="/Images/skyLobby/KINGMAKER.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  {/* <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button> */}
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>KINGMIDAS</div>
              </div>
            </div>
          </div>
        }
        {type == "sports" &&
          <div className='relative min-h-[calc(100vh-70px)] w-full overflow-hidden bg-cover bg-fixed bg-no-repeat bg-new-img bg-[#18090a] IN2:bg-index-red SANA:bg-index-blue' style={{ backgroundImage: "url('/Images/skyLobby/bg-games7.webp')" }}>
            <div className='overflow-hidden h-[240px] lg:h-[280px]'>
              <div className='absolute w-full h-[240px] max-w-7xl overflow-hidden lg:overflow-visible left-2/4 -translate-x-2/4'>
                <div className="relative z-[1] w-[135%] -left-10 top-12 md:w-3/5 md:left-20 lg:w-[50%] lg:left-40 lg:top-16 animate-fadeIn-left">
                  <img src="/Images/skyLobby/ele38.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
                <div className="absolute w-44 -left-8 top-10 opacity-0 lg:w-72 lg:left-24 lg:top-16 md:left-16 animate-fadeIn-right animate-delay-250">
                  <img src="/Images/skyLobby/ele39.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
                <div className="absolute w-44 top-16 right-12 opacity-0 md:w-72 md:right-24 lg:w-80 lg:top-16 lg:right-1/3 animate-fadeIn animate-delay-750">
                  <img src="/Images/skyLobby/ele40.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
                <div className="absolute w-48 left-11 top-4 opacity-0 md:left-64 lg:w-64 lg:left-80 lg:top-14 animate-fadeIn-left animate-delay-500">
                  <img src="/Images/skyLobby/ele41.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
                </div>
              </div>
              <div className=''>
                <img src="/Images/skyLobby/bg-games8.webp" alt="" className='w-full max-w-full h-auto block align-middle' />
              </div>
            </div>

            <div className='relative flex flex-wrap mx-1 md:mx-4 lg:max-w-7xl lg:mx-auto z-[1] -mt-12 IN2:mt-6 lg:-mt-8 lg:SANA:bg-tertiary lg:SANA:rounded-md lg:SANA:shadow-md lg:SANA:p-6 SANA:z-2 text-[#000]'>
              <div className='relative flex-none p-1 mb-3 w-[33.333333%] md:w-[calc(100%/6)] lg:w-[12.5%] min-w-[114px] cursor-pointer'>
                <div className="flex items-center ml-2 mr-1 justify-between bg-[length:100%] bg-no-repeat pl-4 pr-1 text-white" style={{ backgroundImage: "url('/Images/skyLobby/h05.webp')" }}>
                  <span className='block flex-none w-3 lg:w-4.5'>
                    <img src="/Images/skyLobby/sports.webp" alt="" className='overflow-hidden block align-middle w-3 h-3 lg:w-[18px] lg:h-[18px] invert brightness-0' />
                  </span>
                  <span className='text-[10px] leading-4 whitespace-nowrap max-w-full overflow-hidden'>SPORTRADAR</span>
                </div>
                <div className='relative mb-3'>
                  {/* <div className="absolute -left-2 -top-3 z-[1] w-[4rem]">
                    <img src="/Images/skyLobby/hotTag.webp" alt="" className='w-full h-full block align-middle' />
                  </div> */}
                  <img src="/Images/skyLobby/SPORTRADAR.webp" alt="" className='absolute p-2 w-full h-full block align-middle' />
                  {/* <button className='flex-none w-14 p-3 absolute z-10 -bottom-6 -right-3.5 lg:-right-2'>
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='block align-middle' />
                  </button> */}
                  <div className='pt-[100%] bg-contain IN2:bg-icon-cover IN2:border IN2:border-primary IN2:pt-[98%]' style={{ backgroundImage: "url('/Images/skyLobby/img-silverFrame.webp')" }}></div>
                </div>
                <div className='[overflow-wrap:break-word] text-center text-[0.875rem] leading-[1.25rem] font-bold line-clamp-2 mt-3 lg:mt-5'>SPORTRADAR</div>
              </div>
            </div>
          </div>
        }
      </div >
    </>
  )
}

export default Games