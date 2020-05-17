import React from 'react';
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import { Typography, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  container: {
    height: 200,
    width: 400,
    marginTop: 120,
    textAlign: 'center',
    paddingTop: '2%'
  },
  scheduleButton: {
    width: '90%',
  }
}));

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const TimeConfirm = ({ dateSelected, timeSelected}) => {
  const classes = useStyles()

  const handleScheduleClick = () => {
    axios.post('/scheduleTime', {
      date: dateSelected,
      time: timeSelected,
    })
  }

  return (
    <Typography component="div">
      <Paper className={classes.container}>
        <h2>
          {!dateSelected ? 
          'Please Select Date' :
          `${months[dateSelected.month]}
          ${dateSelected.day}
          ${dateSelected.year}`
          }
        </h2>
        <h2>{`${timeSelected}`}</h2>
        <Button 
          className={classes.scheduleButton}
          variant="contained"
          color="secondary"
          onClick={handleScheduleClick}
        >Schedule</Button>
      </Paper>
    </Typography>
  )
}

export default TimeConfirm
