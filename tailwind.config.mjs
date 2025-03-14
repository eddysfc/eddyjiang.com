/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				cursorBlink: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0 }
				}
			},
			animation: {
				cursorBlink: "cursorBlink 1s steps(1) infinite"
			}
		},
	},
	plugins: []
}
