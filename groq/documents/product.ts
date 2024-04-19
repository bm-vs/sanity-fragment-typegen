import {basicPortableTextFragment} from '@/groq/types/basic-portable-text';
import {richPortableTextFragment} from '@/groq/types/rich-portable-text';

export const productFragment = `//groq
    _id,
    _type,
    name,
    slug,
    tagline,
    description[] {
        ${basicPortableTextFragment}
    },
    mainImage,
    tag,
    content[] {
        ${richPortableTextFragment}
    },
    supplementaryContent[] {
        ${richPortableTextFragment}
    },
	'_ts': 'SanityProduct'
`;
