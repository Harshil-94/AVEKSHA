import React from 'react'

// Icons
import { FaUserCircle, FaRupeeSign } from "react-icons/fa";

export const SearchCard = () => {
    return (
        <>
            <div className="flex gap-6  items-centre justify-evenly drop-shadow-xl">
                <div className='flex flex-col gap-3 bg-gray-200 p-2 lg:p-4 rounded-xl'>
                    {/* profile */}
                    <div className='flex items-center justify-center gap-2'>
                        {/* image */}
                        <div>
                            <FaUserCircle className=' w-12 h-12   rounded-full text-blue-700 hover:text-blue-900' />
                        </div>
                        {/* info */}
                        <div>
                            <h1 className=" font-bold text-gray-800">Dr. Arya Bhatta</h1>
                            <h5 className="text-xs text-gray-500">PHYSICIAN/INTENAL/MEDICINE/COVID CONSULT</h5>
                            <h1 className="text-xs font-bold text-gray-800">31 YRS EXP.</h1>
                            <h5 className="text-xs text-gray-500">MBBS,MD (Internal Medicine)</h5>
                        </div>
                    </div>
                    {/* pay */}
                    <div className='flex flex-col items-center justify-center'>

                        <h4 className=" text-xs font-bold text-gray-800">Minimum charges</h4>
                        <h1 className='flex items-center font-bold text-blue-800'>
                            <FaRupeeSign />  800
                        </h1>

                    </div>
                    {/* button */}
                    <div className='flex gap-4 w-full'>
                        <button className='bg-red-500 hover:bg-red-700 py-1 px-2 rounded-lg  text-white'>
                            Book Appointment
                        </button>
                        <button className='bg-blue-400 hover:bg-blue-600 py-2 px-2 rounded-lg text-white'>
                           Online Consultation
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchCard