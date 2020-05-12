import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CalendarEntry from './CalendarEntry';
import DateGenerator from './modules/DateGenerator';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
    marginTop: 50,
  },
  title: {
    margin: '0 auto',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  month: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  modal: {
    width: 300,
    height: 400,
    backgroundColor: 'white',
  }
}))

function getModalStyle() {
  const top = 5
  const left = 5

  return {
    margin: 'auto',
  };
}



const Calendar = () => {
  const currentDate = new Date();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [modalOpen, setModalOpen] = useState(false)
  const [modalStyle] = useState(getModalStyle)
  const classes = useStyles();
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

  const clickModal = () => {
    setModalOpen(true)
  }

  const close = () => {
    setModalOpen(false)
  }

  const body = (
    <div style={modalStyle} className={classes.modal}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

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
              <CalendarEntry date={dayOfWeek} clickFn={clickModal}/>
            )
          }
        })}
      </React.Fragment>
    );
  }

  return (
    <Typography component="div">
      <Modal open={modalOpen} onClose={close}>
        {body}
      </Modal>
      <Container maxWidth="lg" className={classes.root}>
        <div className={classes.title}>
          <Button onClick={backMonth} variant="contained" color="primary">back</Button>
          <div className={classes.month}>
            {MonthCalendar.currentMonth}{' '}{year}
          </div>
          <Button onClick={forwardMonth} variant="contained" color="primary">forward</Button>
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
