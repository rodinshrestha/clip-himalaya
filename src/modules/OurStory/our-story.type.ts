import { BlockType } from '@/types/block.type';
import { ImageType } from '@/types/image.type';

export type OurStoryType = {
  bannerImage: ImageType;
  bannerTitle: string;
  bannerHelperText: string;
  ourStoryDescription: BlockType[];
  galleryImages: ImageType[];
};
