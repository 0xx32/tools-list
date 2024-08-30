import React, { useMemo } from 'react'
import { HoveredIndex, HoverEffectContext } from './hoverEffectContext'

export interface HoverEffectProviderProps {
	defaultStage?: HoveredIndex
	children: React.ReactNode
}

export const HoverEffectProvider = ({ children, defaultStage = null }: HoverEffectProviderProps) => {
	const [hoveredIndex, setHoveredIndex] = React.useState<HoveredIndex>(defaultStage)

	const value = useMemo(() => ({ hoveredIndex, setHoveredIndex }), [hoveredIndex])

	return <HoverEffectContext.Provider value={value}>{children}</HoverEffectContext.Provider>
}
