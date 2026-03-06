import { defineField, defineType } from "sanity";

export const speakingEngagementType = defineType({
  name: "speakingEngagement",
  title: "Speaking Engagement",
  type: "document",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Event",
      name: "event",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Location",
      name: "location",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Date",
      name: "date",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "URL",
      name: "url",
      type: "url",
    }),
    defineField({
      title: "Is Name the title?",
      name: "isNameTitle",
      type: "boolean",
      validation: rule => rule.required(),
    }),
  ],
});
