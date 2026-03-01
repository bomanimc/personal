import { defineField, defineType } from "sanity";

export const interviewType = defineType({
  name: "interview",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "organization",
      type: "string",
    }),
    defineField({
      name: "location",
      type: "string",
    }),
    defineField({
      name: "date",
      type: "string",
    }),
    defineField({
      name: "url",
      type: "url",
    }),
  ],
});
