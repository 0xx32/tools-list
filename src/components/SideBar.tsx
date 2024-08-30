import React from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

import { RESOURCES } from '@/api/resources'
import { cn } from '@/lib/utils'

export const SideBar = () => {
	const location = useLocation()
	const [openCategories, setOpenCategories] = React.useState<string[]>(['web'])

	return (
		<aside className="fixed hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
			<div>
				<div className="grid grid-flow-row auto-rows-max text-sm">
					{RESOURCES.map((category) => (
						<div
							className={cn('overflow-hidden', {
								'mb-2': openCategories.includes(category.slug),
							})}
							key={category.slug}
						>
							<button
								className={clsx('text-md inline-flex items-center gap-2 p-2 font-semibold')}
								onClick={() =>
									setOpenCategories((prev) =>
										prev.includes(category.slug)
											? prev.filter((item) => item !== category.slug)
											: [...prev, category.slug]
									)
								}
							>
								{category.categoryName}
								<ChevronDown
									size={14}
									className={clsx({ 'rotate-180': openCategories.includes(category.slug) })}
								/>
							</button>
							<AnimatePresence initial={false}>
								{openCategories.includes(category.slug) && (
									<motion.div
										transition={{ duration: 0.5 }}
										initial={{ height: 0 }}
										animate={{ height: openCategories.includes(category.slug) ? 'auto' : 36 }}
										exit={{ height: 0 }}
									>
										{category.sections.map((section) => (
											<Link
												key={section.slug}
												to="/$categorySlug/tools/$toolSlug"
												params={{ categorySlug: category.slug, toolSlug: section.slug }}
												className={clsx(
													'text-md group flex w-full items-center rounded-md border border-transparent px-2 py-1 font-semibold text-muted-foreground outline-none transition duration-200 hover:translate-x-1 hover:text-emerald-500',
													`${category.slug}/tools/${section.slug}`,
													'',
													{
														['text-white']:
															location.pathname ===
															`/${category.slug}/tools/${section.slug}`,
													}
												)}
											>
												{section.name}
											</Link>
										))}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</div>
		</aside>
	)
}
