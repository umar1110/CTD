import React from 'react'
import WoodenDockImg from '../assets/woodenDock.png'
export default function DockGuide() {
    return (
        <>
            <div className="dock-guide w-[90%] mlg:w-[70%] space-y-3 md:space-y-0 justify-between mx-auto md:flex ">
                <div className="guide-info md:w-[50%] w-full">
                    <div className="heading mb-6">

                        <h1 className='font-bold text-2xl mb-2'>Renting a Dock is Easy</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem quibusdam aliquam commodi suscipit aut!</p>
                    </div>
                    <ul className="guide-list ml-3 space-y-4">
                        <li className="item flex items-center space-x-3"><div className="icon"><i className="fa-solid fa-location-dot fa-xl" style={{ color: "rgb(95, 213, 213)" }}></i></div><div className="list-info flex flex-col"><h2 className='text-blue-900 text-xl font-semibold'>Search for Docks</h2><p>Lorem ipsum dolor Lorem, ipsumipsum dolor Lorem, ipsum.</p></div></li>
                        <li className="item flex items-center space-x-3"><div className="icon"><i className="fa-solid fa-location-dot fa-xl" style={{ color: "rgb(95, 213, 213)" }}></i></div><div className="list-info flex flex-col"><h2 className='text-blue-900 text-xl font-semibold'>Search for Docks</h2><p>Lorem ipsum dolor Lorem, ipsumipsum dolor Lorem, ipsum.</p></div></li>
                        <li className="item flex items-center space-x-3"><div className="icon"><i className="fa-solid fa-location-dot fa-xl" style={{ color: "rgb(95, 213, 213)" }}></i></div><div className="list-info flex flex-col"><h2 className='text-blue-900 text-xl font-semibold'>Search for Docks</h2><p>Lorem ipsum dolor Lorem, ipsumipsum dolor Lorem, ipsum.</p></div></li>
                        <li className="item flex items-center space-x-3"><div className="icon"><i className="fa-solid fa-location-dot fa-xl" style={{ color: "rgb(95, 213, 213)" }}></i></div><div className="list-info flex flex-col"><h2 className='text-blue-900 text-xl font-semibold'>Search for Docks</h2><p>Lorem ipsum dolor Lorem, ipsumipsum dolor Lorem, ipsum.</p></div></li>
                    </ul>
                </div>
                <div className="wooden-dock-img md:w-[48%] w-full">
                    <img src={WoodenDockImg} className="w-full h-full" alt="Woden Dock Image" />
                </div>
            </div>
        </>)
}