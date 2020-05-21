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
  backgroundContainer: {
    height: 400,
    width: '100%',
    border: '1px solid black',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(to bottom right, #e58668, #ffcc00);'
  },
  backgroundOuter: {
    height: 20,
    width: 20,
    animation: `$leftRight 15000ms infinite ${theme.transitions.easing.sharp}`,
  },
  backgroundInner: {
    height: 20,
    width: 20,
    position: 'absolute',
    animation: `$upDown infinite ${theme.transitions.easing.easeInOut}`,
    borderRadius: '100%',
    opacity: 0.4,
  },
  "@keyframes leftRight": {
    "0%": {
      transform: "translateX(-12000%)"
    },
    "50%": {
      transform: "translateX(12000%)"
    },
    "100%": {
      transform: "translateX(-12000%)"
    }
  },
  "@keyframes upDown": {
    "0%": {
      transform: "translateY(-500%)"
    },
    "25%": {
      transform: "translateY(0)"
    },
    "50%": {
      transform: "translateY(-500%)"
    },
    "75%": {
      transform: "translateY(20000%)"
    },
    "100%": {
      transform: "translateY(-500%)"
    }
  },

}))




const TalkToUs = () => {
  const classes = useStyles();
  return (
    <Typography component="div">
      <div className={classes.backgroundContainer} 
       style={{

      }}>
        {(new Array(500).fill(0)).map(() => {
          let duration = Math.random() * (1) + 3
          return (<div 
            className={classes.backgroundOuter}
            style={{    
              position: 'absolute',
              left: Math.random() * (5000) - 2000,
              top: Math.random() * 500,
              animationDuration: `${duration}s`
            }}>
            <div className={classes.backgroundInner} 
              style={{
                animationDuration: `${duration}s`,
                backgroundColor: ['#df6843', 'yellow', 'orange'][Math.floor(Math.random() * 3)]
              }}/>
          </div>)
        })}
      </div>
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
