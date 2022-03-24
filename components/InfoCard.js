import React from 'react'
import Image from "next/image";
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
const InfoCard = ({img,location,title,description,star,price,total}) => {
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4
    transition duration-200 ease-out first:border-t'>
    <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        <Image src={img} layout="fill" objectFit='cover' alt={title}
        className="rounded-md"/>
    </div>
    < div className='flex flex-col pl-5 flex-grow'>
        <div className='flex justify-between font-medium'>
        <p>{location}</p>
        <HeartIcon className='cursor-pointer h-7'/>
        </div>
        <h4 className='text-xl'>{title}</h4>
        <div className='border-b w-10 pt-2'/>
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
    <div  className='flex justify-between items-end pt-5'>   
<div >
    <p className='flex items-center'>{star}
    <StarIcon className='h-5 pl-1 text-red-400' />
    </p>
</div>
<div className='flex flex-col'>
    <p className='font-semibold text-lg lg:text-2xl pb-2'>{price}</p>
    <p className='text-right font-light '>{total}</p>
</div>
        </div>
    </div>
    </div>
    
  )
}

export default InfoCard