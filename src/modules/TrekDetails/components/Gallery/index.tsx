'use client';
import React, { useState } from 'react';

import { Images, X, ChevronLeft, ChevronRight } from 'lucide-react';

import ImageWithFallback from '@/components/ImageWithFallBack';
import { urlFor } from '@/sanity/client';

import TrekkingTitleSection from '../TrekkingTitleSection';
import { TrekDetailsType } from '../../trek-details.types';

import { StyledDiv } from './style';

type Props = {
  data: TrekDetailsType;
};

const Gallery = ({ data }: Props) => {
  const { imageGallery = [] } = data || {};
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % imageGallery.length);
    }
  };

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + imageGallery.length) % imageGallery.length
      );
    }
  };

  if (!imageGallery.length) return null;

  return (
    <StyledDiv id="gallery">
      <TrekkingTitleSection icon={Images} title="GALLERY" />

      <div className="photo-grid">
        {imageGallery.map((x, i) => {
          const imageUrl = urlFor(x.image).width(600).quality(80).url();
          return (
            <div
              key={i}
              className={`grid-item ${i === 0 ? 'grid-item--large' : ''}`}
              onClick={() => openLightbox(i)}
            >
              <ImageWithFallback src={imageUrl} alt={`Gallery ${i + 1}`} fill />
              <div className="grid-overlay">
                <Images size={20} />
              </div>
            </div>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={24} />
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
          >
            <ChevronLeft size={32} />
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <ImageWithFallback
              src={urlFor(imageGallery[lightboxIndex].image)
                .width(1200)
                .quality(90)
                .url()}
              alt={`Gallery ${lightboxIndex + 1}`}
              fill
            />
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
          >
            <ChevronRight size={32} />
          </button>

          <div className="lightbox-counter">
            {lightboxIndex + 1} / {imageGallery.length}
          </div>
        </div>
      )}
    </StyledDiv>
  );
};

export default Gallery;
