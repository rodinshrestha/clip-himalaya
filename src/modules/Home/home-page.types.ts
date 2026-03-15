import { ImageType } from '@/types/image.type';
import { MemberType } from '../OurTeam/our-team.type';

type PopularTrek = {
  image: ImageType;
  titles: string[];
};

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

type HomeData = {
  title: string;
  animatedTextList: string[];
  helperText: string;
  sectionTitle: string;
  popularTreks: PopularTrek[];
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
};
