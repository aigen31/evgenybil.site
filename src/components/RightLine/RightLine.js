import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import './RightLine.css'

const RightLine = ({ openMenuHandler, isHamburgerOpen, setIsHamburgerOpen, isNotMain }) => {
	return (
		<div className="right-line">
			{isNotMain ?
				<Link to="/" className="hamburger-react-link">
					<Hamburger toggled={true} />
				</Link> :
				<Hamburger toggled={isHamburgerOpen} toggle={setIsHamburgerOpen} onToggle={openMenuHandler} />}
		</div>
	)
}

export default RightLine