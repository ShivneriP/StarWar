import React from 'react'
import SearchPlanet from '../components/SearchPlanet'
import PlanetList from '../components/PlanetList'

const Planet = () => {
  return (
    <div>
     <h1>Planet</h1>
     <SearchPlanet/>
      <PlanetList />
    </div>
  )
}

export default Planet