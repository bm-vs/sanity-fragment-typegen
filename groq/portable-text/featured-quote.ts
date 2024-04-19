import { imageWebFragment } from '@/groq/types/image-web';

export const featuredQuoteFragment = `//groq
    _type,
    name,
    person,
    quote,
    image {
        ${imageWebFragment}
    },
	'_ts': 'SanityFeaturedQuote'
`;
