import {articleInCardFragment} from '../documents/article-in-card';

export const articleListSelectionFragment = `//groq
	_type,
	title,
	articles[]-> {
		${articleInCardFragment}
	},
	'_ts': 'SanityArticleListSelection'
`;
