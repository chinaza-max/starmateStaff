import React from 'react'
import './CardProject.css'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import MDatePicker from '../../Components/MDatePicker/MDatePicker'
import Alert from '@mui/material/Alert'
import { useNavigate } from 'react-router-dom'

const bull = (
  <Box component='span' sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
)

export default function CardProject(props) {
  const navigate = useNavigate()

  const gotoDetails = () => {
    navigate('/Project/Details')
  }

  return (
    <div className='CardProject'>
      {props.typeP === 'Active' ? (
        <>
          <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
            <CardContent>
              <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                Alex Morrison
              </Typography>
              <Typography sx={{ mb: 1.5 }} level='body-sm' fontWeight='lg'>
                Cleaning
              </Typography>

              <Box
                className='myBox'
                severity='info'
                sx={{
                  bgcolor: 'rgb(229, 246, 253)',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 }
                }}
              >
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Date
                  </Typography>
                  <Typography fontWeight='lg'>10/31/2023</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Pay out
                  </Typography>
                  <Typography fontWeight='lg'>₦ 9000</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Type
                  </Typography>
                  <Typography fontWeight='lg'>{props.typeP}</Typography>
                </div>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant='outlined' onClick={gotoDetails}>
                  View
                </Button>
                <Button variant='contained'>Clock in</Button>
              </Box>
            </CardContent>
          </Card>

          <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
            <CardContent>
              <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                Alex Morrison
              </Typography>
              <Typography sx={{ mb: 1.5 }} level='body-sm' fontWeight='lg'>
                Cleaning
              </Typography>

              <Box
                className='myBox'
                severity='info'
                sx={{
                  bgcolor: 'rgb(229, 246, 253)',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 }
                }}
              >
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Date
                  </Typography>
                  <Typography fontWeight='lg'>10/31/2023</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Pay out
                  </Typography>
                  <Typography fontWeight='lg'>₦ 9000</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Type
                  </Typography>
                  <Typography fontWeight='lg'>{props.typeP}</Typography>
                </div>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant='outlined' onClick={gotoDetails}>
                  View
                </Button>
                <Button variant='contained'>Clock in</Button>
              </Box>
            </CardContent>
          </Card>

          <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
            <CardContent>
              <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                Alex Morrison
              </Typography>
              <Typography sx={{ mb: 1.5 }} level='body-sm' fontWeight='lg'>
                Cleaning
              </Typography>

              <Box
                className='myBox'
                severity='info'
                sx={{
                  bgcolor: 'rgb(229, 246, 253)',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 }
                }}
              >
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Date
                  </Typography>
                  <Typography fontWeight='lg'>10/31/2023</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Pay out
                  </Typography>
                  <Typography fontWeight='lg'>₦ 9000</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Type
                  </Typography>
                  <Typography fontWeight='lg'>{props.typeP}</Typography>
                </div>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant='outlined' onClick={gotoDetails}>
                  View
                </Button>
                <Button variant='contained'>Clock in</Button>
              </Box>
            </CardContent>
          </Card>

          <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
            <CardContent>
              <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                Alex Morrison
              </Typography>
              <Typography sx={{ mb: 1.5 }} level='body-sm' fontWeight='lg'>
                Cleaning
              </Typography>

              <Box
                className='myBox'
                severity='info'
                sx={{
                  bgcolor: 'rgb(229, 246, 253)',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 }
                }}
              >
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Date
                  </Typography>
                  <Typography fontWeight='lg'>10/31/2023</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Pay out
                  </Typography>
                  <Typography fontWeight='lg'>₦ 9000</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Type
                  </Typography>
                  <Typography fontWeight='lg'>{props.typeP}</Typography>
                </div>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant='outlined' onClick={gotoDetails}>
                  View
                </Button>
                <Button variant='contained'>Clock in</Button>
              </Box>
            </CardContent>
          </Card>

          {props.dataP.length === 0 ? (
            <div className='infor'>
              <Alert severity='info'>YOU HAVE NO ACTIVE PROJECT</Alert>
            </div>
          ) : (
            ''
          )}
        </>
      ) : props.typeP === 'Pending' ? (
        <>
          <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
            <CardContent>
              <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                Alex Morrison
              </Typography>
              <Typography sx={{ mb: 1.5 }} level='body-sm' fontWeight='lg'>
                Cleaning
              </Typography>

              <Box
                className='myBox'
                severity='info'
                sx={{
                  bgcolor: 'rgb(229, 246, 253)',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 }
                }}
              >
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Date
                  </Typography>
                  <Typography fontWeight='lg'>10/31/2023</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Pay out
                  </Typography>
                  <Typography fontWeight='lg'>₦ 9000</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Type
                  </Typography>
                  <Typography fontWeight='lg'>{props.typeP}</Typography>
                </div>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant='outlined' onClick={gotoDetails}>
                  View
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
            <CardContent>
              <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                Alex Morrison
              </Typography>
              <Typography sx={{ mb: 1.5 }} level='body-sm' fontWeight='lg'>
                Cleaning
              </Typography>

              <Box
                className='myBox'
                severity='info'
                sx={{
                  bgcolor: 'rgb(229, 246, 253)',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 }
                }}
              >
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Date
                  </Typography>
                  <Typography fontWeight='lg'>10/31/2023</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Pay out
                  </Typography>
                  <Typography fontWeight='lg'>₦ 9000</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Type
                  </Typography>
                  <Typography fontWeight='lg'>{props.typeP}</Typography>
                </div>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant='outlined' onClick={gotoDetails}>
                  View
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
            <CardContent>
              <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                Alex Morrison
              </Typography>
              <Typography sx={{ mb: 1.5 }} level='body-sm' fontWeight='lg'>
                Cleaning
              </Typography>

              <Box
                className='myBox'
                severity='info'
                sx={{
                  bgcolor: 'rgb(229, 246, 253)',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 }
                }}
              >
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Date
                  </Typography>
                  <Typography fontWeight='lg'>10/31/2023</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Pay out
                  </Typography>
                  <Typography fontWeight='lg'>₦ 9000</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Type
                  </Typography>
                  <Typography fontWeight='lg'>{props.typeP}</Typography>
                </div>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant='outlined' onClick={gotoDetails}>
                  View
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
            <CardContent>
              <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                Alex Morrison
              </Typography>
              <Typography sx={{ mb: 1.5 }} level='body-sm' fontWeight='lg'>
                Cleaning
              </Typography>

              <Box
                className='myBox'
                severity='info'
                sx={{
                  bgcolor: 'rgb(229, 246, 253)',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 }
                }}
              >
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Date
                  </Typography>
                  <Typography fontWeight='lg'>10/31/2023</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Pay out
                  </Typography>
                  <Typography fontWeight='lg'>₦ 9000</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Type
                  </Typography>
                  <Typography fontWeight='lg'>{props.typeP}</Typography>
                </div>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant='outlined' onClick={gotoDetails}>
                  View
                </Button>
              </Box>
            </CardContent>
          </Card>

          {props.dataP.length === 0 ? (
            <div className='infor'>
              <Alert severity='info'>YOU HAVE NO PENDING PROJECT</Alert>
            </div>
          ) : (
            ''
          )}
        </>
      ) : (
        <>
          <div className='MdatePicker'>
            <MDatePicker className='datePicker' />
          </div>

          <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
            <CardContent>
              <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                Alex Morrison
              </Typography>
              <Typography sx={{ mb: 1.5 }} level='body-sm' fontWeight='lg'>
                Cleaning
              </Typography>

              <Box
                className='myBox'
                severity='info'
                sx={{
                  bgcolor: 'rgb(229, 246, 253)',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 }
                }}
              >
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Date
                  </Typography>
                  <Typography fontWeight='lg'>10/31/2023</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Pay out
                  </Typography>
                  <Typography fontWeight='lg'>₦ 9000</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Type
                  </Typography>
                  <Typography fontWeight='lg'>{props.typeP}</Typography>
                </div>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant='outlined' onClick={gotoDetails}>
                  View
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
            <CardContent>
              <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                Alex Morrison
              </Typography>
              <Typography sx={{ mb: 1.5 }} level='body-sm' fontWeight='lg'>
                Cleaning
              </Typography>

              <Box
                className='myBox'
                severity='info'
                sx={{
                  bgcolor: 'rgb(229, 246, 253)',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 }
                }}
              >
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Date
                  </Typography>
                  <Typography fontWeight='lg'>10/31/2023</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Pay out
                  </Typography>
                  <Typography fontWeight='lg'>₦ 9000</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Type
                  </Typography>
                  <Typography fontWeight='lg'>{props.typeP}</Typography>
                </div>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant='outlined' onClick={gotoDetails}>
                  View
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
            <CardContent>
              <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                Alex Morrison
              </Typography>
              <Typography sx={{ mb: 1.5 }} level='body-sm' fontWeight='lg'>
                Cleaning
              </Typography>

              <Box
                className='myBox'
                severity='info'
                sx={{
                  bgcolor: 'rgb(229, 246, 253)',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 }
                }}
              >
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Date
                  </Typography>
                  <Typography fontWeight='lg'>10/31/2023</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Pay out
                  </Typography>
                  <Typography fontWeight='lg'>₦ 9000</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Type
                  </Typography>
                  <Typography fontWeight='lg'>{props.typeP}</Typography>
                </div>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant='outlined' onClick={gotoDetails}>
                  View
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card className='CardProjectContainer cards' sx={{ mb: 1.5 }}>
            <CardContent>
              <Typography variant='h5' component='div' fontSize='xl' fontWeight='lg'>
                Alex Morrison
              </Typography>
              <Typography sx={{ mb: 1.5 }} level='body-sm' fontWeight='lg'>
                Cleaning
              </Typography>

              <Box
                className='myBox'
                severity='info'
                sx={{
                  bgcolor: 'rgb(229, 246, 253)',
                  borderRadius: 'sm',
                  p: 1.5,
                  my: 1.5,
                  display: 'flex',
                  gap: 2,
                  '& > div': { flex: 1 }
                }}
              >
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Date
                  </Typography>
                  <Typography fontWeight='lg'>10/31/2023</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Pay out
                  </Typography>
                  <Typography fontWeight='lg'>₦ 9000</Typography>
                </div>
                <div>
                  <Typography level='body-xs' fontWeight='lg'>
                    Type
                  </Typography>
                  <Typography fontWeight='lg'>{props.typeP}</Typography>
                </div>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5, '& > button': { flex: 1 } }}>
                <Button variant='outlined'>View</Button>
              </Box>
            </CardContent>
          </Card>

          {props.dataP.length === 0 ? (
            <div className='infor'>
              <Alert severity='info'>YOU HAVE NO COMPLETED PROJECT</Alert>
            </div>
          ) : (
            <div className='pagination'>
              <Pagination count={10} color='primary' />
            </div>
          )}
        </>
      )}
    </div>
  )
}
