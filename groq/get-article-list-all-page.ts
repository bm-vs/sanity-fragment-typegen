import groq from 'groq';

import {articleInCardFragment} from '@/groq/documents/article-in-card';

export const getArticleListAllPage = groq`
	*[_type == 'article'] | order(_createdAt desc)[$start...$end] {
        ${articleInCardFragment}
    }
`;
