import React from 'react'
import './Overlay.css'

const Overlay = ({ openMenu }) => {
	return (
		<div className={`overlay ${openMenu ? 'active' : ''}`}></div>
	)
}

export default Overlay