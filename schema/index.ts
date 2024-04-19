import {article} from '@/schema/documents/article';
import {articleFeed} from '@/schema/documents/article-feed';
import {page} from '@/schema/documents/page';
import {product} from '@/schema/documents/product';
import {website} from '@/schema/documents/website';
import {articleListAll} from '@/schema/portable-text/article-list-all';
import {articleListFromFeed} from '@/schema/portable-text/article-list-from-feed';
import {articleListSelection} from '@/schema/portable-text/article-list-selection';
import {extendedBlock} from '@/schema/portable-text/extended-block';
import {featuredQuote} from '@/schema/portable-text/featured-quote';
import {imageGallery} from '@/schema/portable-text/image-gallery';
import {productListAll} from '@/schema/portable-text/product-list-all';
import {productListSelection} from '@/schema/portable-text/product-list-selection';
import {searchBox} from '@/schema/portable-text/search-box';
import {youTubeVideo} from '@/schema/portable-text/youtube-video';
import {basicPortableText} from '@/schema/types/basic-portable-text';
import {contentHeader} from '@/schema/types/content-header';
import {externalLink} from '@/schema/types/external-link';
import {imageHeader} from '@/schema/types/image-header';
import {imageWeb} from '@/schema/types/image-web';
import {internalLink} from '@/schema/types/internal-link';
import {richPortableText} from '@/schema/types/rich-portable-text';

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
