import {
  Menu,
  MenuList,
  //   MenuButton,
  //   MenuItem,
  //   MenuLink,
} from '@reach/menu-button';

import { MenuButton } from './DropdownMenu.style';
// import { DropdownMenuItem } from './DropdownMenuItem';

import '@reach/menu-button/styles.css';

export const DropdownMenuT = ({ children }) => {
  return (
    <Menu>
      <MenuButton>
        Actions <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList>{children}</MenuList>
    </Menu>
  );
};
