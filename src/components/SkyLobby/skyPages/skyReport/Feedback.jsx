import React from 'react'

function Feedback() {
  return (
    <>
      <div className='lg:col-span-4 lg:max-w-7xl max-w-full mx-auto'>
        <div className='sticky top-0 bg-[#efebe6] z-[1] pb-16'>
          <div className="mb-2 pl-3 pt-3 flex items-center text-[#663333] font-bold">
            <span className='flex-none my-2 mr-2'>
              <img src="/Images/skyLobby/feedback.webp" alt="" className='overflow-hidden fill-[#663333] w-7 h-7' />
            </span>
            <span className="flex-grow">Feedback</span>
          </div>
          <div className="max-w-[90%] mx-auto">
            <div className="mb-4">
              <div className='text-white bg-[#432a12] p-4 rounded-t-lg'>
                <span className="text-yellow-500">* </span>
                How would you rate the gaming experience in the lobby?
              </div>
              <div className='bg-[#fff] p-4 rounded-b-lg'>
                <form className='flex items-center justify-center mx-auto mb-6'>
                  <fieldset className='m-0 p-0 stars text-starDefault'>
                    <label htmlFor="" className='inline-block float-right w-[45px] h-[45px] relative cursor-pointer text-[#ededed] transition-colors duration-100 ease-out z-10'>
                      <span className='flex-none mr-2'>
                        <img src="/Images/skyLobby/grey-star.webp" alt="" className="block w-11 h-11 invert brightness-0 sepia saturate-0 hue-rotate-0 contrast-100"
                          style={{ filter: "brightness(0) saturate(100%) invert(92%) sepia(3%) saturate(354%) hue-rotate(173deg) brightness(98%) contrast(90%)" }} />
                      </span>
                    </label>
                    <label htmlFor="" className='inline-block float-right w-[45px] h-[45px] relative cursor-pointer text-[#ededed] transition-colors duration-100 ease-out z-10'>
                      <span className='flex-none mr-2'>
                        <img src="/Images/skyLobby/grey-star.webp" alt="" className="block w-11 h-11 invert brightness-0 sepia saturate-0 hue-rotate-0 contrast-100"
                          style={{ filter: "brightness(0) saturate(100%) invert(92%) sepia(3%) saturate(354%) hue-rotate(173deg) brightness(98%) contrast(90%)" }} />
                      </span>
                    </label>
                    <label htmlFor="" className='inline-block float-right w-[45px] h-[45px] relative cursor-pointer text-[#ededed] transition-colors duration-100 ease-out z-10'>
                      <span className='flex-none mr-2'>
                        <img src="/Images/skyLobby/grey-star.webp" alt="" className="block w-11 h-11 invert brightness-0 sepia saturate-0 hue-rotate-0 contrast-100"
                          style={{ filter: "brightness(0) saturate(100%) invert(92%) sepia(3%) saturate(354%) hue-rotate(173deg) brightness(98%) contrast(90%)" }} />
                      </span>
                    </label>
                    <label htmlFor="" className='inline-block float-right w-[45px] h-[45px] relative cursor-pointer text-[#ededed] transition-colors duration-100 ease-out z-10'>
                      <span className='flex-none mr-2'>
                        <img src="/Images/skyLobby/grey-star.webp" alt="" className="block w-11 h-11 invert brightness-0 sepia saturate-0 hue-rotate-0 contrast-100"
                          style={{ filter: "brightness(0) saturate(100%) invert(92%) sepia(3%) saturate(354%) hue-rotate(173deg) brightness(98%) contrast(90%)" }} />
                      </span>
                    </label>
                    <label htmlFor="" className='inline-block float-right w-[45px] h-[45px] relative cursor-pointer text-[#ededed] transition-colors duration-100 ease-out z-10'>
                      <span className='flex-none mr-2'>
                        <img src="/Images/skyLobby/grey-star.webp" alt="" className="block w-11 h-11 invert brightness-0 sepia saturate-0 hue-rotate-0 contrast-100"
                          style={{ filter: "brightness(0) saturate(100%) invert(92%) sepia(3%) saturate(354%) hue-rotate(173deg) brightness(98%) contrast(90%)" }} />
                      </span>
                    </label>
                  </fieldset>
                </form>
                <span className="text-[#a8a29e]">Your feedback is valuable to us.</span>
              </div>
            </div>
            <div className="mb-4">
              <div className='text-white bg-[#432a12] p-4 rounded-t-lg'>
                <span className="text-yellow-500">* </span>
                Any feedback to us?
              </div>
              <div className='bg-[#fff] p-4 rounded-b-lg'>
                <div className='bg-[#ededed] mb-2.5 p-2 rounded-lg'>
                  <textarea name="" id="" className='w-full h-[24vh] overflow-y-auto bg-transparent text-[#000]'></textarea>
                </div>
                <div className="flex justify-between">
                  <span className='text-[#a8a29e]'>
                    Max length: 120 characters.
                  </span>
                  <span className='text-[#a8a29e]'>
                    (0/120)
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-64 lg:mx-auto">
              <button className='bg-[#663333] text-[#fff] w-full p-3 mb-4 rounded-lg disabled:opacity-30' disabled>
                Send Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feedback