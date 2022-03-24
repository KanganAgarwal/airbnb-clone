import React,{useState} from 'react'
import ReactMapGL,{Marker,Popup} from "react-map-gl"
import { getCenter } from 'geolib'
const Map = ({searchResults}) => {
  const[selectedLocation,setSelectedLocation]=useState({
  })
  const coordinates=searchResults.map(res=>({
    longitude:res.long,
    latitude:res.lat,
    }))
const center = getCenter(coordinates)
const [viewport ,setViewport]=  useState({
  width:"100%",
  height:"100%",
  latitude:center.latitude,
  longitude:center.longitude,
  zoom:11
})

  return (
   <div >
<ReactMapGL 
    mapStyle="mapbox://styles/kanganagarwal123/cl110uwos001e14o0pt8545uj"
    mapboxApiAccessToken={process.env.mapbox_key}
   {...viewport} onViewportChange={(nextViewport)=>setViewport(nextViewport)}
   >
     
      {searchResults.map(res=>(
    <div key={res.long} className="relative ">
        <Marker longitude={res.long} latitude={res.lat}
         offsetLeft={-20} offsetTop={-10}
        >
<p role="img" onClick={()=>setSelectedLocation(res)} aria-label="push-pin"
 className='text-2xl animate-bounce cursor-pointer'> 📌</p>
        </Marker>
        {selectedLocation.long === res.long ? (
          <Popup onClose={()=>setSelectedLocation({})} latitude={res.lat} longitude={res.long} closeOnClick={true}>{res.title}</Popup>
        ):(
          false
        )
      
        }
 
    </div>
    
  ))}
</ReactMapGL>
 </div>
  );
}

export default Map;