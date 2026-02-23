import { defineField, defineType } from "sanity";

export const socialMediaType = defineType({
  name: "socialMedia",
  title: "Social Media",
  type: "document",
  fields: [
    defineField({
      title: "Social Media Platform",
      name: "platform",
      type: "string",
    }),
    defineField({
      title: "Social Media URL",
      name: "url",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https", "mailto"],
        }),
    }),
  ],
});
