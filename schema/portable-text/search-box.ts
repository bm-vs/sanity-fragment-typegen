import {defineField, defineType} from 'sanity';

export const searchBox = defineType({
	name: 'searchBox',
	title: 'Search box',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
	],
});
