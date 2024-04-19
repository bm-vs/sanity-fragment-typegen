import {externalLinkFragment} from '@/groq/types/external-link';
import {internalLinkFragment} from '@/groq/types/internal-link';

export const extendedBlockFragment = `//groq
	_type,
	children,
	style,
	listItem,
	markDefs[] {
		_key,
		_type == 'externalLink' => {
			${externalLinkFragment}
		},
		_type == 'internalLink' => {
			${internalLinkFragment}
		}
	},
	level,
	'_ts': 'SanityExtendedBlock'
`;
