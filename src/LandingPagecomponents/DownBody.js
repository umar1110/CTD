import React from 'react'
import DockItem from './DockItem'
import RentDockImg from '../assets/rentdock.png'
import ListingDockImg from '../assets/listing_dock.png'

export default function DownBody() {
    return (
        <>
            <div className="down-body w-[90%] flex relative flex-col mb-[100px] justify-center items-center mx-auto mt-2 ">
                <h1 className='font-[500] text-2xl mt-3 md:text-4xl'>
                    NearBy Docks
                </h1>
                <div className="docks-grid w-[95%] news-box grid mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 md:w-[96%] gap-x-5 gap-y-5 ">
                    <DockItem />
                    <DockItem />
                    <DockItem />
                    <DockItem />
                    <DockItem />
                    <DockItem />
                </div>
                <div className="show-more-btn font-bold cursor-pointer text-xl my-4 ml-auto mr-10 rounded-lg h-[50px] flex justify-center items-center   border-2 p-2  " style={{ borderColor: "rgb(95, 213, 213)", color: "rgb(95, 213, 213)" }}>
                    Show More Nearby Docks
                </div>
                <div className="how-it-works w-[70%] max-w-[600px] text-center mx-auto ">
                    <h3 className='font-bold text-2xl md:text-4xl my-10 '>How It Works</h3>
                    <div className="info-boxes smmd:space-x-3 space-y-3 smmd:space-y-0 grid grid-cols-1 smmd:grid-cols-2">
                        <div className="rounded-md rent-dock space-y-3 border-2 p-2 border-gray-200 flex flex-col items-center">
                            <div className="img  rounded-[50%] p-4" style={{
                                backgroundColor: "rgb(95, 213, 213)"
                            }}>
                                <img src={RentDockImg} alt="Image" />
                            </div>
                            <h2 className='text-xl font-bold'>Rent a Dock </h2>
                            <div className="rent-dock-info text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptatem quia minus consectetur placeat esse necessitatibus, sunt vel maiores beatae odit maxime molestias magni veniam officiis, nihil qui incidunt quidem.
                            </div>
                            <button className="font-bold learn-more-btn border-2 p-2 rounded-md" style={{ borderColor: "rgb(95, 213, 213)", color: "rgb(95, 213, 213)" }}>
                                Learn More About Rent
                            </button>
                        </div>
                        <div className="rounded-md list-dock space-y-3 border-2 p-2 border-gray-200 flex flex-col items-center">
                            <div className="img  rounded-[50%] p-4" style={{
                                backgroundColor: "rgb(95, 213, 213)"
                            }}>
                                <img src={ListingDockImg} alt="Image" />
                            </div>
                            <h2 className='text-xl font-bold'>List a Dock </h2>
                            <div className="rent-dock-info text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptatem quia minus consectetur placeat esse necessitatibus, sunt vel maiores beatae odit maxime molestias magni veniam officiis, nihil qui incidunt quidem.
                            </div>
                            <button className="font-bold learn-more-btn border-2 p-2 rounded-md" style={{ borderColor: "rgb(95, 213, 213)", color: "rgb(95, 213, 213)" }}>
                                Learn More About Rent
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mb-10 h-[300px] text-center flex justify-center items-center info-on-water flex-col space-y-2 text-white w-full">
                <h2 className='font-bold text-3xl'>Find The Perfect Dock For Your Boat Wherever You Go </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae temporibus consequatur aut, optio iste nobis totam iure dolorum provident animi.</p>
            </div>
        </>
    )
}
