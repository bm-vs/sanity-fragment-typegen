import groq from 'groq';

import {pageFragment} from './documents/page';
import {websiteFragment} from './documents/website';

export const getPageBySlugQuery = groq`
	{
		'website': *[_type == 'website' && _id == 'websiteSingleton'][0] {
            ${websiteFragment}
        },
		'page': *[ _type == 'page' && slug.current == $slug][0] {
			${pageFragment}
		}
	}
`;
