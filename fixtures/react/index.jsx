/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */

import PropTypes from 'prop-types'
import React from 'react'

const SubComponent = (props) => {
	return <span>Sub</span>
}

class Button extends React.Component {
	constructor() {
		super()

		this.state = { enabled: true }
	}

	render() {
		const { label } = this.props
		const { enabled } = this.state
		return (
			<button disabled={!enabled} type="button">
				{ label }
				{ /* Comment */ }
				<SubComponent />
			</button>
		)
	}
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
}

export default Button
