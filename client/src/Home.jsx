import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    color: 'white',
    backgroundImage: 'url(fire.gif)',
    backgroundSize: 'contain',
  }
}));

const fui = {
  position: 'absolute',
  top: 0,
  right: 0,
  cursor: 'pointer',
  opacity: [0.0],
  filter: 'alpha(opacity=0)',
  fontSize: 300, 
  height: 200,
}

export default function ContainedButtons() {
  const classes = useStyles();

  const fileSelected = (event) => {
    console.log(event.target.files[0])
  }

  return (
    <div className={classes.root}>
      <Button variant="contained" className={classes.button}>
        SELECT FILE
        <input type="file" style={fui} onChange={fileSelected}/>
      </Button>
    </div>
  );
}