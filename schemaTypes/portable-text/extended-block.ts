import {defineField, defineType} from 'sanity';

export const extendedBlock = defineType({
	name: 'extendedBlock',
	title: 'Extended block',
	type: 'block',
	styles: [
		{
			title: 'Normal',
			value: 'normal',
		},
		{
			title: 'H2',
			value: 'h2',
		},
		{
			title: 'H3',
			value: 'h3',
		},
		{
			title: 'H4',
			value: 'h4',
		},
		{
			title: 'H5',
			value: 'h5',
		},
		{
			title: 'H6',
			value: 'h6',
		},
	],
	marks: {
		annotations: [
			defineField({
				name: 'internalLink',
				title: 'Internal link',
				type: 'internalLink',
			}),
			defineField({
				name: 'externalLink',
				title: 'External link',
				type: 'externalLink',
			}),
		],
	},
});
