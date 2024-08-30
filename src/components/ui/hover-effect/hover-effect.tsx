import { HoverEffectProvider, useHoverEffect } from './context'
import { AnimatePresence, motion } from 'framer-motion'

import { cn } from '@/lib/utils'

interface HoverEffectProps {
	className?: string
	children: React.ReactNode
}

export const HoverEffectContainer = ({ className, children }: HoverEffectProps) => {
	return (
		<div className={cn('group grid grid-cols-1 gap-2 py-5 md:grid-cols-2 lg:grid-cols-3', className)}>
			<HoverEffectProvider defaultStage={null}>{children}</HoverEffectProvider>
		</div>
	)
}

interface CardProps {
	index: number
	className?: string
	children: React.ReactNode
}
export const CardHoverEffect = ({ className, children, index }: CardProps) => {
	const { hoveredIndex, setHoveredIndex } = useHoverEffect()

	return (
		<div
			className={cn('relative -ml-2 block h-full w-full rounded-3xl p-2', className)}
			onMouseEnter={() => setHoveredIndex(index)}
			onMouseLeave={() => setHoveredIndex(null)}
		>
			<AnimatePresence>
				{hoveredIndex === index && (
					<motion.span
						className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200 dark:bg-slate-800/[0.8]"
						layoutId="hoverBackground"
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { duration: 0.15 },
						}}
						exit={{
							opacity: 0,
							transition: { duration: 0.15, delay: 0.2 },
						}}
					/>
				)}
			</AnimatePresence>
			<div className="relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-black group-hover:border-slate-700 dark:border-white/[0.2]">
				<div className="relative z-50 h-full">
					{/* <div>{children}</div> */}
					{children}
				</div>
			</div>
		</div>
	)
}
