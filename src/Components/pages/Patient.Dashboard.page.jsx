import React from "react";

// Components
import SearchBar from "../Search Bar/SearchBar";
import BgShape from "../Bg Shapes/BgShapes";

// Icons
import { HiPencil } from 'react-icons/hi';
import { BiNotepad } from 'react-icons/bi';
import { VscTasklist } from 'react-icons/vsc';
import { BsPersonSquare } from 'react-icons/bs';
import { MdAttachMoney } from 'react-icons/md';

const DashboardPage = () => {
    return (
        <>
        <div>
            <BgShape />
        </div>
            <div className="lg:container lg:mx-auto lg:px-40 lg:pb-8 pt-16 lg:pt-24 md:pt-20">
                <div>
                    <SearchBar />
                </div>
                <div className=''>

                    <div
                        className='
                            flex flex-wrap items-center justify-center gap-10 pb-4 md:gap-14 lg:gap-24
                            
                 '>

                        {/* profile */}

                        <div className="flex flex-col gap-6 md:flex-row md:items-center ">
                            <div className="flex justify-around items-center w-full gap-10">
                                <div className='flex flex-col items-center '>
                                    <div className='w-32 h-32 md:w-36 md:h-36'>
                                        <img
                                            src="https://hips.hearstapps.com/esquireuk.cdnds.net/15/37/2048x2730/2048x2730-henry-cavill-43-jpg-3efbd12a.jpg?resize=480:*"
                                            alt=""
                                            className='w-full h-full rounded-full'
                                        />
                                    </div>
                                    <h1 className="text-xl  text-gray-800 font-semibold md:text-2xl">Sam Anderson</h1>
                                    <h5 className="text-md text-gray-700 md:text-lg">smaghd@gmail.com</h5>
                                    <h5 className="text-sm md:text-md text-gray-500">+91 8749393993</h5>
                                    <h5 className="text-sm md:text-md text-gray-500">Male</h5>

                                </div>

                                {/* qr code */}
                                <div className="flex flex-col items-center gap-8">

                                    <div className='w-32 h-32 '>
                                        <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"

                                            alt=""
                                            className='w-full h-full' />
                                    </div>
                                    <div className="hidden md:block">
                                        <div className='flex gap-6 -mt-4' >
                                            <button
                                                className=' flex items-center gap-2 border-solid border-2 rounded-md px-10 py-2 hover:bg-gray-400 hover:text-white'>
                                                Edit Profile <HiPencil />
                                            </button>
                                            <button className='bg-red-500 rounded-md px-16 py-2 text-white hover:bg-blue-500'>
                                                Help !
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* button */}

                            <div className="md:hidden">
                                <div className='flex gap-6 -mt-4' >
                                    <button
                                        className=' flex items-center gap-2 border-solid border-2 rounded-md px-10 py-2 '>
                                        Edit Profile <HiPencil />
                                    </button>
                                    <button className='bg-red-500 rounded-md px-16 py-2 text-white '>
                                        Help !
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* flex */}
                    <div className='flex items-center justify-evenly flex-wrap pt-6 gap-2'>
                        <div className='flex flex-col items-center gap-2 bg-gray-500 hover:bg-gray-700 p-4 rounded-xl w-32 h-28 md:w-40 md:h-36 md:gap-6 lg:w-52'>
                            <BiNotepad className=' w-12 h-12  md:w-14 md:h-14 bg-blue-500 text-white rounded-full px-2' />
                            <h2 className='text-white font-semibold md:font-bold md:text-lg'>Prescription</h2>
                        </div>
                        <div className='flex flex-col items-center gap-2 bg-gray-500 hover:bg-gray-700  p-4 rounded-xl w-32 h-28 md:w-40 md:h-36 md:gap-6 lg:w-52'>
                            <VscTasklist className=' w-12 h-12 md:w-14 md:h-14 bg-blue-500 text-white rounded-full px-2' />
                            <h2 className='text-white font-semibold md:font-bold md:text-lg'>Appointments</h2>
                        </div>
                        <div className='flex flex-col items-center gap-2 bg-gray-500 hover:bg-gray-700  p-4 rounded-xl w-32 h-28 md:w-40 md:h-36 md:gap-6 lg:w-52'>
                            <BsPersonSquare className=' w-12 h-12 md:w-14 md:h-14 bg-blue-500 text-white rounded-full px-2' />
                            <h2 className='text-white font-semibold  md:font-bold md:text-lg'>Veiw Profile</h2>
                        </div>
                        <div className='flex flex-col items-center gap-2 bg-gray-500 hover:bg-gray-700  pt-4 rounded-xl w-32 h-28 md:w-40 md:h-36 md:gap-6 lg:w-52'>
                            <MdAttachMoney className=' w-12 h-12 md:w-14 md:h-14 bg-blue-500 text-white rounded-full px-2' />
                            <h2 className='text-white font-semibold  md:font-bold md:text-lg'>Pay & Request</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardPage