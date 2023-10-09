import Slider from 'react-slick'
import portfolio from '../../data/portfolio'
import sliderUp from '../../img/arrows/slider-up.svg'
import sliderDown from '../../img/arrows/slider-down.svg'
import sliderUpWh from '../../img/arrows/slider-up-wh.svg'
import sliderDownWh from '../../img/arrows/slider-down-wh.svg'
import sliderLeft from '../../img/arrows/slider-left-wh.svg'
import sliderRight from '../../img/arrows/slider-right-wh.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuid } from 'uuid';

function Arrow({ onClick, image }) {
  return (
    <button className="s-main__slider-btn s-main__slider-btn--left" onClick={onClick}><img src={image} alt=""/></button>
  );
}

const SliderMain = () => {
	const settings = {
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '20px',
		arrows: true,
		autoplay: true,
		prevArrow: <Arrow image={sliderUp} />,
    nextArrow: <Arrow image={sliderDown} />,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1400,
				prevArrow: <Arrow image={sliderUpWh} />,
    		nextArrow: <Arrow image={sliderDownWh} />,
			},
			{
				breakpoint: 992,
				settings: {
					vertical: false,
					verticalSwiping: false,
					slidesToShow: 3,
					slidesToScroll: 3,
					centerMode: true,
					prevArrow: <Arrow image={sliderLeft} />,
    			nextArrow: <Arrow image={sliderRight} />,
				}
			},
			{
				breakpoint: 768,
				settings: {
					vertical: false,
					verticalSwiping: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					centerPadding: '180px',
					centerMode: true,
				}
			},
			{
				breakpoint: 576,
				settings: {
					vertical: false,
					verticalSwiping: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					centerMode: true,
					centerPadding: '60px',
				}
			}
		]
	}

	return (
		<Slider {...settings} className="s-main__slider">
			{portfolio.map((image) => {
				const source = require(`../../img/portfolio/thumbnails/${image.file}`)

				return (
					<div className="s-main__slider-item" key={uuid()}>
						<a href="/">
							<img
								src={source}
								alt="EVGENY BIL WEB - портфолио | разработка сайтов в Республике Хакасия (Абакан) и Республике Хакасия (Красноярск)"
								className="s-main__slider-img"
							/>
						</a>
					</div>
				)
			})}
		</Slider>
	)
}

export default SliderMain