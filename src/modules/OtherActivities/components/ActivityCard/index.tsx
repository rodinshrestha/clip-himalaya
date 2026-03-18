import React from 'react';
import Link from 'next/link';

import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import Row from '@/components/Row';
import Typography from '@/components/Typography';
import { urlFor } from '@/sanity/client';

import { StyledDiv } from './style';
import { OtherActivitiesPageType } from '../../otherActivities.type';

type Props = {
  data: OtherActivitiesPageType;
};

const ActivityCard = ({ data }: Props) => {
  const heading = data?.pageData?.heading || '';
  const description = data?.pageData?.description || '';
  const sectionTitle = data?.pageData?.sectionTitle || '';
  const activityList = data?.activityList || [];

  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="description-section">
              {heading && <Typography as="h3">{heading}</Typography>}
              {description && <Typography as="p">{description}</Typography>}
            </div>
            <div className="activities-section">
              {sectionTitle && (
                <div className="section-title">
                  <Typography as="h3">{sectionTitle}</Typography>
                </div>
              )}
              <div className="activities-grid">
                {activityList.map((activity) => {
                  const imgUrl = activity.image
                    ? urlFor(activity.image).width(600).quality(80).url()
                    : '';
                  const slug = activity.slug?.current || '';
                  return (
                    <Link
                      href={`/other-activities/${slug}`}
                      className="activity-card"
                      key={activity.title}
                    >
                      <ImageWithFallback
                        src={imgUrl}
                        alt={activity.title}
                        fill
                      />
                      <div className="card-overlay" />
                      <div className="card-content">
                        <Typography as="p">{activity.title}</Typography>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default ActivityCard;
