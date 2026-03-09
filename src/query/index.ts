export const siteSettingQuery = `*[_type == "siteSettings"][0]{
    siteTitle,
    logoImage,
    siteHelperText,
    footerLogoImage,
    address,
    city,
    gmail
  }
`;

export const homePageQuery = `{
  "homeData": *[_type == "home-page"][0]{
      title,
      animatedTextList,
      helperText,
      sectionTitle,
      popularTreks,
      contactUsTitle,
      contactUsInfo,
      contactUsNumber,
  },
  "memberList": *[_type == "ourTeamPage"][0]{
      memberList
  }
}`;

export const annapurnaPageQuery = `*[_type == "annapurnaCircuitPage"][0]{
    bannerImage,
    itineraryDetails,
    bestSeason,
    transportation,
    accommodation,
    grade,
    highestPoint,
    duration,
    groupSize,
    culture,
    himalayanSight,
    attraction,
    whyBookWithUs
  }
`;

export const ourStoryQuery = `*[_type == "ourStoryPage"][0]{
    galleryImages,
    ourStoryDescription,
  }
`;

export const ourTeamPageQuery = `*[_type == "ourTeamPage"][0]{
    bannerImage,
    bannerText,
    sectionTitle,
    sectionDescription,
    memberList,
    faqList
  }
`;

export const ContactUsPageQuery = `{
  "contact": *[_type == "contactUsPage"][0]{
    bannerImage,
    title,
    helperText,
    phoneNumber,
    mobileNumber,
    officeHour
  },
  "address": *[_type == "siteSettings"][0]{
    address,
    city,
    gmail
  }
}`;

export const termConditionPageQuery = `*[_type == "termConditionpage"][0]{
    bannerImage,
    termConditionList,
  }
`;
