import { defineField, defineType } from "sanity";
import {orderRankField} from '@sanity/orderable-document-list'

export const featuredProjectType = defineType({
  name: "featuredProject",
  type: "document",
  fields: [
    defineField({
      name: "project",
      type: "reference",
      to: [{type: 'project'}],
      validation: rule => rule.required(),
    }),
    orderRankField({ type: "featuredProject" }),
  ],
});
