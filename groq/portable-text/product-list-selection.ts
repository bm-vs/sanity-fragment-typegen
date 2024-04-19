import {productInCardFragment} from '@/groq/documents/product-in-card';

export const productListSelectionFragment = `//groq
	_type,
	products[]-> {
		${productInCardFragment}
	},
	'_ts': 'SanityProductListSelection'
`;
