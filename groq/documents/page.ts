import {contentHeaderFragment} from '@/groq/types/content-header';
import {imageHeaderFragment} from '@/groq/types/image-header';
import {richPortableTextFragment} from '@/groq/types/rich-portable-text';

export const pageFragment = `//groq
    _id,
    title,
    slug,
    headers[] {
        _type == 'contentHeader' => {
            ${contentHeaderFragment}
        },
        _type == 'imageHeader' => {
            ${imageHeaderFragment}
        }
    },
    content[] {
        ${richPortableTextFragment}
    },
    '_ts': 'SanityPage'
`;
