import { BlockType } from '@/types/block.type';
import { ImageType } from '@/types/image.type';
import { TrekDetailsType } from '../TrekDetails/trek-details.types';

export type TrekPageType = {
  pageData: {
    bannerImage: ImageType;
    sectionDescription: BlockType[];
    title: string;
    helperText: string;
    sectionTitle: string;
  };
  trekList: TrekDetailsType[];
};
