import React from 'react'

function UnderAgePolicy() {
  return (
    <div className="fixed top-0 w-full h-full m-0 bg-[#fff] rounded-none shadow-none">
      <div className="fixed w-full h-[56px] bg-white pl-[24px] border-b border-[#e0e6e6]">
        <h1 className='flex justify-start items-center text-[20px] text-[#000] font-bold leading-[56px]'>
          <span className='flex w-[6px] h-[24px] mr-[8px] rounded-[100px] bg-[#ffbd14]'></span>
          Underage Gaming Policy – Skyexch.art
        </h1>
      </div>
      <div className="p-[16px_24px] mt-[40px] text-[14px] leading-[24px] overflow-y-scroll h-[95vh]">
        <div className="tc-content">
          <p className="mb-3">
            It is illegal for anyone under the age of 18 to open an account or gamble
            with{" "}
            <a href="https://www.skyexch.art/" target="_blank" className="text-[#2789ce]">
              https://www.skyexch.art/
            </a>
            (hereinafter "Skyexch.art"). We strictly prohibit minors from registering or
            gambling, and we require new members to declare that they are over 18 years
            of age.
          </p>
          <p className="mb-3">
            Skyexch.art takes all reasonable steps to prevent underage gamblers from
            accessing and using our services, including the use of identity verification
            services to ensure that all users are eligible to play. As a registered
            user, you can help us prevent underage gambling online.
          </p>
          <p className="mb-3">
            Especially if you access your Skyexch.art account on a shared computer, or
            if you have underage individuals in your household, it's important that you
            take precautions to prevent underage gambling. Do not use software that
            saves your username and password on shared devices, and consider installing
            parental control programs that can help prevent minors from accessing online
            gambling websites.
          </p>
          <p className="mb-3">
            Skyexch.art includes several mechanisms that can help you detect
            unauthorized use of your player account. Note the last login time and IP
            address when you log into your account, and review your game transactions
            and financial transactions in your account details to ensure that there is
            no suspicious activity.
          </p>
          <p className="mb-3">
            Parents with immediate concerns about underage gambling should report
            immediately to either email{" "}
            <a href="/" className="text-[#2789ce]">support@skyexch.art</a> or the support
            chat.
          </p>
        </div>




      </div>

    </div>
  )
}

export default UnderAgePolicy