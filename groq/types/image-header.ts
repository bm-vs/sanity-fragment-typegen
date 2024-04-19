import { imageWebFragment } from '@/groq/types/image-web';

export const imageHeaderFragment = `//groq
	_type,
	heading,
	lead,
	image {
		${imageWebFragment}
	},
	style,
	'_ts': 'SanityImageHeader'
`;
