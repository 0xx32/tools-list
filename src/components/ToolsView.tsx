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

	const filtereTools = toolCategory.tools.filter((tool) => tool.name)

	return (
		<div className="flex flex-col gap-3">
			<h2 className="text-4xl font-semibold text-white">{toolCategory.name}</h2>

			{filtereTools.length && (
				<HoverEffectContainer className="lg:grid-cols-2">
					{filtereTools.map((tool, index) => (
						<CardHoverEffect key={tool.name} index={index}>
							<a href={tool.link} target="_blank" className="block p-6">
								<h4 className="text-xl font-semibold">{tool.name}</h4>
								{/* <div className="text-muted-foreground">dawdawdawd</div> */}
							</a>
						</CardHoverEffect>
					))}
				</HoverEffectContainer>
			)}
		</div>
	)
}
