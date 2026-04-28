import { BlockType } from '@/types/block.type';
import { ImageType } from '@/types/image.type';

type ItineraryDetailType = {
  itineraryTitle: string;
  itineraryDescription: BlockType[];
  elevation?: string;
  walkingHours?: string;
};

type keyHighlightsType = {
  title: string;
  description: BlockType[];
};

type EssentialTipsType = {
  title: string;
  description: BlockType[];
};

type FaqItemType = {
  question: string;
  answer: string;
};

export type TrekDetailsType = {
  difficult: string;
  image: ImageType;
  rating: number;
  slug: { current: string };
  title: string;
  trekDescription: BlockType[];
  costExclude: string[];
  costInclude: string[];
  essentialTips: EssentialTipsType[];
  helperTitle: string;
  imageGallery: { image: ImageType }[];
  itineraryDetails: ItineraryDetailType[];
  keyHighlights: keyHighlightsType[];
  // Quick facts
  duration?: string;
  maxElevation?: string;
  bestSeasons?: string;
  startPoint?: string;
  endPoint?: string;
  groupSize?: string;
  permits?: string;
  // Extended sections
  fitnessGuidance?: string;
  accommodationNotes?: string;
  permitDetails?: string;
  packingEssentials?: string[];
  faqList?: FaqItemType[];
};
