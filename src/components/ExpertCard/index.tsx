import ImageWithFallback from '../ImageWithFallBack';
import Typography from '../Typography';

import { StyledDiv } from './style';

type Props = {
  imageUrl: string;
  name: string;
  designation: string;
};

const ExpertCard = ({ imageUrl = '', name = '', designation = '' }: Props) => {
  return (
    <StyledDiv className="expert-card-wrapper">
      {imageUrl && (
        <div className="image-wrapper">
          <ImageWithFallback src={imageUrl} alt="expert-card" fill />
        </div>
      )}
      {name && (
        <Typography as="p" className="expert-title">
          {name}
        </Typography>
      )}
      {designation && (
        <Typography as="p" className="expert-desigination">
          {designation}
        </Typography>
      )}
    </StyledDiv>
  );
};

export default ExpertCard;
