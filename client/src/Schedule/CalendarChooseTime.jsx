import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  modal: {
    width: 350,
    height: 400,
    backgroundColor: '#e1e1e1',
    margin: '10% auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    display: 'flex',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    height: 350,
    width: '95%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: '20px 0',
    
  },
  timeBox: {
    height: 50,
    width: '100%',
    borderRadius: 5,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const times = ['9:00am', '10:00am', '11:00am', '12:00am', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm']

const CalendarChooseTime = ({ changeTime, date, modalFn}) => {
  const classes = useStyles();

  const handleClickTime = (time) => {
    changeTime( date, time);
    modalFn(false)
  }

  return (
    <Typography component="div">
      <Container className={classes.modal}>
        {/* <FormControl className={classes.form}>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl> */}
        <Container className={classes.title}>Select Available Time Below</Container>
        <Container className={classes.form}>
          {times.map(time => (
            <Container className={classes.timeBox} onClick={() => handleClickTime(time)}>{time}</Container>
            ))}
        </Container>
      </Container>
    </Typography>
  )
}

export default CalendarChooseTime
