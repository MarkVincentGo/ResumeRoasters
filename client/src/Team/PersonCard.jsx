import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, makeStyles, Container, responsiveFontSizes } from '@material-ui/core';


const useStyles = makeStyles({
  container: {
    border: '1px solid black',
    display: 'flex',
    marginTop: 20
  },
  image: {
    height: '25rem',
    width: '25rem',
    backgroundImage: props => props.image,
    backgroundSize: 'cover',
  },
  description: {
    textAlign: 'center',
    fontSize: 20,
    width: '60%'
  }
})

const PersonCard = ({ position, name, image, description }) => {
  const classes = useStyles(image)
  return (
    <Typography component="div">
      <Container className={classes.container}>
          <Paper className={classes.image} elevation={7} />
          <Container className={classes.description}>
            <h3>{position} - {name}</h3>
            <p>{description}</p>
          </Container>
      </Container>
    </Typography>
  )
}

export default PersonCard
