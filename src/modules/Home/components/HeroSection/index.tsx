'use client';
import React from 'react';

import { useTypewriter } from 'react-simple-typewriter';

import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const HeroSection = () => {
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

  return (
    <StyledDiv className="hero-section-wrapper">
      <div className="overlay" />
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="text-content">
        <Typography as="h1">
          This Is Where You <span className="auto-text">{text}</span>
        </Typography>
        <Typography as="body2">Walk Above the Clouds.</Typography>
      </div>
    </StyledDiv>
  );
};

export default HeroSection;
