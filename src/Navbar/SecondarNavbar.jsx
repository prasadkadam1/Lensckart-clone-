import React from 'react'
import bluLogo from "../assets/images/blulogo.webp" 
import d3TRoy from "../assets/images/3dtryon1.webp"
import gold_max from "../assets/images/gold_max_logo_dc.jpeg"

const SecondarNavbar = () => {
  return (
    <div className='bg-[#FBF9F7] h-[4.2rem] w-[100%] flex justify-between items-center'>
        <main className='flex'>
            <p className='ps-4 font-semibold'>EYEGLASSES</p>
            <p className='ps-4 font-semibold'>COMPUTER GLASSES</p>
            <p className='ps-4 font-semibold'>KIDS GLASSES</p>
            <p className='ps-4 font-semibold'>CONTACT LENSES</p>
            <p className='ps-4 font-semibold'>SUNGLASSES</p>
            <p className='ps-4 font-semibold'>HOME EYE-TEST</p>
            <p className='ps-4 font-semibold'>STORE LOCATOR</p>
        </main>
        <main className='flex'>
            <img src={d3TRoy} alt="" className='w-[60px] h-[26px] rounded-lg ms-1' /><img src={bluLogo} alt="" className='ms-1 w-[60px] h-[26px] rounded-lg'/><img src={gold_max} alt="" className='ms-1 rounded-lg w-[60px] h-[26px]' />
        </main>
    </div>
  )
}

export default SecondarNavbar