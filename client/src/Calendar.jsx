import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CalendarEntry from './CalendarEntry';
import DateGenerator from './modules/DateGenerator';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
    marginTop: 50,
  },
}))


const Calendar = () => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());
  let MonthCalendar = DateGenerator(year, month);

  const backMonth = () => {
    if (month === 0) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  const forwardMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1)
    }
  }

  function FormRow({ week }) {
    return (
      <React.Fragment>
        {week.map((dayOfWeek) => {
          if (dayOfWeek === 'X') {
            return (
              <CalendarEntry/>
              )
          } else {
            return (
              <CalendarEntry date={dayOfWeek}/>
            )
          }
        })}
      </React.Fragment>
    );
  }

  const classes = useStyles();
  return (
    <Typography component="div">
      <Container maxWidth="lg" className={classes.root}>
        <button onClick={backMonth}>back</button>
        {MonthCalendar.currentMonth}
        {year}
        <button onClick={forwardMonth}>forward</button>
      <Grid container spacing={1}>
        {MonthCalendar.calendar.map((week) => (
          <Grid container justify="center" item xs={12} spacing={1}>
            <FormRow week={week}/>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Typography>
  )
}

export default Calendar
