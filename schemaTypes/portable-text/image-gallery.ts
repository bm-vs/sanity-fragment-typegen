import {defineArrayMember, defineField, defineType} from 'sanity';

export const imageGallery = defineType({
	name: 'imageGallery',
	title: 'Image Gallery',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [defineArrayMember({type: 'imageWeb'})],
			validation: (Rule) => Rule.min(1),
		}),
		defineField({
			name: 'text',
			title: 'Text',
			type: 'basicPortableText',
		}),
		defineField({
			name: 'aspectRatio',
			title: 'Aspect Ratio',
			description: 'Default is 16:9. It will apply for all images in the gallery.',
			type: 'string',
			initialValue: 'ASPECT_RATIO_16_9',
			options: {
				list: [
					{
						title: '1:1',
						value: 'IMAGE_ASPECT_RATIO_1_1',
					},
					{
						title: '4:3',
						value: 'IMAGE_ASPECT_RATIO_4_3',
					},
					{
						title: '16:9',
						value: 'IMAGE_ASPECT_RATIO_16_9',
					},
				],
			},
		}),
	],
});
