import {readFileSync, writeFileSync} from 'fs';
import path from 'path';

type TsAlias = string;
type OriginalFragment = string;
type ClosureMap = Map<TsAlias, OriginalFragment>;

export const fragmentTypegen = () => {
	console.info('Generating fragments...');
    const inputFile = '../typegen/sanity.types.ts';
	const outputFile = '../typegen/sanity.fragment-types.ts';
	const {sanityTypes, sanityQueries} = readFile(inputFile);
	const {processedQueries, closureMap} = parseQueries(sanityQueries);
	const fragments = closureMapToTypes(closureMap);
	const typesWithFragments = sanityTypes + processedQueries + fragments;
	writeFileSync(path.resolve(__dirname, outputFile), typesWithFragments);
	console.info('✔ Generated fragments');
};

// Reads files and returns two strings
// sanityTypes is the part of sanity.types that contains the types generated
// from the schema (should remain untouched)
// sanityQueries is the part of sanity.types that contains the types generated
// from the queries (should be processed)
const readFile = (inputFile: string) => {
	const sanityTypesFile = readFileSync(path.resolve(__dirname, inputFile), 'utf8');
	const firstQueryIndex = sanityTypesFile.indexOf('// Query');
	const sanityTypes = sanityTypesFile.slice(0, firstQueryIndex);
	const sanityQueries = sanityTypesFile.slice(firstQueryIndex);
	return {sanityTypes, sanityQueries};
};

// Iterates over the generated queries and dedups snippets of queries
// These snippets are identified by the _ts field
// If this field does not exist in a closure, the closure is returned as is
const parseQueries = (sanityQueries: string) => {
	let cursor = 0;
	const closureMap: ClosureMap = new Map();

	// Parses a closure and returns a processed version of it
	const parseClosure = (queries: string) => {
		let tsAlias: string | null = null;
		let parsedClosure = '';
		for (; cursor < queries.length; cursor++) {
			// If the closure has a typegen alias, store it
			if (queries.startsWith('_ts', cursor)) {
				tsAlias =
					queries
						.slice(cursor)
						.match(/_ts: ["'](.*)["']/)
						?.at(1) ?? null;
				parsedClosure += queries.at(cursor);
				continue;
			}

			// If the line is the query the type refers to, skip it (since it can get super big)
			if (queries.startsWith('// Query', cursor)) {
				cursor = queries.indexOf('\n', cursor);
				continue;
			}

			// If starting a closure, parse it
			if (queries[cursor] === '{') {
				cursor++;
				const closure = parseClosure(queries);
				parsedClosure += closure;
				continue;
			}

			// If the closure is ending, and it doesn't have a type,
			// return whatever is inside of it, without any modifications
			if (queries[cursor] === '}' && !tsAlias) {
				return `{${parsedClosure}}`;
			}

			// If the closure is ending, use the _ts field to create a type
			if (queries[cursor] === '}' && tsAlias) {
				if (!closureMap.has(tsAlias)) {
					closureMap.set(tsAlias, parsedClosure);
				}

				return tsAlias;
			}

			parsedClosure += queries.at(cursor);
		}
		return parsedClosure;
	};

	const processedQueries = parseClosure(sanityQueries);
	return {processedQueries, closureMap};
};

// Any closures that were found to have a _ts field should have types generated for them
const closureMapToTypes = (closureMap: ClosureMap) => {
	return [...closureMap.entries()].reduce(
		(acc, [name, query]) => `${acc}\n\nexport type ${name} = {${query}};\n`,
		'',
	);
};

fragmentTypegen();