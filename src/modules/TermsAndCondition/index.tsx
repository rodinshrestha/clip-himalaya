import React from 'react';

import BreadCrumbs from '@/components/BreadCrumbs';
import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import Row from '@/components/Row';
import Typography from '@/components/Typography';
import { urlFor } from '@/sanity/client';
import { sanitizeBlockData } from '@/utils/sanitize-block-data';

import { StyledDiv } from './style';
import { TermConditionType } from './term-condition.type';

type Props = {
  data: TermConditionType;
};

const TermsAndCondition = ({ data }: Props) => {
  const {
    bannerImage,
    bannerTitle = 'Terms & Conditions',
    lastUpdated,
    sections = [],
    termConditionList = [],
  } = data || {};

  const bannerUrl = bannerImage
    ? urlFor(bannerImage).width(1920).quality(85).url()
    : '';

  return (
    <StyledDiv>
      {/* Hero Banner */}
      <div className="hero-section">
        <div className="hero-gradient" />
        {bannerUrl && (
          <ImageWithFallback src={bannerUrl} alt={bannerTitle} fill priority />
        )}
        <div className="hero-text">
          <Container>
            <Row>
              <Col>
                <div className="hero-inner">
                  <Typography as="h1">{bannerTitle}</Typography>
                  {lastUpdated && (
                    <Typography as="p">Last updated: {lastUpdated}</Typography>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <BreadCrumbs crumbs={[{ label: 'Terms & Conditions' }]} />

      <Container>
        <Row>
          <Col>
            <div className="content-wrapper">
              {/* New sections-based content */}
              {sections.length > 0 &&
                sections.map((section, i) => (
                  <div key={i} className="legal-section">
                    {section.title && (
                      <Typography as="h2" className="section-title">
                        {section.title}
                      </Typography>
                    )}
                    {section.content && (
                      <div className="section-content">
                        {sanitizeBlockData(section.content)?.map(
                          (text: string, j: number) => (
                            <Typography as="p" key={j}>
                              {text}
                            </Typography>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}

              {/* Legacy plain-text list fallback */}
              {sections.length === 0 && termConditionList.length > 0 && (
                <ul className="legacy-list">
                  {termConditionList.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default TermsAndCondition;
