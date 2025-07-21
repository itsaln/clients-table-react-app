import { cloneElement, isValidElement, type ReactElement, type SVGProps } from 'react'

type Props = {
	className?: string
	height?: number
	icon: ReactElement<SVGProps<SVGSVGElement>>
	width?: number
}

export const SvgIcon = ({ icon, width = 24, height = 24, className = '' }: Props) => {
	const iconWithProps = isValidElement(icon)
		? cloneElement(icon, { width, height, className })
		: icon

	return <>{iconWithProps}</>
}
