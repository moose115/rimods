import styled from 'styled-components';
import { useMods } from '../contexts/modsContext';
import Box from './Box';
import ModCard from './ModCard';
import ModPagination from './ModPagination';

const ResultsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  grid-area: results;
`;

const LoadingBox = styled(Box)`
  padding: 0.5em 1em;
  grid-area: results;
`;

const StyledDiv = styled.div`
  margin-bottom: 1em;
  display: grid;
  grid-template-columns: repeat(4, minmax(12em, 1fr));
  grid-column-gap: 0.5em;
  /* justify-content: space-around; */
  grid-row-gap: 10px;
`;

const ModResults = () => {
  const { mods, isLoading } = useMods();

  if (isLoading) {
    return (
      <ResultsContainer>
        <LoadingBox>Loading...</LoadingBox>
      </ResultsContainer>
    );
  }
  if (!mods || mods.length === 0) {
    return (
      <ResultsContainer>
        <LoadingBox>No mods found</LoadingBox>
      </ResultsContainer>
    );
  }
  return (
    <ResultsContainer>
      <StyledDiv>
        {mods.map((mod) => (
          <ModCard key={mod.id} mod={mod} />
        ))}
      </StyledDiv>
      {/* pagination */}
      <ModPagination />
    </ResultsContainer>
  );
};

/* <StyledDiv>
  {mods.map((mod, i) => (
    <ModCard mod={mod} key={`mod-${i}`} />
  ))}
</StyledDiv>; */

export default ModResults;
