import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  backgroundContainer: {
    height: 600,
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: 'linear-gradient(to bottom right, #e58668, #ffcc00);',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundOuter: {
    height: 20,
    width: 20,
    animation: `$leftRight infinite ${theme.transitions.easing.sharp}`,
  },
  backgroundInner: {
    height: 200,
    width: 200,
    position: 'absolute',
    animation: `$upDown 1500ms infinite ${theme.transitions.easing.easeInOut}`,
    animationDirection: 'alternate-reverse',
    borderRadius: '100%',
    opacity: 0.08,
  },
  "@keyframes leftRight": {
    "0%": {
      transform: "translateX(-2000%)"
    },
    "100%": {
      transform: "translateX(10000%)"
    },
  },
  "@keyframes upDown": {
    "0%": {
      transform: "translateY(-50%)"
    },
    "50%": {
      transform: "translateY(0)"
    },
    "100%": {
      transform: "translateY(-50%)"
    }
  },
}));

const TalkToUsBackground = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.backgroundContainer}>
    {(new Array(100).fill(0)).map((i, j) => {
      let duration = Math.random() * (20) + 15;
      return (<div 
        className={classes.backgroundOuter}
        style={{    
          position: 'absolute',
          left: Math.random() * (5000) - 3000,
          top: Math.random() * (600),
          animationDuration: `${duration}s`,
        }}>
        <div className={classes.backgroundInner} 
          style={{
            animationDuration: `${duration / 8}s`,
            backgroundColor: ['#df6843', 'yellow', 'orange'][Math.floor(Math.random() * 3)]
          }}/>
      </div>)
    })}
    {props.children}
    </div>
  )
}

export default TalkToUsBackground
