import {defineArrayMember, defineField, defineType} from 'sanity';

export const productListSelection = defineType({
	name: 'productListSelection',
	title: 'Product list, selection',
	type: 'object',
	fields: [
		defineField({
			name: 'products',
			title: 'Products',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{type: 'product'}],
				}),
			],
		}),
	],
});
