import { CardHoverEffect, HoverEffectContainer } from './ui'
import { useLoaderData } from '@tanstack/react-router'

interface ToolCategory {
	tools: Tool[]
	name: string
	slug: string
}

export const ToolsView = () => {
	const toolCategory: ToolCategory = useLoaderData({ from: '/$categorySlug/tools/$toolSlug' })

	if (!toolCategory) return <div>Такого ресурса не существует</div>

	return (
		<div className="flex flex-col gap-3">
			<h2 className="text-4xl font-semibold text-white">{toolCategory.name}</h2>

			{toolCategory.tools.length && (
				<HoverEffectContainer className="lg:grid-cols-2">
					{toolCategory.tools.map((tool, index) => (
						<CardHoverEffect key={tool.name} index={index}>
							<a href={tool.link} target="_blank">
								<h4 className="mb-4 text-xl font-semibold">{tool.name}</h4>
								{/* <div className="text-muted-foreground">dawdawdawd</div> */}
							</a>
						</CardHoverEffect>
					))}
				</HoverEffectContainer>
			)}
		</div>
	)
}
