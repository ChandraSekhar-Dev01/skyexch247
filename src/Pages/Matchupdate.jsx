import React from 'react'

function Matchupdate() {
  return (
    <>
    {/* For Mobile view */}
      <div className='block lg:hidden'>
        <h4 className='flex justify-between items-center p-[0_1.8666666667vw] [background-image:linear-gradient(-180deg,_#2e4b5e_0%,_#243a48_82%)] text-[3.466vw] text-white font-bold leading-[2.1]'>
          <span>Cricket</span>
          <span className='flex justify-center items-center'>
            <span className='flex justify-center items-center w-[4.8vw] h-[4.8vw] mr-[1.6vw] rounded-[1.0666666667vw] bg-[linear-gradient(-180deg,_#91d527_0%,_#60ba1e_79%)]'>
              <img src="/Images/inplay.svg" alt="" className='w-[3.2vw] h-[3.2vw]' />
            </span>
            <span className='font-normal'>In-Play</span>
          </span>
        </h4>
        {/* Score Panel */}
        <div className='flex w-full h-[22vw] bg-black'>

        </div>
        {/* MatchOdds */}
        <div>
          <div className='flex justify-start items-center h-[12.999vw] py-[2.866vw] px-[1.8666666667vw] bg-[#e0e6e6]'>
            <span className='p-[0_2.9333vw_0_4vw] text-[3.4666666667vw] font-bold text-[#ffb200] bg-[linear-gradient(180deg,_#474747_0%,_#070707_100%)] rounded-[4.8vw] border border-[#3333334d] py-[2.0666666667vw]'>
              Match Odds
            </span>
          </div>
          <div className='bg-[#fff]'>
            <div className='flex w-full border-b border-[#7e97a7]'>
              <div className='flex justify-center items-center relative w-[10.4vw] h-[9.333vw] bg-[#e0e6e6] '><img src="/Images/minmax.svg" alt="" className='w-[6.6vw] h-[6.6vw]' />
                <div className="absolute left-[9.4vw] w-0 h-0 pt-[1vw]"
                  style={{
                    borderTop: "0 solid rgba(0, 0, 0, 0)",
                    borderBottom: "9.3333vw solid rgba(0, 0, 0, 0)",
                    borderLeft: "1.8666vw solid #e0e6e6"
                  }}>
                </div>
              </div>
              <div className='flex justify-between w-full'>
                <div className='flex gap-2 text-[2.9333333333vw] p-[1.1666666667vw_1.8666666667vw_0.8vw] ml-[1.5vw] mt-[0.5vw] w-[55%]'>
                  <img src="/Images/marketBar.svg" alt="" className='w-[6.6vw] h-[6.6vw]' />
                  <div className='flex flex-col leading-[1.2]'>
                    <span className='font-normal'>Matched</span>
                    <span className='font-black'>PTE 11,611,395</span>
                  </div>
                </div>
                <div className='flex text-[3.4666666667vw] font-bold w-[45%] leading-tight'>
                  <div className='text-center pt-[4vw] w-full'>Back</div>
                  <div className='text-center pt-[4vw] w-full'>Lay</div>
                </div>
              </div>
            </div>
            <ul>
              <li className=' border-b border-[#7e97a7]'>
                <div className='flex w-full min-h-[11.2vw]'>
                  <div className='flex p-[1.3333333333vw_1.8666666667vw] w-[60%]'>
                    <h4 className='text-[4vw] font-bold'>Zimbabwe</h4>
                  </div>
                  <div className='flex w-[40%]'>
                    <div className='relative flex flex-col justify-center items-center bg-[#72bbef] w-full border-r border-[#fff]'>
                      <div className='absolute top-0 left-0 w-full h-full bg-[#3333]'><img src="/Images/bg-disabled.png" alt="" className='w-full h-full  object-cover' /></div>
                      <span className=' text-[3.4666666667vw] font-bold '>70</span>
                      <span className='text-[2.9333333333vw]'>21</span>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-[#faa9ba] w-full border-r border-[#fff]'>
                      <span className=' text-[3.4666666667vw] font-bold '>75</span>
                      <span className='text-[2.9333333333vw]'>4</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className=' border-b border-[#7e97a7]'>
                <div className='flex w-full min-h-[11.2vw]'>
                  <div className='flex p-[1.3333333333vw_1.8666666667vw] w-[60%]'>
                    <h4 className='text-[4vw] font-bold'>New Zealand</h4>
                  </div>
                  <div className='flex w-[40%]'>
                    <div className='relative flex flex-col justify-center items-center bg-[#72bbef] w-full border-r border-[#fff]'>
                      <div className='absolute top-0 left-0 w-full h-full bg-[#3333]'><img src="/Images/bg-disabled.png" alt="" className='w-full h-full  object-cover' /></div>
                      <span className=' text-[3.4666666667vw] font-bold '>70</span>
                      <span className='text-[2.9333333333vw]'>21</span>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-[#faa9ba] w-full border-r border-[#fff]'>
                      <span className=' text-[3.4666666667vw] font-bold '>75</span>
                      <span className='text-[2.9333333333vw]'>4</span>
                    </div>
                  </div>
                </div>
              </li>
              <li className=' border-b border-[#7e97a7]'>
                <div className='flex w-full min-h-[11.2vw]'>
                  <div className='flex p-[1.3333333333vw_1.8666666667vw] w-[60%]'>
                    <h4 className='text-[4vw] font-bold'>The Draw</h4>
                  </div>
                  <div className='flex w-[40%]'>
                    <div className='relative flex flex-col justify-center items-center bg-[#72bbef] w-full border-r border-[#fff]'>
                      <div className='absolute top-0 left-0 w-full h-full bg-[#3333]'><img src="/Images/bg-disabled.png" alt="" className='w-full h-full  object-cover' /></div>
                      <span className=' text-[3.4666666667vw] font-bold '>70</span>
                      <span className='text-[2.9333333333vw]'>21</span>
                    </div>
                    <div className='flex flex-col justify-center items-center bg-[#faa9ba] w-full border-r border-[#fff]'>
                      <span className=' text-[3.4666666667vw] font-bold '>75</span>
                      <span className='text-[2.9333333333vw]'>4</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Bookmaker */}
        <div>
          <div className='flex justify-between items-center bg-[#3b5160] h-[8.5333333333vw] border-t border-[#7e97a7]'>
            <div className='flex items-center text-[3.4666666667vw] p-[0_0_0_1.8666666667vw] text-[#fff] leading-[8.5333333333vw]'>
              <img src="/Images/bookmark-pin.svg" alt="" className='w-[6.6666666667vw] h-[6.6666666667vw] mr-[1.8666666667vw]' />
              <span className=' font-bold'>Bookmaker Market</span>
              <span className='font-normal ml-[1.8666666667vw] opacity-[0.7]'>| Zero Commission</span>
            </div>
          </div>
          <div className='relative flex justify-between items-center h-[8.5333333333vw] p-[0_0_0_1.8666666667vw] text-[3.4666666667vw] text-[#3b5160] font-bold bg-[#e4f1f9] leading-[8.5333333333vw]'>
            <span>Bookmaker</span>
            <span className='w-[6vw]'>
              <img src="/Images/i-icon.svg" alt="" />
            </span>
            <div className='absolute flex text-[#1e1e1e] font-normal top-0 right-[1.8666666667vw] bg-[#fff] rounded-[1.0666666667vw] leading-[3.7333333333vw] z-[9] shadow-[0_6px_10px_rgba(0,_0,_0,_.7)]'>
              <div className='flex flex-col p-[0_1.8666666667vw_1.8666666667vw] py-1'>
                <span className='text-[2.6666666667vw] text-[#577c94] h-[3.2vw] p-[0.8vw_0_1.0666666667vw]'>Min / Max</span>
                <span className='font-normal pt-[2vw]'> 1.00 /  781.00</span>
              </div>
              <div className=' p-[0_1.8666666667vw_1.8666666667vw] py-1'>
                <span className='flex justify-center items-center w-[6.6666666667vw] h-[6.6666666667vw]'>
                  <img src="/Images/cross.svg" alt="" className='w-[2.4vw] h-[2.4vw]' />
                </span>
              </div>
            </div>
          </div>
          <div className='flex justify-end items-center bg-[#f8f6e1] border-b border-[#7e97a7] w-full leading-[5.8666666667vw]'>
            <div className='flex w-[40%] text-[3.4666666667vw] font-bold'>
              <span className='text-center w-full'>Back</span>
              <span className='text-center w-full'>Lay</span>
            </div>
          </div>
          <ul className='bg-[#f8f6e1]'>
            <li className='border-b border-[#7e97a7]'>
              <div className='flex justify-end items-center w-full min-h-[11.2vw] leading-[5.8666666667vw]'>
                <div className='flex p-[1.3333333333vw_1.8666666667vw] w-[60%]'>
                  <h4 className='text-[4vw] font-bold'>Zimbabwe</h4>
                </div>
                <div className='relative flex w-[40%] h-full'>
                  <div className='absolute right-0 top-0 w-full h-full bg-[#0006] text-[#fff] text-[3.4666666667vw] font-bold text-center justify-center items-center flex' style={{ textShadow: "0 0.2667vw 1.0667vw #00000080" }}> <span className='opacity-[0.8]'>Suspend</span></div>
                  <div className='flex flex-col justify-center items-center p-[0.8vw] bg-[linear-gradient(90deg,_rgba(151,_199,_234,_0.7)_0%,_#97c7ea_65%)] w-full min-h-[11.2vw]'>
                    <div className='p-[1.6vw] h-full w-full text-center border-[0.2666666667vw] border-[#fff] rounded-[1.0666666667vw] bg-[#72bbef]'>
                      <span className=' text-[3.4666666667vw] w-full font-bold '></span>
                      {/* <span className='text-[2.9333333333vw]'>21</span> */}
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center p-[0.8vw] bg-[linear-gradient(270deg,_#f7cdd6bf_5%,_#f0c0cb_60%)] w-full min-h-[11.2vw]'>
                    <div className='p-[1.6vw] h-full w-full text-center border-[0.2666666667vw] border-[#fff] rounded-[1.0666666667vw] bg-[#faa9ba]'>
                      <span className=' text-[3.4666666667vw] w-full font-bold '></span>
                      {/* <span className='text-[2.9333333333vw]'>21</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='border-b border-[#7e97a7]'>
              <div className='flex justify-end items-center w-full min-h-[11.2vw] leading-[5.8666666667vw]'>
                <div className='flex p-[1.3333333333vw_1.8666666667vw] w-[60%]'>
                  <h4 className='text-[4vw] font-bold'>New Zealand</h4>
                </div>
                <div className='flex w-[40%] h-full'>
                  <div className='flex flex-col justify-center items-center p-[0.8vw] bg-[linear-gradient(90deg,_rgba(151,_199,_234,_0.7)_0%,_#97c7ea_65%)] w-full min-h-[11.2vw]'>
                    <div className='p-[1.6vw] h-full w-full text-center border-[0.2666666667vw] border-[#fff] rounded-[1.0666666667vw] bg-[#72bbef]'>
                      <span className=' text-[3.4666666667vw] w-full font-bold '>1.25</span>
                      {/* <span className='text-[2.9333333333vw]'>21</span> */}
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center p-[0.8vw] bg-[linear-gradient(270deg,_#f7cdd6bf_5%,_#f0c0cb_60%)] w-full min-h-[11.2vw]'>
                    <div className='p-[1.6vw] h-full w-full text-center border-[0.2666666667vw] border-[#fff] rounded-[1.0666666667vw] bg-[#faa9ba]'>
                      <span className=' text-[3.4666666667vw] w-full font-bold '>1.25</span>
                      {/* <span className='text-[2.9333333333vw]'>21</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className='border-b border-[#7e97a7]'>
              <div className='flex justify-end items-center w-full min-h-[11.2vw] leading-[5.8666666667vw]'>
                <div className='flex p-[1.3333333333vw_1.8666666667vw] w-[60%]'>
                  <h4 className='text-[4vw] font-bold'>The Draw</h4>
                </div>
                <div className='flex w-[40%] h-full'>
                  <div className='flex flex-col justify-center items-center p-[0.8vw] bg-[linear-gradient(90deg,_rgba(151,_199,_234,_0.7)_0%,_#97c7ea_65%)] w-full min-h-[11.2vw]'>
                    <div className='p-[1.6vw] h-full w-full text-center border-[0.2666666667vw] border-[#fff] rounded-[1.0666666667vw] bg-[#72bbef]'>
                      <span className=' text-[3.4666666667vw] w-full font-bold '>1.25</span>
                      {/* <span className='text-[2.9333333333vw]'>21</span> */}
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center p-[0.8vw] bg-[linear-gradient(270deg,_#f7cdd6bf_5%,_#f0c0cb_60%)] w-full min-h-[11.2vw]'>
                    <div className='p-[1.6vw] h-full w-full text-center border-[0.2666666667vw] border-[#fff] rounded-[1.0666666667vw] bg-[#faa9ba]'>
                      <span className=' text-[3.4666666667vw] w-full font-bold '>1.25</span>
                      {/* <span className='text-[2.9333333333vw]'>21</span> */}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Fancy */}
        <div>
          <div className='flex text-[#fff] text-[3.7333333333vw] h-[8vw] mt-[5.3333333333vw]'>
            <div className='flex bg-[linear-gradient(-180deg,_#0a92a5_0%,_#087989_82%)] pr-[2vw]'>
              <div className='relative'>
                <img src="/Images/pin-slide.svg" alt="" className='w-[10.6666666667vw] h-[8vw] bg-no-repeat bg-cover bg-left' />
                <img src="/Images/fancy-pin.svg" alt="" className='absolute left-[1.6vw] top-[1.066vw] w-[5.866vw] h-[5.866vw] bg-cover' />
              </div>
              <span className='flex justify-center items-center text-[3.7333333333vw] text-[#fff] font-bold pl-[2.6666666667vw]'>
                <span className='flex justify-center items-center w-[4.8vw] h-[4.8vw] mr-[1.6vw] rounded-[1.0666666667vw] bg-[linear-gradient(-180deg,_#91d527_0%,_#60ba1e_79%)]'>
                  <img src="/Images/inplay.svg" alt="" className='w-[3.2vw] h-[3.2vw]' />
                </span>
                <span>Fancy Bet</span>
              </span>
            </div>
            <span className='relative flex w-[10.9333333333vw] h-full'>
              <img src="/Images/bg-fanctbet_rules.svg" alt="" />
              <img src="/Images/rules.svg" alt="" className='absolute left-[2.8vw] top-[1.8vw] w-[4vw] h-[4vw]' />
            </span>
            <div className='relative h-[8vw] ml-[2.8vw] z-[-1]'>
              <img src="/Images/left-slide.svg" alt="" className='absolute top-0 left-[-4.5333333333vw] w-[4.5333333333vw] h-[8vw]' />
              <div className='flex justify-center items-center text-[#c5d0d7] text-[3.7333333333vw] font-bold bg-[#243a48] p-[0_0.8vw] h-full'>
                <span>Premium Cricket</span>
              </div>
              <img src="/Images/ribbon.svg" alt="" className='absolute bottom-[4.8vw] right-[-3.8333333333vw] h-[4.8vw] w-[8.5333333333vw] z-10' style={{ filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.6))' }} />
              <span className='absolute bottom-[5.6vw] right-[-2.4vw] text-[#fff] text-[2.4vw] font-bold leading-[4vw] z-20'>New</span>
              <img src="/Images/right-slide.svg" alt="" className='absolute top-0 right-[-4.5333333333vw] w-[4.5333333333vw] h-[8vw]' />
            </div>
          </div>
          <div className='bg-[#087989] pb-[1.3333333333vw] text-[#fff] font-bold text-[3.2vw]'>
            <ul className='flex items-center p-[0_1.8666666667vw] pt-[1.2vw] leading-[6.9333333333vw] overflow-auto whitespace-nowrap'>
              <li className='relative list-none'>
                <span className='text-[#3b5160] h-full rounded-[1.0666666667vw] p-[0_2.6666666667vw] py-[1.8vw] bg-[#fff]'>All </span>
              </li>
              <li className='relative list-none'>
                <span className='text-[#fff] h-full rounded-[1.0666666667vw] p-[0_2.6666666667vw] py-[1.8vw]'>
                  Fancy
                  <span className="absolute top-1/2 right-0 w-px h-[5.3333vw] bg-[#ffffff66] transform translate-x-1/2 -translate-y-1/2">
                  </span>
                </span>
              </li>
              <li className='relative list-none'>
                <span className='text-[#fff] h-full rounded-[1.0666666667vw] p-[0_2.6666666667vw] py-[1.8vw]'>
                  Ball by Ball
                  <span className="absolute top-1/2 right-0 w-px h-[5.3333vw] bg-[#ffffff66] transform translate-x-1/2 -translate-y-1/2"></span>
                </span>
              </li>
              <li className='relative list-none'>
                <span className='text-[#fff] h-full rounded-[1.0666666667vw] p-[0_2.6666666667vw] py-[1.8vw]'>
                  Khadda
                  <span className="absolute top-1/2 right-0 w-px h-[5.3333vw] bg-[#ffffff66] transform translate-x-1/2 -translate-y-1/2"></span>
                </span>
              </li>
              <li className='relative list-none'>
                <span className='text-[#fff] h-full rounded-[1.0666666667vw] p-[0_2.6666666667vw] py-[1.8vw]'>
                  Lottery
                  <span className="absolute top-1/2 right-0 w-px h-[5.3333vw] bg-[#ffffff66] transform translate-x-1/2 -translate-y-1/2"></span>
                </span>
              </li>
              <li className='relative list-none'>
                <span className='text-[#fff] h-full rounded-[1.0666666667vw] p-[0_2.6666666667vw] py-[1.8vw]'>
                  Odd/Even
                  <span className="absolute top-1/2 right-0 w-px h-[5.3333vw] bg-[#ffffff66] transform translate-x-1/2 -translate-y-1/2"></span>
                </span>
              </li>
            </ul>
          </div>
          <div className='flex justify-end items-center bg-[#fff] border-b border-[#7e97a7] leading-[5.8666666667vw] text-[#1e1e1e] text-[3.4666666667vw] font-bold'>
            <div className='flex justify-end items-center w-[40%]'>
              <span className='text-center w-full'>No</span>
              <span className='text-center w-full'>Yes</span>
            </div>
          </div>
          <ul>
            <li className='bg-[#fff] border-b border-[#7e97a7]'>
              <div className='flex justify-between items-center h-[8.5333333333vw] p-[0_0_0_1.8666666667vw] text-[3.4666666667vw] text-[#3b5160] font-bold bg-[#e4f1f9] leading-[8.5333333333vw]'>
                <span>Lambi ZIM (2)</span>
                <span className='w-[6vw]'>
                  <img src="/Images/i-icon.svg" alt="" className='h-[4vw] w-[4vw]' />
                </span>
              </div>
              <div className='flex w-full min-h-[11.2vw]'>
                <div className='flex p-[1.3333333333vw_1.8666666667vw] w-[60%]'>
                  <h4 className='text-[4vw] font-bold'></h4>
                </div>
                <div className='relative flex w-[40%]'>
                  <div className='absolute right-0 top-0 w-full h-full bg-[#0006] text-[#fff] text-[3.4666666667vw] font-bold text-center justify-center items-center flex' style={{ textShadow: "0 0.2667vw 1.0667vw #00000080" }}> <span className='opacity-[0.8]'>Suspend</span></div>
                  <div className='flex flex-col justify-center items-center bg-[#72bbef] w-full border-r border-[#fff]'>
                    <span className=' text-[3.4666666667vw] font-bold '>70</span>
                    <span className='text-[2.9333333333vw]'>21</span>
                  </div>
                  <div className='flex flex-col justify-center items-center bg-[#faa9ba] w-full border-r border-[#fff]'>
                    <span className=' text-[3.4666666667vw] font-bold '>75</span>
                    <span className='text-[2.9333333333vw]'>4</span>
                  </div>
                </div>
              </div>
            </li>
            <li className='bg-[#fff] border-b border-[#7e97a7]'>
              <div className='relative flex justify-between items-center h-[8.5333333333vw] p-[0_0_0_1.8666666667vw] text-[3.4666666667vw] text-[#3b5160] font-bold bg-[#e4f1f9] leading-[8.5333333333vw]'>
                <span>Lambi ZIM (2)</span>
                <span className='w-[6vw]'>
                  <img src="/Images/i-icon.svg" alt="" className='h-[4vw] w-[4vw]' />
                </span>
                <div className='absolute flex text-[#1e1e1e] font-normal top-0 right-[1.8666666667vw] bg-[#fff] rounded-[1.0666666667vw] leading-[3.7333333333vw] z-[9] shadow-[0_6px_10px_rgba(0,_0,_0,_.7)]'>
                  <div className='flex flex-col p-[0_1.8666666667vw_1.8666666667vw] py-1'>
                    <span className='text-[2.6666666667vw] text-[#577c94] h-[3.2vw] p-[0.8vw_0_1.0666666667vw]'>Min / Max</span>
                    <span className='font-normal pt-[2vw]'> 1.00 /  781.00</span>
                  </div>
                  <div className=' p-[0_1.8666666667vw_1.8666666667vw] py-1'>
                    <span className='flex justify-center items-center w-[6.6666666667vw] h-[6.6666666667vw]'>
                      <img src="/Images/cross.svg" alt="" className='w-[2.4vw] h-[2.4vw]' />
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex w-full min-h-[11.2vw]'>
                <div className='flex p-[1.3333333333vw_1.8666666667vw] w-[60%]'>
                  <h4 className='text-[4vw] font-bold'></h4>
                </div>
                <div className='relative flex w-[40%]'>
                  {/* <div className='absolute right-0 top-0 w-full h-full bg-[#0006] text-[#fff] text-[3.4666666667vw] font-bold text-center justify-center items-center flex' style={{ textShadow: "0 0.2667vw 1.0667vw #00000080" }}> <span className='opacity-[0.8]'>Suspend</span></div> */}
                  <div className='flex flex-col justify-center items-center bg-[#72bbef] w-full border-r border-[#fff]'>
                    <span className=' text-[3.4666666667vw] font-bold '>70</span>
                    <span className='text-[2.9333333333vw]'>21</span>
                  </div>
                  <div className='flex flex-col justify-center items-center bg-[#faa9ba] w-full border-r border-[#fff]'>
                    <span className=' text-[3.4666666667vw] font-bold '>75</span>
                    <span className='text-[2.9333333333vw]'>4</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Matchupdate