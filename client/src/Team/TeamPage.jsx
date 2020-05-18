import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'

import PersonCard from './PersonCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 'auto',
    marginTop: 50
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      {founders.map((value, i) => {
        const { position, name, description } = value;
        return (
          <PersonCard
            key={JSON.stringify(value)}
            position={position}
            name={name}
            image={value}
            description={description}
            order={i % 2}
          />
        )}
      )}
    </Container>
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