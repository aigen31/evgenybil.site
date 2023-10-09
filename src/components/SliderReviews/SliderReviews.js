import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderLeft from '../../img/arrows/slider-left-wh.svg'
import sliderRight from '../../img/arrows/slider-right-wh.svg'

function Arrow({ onClick, image, direction }) {
	return (
		<button className={`s-reviews__slider-btn s-reviews__slider-btn--${direction}`} onClick={onClick}><img src={image} alt="" /></button>
	);
}

const SliderReviews = () => {
	const settings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		prevArrow: <Arrow image={sliderLeft} direction={'left'} />,
		nextArrow: <Arrow image={sliderRight} direction={'right'} />,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					autoplay: true,
					autoplaySpeed: 2000,
				}
			},
		]
	}

	return (
		<Slider {...settings} className="s-reviews__slider">
				<div className="s-reviews__slide">
					<img
						src={require('../../img/reviews/author1.png')}
						alt="EVGENY BIL WEB - наши отзывы | Разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
						className="s-reviews__slide-author"
					/>
					<h3>HTML верстка сайта</h3>
					<p className="s-reviews__slide-name">Сергей Якушенок</p>
					<p className="s-reviews__slide-quotes">
						Проект шел достаточно тяжело. Но отдать должное Евгению - не смотря ни на
						что, он работал, делал все качественно, и всегда был на связи. А это
						показатель ответственности и профессионализма. За это могу смело его
						порекомендовать как хорошего исполнителя. Надеюсь на продолжение
						сотрудничества.
					</p>
					<p>
						<a
							href="https://freelance.ru/reviews/aigen/#review_328972"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							Ссылка на отзыв
						</a>
					</p>
				</div>
				<div className="s-reviews__slide">
					<img
						src={require('../../img/reviews/without_avatar.svg').default}
						alt="EVGENY BIL WEB - наши отзывы | Разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
						className="s-reviews__slide-author"
					/>
					<h3>Разработка сайта районной больницы</h3>
					<p className="s-reviews__slide-name">Максим Панов</p>
					<p className="s-reviews__slide-quotes">
						Все выполнено в соответствии с ТЗ. Сроки были обговорены и работа
						выполнена без проблем в срок. 5/5
					</p>
					<p>
						<a
							href="https://freelance.ru/reviews/aigen/#review_328080"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							Ссылка на отзыв
						</a>
					</p>
				</div>
				<div className="s-reviews__slide">
					<img
						src={require('../../img/reviews/author2.png')}
						alt="EVGENY BIL WEB - наши отзывы | Разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
						className="s-reviews__slide-author"
					/>
					<h3>Добавить ссылки в pdf файл</h3>
					<p className="s-reviews__slide-name">Гульназ Галиахметова</p>
					<p className="s-reviews__slide-quotes">
						Большое спасибо за работу, справился с поставленной задачей, все было
						выполнено в срок, всегда на связи) рекомендую!
					</p>
					<p>
						<a
							href="https://freelance.ru/reviews/aigen/#review_327951"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							Ссылка на отзыв
						</a>
					</p>
				</div>
				<div className="s-reviews__slide">
					<img
						src={require('../../img/reviews/without_avatar.svg').default}
						alt="EVGENY BIL WEB - наши отзывы | Разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
						className="s-reviews__slide-author"
					/>
					<h3>Очень простой сайт</h3>
					<p className="s-reviews__slide-name">Yelena Kozachenko</p>
					<p className="s-reviews__slide-quotes">
						Очень круто! Сделал сайт как я себе представляла за пару дней. Также помог
						разобраться с приложением, посоветовал лучший вариант хостинга и другие
						советы, которые мне как новичку бесценны! Спасибо
					</p>
					<p>
						<a
							href="https://freelance.ru/reviews/aigen/#review_327587"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							Ссылка на отзыв
						</a>
					</p>
				</div>
				<div className="s-reviews__slide">
					<img
						src={require('../../img/reviews/without_avatar.svg').default}
						alt="EVGENY BIL WEB - наши отзывы | Разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
						className="s-reviews__slide-author"
					/>
					<h3>Поправить код на тильде</h3>
					<p className="s-reviews__slide-name">Варвара Збрицкая</p>
					<p className="s-reviews__slide-quotes">
						Евгений быстро откликнулся на задание, так же быстро и качественно
						выполнил свою работу) Буду обращаться еще
					</p>
					<p>
						<a
							href="https://freelance.ru/reviews/aigen/#review_327368"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							Ссылка на отзыв
						</a>
					</p>
				</div>
				<div className="s-reviews__slide">
					<img
						src={require('../../img/reviews/without_avatar.svg').default}
						alt="EVGENY BIL WEB - наши отзывы | Разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
						className="s-reviews__slide-author"
					/>
					<h3>Верстка главной страницы</h3>
					<p className="s-reviews__slide-name">Антонина Дорожкина</p>
					<p className="s-reviews__slide-quotes">
						Евгений сработал - быстро и оперативно правки внес также без проблем
						советую обращаться :) ответственный подход
					</p>
					<p>
						<a
							href="https://freelance.ru/reviews/aigen/#review_325229"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							Ссылка на отзыв
						</a>
					</p>
				</div>
				<div className="s-reviews__slide">
					<img
						src={require('../../img/reviews/without_avatar.svg').default}
						alt="EVGENY BIL WEB - наши отзывы | Разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
						className="s-reviews__slide-author"
					/>
					<h3>Создать 2 раздела сайта</h3>
					<p className="s-reviews__slide-name">Артем Лысенко</p>
					<p className="s-reviews__slide-quotes">
						Отличный исполнителей. Проект выполнен оперативно и качественно.
						Рекомендую!
					</p>
					<p>
						<a
							href="https://freelance.ru/reviews/aigen/#review_322145"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							Ссылка на отзыв
						</a>
					</p>
				</div>
				<div className="s-reviews__slide">
					<img
						src={require('../../img/reviews/without_avatar.svg').default}
						alt="EVGENY BIL WEB - наши отзывы | Разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
						className="s-reviews__slide-author"
					/>
					<h3>One Page перенос</h3>
					<p className="s-reviews__slide-name">Dmitri Koles</p>
					<p className="s-reviews__slide-quotes">
						Все оперативно и качественно.
					</p>
					<p>
						<a
							href="https://freelance.ru/reviews/aigen/#review_316027"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							Ссылка на отзыв
						</a>
					</p>
				</div>
				<div className="s-reviews__slide">
					<img
						src={require('../../img/reviews/without_avatar.svg').default}
						alt="EVGENY BIL WEB - наши отзывы | Разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
						className="s-reviews__slide-author"
					/>
					<h3>Переработать 2 картинки</h3>
					<p className="s-reviews__slide-name">Гетера</p>
					<p className="s-reviews__slide-quotes">
						Работа была выполнена очень качественно и даже раньше чем было заявлено.
						Планирую сотрудничать на постоянной основе и Вам того же рекомендую.
						Огромное спасибо
					</p>
					<p>
						<a
							href="https://freelance.ru/reviews/aigen/#review_315823"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							Ссылка на отзыв
						</a>
					</p>
				</div>
				<div className="s-reviews__slide">
					<img
						src={require('../../img/reviews/without_avatar.svg').default}
						alt="EVGENY BIL WEB - наши отзывы | Разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
						className="s-reviews__slide-author"
					/>
					<h3>Отредактировать html письмо</h3>
					<p className="s-reviews__slide-name">Владислав Иванов</p>
					<p className="s-reviews__slide-quotes">
						Мне подход понравился исполнителя, быстро, четко, не тормозил))
					</p>
					<p>
						<a
							href="https://freelance.ru/reviews/aigen/#review_312764"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							Ссылка на отзыв
						</a>
					</p>
				</div>
				<div className="s-reviews__slide">
					<img
						src={require('../../img/reviews/without_avatar.svg').default}
						alt="EVGENY BIL WEB - наши отзывы | Разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
						className="s-reviews__slide-author"
					/>
					<h3>Верстка сайта по примеру</h3>
					<p className="s-reviews__slide-name">Pavel fixxx</p>
					<p className="s-reviews__slide-quotes">
						Разместив задание - получил достаточное количество заявок на выполнение
						работы. Было большее количество заявок от перекупщиков которые ломили
						цены, и тех кто не был сфокусирован именно в данной тематике, но когда
						написал Евгений - стало понятно что, он один из тех кто реально сделает
						как надо, тем более Евгений запросил и адекватную цену за выполнения
						работы. Работа сделана как было описано мной в тех. задании и сделана в
						заявленный срок! На Все необходимые исправления реагировал адекватно и
						быстро! Впечатления положительные! Сразу было понятно что это тот человек
						который мне нужен! Советую!
					</p>
					<p>
						<a
							href="https://freelance.ru/reviews/aigen/#review_312628"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							Ссылка на отзыв
						</a>
					</p>
				</div>
				<div className="s-reviews__slide">
					<img
						src={require('../../img/reviews/author3.png')}
						alt="EVGENY BIL WEB - наши отзывы | Разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
						className="s-reviews__slide-author"
					/>
					<h3>Починить вёрстку</h3>
					<p className="s-reviews__slide-name">Михаил Ахметов</p>
					<p className="s-reviews__slide-quotes">
						Евгений - профессиональный, вежливый, разбирающийся в своём деле
						исполнитель. Выполнил огромное количество работы в кратчайшие сроки, по
						крайне демократичной цене. Были исправлены просто неисправляемые ошибки в
						очень большом количестве. Уже после получения оплаты сделал неожиданно
						появившуюся часть работы, жертвуя своим личным временем, хотя уже никому
						ничего не должен был. Общение оставило только приятные эмоции. Записал
						контакты, обязательно буду обращаться ещё, рекомендую к сотрудничеству!
					</p>
					<p>
						<a
							href="https://freelance.ru/reviews/aigen/#review_310779"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							Ссылка на отзыв
						</a>
					</p>
				</div>
				<div className="s-reviews__slide">
					<img
						src={require('../../img/reviews/without_avatar.svg').default}
						alt="EVGENY BIL WEB - наши отзывы | Разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
						className="s-reviews__slide-author"
					/>
					<h3>Оптимизировать сайт, увеличить скорость загрузки</h3>
					<p className="s-reviews__slide-name">Павел Нестерович</p>
					<p className="s-reviews__slide-quotes">
						Все отлично. Вовремя и качественно. Рекомендую!
					</p>
					<p>
						<a
							href="https://freelance.ru/reviews/aigen/#review_309773"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							Ссылка на отзыв
						</a>
					</p>
				</div>
				<div className="s-reviews__slide">
					<img
						src={require('../../img/reviews/author4.png')}
						alt="EVGENY BIL WEB - наши отзывы | Разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
						className="s-reviews__slide-author"
					/>
					<h3>Верстка сайта</h3>
					<p className="s-reviews__slide-name">Сергей Матвеев</p>
					<p className="s-reviews__slide-quotes">
						Огромное спасибо Евгению, за качественно выполненную работу. Побольше бы
						таких специалистов, Рекомендую!
					</p>
					<p>
						<a
							href="https://freelance.ru/reviews/aigen/#review_309054"
							target="_blank"
							rel="noreferrer"
							className="link"
						>
							Ссылка на отзыв
						</a>
					</p>
				</div>

		</Slider>
	)
}

export default SliderReviews