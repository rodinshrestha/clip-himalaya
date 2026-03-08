'use client';
import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import useHeader from '@/hooks/useHeader';

import Col from '../Col';
import Container from '../Container';
import HamburgerMenuIcon from '../HamburgerMenuIcon';
import ImageWithFallback from '../ImageWithFallBack';
import Row from '../Row';
import Typography from '../Typography';

import { StyledHeader } from './style';
import { SiteSettingTypes } from '@/types/site-settings.type';
import { urlFor } from '@/sanity/client';

type Props = {
  siteSettings: SiteSettingTypes;
};

const Header = ({ siteSettings }: Props) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const { trekStickyHeader } = useHeader();

  const {
    logoImage = null,
    siteTitle = '',
    siteHelperText = '',
  } = siteSettings || {};

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { link: '/', label: 'Home' },
    { link: '/treks', label: 'Treks' },
    { link: '/annapurna-circuit', label: 'Annapurna Circuit' },
    { link: '/our-story', label: 'Our Story' },
    { link: '/our-team', label: 'Our Team' },
    { link: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <StyledHeader
      className={clsx({
        active: isScrolled && !trekStickyHeader,
        hide: trekStickyHeader,
      })}
    >
      <Container>
        <Row>
          <Col>
            <div className="header-wrapper">
              <div className="logo-content">
                <div className="logo-wrapper">
                  <ImageWithFallback
                    src={urlFor(logoImage).url()}
                    alt="clip-himalaya-logo"
                    fill
                  />
                </div>
                <div className="title-content">
                  <Typography as="h1">{siteTitle}</Typography>
                  <Typography as="body1">{siteHelperText}</Typography>
                </div>
              </div>
              <div className="header-navigation-wrapper">
                {navigation.map((x) => {
                  const active =
                    pathname === x.link || pathname.startsWith(`${x.link}/`);
                  return (
                    <Link
                      href={x.link}
                      className={clsx('navigation-link', { active })}
                      key={x.label}
                    >
                      {x.label}
                    </Link>
                  );
                })}
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
