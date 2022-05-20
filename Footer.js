import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600 '>
        <div className='space-y-4 text-sm text-gray-800'>
            <h5 className='font-bold '>ABOUT</h5>
            <p className="font-semibold">
                How Airbnb works</p>
            <p className="font-semibold">Newsroom</p>
            <p className="font-semibold">Investors</p>
            <p className="font-semibold">Airbnb Plus</p>
            <p className="font-semibold">Airbnb Luxe</p>
        </div>
        
        <div className='space-y-4 text-sm text-gray-800'>
        <h5 className='font-bold '>COMMUNITY</h5>
        <p className="font-semibold">Accessibility</p>
        <p className="font-semibold">This is not a real site</p>
        <p className="font-semibold">Its a pretty awesome clone</p>
        <p className="font-semibold">Made by</p>
        <p className="font-semibold">Kangan Agarwal</p>
        </div>
        <div className='space-y-4 text-sm text-gray-800'>
        <h5 className='font-bold '>POST</h5>
<p className="font-semibold">
    Kangan
</p>
<p className="font-semibold">Presents</p>
<p className="font-semibold">You</p>
<p className="font-semibold">Airbnb</p>
<p className="font-semibold">Clone</p>
        </div>
        <div className='space-y-4 text-sm text-gray-800'>
        <h5 className='font-bold '>AVAILABLE AT</h5>
<p className="font-semibold">
    Facebook
</p>
<p className="font-semibold">Github</p>
<p className="font-semibold">LinkedIn</p>
<p className="font-semibold">Twitter</p>
<p className="font-semibold">Instagram</p>
        </div>
       
        
    </div>
  )
}

export default Footer