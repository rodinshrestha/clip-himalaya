import { BlockType } from '@/types/block.type';
import { ImageType } from '@/types/image.type';

export type MemberType = {
  memberDesignation: string;
  memberImage: ImageType;
  memberName: string;
  showOnHomepage?: boolean;
};

type Faq = {
  question: string;
  answer: string;
};

export type OurTeamType = {
  bannerImage: ImageType;
  bannerText: BlockType[];
  sectionTitle: string;
  sectionDescription: BlockType[];
  memberList: MemberType[];
  faqList: Faq[];
};
