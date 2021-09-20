// import ReachTooltip from '@reach/tooltip';
// import { StyleTooltip } from './Tooltip.styled';

import styled from '@emotion/styled';
import ReachTooltip from '@reach/tooltip';
import '@reach/tooltip/styles.css';

// export const Tooltip = ({ label, children }) => {
//   //   return <ReachTooltip label={label}>{children}</ReachTooltip>;
//   return <StyleTooltip label={label}>{children}</StyleTooltip>;
// };

export const Tooltip = styled(ReachTooltip)`
  background-color: blue;
  color: white;
  padding: 8px;
  margin-top: 4px;
`;
