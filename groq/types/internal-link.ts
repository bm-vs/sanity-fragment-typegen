export const internalLinkFragment = `//groq
	reference->{
		_id,
		_type,
		slug,
		'title': coalesce(title, name),
		'_ts': 'SanityInternalLink' + _type
	}
`;
