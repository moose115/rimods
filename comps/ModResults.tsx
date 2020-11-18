import styled from 'styled-components';
import ModType from '../types/modType';
import ModCard from './ModCard';

const StyledDiv = styled.div`
display: grid;
grid-template-columns: auto auto auto;
grid-column-gap: 10px;
grid-row-gap: 10px;
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
      mods.map((mod, i) => (
        <ModCard mod={mod} key={`mod-${i}`} />
      ))
    }
  </StyledDiv>
);

ModResults.defaultProps = {
  mods: [...new Array(10)].map(() => mockupMod),
};

export default ModResults;
