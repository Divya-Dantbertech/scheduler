// import React from 'react';
// import { List, ListItem, ListItemText, Divider } from '@mui/material';


// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <List component="nav" aria-label="main mailbox folders">
//         <ListItem button>
//           <ListItemText primary="Employees" className="employees-text"/>
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="Drafts" className="drafts-text" />
//         </ListItem>
//         <ListItem button>
//           <ListItemText primary="Emails" className="emails-text"/>
//         </ListItem>
//       </List>
//       <Divider />
//       <div className="help-support">
//         <List component="nav">
//           <ListItem button>
//             <ListItemText primary="Help and Support" className="helps" />
//           </ListItem>
//         </List>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
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
