import {productInCardFragment} from '../documents/product-in-card';

export const productListSelectionFragment = `//groq
	_type,
	products[]-> {
		${productInCardFragment}
	},
	'_ts': 'SanityProductListSelection'
`;
