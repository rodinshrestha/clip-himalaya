import React from 'react';

import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

import Col from '../Col';
import Container from '../Container';
import ImageWithFallback from '../ImageWithFallBack';
import Row from '../Row';
import Typography from '../Typography';

import { StyledDiv } from './style';
import { SiteSettingTypes } from '@/types/site-settings.type';
import { urlFor } from '@/sanity/client';

type Props = {
  siteSettings: SiteSettingTypes;
};

const Footer = ({ siteSettings }: Props) => {
  const {
    footerLogoImage = null,
    footerDescription = '',
    address = '',
    city = '',
    gmail = '',
    phoneNumber = '',
    footerText = '',
    instagramUrl = '',
    facebookUrl = '',
    tiktokUrl = '',
    whatsappNumber = '',
  } = siteSettings || {};

  return (
    <StyledDiv className="footer">
      <Container>
        <Row>
          <Col>
            <div className="footer-top">
              {/* Brand Column */}
              <div className="footer-brand">
                <div className="footer-logo-wrapper">
                  <ImageWithFallback
                    src={urlFor(footerLogoImage).url()}
                    alt="Clip Himalaya logo"
                    fill
                  />
                </div>
                {footerDescription && (
                  <Typography as="p" className="footer-description">
                    {footerDescription}
                  </Typography>
                )}
                <div className="social-links">
                  {instagramUrl && (
                    <Link
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </Link>
                  )}
                  {facebookUrl && (
                    <Link
                      href={facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} />
                    </Link>
                  )}
                  {tiktokUrl && (
                    <Link
                      href={tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="TikTok"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.44V13.3a8.16 8.16 0 005.58 2.2v-3.45a4.85 4.85 0 01-3.77-1.6v-3.76h3.77z" />
                      </svg>
                    </Link>
                  )}
                  {whatsappNumber && (
                    <Link
                      href={`https://wa.me/${whatsappNumber.replace(/[^0-9+]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="WhatsApp"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer-column">
                <Typography as="p" className="footer-column-title">
                  Quick Links
                </Typography>
                <div className="footer-links">
                  <Link href="/">Home</Link>
                  <Link href="/treks">Treks</Link>
                  <Link href="/other-activities">Other Activities</Link>
                  <Link href="/our-story">Our Story</Link>
                  <Link href="/our-team">Our Team</Link>
                </div>
              </div>

              {/* Support */}
              <div className="footer-column">
                <Typography as="p" className="footer-column-title">
                  Support
                </Typography>
                <div className="footer-links">
                  <Link href="/contact-us">Contact Us</Link>
                  <Link href="/terms-and-conditions">Terms & Conditions</Link>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </div>
              </div>

              {/* Contact Info */}
              <div className="footer-column">
                <Typography as="p" className="footer-column-title">
                  Contact Info
                </Typography>
                <div className="footer-contact">
                  {(address || city) && (
                    <div className="contact-item">
                      <MapPin size={16} />
                      <span>
                        {address}
                        {address && city ? ', ' : ''}
                        {city}
                      </span>
                    </div>
                  )}
                  {phoneNumber && (
                    <div className="contact-item">
                      <Phone size={16} />
                      <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
                    </div>
                  )}
                  {gmail && (
                    <div className="contact-item">
                      <Mail size={16} />
                      <Link href={`mailto:${gmail}`}>{gmail}</Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
              <Typography as="p">
                {footerText ||
                  `© ${new Date().getFullYear()} Clip Himalaya — All Rights Reserved.`}
              </Typography>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default Footer;
