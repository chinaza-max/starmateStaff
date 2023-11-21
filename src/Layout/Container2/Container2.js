import React from 'react'
import './Container2.css'
import { Outlet } from 'react-router-dom'

export default function Container2() {
  return (
    <div className='Container2'>
      <div className='body'>
        <Outlet />
      </div>
    </div>
  )
}
