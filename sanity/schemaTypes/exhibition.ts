import { defineField, defineType } from "sanity";

export const exhibitionType = defineType({
  name: "exhibition",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "gallery",
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
  ],
});
