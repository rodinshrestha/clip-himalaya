export type ActivityItem = {
  title: string;
  slug: { current: string };
  image: string;
  shortDescription: string;
};

export type OtherActivitiesPageType = {
  pageData: {
    bannerImage: string;
    bannerTitle: string;
    bannerHelperText: string;
    heading: string;
    description: string;
    sectionTitle: string;
  };
  activityList: ActivityItem[];
};

export type ActivityHighlight = {
  title: string;
  description: string;
};

export type ActivityDetailsType = {
  title: string;
  slug: { current: string };
  image: string;
  shortDescription: string;
  description: any[];
  highlights: ActivityHighlight[];
};
