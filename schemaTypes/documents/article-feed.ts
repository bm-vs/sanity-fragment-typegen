import {defineField, defineType} from 'sanity';

export const articleFeed = defineType({
	name: 'articleFeed',
	title: 'Article feed',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
	],
});
