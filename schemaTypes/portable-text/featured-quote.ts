import {defineField, defineType} from 'sanity';

export const featuredQuote = defineType({
	name: 'featuredQuote',
	title: 'Featured quote',
	type: 'object',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'person',
			title: 'Person',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'quote',
			title: 'Quote',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'imageWeb',
		}),
	],
});
