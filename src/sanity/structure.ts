import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Dashboard')
    .items([
      // Site Settings
      S.listItem()
        .id('siteSettings')
        .title('Global Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),

      S.divider(),

      //Home Page
      S.listItem()
        .id('home-page')
        .title('Home Page')
        .child(S.document().schemaType('home-page').documentId('home-page')),

      // Annapurna Page Settings
      S.listItem()
        .id('annapurnaCircuitPage')
        .title('Annapurna Circuit Page')
        .child(
          S.document()
            .schemaType('annapurnaCircuitPage')
            .documentId('annapurnaCircuitPage')
        ),
      // Our Story Page
      S.listItem()
        .id('ourStoryPage')
        .title('Our Story Page')
        .child(
          S.document().schemaType('ourStoryPage').documentId('ourStoryPage')
        ),

      //Our Team Page
      S.listItem()
        .id('ourTeamPage')
        .title('Our Team  Page')
        .child(
          S.document().schemaType('ourTeamPage').documentId('ourTeamPage')
        ),

      // Contact Us Page
      S.listItem()
        .id('contactUsPage')
        .title('Contact Us  Page')
        .child(
          S.document().schemaType('contactUsPage').documentId('contactUsPage')
        ),

      // Term and condition page
      S.listItem()
        .id('termConditionpage')
        .title('Term and Condition Page')
        .child(
          S.document()
            .schemaType('termConditionpage')
            .documentId('termConditionpage')
        ),

      // Trek page
      S.listItem()
        .id('trekPage')
        .title('Trek Page')
        .child(S.document().schemaType('trekPage').documentId('trekPage')),

      // Other Activities Page
      S.listItem()
        .id('otherActivitiesPage')
        .title('Other Activities Page')
        .child(
          S.document()
            .schemaType('otherActivitiesPage')
            .documentId('otherActivitiesPage')
        ),

      // Activity List
      S.listItem()
        .id('activityDetails')
        .title('Activity List')
        .child(
          S.documentTypeList('activityDetails').title('Activity List')
        ),

      S.divider(),

      // Trekking Region — manages regions
      S.listItem()
        .id('trekkingRegion')
        .title('Trekking Region')
        .child(
          S.documentTypeList('trekkingRegion').title('Trekking Region')
        ),

      // Trek List — grouped by region
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
                    .filter(
                      '_type == "trekDetails" && region._ref == "region-everest"'
                    )
                ),
              S.listItem()
                .id('treks-annapurna')
                .title('Annapurna Region')
                .child(
                  S.documentList()
                    .title('Annapurna Region Treks')
                    .schemaType('trekDetails')
                    .filter(
                      '_type == "trekDetails" && region._ref == "region-annapurna"'
                    )
                ),
              S.listItem()
                .id('treks-langtang')
                .title('Langtang Region')
                .child(
                  S.documentList()
                    .title('Langtang Region Treks')
                    .schemaType('trekDetails')
                    .filter(
                      '_type == "trekDetails" && region._ref == "region-langtang"'
                    )
                ),
              S.listItem()
                .id('treks-manaslu')
                .title('Manaslu Region')
                .child(
                  S.documentList()
                    .title('Manaslu Region Treks')
                    .schemaType('trekDetails')
                    .filter(
                      '_type == "trekDetails" && region._ref == "region-manaslu"'
                    )
                ),
              S.listItem()
                .id('treks-dhaulagiri')
                .title('Dhaulagiri Region')
                .child(
                  S.documentList()
                    .title('Dhaulagiri Region Treks')
                    .schemaType('trekDetails')
                    .filter(
                      '_type == "trekDetails" && region._ref == "region-dhaulagiri"'
                    )
                ),
              S.listItem()
                .id('treks-other')
                .title('Other Region')
                .child(
                  S.documentList()
                    .title('Other Region Treks')
                    .schemaType('trekDetails')
                    .filter(
                      '_type == "trekDetails" && region._ref == "region-other"'
                    )
                ),
              S.divider(),
              S.listItem()
                .id('treks-unassigned')
                .title('Unassigned Treks')
                .child(
                  S.documentList()
                    .title('Treks Without Region')
                    .schemaType('trekDetails')
                    .filter(
                      '_type == "trekDetails" && !defined(region)'
                    )
                ),
            ])
        ),

      S.divider(),
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
            'trekPage',
            'trekDetails',
            'trekkingRegion',
            'otherActivitiesPage',
            'activityDetails',
          ].includes(item.getId()!)
      ),
    ]);
