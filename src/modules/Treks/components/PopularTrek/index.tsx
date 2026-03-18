import React from 'react';

import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import TrekCard from '@/components/TrekCard';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { TrekPageType } from '../../treks.type';
import { urlFor } from '@/sanity/client';

type Props = {
  data: TrekPageType;
  activeRegion?: string;
  onClearFilter?: () => void;
};

const PopularTrek = ({ data, activeRegion, onClearFilter }: Props) => {
  const { trekList = [] } = data || {};
  const { sectionTitle = '' } = data?.pageData || {};

  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="section-header">
              <Typography as="p" className="section-label">
                {activeRegion
                  ? `Treks in ${activeRegion}`
                  : 'Explore Our Treks'}
              </Typography>
              <Typography as="h3" className="section-title">
                {activeRegion ? `${activeRegion} Treks` : sectionTitle}
              </Typography>
              {activeRegion && onClearFilter && (
                <button
                  type="button"
                  className="clear-filter"
                  onClick={onClearFilter}
                >
                  View All Treks
                </button>
              )}
            </div>
            <div className="trek-wrapper">
              {trekList.map((x, i) => {
                const { image } = x || {};
                const imgUrl = image ? urlFor(image).url() : '';
                return (
                  <TrekCard
                    imgUrl={imgUrl}
                    key={i}
                    title={x.title}
                    description={x.trekDescription}
                    rating={x.rating}
                    difficult={x.difficult}
                    slug={x.slug.current}
                  />
                );
              })}
            </div>
            {trekList.length === 0 && activeRegion && (
              <div className="no-results">
                <Typography as="p">
                  No treks found in this region yet. Check back soon!
                </Typography>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default PopularTrek;
