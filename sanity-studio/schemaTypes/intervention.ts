import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'intervention',
  title: 'Intervention',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the intervention (e.g., Hernia inghinală)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      description: 'Unique identifier for the intervention (e.g., hernia-inghinala)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order for the intervention',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Duration of the intervention (e.g., 45-60 minutes)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hospitalization',
      title: 'Hospitalization (days)',
      type: 'number',
      description: 'Number of hospitalization days required',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price in EUR',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Detailed description of the intervention',
    }),
  ],
  orderings: [
    {
      title: 'Order (ascending)',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'}
      ]
    }
  ],
  initialValue: {
    order: 999
  },
  preview: {
    select: {
      title: 'name',
      order: 'order',
    },
    prepare({title, order}) {
      return {
        title: `${order ? `${order}. ` : ''}${title}`,
        subtitle: order ? `Order: ${order}` : 'No order set',
      }
    },
  },
})
