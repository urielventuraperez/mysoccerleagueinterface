import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles(theme=>({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    background: theme.palette.primary.light,
  },
  icon:{
    color:  theme.palette.secondary.main,
  }
}));

function BottomNavigationApp() {
  const classes = useStyles();
  const [value, setValue] = React.useState('posiciones');

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction className={classes.icon} label="Mejores" value="mejores" icon={<RestoreIcon />} />
      <BottomNavigationAction className={classes.icon} label="Goleadores" value="estadisticas" icon={<FavoriteIcon />} />
      <BottomNavigationAction className={classes.icon} label="Nearby" value="nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}

export default BottomNavigationApp;