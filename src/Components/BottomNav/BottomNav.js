import React,{ useState,useEffect} from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { Link, useLocation  } from "react-router-dom";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import GridViewIcon from '@mui/icons-material/GridView';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


export default function BottomNav() {
    const [value, setValue] =useState(0);
    const location = useLocation();


    useEffect(()=>{

        if(location.pathname==="/"){
            setValue(0)
        }
        else if(location.pathname==="/Project"){
            setValue(1)

        }
        else if(location.pathname==="/Transaction"){
            setValue(2)

        }
        
        /*
        else if(location.pathname){
            
        } else if(location.pathname){
            
        } else if(location.pathname){
            
        }*/
     
    },[value])


  return (

    <div className='BottomNav'>
        <Box   className="containerBottomNav" >
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    console.log(newValue)
                    setValue(newValue);
                }}
                >

                <BottomNavigationAction  label="Dashboard" icon={<GridViewIcon />} component={Link} to='/' />

                <BottomNavigationAction label="Project" icon={<LibraryBooksIcon />} component={Link} to='/Project'/>
                <BottomNavigationAction label="Transaction" icon={
                            <Badge badgeContent={3} color="error">
                               <ReceiptLongIcon />
                            </Badge>
                } component={Link} to='/Transaction'/>
                <BottomNavigationAction label="Report" icon={
                            <Badge badgeContent={3} color="error">
                                <SupervisedUserCircleIcon />
                            </Badge>
                } component={Link} to='/Report'/>
                <BottomNavigationAction label="Message" icon={
                            <Badge badgeContent={2} color="error">
                            <MailIcon />
                            </Badge>
                            } component={Link} to='/Message'/>
                </BottomNavigation>
            </Paper>
        </Box>
    </div>
  )
}
