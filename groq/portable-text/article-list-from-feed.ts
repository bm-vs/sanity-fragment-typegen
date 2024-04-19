import {articleFeedFragment} from '../documents/article-feed';
import {articleInCardFragment} from '../documents/article-in-card';

export const articleListFromFeedFragment = `//groq
	_type,
	title,
	articleFeed-> {
		${articleFeedFragment}
	},
	'firstPage': {
		'articles': *[_type == 'article' && references(^.articleFeed._ref)] | order(_createdAt desc)[0...12] {
			${articleInCardFragment}
		},
		'totalCount': coalesce(count(*[_type == 'article' && references(^.articleFeed._ref)]), 0)
	},
	'_ts': 'SanityArticleListFromFeed'
`;
