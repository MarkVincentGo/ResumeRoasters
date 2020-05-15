import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CalendarEntry from './CalendarEntry';
import DateGenerator from '../modules/DateGenerator';
import Modal from '@material-ui/core/Modal';
import CalendarChooseTime from './CalendarChooseTime';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
    marginTop: 30,
    width: 850,
  },
  title: {
    width: 500,
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  month: {
    fontWeight: 'bold',
    fontSize: 24,
  },
}))

const Calendar = ({ changeTime }) => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [modalOpen, setModalOpen] = useState(false);
  const [day, setDay] = useState(0)
  const classes = useStyles();
  let MonthCalendar = DateGenerator(year, month);

  const backMonth = () => {
    if (month === 0) {
      setMonth(11);
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

  const clickModal = (dayOfWeek) => {
    setModalOpen(true)
    setDay(dayOfWeek)
  }

  const close = () => {
    setModalOpen(false)
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
              <CalendarEntry
                date={{year, month, dayOfWeek}}
                clickFn={() => clickModal(dayOfWeek)}
                today={currentDate}
              />
            )
          }
        })}
      </React.Fragment>
    );
  }

  return (
    <Typography component="div">
      <Modal open={modalOpen} onClose={close}>
        <CalendarChooseTime changeTime={changeTime} date={{ month, year, day }} modalFn={setModalOpen}/>
      </Modal>

      <Container maxWidth="md" className={classes.root}>

        <div className={classes.title}>
          <IconButton color="primary" onClick={backMonth} size="medium">
            <NavigateBeforeIcon fontSize="large"/>
          </IconButton>
          <div className={classes.month}>
            {MonthCalendar.currentMonth}{' '}{year}
          </div>
          <IconButton color="primary" onClick={forwardMonth} size="medium">
            <NavigateNextIcon fontSize="large"/>
          </IconButton>
        </div>

        <Grid container spacing={0}>
          {MonthCalendar.calendar.map((week) => (
            <Grid container justify="center" item xs={12} spacing={0}>
              <FormRow week={week}/>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Typography>
  )
}

export default Calendar
