import * as React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './ui/dialog'
import { Link } from '@tanstack/react-router'
import { Circle } from 'lucide-react'

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'

import { RESOURCES } from '@/api/resources'

export function SearchCombox() {
	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState('')

	const allTools = RESOURCES.flatMap((category) => category.sections.flatMap((section) => section.tools))

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger>
				<div className="w-full flex-1 md:w-auto md:flex-none">
					<div className="relative inline-flex h-8 w-full items-center justify-start whitespace-nowrap rounded-[0.5rem] border border-input bg-muted/50 px-4 py-2 text-sm font-normal text-muted-foreground shadow-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:pr-12 md:w-40 lg:w-64">
						<span className="hidden lg:inline-flex">Tools search...</span>
						<span className="inline-flex lg:hidden">Search...</span>
						<kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
							<span className="text-xs">⌘</span>K
						</kbd>
					</div>
				</div>
			</DialogTrigger>
			<DialogContent className="p-0">
				<DialogTitle className="hidden" />
				<DialogDescription className="hidden" />
				<Command>
					<CommandInput placeholder="Search toolls..." />
					<CommandList className="scrollbar-thin scrollbar-track-neutral-900 scrollbar-thumb-neutral-600">
						<CommandEmpty>No tools.</CommandEmpty>

						{RESOURCES.map((res, index) => (
							<CommandGroup key={index} className="px-2">
								<div className="mb-2 px-2 py-1 text-xs text-muted-foreground">{res.categoryName}</div>
								{res.sections.map((section) => (
									<Link
										key={section.slug}
										to="/$categorySlug/tools/$toolSlug"
										params={{ categorySlug: res.slug, toolSlug: section.slug }}
									>
										<CommandItem
											value={section.name}
											onSelect={(currentValue) => {
												setValue(currentValue === value ? '' : currentValue)
												setOpen(false)
											}}
											className="flex items-center gap-3"
										>
											<Circle size={16} /> {section.name}
										</CommandItem>
									</Link>
								))}
							</CommandGroup>
						))}
						<CommandGroup className="px-2">
							<div className="mb-2 px-2 py-1 text-xs text-muted-foreground">All tools</div>
							{allTools.map((tool) => (
								<Link key={tool.link}>
									<CommandItem
										value={tool.name}
										onSelect={(currentValue) => {
											setValue(currentValue === value ? '' : currentValue)
											setOpen(false)
										}}
										className="flex items-center gap-3"
									>
										<Circle size={16} /> {tool.name}
									</CommandItem>
								</Link>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</DialogContent>
		</Dialog>
	)
}
