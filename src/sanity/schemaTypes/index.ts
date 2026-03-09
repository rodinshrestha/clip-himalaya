import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
// import { categoryType } from './categoryT/ype';
// import { postType } from './postType';
// import { authorType } from './authorType';
import { homePageType } from './homePageType';
import { siteSettingType } from './siteSetting';
import { annapurnaCircuitPageType } from './annapurnaCircuitPageType';
import { ourStoryPageType } from './ourStoryPageType';
import { ourTeamPageType } from './ourTeamPageType';
import { contactUsPageType } from './contactUsPageType';
import { termConditionPageType } from './termsConditionPageType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    siteSettingType,
    homePageType,
    annapurnaCircuitPageType,
    ourStoryPageType,
    ourTeamPageType,
    contactUsPageType,
    termConditionPageType,
  ],
};
