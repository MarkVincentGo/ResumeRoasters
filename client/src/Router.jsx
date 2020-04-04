import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import WorkIcon from '@material-ui/icons/Work';
import BlackPage from './BlackPage';
import TeamPage from './TeamPage';
import Home from './Home';
import Calendar from './Calendar';




function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'rgb(245, 245, 245)',
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          textColor="primary"
        >
          <Tab label="Home" icon={<HomeIcon />} {...a11yProps(0)} />
          <Tab label="Team" icon={<GroupIcon />} {...a11yProps(2)} />
          <Tab label="Scheduling" icon={<EventIcon />} {...a11yProps(1)} />
          <Tab label="Careers" icon={<WorkIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Insert Resume Here
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TeamPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Scheduling Component
        <Calendar />
      </TabPanel>
      <TabPanel value={value} index={3}>
        We aren't hiring anyone LOL.
      </TabPanel>
    </div>
  );
}
