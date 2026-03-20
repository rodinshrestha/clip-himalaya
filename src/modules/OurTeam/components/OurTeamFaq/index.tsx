import Accordion from '@/components/Accordion';
import Col from '@/components/Col';
import Container from '@/components/Container';
import Row from '@/components/Row';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { OurTeamType } from '../../our-team.type';

type Props = {
  data: OurTeamType;
};

const OurTeamFaq = ({ data }: Props) => {
  const faqList = data?.faqList || [];

  const items = faqList.map((x) => ({
    title: x.question,
    description: x.answer,
  }));
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="our-team-faq-wrapper">
              <Typography as="p" className="faq-label">
                FAQ
              </Typography>
              <Typography as="body2" className="faq-title">
                Frequently Asked Questions
              </Typography>
              <div className="faq-wrapper">
                <Accordion items={items} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default OurTeamFaq;
