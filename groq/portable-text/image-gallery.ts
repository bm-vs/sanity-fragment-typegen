import {basicPortableTextFragment} from '@/groq/types/basic-portable-text';
import { imageWebFragment } from '@/groq/types/image-web';

export const imageGalleryFragment = `//groq
	_type,
	title,
	images[] {
		${imageWebFragment}
	},
	text[] {
		${basicPortableTextFragment}
	},
	aspectRatio,
	'_ts': 'SanityImageGallery'
`;
