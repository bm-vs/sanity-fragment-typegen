import {defineField, defineType} from 'sanity';

export const youTubeVideo = defineType({
	name: 'youTubeVideo',
	type: 'object',
	title: 'YouTube Video',
	fields: [
		defineField({
			name: 'url',
			type: 'url',
			title: 'YouTube video URL',
			validation: (Rule) => Rule.required(),
		}),
	],
});
