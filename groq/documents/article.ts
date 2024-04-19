import {articleFeedFragment} from './article-feed';
import {richPortableTextFragment} from '../types/rich-portable-text';

export const articleFragment = `//groq
    _id,
    _type,
    title,
    slug,
    heading,
    lead,
    image,
    content[] {
        ${richPortableTextFragment}
    },
    articleFeeds[]-> {
        ${articleFeedFragment}
    },
	'_ts': 'SanityArticle'
`;
