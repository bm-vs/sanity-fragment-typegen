import {article} from './documents/article';
import {articleFeed} from './documents/article-feed';
import {page} from './documents/page';
import {product} from './documents/product';
import {website} from './documents/website';
import {articleListAll} from './portable-text/article-list-all';
import {articleListFromFeed} from './portable-text/article-list-from-feed';
import {articleListSelection} from './portable-text/article-list-selection';
import {extendedBlock} from './portable-text/extended-block';
import {featuredQuote} from './portable-text/featured-quote';
import {imageGallery} from './portable-text/image-gallery';
import {productListAll} from './portable-text/product-list-all';
import {productListSelection} from './portable-text/product-list-selection';
import {searchBox} from './portable-text/search-box';
import {youTubeVideo} from './portable-text/youtube-video';
import {basicPortableText} from './types/basic-portable-text';
import {contentHeader} from './types/content-header';
import {externalLink} from './types/external-link';
import {imageHeader} from './types/image-header';
import {imageWeb} from './types/image-web';
import {internalLink} from './types/internal-link';
import {richPortableText} from './types/rich-portable-text';

export const schemaTypes = [
	// Re-usable types:
	basicPortableText,
	contentHeader,
	externalLink,
	imageHeader,
	imageWeb,
	internalLink,
	richPortableText,

	// Portable text types
	articleListAll,
	articleListFromFeed,
	articleListSelection,
	extendedBlock,
	featuredQuote,
	imageGallery,
	productListAll,
	productListSelection,
	searchBox,
	youTubeVideo,

	// Document types
	article,
	articleFeed,
	page,
	product,
	website,
];
