/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as CategorySlugToolsToolSlugImport } from './routes/$categorySlug/tools/$toolSlug'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
	path: '/',
	getParentRoute: () => rootRoute,
} as any)

const CategorySlugToolsToolSlugRoute = CategorySlugToolsToolSlugImport.update({
	path: '/$categorySlug/tools/$toolSlug',
	getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
	interface FileRoutesByPath {
		'/': {
			id: '/'
			path: '/'
			fullPath: '/'
			preLoaderRoute: typeof IndexImport
			parentRoute: typeof rootRoute
		}
		'/$categorySlug/tools/$toolSlug': {
			id: '/$categorySlug/tools/$toolSlug'
			path: '/$categorySlug/tools/$toolSlug'
			fullPath: '/$categorySlug/tools/$toolSlug'
			preLoaderRoute: typeof CategorySlugToolsToolSlugImport
			parentRoute: typeof rootRoute
		}
	}
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
	IndexRoute,
	CategorySlugToolsToolSlugRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/$categorySlug/tools/$toolSlug"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/$categorySlug/tools/$toolSlug": {
      "filePath": "$categorySlug/tools/$toolSlug.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
