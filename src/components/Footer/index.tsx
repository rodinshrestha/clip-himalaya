import React from 'react';

import Link from 'next/link';

import Col from '../Col';
import Container from '../Container';
import ImageWithFallback from '../ImageWithFallBack';
import Row from '../Row';
import Typography from '../Typography';

import { StyledDiv } from './style';

const Footer = () => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="footer-wrapper">
              <div className="footer-logo-wrapper">
                <ImageWithFallback
                  src="/images/logo.png"
                  alt="footer-logo"
                  fill
                />
              </div>

              <div className="footer-items-list">
                <div className="footer-item-wrapper">
                  <Typography as="p" className="footer-item-title">
                    OUR LOCATIONS
                  </Typography>
                  <div className="footer-items-inner-wrapper">
                    <Typography as="p" className="footer-item">
                      Boudha 06,
                    </Typography>
                    <Typography as="p" className="footer-item">
                      Kathmandu, Nepal
                    </Typography>
                    <Link
                      href="mail:cliphimalaya@gmail.com"
                      className="footer-item"
                    >
                      cliphimalaya@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="footer-item-wrapper">
                  <Typography as="p" className="footer-item-title">
                    ADVENTURE
                  </Typography>
                  <div className="footer-items-inner-wrapper">
                    <Link href="#" className="footer-item">
                      Expendition
                    </Link>
                    <Link href="#" className="footer-item">
                      Treks
                    </Link>
                    <Link href="#" className="footer-item">
                      Activities
                    </Link>
                  </div>
                </div>

                <div className="footer-item-wrapper">
                  <Typography as="p" className="footer-item-title">
                    COMPANY
                  </Typography>
                  <div className="footer-items-inner-wrapper">
                    <Link href="#" className="footer-item">
                      About Us
                    </Link>
                    <Link href="#" className="footer-item">
                      Our Team
                    </Link>
                    <Link href="#" className="footer-item">
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="footer-item-wrapper">
                  <Typography as="p" className="footer-item-title">
                    Legal
                  </Typography>
                  <div className="footer-items-inner-wrapper">
                    <Link href="/terms-and-conditions" className="footer-item">
                      Terms Of Use
                    </Link>
                    <Link href="/terms-and-conditions" className="footer-item">
                      Privacy Policy
                    </Link>
                    <Link href="/terms-and-conditions" className="footer-item">
                      Cookie Policy
                    </Link>
                  </div>
                </div>

                <div className="footer-item-wrapper">
                  <Typography as="p" className="footer-item-title">
                    CONNECT WITH US
                  </Typography>
                  <div className="footer-items-inner-wrapper">
                    <Link href="#" className="footer-item">
                      Instagram
                    </Link>
                    <Link href="#" className="footer-item">
                      Tiktok
                    </Link>
                    <Link href="#" className="footer-item">
                      Facebook
                    </Link>
                  </div>
                </div>
              </div>

              <div className="copy-right-trade-mark">
                <Typography as="p">
                  © Cliphimalaya.com - All Rights Reserved.
                </Typography>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default Footer;
