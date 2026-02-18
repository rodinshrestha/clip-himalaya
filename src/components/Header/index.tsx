import React from 'react';

import Link from 'next/link';

import Col from '../Col';
import Container from '../Container';
import ImageWithFallback from '../ImageWithFallBack';
import Row from '../Row';
import Typography from '../Typography';

import { StyledHeader } from './style';

const Header = () => {
  return (
    <StyledHeader>
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
                  Contact
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
