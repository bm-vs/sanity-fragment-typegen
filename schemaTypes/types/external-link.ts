import {defineField, defineType} from 'sanity';

export const externalLink = defineType({
	name: 'externalLink',
	title: 'External link',
	description: 'The URL to an external site, or a mailto: or tel: URI',
	type: 'object',
	fields: [
		defineField({
			name: 'text',
			title: 'Text',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'url',
			validation: (Rule) =>
				Rule.required().uri({
					allowRelative: true,
					scheme: ['https', 'http', 'mailto', 'tel'],
				}),
		}),
	],
});
