# Sanity Fragment Typegen

## Introduction
This repo is an example of a post-processing script for Sanity typegen, which generates types for query fragments.

Often, it is interesting to get types for a small part of a query.

The intention was to find a way of making this process easier. Besides this, it was also desired to cut down on the size of the `sanity.types` file, which grows very large for complex schemas and queries, due to the typegen process unfolding all queries and fragments (including when there are several levels of nested fragments).

## Folder structure
- `groq/` - all queries and fragments
- `schema/` - schema type definitions
- `scripts/` - post-processing scripts for `sanity.types`
- `typegen/` - output of Sanity typegen

## Problem example

There is an `article` type that references an `articleFeed` type:

```ts
export const article = defineType({
	name: 'article',
	type: 'document',
	fields: [{
        name: 'articleFeed',
        type: 'reference',
        to: [{type: 'articleFeed'}]
	}],
});
```

Somewhere in a query, when resolving an `article`, the `articleFeed` should be dereferenced:

```ts
export const articleFragment = `//groq
    ...,
    articleFeed-> {
        _id,
        name
    }
`;
```

The generated types contain the following:

```ts
export type Article = {
  _type: "article";
  ...,
  articleFeed?: {
    _ref: string;
    _type: "reference";
    [internalGroqTypeReferenceTo]?: "articleFeed";
  };
};

export type ArticleFeed = {
  _type: "articleFeed";
  _id: string;
  name: string;
};

export type GetProductPageBySlugQueryResult = {
  product: {
    content: Array<... | {
      _type: "articleListAll";
      firstPage: {
        articles: Array<{
          _type: "article";
          slug: Slug | null;
          heading: string | null;
          image: {
            _id: string;
            name: string | null;
            _type: "articleFeed";
          } | null;
        }>;
      };
    }>
  } | null;
};
```

To get a type for the `article` with a dereferenced `articleFeed`, the following can be done:

```ts
// Objective
type ArticleWithFeed = {
    _type: "article";
    slug: Slug | null;
    heading: string | null;
    articleFeed: {
        _type: "articleFeed";
        _id: string;
        name: string;
    } | null;
};

// Option 1: from the query
type ArticleWithFeed = Extract<NonNullable<NonNullable<GetProductPageBySlugQueryResult['product']>['content']>[number], {_type: 'articleListAll'}>['firstPage']['articles'][number];

// Option 2: from the types
type ArticleWithFeed = Omit<Article, 'articleFeed'> & {articleFeed: ArticleFeed | null};
```

None of these scale that well.


## Proposed workaround

### Step 1
For each fragment, add a `_ts` metadata field with the name of the intended generated type:

```ts
export const articleWithFeedFragment = `//groq
    ...,
    articleFeed-> {
        _id,
        name
    }
    _ts: ArticleWithFeed
`;
```

Inside of each generated query in `sanity.types.ts`, wherever this fragment is used, the `_ts` metadata field will be visible.

```ts
articles: Array<{
    _id: string;
    _type: "article";
    articleFeed: {
        _id: string;
        name: string | null;
    } | null;
    _ts: "ArticleWithFeed";
}>;
```

### Step 2
Process the `sanity.types.ts`.

For each type closure that includes a `_ts` field, store it.

Then, replace the closure with the value of the `_ts` field.

Finally write all of the fragment types at the end of the file.

Result:

```ts
{
    articles: Array<ArticleWithFeed>;
}

export type ArticleWithFeed = {
    _id: string;
    _type: "article";
    articleFeed: {
        _id: string;
        name: string | null;
    } | null;
    _ts: "ArticleWithFeed";
};
```

## Making this work on your project
1. Add the `_ts` metadata field to the query fragments you want types for.
2. Add the `scripts/fragment-typegen.ts` script to your project.
3. Change the `inputFile` and `outputFile` variables in the script to point to your `sanity.types.ts` file.
4. Run the script after running `sanity typegen generate`. (I'm using `bun`, but whatever works for you. – look at the `package.json` of this project for a way of doing it.)
5. Make sure the generated types are correct (let me know if they are not).
6. Import the generated types into your project.

