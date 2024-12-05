import React from 'react';
import Image from 'next/image';


const Footer = () => {
  return (
    <>
<div className='w-[1920px] h-[461px] bg-[#043873] flex items-center justify-center'>
  <div className='w-[1480px] h-[289px] pt-36 pb-8 pr-56 pl-56'>
    <div className='w-[1480px] h-[169px] flex m-2 p-2'>
     <div className='w-[295px] h-[169px]'>
      <Image src="/logo1.png" width={191} height={34} alt="logo" />
     
      <ul className='w-[240px] h-[120px] text-[#F7F7EE] underline m-2'>
        
        <li>whitepace was created for</li>
        <li>the new ways we live and</li>
        <li>work.We make a better</li>
        <li>workspace around the world</li>
      
      </ul>
    
     </div>
     <div className='w-[295px] h-[127px] text-white pl-4'>
      <h1 className='text-2xl font-bold'>Product</h1>
      <ul className='m-2'>
        <li className='text-[#FFE492] mt-2'>Overview</li>
        <li className='text-white mt-2'>Pricing</li>
        <li className='mt-2'>Customer Stories</li>
      </ul>
     </div>
     <div className='w-[295px] h-[130px] text-white pl-4'>
     <h1 className='text-2xl font-bold'>Resources</h1>
     <ul className='m-2'>
        <li className='mt-2'>Blog</li>
        <li className='mt-2'>Guides and tutorials</li>
        <li className='mt-2'>Help center</li>
      </ul>
     </div>
     <div className='w-[295px] h-[130px] text-white pl-4'>
      <h1 className='text-2xl font-bold'>Company</h1>
      <ul>
        <li className='mt-2'>About Us</li>
        <li className='mt-2'>Careers</li>
        <li className='mt-2'>Media Kit</li>
      </ul>
      </div> 
    </div>
    <div className='w-[1480px] h-[20px] flex items-center justify-center text-white'>@2021Whitepace LLC.</div>
  </div>
</div>
    </>
  )
}

export default Footer