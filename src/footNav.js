import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LanguageIcon from '@material-ui/icons/Language';
import PublicIcon from '@material-ui/icons/Public';
import TimelineIcon from '@material-ui/icons/Timeline';



 function FootNav({screenConfig}) {
  
  // const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
    
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className="bg-dark-dm position-absolute bottom-0 left-0 right-0"
    >
      <BottomNavigationAction label="Global Stats" icon={<LanguageIcon fontSize="large" />} className="text-light-dm " />
      <BottomNavigationAction label="Country Stats" icon={<PublicIcon fontSize="large" />} className="text-light-dm"/>
      <BottomNavigationAction label="Graphs" icon={<TimelineIcon fontSize="large" />} className="text-light-dm"/>
    </BottomNavigation>
  );
}

export default FootNav;
