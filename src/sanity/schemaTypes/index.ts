import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { homePageType } from './homePageType';
import { siteSettingType } from './siteSetting';

import { ourStoryPageType } from './ourStoryPageType';
import { ourTeamPageType } from './ourTeamPageType';
import { contactUsPageType } from './contactUsPageType';
import { termConditionPageType } from './termsConditionPageType';
import { contactSubmissionType } from './contactSubmissionType';
import { trekPageType } from './trekPageType';
import { trekDetailsType } from './trekDetailsType';
import { activityDetailsType } from './activityDetailsType';
import { otherActivitiesPageType } from './otherActivitiesPageType';
import { trekkingRegionType } from './trekkingRegionType';
import { privacyPolicyPageType } from './privacyPolicyPageType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    siteSettingType,
    homePageType,

    ourStoryPageType,
    ourTeamPageType,
    contactUsPageType,
    termConditionPageType,
    contactSubmissionType,
    trekPageType,
    trekDetailsType,
    trekkingRegionType,
    activityDetailsType,
    otherActivitiesPageType,
    privacyPolicyPageType,
  ],
};
