import type {StructureResolver} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Personal Site')
    .items([
      orderableDocumentListDeskItem({type: 'featuredProject', title: 'Featured Project', S, context}),
      S.documentTypeListItem('project').title('Projects'),
      orderableDocumentListDeskItem({type: 'socialMedia', title: 'Social Media Links', S, context}),
      S.divider(),
      // TODO: Default to initial person info
      S.documentTypeListItem('personInfo').title('Personal Info'),
      orderableDocumentListDeskItem({type: 'courseTaught', title: 'Courses Taught', S, context}),
      S.documentTypeListItem('speakingEngagement'),
      S.documentTypeListItem('interview'),
      S.documentTypeListItem('exhibition'),
      orderableDocumentListDeskItem({type: 'residency', title: 'Residencies & Fellowships', S, context}),
      // TODO: See of there's a way to add new schema types to list by default
    ])
