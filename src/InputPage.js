import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Input from "@mui/material/Input";
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

var buttonStyle  = {
  backgroundColor: '#000',
  color:'#fff'
}

var  boxStyle = {
  paddingTop: '150px',
  fontFamily: 'helveticaneue,helvetica neue,Helvetica,Arial,sans-serif',
  }

  var  stackStyle = {

    paddingTop: '5px',
    paddingLeft: '550px',
    fontFamily: 'helveticaneue,helvetica neue,Helvetica,Arial,sans-serif',
      marginBottom:'100px',
    }

export default function InputPage()  {

  const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
    const [value, setValue] = React.useState('hg18');

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };


    return (
      <Box
      style={boxStyle}
     component="form"
   >
   <div>
   <FormControl fullWidth sx={{width: 180,
        maxWidth: '100%',}} variant="standard">
   <FormLabel component="legend">Genome Build</FormLabel>
  <RadioGroup
    aria-label="position"
    name="controlled-radio-buttons-group"
    value={value}
    defaultValue="hg18"
    onChange={handleChange}
  >
    <FormControlLabel value="hg18" control={<Radio />} label="hg18" />
    <FormControlLabel value="hg19" control={<Radio />} label="hg19" />
  </RadioGroup>
</FormControl>
  <br/>
  <br/>
  <br/>
  <br/>
   <FormControl fullWidth sx={{width: 500,
        maxWidth: '100%',}} variant="standard">

          <Input placeholder="enter file url"  />
            </FormControl>
            or <Button style={buttonStyle}variant="contained">Choose File</Button>
          <br/>
          <br/>
          <FormControl fullWidth sx={{width: 500,
               maxWidth: '100%',}} variant="standard">
          <Input placeholder="enter index file url"  />
        </FormControl>
        or <Button style={buttonStyle} variant="contained">Choose File</Button>
        <br/>
        <br/>
        <FormControl fullWidth sx={{width: 500,
             maxWidth: '100%',}} variant="standard">
        <Input placeholder="enter annotation file url"  />
      </FormControl>
      or <Button style={buttonStyle} variant="contained">Choose File</Button>
     </div>
     <br/>
     <div>
   <Stack spacing={2} direction="row" style={stackStyle}>
      <Button style={buttonStyle} variant="contained">Submit</Button>
      <Button style={buttonStyle} variant="contained">Reset</Button>
      <Button style={buttonStyle} variant="contained">Demo</Button>
    </Stack>
    </div>
     </Box>
    );
  }
