import { Carousel } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Ranking() {
  const [filterClicked, setFilterClicked] = useState(false);
  return (
    <>
      <div className='lg:bg-index-img lg:UFA:bg-index-black lg:IN2:bg-index-red lg:SANA:bg-index-blue bg-center bg-cover bg-fixed bg-no-repeat min-h-screen'>
        <div className='lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-4 lg:gap-4 lg:pt-4'>
          {/* Slider Banner */}
          <div className='swiper swiper-initialized swiper-horizontal w-full banner max-h-banner overflow-hidden max-h-[150px] md:max-h-[278px] lg:col-span-2 lg:max-h-[230px] lg:rounded-md lg:shadow-xl lg:IN2:max-h-none lg:IN2:col-span-4 swiper-backface-hidden'>

            <Carousel dots={false} infinite={true} autoplay={true}>
              <div className='w-[632px] h-full'>
                <img src="/Images/skyLobby/banner-1.webp" alt="" className="w-full h-full" />
              </div>
              <div className='w-[632px]'>
                <img src="/Images/skyLobby/banner-2.webp" alt="" className="w-full h-full" />
              </div>
              <div className='w-[632px]'>
                <img src="/Images/skyLobby/banner-3.webp" alt="" className="w-full h-full" />
              </div>
              <div className='w-[632px]'>
                <img src="/Images/skyLobby/banner-4.webp" alt="" className="w-full h-full" />
              </div>
            </Carousel>
          </div>
          <div className='flex items-center flex-wrap px-1 py-3 bg-white text-[#553d11] lg:col-span-2 lg:bg-transparent lg:p-0'>
            <Link to={'/lobby/babe/hot'} className='flex-none p-1 mb-2 text-xs text-center text-[#663333] lg:text-[#d5b565] lg:bg-[linear-gradient(to_bottom,_#665030,_#1c1202)] lg:[#665030_#665030] lg:[#1c1202] lg:flex items-center lg:flex-wrap lg:rounded-md lg:shadow-xl lg:bg-opacity-80 lg:mx-1 lg:h-[48%] lg:min-h-[6rem] hover:lg:bg-[linear-gradient(to_top,_#665030,_#1c1202)] lg:hover:scale-110 lg:transition-all lg:SANA:shadow-xl lg:SANA:border-secondary lg:SANA:border-2 w-1/6 lg:w-[calc(20%-0.5rem)] lg:IN2:w-1/12 lg:SANA:w-1/8 lg:SANA:border  lg:SANA:shadow-none lg:SANA:bg-entrance-bg-pattern lg:SANA:bg-cover lg:SANA:bg-center'>
              <span className='block w-9 md:w-12 lg:-mb-5 mb-1 mx-auto'>
                <img src="/Images/skyLobby/hot.webp" alt="" className='w-full h-auto block align-middle' />
              </span>
              <span className='min-w-full SANA:text-primary'>Hot</span>
            </Link>
            <Link to={'/lobby/babe/live'} className='flex-none p-1 mb-2 text-xs text-center text-[#663333] lg:text-[#d5b565] lg:bg-[linear-gradient(to_bottom,_#665030,_#1c1202)] lg:[#665030_#665030] lg:[#1c1202] lg:flex items-center lg:flex-wrap lg:rounded-md lg:shadow-xl lg:bg-opacity-80 lg:mx-1 lg:h-[48%] lg:min-h-[6rem] hover:lg:bg-[linear-gradient(to_top,_#665030,_#1c1202)] lg:hover:scale-110 lg:transition-all lg:SANA:shadow-xl lg:SANA:border-secondary lg:SANA:border-2 w-1/6 lg:w-[calc(20%-0.5rem)] lg:IN2:w-1/12 lg:SANA:w-1/8 lg:SANA:border  lg:SANA:shadow-none lg:SANA:bg-entrance-bg-pattern lg:SANA:bg-cover lg:SANA:bg-center'>
              <span className='block w-9 md:w-12 lg:-mb-5 mb-1 mx-auto'>
                <img src="/Images/skyLobby/live.webp" alt="" className='w-full h-auto block align-middle' />
              </span>
              <span className='min-w-full SANA:text-primary'>Live</span>
            </Link>
            <Link to={'/lobby/babe/fh'} className='flex-none p-1 mb-2 text-xs text-center text-[#663333] lg:text-[#d5b565] lg:bg-[linear-gradient(to_bottom,_#665030,_#1c1202)] lg:[#665030_#665030] lg:[#1c1202] lg:flex items-center lg:flex-wrap lg:rounded-md lg:shadow-xl lg:bg-opacity-80 lg:mx-1 lg:h-[48%] lg:min-h-[6rem] hover:lg:bg-[linear-gradient(to_top,_#665030,_#1c1202)] lg:hover:scale-110 lg:transition-all lg:SANA:shadow-xl lg:SANA:border-secondary lg:SANA:border-2 w-1/6 lg:w-[calc(20%-0.5rem)] lg:IN2:w-1/12 lg:SANA:w-1/8 lg:SANA:border  lg:SANA:shadow-none lg:SANA:bg-entrance-bg-pattern lg:SANA:bg-cover lg:SANA:bg-center'>
              <span className='block w-9 md:w-12 lg:-mb-5 mb-1 mx-auto'>
                <img src="/Images/skyLobby/fishing.webp" alt="" className='w-full h-auto block align-middle' />
              </span>
              <span className='min-w-full SANA:text-primary'>Fishing</span>
            </Link>
            <Link to={'/lobby/babe/slot'} className='flex-none p-1 mb-2 text-xs text-center text-[#663333] lg:text-[#d5b565] lg:bg-[linear-gradient(to_bottom,_#665030,_#1c1202)] lg:[#665030_#665030] lg:[#1c1202] lg:flex items-center lg:flex-wrap lg:rounded-md lg:shadow-xl lg:bg-opacity-80 lg:mx-1 lg:h-[48%] lg:min-h-[6rem] hover:lg:bg-[linear-gradient(to_top,_#665030,_#1c1202)] lg:hover:scale-110 lg:transition-all lg:SANA:shadow-xl lg:SANA:border-secondary lg:SANA:border-2 w-1/6 lg:w-[calc(20%-0.5rem)] lg:IN2:w-1/12 lg:SANA:w-1/8 lg:SANA:border  lg:SANA:shadow-none lg:SANA:bg-entrance-bg-pattern lg:SANA:bg-cover lg:SANA:bg-center'>
              <span className='block w-9 md:w-12 lg:-mb-5 mb-1 mx-auto'>
                <img src="/Images/skyLobby/slots.webp" alt="" className='w-full h-auto block align-middle' />
              </span>
              <span className='min-w-full SANA:text-primary'>Slots</span>
            </Link>
            <Link to={'/lobby/babe/table'} className='flex-none p-1 mb-2 text-xs text-center text-[#663333] lg:text-[#d5b565] lg:bg-[linear-gradient(to_bottom,_#665030,_#1c1202)] lg:[#665030_#665030] lg:[#1c1202] lg:flex items-center lg:flex-wrap lg:rounded-md lg:shadow-xl lg:bg-opacity-80 lg:mx-1 lg:h-[48%] lg:min-h-[6rem] hover:lg:bg-[linear-gradient(to_top,_#665030,_#1c1202)] lg:hover:scale-110 lg:transition-all lg:SANA:shadow-xl lg:SANA:border-secondary lg:SANA:border-2 w-1/6 lg:w-[calc(20%-0.5rem)] lg:IN2:w-1/12 lg:SANA:w-1/8 lg:SANA:border  lg:SANA:shadow-none lg:SANA:bg-entrance-bg-pattern lg:SANA:bg-cover lg:SANA:bg-center'>
              <span className='block w-9 md:w-12 lg:-mb-5 mb-1 mx-auto'>
                <img src="/Images/skyLobby/table.webp" alt="" className='w-full h-auto block align-middle' />
              </span>
              <span className='min-w-full SANA:text-primary'>Table</span>
            </Link>
            <Link to={'/lobby/babe/sports'} className='flex-none p-1 mb-2 text-xs text-center text-[#663333] lg:text-[#d5b565] lg:bg-[linear-gradient(to_bottom,_#665030,_#1c1202)] lg:[#665030_#665030] lg:[#1c1202] lg:flex items-center lg:flex-wrap lg:rounded-md lg:shadow-xl lg:bg-opacity-80 lg:mx-1 lg:h-[48%] lg:min-h-[6rem] hover:lg:bg-[linear-gradient(to_top,_#665030,_#1c1202)] lg:hover:scale-110 lg:transition-all lg:SANA:shadow-xl lg:SANA:border-secondary lg:SANA:border-2 w-1/6 lg:w-[calc(20%-0.5rem)] lg:IN2:w-1/12 lg:SANA:w-1/8 lg:SANA:border  lg:SANA:shadow-none lg:SANA:bg-entrance-bg-pattern lg:SANA:bg-cover lg:SANA:bg-center'>
              <span className='block w-9 md:w-12 lg:-mb-5 mb-1 mx-auto'>
                <img src="/Images/skyLobby/sports.webp" alt="" className='w-full h-auto block align-middle' />
              </span>
              <span className='min-w-full SANA:text-primary'>Sports</span>
            </Link>
          </div>

          <div className='relative bg-[#efebe6] py-3 lg:col-span-4 lg:rounded-md lg:shadow-xl lg:bg-[#efebe6e6] lg:pt-0 lg:pb-3 md:SANA:bg-tertiary'>
            <div className='flex items-center text-[#663333] font-bold px-3 pt-2 pb-2 sticky z-20 top-0 bg-[#efebe6] lg:bg-transparent lg:top-[42px] lg:pt-3 lg:mb-2 lg:SANA:border-b lg:SANA:border-gray-200'>
              <span className='flex-none my-2 mr-1'>
                <img src="/Images/skyLobby/ranking-brown.webp" alt="" className='overflow-hidden w-6 h-6' />
              </span>
              <span className='flex-grow text-sm'>Most Popular Games</span>
              <div className='flex-none relative'>
                <div className='flex items-center bg-[#fbf7f1] py-1 px-2 cursor-pointer SANA:rounded-full SANA:border-fifth SANA:border' onClick={() => setFilterClicked(!filterClicked)}>
                  <img src="/Images/skyLobby/filter-brown.webp" alt="" className='overflow-hidden w-[1.1rem] h-[1.1rem]' />
                  <div className="ml-1 w-28 overflow-hidden text-ellipsis whitespace-nowrap bg-transparent text-sm leading-5 outline outline-2 outline-transparent outline-offset-2">More Rankings</div>
                  <img src="/Images/skyLobby/arrow-down-brown.webp" alt="" className='overflow-hidden w-[1.1rem] h-[1.1rem] px-0.5 py-1 bg-center bg-no-repeat border-l border-[#663333]' />
                </div>
                {filterClicked &&
                  <ul className='absolute right-0 top-10 z-[10] w-full bg-[#fbf7f1] p-2 text-left'>
                    <li className='text-[#fff] leading-[1rem] text-[0.75rem] p-[0.5rem] cursor-default bg-[#663333]'>
                      Most Popular Games
                    </li>
                    <li className='text-[#44403c] leading-[1rem] text-[0.75rem] p-[0.5rem] cursor-pointer bg-[#fff]'>
                      Hottest Games
                    </li>
                    <li className='text-[#44403c] leading-[1rem] text-[0.75rem] p-[0.5rem] cursor-pointer bg-[#fff]'>
                      My Top Winnings
                    </li>
                    <li className='text-[#44403c] leading-[1rem] text-[0.75rem] p-[0.5rem] cursor-pointer bg-[#fff]'>
                      Guess You Like
                    </li>
                  </ul>
                }
              </div>
              <div className='absolute w-full h-full bg-[#efebe6] left-0 top-0 z-[-1] rounded-md hidden lg:block md:SANA:bg-tertiary'></div>
            </div>
            {/* Listing */}
            <div className=''>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:px-5'>
                <div className="flex items-center relative mt-3 h-[85px] md:h-[105px] lg:rounded-md cursor-pointer justify-between bg-white p-2">
                  <div
                    className='relative z-[1] overflow-hidden rounded-[0.375rem] flex-none [background-size:100%] bg-no-repeat w-14 p-6 text-[#1c1202]'
                    style={{
                      backgroundImage: "url('/Images/skyLobby/goldCrown.webp')"
                    }}
                  >
                    <span className="block text-center">1</span>
                  </div>
                  <div
                    className='absolute h-full left-0 bottom-0 bg-contain bg-no-repeat z-0'
                    style={{
                      backgroundImage: "url('/Images/skyLobby/bg-JILI-SLOT-043.webp')"
                    }}
                  >
                    <img src="/Images/skyLobby/char-JILI-SLOT-043.webp" alt="" className='h-[108%] w-auto mt-[-.425rem] lg:mt-[-.525rem]' />
                  </div>
                  <div className="relative z-[1] overflow-hidden rounded-md flex-none w-16 my-1 ml-2.5 lg:w-24"></div>
                  <div className='relative z-[1] flex-[1_1_auto] overflow-hidden rounded-md w-[30%] md:max-w-[280px] px-1 text-right text-[0.75rem] leading-[1rem]'>
                    <div className='flex items-center justify-end text-[#663333]'>
                      <span className='block w-6'>
                        <img src="/Images/skyLobby/jilli-brown.webp" alt="" className='w-4 h-4 overflow-hidden block align-middle' />
                      </span>
                      <span>JILLI</span>
                    </div>
                    <div className='text-rank-shadow text-[#663333] text-base font-bold truncate ...'>Fortune Gems</div>
                    <button className="inline-flex scale-75 items-center whitespace-nowrap rounded-full border border-white bg-[#efebe6] px-3 py-1 text-[10px] font-bold uppercase text-[#663333] cursor-pointer -mr-4">
                      <span className="mr-2">play now</span>
                      <div className="w-2 overflow-hidden">
                        <div className="h-3 bg-[#663333] rotate-45 origin-top-left"></div>
                      </div>
                    </button>
                  </div>
                  <button className="relative z-[1] overflow-hidden rounded-md w-10 p-2 ml-2 flex-none">
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='w-full h-auto block align-middle' />
                  </button>
                </div>

                <div className="flex items-center relative mt-3 h-[85px] md:h-[105px] lg:rounded-md cursor-pointer justify-between bg-white p-2">
                  <div
                    className='relative z-[1] overflow-hidden rounded-[0.375rem] flex-none [background-size:100%] bg-no-repeat w-14 p-6 text-[#1c1202]'
                    style={{
                      backgroundImage: "url('/Images/skyLobby/silverCrown.webp')"
                    }}
                  >
                    <span className="block text-center">2</span>
                  </div>
                  <div
                    className='absolute h-full left-0 bottom-0 bg-contain bg-no-repeat z-0'
                    style={{
                      backgroundImage: "url('/Images/skyLobby/bg-JILI-SLOT-029.webp')"
                    }}
                  >
                    <img src="/Images/skyLobby/char-JILI-SLOT-029.webp" alt="" className='h-[108%] w-auto mt-[-.425rem] lg:mt-[-.525rem]' />
                  </div>
                  <div className="relative z-[1] overflow-hidden rounded-md flex-none w-16 my-1 ml-2.5 lg:w-24"></div>
                  <div className='relative z-[1] flex-[1_1_auto] overflow-hidden rounded-md w-[30%] md:max-w-[280px] px-1 text-right text-[0.75rem] leading-[1rem]'>
                    <div className='flex items-center justify-end text-[#663333]'>
                      <span className='block w-6'>
                        <img src="/Images/skyLobby/jilli-brown.webp" alt="" className='w-4 h-4 overflow-hidden block align-middle' />
                      </span>
                      <span>JILLI</span>
                    </div>
                    <div className='text-rank-shadow text-[#663333] text-base font-bold truncate ...'>Money Coming</div>
                    <button className="inline-flex scale-75 items-center whitespace-nowrap rounded-full border border-white bg-[#efebe6] px-3 py-1 text-[10px] font-bold uppercase text-[#663333] cursor-pointer -mr-4">
                      <span className="mr-2">play now</span>
                      <div className="w-2 overflow-hidden">
                        <div className="h-3 bg-[#663333] rotate-45 origin-top-left"></div>
                      </div>
                    </button>
                  </div>
                  <button className="relative z-[1] overflow-hidden rounded-md w-10 p-2 ml-2 flex-none">
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='w-full h-auto block align-middle' />
                  </button>
                </div>

                <div className="flex items-center relative mt-3 h-[85px] md:h-[105px] lg:rounded-md cursor-pointer justify-between bg-white p-2">
                  <div
                    className='relative z-[1] overflow-hidden rounded-[0.375rem] flex-none [background-size:100%] bg-no-repeat w-14 p-6 text-[#1c1202]'
                    style={{
                      backgroundImage: "url('/Images/skyLobby/bronzeCrown.webp')"
                    }}
                  >
                    <span className="block text-center">3</span>
                  </div>
                  <div
                    className='absolute h-full left-0 bottom-0 bg-contain bg-no-repeat z-0'
                    style={{
                      backgroundImage: "url('/Images/skyLobby/bg-JILI-SLOT-014.webp')"
                    }}
                  >
                    <img src="/Images/skyLobby/char-JILI-SLOT-014.webp" alt="" className='h-[108%] w-auto mt-[-.425rem] lg:mt-[-.525rem]' />
                  </div>
                  <div className="relative z-[1] overflow-hidden rounded-md flex-none w-16 my-1 ml-2.5 lg:w-24"></div>
                  <div className='relative z-[1] flex-[1_1_auto] overflow-hidden rounded-md w-[30%] md:max-w-[280px] px-1 text-right text-[0.75rem] leading-[1rem]'>
                    <div className='flex items-center justify-end text-[#663333]'>
                      <span className='block w-6'>
                        <img src="/Images/skyLobby/jilli-brown.webp" alt="" className='w-4 h-4 overflow-hidden block align-middle' />
                      </span>
                      <span>JILLI</span>
                    </div>
                    <div className='text-rank-shadow text-[#663333] text-base font-bold truncate ...'>Crazy777</div>
                    <button className="inline-flex scale-75 items-center whitespace-nowrap rounded-full border border-white bg-[#efebe6] px-3 py-1 text-[10px] font-bold uppercase text-[#663333] cursor-pointer -mr-4">
                      <span className="mr-2">play now</span>
                      <div className="w-2 overflow-hidden">
                        <div className="h-3 bg-[#663333] rotate-45 origin-top-left"></div>
                      </div>
                    </button>
                  </div>
                  <button className="relative z-[1] overflow-hidden rounded-md w-10 p-2 ml-2 flex-none">
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='w-full h-auto block align-middle' />
                  </button>
                </div>

                <div className="flex items-center relative mt-3 h-[85px] md:h-[105px] lg:rounded-md cursor-pointer justify-between bg-white p-2">
                  <div
                    className='relative z-[1] overflow-hidden rounded-[9999px] flex-none [background-size:100%] bg-[#fff] bg-no-repeat w-6 h-6 mx-4 text-[#663333]'
                  >
                    <span className="block text-center">4</span>
                  </div>
                  <div
                    className='absolute h-full left-0 bottom-0 bg-contain bg-no-repeat z-0'
                    style={{
                      backgroundImage: "url('/Images/skyLobby/bg-JILI-SLOT-027.webp')"
                    }}
                  >
                    <img src="/Images/skyLobby/char-JILI-SLOT-027.webp" alt="" className='h-[108%] w-auto mt-[-.425rem] lg:mt-[-.525rem]' />
                  </div>
                  <div className="relative z-[1] overflow-hidden rounded-md flex-none w-16 my-1 ml-2.5 lg:w-24"></div>
                  <div className='relative z-[1] flex-[1_1_auto] overflow-hidden rounded-md w-[30%] md:max-w-[280px] px-1 text-right text-[0.75rem] leading-[1rem]'>
                    <div className='flex items-center justify-end text-[#663333]'>
                      <span className='block w-6'>
                        <img src="/Images/skyLobby/jilli-brown.webp" alt="" className='w-4 h-4 overflow-hidden block align-middle' />
                      </span>
                      <span>JILLI</span>
                    </div>
                    <div className='text-rank-shadow text-[#663333] text-base font-bold truncate ...'>Super Ace</div>
                    <button className="inline-flex scale-75 items-center whitespace-nowrap rounded-full border border-white bg-[#efebe6] px-3 py-1 text-[10px] font-bold uppercase text-[#663333] cursor-pointer -mr-4">
                      <span className="mr-2">play now</span>
                      <div className="w-2 overflow-hidden">
                        <div className="h-3 bg-[#663333] rotate-45 origin-top-left"></div>
                      </div>
                    </button>
                  </div>
                  <button className="relative z-[1] overflow-hidden rounded-md w-10 p-2 ml-2 flex-none">
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='w-full h-auto block align-middle' />
                  </button>
                </div>

                <div className="flex items-center relative mt-3 h-[85px] md:h-[105px] lg:rounded-md cursor-pointer justify-between bg-white p-2">
                  <div
                    className='relative z-[1] overflow-hidden rounded-[9999px] flex-none [background-size:100%] bg-[#fff] bg-no-repeat w-6 h-6 mx-4 text-[#663333]'
                  >
                    <span className="block text-center">5</span>
                  </div>
                  <div
                    className='absolute h-full left-0 bottom-0 bg-contain bg-no-repeat z-0'
                    style={{
                      backgroundImage: "url('/Images/skyLobby/bg-JILI-SLOT-076.webp')"
                    }}
                  >
                    <img src="/Images/skyLobby/char-JILI-SLOT-076.webp" alt="" className='h-[108%] w-auto mt-[-.425rem] lg:mt-[-.525rem]' />
                  </div>
                  <div className="relative z-[1] overflow-hidden rounded-md flex-none w-16 my-1 ml-2.5 lg:w-24"></div>
                  <div className='relative z-[1] flex-[1_1_auto] overflow-hidden rounded-md w-[30%] md:max-w-[280px] px-1 text-right text-[0.75rem] leading-[1rem]'>
                    <div className='flex items-center justify-end text-[#663333]'>
                      <span className='block w-6'>
                        <img src="/Images/skyLobby/jilli-brown.webp" alt="" className='w-4 h-4 overflow-hidden block align-middle' />
                      </span>
                      <span>JILLI</span>
                    </div>
                    <div className='text-rank-shadow text-[#663333] text-base font-bold truncate ...'>Fortune Gems 2</div>
                    <button className="inline-flex scale-75 items-center whitespace-nowrap rounded-full border border-white bg-[#efebe6] px-3 py-1 text-[10px] font-bold uppercase text-[#663333] cursor-pointer -mr-4">
                      <span className="mr-2">play now</span>
                      <div className="w-2 overflow-hidden">
                        <div className="h-3 bg-[#663333] rotate-45 origin-top-left"></div>
                      </div>
                    </button>
                  </div>
                  <button className="relative z-[1] overflow-hidden rounded-md w-10 p-2 ml-2 flex-none">
                    <img src="/Images/skyLobby/empty-star.webp" alt="" className='w-full h-auto block align-middle' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ranking