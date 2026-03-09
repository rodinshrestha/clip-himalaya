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
import Overlay from '@/components/Overlay';
import { ContactUsType } from './contact-us.type';
import { urlFor } from '@/sanity/client';

type Props = {
  data: ContactUsType;
};

const ContactUs = ({ data }: Props) => {
  const {
    bannerImage = '',
    title = '',
    helperText = '',
    phoneNumber = '',
    mobileNumber = '',
    officeHour = '',
  } = data?.contact || {};

  const { address = '', city = '', gmail = '' } = data?.address || {};
  return (
    <StyledDiv>
      <Container>
        <Row>
          <Col>
            <div className="contact-wrapper">
              <div className="image-wrapper">
                <Overlay />
                <ImageWithFallback
                  src={urlFor(bannerImage).url()}
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
                    <Typography as="p">{title}</Typography>
                  </div>
                  <Typography as="p" className="plan-text">
                    {helperText}
                  </Typography>

                  <div className="contact-info-wrapper">
                    <div className="contact-info-left">
                      <Typography as="p">Address</Typography>
                      <Typography as="body2">{address}</Typography>
                      <Typography as="body2">{city}</Typography>
                    </div>
                    <div className="contact-info-right">
                      <Typography as="p">Contact</Typography>
                      <Typography as="body2">
                        Phone:{' '}
                        <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
                      </Typography>
                      <Typography as="body2">
                        Mobile:{' '}
                        <Link href={`tel:${mobileNumber}`}>{mobileNumber}</Link>
                      </Typography>
                      <Typography as="body2">
                        Email:
                        <Link href={`mail:${gmail}`}>{gmail}</Link>
                      </Typography>
                    </div>
                  </div>

                  <div className="office-hour-wrapper">
                    <Typography as="p"> Office Hours</Typography>
                    <Typography as="body2">{officeHour}</Typography>
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
