import { defineField, defineType } from "sanity";

export const cloudinaryImageType = defineType({
  name: "cloudinaryImage",
  title: "Cloudinary Image",
  type: "document",
  fields: [
    defineField({
      name: "cloudinaryKey",
      type: "string",
    }),
  ],
});
