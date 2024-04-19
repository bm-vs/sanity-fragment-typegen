import {defineArrayMember, defineField, defineType} from 'sanity';

export const articleListSelection = defineType({
	name: 'articleListSelection',
	title: 'Article list, selection',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'articles',
			title: 'Articles',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{type: 'article'}],
				}),
			],
			validation: (Rule) => Rule.required(),
		}),
	],
});
