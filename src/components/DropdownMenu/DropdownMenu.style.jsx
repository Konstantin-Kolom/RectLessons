import styled from '@emotion/styled';

import {
  //   Menu,
  //   MenuList,
  MenuButton as ReachMenuButton,
  MenuItem as ReachMenuItem,
  //   MenuLink,
} from '@reach/menu-button';

export const MenuButton = styled(ReachMenuButton)`
  background-color: blue;
  color: white;

  &[aria-expanded='true'] {
    background-color: white;
    color: red;
  }
`;

export const MenuItem = styled(ReachMenuItem)`
  display: flex;
  align-items: center;

  &[data-selected] {
    background-color: white;
    color: green;
  }

  svg {
    margin-right: 10px;
  }
`;
