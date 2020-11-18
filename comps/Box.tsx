import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
background: var(--background);
border: 1px solid var(--border);
`;

const Box = ({ children }: {children: ReactNode}) => (
  <StyledBox>
    {children}
  </StyledBox>
);

export default Box;
