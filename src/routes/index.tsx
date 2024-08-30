import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	component: () => (
		<div className="">
			<h1 className="mb-4 text-3xl font-bold"> MyTools 🚀 </h1>

			<p>Наш сайт содержит информацию о различных инструментах и ресурсах, которые могут быть полезны для тебя</p>
		</div>
	),
})
