// import './MainLayout.css'
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import RightLine from "../components/RightLine/RightLine"
import Overlay from "../components/Overlay/Overlay"
import MenuWrapper from "../components/MenuWrapper/MenuWrapper"
import Header from "../components/Header/Header"
import { Outlet } from "react-router-dom"

const MainLayout = ({ className, openMenuHandler, isOpenMenu, setPaddings, isHamburgerOpen, setIsHamburgerOpen, onChangeLocation }) => {
	const location = useLocation();
	const isNotMain = location.pathname !== '/'

	console.log(isNotMain)

	useEffect(() => {
		location.pathname !== '/' ? onChangeLocation(true) :  onChangeLocation(false)
	}, [location])

	return (
		<div className={`${className}`}>
			<RightLine openMenuHandler={openMenuHandler} isHamburgerOpen={isHamburgerOpen} setIsHamburgerOpen={setIsHamburgerOpen} isNotMain={isNotMain} />

			<Overlay openMenu={isOpenMenu} />

			<MenuWrapper openMenu={isOpenMenu} />

			<Outlet />

			<Header setPaddings={setPaddings} isNotMain={isNotMain} />
		</div>
	)
}

export default MainLayout