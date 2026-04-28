'use client';
import React from 'react';

import { Dumbbell, Bed, FileCheck, Backpack } from 'lucide-react';
import styled from 'styled-components';

import Accordion from '@/components/Accordion';
import Typography from '@/components/Typography';
import TrekkingTitleSection from '../TrekkingTitleSection';
import Button from '@/components/Button';
import { TrekDetailsType } from '../../trek-details.types';

const StyledDiv = styled.div`
  margin-top: 40px;

  .extras-section {
    margin-bottom: 40px;
  }

  .extras-text {
    font-family: ${({ theme }) => theme.fonts.poppins};
    font-size: 15px;
    line-height: 1.8;
    color: ${({ theme }) => theme.color.black['200']};
    white-space: pre-line;
    margin-top: 16px;
  }

  .packing-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 8px;
    margin-top: 16px;
    list-style: none;
    padding: 0;

    li {
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 14px;
      padding: 8px 0;
      border-bottom: 1px solid ${({ theme }) => theme.color.grey['100']};
      display: flex;
      align-items: center;
      gap: 8px;

      &::before {
        content: '•';
        color: ${({ theme }) => theme.color.black['100']};
        font-weight: bold;
      }
    }
  }

  .faq-section {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .cta-section {
    background: ${({ theme }) => theme.color.grey['100']};
    padding: 40px;
    border-radius: 4px;
    text-align: center;
    margin-top: 50px;

    .cta-title {
      font-size: 24px;
      margin-bottom: 12px;
    }

    .cta-subtitle {
      color: ${({ theme }) => theme.color.black['200']};
      font-family: ${({ theme }) => theme.fonts.poppins};
      font-size: 15px;
      margin-bottom: 24px;
    }

    .cta-buttons {
      display: flex;
      gap: 16px;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;

type Props = {
  data: TrekDetailsType;
};

const TrekExtras = ({ data }: Props) => {
  const { fitnessGuidance, accommodationNotes, permitDetails, packingEssentials, faqList } = data;

  const hasFaq = faqList && faqList.length > 0;
  const hasExtras = fitnessGuidance || accommodationNotes || permitDetails || (packingEssentials && packingEssentials.length > 0) || hasFaq;

  if (!hasExtras) {
    return (
      <StyledDiv>
        <div className="cta-section">
          <Typography as="h3" className="cta-title">Ready to trek?</Typography>
          <Typography as="p" className="cta-subtitle">
            Tell us your dates and group size. After advance payment, we send you guided
            breathing techniques for altitude and backpacking skills for the trail.
            Want professional photos, video, or drone shots of your trek? Just ask.
          </Typography>
          <div className="cta-buttons">
            <Button variant="contained" href="/contact-us">Inquire About This Trek</Button>
            <Button variant="outline" href="/contact-us">Customize This Trek</Button>
          </div>
        </div>
      </StyledDiv>
    );
  }

  const faqItems = (faqList || []).map((x) => ({
    title: x.question,
    description: x.answer,
  }));

  return (
    <StyledDiv id="extras">
      {fitnessGuidance && (
        <div className="extras-section">
          <TrekkingTitleSection icon={Dumbbell} title="FITNESS & DIFFICULTY" />
          <Typography as="p" className="extras-text">{fitnessGuidance}</Typography>
        </div>
      )}

      {accommodationNotes && (
        <div className="extras-section">
          <TrekkingTitleSection icon={Bed} title="ACCOMMODATION & FOOD" />
          <Typography as="p" className="extras-text">{accommodationNotes}</Typography>
        </div>
      )}

      {permitDetails && (
        <div className="extras-section">
          <TrekkingTitleSection icon={FileCheck} title="PERMITS & TIMS" />
          <Typography as="p" className="extras-text">{permitDetails}</Typography>
        </div>
      )}

      {packingEssentials && packingEssentials.length > 0 && (
        <div className="extras-section">
          <TrekkingTitleSection icon={Backpack} title="PACKING ESSENTIALS" />
          <ul className="packing-list">
            {packingEssentials.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {hasFaq && (
        <div className="faq-section" id="faq">
          <TrekkingTitleSection icon={FileCheck} title="FREQUENTLY ASKED QUESTIONS" />
          <Accordion items={faqItems} />
        </div>
      )}

      <div className="cta-section">
        <Typography as="h3" className="cta-title">Ready to trek?</Typography>
        <Typography as="p" className="cta-subtitle">
          Tell us your dates and group size. After advance payment, we send you guided
            breathing techniques for altitude and backpacking skills for the trail.
            Want professional photos, video, or drone shots of your trek? Just ask.
        </Typography>
        <div className="cta-buttons">
          <Button variant="outline" href="/contact-us">Inquire About This Trek</Button>
          <Button variant="outline" href="/contact-us">Customize This Trek</Button>
        </div>
      </div>
    </StyledDiv>
  );
};

export default TrekExtras;
