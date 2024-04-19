import {articleListAllFragment} from '../portable-text/article-list-all';
import {articleListFromFeedFragment} from '../portable-text/article-list-from-feed';
import {articleListSelectionFragment} from '../portable-text/article-list-selection';
import {extendedBlockFragment} from '../portable-text/extended-block';
import {featuredQuoteFragment} from '../portable-text/featured-quote';
import {imageGalleryFragment} from '../portable-text/image-gallery';
import {productListAllFragment} from '../portable-text/product-list-all';
import {productListSelectionFragment} from '../portable-text/product-list-selection';
import {searchBoxFragment} from '../portable-text/search-box';
import {youTubeVideoFragment} from '../portable-text/youtube-video';

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
