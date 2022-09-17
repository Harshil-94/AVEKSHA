import React from 'react'

// Components
import BgShape from "../Bg Shapes/BgShapes";
import SearchBar from "../Search Bar/SearchBar";

// Icons
import { HiPencil } from 'react-icons/hi';
import { BiNotepad } from 'react-icons/bi';
import { FaUserAlt } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { GoAlert } from 'react-icons/go';
import { CgNotes } from 'react-icons/cg';


export const DoctorDashboardPage = () => {
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
                            <div className="flex justify-between items-center w-full md:gap-16">
                                <div className=' w-full flex justify-around md:gap-16'>
                                    <div>
                                        <div className='w-32 h-32 md:w-36 md:h-36'>
                                            <img
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgut-XrUTj4kq8azPG0BcV3bwfaDrOvAEicg&usqp=CAU"
                                                alt=""
                                                className='w-full h-full rounded-full'
                                            />
                                        </div>
                                        <div className='items-center flex flex-col'>
                                            <h1 className="text-xl  text-gray-800 font-semibold md:text-2xl">Dr. Arya Bhata</h1>
                                            <h1 className="text-lg  text-gray-800 font-semibold md:text-xl">(cardiologist)</h1>
                                        </div>
                                    </div>
                                    <div className='flex flex-col  '>
                                        <div className='w-32 h-32 '>
                                            <img src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"

                                                alt=""
                                                className='w-full h-full' />
                                        </div>
                                        <div>
                                            <h5 className="text-md text-gray-700 md:text-xl">smaghd@gmail.com</h5>
                                            <h5 className="text-sm md:text-md text-gray-500">+91 8749393993</h5>
                                            <h5 className="text-sm md:text-md text-gray-500">Male</h5>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-8">
                                    <div className="hidden md:block">
                                        <div className='flex flex-col gap-6 -mt-4' >
                                            <button
                                                className=' flex items-center gap-2 border-solid border-2 rounded-md w-40 pl-8 py-2 bg-white hover:bg-gray-400 hover:text-white'>
                                                Edit Profile <HiPencil />
                                            </button>
                                            <button className='bg-red-500 rounded-md py-2 text-white hover:bg-blue-500'>
                                                Help !
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* button */}

                            <div className="md:hidden">
                                <div className='flex gap-6 -mt-4 ' >
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
                            <FaUserAlt className=' w-12 h-12  md:w-14 md:h-14 bg-blue-500 text-white rounded-full px-2' />
                            <h2 className='text-white font-semibold md:font-bold md:text-lg'>Profile</h2>
                        </div>
                        <div className='flex flex-col items-center gap-2 bg-gray-500 hover:bg-gray-700 p-4 rounded-xl w-32 h-28 md:w-40 md:h-36 md:gap-6 lg:w-52'>
                            <HiUserGroup className=' w-12 h-12  md:w-14 md:h-14 bg-blue-500 text-white rounded-full px-2' />
                            <h2 className='text-white font-semibold md:font-bold md:text-lg'>Patients</h2>
                        </div>
                        <div className='flex flex-col items-center gap-2 bg-gray-500 hover:bg-gray-700 p-4 rounded-xl w-32 h-28 md:w-40 md:h-36 md:gap-6 lg:w-52'>
                            <BiNotepad className=' w-12 h-12  md:w-14 md:h-14 bg-blue-500 text-white rounded-full px-2' />
                            <h2 className='text-white font-semibold md:font-bold md:text-lg'>Appointments</h2>
                        </div>
                        <div className='flex flex-col items-center gap-2 bg-gray-500 hover:bg-gray-700 p-4 rounded-xl w-32 h-28 md:w-40 md:h-36 md:gap-6 lg:w-52'>
                            <GoAlert className=' w-12 h-12  md:w-14 md:h-14 bg-blue-500 text-white rounded-full px-2' />
                            <h2 className='text-white font-semibold md:font-bold md:text-lg'>Emergency</h2>
                        </div>
                        <div className='flex flex-col items-center gap-2 bg-gray-500 hover:bg-gray-700 p-4 rounded-xl w-32 h-28 md:w-40 md:h-36 md:gap-6 lg:w-52'>
                            <CgNotes className=' w-12 h-12  md:w-14 md:h-14 bg-blue-500 text-white rounded-full px-2' />
                            <h2 className='text-white font-semibold md:font-bold md:text-lg'>Prescription</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorDashboardPage;