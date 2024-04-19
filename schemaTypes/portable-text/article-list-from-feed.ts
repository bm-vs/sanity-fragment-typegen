import {defineField, defineType} from 'sanity';

export const articleListFromFeed = defineType({
	name: 'articleListFromFeed',
	title: 'Article list, from feed',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'articleFeed',
			title: 'Article feed',
			type: 'reference',
			to: [{type: 'articleFeed'}],
			validation: (Rule) => Rule.required(),
		}),
	],
});
