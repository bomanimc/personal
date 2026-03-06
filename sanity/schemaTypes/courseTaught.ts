import { defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";

export const courseTaughtType = defineType({
  name: "courseTaught",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "institution",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "program",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "location",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "date",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "url",
      type: "url",
    }),
    orderRankField({ type: "courseTaught" }),
  ],
});
