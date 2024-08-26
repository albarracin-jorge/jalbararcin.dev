/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'header': '0 4px 8px 0 rgb(203 213 225 / var(--tw-bg-opacity))',
				'dark-header': '0 4px 12px 0 rgb(2 6 23 / var(--tw-bg-opacity))',
				'main-center': 'inset 0 0 48px 0px rgb(226 232 240 / var(--tw-bg-opacity))',
				'dark-main-center': 'inset 24px 0 12px 4px rgb(15 23 42 / var(--tw-bg-opacity))',
				'main-l': 'inset -48px 0 48px -12px rgb(226 232 240 / var(--tw-bg-opacity))',
				'dark-main-l': 'inset -48px 0 48px -12px rgb(15 23 42 / var(--tw-bg-opacity))',
				'main-r': 'inset 48px 0 48px -12px rgb(226 232 240 / var(--tw-bg-opacity))',
				'dark-main-r': 'inset 48px 0 48px -12px rgb(15 23 42 / var(--tw-bg-opacity))',
			},
		},
	},
	plugins: [],
}
