'use client';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Images, ZoomIn } from 'lucide-react';

import ImageWithFallback from '@/components/ImageWithFallBack';
import { urlFor } from '@/sanity/client';

import TrekkingTitleSection from '../TrekkingTitleSection';
import { TrekDetailsType } from '../../trek-details.types';
import { StyledDiv } from './style';

type Props = {
  data: TrekDetailsType;
};

const Gallery = ({ data }: Props) => {
  const imageGallery = data?.imageGallery || [];

  if (!imageGallery.length) return null;

  return (
    <StyledDiv id="gallery">
      <TrekkingTitleSection icon={Images} title="GALLERY" />
      <p className="gallery-hint">
        <ZoomIn size={14} />
        Click any image to view full size
      </p>
      <PhotoProvider>
        <div className="photo-grid">
          {imageGallery.map((x, i) => {
            const imageUrl = urlFor(x.image).width(600).quality(80).url();
            return (
              <PhotoView key={i} src={imageUrl}>
                <div className="grid-item">
                  <ImageWithFallback
                    src={imageUrl}
                    alt={`Gallery ${i + 1}`}
                    fill
                  />
                  <div className="grid-overlay">
                    <ZoomIn size={22} />
                    <span className="overlay-text">Preview</span>
                  </div>
                </div>
              </PhotoView>
            );
          })}
        </div>
      </PhotoProvider>
    </StyledDiv>
  );
};

export default Gallery;
