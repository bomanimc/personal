import { defineField, defineType } from "sanity";

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "year",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "tools",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "role",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "site",
      type: "url",
    }),
    defineField({
      title: "Primary Media (Cloudinary Key)",
      name: "primaryMedia",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "array",
      of: [{ type: "block" }],
      validation: rule => rule.required(),
    }),
    defineField({
      name: "otherMedia",
      type: "array",
      of: [{type: 'cloudinaryImage'}, {type: 'video'}],
    }),
  ],
});
