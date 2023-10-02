import React from 'react'
import cardImg from '../assets/GCarditem.png'
export default function GaCard() {
    return (
        <>
            <div className="card-item h-full my-2 p-3 border-[1px] rounded-lg mx-2 md:mx-1 border-gray-300">
                <div className="img h-[60%]">
                    <img src={cardImg} alt="Card Image" className='w-full h-full' />
                </div>
                <div className="card-info">
                    <h2 className="card-headnig my-4 text-center font-bold text-lg">
                        No Signup Fees
                    </h2>
                    <p className='mb-3'>Lorem ipsum dolor sit amet Lorem Lorem ipsum dolor sit amet. ipsum dolor sit amet. consectetur adipisicing elit. Quis ipsum ratione tenetur.</p>
                </div>
            </div>
        </>)
}