import {basicPortableTextFragment} from '@/groq/types/basic-portable-text';
import {richPortableTextFragment} from '@/groq/types/rich-portable-text';
import { imageWebFragment } from '@/groq/types/image-web';

export const productFragment = `//groq
    _id,
    _type,
    name,
    slug,
    tagline,
    description[] {
        ${basicPortableTextFragment}
    },
    mainImage {
        ${imageWebFragment}
    },
    tag,
    content[] {
        ${richPortableTextFragment}
    },
    supplementaryContent[] {
        ${richPortableTextFragment}
    },
	'_ts': 'SanityProduct'
`;
