'use client';
import React from 'react';

import Link from 'next/link';
import { useFormik } from 'formik';

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
import { client, urlFor } from '@/sanity/client';
import { contactUsSchema } from './contact-us.schema';
import { toast } from 'react-toastify';

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
        await client.create({
          _type: 'contactSubmission',
          name: values.name,
          email: values.email,
          message: values.message,
          phone: values.phone,
        });

        toast.success(
          'Thanks for your inquery. Our team will get back you as soon as possible'
        );
        resetForm();
      } catch (error) {
        toast.error('Something went wrong. Please try again later');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

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
                  variant="outline"
                  size="full-width"
                  disabled={!formik.isValid || isSubmitting}
                  loading={isSubmitting}
                  onClick={() => formik.handleSubmit()}
                >
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
