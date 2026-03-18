export const siteSettingQuery = `*[_type == "siteSettings"][0]{
    siteTitle,
    logoImage,
    siteHelperText,
    footerLogoImage,
    address,
    city,
    gmail,
    footerText
  }
`;

export const homePageQuery = `{
  "homeData": *[_type == "home-page"][0]{
      "video": video.asset->url,
      title,
      animatedTextList,
      helperText,
      sectionTitle,
      popularTreks,
      contactUsTitle,
      contactUsInfo,
      contactUsNumber,
      whyChooseUsLabel,
      whyChooseUsHeading,
      features,
      testimonialLabel,
      testimonialHeading,
      testimonialList,
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

export const trekPageQuery = `{
  "pageData": *[_type == "trekPage"][0]{
    bannerImage,
    title,
    helperText,
    sectionDescription,
    sectionTitle
  },
  "trekList": *[_type == "trekDetails"] | order(region->order asc, title asc) {
    title,
    image,
    slug,
    rating,
    difficult,
    trekDescription,
    "regionName": region->name,
    "regionSlug": region->slug.current,
    "regionOrder": region->order
  },
  "regionList": *[_type == "trekkingRegion"] | order(order asc) {
    name,
    slug,
    image,
    "trekCount": count(*[_type == "trekDetails" && region._ref == ^._id])
  }
}`;

export const regionDetailQuery = `{
  "region": *[_type == "trekkingRegion" && slug.current == $slug][0]{
    name,
    slug,
    image
  },
  "trekList": *[_type == "trekDetails" && region->slug.current == $slug] | order(title asc) {
    title,
    image,
    slug,
    rating,
    difficult,
    trekDescription
  }
}`;

export const otherActivitiesPageQuery = `{
  "pageData": *[_type == "otherActivitiesPage"][0]{
    bannerImage,
    bannerTitle,
    bannerHelperText,
    heading,
    description,
    sectionTitle,
  },
  "activityList": *[_type == "activityDetails"] | order(title asc) {
    title,
    slug,
    image,
    shortDescription
  }
}`;

export const activityDetailsQuery = `*[_type == "activityDetails" && slug.current == $slug][0]{
  title,
  slug,
  image,
  shortDescription,
  description,
  highlights
}`;

export const trekDetailsQuery = `*[_type == "trekDetails" && slug.current == $slug][0]{
  title,
  image,
  slug,
  helperTitle,
  rating,
  difficult,
  trekDescription,
  keyHighlights,
  itineraryDetails,
  costInclude,
  costExclude,
  essentialTips,
  imageGallery
}`;
