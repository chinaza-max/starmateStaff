import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function BasicSelect(props) {
  const [age, route] = React.useState('')

  const handleChange = (event) => {
    route(event.target.value)
    props.handleChangeRouteP(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>through</InputLabel>
        <Select labelId='demo-simple-select-label' id='demo-simple-select' value={age} label='through' onChange={handleChange}>
          <MenuItem value={'DRIVING'}>DRIVING</MenuItem>
          <MenuItem value={'WALKING'}>WALKING</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
