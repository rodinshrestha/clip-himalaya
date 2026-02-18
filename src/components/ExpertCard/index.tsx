import ImageWithFallback from '../ImageWithFallBack';
import Typography from '../Typography';

import { StyledDiv } from './style';

const ExpertCard = () => {
  return (
    <StyledDiv className="expert-card-wrapper">
      <div className="image-wrapper">
        <ImageWithFallback src="/images/expert.jpeg" alt="expert-card" fill />
      </div>

      <Typography as="p" className="expert-title">
        Nawag
      </Typography>
      <Typography as="p" className="expert-desigination">
        CEO
      </Typography>
    </StyledDiv>
  );
};

export default ExpertCard;
