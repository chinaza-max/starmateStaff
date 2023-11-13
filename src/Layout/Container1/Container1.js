import React from 'react'
import {Outlet} from "react-router-dom";
import Navigation  from "../../Components/Navigation/Navigation"
import BottomNav  from "../../Components/BottomNav/BottomNav"

import "./Container1.css"

export default function Container1() {
  return (
    <div className='Container1'>
        <div className='Nav'>
          <Navigation/>
        </div>

        <div className='body'>
          <Outlet/>
        </div>

        <div className='bottomNav'>
          <BottomNav/>
        </div>
      
    </div>
  )
}
