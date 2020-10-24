import { useState } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
display: flex;
flex-flow: column;
`;

const ModResults = (
  { mods }: {mods: any[]},
) => (
  <StyledDiv>
    {
        mods.map((el) => <span>Lorem ipsum</span>)
      }
  </StyledDiv>
);

export default ModResults;
