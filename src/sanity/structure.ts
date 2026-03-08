import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Dashboard')
    .items([
      //Home Page
      S.listItem()
        .id('home-page')
        .title('Home Page')
        .child(S.document().schemaType('home-page').documentId('home-page')),

      // Site Settings
      S.listItem()
        .id('siteSettings')
        .title('Site Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings')
        ),

      // Annapurna Page Settings
      S.listItem()
        .id('annapurnaCircuitPage')
        .title('Annapurna Circuit Page Settings')
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
          ].includes(item.getId()!)
      ),
    ]);
