import React from 'react';
import { PortableText } from '@portabletext/react';

import BreadCrumbs from '@/components/BreadCrumbs';
import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { ActivityDetailsType } from '@/modules/OtherActivities/otherActivities.type';

type Props = {
  data: ActivityDetailsType;
};

const ActivityDetails = ({ data }: Props) => {
  const title = data?.title || '';
  const shortDescription = data?.shortDescription || '';
  const description = data?.description || [];
  const highlights = data?.highlights || [];

  const crumbs = [
    { label: 'Other Activities', href: '/other-activities' },
    { label: title },
  ];

  return (
    <StyledDiv>
      <BreadCrumbs crumbs={crumbs} />

      <div className="activity-content">
        <Container>
          <Row>
            <Col>
              <div className="activity-title">
                <Typography as="h2">{title}</Typography>
              </div>
              {shortDescription && (
                <div className="activity-short-description">
                  <Typography as="p">{shortDescription}</Typography>
                </div>
              )}
              {description.length > 0 && (
                <div className="activity-description">
                  <PortableText value={description} />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>

      {highlights.length > 0 && (
        <div className="highlights-section">
          <Container>
            <Row>
              <Col>
                <div className="highlights-title">
                  <Typography as="h3">Highlights</Typography>
                </div>
                <div className="highlights-grid">
                  {highlights.map((highlight, i) => (
                    <div className="highlight-card" key={i}>
                      <Typography as="h4">{highlight.title}</Typography>
                      <Typography as="p">{highlight.description}</Typography>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </StyledDiv>
  );
};

export default ActivityDetails;
