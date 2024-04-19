import {defineField, defineType} from 'sanity';

export const product = defineType({
	name: 'product',
	title: 'Product',
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
			options: {
				source: 'name',
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'tagline',
			title: 'Tagline',
			description: 'A short tagline can be used alongside the name.',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			description:
				'Short lead introducing the product type. Should be short, consise and limited to a paragraph or two.',
			type: 'basicPortableText',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'mainImage',
			title: 'Main image',
			description: 'This will be used as the product image in the header.',
			type: 'imageWeb',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'tag',
			title: 'Tag',
			description:
				'Optional tag that can be used to draw the user\'s attention. For instance "Bestseller" or "New".',
			type: 'string',
		}),
		defineField({
			name: 'content',
			title: 'Content',
			description: 'Content that describes the product type.',
			type: 'richPortableText',
		}),
		defineField({
			name: 'supplementaryContent',
			title: 'Supplementary content',
			description: 'Less important content that supplements the main content.',
			type: 'richPortableText',
		}),
	],
});
