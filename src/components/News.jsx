import React from 'react'
import Helper from '../helper';

function News() {
  const userInfo = Helper();
  return (
    <>
      {/* News Marquee */}
      {userInfo &&
        <div className='flex h-[25px] mb-[1px] bg-repeat-x bg-[linear-gradient(180deg,_#2a3a43_27%,_#1c282d_83%)] text-[12px] leading-[25px] text-[#fff]'>
          <h4 className='flex basis-[72px] justify-center items-center relative font-bold'>
            <img src="/Images/icon-news.png" alt="" className='block w-[17px] h-[17px] mr-[2px] bg-no-repeat' />
            News
            <img src="/Images/path_arrow_new.png" alt="" className='absolute right-[-7px] top-0 w-[7px] h-[25px] mr-[2px] bg-no-repeat' />
          </h4>
          <div className="flex-1 overflow-hidden z-1">
            <div className="marquee">
              <span className="flex items-center h-[25px] leading-[25px] font-bold text-[#6ac2ff] mr-[100px]">
                <span className="h-[15px] leading-[15px] text-[11px] italic font-normal text-[#1c2834] bg-[#6ac2ff] rounded-[2px] px-[5px] mr-[5px]">13 Aug 2025</span>
                Event :- Birmingham Phoenix v Oval Invincibles: Market :- 88 Ball Run BP .... Whole Market Voided Because Wrong Commentary .. Sorry for the Inconvenience Caused
              </span>
              <span className="flex items-center h-[25px] leading-[25px] font-bold text-[#6ac2ff] mr-[100px]">
                <span className="h-[15px] leading-[15px] text-[11px] italic font-normal text-[#1c2834] bg-[#6ac2ff] rounded-[2px] px-[5px] mr-[5px]">04 Sep 2021</span>
                WHITE LABEL OF SKYEXCHANGE IS AVAILABLE NOW - CONTACT YOUR UPLINE.
              </span>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default News