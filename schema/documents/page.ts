import {defineArrayMember, defineField, defineType} from 'sanity';

export const page = defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				isUnique: () => true,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'headers',
			title: 'Header',
			description: 'Header for the page. Only the first header in the list will be used.',
			type: 'array',
			of: [
				defineArrayMember({type: 'contentHeader'}),
				defineArrayMember({type: 'imageHeader'}),
			],
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'richPortableText',
		}),
	],
});
