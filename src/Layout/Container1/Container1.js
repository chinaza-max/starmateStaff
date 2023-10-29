import React from 'react'
import {Outlet} from "react-router-dom";
import Navigation  from "../../Components/Navigation/Navigation"


export default function Container1() {
  return (
    <div className='Container1'>
        <div className='Nav'>
          <Navigation/>
        </div>

        <div className='body'>
          <Outlet/>
        </div>
      
    </div>
  )
}
