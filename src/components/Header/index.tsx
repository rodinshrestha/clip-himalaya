'use client';
import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import Col from '../Col';
import Container from '../Container';
import HamburgerMenuIcon from '../HamburgerMenuIcon';
import ImageWithFallback from '../ImageWithFallBack';
import Row from '../Row';
import Typography from '../Typography';

import { StyledHeader } from './style';

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledHeader className={clsx({ active: isScrolled })}>
      <Container>
        <Row>
          <Col>
            <div className="header-wrapper">
              <div className="logo-content">
                <div className="logo-wrapper">
                  <ImageWithFallback
                    src="/images/logo.png"
                    alt="clip-himalaya-logo"
                    fill
                  />
                </div>
                <div className="title-content">
                  <Typography as="h1">CLIP HIMALAYA</Typography>
                  <Typography as="body1">Wander where wifi is weak</Typography>
                </div>
              </div>
              <div className="header-navigation-wrapper">
                <Link href="#" className="navigation-link active">
                  Home
                </Link>
                <Link href="#" className="navigation-link">
                  treks
                </Link>
                <Link href="#" className="navigation-link">
                  Our Story
                </Link>
                <Link href="#" className="navigation-link">
                  Gallery
                </Link>
                <Link href="#" className="navigation-link">
                  Contact Us
                </Link>
              </div>
              <div className="hamburger-menu-wrapper">
                <HamburgerMenuIcon
                  isOpen={isMenuOpen}
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
