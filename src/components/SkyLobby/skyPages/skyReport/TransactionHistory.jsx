import { DownCircleFilled } from '@ant-design/icons'
import React from 'react'
import { MdOutlineHistory } from 'react-icons/md'

function TransactionHistory() {
  return (
    <>
      <div className='lg:col-span-4 lg:max-w-7xl max-w-full mx-auto'>
        <div className='sticky top-0 bg-[#efebe6] z-[1]'>
          <div className="mb-2 pl-3 pt-3 flex items-center text-[#663333] font-bold">
            <span className='flex-none my-2 mr-2'>
              <MdOutlineHistory className='overflow-hidden fill-[#663333] w-7 h-7' />
            </span>
            <span className="flex-grow">Transaction History</span>
          </div>
          <div>
            <div className="lg:flex items-center lg:px-0 lg:bg-transparent lg:mx-0 text-xs p-2 mx-2 rounded-md bg-[#fff] relative text-[#663333]">
              <div className="lg:flex-1 text-left">
                <div className="p-2 font-bold text-[#663333] hidden lg:block">Date</div>
                <div className="font-bold bg-[#fff] p-2 min-w-[180px] lg:rounded-l-md">02-09-2025 ~ 08-09-2025</div>
              </div>
              <div className='bg-[#fff] pt-2 lg:bg-transparent lg:pt-0 lg:flex lg:flex-[3_3_0%]'>
                <div className="flex justify-between text-right lg:inline-block lg:flex-1 lg:even:bg-transparent even:bg-[#d1c4b499] even:bg-opacity-10 first:border-t first:border-[#d1c4b499] lg:first:border-0">
                  <div className="p-2 font-bold text-[#663333">Bet</div>
                  <div className="font-bold p-2 lg:bg-[#fff]">0</div>
                </div>
                <div className="flex justify-between text-right lg:inline-block lg:flex-1 lg:even:bg-transparent even:bg-[#d1c4b499] even:bg-opacity-10 first:border-t first:border-[#d1c4b499] lg:first:border-0">
                  <div className="p-2 font-bold text-[#663333">Win</div>
                  <div className="font-bold p-2 lg:bg-[#fff]">0</div>
                </div>
                <div className="flex justify-between text-right lg:inline-block lg:flex-1 lg:even:bg-transparent even:bg-[#d1c4b499] even:bg-opacity-10 first:border-t first:border-[#d1c4b499] lg:first:border-0">
                  <div className="p-2 font-bold text-[#663333">Jackpot Win</div>
                  <div className="font-bold p-2 lg:bg-[#fff]">0</div>
                </div>
                <div className="flex justify-between text-right lg:inline-block lg:flex-1 lg:even:bg-transparent even:bg-[#d1c4b499] even:bg-opacity-10 first:border-t first:border-[#d1c4b499] lg:first:border-0">
                  <div className="p-2 font-bold text-[#663333">Rebate</div>
                  <div className="font-bold p-2 lg:bg-[#fff]">0</div>
                </div>
              </div>
              <div className="flex items-center text-right bg-[#d1c4b499] bg-opacity-60 rounded-full absolute right-3 top-2.5 cursor-pointer lg:rounded-none lg:bg-transparent lg:static lg:inline-block lg:flex-1">
                <div className="p-2 font-bold text-[#663333] hidden md:block">Total</div>
                <div className="font-bold p-2 lg:rounded-r-md lg:bg-[#fff]">0</div>
                <div className="lg:hidden">
                  <span className='text-[#663333]'>
                    <DownCircleFilled className='overflow-hidden fill-[#663333] text-[1.5rem] mr-1.5' />
                  </span>
                </div>
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

export default TransactionHistory