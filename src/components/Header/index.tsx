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
import {
  Activity,
  BookText,
  Contact,
  Home,
  MountainSnow,
  ReceiptText,
  UsersRound,
} from 'lucide-react';

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
    if (isMenuOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => document.body.classList.remove('modal-open');
  }, [isMenuOpen]);

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
    { link: '/other-activities', label: 'Other Activities' },
    { link: '/our-story', label: 'Our Story' },
    { link: '/our-team', label: 'Our Team' },
    { link: '/contact-us', label: 'Contact Us' },
  ];

  const mobileNavigation = [
    { link: '/', label: 'Home', icon: <Home size={21} color="#000" /> },
    {
      link: '/treks',
      label: 'Treks',
      icon: <MountainSnow size={21} color="#000" />,
    },
    {
      link: '/other-activities',
      label: 'Other Activities',
      icon: <Activity size={21} color="#000" />,
    },
    {
      link: '/our-story',
      label: 'Our Story',
      icon: <BookText size={21} color="#000" />,
    },
    {
      link: '/our-team',
      label: 'Our Team',
      icon: <UsersRound size={21} color="#000" />,
    },
    {
      link: '/contact-us',
      label: 'Contact Us',
      icon: <Contact size={21} color="#000" />,
    },
    {
      link: '/terms-and-conditions',
      label: 'Terms and Conditions',
      icon: <ReceiptText size={24} color="#000" />,
    },
  ];

  return (
    <StyledHeader
      className={clsx({
        active: isScrolled,
      })}
    >
      <Container>
        <Row>
          <Col>
            <div className="header-wrapper">
              <Link href="/" className="logo-content">
                <div className="logo-wrapper">
                  <ImageWithFallback
                    src={
                      logoImage
                        ? urlFor(logoImage).url()
                        : '/images/logo-transparent.png'
                    }
                    alt="Clip Himalaya - Nepal trekking company"
                    fill
                  />
                </div>
                <div className="title-content">
                  <Typography as="p" className="site-title">{siteTitle}</Typography>
                  <Typography as="body1">{siteHelperText}</Typography>
                </div>
              </Link>
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

                <div className={clsx('drawer', { open: isMenuOpen })}>
                  <div className="drawer-header">
                    <Typography as="p">Menu</Typography>
                    <div className="drawer-close">
                      <HamburgerMenuIcon
                        onClick={() => setIsMenuOpen(false)}
                        isOpen
                      />
                    </div>
                  </div>
                  <div className="drawer-content">
                    {mobileNavigation.map((x) => {
                      const active =
                        pathname === x.link ||
                        pathname.startsWith(`${x.link}/`);
                      return (
                        <Link
                          href={x.link}
                          className={clsx(
                            'navigation-link navigation-mobile-link',
                            { active }
                          )}
                          key={x.label}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="content-wrapper">
                            <div className="icon-wrapper">{x.icon}</div>
                            <Typography as="p">{x.label}</Typography>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledHeader>
  );
};

export default Header;
