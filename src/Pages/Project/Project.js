import React,{useEffect} from 'react'

import "./Project.css"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CardProject from "../../Components/CardProject/CardProject"




export default function Project() {
    const [value, setValue] = React.useState('1');
    const [dataC, setDataC] = React.useState([1]);
    const [dataA, setDataA] = React.useState([]);
    const [dataP, setDataP] = React.useState([]);


    const handleChange = (event, newValue) => {
      setValue(newValue);
    };


  useEffect(()=>{

    let myDataPValue=localStorage.getItem("selectedNavProject")

    if(myDataPValue!==null&&myDataPValue!=="null"){
      setValue(myDataPValue)
      localStorage.setItem("selectedNavProject",null)
    }
  },[value])




  return (
    <div className='Project'>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Active" value="1" />
              <Tab label=" Pending" value="2" />
              <Tab label=" Completed" value="3" />
            </TabList>
          </Box>

          <TabPanel value="1" className='tab1'>
            <CardProject  typeP="Active"  dataP={dataA}/>
          </TabPanel>

          <TabPanel value="2"  > 
            <CardProject  typeP="Pending"   dataP={dataP}/>
          </TabPanel>

          <TabPanel value="3"  > 
            <CardProject  typeP="Completed"   dataP={dataC}/>
          </TabPanel>

        </TabContext>
      </Box>
    </div>
  )
}
//https://www.linkedin.com/pulse/ever-wondered-how-compile-odds-sports-betting-petar-leji%C4%87