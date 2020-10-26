import styled from 'styled-components';
import ModType from '../types/modType';

const StyledDiv = styled.div`
display: flex;
flex-flow: column;
`;

const mockupMod = {
  name: 'Rimorld mod',
  description: 'Very generic description of very generic mod',
  images: ['https://picsum.photos/1920/1080', 'https://picsum.photos/1920/1080'],
  ludeonLink: '#',
  workshopLink: '#',
  tags: [{ name: 'gameplay', type: 'category' }, { name: 'creatures', type: 'category' }, { name: '1.2', type: 'version' }],
} as ModType;

const ModResults = (
  { mods }: {mods?: ModType[]},
) => (
  <StyledDiv>
    {
      mods.map((el) => (
        <article>
          <h3>{el.name}</h3>
          <img src={el.images[0]} alt="mod" width="200" />
          <p>{el.description}</p>
        </article>
      ))
    }
  </StyledDiv>
);

ModResults.defaultProps = {
  mods: [mockupMod],
};

export default ModResults;
