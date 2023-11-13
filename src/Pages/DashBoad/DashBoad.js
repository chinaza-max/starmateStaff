import React, {useState} from 'react'
import  "./DashBoad.css"
import Alert from '@mui/material/Alert';
import DashboadCard from "../../Components/DashboadCard/DashboadCard"
import CardProject from "../../Components/CardProject/CardProject"
import img from "../../Assets/giphy.gif"
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


export default function DashBoad() {
  const [dataP, setDataP] = useState([7]);





  const setNavToShow=()=>{
      localStorage.setItem("selectedNavProject","2")
  }

  return (
    <div  className='DashBoad'>
        <div  className='section1'>

          <img src={img} alt="Animated GIF" />

          <Alert severity="success" className='available'>Available</Alert>

          <div className='Card'>
              <DashboadCard/>
          </div>
        </div>
        <div  className='section2'>



          <div  className='Containersection2'>
          <Alert className='PendingProject' icon={false} severity="success">
              Pending Project
        </Alert>
            <CardProject  typeP="Pending"   dataP={dataP}/>
              {
                  dataP.length===0?
                  ''
                  :
                  <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}  >
                      <Link style={{textAlign:"center",width:"100%"}} onClick={setNavToShow} to={'/project'}>View More </Link>
                  </Box>              
              }
          </div>

        </div>
    </div>
  )
}


