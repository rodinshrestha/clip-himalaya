import BreadCrumbs from '@/components/BreadCrumbs';
import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import Row from '@/components/Row';
import Typography from '@/components/Typography';
import { urlFor } from '@/sanity/client';
import { sanitizeBlockData } from '@/utils/sanitize-block-data';
import { BlockType } from '@/types/block.type';
import { ImageType } from '@/types/image.type';

import { StyledDiv } from './style';

type LegalSection = {
  title: string;
  content: BlockType[];
};

type PrivacyPolicyData = {
  bannerImage: ImageType;
  bannerTitle?: string;
  lastUpdated?: string;
  sections?: LegalSection[];
};

type Props = {
  data: PrivacyPolicyData;
};

const PrivacyPolicy = ({ data }: Props) => {
  const {
    bannerImage,
    bannerTitle = 'Privacy Policy',
    lastUpdated,
    sections = [],
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
          <ImageWithFallback src={bannerUrl} alt={bannerTitle} fill />
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

      <BreadCrumbs crumbs={[{ label: 'Privacy Policy' }]} />

      <Container>
        <Row>
          <Col>
            <div className="content-wrapper">
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
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default PrivacyPolicy;
