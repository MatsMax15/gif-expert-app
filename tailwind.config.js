/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			textColor: {
				muted: '#a0a9b3',
			},
		},
	},
	plugins: [],
}
