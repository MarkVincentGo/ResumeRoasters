import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  generalEntry: {
    padding: theme.spacing(5),
    textAlign: 'center',
    backgroundColor: 'white',
    height: 30,
    width: 30,
  },
  pastDate: {
    backgroundColor: '#c1c1c1',
    color: 'gray'
  },
  futureDate: {
    color: 'black',
    backgroundColor: theme.palette.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    }
  }
}))

const CalendarEntry = ({ date, clickFn, today }) => {
  const classes = useStyles()
  let dayHasPassed = false;
  if (date) {
    const { year, month, dayOfWeek } = date;
    const thisDate = new Date(year, month, dayOfWeek);
    thisDate.setDate(thisDate.getDate() + 1)
    if (thisDate < today) {
      dayHasPassed = true;
    }
  }

  return (
    <Grid item xs={'auto'}>
      <Paper 
        className={[classes.generalEntry, dayHasPassed || !date ? classes.pastDate : classes.futureDate]}  
        elevation={1}
        square
        onClick={dayHasPassed ? null : clickFn}
        >
          {date ? date.dayOfWeek : ''}
        </Paper>
    </Grid>
  )
}

export default CalendarEntry
