'use client';
import React from 'react';

import TrekkingInfo from '@/modules/TrekDetails/components/TrekkingInfo';

import {
  Body,
  ChevronIcon,
  Description,
  Dot,
  DotTitleRow,
  Header,
  Item,
  Title,
  AccordionWrapper,
} from './style';

interface AccordionItem {
  title: string;
  description?: string;
  children?: string[];
}

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
};

// --- Component ---

const Accordion = ({ items, allowMultiple = false }: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = React.useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  };

  return (
    <AccordionWrapper>
      {items?.map((item, index) => {
        const isOpen = openIndexes.has(index);
        const { children = [] } = item || {};
        return (
          <Item key={index} $isOpen={isOpen}>
            <Header
              $isOpen={isOpen}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <DotTitleRow>
                <Dot $isOpen={isOpen} />
                <Title $isOpen={isOpen}>{item.title}</Title>
              </DotTitleRow>
              <ChevronIcon $isOpen={isOpen}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </ChevronIcon>
            </Header>
            <Body $isOpen={isOpen}>
              {children.length ? (
                children.map((x, innerIndex) => {
                  return <Description key={innerIndex}>{x}</Description>;
                })
              ) : (
                <Description>{item.description}</Description>
              )}
            </Body>
          </Item>
        );
      })}
    </AccordionWrapper>
  );
};

export default Accordion;
