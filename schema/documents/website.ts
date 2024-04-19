import {defineArrayMember, defineField, defineType} from 'sanity';

export const website = defineType({
	name: 'website',
	title: 'Website',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'frontPage',
			title: 'Front page',
			description: "Selects the page to use as the site's front page.",
			type: 'reference',
			to: [{type: 'page'}],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'mainMenu',
			title: 'Main menu',
			description: 'The most prominent menu displayed in the header',
			type: 'array',
			of: [
				defineArrayMember({type: 'internalLink'}),
				defineArrayMember({type: 'externalLink'}),
			],
		}),
		defineField({
			name: 'contactInfo',
			type: 'object',
			title: 'Contact information',
			fields: [
				defineField({
					name: 'orgName',
					type: 'string',
					title: 'Organization name',
				}),
				defineField({
					name: 'orgNr',
					type: 'string',
					title: 'Organization number',
				}),
				defineField({
					name: 'address',
					type: 'string',
					title: 'Address',
					validation: (Rule) => Rule.required(),
				}),
				defineField({
					name: 'postalCode',
					type: 'string',
					title: 'Postal code',
					validation: (Rule) => Rule.required(),
				}),
				defineField({
					name: 'city',
					type: 'string',
					title: 'City',
					validation: (Rule) => Rule.required(),
				}),
			],
		}),
	],
});
