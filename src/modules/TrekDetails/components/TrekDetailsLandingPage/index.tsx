'use client';
import React from 'react';

import ImageWithFallback from '@/components/ImageWithFallBack';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

type Props = {
  setStickyBtn: React.Dispatch<React.SetStateAction<boolean>>;
};

const TrekDetailslandingPage = ({ setStickyBtn }: Props) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const section = ref.current;
    if (!section) return;

    const handleScroll = () => {
      const bottom = section.getBoundingClientRect().bottom;
      setStickyBtn(bottom <= 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setStickyBtn]);
  return (
    <StyledDiv ref={ref}>
      <ImageWithFallback
        src="/images/termandcondition.jpeg"
        fill
        alt="background image"
      />

      <div className="information-content">
        <Typography as="h1">Everest Base Camp</Typography>
        <Typography as="body2">Wander Where Wifi Is Weak</Typography>
      </div>
    </StyledDiv>
  );
};

export default TrekDetailslandingPage;
