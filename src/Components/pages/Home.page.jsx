import React from "react";

// Components
import SearchBar from "../Search Bar/SearchBar";
import BgShape from "../Bg Shapes/BgShapes";

const HomePage = () => {
    return (
        <>

        <div>
            <BgShape />
        </div>
            <div className="lg:container lg:mx-auto lg:px-40 lg:pb-8 pt-16 lg:pt-24 md:pt-20">
                <div>
                    <SearchBar />
                </div>

                <div className=" md:flex md:px-8 md:justify-between md:items-center lg:container lg:mx-auto lg:px-16 lg:gap-10 lg:py-6 ">
                    <div className="flex flex-col gap-4 lg:w-1/2 lg:gap-10">
                        <div className="flex items-center flex-col gap-1 md:items-start lg:gap-3">
                            <h1 className="text-2xl lg:text-4xl md:font-bold font-semibold">ONE INDIA ONE HOSPITAL</h1>
                            <h5 className="text-xl font-normal lg:font-semibold lg:text-2xl">Choose your Hospital</h5>
                        </div>
                        <div className="flex items-center gap-4 justify-center md:justify-start lg:gap-6 px-6 md:px-0">
                            <button className="bg-blue-400 px-4 py-2 rounded-lg font-bold text-white text-md lg:text-xl lg:px-6 lg:py-3 w-full hover:bg-red-400">Book Slot</button>
                            <button className="bg-blue-400 px-4 py-2 rounded-lg font-bold text-white text-md lg:text-xl lg:px-6 lg:py-3 w-full hover:bg-red-400">Fix Slot</button>
                        </div>
                    </div>
                    <div className="p-6 rounded-lg md:p-0 md:w-80 lg:w-1/2">
                        <img src="https://media.istockphoto.com/vectors/medical-team-vector-id1214423422?k=20&m=1214423422&s=612x612&w=0&h=WmzB4WiNJ_II5I6uQIGGaYMh45gP8qikNnIyMpqPPAA=" alt="doctors" className="w-full h-full rounded-lg" />
                    </div>
                </div>

            </div>
            
            <div className="bg-red-600 hover:bg-red-700 fixed md:bottom-8 md:right-8 bottom-16 right-4 px-4 py-2 rounded-xl md:rounded-2xl  z-10">
                <button className="text-white md:text-lg ">Emergency</button>
            </div>
        </>
    )
}

export default HomePage