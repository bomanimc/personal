import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export const residencyType = defineType({
  name: "residency",
  title: "Residencies & Fellowships",
  type: "document",
  fields: [
    defineField({
      name: "organization",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "Organization URL",
      type: "url",
    }),
        defineField({
      name: "role",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    orderRankField({ type: "residency" }),
  ],
});
