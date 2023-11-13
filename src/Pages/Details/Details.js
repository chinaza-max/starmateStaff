import "./Details.css"
import React,{useEffect} from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useNavigate ,Link } from "react-router-dom";
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import ProjectDetailsBody from '../../Components/ProjectDetailsBody/ProjectDetailsBody';



export default function Details() {
  const navigate=useNavigate()

  const goBack=()=>{
    navigate(-1)
  }

  const goToShifts=()=>{
    navigate("/Project/Details/Shift")
  }




  useEffect(()=>{

  },[])

  
  return (
    <div className='Details'>
    <React.Fragment>
      <CssBaseline />

        <ListSubheader sx={{ bgcolor: 'background.paper' }}>
         
            <div style={{ width: '100%' }}>
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
                            Big joe
                        </Typography>
                        <Badge badgeContent={4} color="error"  sx={{ mt:2 }}>
                            Report<SupervisedUserCircleIcon />
                        </Badge>
                    
                </Box>

            </div>

        </ListSubheader>

        <div>
            <div>
                <Box   
                sx={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                bgcolor: "grey.200",
                m:"0 auto" 
                }}>

                <Box className="scrollBoxRef" sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>

                    <div className="buttons">
                        <Box  sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>

                            <span >
                                <Button variant="outlined" size="medium" onClick={goToShifts}>
                                    View Shift
                                </Button>
                            </span>
                        
                            <span >
                                <Button variant="outlined" size="medium">
                                    Safety .C.
                                </Button>
                            </span>
        
                        </Box>

                        {}
                        <Box  sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' , marginTop: '10px' }}>

                            <span >
                                <Button variant="outlined" size="medium" onClick={goToShifts} style={{width:"110px",color:"white",background:"green"}}>
                                    ACCEPT
                                </Button>
                            </span>
                        
                            <span >
                                <Button variant="outlined" size="medium" style={{width:"110px",color:"white",background:"red"}}>
                                    DECLINE
                                </Button>
                            </span>
        
                        </Box>
                    </div>
                       
                    <div className="Body">
                        <ProjectDetailsBody/>
                    </div>


                    <div className="ViewSiteLocation">
                        < Link to="location">
                        <Button variant="contained" disableElevation>
                            View site location
                        </Button>
                        </Link>
                        
                    </div>

                </Box>
            
                </Box>
            </div>
        </div>
    

    </React.Fragment>
    </div>
  )
}
