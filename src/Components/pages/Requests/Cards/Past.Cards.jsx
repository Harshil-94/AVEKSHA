import React from 'react'

// Icons
import { FaUserCircle } from "react-icons/fa"

const PastSm = () => {
    return (
        <>
            <div className='bg-gray-200 mx-4 flex gap-2 justify-between items-center p-2 rounded-lg'>
                <div><FaUserCircle className='w-8 h-8 text-blue-500' /></div>
                <div>
                    <div className='text-lg font-semibold'>Baba Ramdev</div>
                    <div className='flex gap-2'>
                        <div className='text-sm'>Age: 45</div>
                        <div className='text-sm'>Gender: Male</div>
                    </div>
                </div>
                <div>
                    <div className='text-sm'>12/12/2022</div>
                    <div>Having problem in ...</div>
                </div>
            </div>
        </>
    )
}

const PastMd = () => {
    return (
        <>
            <div className='bg-gray-200 g:container lg:mx-60 py-4 px-6 flex justify-between items-center rounded-xl md:mx-6'>
                <div className='flex flex-col gap-1 items-center'>
                    <div><FaUserCircle className='w-9 h-9 text-blue-500 hover:text-gray-700'/></div>
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
                <div className='flex flex-col gap-1 items-center'>
                    <div className='text-xl'>Patient's Summary : </div>
                    <div>Having the problem in stomach ...</div>
                </div>
            </div>
        </>
    )
}

const PastCards = () => {
    return (
        <>
            <div className='md:hidden'><PastSm /></div>
            <div className='hidden md:block'><PastMd /></div>
        </>
    )
}

export default PastCards