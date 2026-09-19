import { defineField, defineType } from "sanity";

export const recordingCreditType = defineType({
  name: "recordingCredit",
  type: "document",
  fields: [
    defineField({
      name: "project",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "projectType",
      type: "string",
      options: {
        list: [
          { title: "EP", value: "EP" },
          { title: "Song", value: "Song" },
        ],
      },
    }),
    defineField({
      name: "band",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "Project URL",
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
  ],
});
