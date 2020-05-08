import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CalendarEntry from './CalendarEntry';
import DateGenerator from './modules/DateGenerator';

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
      <Grid container spacing={1}>
        {MonthCalendar.map((week) => (
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
