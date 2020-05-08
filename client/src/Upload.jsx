import React, { useState } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import {Container, Button, Typography} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    marginTop: 50,
  },
  button: {
    marginTop: 20,
    width: '57ch'
  },
  inputTextRegular: {
    width: '50ch',
  },
  inputTextPhone: {
    width: '23ch',
  },
  inputTextEmail: {
    width: '23ch',
    marginRight: '4ch',
  },
  select: {
    width: '50ch',
  }

}));

const fui = {
  position: 'absolute',
  top: 0,
  right: 0,
  cursor: 'pointer',
  opacity: 0,
  filter: 'alpha(opacity=1)',
  fontSize: 300, 
  height: 70,
  width: 116,
  border: '1px solid black'
}

export default function ContainedButtons() {
  const [inputs, updateInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eduLevel: '',
    major: '',
    resume: null,
  })

  const classes = useStyles();
  
  const handleChange = (field, target) => {
    const newInputs = {...inputs};

    if (field === 'resume') {
      const formData = new FormData()
      formData.append('resumePDF', target.files[0]);
      newInputs.resume = formData;
    } else {
      newInputs[field] = target.value
    }
    updateInputs(newInputs);
  }

  const handleSubmit = () => {
    const stringInputs = {...inputs};
    console.log(stringInputs)
    //delete stringInputs['resume'];
    axios.post('/upload', stringInputs)
    console.log(inputs.resume)
    axios.post('/resume',inputs.resume)
  }

  return (
    <Typography component="div">
      <Container maxWidth="sm" className={classes.root}>
          <h2>Tell us about Yourself</h2>
          <TextField
              label="First Name"
              id="standard-start-adornment"
              className={classes.inputTextRegular}
              onChange={(e) => handleChange('firstName', e.target)}
              />
          <br />
          <TextField
              label="Last Name"
              id="standard-start-adornment"
              className={classes.inputTextRegular}
              onChange={(e) => handleChange('lastName', e.target)}
              />
          <br />
          <TextField
              label="Email"
              id="standard-start-adornment"
              className={classes.inputTextEmail}
              onChange={(e) => handleChange('email', e.target)}
              />
          <TextField
              label="Phone"
              id="standard-start-adornment"
              className={classes.inputTextPhone}
              onChange={(e) => handleChange('phone', e.target)}
              />
          <br/>
          <FormControl>
            <InputLabel id="education-level-label">Select Education Level</InputLabel>
            <Select
              labelId="education-level-label"
              id="edulcation-level"
              className={classes.select}
              label="Select Education Level"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>High School</MenuItem>
                <MenuItem value={20}>Frosh-Soph College</MenuItem>
                <MenuItem value={30}>Junior-Senior College</MenuItem>
            </Select>
           </FormControl>
            <br />
            <FormControl>
            <InputLabel id="education-level-label">Major/Area of Interest</InputLabel>
            <Select
              labelId="education-level-label"
              id="edulcation-level"
              className={classes.select}
              label="Select Education Level"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Business</MenuItem>
                <MenuItem value={20}>Biology</MenuItem>
                <MenuItem value={30}>Engineering</MenuItem>
            </Select>
           </FormControl>
           <br />
          <Button variant="contained" color="primary" className={classes.button} >
            SELECT RESUME
            <input type="file" style={fui} onChange={(e) => handleChange('resume', e.target)}/>
          </Button> 
          <Button className={classes.button} color="primary" variant="outlined" onClick={handleSubmit}>SUBMIT</Button>
      </Container>
    </Typography>
  
  );
}