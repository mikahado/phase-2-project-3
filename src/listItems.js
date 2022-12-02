import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import LightbulbRoundedIcon from '@mui/icons-material/LightbulbRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import ModelTrainingRoundedIcon from '@mui/icons-material/ModelTrainingRounded';
import EmojiObjectsRoundedIcon from '@mui/icons-material/EmojiObjectsRounded';
import TripOriginRoundedIcon from '@mui/icons-material/TripOriginRounded';
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <WindowRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        < AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="Creations" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AddBoxRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="New" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <HelpCenterRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved creations
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Creations" />
    </ListItemButton>
  </React.Fragment>
);