import twColors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	important: true,
	theme: {
		colors: {
			white: twColors.white,
			'white-25': 'var(--white-25)',
			black: twColors.black,
			'black-8': 'var(--black-8)',
			'black-25': 'var(--black-25)',
			transparent: 'var(--transparent)',
			background: 'var(--background)',
			foreground: 'var(--foreground)',
			backdrop: 'var(--backdrop)',
			primary: 'var(--primary)',
			gold: 'var(--gold)',
			purple: 'var(--purple)',
			secondary: 'var(--secondary)',
			warning: 'var(--warning)',
			danger: 'var(--danger)',
			success: 'var(--success)',
			grey: 'var(--grey)',
			'grey-100': 'var(--grey-100)',
			'grey-200': 'var(--grey-200)',
			'grey-300': 'var(--grey-300)',
			'grey-400': 'var(--grey-400)'
		},
		extend: {
			fontFamily: {
				montserrat: ['var(--font-montserrat)']
			},
			fontSize: {
				xs: ['var(--text-size-xs)', 'var(--text-height-xs)'],
				sm: ['var(--text-size-sm)', 'var(--text-height-sm)'],
				base: ['var(--text-size-base)', 'var(--text-height-base)'],
				lg: ['var(--text-size-lg)', 'var(--text-height-lg)'],
				xl: ['var(--text-size-xl)', 'var(--text-height-xl)'],
				'2xl': ['var(--text-size-2xl)', 'var(--text-height-2xl)'],
				balance: ['var(--text-size-balance)', 'var(--text-height-balance)']
			},
			spacing: {
				xs: 'var(--spacing-xs)',
				sm: 'var(--spacing-sm)',
				md: 'var(--spacing-md)',
				lg: 'var(--spacing-lg)',
				xl: 'var(--spacing-xl)',
				'2xl': 'var(--spacing-2xl)',
				'3xl': 'var(--spacing-3xl)'
			},
			minWidth: {
				xs: 'var(--spacing-xs)',
				sm: 'var(--spacing-sm)',
				md: 'var(--spacing-md)',
				lg: 'var(--spacing-lg)',
				xl: 'var(--spacing-xl)',
				'2xl': 'var(--spacing-2xl)',
				'3xl': 'var(--spacing-3xl)'
			},
			minHeight: {
				xs: 'var(--spacing-xs)',
				sm: 'var(--spacing-sm)',
				md: 'var(--spacing-md)',
				lg: 'var(--spacing-lg)',
				xl: 'var(--spacing-xl)',
				'2xl': 'var(--spacing-2xl)',
				'3xl': 'var(--spacing-3xl)'
			},
			maxWidth: {
				xs: 'var(--spacing-xs)',
				sm: 'var(--spacing-sm)',
				md: 'var(--spacing-md)',
				lg: 'var(--spacing-lg)',
				xl: 'var(--spacing-xl)',
				'2xl': 'var(--spacing-2xl)',
				'3xl': 'var(--spacing-3xl)'
			},
			maxHeight: {
				xs: 'var(--spacing-xs)',
				sm: 'var(--spacing-sm)',
				md: 'var(--spacing-md)',
				lg: 'var(--spacing-lg)',
				xl: 'var(--spacing-xl)',
				'2xl': 'var(--spacing-2xl)',
				'3xl': 'var(--spacing-3xl)'
			},
			borderRadius: {
				garden: 'var(--radius-garden)',
				island: 'var(--radius-island)',
				continent: 'var(--radius-continent)',
				rounding: 'var(--radius-rounding)'
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3'
			}
		},
		keyframes: {},
		container: {
			center: true,
			padding: '16px',
			screens: {
				sm: '576px',
				md: '769px',
				lg: '992px',
				xl: '1280px',
				'2xl': '1536px'
			}
		}
	},
	plugins: [
		// require('tailwindcss-global-dark'),
		plugin(({ addComponents, addUtilities }) => {
			addComponents({
				'.truncate-1': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '1',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-2': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '2',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-3': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '3',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-4': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '4',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				}
			})
			addUtilities({
				'.outline-border-none': {
					outline: 'none',
					border: 'none'
				},
				'.pointer-events-all': {
					pointerEvents: 'all'
				}
			})
		})
	]
}
