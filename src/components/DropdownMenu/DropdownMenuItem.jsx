import //   Menu,
//   MenuList,
//   MenuButton,
//   MenuItem,
//   MenuLink,
'@reach/menu-button';

import { MenuItem } from './DropdownMenu.style';

export const DropdownMenuItem = ({ children }) => {
  return (
    <>
      <MenuItem>{children} </MenuItem>
    </>
  );
};
