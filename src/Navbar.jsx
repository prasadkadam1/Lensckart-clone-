import React, { useState } from 'react'
import reactSvg from "./assets/images/react.svg"
import helpline from "./assets/images/lenskart-helpline-number-new-9999899998-desktop.jpeg"
import { CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
const Navbar = () => {
    let [navbarList, setNavbarList] = useState(["Do More, Be More", "|", "Tryin3D", "|", "StoreLocator", "|", "Singapore", "|", "UAE", "|", "John Jacobs", "|", "Aqualens", "|", "Cobrowsign", "|", "Engineering Blog", "|", "Lenskart Franchise"])
    return (
        <div className='bg-[#ffff] w-[100%]'>
            <div className='flex items-center justify-between ms-6 '>
                <main className='flex w-[57.188rem] h-[40px] items-center'>
                    {
                        navbarList.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h1 className='text-[11px] ps-2'  >{item}  </h1>
                                </div>
                            )
                        })
                    }
                </main>
                <main className='text-[11px] me-8'>Contact Us</main>
            </div>

            <section className='flex items-center h-[3.7rem] justify-between w-[84.188rem]'>
                <main className='flex items-center h-[3.7rem]'>
                    <img src={reactSvg} className='w-[12.5rem] h-[3.6rem] ms-3' alt="" />
                    <img src={helpline} className='w-[7rem] h-[2rem] ms-3' alt="" />
                    <input className='w-[28.313rem] border-[1px] border-black h-[2.2rem] rounded-md ps-4 ms-10' type="text" placeholder='What are you looking for?' />
                </main>
                <main className='w-[34.125rem]'>
                    <div className='flex  text-[14px] ps-[2rem]'>
                        <div className='ps-[2rem]'>Track Order</div>
                        <div className='ps-[2rem] '>Sign In & Sign Up</div>
                        <div className='flex items-center'>
                            <div className='ps-[2rem]'><CiHeart size={25} /></div>
                            <p className='ps-[0.5rem]'>Wishlist</p>
                        </div>
                        <div className='flex items-center'>
                            <div className='ps-[2rem]'><BsHandbag size={20} /></div>
                            <p className='ps-[0.5rem]'>Cart</p>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default Navbar