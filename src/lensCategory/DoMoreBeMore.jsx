import React, { useState } from 'react'
import doMoreBeMore from "../assets/images/Bannerforexport.webp"
import spec1 from "../assets/images/spec1.webp"
import spec2 from "../assets/images/spec2.webp"
import spec3 from "../assets/images/spec3.webp"
import spec4 from "../assets/images/spec4.webp"
import screenshot from "../assets/images/Screenshot (16).png"
const DoMoreBeMore = () => {
    let [state, setState] = useState([
        {
            img: spec1,
            type: "Round",
            button: "Explore"
        },
        {
            img: spec2,
            type: "Cat-Eye",
            button: "Explore"
        }, {
            img: spec3,
            type: "Clubmaster",
            button: "Explore"
        }, {
            img: spec4,
            type: "Transparent",
            button: "Explore"
        },
    ])
    return (
        <div>
            <img src={doMoreBeMore} alt="" />
            <main className='flex'>
                <img src={screenshot} className='h-[388px] w-[250px] mt-8' alt="" />
                <div className='flex w-[100%] justify-around items-center'>
                    {
                        state.map((val, index) => {
                            return (
                                <><div className='h-[220px] items-center w-[184px] flex flex-col justify-around'>
                                    <img className='w-[190px] h-[100px]' src={val.img} alt="" />
                                    <p>{val.type}</p>
                                    <p className='w-[143px] h-[43px] bg-[#56B7C3] rounded-md text-white flex justify-center items-center'>{val.button}</p>
                                </div></>

                            )

                        })}
                </div>
            </main>
        </div>
    )
}

export default DoMoreBeMore