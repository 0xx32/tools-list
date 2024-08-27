import { createFileRoute } from '@tanstack/react-router'

import { RESOURCES } from '@/api/resources'
import { ToolsView } from '@/components/ToolsView'

export const Route = createFileRoute('/$categorySlug/tools/$toolSlug')({
	component: ToolsView,
	loader: async ({ params }) => {
		const resource = RESOURCES.find((resource) => resource.slug === params.categorySlug)

		return resource?.sections.find((section) => {
			return section.slug === params.toolSlug
		})
	},
})
