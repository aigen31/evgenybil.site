import './Section.css'
import { useLocation } from 'react-router-dom';
import {
  SwitchTransition,
  CSSTransition
} from "react-transition-group";

const Section = ({ className, children }) => {
	const location = useLocation()
	
	return (
		<SwitchTransition>
			<CSSTransition
			key={location.pathname}
			classNames="fade"
			timeout={500}
			>
				<section className={className} >
					{children}
				</section>
			</CSSTransition>
		</SwitchTransition>
	)
}

export default Section