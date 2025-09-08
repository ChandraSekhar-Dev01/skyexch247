import React from 'react'

function Tips() {
  return (
    <>
      <div className='lg:col-span-4 lg:max-w-7xl max-w-full mx-auto'>
        <div className='sticky top-0 bg-[#efebe6] z-[1]'>
          <div className="mb-2 pl-3 pt-3 flex items-center text-[#663333] font-bold">
            <span className='flex-none my-2 mr-2'>
              <img src="/Images/skyLobby/tips.webp" alt="" className='overflow-hidden fill-[#663333] w-7 h-7' />
            </span>
            <span className="flex-grow">Tips History</span>
          </div>
          <div>
            <div className="lg:flex items-center lg:px-0 lg:bg-transparent lg:mx-0 text-xs text-[#663333] px-2 mx-2 rounded-md bg-[#fff] relative">
              <div className="lg:flex-1 text-left">
                <div className="p-2 font-bold text-[#663333] hidden lg:block">Date</div>
                <div className="font-bold bg-[#fff] p-2 min-w-[180px] lg:rounded-l-md">02-09-2025 ~ 08-09-2025</div>
              </div>
              <div className="flex items-center text-right absolute right-3 top-0 lg:static lg:inline-block lg:flex-1">
                <div className="p-2 font-bold text-[#663333]">Tip</div>
                <div className="font-bold p-2 lg:rounded-r-md lg:bg-[#fff]">0</div>
              </div>
            </div>
            <div className="overflow-x-auto scroll-hidden flex py-4 pl-2 lg:pl-0">
              <span>
                <button className='mr-2 min-w-16 min-h-16 w-16 h-16 flex flex-wrap justify-center text-[#663333] text-xs text-center font-bold border-2 border-[#fff] bg-[#fff] rounded-md opacity-50 cursor-not-allowed'>
                  <div className='titleWeek mt-4 -mb-3 w-full'>Mon.</div>
                  <div data-v-241e5c33="">09/08</div>
                </button>
              </span>
              <span>
                <button className='mr-2 min-w-16 min-h-16 w-16 h-16 flex flex-wrap justify-center text-[#663333] text-xs text-center font-bold border-2 border-[#fff] bg-[#fff] rounded-md opacity-50 cursor-not-allowed'>
                  <div className='titleWeek mt-4 -mb-3 w-full'>Sun.</div>
                  <div data-v-241e5c33="">09/06</div>
                </button>
              </span>
              <span>
                <button className='mr-2 min-w-16 min-h-16 w-16 h-16 flex flex-wrap justify-center text-[#663333] text-xs text-center font-bold border-2 border-[#fff] bg-[#fff] rounded-md opacity-50 cursor-not-allowed'>
                  <div className='titleWeek mt-4 -mb-3 w-full'>Sat.</div>
                  <div data-v-241e5c33="">09/06</div>
                </button>
              </span>
              <span>
                <button className='mr-2 min-w-16 min-h-16 w-16 h-16 flex flex-wrap justify-center text-[#663333] text-xs text-center font-bold border-2 border-[#fff] bg-[#fff] rounded-md opacity-50 cursor-not-allowed'>
                  <div className='titleWeek mt-4 -mb-3 w-full'>Fri.</div>
                  <div data-v-241e5c33="">09/05</div>
                </button>
              </span>
              <span>
                <button className='mr-2 min-w-16 min-h-16 w-16 h-16 flex flex-wrap justify-center text-[#663333] text-xs text-center font-bold border-2 border-[#fff] bg-[#fff] rounded-md opacity-50 cursor-not-allowed'>
                  <div className='titleWeek mt-4 -mb-3 w-full'>Thu.</div>
                  <div data-v-241e5c33="">09/04</div>
                </button>
              </span>
              <span>
                <button className='mr-2 min-w-16 min-h-16 w-16 h-16 flex flex-wrap justify-center text-[#663333] text-xs text-center font-bold border-2 border-[#fff] bg-[#fff] rounded-md opacity-50 cursor-not-allowed'>
                  <div className='titleWeek mt-4 -mb-3 w-full'>Wed.</div>
                  <div data-v-241e5c33="">09/03</div>
                </button>
              </span>
              <span>
                <button className='mr-2 min-w-16 min-h-16 w-16 h-16 flex flex-wrap justify-center text-[#663333] text-xs text-center font-bold border-2 border-[#fff] bg-[#fff] rounded-md opacity-50 cursor-not-allowed'>
                  <div className='titleWeek mt-4 -mb-3 w-full'>Tue.</div>
                  <div data-v-241e5c33="">09/02</div>
                </button>
              </span>
            </div>
            <div className='bg-[#fff] text-[#342f2f] text-center rounded-lg mx-2 mb-2 lg:mx-0'>
              <div className="text-sm text-[#342f2f] rounded-lg p-14 opacity-70">No data found</div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Tips