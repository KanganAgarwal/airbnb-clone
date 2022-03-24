import React from 'react'
import Image from 'next/image'
import { DateRangePicker } from 'react-date-range';
import {SearchIcon,
GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon} from "@heroicons/react/solid";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react';
import { useRouter } from 'next/router';
const Header = ({placeholder}) => {
  const router=useRouter();
  const [searchInput, setSearchInput] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const search=()=>{
    router.push(
      {
        pathname:'/search',
        query:{
            location:searchInput,
            numberOfGuests:numberOfGuests,
            startDate:startDate.toISOString(),
            endDate:endDate.toISOString()
        }
      })
  }
  const resetInput=()=>{
    setSearchInput('');
  }
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  }
  const handleSelect=(ranges)=>{
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(ranges);
  }
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 w-full'>
<div className='relative flex items-center h-10 cursor-pointer my-auto' onClick={()=>router.push('/')}>
  
    <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition="left" alt='img'/>
</div>

<div className='flex items-center md:border-2 rounded-full py-2
md:shadow-sm
' >

<input type="text" placeholder={placeholder || 'Start your search'}value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}
 className='pl-5 bg-transparent text-sm text-gray-600 outline-none flex-grow placeholder-gray-400'/>
    <SearchIcon className='h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer hidden md:inline-flex md:mx-2'/>
</div>

<div className='flex items-center justify-end space-x-4 text-gray-500'>
    <p className='hidden md:inline'>Become a host</p>
    <GlobeAltIcon className='h-6 cursor-pointer'/>
    <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
      <MenuIcon className='h-6'/>
      <UserCircleIcon  className='h-6' />
     
    </div>
</div>
{
 searchInput && <div className='flex flex-col col-span-3 mx-auto'>
  <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        onChange={handleSelect}
        rangeColors={["#fD5861"]}
      />
      <div className='flex items-center border-b mb-4'>
      <h2 className='font-semibold text-2xl flex-grow '> Number Of Guests</h2> 
      <UsersIcon className='h-5'/>
      <input type="number" onChange={(e)=>setNumberOfGuests(e.target.value)}
       value={numberOfGuests} min={1} className='w-12 pl-3 text-lg outline-none text-red-400'/>
      </div>
      <div className='flex'>
        <button onClick={resetInput} className='flex-grow text-gray-500'>Cancel</button>
        <button onClick={search} className='flex-grow text-red-400'>Search</button>
      </div>
 </div>
}
    </header>
  )
}

export default Header