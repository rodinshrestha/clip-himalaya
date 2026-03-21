import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { OurTeamType } from '../../our-team.type';
import { urlFor } from '@/sanity/client';
import Overlay from '@/components/Overlay';

type Props = {
  data: OurTeamType;
};

const OurTeamLandingPage = ({ data }: Props) => {
  const { bannerImage = '', bannerText = [] } = data || {};

  const bannerUrl = bannerImage
    ? urlFor(bannerImage).width(1920).quality(85).url()
    : '';

  const titleText = bannerText
    .map((x) => x?.children?.[0]?.text || '')
    .filter(Boolean)
    .join(' ');

  return (
    <StyledDiv>
      <div className="hero-gradient" />
      <ImageWithFallback src={bannerUrl} alt="our-team-banner" fill />
      <Overlay />

      <div className="text-content">
        <Container>
          <Row>
            <Col>
              <div className="text-inner-content">
                {titleText && <Typography as="h1">{titleText}</Typography>}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledDiv>
  );
};

export default OurTeamLandingPage;
