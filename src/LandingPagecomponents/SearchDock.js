import React from 'react'

export default function SearchDock() {
    return (
        <>
            <div className="search-dock  h-[100%] sm:[70%]   flex-col  flex justify-center  w-[80%] max-w-[750px] mx-auto items-center">
                <div className="big-logo mb-10">
                    <div className=" text-white text-2xl font-bold flex justify-center items-center">
                        ConnectTheDocks
                    </div>
                    <p className='text-black font-semibold'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, harum!
                    </p>
                </div>

                <div className="search-box flex-col flex sm:flex-row justify-between items-center ] w-[100%] sm:h-[100px] " style={{
                    backgroundColor: "rgb(255, 255, 255,0.6)",
                }}>
                    <div className="city my-5 flex flex-col translate-y-[-10px] w-[90%]  sm:w-[35%]  ml-2">
                        <label htmlFor="city-field">Where to? </label>
                        <input type="text" id='city-field' placeholder='City or State ? ' className='max-w-full py-1 px-1' />
                    </div>
                    <div className="date flex my-5 flex-col w-[90%]  sm:w-[35%] translate-y-[-10px] ">
                        <label htmlFor="city-field">Rental Dates</label>
                        <input type="date" id='city-field' className='max-w-full' />
                    </div>
                    <button className="submit-btn text-white px-2 mr-3 h-[50px] rounded-md sm:w-[25%] w-[70%] ]" style={{ backgroundColor: "rgb(95, 213, 213)" }}>
                        Search for Docks
                    </button>
                </div>
            </div>
        </>
    )
}
