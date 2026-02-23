import React from 'react';

import OurExpertList from './components/OurExpertList';
import OurTeamFaq from './components/OurTeamFaq';
import OurTeamJourney from './components/OurTeamJourney';
import OurTeamLandingPage from './components/OurTeamLandingPage';
import { StyledDiv } from './style';

const OurTeam = () => {
  return (
    <StyledDiv>
      <OurTeamLandingPage />
      <OurTeamJourney />
      <OurExpertList />
      <OurTeamFaq />
    </StyledDiv>
  );
};

export default OurTeam;
