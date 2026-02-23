import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Personal Site')
    .items([
      S.documentTypeListItem('project').title('Projects'),
      S.documentTypeListItem('socialMedia').title('Social Media Links'),
      S.divider(),
      // TODO: Default to initial person info
      S.documentTypeListItem('personInfo').title('Personal Info'),
    ])
