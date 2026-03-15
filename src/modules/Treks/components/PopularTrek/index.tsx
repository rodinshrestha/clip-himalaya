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
};

const PopularTrek = ({ data }: Props) => {
  const { trekList = [] } = data || {};
  const { sectionTitle = '' } = data?.pageData || {};

  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="section-header">
              <Typography as="p" className="section-label">
                Explore Our Treks
              </Typography>
              <Typography as="h3" className="section-title">
                {sectionTitle}
              </Typography>
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
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default PopularTrek;
