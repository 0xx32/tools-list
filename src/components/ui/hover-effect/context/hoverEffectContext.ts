import React from 'react'

export type HoveredIndex = number | null

export interface HoverEffectProps {
	hoveredIndex: HoveredIndex
	setHoveredIndex: (stage: HoveredIndex) => void
}

export const HoverEffectContext = React.createContext<HoverEffectProps>({
	hoveredIndex: null,
	setHoveredIndex: () => {},
})
