import {externalLinkFragment} from '@/groq/types/external-link';
import {internalLinkFragment} from '@/groq/types/internal-link';

export const contentHeaderFragment = `//groq
	_type,
	heading,
	lead,
	shortcuts[] {
		_type == 'externalLink' => {
			${externalLinkFragment}
		},
		_type == 'internalLink' => {
			${internalLinkFragment}
		}
	},
	'_ts': 'SanityContentHeader'
`;
