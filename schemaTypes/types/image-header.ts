import {defineField, defineType} from 'sanity';

export const imageHeader = defineType({
	name: 'imageHeader',
	title: 'Image header',
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
			name: 'image',
			title: 'Image',
			type: 'imageWeb',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'style',
			title: 'Style',
			type: 'string',
			initialValue: 'STYLE_MEDIA_FOCUS',
			options: {
				list: [
					{
						title: 'Media focus',
						value: 'STYLE_MEDIA_FOCUS',
					},
					{
						title: 'Text focus',
						value: 'STYLE_TEXT_FOCUS',
					},
				],
			},
		}),
	],
});
