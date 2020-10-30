import styled from 'styled-components';
import ModType from '../types/modType';

const StyledDiv = styled.div`
display: flex;
flex-flow: column;
`;

const ModCard = (
  {
    mod: {
      name,
      description,
      images,
      tags,
      ludeonLink,
      workshopLink,
      timestampAdd,
      timestampUpdate,
    },
  }: {mod: ModType},
) => (
  <StyledDiv>
    <article>
      <h3>{name}</h3>
      <img src={images[0]} alt="mod" width="200" />
      <p>{description}</p>
    </article>
  </StyledDiv>
);

export default ModCard;
