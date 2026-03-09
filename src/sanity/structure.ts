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
          ].includes(item.getId()!)
      ),
    ]);
