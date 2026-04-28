import { ImageType } from '@/types/image.type';
import { MemberType } from '../OurTeam/our-team.type';

export type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

export type TestimonialItem = {
  name: string;
  trek: string;
  rating: number;
  review: string;
};

export type RegionItem = {
  name: string;
  slug: { current: string };
  image: ImageType;
  tagline?: string;
  elevation?: string;
  trekCount: number;
};

type HomeData = {
  title: string;
  animatedTextList: string[];
  helperText: string;
  regionsLabel: string;
  regionsHeading: string;
  contactUsTitle: string;
  contactUsInfo: string;
  contactUsNumber: string;
  video: string;
  whyChooseUsLabel: string;
  whyChooseUsHeading: string;
  features: FeatureItem[];
  testimonialLabel: string;
  testimonialHeading: string;
  testimonialList: TestimonialItem[];
};

export type HomePageType = {
  homeData: HomeData;
  memberList: {
    memberList: MemberType[];
  };
  regionList: RegionItem[];
};
