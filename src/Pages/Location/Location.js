import React,{useEffect,useState} from 'react'
import Box from '@mui/material/Box';
import MapContainer from '../../Components/Map/Map';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useNavigate  } from "react-router-dom";
import ListSubheader from '@mui/material/ListSubheader';
import "./Location.css";
import DropDown from "../../Components/DropDown/DropDown"





export default function Location() {
  const [route ,setRoute]=useState("DRIVING")

  const navigate=useNavigate()

  const goBack=()=>{
    navigate(-1)
  }

  const handleChangeRoute=(val)=>{
    setRoute(val)
  }

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  

  const origin = { lat: 9.0969, lng: 7.2228 }; // Replace with your origin coordinates
  const destination = { lat: 9.0787, lng: 7.4702 }; // Replace with your destination coordinates



  useEffect(()=>{
    

  },[route])

  
  return (
    <div className='Location' >
          <ListSubheader sx={{ bgcolor: 'background.paper' }}>
              
              <Box
                      sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      p: 1,
                      m: 1,
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                      }}
                  >
                      
                          <IconButton  onClick={goBack} color="inherit" aria-label="open drawer" sx={{ mt:2 }}>
                              <NavigateBeforeIcon  />
                          </IconButton>
                          <Typography variant="button" display="block" gutterBottom   sx={{ mt:2 }}>
                             <DropDown handleChangeRouteP={handleChangeRoute}/>
                          </Typography>
                          <Typography variant="button" display="block" gutterBottom   sx={{ mt:2 }}>
                              Big joe
                          </Typography>
                          
                          
              </Box>
          
          </ListSubheader>

            <div className='LocationContainer'>
                <Box   
                sx={{
                height: "85vh",
                display: "flex",
                flexDirection: "column",
                bgcolor: "grey.200",
                }}>

                  <Box  className="mapContainer"  sx={{ flexGrow: 1, p: 2}} style={{ height: '100%', width: '90%' }}>
                    
                    <MapContainer routeP={route} origin={origin} destination={destination} />

                  </Box>
            
                </Box>
            </div>
              
    </div>
  )
}




