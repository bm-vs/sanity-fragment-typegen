import groq from 'groq';

import {articleFragment} from '@/groq/documents/article';
import {websiteFragment} from '@/groq/documents/website';

export const getArticlePageBySlugQuery = groq`
	{
		'website': *[_type == 'website' && _id == 'websiteSingleton'][0] {
            ${websiteFragment}
        },
		'article': *[ _type == 'article' && slug.current == $articleSlug][0] {
			${articleFragment}
		}
	}
`;
