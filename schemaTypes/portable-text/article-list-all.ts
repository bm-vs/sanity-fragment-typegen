import {defineField, defineType} from 'sanity';

export const articleListAll = defineType({
	name: 'articleListAll',
	title: 'Article list, all',
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
