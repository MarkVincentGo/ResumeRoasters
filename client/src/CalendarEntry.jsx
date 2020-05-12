import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paperNotSelected  : {
    padding: theme.spacing(5),
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    height: 30,
    width: 30,
  },
  paperSelected: {
    padding: theme.spacing(5),
    textAlign: 'center',
    backgroundColor: theme.palette.secondary,
    height: 30,
    width: 30,
  },
  pastDate: {
    backgroundColor: '#c1c1c1',
    color: 'gray'
  },
  futureDate: {
    color: 'black'
  }
}))

const CalendarEntry = ({ date, clickFn, today }) => {
  const classes = useStyles()
  const [state, setState] = useState(false);
  let dayHasPassed = false;
  if (date) {
    const { year, month, dayOfWeek } = date
    const thisDate = new Date(year, month, dayOfWeek)
    console.log(thisDate, today)
    if (thisDate < today) {
      dayHasPassed = true;
    }
  }

  return (
    <Grid item xs={'auto'}>
      <Paper 
        className={[state ? classes.paperNotSelected : classes.paperSelected, 
          dayHasPassed ? classes.pastDate : classes.futureDate]}  
        onMouseEnter={() => {
          if (!dayHasPassed) {
            setState(true)
          }
        }} 
        onMouseLeave={() => setState(false)}
        square={state ? false : true}
        elevation={1}
        onClick={clickFn}
        >
          {date ? date.dayOfWeek : ''}
        </Paper>
    </Grid>
  )
}

export default CalendarEntry
