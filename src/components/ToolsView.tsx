import { useLoaderData } from '@tanstack/react-router'
import { motion } from 'framer-motion'

interface ToolCategory {
	tools: Tool[]
	name: string
	slug: string
}

export const ToolsView = () => {
	const toolCategory: ToolCategory = useLoaderData({ from: '/$categorySlug/tools/$toolSlug' })

	if (!toolCategory) return <div>Такого ресурса не существует</div>

	console.log(toolCategory)

	return (
		<div className="flex h-screen flex-col gap-3 p-6 pt-0">
			<h2 className="mb-6 text-3xl font-semibold text-white">{toolCategory.name}</h2>
			{toolCategory.tools.length &&
				toolCategory.tools.map((tool, index) => (
					<motion.div
						key={tool.name}
						className="flex items-center gap-4 rounded-md border-b border-white/20 p-2 pb-2 hover:bg-muted"
						animate={{ opacity: 1 }}
						initial={{ opacity: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						<span className="w-6">{index + 1}.</span>
						<a
							href={tool.link}
							target="_blank"
							className="flex items-center gap-3 text-lg capitalize transition-colors hover:text-muted-foreground hover:underline"
						>
							{/* <i className="h-6 w-6 border border-border rounded-md overflow-hidden ">
                                <img className="w-full" src={tool.link + 'favicon.ico'} />
                            </i> */}

							<span> {tool.name}</span>
						</a>
					</motion.div>
				))}
		</div>
	)
}
