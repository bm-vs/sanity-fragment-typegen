import {articleFeedFragment} from '@/groq/documents/article-feed';
import {richPortableTextFragment} from '@/groq/types/rich-portable-text';
import { imageWebFragment } from '@/groq/types/image-web';

export const articleFragment = `//groq
    _id,
    _type,
    title,
    slug,
    heading,
    lead,
    image {
        ${imageWebFragment}
    },
    content[] {
        ${richPortableTextFragment}
    },
    articleFeeds[]-> {
        ${articleFeedFragment}
    },
	'_ts': 'SanityArticle'
`;
