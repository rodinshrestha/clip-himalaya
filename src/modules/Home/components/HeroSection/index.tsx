'use client';
import React from 'react';

import { useScroll, motion } from 'framer-motion';
import { useTypewriter } from 'react-simple-typewriter';

import ImageWithFallback from '@/components/ImageWithFallBack';
import Typography from '@/components/Typography';
import { getTransition } from '@/utils/get-transition';
import { interpolate } from '@/utils/interpolate';

import { StyledDiv } from './style';

const HeroSection = () => {
  const [factor, setFactor] = React.useState({
    position: 0,
    opacity: 1,
  });
  const { scrollY } = useScroll();
  const ref = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const clientRect = ref.current.getBoundingClientRect();
        const top = clientRect.top;
        setFactor({
          position: top < 0 ? top : 0,
          opacity: interpolate(
            clientRect.bottom || 0,
            [0, clientRect.height / 0.8],
            [0, 1]
          ),
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const [text] = useTypewriter({
    words: [
      'Find Yourself.',
      'Break Your Limits!',
      'Disconnect to Reconnect.',
      'Chase Real Adventures.',
      'Create Lifelong Stories.',
    ],
    loop: 0,
  });

  const { position, opacity = 1 } = factor;
  return (
    <StyledDiv className="hero-section-wrapper" ref={ref}>
      <div className="overlay" />
      <motion.div
        style={{
          height: '100%',
          y: getTransition(position, 0.5),
        }}
      >
        <video autoPlay muted loop playsInline className="bg-video">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <motion.div
        className="text-content"
        style={{
          position: 'absolute',
          top: '50%',
          y: getTransition(position, 0.5),
          translateY: '-50%',
          opacity,
        }}
      >
        <Typography as="h1">
          This Is Where You <span className="auto-text">{text}</span>
        </Typography>
        <Typography as="body2">Walk Above the Clouds.</Typography>
      </motion.div>
      <div className="scroll-indicator" style={{ opacity }}>
        <ImageWithFallback
          src="/images/down-arrow.png"
          alt="scroll-indicator"
          fill
        />
      </div>
    </StyledDiv>
  );
};

export default HeroSection;
