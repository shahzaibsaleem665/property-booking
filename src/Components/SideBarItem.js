import React from 'react';
import { ListItem, ListItemText, ListItemIcon } from '@mui/material';

const SidebarItem = ({ onClick, icon, text }) => {
  return (
    <ListItem button onClick={onClick} className="custom__listItem">
      <ListItemIcon className="list__itemIcon">{icon}</ListItemIcon>
      <ListItemText primary={text} className="custom__listItemText" />
    </ListItem>
  );
};

export default SidebarItem;
