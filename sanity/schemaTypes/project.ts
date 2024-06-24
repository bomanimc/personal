import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}]
    }),
  ],
});
