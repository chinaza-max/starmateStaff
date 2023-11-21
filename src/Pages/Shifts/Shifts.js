import React, { useRef, useEffect, useState } from 'react'
import './Shifts.css'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import IconButton from '@mui/material/IconButton'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import { useNavigate } from 'react-router-dom'
import ListSubheader from '@mui/material/ListSubheader'
import Typography from '@mui/material/Typography'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import Badge from '@mui/material/Badge'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MDatePicker from '../../Components/MDatePicker/MDatePicker'
import Pagination from '@mui/material/Pagination';
import { Snackbar } from '@mui/material';

export default function Shifts() {
  const [shift, setShift] = useState('')
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center'
  })

  const { vertical, horizontal, open } = state

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState })
  }

  function handleClose() {
    setState({ ...state, open: false })
  }
  const handleChange = (event) => {
    setShift(event.target.value)
  }
  const navigate = useNavigate()
  const currentShiftRef = useRef()
  const bodyRef = useRef()

  const handleDateChangeP = (value) => {
    console.log(value)
  }

  useEffect(() => {
    
  })

  const goBack = () => {
    navigate(-1)
  }
  const goToReportBack = () => {
    navigate('/Report')
  }
  return (
    <div className='Shifts'>
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
                borderRadius: 1
              }}
            >
              <IconButton onClick={goBack} color='inherit' aria-label='open drawer' sx={{ mt: 2 }}>
                <NavigateBeforeIcon />
              </IconButton>
              <Typography variant='button' display='block' gutterBottom sx={{ mt: 2 }}>
                Big joe(SHIFTS)
              </Typography>
              <Badge onClick={goToReportBack} badgeContent={4} color='error' sx={{ mt: 2 }}>
                Report
                <SupervisedUserCircleIcon />
              </Badge>
            </Box>
          </div>
        </ListSubheader>

        <div>
          <div>
            <Box
              sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'grey.200',
                m: '0 auto'
              }}
            >
              <Box className='scrollBoxRef' sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
                <div className='Body' ref={bodyRef}>
                  <div className='select'>
                    <div className='datePickerContainerPosition'>
                      <MDatePicker className='datePicker' handleDateChangeP={handleDateChangeP} />
                    </div>

                    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
                      <InputLabel id='demo-select-small-label'>Shift</InputLabel>
                      <Select labelId='demo-select-small-label' id='demo-select-small' value={shift} label='Shift' onChange={handleChange}>
                        <MenuItem value={10}>Next</MenuItem>
                        <MenuItem value={20}>All</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
                    <CardContent>
                      <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                        Finished
                      </Typography>
                      <hr />

                      <Box
                        className='myBox'
                        severity='info'
                        sx={{
                          borderRadius: 'sm',
                          p: 1.5,
                          my: 1.5,
                          display: 'flex',
                          gap: 2,
                          '& > div': { flex: 1 }
                        }}
                      >
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            Start Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09AM</Typography>
                        </div>
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            End Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09PM</Typography>
                        </div>
                      </Box>

                      <Alert
                        severity='success'
                        sx={{
                          my: 1
                        }}
                      >
                        <AlertTitle>Success</AlertTitle>
                        Check in ----<strong>02/04/2018- 09AM</strong>
                      </Alert>
                      <Alert
                        severity='success'
                        sx={{
                          my: 1
                        }}
                      >
                        <AlertTitle>Success</AlertTitle>
                        Check out ----<strong>02/04/2018- 09PM</strong>
                      </Alert>

                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1.5,
                          '& > button': { flex: 1 }
                        }}
                      >
                        <Button
                          variant='outlined'
                          onClick={handleClick({
                            vertical: 'top',
                            horizontal: 'right'
                          })}
                        >
                          Check in
                        </Button>
                        <Button
                          variant='contained'
                          onClick={handleClick({
                            vertical: 'top',
                            horizontal: 'right'
                          })}
                        >
                          Check out
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
                    <CardContent>
                      <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                        Current
                      </Typography>
                      <hr />

                      <Box
                        className='myBox'
                        severity='info'
                        sx={{
                          borderRadius: 'sm',
                          p: 1.5,
                          my: 1.5,
                          display: 'flex',
                          gap: 2,
                          '& > div': { flex: 1 }
                        }}
                      >
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            Start Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09AM</Typography>
                        </div>
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            End Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09PM</Typography>
                        </div>
                      </Box>

                      <Alert
                        severity='success'
                        sx={{
                          my: 1
                        }}
                      >
                        <AlertTitle>Success</AlertTitle>
                        Check in ----<strong>02/04/2018- 09AM</strong>
                      </Alert>

                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1.5,
                          '& > button': { flex: 1 }
                        }}
                      >
                        <Button variant='outlined'>Check in</Button>
                        <Button variant='contained'>Check out</Button>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
                    <CardContent>
                      <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                        Finished
                      </Typography>
                      <hr />

                      <Box
                        className='myBox'
                        severity='info'
                        sx={{
                          borderRadius: 'sm',
                          p: 1.5,
                          my: 1.5,
                          display: 'flex',
                          gap: 2,
                          '& > div': { flex: 1 }
                        }}
                      >
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            Start Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09AM</Typography>
                        </div>
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            End Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09PM</Typography>
                        </div>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1.5,
                          '& > button': { flex: 1 }
                        }}
                      >
                        <Button variant='outlined'>Check in</Button>
                        <Button variant='contained'>Check out</Button>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
                    <CardContent>
                      <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                        Finished
                      </Typography>
                      <hr />

                      <Box
                        className='myBox'
                        severity='info'
                        sx={{
                          borderRadius: 'sm',
                          p: 1.5,
                          my: 1.5,
                          display: 'flex',
                          gap: 2,
                          '& > div': { flex: 1 }
                        }}
                      >
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            Start Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09AM</Typography>
                        </div>
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            End Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09PM</Typography>
                        </div>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1.5,
                          '& > button': { flex: 1 }
                        }}
                      >
                        <Button variant='outlined'>Check in</Button>
                        <Button variant='contained'>Check out</Button>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
                    <CardContent>
                      <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                        Finished
                      </Typography>
                      <hr />

                      <Box
                        className='myBox'
                        severity='info'
                        sx={{
                          borderRadius: 'sm',
                          p: 1.5,
                          my: 1.5,
                          display: 'flex',
                          gap: 2,
                          '& > div': { flex: 1 }
                        }}
                      >
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            Start Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09AM</Typography>
                        </div>
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            End Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09PM</Typography>
                        </div>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1.5,
                          '& > button': { flex: 1 }
                        }}
                      >
                        <Button variant='outlined'>Check in</Button>
                        <Button variant='contained'>Check out</Button>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
                    <CardContent>
                      <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                        Finished
                      </Typography>
                      <hr />

                      <Box
                        className='myBox'
                        severity='info'
                        sx={{
                          borderRadius: 'sm',
                          p: 1.5,
                          my: 1.5,
                          display: 'flex',
                          gap: 2,
                          '& > div': { flex: 1 }
                        }}
                      >
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            Start Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09AM</Typography>
                        </div>
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            End Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09PM</Typography>
                        </div>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1.5,
                          '& > button': { flex: 1 }
                        }}
                      >
                        <Button variant='outlined'>Check in</Button>
                        <Button variant='contained'>Check out</Button>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
                    <CardContent>
                      <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                        Finished
                      </Typography>
                      <hr />

                      <Box
                        className='myBox'
                        severity='info'
                        sx={{
                          borderRadius: 'sm',
                          p: 1.5,
                          my: 1.5,
                          display: 'flex',
                          gap: 2,
                          '& > div': { flex: 1 }
                        }}
                      >
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            Start Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09AM</Typography>
                        </div>
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            End Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09PM</Typography>
                        </div>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1.5,
                          '& > button': { flex: 1 }
                        }}
                      >
                        <Button variant='outlined'>Check in</Button>
                        <Button variant='contained'>Check out</Button>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
                    <CardContent>
                      <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                        Finished
                      </Typography>
                      <hr />

                      <Box
                        className='myBox'
                        severity='info'
                        sx={{
                          borderRadius: 'sm',
                          p: 1.5,
                          my: 1.5,
                          display: 'flex',
                          gap: 2,
                          '& > div': { flex: 1 }
                        }}
                      >
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            Start Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09AM</Typography>
                        </div>
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            End Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09PM</Typography>
                        </div>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1.5,
                          '& > button': { flex: 1 }
                        }}
                      >
                        <Button variant='outlined'>Check in</Button>
                        <Button variant='contained'>Check out</Button>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card ref={currentShiftRef} className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
                    <CardContent>
                      <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                        Current
                      </Typography>
                      <hr />

                      <Box
                        className='myBox'
                        severity='info'
                        sx={{
                          borderRadius: 'sm',
                          p: 1.5,
                          my: 1.5,
                          display: 'flex',
                          gap: 2,
                          '& > div': { flex: 1 }
                        }}
                      >
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            Start Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09AM</Typography>
                        </div>
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            End Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09PM</Typography>
                        </div>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1.5,
                          '& > button': { flex: 1 }
                        }}
                      >
                        <Button variant='outlined'>Check in</Button>
                        <Button variant='contained'>Check out</Button>
                      </Box>
                    </CardContent>
                  </Card>

                  <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
                    <CardContent>
                      <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                        Upcoming
                      </Typography>
                      <hr />

                      <Box
                        className='myBox'
                        severity='info'
                        sx={{
                          borderRadius: 'sm',
                          p: 1.5,
                          my: 1.5,
                          display: 'flex',
                          gap: 2,
                          '& > div': { flex: 1 }
                        }}
                      >
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            Start Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09AM</Typography>
                        </div>
                        <div>
                          <Typography variant='h6' level='body-xs' fontWeight='lg'>
                            End Date
                          </Typography>
                          <Typography fontWeight='lg'>10/31/2023- 09PM</Typography>
                        </div>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1.5,
                          '& > button': { flex: 1 }
                        }}
                      >
                        <Button variant='outlined'>Check in</Button>
                        <Button variant='contained'>Check out</Button>
                      </Box>
                    </CardContent>
                  </Card>

                  <div className='pagination'>
                    <Pagination count={10} color='primary' />
                  </div>
                </div>
              </Box>
            </Box>
          </div>
        </div>
      </React.Fragment>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} key={`${vertical},${horizontal}`} anchorOrigin={{ vertical, horizontal }}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }} variant='filled'>
          Checking successFull!
        </Alert>
      </Snackbar>
      
    </div>
  )
}
