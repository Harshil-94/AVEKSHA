import React from 'react'

// Icons
import { FaUserCircle } from "react-icons/fa"
import { MdOutlineDone } from "react-icons/md"
import { VscChromeClose } from "react-icons/vsc";

const ReqSm = () => {
    return (
        <>
            <div className='bg-gray-200 mx-4 flex gap-2 justify-between items-center p-2 rounded-lg'>
                <div><FaUserCircle className='w-8 h-8 text-blue-500' /></div>
                <div>
                    <div className='text-lg font-semibold '>Baba Ramdev</div>
                    <div className='flex gap-2'>
                        <div className='text-sm'>Age: 45</div>
                        <div className='text-sm'>Gender: Male</div>
                    </div>
                </div>
                <div>
                    <div>Date:</div>
                    <div className='text-xs'>12/12/2022</div>
                </div>

                <div className='flex gap-2'>
                    <button className='bg-green-400 rounded-full p-2'><MdOutlineDone /></button>
                    <button className='bg-red-400 rounded-full p-2'><VscChromeClose /></button>
                </div>
            </div>
        </>
    )
}

const ReqMd = () => {
    return (
        <>
            <div className='bg-gray-200 g:container lg:mx-60 py-4 px-6 flex justify-between items-center rounded-xl md:mx-6'>
                <div className='flex flex-col gap-1 items-center'>
                    <div><FaUserCircle className='w-9 h-9 text-blue-500 hover:text-gray-700' /></div>
                    <div className='text-sm'>View Profile</div>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <div className='text-xl font-semibold'>Name: Baba Ramdev</div>
                    <div className='flex gap-5'>
                        <div>Age : 45</div>
                        <div>Gender : Male</div>
                    </div>
                </div>
                <div className='flex flex-col gap-1 items-center'>
                    <div className='text-xl'>Date</div>
                    <div>12/12/2022</div>
                </div>
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <button className='flex gap-2 items-center bg-green-500 w-32 py-2 rounded-xl pl-7 hover:text-white hover:font-semibold hover:bg-green-600'>
                        <p>Accept</p>
                        <MdOutlineDone />
                    </button>
                    <button className='flex gap-2 items-center bg-red-500 w-32 py-2 rounded-xl pl-6 hover:text-white hover:font-semibold hover:bg-red-600'>
                        <p>Decline</p>
                        <VscChromeClose />
                    </button>
                </div>
            </div>
        </>
    )
}

const RequestCard = () => {
    return (
        <>
            <div className='md:hidden'><ReqSm /></div>
            <div className='hidden md:block'><ReqMd /></div>
        </>
    )
}

export default RequestCard