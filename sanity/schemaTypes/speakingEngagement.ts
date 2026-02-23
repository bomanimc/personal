import { defineField, defineType } from "sanity";

export const speakingEngagementType = defineType({
  name: "speakingEngagements",
  title: "Speaking Engagement",
  type: "document",
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Event",
      name: "event",
      type: "string",
    }),
    defineField({
      title: "Location",
      name: "location",
      type: "string",
    }),
    defineField({
      title: "Date",
      name: "date",
      type: "string",
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
    }),
  ],
});
