import React,{useState} from 'react'
import "./DashboadCard.css"
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import PendingIcon from '@mui/icons-material/Pending';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function DashboadCard() {
    const [completed,setCompleted]=useState(3)
    const [active,setActive]=useState(20)
    const [pending,setPending]=useState(4)
    const [money,setMoney]=useState(200)



    const iconArray = [{description:"JOB COMPLETED",Icon:StarOutlineIcon,count:completed,color:"green"}, {description:"ACTIVE JOB",Icon:NewspaperIcon,count:active,color:"blue"}, {description:"PENDING JOB",Icon:PendingIcon,count:pending,color:"purple"}, {description:"NGN",Icon:AccountBalanceWalletIcon,count:money,color:"#03332e"}];


  return (
    <div  className='DashboadCard'>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                {iconArray.map(({description,Icon,color, count}, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item style={{background:color}}>

                    <Grid style={{background:color}} container spacing={{ xs: 2, md: 3 }} columns={{ xs:12 , sm: 12, md: 12 }}>
                        <Grid item xs={5}  style={{background:color}} >
                            <Item style={{ boxShadow: 'none',background:color }}   >
                                <Icon className='icon'  />
                            </Item>
                        </Grid>
                        <Grid item xs={7} style={{background:color}}  >
                            <Item style={{ boxShadow: 'none',background:color }}>


                                    <span>
                                        {count+" "+ description}
                                    </span>
                                
                                
                                </Item>
                        </Grid>
                    </Grid>

                    </Item>
                    

                </Grid>
                ))}
            </Grid>
        </Box>
    </div>
  )
}
