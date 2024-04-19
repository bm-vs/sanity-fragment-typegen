import {articleListAllFragment} from '@/groq/portable-text/article-list-all';
import {articleListFromFeedFragment} from '@/groq/portable-text/article-list-from-feed';
import {articleListSelectionFragment} from '@/groq/portable-text/article-list-selection';
import {extendedBlockFragment} from '@/groq/portable-text/extended-block';
import {featuredQuoteFragment} from '@/groq/portable-text/featured-quote';
import {imageGalleryFragment} from '@/groq/portable-text/image-gallery';
import {productListAllFragment} from '@/groq/portable-text/product-list-all';
import {productListSelectionFragment} from '@/groq/portable-text/product-list-selection';
import {searchBoxFragment} from '@/groq/portable-text/search-box';
import {youTubeVideoFragment} from '@/groq/portable-text/youtube-video';

export const richPortableTextFragment = `//groq
	_type == "articleListAll" => {
		${articleListAllFragment}
	},
	_type == "articleListFromFeed" => {
		${articleListFromFeedFragment}
	},
	_type == "articleListSelection" => {
		${articleListSelectionFragment}
	},
	_type == "extendedBlock" => {
		${extendedBlockFragment}
	},
	_type == "featuredQuote" => {
		${featuredQuoteFragment}
	},
	_type == "imageGallery" => {
		${imageGalleryFragment}
	},
	_type == "productListAll" => {
		${productListAllFragment}
	},
	_type == "productListSelection" => {
		${productListSelectionFragment}
	},
	_type == "searchBox" => {
		${searchBoxFragment}
	},
	_type == "youTubeVideo" => {
		${youTubeVideoFragment}
	},
`;
