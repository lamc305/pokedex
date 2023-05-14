import * as React from 'react'
import { SVGProps } from 'react'
const Weight = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 48 50'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<g filter='url(#filter0_d_916_1218)'>
			<path
				d='M10.85 39H37.15L34 17H14L10.85 39ZM24 14C24.8667 14 25.5833 13.7083 26.15 13.125C26.7167 12.5417 27 11.8333 27 11C27 10.1333 26.7167 9.41667 26.15 8.85C25.5833 8.28333 24.8667 8 24 8C23.1667 8 22.4583 8.28333 21.875 8.85C21.2917 9.41667 21 10.1333 21 11C21 11.8333 21.2917 12.5417 21.875 13.125C22.4583 13.7083 23.1667 14 24 14ZM29.2 14H34C34.7667 14 35.4333 14.2417 36 14.725C36.5667 15.2083 36.9 15.8333 37 16.6L40.1 38.6C40.2333 39.5 40.0083 40.2917 39.425 40.975C38.8417 41.6583 38.0833 42 37.15 42H10.85C9.91667 42 9.15834 41.6583 8.575 40.975C7.99167 40.2917 7.76667 39.5 7.9 38.6L11 16.6C11.1 15.8333 11.4333 15.2083 12 14.725C12.5667 14.2417 13.2333 14 14 14H18.8C18.5333 13.5333 18.3333 13.0583 18.2 12.575C18.0667 12.0917 18 11.5667 18 11C18 9.33333 18.5833 7.91667 19.75 6.75C20.9167 5.58333 22.3333 5 24 5C25.6667 5 27.0833 5.58333 28.25 6.75C29.4167 7.91667 30 9.33333 30 11C30 11.5667 29.9333 12.0917 29.8 12.575C29.6667 13.0583 29.4667 13.5333 29.2 14ZM10.85 39H37.15H10.85Z'
				fill='#1D1D1D'
			/>
		</g>
		<defs>
			<filter
				id='filter0_d_916_1218'
				x={-4}
				y={0}
				width={56}
				height={56}
				filterUnits='userSpaceOnUse'
				colorInterpolationFilters='sRGB'
			>
				<feFlood floodOpacity={0} result='BackgroundImageFix' />
				<feColorMatrix
					in='SourceAlpha'
					type='matrix'
					values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
					result='hardAlpha'
				/>
				<feOffset dy={4} />
				<feGaussianBlur stdDeviation={2} />
				<feComposite in2='hardAlpha' operator='out' />
				<feColorMatrix
					type='matrix'
					values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
				/>
				<feBlend
					mode='normal'
					in2='BackgroundImageFix'
					result='effect1_dropShadow_916_1218'
				/>
				<feBlend
					mode='normal'
					in='SourceGraphic'
					in2='effect1_dropShadow_916_1218'
					result='shape'
				/>
			</filter>
		</defs>
	</svg>
)
export default Weight
