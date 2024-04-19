import {articleFeedFragment} from '@/groq/documents/article-feed';
import {richPortableTextFragment} from '@/groq/types/rich-portable-text';

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
