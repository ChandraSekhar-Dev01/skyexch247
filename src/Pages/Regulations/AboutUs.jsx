import React from 'react'

function AboutUs() {
  return (
    <div className="fixed top-0 w-full h-full m-0 bg-[#fff] rounded-none shadow-none">
      <div className="fixed w-full h-[56px] bg-white pl-[24px] border-b border-[#e0e6e6]">
        <h1 className='flex justify-start items-center text-[20px] text-[#000] font-bold leading-[56px]'>
          <span className='flex w-[6px] h-[24px] mr-[8px] rounded-[100px] bg-[#ffbd14]'></span>
          About Us
        </h1>
      </div>
      <div className="p-[16px_24px] mt-[40px] text-[14px] leading-[24px] overflow-y-scroll h-[95vh]">
        <div className="tc-content">
          <ul  className='list-disc ml-[32px] mb-[16px]'>
            <li>
              Sky Infotech Group is one of the upcoming providers for online gaming
              entertainment across Sports Betting, Online and Live Casino operating in
              the emerging and the regulated markets.
            </li>
            <li>
              We aim to utilize the latest technologies to provide innovative and
              interactive gaming experiences in a secure environment.
            </li>
            <li>
              <strong>
                We have dedicated ourselves to offering our customers a seamless and
                thrilling gaming experience while you are on the go. We aim to provide
                an exceptional and fully customizable online betting experience.
              </strong>
            </li>
            <li>
              <strong>
                We are innovative, ambitious and passionate about what we do. We do it
                in a credible and responsible way, always aiming for the top.
              </strong>
            </li>
            <li>
              We only operate in regulated markets where we hold the appropriate
              licenses. We take our responsibilities to customers and our other
              stakeholders seriously and place great emphasis on working to a
              ‘compliance first’ model across the business.
            </li>
            <li>
              <strong>Dedicated Customer Service Team: </strong>We are here for you
              every step of the way with dedicated customer service managers standing by
              to provide you with a 24/7 top notch customer care service, handling any
              issues quickly and efficiently.
            </li>
            <li>
              When customers bet on our site they can rest assured that they are getting
              a wide variety of betting options, up to date information and the best
              odds available.
            </li>
            <li>
              Our customers also have peace of mind, knowing that when it’s time to
              collect, they are betting with a well-known reputable company.
            </li>
            <li>
              We have integrated best and secured payment methods on our site and a
              transaction process that is quick, easy enabling our players to cash out
              their winnings quickly and securely.
            </li>
          </ul>
          <h2 className='m-[16px_0] p-0 text-[20px] text-[#1b2d38] font-bold border-b border-[#ccc] pb-[8px]'>BUSINESS ADDRESS</h2>
          <address className='text-[13px] mb-[10px]'>
            Name- Sky Infotech N.V.
            <br />
            Address- Abraham de Veerstraat 9 , Curacao P.O Box 3421
          </address>
          <address className='text-[13px] mb-[10px]'>
            Name- Sky Technology Limited
            <br />
            Address- 71-75 Shelton Street Covent Garden London WC2H 9JQ
          </address>
        </div>


      </div>


    </div>
  )
}

export default AboutUs