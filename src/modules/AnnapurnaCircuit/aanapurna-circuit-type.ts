import { BlockType } from '@/types/block.type';
import { ImageType } from '@/types/image.type';

export type ItineraryDetailsType = {
  elevation: string;
  day: string;
  details: BlockType[];
};

export type AnnapuranCircuitType = {
  bannerImage: ImageType;
  itineraryDetails: ItineraryDetailsType[];
  bestSeason: string;
  transportation: string;
  accommodation: string;
  grade: string;
  highestPoint: string;
  duration: string;
  groupSize: string;
  culture: string;
  himalayanSight: string;
  attraction: string;
  whyBookWithUs: string[];
};
