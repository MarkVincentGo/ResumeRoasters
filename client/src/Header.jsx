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
import FavoriteIcon from '@material-ui/icons/Favorite';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import { Link as RouterLink,  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import TeamPage from './TeamPage';
import Upload from './Upload';
import Schedule from './Schedule';
import Home from './Home';


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
      <Typography
        component="div"
        role="tabpanel"
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'rgb(245, 245, 245)',
  },
}));

function TabLink(props) {
  const { label, icon, primary, to, ...other } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <Tab component={renderLink} label={label} icon={icon} {...other}></Tab>
  );
}

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              textColor="primary"
              >
              <TabLink to="/" label="Home" icon={<HomeIcon />} />
              <TabLink to="/services" label="Services" icon={<WorkIcon />} />
              <TabLink to="/upload-resume" label="Send your resume" icon={<NoteAddIcon />} />
              <TabLink to="/schedule" label="Schedule Mock Interview" icon={<EventIcon />} />
              <TabLink to="/team" label="Team" icon={<GroupIcon />} />
              <TabLink to="/donate" label="Donations" icon={<FavoriteIcon />} />
              <TabLink to="/login" label="Login/signup" icon={<VpnKeyIcon />} />
            </Tabs>
        </AppBar>
        <Switch>
          <Route exact path="/schedule">
            <Home />
          </Route>
          <Route exact path="/services">
              Services
          </Route>
          <Route exact path="/upload-resume">
              <Upload />
          </Route>
          <Route exact path="/">
            <Schedule />
          </Route>
          <Route exact path="/team">
            <TeamPage />
          </Route>
          <Route exact path="/donate">
            We aren't hiring anyone LOL.
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
