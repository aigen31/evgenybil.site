import React from 'react'
import { Link } from 'react-router-dom'
import './MenuWrapper.css'

const MenuWrapper = ({ openMenu }) => {
	return (
		<div className={`menu-wrapper ${openMenu ? 'active' : ''}`}>
			<div className="menu-wrapper__nav">
				<ul className="menu-wrapper__list">
					<li className="menu-wrapper__item">
						<a href="/portfolio" className="link">
							Портфолио
						</a>
					</li>
					<li className="menu-wrapper__item">
						<Link to="tech" className="link">Технологии</Link>
					</li>
					<li className="menu-wrapper__item">
						<Link to="faq" className="link">FAQ</Link>
					</li>
					<li className="menu-wrapper__item">
						<Link to="about" className="link">Обо мне</Link>
					</li>
					<li className="menu-wrapper__item">
						<Link to="personal" className="link">
							Персональные
							<br /> данные
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MenuWrapper