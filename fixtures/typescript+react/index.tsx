import React, { useState } from 'react'

const SubComponent = (props) => {
	return <span>Sub</span>
}

interface ButtonProps {
	children: React.ReactNode,
	label: string,
}

const Button = (props: ButtonProps) => {
	const { children, label } = props
	const content = label || children

	const [enabled] = useState(false)

	return (
		<button disabled={!enabled} type="button">
			{ content }
			{ /* Comment */ }
			<SubComponent />
		</button>
	)
}

export default Button
