'use client';
import React from 'react';

import clsx from 'clsx';
import {
  CheckCheck,
  CircleX,
  Images,
  Info,
  Sun,
  Waypoints,
} from 'lucide-react';

import Typography from '@/components/Typography';
import useHeader from '@/hooks/useHeader';
import { goToSection } from '@/utils/go-to-section';

import { StyledDiv } from './style';

const headerList = [
  {
    label: 'KEY HIGHLIGHTS',
    icon: <Sun />,
    sectionId: 'key-highlights',
    side: 'left',
  },
  {
    label: 'ITINERARY',
    icon: <Waypoints />,
    sectionId: 'itinerary',
    side: 'right',
  },
  {
    label: 'COSTS INCLUDE',
    icon: <CheckCheck />,
    sectionId: 'costs-include',
    side: 'left',
  },
  {
    label: 'COST EXCLUDE',
    icon: <CircleX />,
    sectionId: 'costs-include',
    side: 'right',
  },
  {
    label: 'ESSENTIAL TIPS',
    icon: <Info />,
    sectionId: 'essential-tips',
    side: 'left',
  },
  { label: 'GALLERY', icon: <Images />, sectionId: 'gallery', side: 'right' },
];

const ItineraryHeader = () => {
  const trekHeaderRef = React.useRef<HTMLDivElement | null>(null);
  const { setTrekStickyHeader, trekStickyHeader } = useHeader();
  const [activeSection, setActiveSection] = React.useState<string>('');

  return (
    <StyledDiv ref={trekHeaderRef}>
      <div className="vertical-line" />
      <div className={clsx('header-wrapper', { show: trekStickyHeader })}>
        {headerList.map(({ label, icon, sectionId, side }, i) => {
          return (
            <div className={clsx('itinerary-header-item', side)} key={i}>
              {icon}
              <Typography
                as="body1"
                className={clsx({ active: activeSection === sectionId })}
                onClick={() => goToSection(sectionId, 80)}
              >
                {label}
              </Typography>
            </div>
          );
        })}
      </div>
    </StyledDiv>
  );
};

export default ItineraryHeader;

//draft
// React.useEffect(() => {
//   const section = trekHeaderRef.current;
//   if (!section) return;

//   const handleScroll = () => {
//     const top = section.getBoundingClientRect().top;
//     setTrekStickyHeader(top <= 80);
//   };

//   window.addEventListener('scroll', handleScroll, { passive: true });

//   return () => window.removeEventListener('scroll', handleScroll);
// }, [setTrekStickyHeader]);

// active section logic
// React.useEffect(() => {
//   const sections = headerList
//     .map(({ sectionId }) => document.getElementById(sectionId))
//     .filter(Boolean) as HTMLElement[];

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     },
//     {
//       rootMargin: '-40% 0px -60% 0px',
//       threshold: 0,
//     }
//   );

//   sections.forEach((section) => observer.observe(section));
//   return () => observer.disconnect();
// }, []);
