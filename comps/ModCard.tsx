import styled from 'styled-components';
import {
  LogoSteam,
  LogoSteamDimensions,
} from '@styled-icons/ionicons-solid/LogoSteam';
import ModType from '../types/modType';
import Box from './Box';
import _Button from './Button';

const Button = styled(_Button)`
  height: 1rem;
`;

const Card = styled.article`
  width: 100%;
  padding: 5px;
`;

const ModTitle = styled.h3`
  margin: 0 0 10px;
  overflow: hidden;
  font-size: 1.1rem;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const Steam = styled.img`
  max-height: 0.9em;
  display: inline-block;
`;

const ModCard = ({
  mod: {
    id, title, thumbnailUrl, workshopUrl,
  },
}: {
  mod: ModType;
}) => (
  <Box>
    <Card>
      <ModTitle title={title}>{title}</ModTitle>
      <Thumbnail src={thumbnailUrl || '/assets/noimage.png'} alt={title} />
      <ButtonsContainer>
        <Button
          link
          href={workshopUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Workshop
        </Button>
        <Button link href={`steam://url/CommunityFilePage/${id}`}>
          <Steam src="/assets/steam.png" alt="Steam logo" />
        </Button>
      </ButtonsContainer>
    </Card>
  </Box>
);

export default ModCard;
