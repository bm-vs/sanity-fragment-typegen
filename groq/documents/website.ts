import {externalLinkFragment} from '../types/external-link';
import {internalLinkFragment} from '../types/internal-link';

export const websiteFragment = `//groq
    _id,
    title,
    frontPage->{
        title,
        slug,
    },
    mainMenu[] {
        _type == 'internalLink' => {
            ${internalLinkFragment}
        },
        _type == 'externalLink' => {
            ${externalLinkFragment}
        }
    },
    contactInfo {
        orgName,
        orgNr,
        address,
        postalCode,
        city,
    },
    '_ts': 'SanityWebsite'
`;
