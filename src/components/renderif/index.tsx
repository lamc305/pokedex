import { ReactDOM, ReactElement } from 'react'

export const RenderIf = ({
	children,
	condition,
}: {
	children: ReactElement
	condition: boolean
}) => {
	return condition ? <>{children}</> : <></>
}
