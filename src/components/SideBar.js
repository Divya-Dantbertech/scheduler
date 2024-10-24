
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Badge } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <List>
        <ListItem button>
          <ListItemIcon>
            <FolderIcon /> {/* Folder icon */}
          </ListItemIcon>
          <ListItemText primary="Employees"  className="text-employees"/>
          <Badge badgeContent={10} className="badge-employees" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <FolderIcon /> {/* Same icon for drafts */}
          </ListItemIcon>
          <ListItemText primary="Drafts" className="text-drafts" />
          <Badge badgeContent={15} className="badge-drafts" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <FolderIcon /> {/* Same icon for emails */}
          </ListItemIcon>
          <ListItemText primary="Emails" className="text-emails" />
          <Badge badgeContent={12} className="badge-emails" />
        </ListItem>
      </List>


      <div className='side_nav_devider'></div>
      <div className="help-support">
        <span>Help and Support</span>
      </div>
    </div>
  );
};

export default Sidebar;
