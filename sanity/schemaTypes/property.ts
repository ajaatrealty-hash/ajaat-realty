import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'developer',
      title: 'Developer',
      type: 'string',
      initialValue: 'Ajaat Realty',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. Punawale',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      description: 'e.g. Pune',
    }),
    defineField({
      name: 'propertyType',
      title: 'Property Type',
      type: 'string',
      description: 'e.g. Residential, Commercial',
    }),
    defineField({
      name: 'configuration',
      title: 'Configuration',
      type: 'string',
      description: 'e.g. 2 & 3 BHK',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. ₹85 Lakh onwards',
    }),
    defineField({
      name: 'area',
      title: 'Area',
      type: 'string',
      description: 'e.g. 850 – 1200 sq.ft.',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Ready Possession', value: 'Ready Possession'},
          {title: 'Under Construction', value: 'Under Construction'},
          {title: 'New Launch', value: 'New Launch'},
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'location',
      media: 'image',
    },
  },
})