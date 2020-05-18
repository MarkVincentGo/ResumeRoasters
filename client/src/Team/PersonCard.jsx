import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, makeStyles, Container, responsiveFontSizes } from '@material-ui/core';


const useStyles = makeStyles({
  container: {
    display: 'flex',
    marginTop: 20,
    height: '20rem',
    alignItems: 'center',
    padding: 25,
  },
  image: {
    height: '20rem',
    width: '20rem',
    backgroundImage: props => props.image,
    backgroundSize: 'cover',
  },
  description: {
    textAlign: 'center',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

const PersonCard = ({ position, name, image, description, order }) => {
  const classes = useStyles(image)
  return (
    <Typography component="div">
      <Paper className={classes.container} elevation={7}>
        {!order ?
          <>
            <Paper className={classes.image} elevation={7} />
            <Container className={classes.description}>
              <h3 style={{fontSize: 24}}>{name} | {position}</h3>
              <p style={{fontSize: 16}}>{description}</p>
            </Container> 
          </> :
          <>
            <Container className={classes.description}>
              <h3 style={{fontSize: 24}}>{name} | {position}</h3>
              <p style={{fontSize: 16}}>{description}</p>
            </Container>
            <Paper className={classes.image} elevation={7} />
          </>
        }
      </Paper>
    </Typography>
  )
}

export default PersonCard
