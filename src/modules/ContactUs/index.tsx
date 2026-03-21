'use client';
import React from 'react';

import Link from 'next/link';
import { useFormik } from 'formik';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

import Button from '@/components/Button';
import BreadCrumbs from '@/components/BreadCrumbs';
import Col from '@/components/Col';
import Container from '@/components/Container';
import ImageWithFallback from '@/components/ImageWithFallBack';
import InputField from '@/components/InputField';
import Row from '@/components/Row';
import TextArea from '@/components/TextArea';
import Typography from '@/components/Typography';

import { StyledDiv } from './style';
import { ContactUsType } from './contact-us.type';
import { urlFor } from '@/sanity/client';
import { contactUsSchema } from './contact-us.schema';
import { toast } from 'react-toastify';
import Overlay from '@/components/Overlay';

type Props = {
  data: ContactUsType;
};

const ContactUs = ({ data }: Props) => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    bannerImage = '',
    title = '',
    helperText = '',
    phoneNumber = '',
    mobileNumber = '',
    officeHour = '',
  } = data?.contact || {};

  const { address = '', city = '', gmail = '' } = data?.address || {};

  const bannerUrl = bannerImage
    ? urlFor(bannerImage).width(1920).quality(85).url()
    : '';

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      phone: '',
    },
    validationSchema: contactUsSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsSubmitting(true);
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });

        if (!res.ok) throw new Error('Failed to submit');

        toast.success(
          'Thanks for your inquiry. Our team will get back to you as soon as possible.'
        );
        resetForm();
      } catch (error) {
        toast.error('Something went wrong. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <StyledDiv>
      {/* Hero Banner */}
      <div className="hero-section">
        <div className="hero-gradient" />
        <ImageWithFallback src={bannerUrl} alt="contact-us-banner" fill />
        <Overlay />
        <div className="hero-text">
          <Container>
            <Row>
              <Col>
                <div className="hero-inner">
                  {helperText && <Typography as="h1">{helperText}</Typography>}
                  {title && <Typography as="p">{title}</Typography>}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <BreadCrumbs crumbs={[{ label: 'Contact Us' }]} />

      {/* Contact Info Cards */}
      <div className="info-section">
        <Container>
          <Row>
            <Col>
              <div className="info-grid">
                <div className="info-card">
                  <div className="info-icon">
                    <MapPin size={24} />
                  </div>
                  <Typography as="h4">Our Location</Typography>
                  <Typography as="p">{address}</Typography>
                  <Typography as="p">{city}</Typography>
                </div>
                <div className="info-card">
                  <div className="info-icon">
                    <Phone size={24} />
                  </div>
                  <Typography as="h4">Call Us</Typography>
                  <Typography as="p">
                    <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
                  </Typography>
                  <Typography as="p">
                    <Link href={`tel:${mobileNumber}`}>{mobileNumber}</Link>
                  </Typography>
                </div>
                <div className="info-card">
                  <div className="info-icon">
                    <Mail size={24} />
                  </div>
                  <Typography as="h4">Email Us</Typography>
                  <Typography as="p">
                    <Link href={`mailto:${gmail}`}>{gmail}</Link>
                  </Typography>
                </div>
                <div className="info-card">
                  <div className="info-icon">
                    <Clock size={24} />
                  </div>
                  <Typography as="h4">Office Hours</Typography>
                  <Typography as="p">{officeHour}</Typography>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Contact Form */}
      <div className="form-section">
        <Container>
          <Row>
            <Col>
              <div className="form-wrapper">
                <div className="form-header">
                  <Typography as="p" className="form-label">
                    Get In Touch
                  </Typography>
                  <Typography as="h3" className="form-heading">
                    Send Us a Message
                  </Typography>
                  <Typography as="p" className="form-description">
                    Have a question about a trek, need help planning your
                    adventure, or just want to say hello? Fill out the form
                    below and our team will get back to you shortly.
                  </Typography>
                </div>
                <div className="form-fields">
                  <div className="form-row">
                    <InputField
                      name="name"
                      label="Full Name"
                      placeholder="Your Full Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      touched={formik.touched.name}
                      error={formik.errors.name}
                      onBlur={formik.handleBlur}
                      requiredField
                    />
                    <InputField
                      name="email"
                      label="Email"
                      placeholder="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      touched={formik.touched.email}
                      error={formik.errors.email}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <InputField
                    name="phone"
                    label="Phone Number"
                    placeholder="Contact number"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    touched={formik.touched.phone}
                    error={formik.errors.phone}
                    onBlur={formik.handleBlur}
                    requiredField
                  />
                  <TextArea
                    label="Message"
                    placeholder="Your Message"
                    value={formik.values.message}
                    onChange={(e) => {
                      formik.setFieldValue('message', e.target.value);
                    }}
                    touched={formik.touched.message}
                    error={formik.errors.message}
                    onBlur={() => formik.setFieldTouched('message', true)}
                    requiredField
                  />
                  <Button
                    variant="black"
                    size="full-width"
                    disabled={!formik.isValid || isSubmitting}
                    loading={isSubmitting}
                    onClick={() => formik.handleSubmit()}
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledDiv>
  );
};

export default ContactUs;
