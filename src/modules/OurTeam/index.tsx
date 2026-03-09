import React from 'react';

import OurExpertList from './components/OurExpertList';
import OurTeamFaq from './components/OurTeamFaq';
import OurTeamJourney from './components/OurTeamJourney';
import OurTeamLandingPage from './components/OurTeamLandingPage';
import { StyledDiv } from './style';
import { OurTeamType } from './our-team.type';

type Props = {
  data: OurTeamType;
};

const OurTeam = ({ data }: Props) => {
  return (
    <StyledDiv>
      <OurTeamLandingPage data={data} />
      <OurTeamJourney data={data} />
      <OurExpertList data={data} />
      <OurTeamFaq data={data} />
    </StyledDiv>
  );
};

export default OurTeam;
