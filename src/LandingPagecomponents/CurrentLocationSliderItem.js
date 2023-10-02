import React from 'react'
import Country from '../assets/miami.jpg'

export default function () {
    return (
        <div className='flex border-[1px] pr-10 w-fit h-[90px] justify-center  items-center border-gray-300 rounded-md space-x-3'>
            <img src={Country} alt="Country" className="location-img w-[100px]  h-full" />
            <div className="city-country w-[200px]">
                <h2 className='text-xl font-bold'>Miami</h2>
                <h3 className='text-gray-500'>Florida</h3>
            </div>
        </div>
    )
}