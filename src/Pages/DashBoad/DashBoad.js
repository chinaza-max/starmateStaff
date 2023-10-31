import React from 'react'
import  "./DashBoad.css"
import Alert from '@mui/material/Alert';
import DashboadCard from "../../Components/DashboadCard/DashboadCard"
import img from "../../Assets/giphy.gif"


export default function DashBoad() {
  return (
    <div  className='DashBoad'>
        <div  className='section1'>

          <img src={img} alt="Animated GIF" />

          <Alert severity="success" className='available'>Available</Alert>

          <div className='Card'>
              <DashboadCard/>
          </div>
        </div>
    </div>
  )
}


