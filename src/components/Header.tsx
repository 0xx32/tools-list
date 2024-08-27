import { SearchCombox } from './SearchCombox'
import { Link } from '@tanstack/react-router'

export const Header = () => (
	<header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-3">
			<Link to="/" className="text-xl font-semibold">
				My tools
			</Link>

			<SearchCombox />
		</div>
	</header>
)
