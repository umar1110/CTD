import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
    return (
        <>
            <div className="nav-bar w-[100%]  absolute top-0 left-0  right-0 bg-transparent items-center h-[60px] flex justify-between" style={{
                backgroundColor: "rgb(255, 255, 255,0.3)",
            }}>
                <div className="logo text-black text-2xl font-bold flex justify-center items-center">
                    ConnectTheDocks
                </div>
                <div className="options hidden mlg:flex justify-center items-center text-black font-bold">
                    <ul className='flex space-x-10'>
                        <li><a href="#">How it Works</a></li>
                        <li><a href="#">FaQs</a></li>
                        <li><a href="#">Insurance & Protection </a></li>
                        <li><a href="#">Rent a Dock</a></li>
                        <li><a href="#">List your Docks</a></li>

                    </ul>
                </div>
                <Link to='/signIn'>
                    <div className="sign-in-sign-up space-x-2 cursor-pointer flex justify-center items-center mr-4 text-black font-bold">
                        <div className="logo">
                            <i className="fa-solid fa-user fa-xl" style={{ color: "white" }}></i>
                        </div>
                        <div className="text">

                            SignIn/SignUp
                        </div>
                    </div>
                </Link>

            </div>
        </>)
}