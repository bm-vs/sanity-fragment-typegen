import {defineType} from 'sanity';

export const internalLink = defineType({
	name: 'internalLink',
	title: 'Internal link',
	type: 'object',
	description: 'Link to an internal page or other linkable document',
	fields: [
		{
			name: 'reference',
			title: 'Reference',
			type: 'reference',
			to: [{type: 'article'}, {type: 'page'}, {type: 'product'}],
		},
	],
});
