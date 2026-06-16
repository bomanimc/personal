import { defineField, defineType } from "sanity";

export const educationType = defineType({
  name: "education",
  type: "document",
  fields: [
    defineField({
      name: "org",
      title: "Organization / University",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "degree",
      title: "Degree or Certification",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "startDate",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "endDate",
      type: "string",
      validation: rule => rule.required(),
    }),
  ],
});
