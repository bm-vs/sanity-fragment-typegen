import {defineArrayMember, defineType} from 'sanity';

export const basicPortableText = defineType({
	name: 'basicPortableText',
	title: 'Text',
	type: 'array',
	of: [
		defineArrayMember({
			type: 'extendedBlock',
		}),
	],
});
