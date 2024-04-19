import groq from 'groq';

import {productFragment} from '@/groq/documents/product';
import {websiteFragment} from '@/groq/documents/website';

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
