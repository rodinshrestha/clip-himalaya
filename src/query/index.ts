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
