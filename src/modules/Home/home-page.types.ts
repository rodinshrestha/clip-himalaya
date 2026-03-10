import { ImageType } from '@/types/image.type';
import { MemberType } from '../OurTeam/our-team.type';

type PopularTrek = {
  image: ImageType;
  titles: string[];
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
};

export type HomePageType = {
  homeData: HomeData;
  memberList: {
    memberList: MemberType[];
  };
};
