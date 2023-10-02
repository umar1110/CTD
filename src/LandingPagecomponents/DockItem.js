import React from 'react'
import dockImg from '../assets/shipimg.jpg'
export default function DockItem() {
    return (
        <>
            <div className="dock-items space-x-4 cursor-pointer flex p-2 w-full border-2 border-gray-200 rounded-md bg-white">
                <div className="item-img w-[50%] overflow-hidden rounded-md h-full">
                    <img src={dockImg} alt="dock" className='w-full h-full' />
                </div>
                <div className="info flex flex-col justify-around">
                    <h3>
                        Lorem ipsum dolor sit amet kattle in water.
                    </h3>
                    <div className="location flex ">
                        <div className="location-logo"></div>
                        <div className="location-type">
                            #N/A
                        </div>
                    </div>
                    <div className="l-b-d">
                        <h4><strong>Length</strong>100ft maximum </h4>
                        <h4><strong>Beam</strong>100ft maximum </h4>
                        <h4><strong>Draft</strong>100ft maximum </h4>

                    </div>
                </div>
            </div>
        </>

    )
}
