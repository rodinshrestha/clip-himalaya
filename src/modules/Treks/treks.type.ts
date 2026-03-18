import { BlockType } from '@/types/block.type';
import { ImageType } from '@/types/image.type';
import { TrekDetailsType } from '../TrekDetails/trek-details.types';

export type TrekkingRegionType = {
  name: string;
  slug: {
    current: string;
  };
  image: ImageType;
  trekCount: number;
};

export type TrekPageType = {
  pageData: {
    bannerImage: ImageType;
    sectionDescription: BlockType[];
    title: string;
    helperText: string;
    sectionTitle: string;
  };
  trekList: (TrekDetailsType & {
    regionName?: string;
    regionSlug?: string;
  })[];
  regionList: TrekkingRegionType[];
};
