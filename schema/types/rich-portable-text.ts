import {defineArrayMember, defineType} from 'sanity';

export const richPortableText = defineType({
	name: 'richPortableText',
	title: 'Text',
	type: 'array',
	of: [
		defineArrayMember({type: 'articleListAll'}),
		defineArrayMember({type: 'articleListFromFeed'}),
		defineArrayMember({type: 'articleListSelection'}),
		defineArrayMember({type: 'extendedBlock'}),
		defineArrayMember({type: 'featuredQuote'}),
		defineArrayMember({type: 'imageGallery'}),
		defineArrayMember({type: 'productListAll'}),
		defineArrayMember({type: 'productListSelection'}),
		defineArrayMember({type: 'searchBox'}),
		defineArrayMember({type: 'youTubeVideo'}),
	],
});
