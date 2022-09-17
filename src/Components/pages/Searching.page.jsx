import React from 'react'

// Components
import BgShape from '../Bg Shapes/BgShapes';
import SearchBar from '../Search Bar/SearchBar';
import SearchCard from './Requests/Cards/Search.card';

export const Searchingpage = () => {
    return (
        <>
        <div>
            <BgShape />
        </div>
            <div className='lg:mt-24 mt-14'>
                <div className='lg:container lg:mx-auto lg:px-40'>
                    <SearchBar />
                </div>
                <div className='flex md:flex-wrap flex-col md:flex-row lg:gap-6 gap-4 lg:container lg:mx-auto lg:px-40 items-center justify-center'>
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />       
                </div>
            </div>
        </>
    )
}
