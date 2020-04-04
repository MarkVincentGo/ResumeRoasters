import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 5000,
  },
  paper: {
    height: '25rem',
    width: '25rem',
    backgroundImage: props => props.image,
    backgroundSize: 'cover',
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={10}>
          {founders.map((value) => {
            const { position, name, description } = value;
            const imageStyles = useStyles(value)
            return (
              <Grid key={JSON.stringify(value)} item>
                <Paper className={imageStyles.paper} elevation={7} />
                <h3>{position} - {name}</h3>
              </Grid>
            )}
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

const founders = [
  {
    name: 'Scott Klinker',
    position: 'CEO',
    image: 'url(scottKlinker.JPEG)',
    description: `Hi my name is Scott Klinker. I am a recent graduate of UC Irvine\n
      and I am currently working as a Mechanical Engineer at Lockheed Martin.\n
      My hobbies include riding bikes, playing basketball and board games. Thanks \n
      for using our website and I look forward to roasting your resume!`,
  },
  {
    name: 'Mark Go',
    position: 'CTO',
    image: 'url(markGo.png)',
    description: `Hi my name is Mark Go. I graduated from UC Irvine with a degree in\n
      Biomedical Engineering and am currently working as a \n
      Software Engineer.`,
  },
  {
    name: 'William Jo',
    position: 'CFO',
    image: 'url(willJo.jpg)',
    description: `Hi my name is William Jo. I am currently pursuing a Ph.D. in\n
      Aerospace Engineering from UC Irvine. I love 3D printing.`,
  },
]