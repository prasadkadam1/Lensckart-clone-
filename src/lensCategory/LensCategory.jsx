import React, { useState } from 'react'
import prog11 from "../assets/images/prog11.webp"
import a2 from "../assets/images/a2.webp"
import b2 from "../assets/images/b2.webp"
import d2 from "../assets/images/d2.webp"
import e2 from "../assets/images/e2.webp"
import dWebp from "../assets/images/d.webp"
import deskGold from "../assets/images/deskgold.jpg"


const LensCategory = () => {
    let [state, setState] = useState(
        [{
            img: a2,
            name: "Eyeglasses"
        },
        {
            img: b2,
            name: "Sunglasses"
        },
        {
            img: d2,
            name: "Computer glasses"
        },
        {
            img: dWebp,
            name: "Contact Lenses"
        },
        {
            img: e2,
            name: "Power glasses"
        },
        
        {
            img: prog11,
            name: "Progressive Lenses"
        }]
    )
    return (
        <section>
        <main className='flex w-[100%] justify-around bg-[#f5f5f5] '>
            {state.map((val, ind) => {
                return (
                    <>
                        <div className='w-[200px] h-[132px] bg-[#ffff] rounded-lg my-4 flex justify-center items-center flex-col'>
                            <div><img src={val.img} className='w-[189px] h-[96px]' alt="" /></div>
                            <p className='text-sm text-[gray]' >{val.name}</p>
                        </div>
                    </>)
            })}

        </main>
        <img src={deskGold} alt="" />
        </section>
    )
}

export default LensCategory