import {defineArrayMember, defineField, defineType} from 'sanity';

export const contentHeader = defineType({
	name: 'contentHeader',
	title: 'Content header',
	type: 'object',
	fields: [
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
			name: 'shortcuts',
			title: 'Shortcuts',
			type: 'array',
			description: 'Shortcut link to content related to this page',
			of: [
				defineArrayMember({type: 'internalLink'}),
				defineArrayMember({type: 'externalLink'}),
			],
			validation: (Rule) => Rule.max(4),
		}),
	],
});
