import groq from 'groq';

import {articleInCardFragment} from './documents/article-in-card';

export const getArticleListFromFeedPage = groq`
	*[_type == 'article' && references(^.articleFeed._ref)] | order(_createdAt desc)[$start...$end] {
        ${articleInCardFragment}
    }
`;
