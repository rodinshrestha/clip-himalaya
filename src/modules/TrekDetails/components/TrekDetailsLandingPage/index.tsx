'use client';
import React from 'react';

import ImageWithFallback from '@/components/ImageWithFallBack';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { TrekDetailsType } from '../../trek-details.types';
import { urlFor } from '@/sanity/client';
import Overlay from '@/components/Overlay';

type Props = {
  setStickyBtn: React.Dispatch<React.SetStateAction<boolean>>;
  data: TrekDetailsType;
};

const TrekDetailslandingPage = ({ setStickyBtn, data }: Props) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const { image = '', title = '', helperTitle = '' } = data || {};

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
      {image && (
        <ImageWithFallback
          src={urlFor(image).width(1920).quality(85).url()}
          fill
          alt={title || 'Trek banner'}
          priority
        />
      )}
      <Overlay />

      <div className="information-content">
        {title && <Typography as="h1">{title}</Typography>}
        {helperTitle && <Typography as="body2">{helperTitle}</Typography>}
      </div>
    </StyledDiv>
  );
};

export default TrekDetailslandingPage;
