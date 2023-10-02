import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="footer bg-blue-950 w-[100%] text-white " >
               <div className="data pt-5 pb-10 space-y-5 sm:space-y-0 flex sm:flex-row sm:justify-around flex-col ">

               
                    <ul className="quickLinks space-y-2">
                        <h2 className="heading font-bold text-lg">
                            Quick Links
                        </h2>
                        <li className="cursor-pointer">
                            Find a Dock
                        </li>
                        <li className="cursor-pointer">
                            Dockage Agrement
                        </li>
                    </ul>
                    <ul className="for-boat-owners space-y-2">
                        <h2 className="heading font-bold text-lg">
                            For Boat Owner
                        </h2>
                        <li className="cursor-pointer">
                            My Trips
                        </li>
                        <li className="cursor-pointer">
                            How it Works
                        </li>
                        <li className="cursor-pointer">
                            FAQ (Booking a Dock)
                        </li>
                    </ul>
                    <ul className="for-dock-owner space-y-2">
                        <h2 className="heading font-bold text-lg">
                            For Dock Owners
                        </h2>
                        <li className="cursor-pointer">
                            My Account
                        </li>
                        <li className="cursor-pointer">
                            How it Works
                        </li>
                        <li className="cursor-pointer">
                            FAQ (Listning a Dock)
                        </li>
                    </ul>
                    </div>
            </div>
        </>
    )
}