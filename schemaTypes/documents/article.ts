import {defineArrayMember, defineField, defineType} from 'sanity';

export const article = defineType({
	name: 'article',
	title: 'Article',
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
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'heading',
			title: 'Heading',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'lead',
			title: 'Lead',
			type: 'text',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'imageWeb',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'content',
			title: 'Content',
			type: 'richPortableText',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'articleFeeds',
			title: 'Article feeds',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{type: 'articleFeed'}],
				}),
			],
			validation: (Rule) => Rule.required(),
		}),
	],
});
