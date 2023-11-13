import React from 'react'
import "./Transaction.css"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import MDatePicker from "../../Components/MDatePicker/MDatePicker"
import Alert from '@mui/material/Alert';


export default function Transaction() {


  const [transaction, setTransaction] = React.useState([1]);

  return (



    <div className='Transaction'>
            
            <div className='MdatePicker'>

              <MDatePicker className="datePicker"/>

            </div>

            <Card className="TransactionContainer cards"  sx={{ mb: 1.5 }}  >

            <CardContent>

                      <Typography variant="h5" component="div" fontSize="xl" fontWeight="lg">
                        ID
                      </Typography>
                      <Typography  sx={{ mb: 1.5 }}  level="body-sm" fontWeight="lg" >
                          222939399393939
                      </Typography>

                <Box className="myBox" severity="info"  sx={{
                bgcolor: 'rgb(229, 246, 253)',
                borderRadius: 'sm',
                p: 1.5,
                my: 1.5,
                display: 'flex',
                gap: 2,
                '& > div': { flex: 1 },
                }}>

                <div>
                <Typography level="body-xs" fontWeight="lg">
                    Date
                </Typography>
                <Typography fontWeight="lg">10/31/2023</Typography>
                </div>
                <div>
                <Typography level="body-xs" fontWeight="lg">
                  Type
                </Typography>
                <Typography fontWeight="lg">withdrawal</Typography>
                </div>
                <div>
                <Typography level="body-xs" fontWeight="lg">
                    Amount
                </Typography>
                <Typography fontWeight="lg">₦ 2000</Typography>
                </div>

                </Box >

                <Alert severity="warning">Penidng</Alert>


            </CardContent>
              
            </Card>

            <Card className="TransactionContainer cards"  sx={{ mb: 1.5 }}  >

            <CardContent>

                      <Typography variant="h5" component="div" fontSize="xl" fontWeight="lg">
                        ID
                      </Typography>
                      <Typography  sx={{ mb: 1.5 }}  level="body-sm" fontWeight="lg" >
                          222939399393939
                      </Typography>

                <Box className="myBox" severity="info"  sx={{
                bgcolor: 'rgb(229, 246, 253)',
                borderRadius: 'sm',
                p: 1.5,
                my: 1.5,
                display: 'flex',
                gap: 2,
                '& > div': { flex: 1 },
                }}>

                <div>
                <Typography level="body-xs" fontWeight="lg">
                    Date
                </Typography>
                <Typography fontWeight="lg">10/31/2023</Typography>
                </div>
                <div>
                <Typography level="body-xs" fontWeight="lg">
                  Type
                </Typography>
                <Typography fontWeight="lg">withdrawal</Typography>
                </div>
                <div>
                <Typography level="body-xs" fontWeight="lg">
                    Amount
                </Typography>
                <Typography fontWeight="lg">₦ 2000</Typography>
                </div>

                </Box >

                <Alert severity="success">SuccessFul</Alert>


            </CardContent>
              
            </Card>


            <Card className="TransactionContainer cards"  sx={{ mb: 1.5 }}  >

        <CardContent>

          <Typography variant="h5" component="div" fontSize="xl" fontWeight="lg">
            ID
          </Typography>
          <Typography  sx={{ mb: 1.5 }}  level="body-sm" fontWeight="lg" >
              222939399393939
          </Typography>

    <Box className="myBox" severity="info"  sx={{
    bgcolor: 'rgb(229, 246, 253)',
    borderRadius: 'sm',
    p: 1.5,
    my: 1.5,
    display: 'flex',
    gap: 2,
    '& > div': { flex: 1 },
    }}>

    <div>
    <Typography level="body-xs" fontWeight="lg">
        Date
    </Typography>
    <Typography fontWeight="lg">10/31/2023</Typography>
    </div>
    <div>
    <Typography level="body-xs" fontWeight="lg">
      Type
    </Typography>
    <Typography fontWeight="lg">withdrawal</Typography>
    </div>
    <div>
    <Typography level="body-xs" fontWeight="lg">
        Amount
    </Typography>
    <Typography fontWeight="lg">₦ 2000</Typography>
    </div>

    </Box >

    <Alert severity="warning">Penidng</Alert>


</CardContent>
  
</Card>

<Card className="TransactionContainer cards"  sx={{ mb: 1.5 }}  >

<CardContent>

          <Typography variant="h5" component="div" fontSize="xl" fontWeight="lg">
            ID
          </Typography>
          <Typography  sx={{ mb: 1.5 }}  level="body-sm" fontWeight="lg" >
              222939399393939
          </Typography>

    <Box className="myBox" severity="info"  sx={{
    bgcolor: 'rgb(229, 246, 253)',
    borderRadius: 'sm',
    p: 1.5,
    my: 1.5,
    display: 'flex',
    gap: 2,
    '& > div': { flex: 1 },
    }}>

    <div>
    <Typography level="body-xs" fontWeight="lg">
        Date
    </Typography>
    <Typography fontWeight="lg">10/31/2023</Typography>
    </div>
    <div>
    <Typography level="body-xs" fontWeight="lg">
      Type
    </Typography>
    <Typography fontWeight="lg">withdrawal</Typography>
    </div>
    <div>
    <Typography level="body-xs" fontWeight="lg">
        Amount
    </Typography>
    <Typography fontWeight="lg">₦ 2000</Typography>
    </div>

    </Box >

    <Alert severity="success">SuccessFul</Alert>


</CardContent>
  
</Card>

            {
                    transaction.length===0?
                        <div className='infor'>
                              <Alert severity="info">YOU HAVE NO TRANSACTION</Alert>
                        </div>
                    :
                    <div className='pagination'>
                      <Pagination count={10} color="primary" />
                    </div>
                }

    </div>
  )
}
