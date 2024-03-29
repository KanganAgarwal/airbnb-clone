import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

const Search = ({searchResults}) => {
  const router=useRouter();
  const {location,startDate,endDate,numberOfGuests}=router.query;
  const formattedStartDate=format(new Date(startDate),"dd MMMM yy");
  const formattedEndDate=format(new Date(endDate),"dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;
  console.log(formattedStartDate)
  return (
     <div className='max-h-screen'>
    
      <Header placeholder={`${location} | ${range} | ${numberOfGuests} guests`}/>
      
   <main className='flex '>
<section className='flex-grow pt-10 px-6'>
    <p className='text-sm'>300+ Stays {range} for {numberOfGuests} guests</p>
    <h1 className='font-semibold text-3xl mt-2 mb-6'>Stays in {location}</h1>
    <div className='hidden lg:inline-flex space-x-3 mb-4 text-gray-800 whitespace-nowrap'>
    <div className='btn'>Cancellation Flexibility</div>
    <div className='btn'> Types of place
    </div>
    <div className='btn'>Price</div>
    <div className='btn'>Free Parking</div>
    <div className='btn'>TV</div>
    </div>
    <div>
    {searchResults.map(({img,location,title,description,star,price,total})=>(
<InfoCard key={img} img={img} location={location} title={title} description={description}
star={star} price={price} total={total}/>
    ))} 
    </div>  
</section>
{/* <section className='hidden xl:inline-flex xl:min-w-[600px] '>
  <Map searchResults={searchResults}/>
</section>  */}
   </main>
    <Footer/>
   
    </div>
  )
}
export default Search
export async function getServerSideProps(){
const searchResults= await fetch("https://links.papareact.com/isz").then(res=>res.json());
return{
  props:{
searchResults,
  }
}

}