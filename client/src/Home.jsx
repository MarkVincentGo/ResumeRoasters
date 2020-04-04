import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const fu = {
    width: 116,
    height: 50,
    padding: [6, 16],
    borderRadius: 4,
    letterSpacing: '0.02857em',
    position: 'relative',
    overflow: 'hidden', /* and other things to make it pretty */
    border: '1px solid black'
}

const fui = {
  position: 'absolute',
  top: 0,
  right: 0, /* not left, because only the right part of the input seems to
               be clickable in some browser I can't remember */
  cursor: 'pointer',
  opacity: [0.0],
  filter: 'alpha(opacity=0)', /* and all the other old opacity stuff you
                               want to support */
  fontSize: 300, /* wtf, but apparently the most reliable way to make
                       a large part of the input clickable in most browsers */
  height: 200,
}

export default function ContainedButtons() {
  const classes = useStyles();

  const fileSelected = (event) => {
    console.log(event.target.files[0])
  }

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        SELECT FILE
        <input type="file" style={fui} onChange={fileSelected}/>
      </Button>
    </div>
  );
}