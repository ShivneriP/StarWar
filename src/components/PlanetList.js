import React from 'react'
import { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {fetchplanets} from '../redux/features/planetSlice'
import { Link } from 'react-router-dom'



const PlanetList = () => {
    const {people,loading}=useSelector((state)=>({...state.app}))
    const dispatch=useDispatch()
useEffect(()=>{
    dispatch(fetchplanets())
},[])

  return (
    <div>PlanetList</div>
  )
}

export default PlanetList