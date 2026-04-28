import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import Col from '../Col';
import Container from '../Container';
import Row from '../Row';
import Typography from '../Typography';

import { StyledDiv } from './style';
import { SITE_URL } from '@/constants/site.constant';

type Props = {
  crumbs: { label: string; href?: string }[];
  className?: string;
};

const BreadCrumbs = ({ crumbs, className }: Props) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      ...crumbs.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: crumb.label,
        ...(crumb.href && i < crumbs.length - 1
          ? { item: `${SITE_URL}${crumb.href}` }
          : {}),
      })),
    ],
  };

  return (
    <StyledDiv className={className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Container>
        <Row>
          <Col>
            <nav aria-label="Breadcrumb">
              <div className="crumb-wrapper">
                <Link href="/" className="bread-crumb-text">
                  Home
                </Link>
                {crumbs.map((x, i) => {
                  return (
                    <React.Fragment key={i}>
                      <Typography as="body1"> &gt;</Typography>
                      <Link
                        className={clsx('bread-crumb-text', {
                          disabled: i === crumbs.length - 1,
                        })}
                        href={x?.href || '#'}
                        {...(i === crumbs.length - 1 ? { 'aria-current': 'page' as const } : {})}
                      >
                        {x.label}
                      </Link>
                    </React.Fragment>
                  );
                })}
              </div>
            </nav>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  );
};

export default BreadCrumbs;
