import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Dashboard')
    .items([
      // ─── Inquiries (most frequently checked) ───
      S.listItem()
        .id('contactSubmission')
        .title('User Inquiry')
        .child(
          S.list()
            .title('User Inquiry')
            .items([
              S.listItem()
                .id('unread-inquiries')
                .title('Unread Inquiries')
                .icon(() => '🔴')
                .child(
                  S.documentList()
                    .title('Unread Inquiries')
                    .schemaType('contactSubmission')
                    .filter('_type == "contactSubmission" && (isRead != true)')
                    .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
                ),
              S.listItem()
                .id('read-inquiries')
                .title('Read Inquiries')
                .icon(() => '✅')
                .child(
                  S.documentList()
                    .title('Read Inquiries')
                    .schemaType('contactSubmission')
                    .filter('_type == "contactSubmission" && isRead == true')
                    .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
                ),
              S.divider(),
              S.listItem()
                .id('all-inquiries')
                .title('All Inquiries')
                .child(
                  S.documentList()
                    .title('All Inquiries')
                    .schemaType('contactSubmission')
                    .filter('_type == "contactSubmission"')
                    .defaultOrdering([{ field: '_createdAt', direction: 'desc' }])
                ),
            ])
        ),

      S.divider(),

      // ─── Trek Content (frequently updated) ───
      S.listItem()
        .id('trekDetails')
        .title('Trek List')
        .child(
          S.list()
            .title('Trek List')
            .items([
              S.listItem()
                .id('allTreks')
                .title('All Treks')
                .child(
                  S.documentTypeList('trekDetails')
                    .title('All Treks')
                    .defaultOrdering([{ field: 'title', direction: 'asc' }])
                ),
              S.divider(),
              S.listItem()
                .id('treks-everest')
                .title('Everest Region')
                .child(
                  S.documentList()
                    .title('Everest Region Treks')
                    .schemaType('trekDetails')
                    .filter('_type == "trekDetails" && region._ref == "region-everest"')
                ),
              S.listItem()
                .id('treks-annapurna')
                .title('Annapurna Region')
                .child(
                  S.documentList()
                    .title('Annapurna Region Treks')
                    .schemaType('trekDetails')
                    .filter('_type == "trekDetails" && region._ref == "region-annapurna"')
                ),
              S.listItem()
                .id('treks-langtang')
                .title('Langtang Region')
                .child(
                  S.documentList()
                    .title('Langtang Region Treks')
                    .schemaType('trekDetails')
                    .filter('_type == "trekDetails" && region._ref == "region-langtang"')
                ),
              S.listItem()
                .id('treks-manaslu')
                .title('Manaslu Region')
                .child(
                  S.documentList()
                    .title('Manaslu Region Treks')
                    .schemaType('trekDetails')
                    .filter('_type == "trekDetails" && region._ref == "region-manaslu"')
                ),
              S.divider(),
              S.listItem()
                .id('treks-unassigned')
                .title('Unassigned Treks')
                .child(
                  S.documentList()
                    .title('Treks Without Region')
                    .schemaType('trekDetails')
                    .filter('_type == "trekDetails" && !defined(region)')
                ),
            ])
        ),

      S.listItem()
        .id('trekkingRegion')
        .title('Trekking Region')
        .child(
          S.documentTypeList('trekkingRegion').title('Trekking Region')
        ),

      S.listItem()
        .id('activityDetails')
        .title('Activity List')
        .child(
          S.documentTypeList('activityDetails').title('Activity List')
        ),

      S.divider(),

      // ─── Pages (edited occasionally) ───
      S.listItem()
        .id('home-page')
        .title('Home Page')
        .child(S.document().schemaType('home-page').documentId('home-page')),

      S.listItem()
        .id('trekPage')
        .title('Trek Page')
        .child(S.document().schemaType('trekPage').documentId('trekPage')),

      S.listItem()
        .id('otherActivitiesPage')
        .title('Other Activities Page')
        .child(
          S.document()
            .schemaType('otherActivitiesPage')
            .documentId('otherActivitiesPage')
        ),

      S.listItem()
        .id('ourStoryPage')
        .title('Our Story Page')
        .child(
          S.document().schemaType('ourStoryPage').documentId('ourStoryPage')
        ),

      S.listItem()
        .id('ourTeamPage')
        .title('Our Team Page')
        .child(
          S.document().schemaType('ourTeamPage').documentId('ourTeamPage')
        ),

      S.listItem()
        .id('contactUsPage')
        .title('Contact Us Page')
        .child(
          S.document().schemaType('contactUsPage').documentId('contactUsPage')
        ),

      S.divider(),

      // ─── Legal & Settings (rarely edited) ───
      S.listItem()
        .id('termConditionpage')
        .title('Terms & Conditions')
        .child(
          S.document()
            .schemaType('termConditionpage')
            .documentId('termConditionpage')
        ),

      S.listItem()
        .id('privacyPolicyPage')
        .title('Privacy Policy')
        .child(
          S.document()
            .schemaType('privacyPolicyPage')
            .documentId('privacyPolicyPage')
        ),

      S.listItem()
        .id('siteSettings')
        .title('Global Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),

      // Filter out all manually defined types from auto-generated list
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            'home-page',
            'siteSettings',
            'annapurnaCircuitPage',
            'ourStoryPage',
            'ourTeamPage',
            'contactUsPage',
            'termConditionpage',
            'privacyPolicyPage',
            'trekPage',
            'trekDetails',
            'trekkingRegion',
            'otherActivitiesPage',
            'activityDetails',
            'contactSubmission',
          ].includes(item.getId()!)
      ),
    ]);
