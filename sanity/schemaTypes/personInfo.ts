import {defineField, defineType} from 'sanity'

export const personInfoType = defineType({
  name: 'personInfo',
  title: 'Person Info',
  type: 'document',
  fields: [
    defineField({
      title: 'Biography', 
      name: 'bio',
      type: 'array', 
      of: [{type: 'block'}]
    }),
  ],
});
