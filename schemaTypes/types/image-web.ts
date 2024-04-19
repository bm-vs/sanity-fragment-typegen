import {defineField, defineType} from 'sanity';

export const imageWeb = defineType({
	name: 'imageWeb',
	title: 'Image',
	type: 'image',
	options: {
		hotspot: true,
	},
	fields: [
		defineField({
			name: 'altText',
			title: 'Alternative text',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'credit',
			title: 'Photo credit',
			type: 'string',
		}),
		defineField({
			name: 'caption',
			title: 'Caption',
			type: 'string',
		}),
	],
});
