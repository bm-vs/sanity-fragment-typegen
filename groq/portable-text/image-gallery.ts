import {basicPortableTextFragment} from '@/groq/types/basic-portable-text';

export const imageGalleryFragment = `//groq
	_type,
	title,
	images,
	text[] {
		${basicPortableTextFragment}
	},
	aspectRatio,
	'_ts': 'SanityImageGallery'
`;
