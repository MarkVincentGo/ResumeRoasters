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
  paperSelected  : {
    padding: theme.spacing(5),
    textAlign: 'center',
    backgroundColor: theme.palette.secondary,
    height: 30,
    width: 30,
  },
}))

const CalendarEntry = ({ date }) => {
  const classes = useStyles()
  const [state, setState] = useState(false);

  return (
    <Grid item xs={'auto'} spacing={1}>
      <Paper className={state ? classes.paperNotSelected : classes.paperSelected} spacing={2} onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>{date}</Paper>
    </Grid>
  )
}

export default CalendarEntry
