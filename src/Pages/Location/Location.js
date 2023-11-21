import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import MapContainer from '../../Components/Map/Map'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import { useNavigate } from 'react-router-dom'
import ListSubheader from '@mui/material/ListSubheader'
import './Location.css'
import DropDown from '../../Components/DropDown/DropDown'
import { LineWeight } from '@mui/icons-material'

export default function Location() {
  const [route, setRoute] = useState('DRIVING')
  const [distance, setDistance] = useState(0)
  const [destination, setDestination] = useState({})
  const [origin, setOrigin] = useState({})

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const handleChangeRoute = (val) => {
    setRoute(val)
  }

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  }


  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
  
        setDestination({ lat: 9.0969, lng: 7.2228 })
        setOrigin({ lat: position.coords.latitude, lng: position.coords.longitude})
      });

    } else {
      console.log("Not Available");
    }

  }, [route])
//route, destination ,origin
  return (
    <div className='Location'>
      <ul>
        <li className='icon'>
          <NavigateBeforeIcon onClick={goBack} />
        </li>
        <li>
          <DropDown handleChangeRouteP={handleChangeRoute} />
          {distance} - away
        </li>
        <li className='title'>Big joe</li>
      </ul>

      <div className='LocationContainer'>
        <Box
          sx={{
            height: '85vh',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'grey.200'
          }}
        >
          <Box className='mapContainer' sx={{ flexGrow: 1, p: 2 }} style={{ height: '100%', width: '90%' }}>
            <MapContainer setDistanceP={setDistance} routeP={route} origin={origin} destination={destination} />
          </Box>
        </Box>
      </div>
    </div>
  )
}
