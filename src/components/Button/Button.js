import React from 'react'
import './Button.css'

const Button = ({className, id, children}) => {
	return (
		<button
			className="btn s-main__btn"
			id="s-main__btn"
		>
			{children}
		</button>
	)
}

export default Button