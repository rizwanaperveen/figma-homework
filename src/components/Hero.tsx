import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='flex justify-center  items-center w-[1920px] h-[829px] px-56 py-36 bg-[#043873]'>
            <div className='text-white w-[656px] h-[361px] mt-40'>
              <h1 className='mb-8 text-6xl font-bold w-[656px] h-[154px]'>Get More Done with whitepace</h1>
              <p className='text-lg mb-8 w-[656px] h-[60px]'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
            
            <button className='bg-[#4F9CF9] text-white text-lgh-[63px] w-[219px] border-4 border-green-600 px-5 py-5 m-2'>Try WhiteSpace free </button>
            </div>
            <div className='bg-[#C4DEFD] w-[824px] h-[549px]'></div>
        </div>
    </div>
  )
}

export default Hero