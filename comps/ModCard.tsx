import styled from 'styled-components';
import ModType from '../types/modType';
import Box from './Box';
import Button from './Button';

const Card = styled.article`
width: 300px;
padding: 5px;
`;

const ModTitle = styled.h3`
margin: 0 0 10px;
`;

const Thumbnail = styled.img`
width: 100%;
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
  <Box>
    <Card>
      <ModTitle title={name}>{name}</ModTitle>
      <Thumbnail src={images[0]} alt={name} />
      <p>{description}</p>
      <Button>
        Hey
      </Button>
    </Card>
  </Box>
);

export default ModCard;
