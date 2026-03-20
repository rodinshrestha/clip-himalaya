import { BlockType } from '@/types/block.type';
import { ImageType } from '@/types/image.type';

export type LegalSection = {
  title: string;
  content: BlockType[];
};

export type TermConditionType = {
  bannerImage: ImageType;
  bannerTitle?: string;
  lastUpdated?: string;
  sections?: LegalSection[];
  termConditionList?: string[];
};
