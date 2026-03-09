import { BlockType } from '@/types/block.type';
import { ImageType } from '@/types/image.type';

type ItineraryDetailType = {
  itineraryTitle: string;
  itineraryDescription: BlockType[];
};

type keyHighlightsType = {
  title: string;
  description: BlockType[];
};

type EssentialTipsType = {
  title: string;
  description: BlockType[];
};

export type TrekDetailsType = {
  difficult: string;
  image: ImageType;
  rating: number;
  slug: {
    current: string;
  };
  title: string;
  trekDescription: BlockType[];
  costExclude: string[];
  costInclude: string[];
  essentialTips: EssentialTipsType[];
  helperTitle: string;
  imageGallery: [{ image: ImageType }];
  itineraryDetails: ItineraryDetailType[];
  keyHighlights: keyHighlightsType[];
};
