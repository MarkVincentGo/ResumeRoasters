import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Container, makeStyles, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.secondary.main,
    width: '100%',
    marginTop: 50,

  },
  inputTextRegular: {
    textAlign: 'center',
    width: '50ch',
    marginTop: 20,
  },
}))


const TalkToUs = () => {
  const classes = useStyles();
  return (
    <Typography component="div">
      <Container className={classes.container}>
        <h2>Talk to Us!</h2>
        <TextField
            label="Name"
            className={classes.inputTextRegular}
            onChange={(e) => handleChange('firstName', e.target)}
            variant="filled"
            />

        <br />
        <TextField
            label="Email"
            className={classes.inputTextRegular}
            onChange={(e) => handleChange('email', e.target)}
            variant="filled"
            />
        <TextField
            className={classes.inputTextRegular}
            label="Message"
            multiline
            rows={4}
            variant="filled"
            />
        <br/>
        <Button variant="contained" color="primary">Send</Button>
      </Container>
    </Typography>
  )
}

export default TalkToUs
