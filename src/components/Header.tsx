import { SearchCombox } from './SearchCombox'
import { Link } from '@tanstack/react-router'
import { Wrench } from 'lucide-react'

export const Header = () => (
	<header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<div className="mx-auto flex max-w-[1400px] items-center justify-between px-10 py-4">
			<Link to="/" className="flex items-center gap-4">
				<i className="rounded-md bg-white p-1">
					<Wrench color="#000" size={16} />
				</i>
				<span className="text-2xl font-bold">My tools</span>
			</Link>

			<SearchCombox />
		</div>
	</header>
)
