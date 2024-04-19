import {defineField, defineType} from 'sanity';

export const productListAll = defineType({
	name: 'productListAll',
	title: 'Product list, all',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
	],
});
