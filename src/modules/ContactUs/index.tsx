'use client';
import React from 'react';

import Link from 'next/link';

import Button from '@/components/Button';
import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import InputField from '@/components/InputField';
import Row from '@/components/Row';
import TextArea from '@/components/TextArea';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';

const ContactUs = () => {
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="contact-wrapper">
              <div className="image-wrapper">
                <ImageWithFallback
                  src="/images/contact-us-image.png"
                  alt="contact-us-bg-image"
                  fill
                />
                <div className="contact-us-info-wrapper">
                  <div className="location-info">
                    <div className="icon-wrapper">
                      <ImageWithFallback
                        src="/images/location.png"
                        alt="location-iamge"
                        fill
                      />
                    </div>
                    <Typography as="p">CLIP HIMALAYA</Typography>
                  </div>
                  <Typography as="p" className="plan-text">
                    Let&apos;s plan your next trip
                  </Typography>

                  <div className="contact-info-wrapper">
                    <div className="contact-info-left">
                      <Typography as="p">Address</Typography>
                      <Typography as="body2">Boudha 06</Typography>
                      <Typography as="body2">Kathmandu, Nepal</Typography>
                    </div>
                    <div className="contact-info-right">
                      <Typography as="p">Contact</Typography>
                      <Typography as="body2">
                        Phone: <Link href="tel:123">(123) 123456788</Link>
                      </Typography>
                      <Typography as="body2">
                        Mobile: <Link href="tel:123">(+977) 123456788</Link>
                      </Typography>
                      <Typography as="body2">
                        Email:
                        <Link href="mail:123@gmail.com">
                          cliphimalaya@gmail.com
                        </Link>
                      </Typography>
                    </div>
                  </div>

                  <div className="office-hour-wrapper">
                    <Typography as="p"> Office Hours</Typography>
                    <Typography as="body2">
                      Open 24 * 7 (For instant replies, custom trek planning,
                      and any inquiries, message us on WhatsApp. We respond
                      ASAP!)
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="contact-us-form">
                <InputField label="Full Name" placeholder="Your Full Name" />
                <InputField label="Email" placeholder="Email" />
                <TextArea
                  label="Message"
                  placeholder="Your Message"
                  value=""
                  onChange={() => {}}
                />
                <Button variant="outline" size="full-width">
                  SUBMIT
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default ContactUs;
