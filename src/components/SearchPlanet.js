 import React from 'react'
 import { useRef } from 'react'

 const SearchPlanet = () => {
  const searchValue=useRef();
   return (
     <div>
      
      <label htmlFor="planet">SearchPlanet
      </label>
      <input type="planet" name='planet' ref={searchValue} />
      </div>
   )
 }
 
 export default SearchPlanet