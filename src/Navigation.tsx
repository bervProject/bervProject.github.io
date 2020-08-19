import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const Navigation: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }


  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Projects"
        component={Link} to="/" value="recents" icon={<Icon>folder</Icon>} />
      <BottomNavigationAction component={Link} to="/maintainer" label="Maintainer" value="nearby" icon={<Icon>people</Icon>} />
      <BottomNavigationAction component={Link} to="/about" label="About Us" value="folder" icon={<Icon>help</Icon>} />
    </BottomNavigation>
  );
}

export default Navigation;
