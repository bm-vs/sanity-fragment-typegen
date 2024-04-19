import {articleInCardFragment} from '@/groq/documents/article-in-card';

export const articleListAllFragment = `//groq
	_type,
	title,
	'firstPage': {
		'articles': *[_type == 'article'] | order(_createdAt desc)[0...12] {
			${articleInCardFragment}
		},
		'totalCount': coalesce(count(*[_type == 'article']), 0)
	},
	'_ts': 'SanityArticleListAll'
`;
