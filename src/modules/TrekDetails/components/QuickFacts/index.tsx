'use client';
import React from 'react';

import { Clock, Mountain, Sun, MapPin, Users, FileText } from 'lucide-react';
import styled from 'styled-components';

import Typography from '@/components/Typography';
import { TrekDetailsType } from '../../trek-details.types';

const StyledDiv = styled.div`
  background: ${({ theme }) => theme.color.white['100']};
  border: 1px solid ${({ theme }) => theme.color.grey['100']};
  border-radius: 4px;
  padding: 28px 32px;
  margin: 30px 0;

  .facts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
  }

  .fact-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;

    svg {
      flex-shrink: 0;
      margin-top: 2px;
      color: ${({ theme }) => theme.color.black['100']};
    }

    .fact-label {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: ${({ theme }) => theme.color.black['200']};
      opacity: 0.6;
      font-family: ${({ theme }) => theme.fonts.poppins};
    }

    .fact-value {
      font-size: 14px;
      font-weight: 500;
      font-family: ${({ theme }) => theme.fonts.poppins};
      margin-top: 2px;
    }
  }
`;

type Props = {
  data: TrekDetailsType;
};

const QuickFacts = ({ data }: Props) => {
  const facts = [
    { icon: Clock, label: 'Duration', value: data.duration },
    { icon: Mountain, label: 'Max Elevation', value: data.maxElevation },
    { icon: Sun, label: 'Best Seasons', value: data.bestSeasons },
    { icon: MapPin, label: 'Start / End', value: data.startPoint && data.endPoint ? `${data.startPoint} → ${data.endPoint}` : data.startPoint },
    { icon: Users, label: 'Group Size', value: data.groupSize },
    { icon: FileText, label: 'Permits', value: data.permits },
  ].filter((f) => f.value);

  if (facts.length === 0) return null;

  return (
    <StyledDiv>
      <div className="facts-grid">
        {facts.map((fact) => (
          <div className="fact-item" key={fact.label}>
            <fact.icon size={20} strokeWidth={1.5} />
            <div>
              <Typography as="p" className="fact-label">{fact.label}</Typography>
              <Typography as="p" className="fact-value">{fact.value}</Typography>
            </div>
          </div>
        ))}
      </div>
    </StyledDiv>
  );
};

export default QuickFacts;
