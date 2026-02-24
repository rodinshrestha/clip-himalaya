'use client';
import React from 'react';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';

import { StyledDiv } from './style';

type Props = {
  stickyBtn: boolean;
};

const StickyButton = ({ stickyBtn }: Props) => {
  const router = useRouter();
  return (
    <StyledDiv
      className={clsx({ active: stickyBtn })}
      onClick={() => router.push('/contact-us')}
    >
      INQURY
    </StyledDiv>
  );
};

export default StickyButton;
