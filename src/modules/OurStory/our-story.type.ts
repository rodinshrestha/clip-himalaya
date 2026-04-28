import { BlockType } from '@/types/block.type';
import { ImageType } from '@/types/image.type';

type ValueItem = {
  title: string;
  description: string;
};

export type OurStoryType = {
  bannerImage: ImageType;
  bannerTitle: string;
  bannerHelperText: string;
  ourStoryDescription: BlockType[];
  valuesList?: ValueItem[];
  sustainabilityStatement?: BlockType[];
  galleryImages: ImageType[];
};
