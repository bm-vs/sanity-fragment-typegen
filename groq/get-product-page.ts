import groq from 'groq';

import {productFragment} from './documents/product';
import {websiteFragment} from './documents/website';

export const getProductPageBySlugQuery = groq`
	{
		'website': *[_type == 'website' && _id == 'websiteSingleton'][0] {
            ${websiteFragment}
        },
		'product': *[ _type == 'product' && slug.current == $slug][0] {
			${productFragment}
		}
	}
`;
