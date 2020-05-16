import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  container: {
    height: 200,
    width: 400,
    border: '1px solid black',
    marginTop: 120,
    textAlign: 'center',
  },
  scheduleButton: {
    width: '90%'
  }
})

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const TimeConfirm = ({ dateSelected, timeSelected}) => {
  const classes = useStyles()
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
        <Button className={classes.scheduleButton} variant="contained" color="primary">Schedule</Button>
      </Paper>
    </Typography>
  )
}

export default TimeConfirm
