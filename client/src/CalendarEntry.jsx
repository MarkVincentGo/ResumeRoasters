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

const CalendarEntry = ({ date, clickFn }) => {
  const classes = useStyles()
  const [state, setState] = useState(false);

  return (
    <Grid item xs={'auto'}>
      <Paper 
        className={state ? classes.paperNotSelected : classes.paperSelected}  
        onMouseEnter={() => setState(true)} 
        onMouseLeave={() => setState(false)}
        square={state ? false : true}
        elevation={1}
        onClick={clickFn}
        >
          {date}
        </Paper>
    </Grid>
  )
}

export default CalendarEntry
