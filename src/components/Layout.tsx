import { Header } from './Header'
import { SideBar } from './SideBar'

interface Props {
	children: React.ReactNode
}

export const Layout = ({ children }: Props) => (
	<>
		<Header />
		<div className="mx-auto max-w-[1400px] flex-1 items-start px-10 pt-10 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
			<SideBar />
			<main>{children}</main>
		</div>
	</>
)
