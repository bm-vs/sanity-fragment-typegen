import {productInCardFragment} from '../documents/product-in-card';

export const productListAllFragment = `//groq
	_type,
	title,
	'products': *[_type == 'product'] | order(name desc) {
		${productInCardFragment}
	},
	'_ts': 'SanityProductListAll'
`;
