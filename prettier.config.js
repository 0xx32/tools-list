/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	trailingComma: 'es5',
	tabWidth: 4,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: false,
	bracketSpacing: true,
	useTabs: true,
	printWidth: 120,
	endOfLine: 'lf',
	plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
	importOrder: [
		'^react$',
		'<THIRD_PARTY_MODULES>',
		' ',
		'<TYPES>',
		'<TYPES>^[.]',
		' ',
		'^components/(.*)$',
		' ',
		'^@/components/ui/(.*)$',
		'',
		'^hooks/(.*)$',
		'',
		'^@/(.*)$',
		' ',
		'^(?!.*[.]css$)[./].*$ ',
		'.css$',
	],

	importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
	importOrderTypeScriptVersion: '5.5.3',
}

export default config
