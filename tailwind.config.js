/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.{html,js}'],
	theme: {
		extend: {
			boxShadow: {
				'kontol': '25px 25px 75px rgba(0,0,0,0.25), 10px 10px 70px rgba(0,0,0,0.25), inset 5px 5px 10px rgba(0,0,0,0.5), inset 5px 5px 20px rgba(225,225,225,0.2), inset -5px -5px 15px rgba(0,0,0,0.75)',
				'btn': ' inset 0 4px 1px rgba(0,0,0,0.35), 0 5px 5px rgba(0,0,0,0.5),0 15px 25px rgba(0,0,0,0.35)',
				'btn-hvr': ' inset 0 1px 1px rgba(0,0,0,0.35), 0 5px 5px rgba(0,0,0,0.5),0 15px 25px rgba(0,0,0,0.35)',
				'howe': 'inset 0px 0px 10px purple, inset 5px 5px 12px rgba(44, 0, 114, 0.8), inset 8px 8px 1px rgba(160, 120, 255, 0.7), 0px 0px 1px rgba(160, 120, 255, 0.6)',
			},
			fontFamily: {
    		'mplus': ['M PLUS 1p', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'righteous': ['Righteous', 'sans-serif'],
				'saira': ['Saira', 'sans-serif'],
				'urban': ['Urbanist', 'sans-serif'],
			},
			dropShadow: {
				'kontol': '25px 25px 75px rgba(0,0,0,0.25), 10px 10px 70px rgba(0,0,0,0.25), inset 5px 5px 10px rgba(0,0,0,0.9), inset 5px 5px 20px rgba(225,225,225,0.8), inset -5px -5px 15px rgba(0,0,0,0.75)',
			},
		},
	},
	plugins: [],
}
