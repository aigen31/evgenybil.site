import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'normalize.css';
import Button from './components/Button/Button'
import SliderMain from './components/SliderMain/SliderMain'
import SliderReviews from './components/SliderReviews/SliderReviews';
import Section from './components/Section/Section'
import FaqAccordion from './components/FaqAccordion/FaqAccordion';
import MainLayout from './layouts/MainLayout';

function App() {
	const [isOpenMenu, setIsOpenMenu] = useState(false)
	const [headerHeight, setHeaderHeight] = useState(false)
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

	function openMenuHandler() {
		setIsOpenMenu(!isOpenMenu);
	}

	function setPaddings(e) {
		setHeaderHeight(e + 'px')
	}

	function changeLocationHandler(e) {
		setIsHamburgerOpen(e)
		setIsOpenMenu(false)
	}

	return (
		<BrowserRouter>
			<div className="App" style={{ '--header-height': headerHeight }}>
				<Routes>
					<Route path="/evgenybil.site" element={<MainLayout
						openMenuHandler={openMenuHandler}
						isOpenMenu={isOpenMenu}
						setPaddings={setPaddings}
						onChangeLocation={changeLocationHandler}
						isHamburgerOpen={isHamburgerOpen}
						setIsHamburgerOpen={setIsHamburgerOpen} />}>
						<Route index element={<Section className={`s-main`} onChangeLocation={changeLocationHandler}>
							<>
								<div className="container s-main__container">
									<div className="s-main__background" />
									<div className="s-main__col s-main__col--left">
										<h1 className="h1 s-main__h1" itemProp="mainContentOfPage">
											Разработка
											<br /> сайтов
										</h1>
										<ul className="s-main__list">
											<li className="s-main__item">
												<a href="/portfolio" className="link">
													Портфолио
												</a>
											</li>
											<li className="s-main__item">
												<Link to="services" className="link">Услуги</Link>
											</li>
											<li className="s-main__item">
												<Link to="reviews" className="link">Отзывы</Link>
											</li>
											<li className="s-main__item">
												<Link to="contacts" className="link">Контакты</Link>
											</li>
										</ul>
										<div className="row">
											<Button className="btn s-main__btn" id="s-main__btn">Оставить заявку</Button>
										</div>
									</div>
									<div className="s-main__col s-main__col--right">
										<SliderMain />
									</div>
								</div>
								<a
									href="https://beget.com/p1627316/"
									className="beget-link"
									target="_blank"
									rel="noreferrer"
								>
									Сайты работают на beget.com
								</a>
							</>
						</Section>} />

						<Route path="about" element={<Section className={`s s-about s--modal`} onChangeLocation={changeLocationHandler}>
							<>
								<div className="container">
									<h2>Обо мне</h2>
								</div>
								<div className="container s-about__container">
									<div className="col s-about__col s-about__col--left">
										<p>
											Меня зовут <span itemProp="name">Евгений Биль</span>. Я -
											веб-разработчик, мне 21 год. Я занимаюсь разработкой сайтов в России.
											Личные встречи провожу по Республике Хакасии и Красноярскому Краю.
										</p>
										<p>
											<strong>Моя цель - создавать красивые и функциональные сайты.</strong>
										</p>
										<h3>Мой стек технологий</h3>
										<p>
											<a data-element="window" href="tech" className="link">
												Ознакомиться можно в разделе «технологии»
											</a>
										</p>
										<h3>Сотрудничество</h3>
										<p>
											<a data-event="modal" className="link">
												Свяжись со мной сейчас
											</a>
											, чтобы обсудить твои идеи и начать работу над твоим новым веб-проектом.
										</p>
										<button
											className="btn s__btn"
											data-event="modal"
											role="button"
											tabIndex={0}
											aria-label="Открыть модальное окно"
										>
											Отправить заявку
										</button>
									</div>
									<div className="col s-about__col s-about__col--right">
										<img
											src={require('./img/me.jpg')}
											alt="EVGENY BIL - разработка и продвижение сайтов в Хакасии и Республике Хакасия (Красноярск)"
											className="s-about__img"
											loading="lazy"
											itemProp="image"
										/>
									</div>
								</div>
							</>
						</Section>} />

						<Route path="contacts" element={<Section className={`s s-contacts s--modal`} onChangeLocation={changeLocationHandler}>
							<div className="container">
								<h2>Контакты</h2>
								<div className="s-contacts__address">
									<span>Адрес: </span>
									<address>Республика Хакасия, г. Абакан</address>
								</div>
								<p itemScope="" itemType="https://schema.org/ContactPoint">
									<span>Номер телефона:</span>{" "}
									<a href="tel:+79130523406" className="link" itemProp="telephone">
										+7 (913) 052 34-06
									</a>
								</p>
								<p itemScope="" itemType="https://schema.org/ContactPoint">
									<span>Адрес электронной почты:</span>{" "}
									<a
										href="mailto:aigen.chernogorsk@yandex.ru"
										className="link"
										itemProp="email"
									>
										aigen.chernogorsk@yandex.ru
									</a>
								</p>
								<p itemScope="" itemType="https://schema.org/ContactPoint">
									<span>Мой телеграм:</span>{" "}
									<a href="https://t.me/AiGen31" className="link" itemProp="url">
										@AiGen31
									</a>
								</p>
								<p itemScope="" itemType="https://schema.org/ContactPoint">
									<span>Мой ВК:</span>{" "}
									<a href="https://vk.com/aigen_31" className="link" itemProp="url">
										https://vk.com/aigen_31
									</a>
								</p>
								<button
									className="btn s__btn"
									data-event="modal"
									role="button"
									tabIndex={0}
									aria-label="Открыть модальное окно"
								>
									Отправить заявку
								</button>
							</div>

						</Section>} />

						<Route path="reviews" element={<Section className={`s s-reviews s--modal`} onChangeLocation={changeLocationHandler}>
							<div className="container">
								<h2>Отзывы</h2>

								<SliderReviews />
							</div>
						</Section>} />

						<Route path="services" element={<Section className={`s s-services s--modal`} onChangeLocation={changeLocationHandler}>
							<div className="container">
								<h2>Услуги</h2>
								<table className="s-services__table">
									<tbody>
										<tr
											className="s-services__tr"
											itemScope=""
											itemType="https://schema.org/Service"
										>
											<td className="s-services__td" itemProp="name">
												Landing-Page, Сайт-Визитка
											</td>
											<td
												className="s-services__td"
												itemType="https://schema.org/PriceSpecification"
												itemScope=""
											>
												От{" "}
												<span itemProp="price" content={20000}>
													20000
												</span>{" "}
												₽
											</td>
										</tr>
										<tr
											className="s-services__tr"
											itemScope=""
											itemType="https://schema.org/Service"
										>
											<td className="s-services__td" itemProp="name">
												Корпоративный сайт
											</td>
											<td
												className="s-services__td"
												itemType="https://schema.org/PriceSpecification"
												itemScope=""
											>
												От{" "}
												<span itemProp="price" content={45000}>
													45000
												</span>{" "}
												₽
											</td>
										</tr>
										<tr
											className="s-services__tr"
											itemScope=""
											itemType="https://schema.org/Service"
										>
											<td className="s-services__td" itemProp="name">
												Сайт-Блог
											</td>
											<td
												className="s-services__td"
												itemType="https://schema.org/PriceSpecification"
												itemScope=""
											>
												От{" "}
												<span itemProp="price" content={30000}>
													30000
												</span>{" "}
												₽
											</td>
										</tr>
										<tr
											className="s-services__tr"
											itemScope=""
											itemType="https://schema.org/Service"
										>
											<td className="s-services__td" itemProp="name">
												Интернет-Магазин
											</td>
											<td
												className="s-services__td"
												itemType="https://schema.org/PriceSpecification"
												itemScope=""
											>
												От{" "}
												<span itemProp="price" content={60000}>
													60000
												</span>{" "}
												₽
											</td>
										</tr>
										<tr
											className="s-services__tr"
											itemScope=""
											itemType="https://schema.org/Service"
										>
											<td className="s-services__td" itemProp="name">
												Обслуживание и администрирование сайта, подключение API
											</td>
											<td
												className="s-services__td"
												itemType="https://schema.org/PriceSpecification"
												itemScope=""
											>
												<span itemProp="price" content={700}>
													700
												</span>{" "}
												₽/час
											</td>
										</tr>
									</tbody>
								</table>
								<div className="row">
									<button
										className="btn s-services__btn"
										id="s-main__btn"
										data-event="modal"
										role="button"
										tabIndex={0}
										aria-label="Открыть модальное окно"
									>
										Оставить заявку
									</button>
								</div>
							</div>
						</Section>} />

						<Route path="tech" element={<Section className={`s s-tech s--modal`} onChangeLocation={changeLocationHandler}>
							<>
								<div className="container">
									<h2>Стек технологий</h2>
								</div>
								<div className="container s-tech__container">
									<div className="col s-tech__col">
										<div className="s-tech__logo-list">
											<img
												className="s-tech__logo-img"
												src={require('./img/tech/logos_html-5.svg').default}
												alt="EVGENY BIL WEB - технологии разработки сайтов"
											/>
											<img
												className="s-tech__logo-img"
												src={require('./img/tech/logos_css-3.svg').default}
												alt="EVGENY BIL WEB - технологии разработки сайтов"
											/>
											<img
												className="s-tech__logo-img"
												src={require('./img/tech/devicon_javascript.svg').default}
												alt="EVGENY BIL WEB - технологии разработки сайтов"
											/>
											<img
												className="s-tech__logo-img"
												src={require('./img/tech/devicon_react-wordmark.svg').default}
												alt="EVGENY BIL WEB - технологии разработки сайтов"
											/>
											<img
												className="s-tech__logo-img"
												src={require('./img/tech/bxl_php.svg').default}
												alt="EVGENY BIL WEB - технологии разработки сайтов"
											/>
											<img
												className="s-tech__logo-img"
												src={require('./img/tech/ic_baseline-wordpress.svg').default}
												alt="EVGENY BIL WEB - технологии разработки сайтов"
											/>
											<img
												className="s-tech__logo-img"
												src={require('./img/tech/devicon-plain_woocommerce.svg').default}
												alt="EVGENY BIL WEB - технологии разработки сайтов"
											/>
											<img
												className="s-tech__logo-img"
												src={require('./img/tech/logos_jekyll.svg').default}
												alt="EVGENY BIL WEB - технологии разработки сайтов"
											/>
											<img
												className="s-tech__logo-img"
												src={require('./img/tech/logos_docker.svg').default}
												alt="EVGENY BIL WEB - технологии разработки сайтов"
											/>
											<img
												className="s-tech__logo-img"
												src={require('./img/tech/logos_git.svg').default}
												alt="EVGENY BIL WEB - технологии разработки сайтов"
											/>
										</div>
										<h3>Front-end:</h3>
										<ul>
											<li itemScope="" itemType="https://schema.org/TechArticle">
												HTML:{" "}
												<span itemProp="description">
													используется для создания структуры веб-страниц.
												</span>
											</li>
											<li itemScope="" itemType="https://schema.org/TechArticle">
												CSS:{" "}
												<span itemProp="description">
													позволяет задавать внешний вид элементов веб-страницы.
												</span>
											</li>
											<li itemScope="" itemType="https://schema.org/TechArticle">
												JavaScript:{" "}
												<span itemProp="description">
													обеспечивает интерактивность и динамическое поведение на
													веб-страницах.
												</span>
											</li>
											<li itemScope="" itemType="https://schema.org/TechArticle">
												ReactJS:{" "}
												<span itemProp="description">
													фреймворк для разработки приложений на JavaScript.
												</span>
											</li>
										</ul>
										<h3>Back-end:</h3>
										<ul>
											<li itemScope="" itemType="https://schema.org/TechArticle">
												PHP:{" "}
												<span itemProp="description">
													серверный язык программирования, который широко используется для
													создания динамических веб-страниц и взаимодействия с базами данных.
												</span>
											</li>
											<li itemScope="" itemType="https://schema.org/TechArticle">
												WordPress:{" "}
												<span itemProp="description">
													популярная система управления контентом (CMS) на основе PHP, которая
													позволяет создавать и управлять сайтами с использованием различных
													тем и плагинов.
												</span>
											</li>
											<li itemScope="" itemType="https://schema.org/TechArticle">
												WooCommerce:{" "}
												<span itemProp="description">
													плагин для WordPress, написаный на PHP, предназначен для создания
													онлайн-магазинов.
												</span>
											</li>
											<li itemScope="" itemType="https://schema.org/TechArticle">
												Jekyll:{" "}
												<span itemProp="description">
													статический генератор сайтов, позволяющий создавать сайты на основе
													шаблонов без необходимости использования базы данных или серверного
													языка.
												</span>
											</li>
										</ul>
										<h3>Инструменты и системы:</h3>
										<ul>
											<li itemScope="" itemType="https://schema.org/TechArticle">
												XAMPP:{" "}
												<span itemProp="description">
													кроссплатформенный пакет программного обеспечения, который включает
													в себя Apache, MySQL, PHP и другие инструменты, необходимые для
													разработки и тестирования веб-приложений на локальном компьютере.
												</span>
											</li>
											<li itemScope="" itemType="https://schema.org/TechArticle">
												Docker:{" "}
												<span itemProp="description">
													платформа для контейнеризации приложений, которая позволяет
													упаковывать и запускать приложения со всеми их зависимостями в
													изолированной среде.
												</span>
											</li>
											<li itemScope="" itemType="https://schema.org/TechArticle">
												Git:{" "}
												<span itemProp="description">
													система контроля версий, используемая для отслеживания изменений в
													коде и совместной работы над проектами.
												</span>
											</li>
											<li itemScope="" itemType="https://schema.org/TechArticle">
												GitHub:{" "}
												<span itemProp="description">
													веб-платформа для хостинга и совместной работы над
													Git-репозиториями, позволяющая управлять версиями кода и
													взаимодействовать с другими разработчиками.
												</span>
											</li>
										</ul>
										<p>
											Этот стек технологий предоставляет широкие возможности для разработки и
											управления сайтами, начиная от создания внешнего вида и взаимодействия с
											пользователем до обработки данных и управления контентом.
										</p>
										<button
											className="btn s__btn"
											data-event="modal"
											role="button"
											tabIndex={0}
											aria-label="Открыть модальное окно"
										>
											Отправить заявку
										</button>
									</div>
								</div>
							</>
						</Section>} />

						<Route path="faq" element={<Section className={`s s-faq s--modal`} onChangeLocation={changeLocationHandler}>
							<>
								<div className="container">
									<h2>Вопрос-ответ</h2>
								</div>
								<div className="container s-faq__container">
									<div className="col s-faq__col">
										<FaqAccordion />
										<button
											className="btn s__btn"
											data-event="modal"
											role="button"
											tabIndex={0}
											aria-label="Открыть модальное окно"
										>
											Отправить заявку
										</button>
									</div>
								</div>
							</>
						</Section>} />

						<Route path="personal" element={<Section className={`s s-personal s--modal`} onChangeLocation={changeLocationHandler}>
							<>
								<div className="container">
									<h2>Обработка персональных данных</h2>
								</div>
								<div className="container s-personal__container">
									<p>
										Мы ценим ваше доверие и обязуемся бережно обращаться с вашими
										персональными данными. Данное уведомление описывает, какие данные мы
										собираем и как мы планируем их использовать.
									</p>
									<h3>Собираемые данные:</h3>
									<p>
										При заполнении формы отправки заявки, мы собираем следующие персональные
										данные:
									</p>
									<ul>
										<li>Ваше имя клиента;</li>
										<li>Номер телефона;</li>
										<li>Адрес электронной почты";</li>
										<li>Сообщение;</li>
									</ul>
									<h3>Цель сбора данных</h3>
									<p>
										Мы используем предоставленные вами персональные данные исключительно для
										обработки и рассмотрения вашей заявки, а также для связи с вами по поводу
										вашего обращения. Ваши контактные данные могут быть использованы для
										отправки уведомлений и ответов на ваши вопросы или запросы.
									</p>
									<h3>Защита данных</h3>
									<p>
										Мы прилагаем все усилия для защиты ваших персональных данных от
										несанкционированного доступа, утечек, изменений или уничтожения. Ваши
										данные хранятся на защищенных серверах и доступ к ним ограничен только
										сотрудникам, которым это необходимо для обработки заявок.
									</p>
									<h3>Срок хранения данных</h3>
									<p>
										Ваши персональные данные будут храниться у нас только в течение периода,
										необходимого для рассмотрения вашей заявки и обработки запроса. По
										окончании этого периода мы удалим ваши данные из наших систем, если только
										иное не предусмотрено законодательством.
									</p>
									<h3>Права пользователей</h3>
									<p>
										У вас есть право запросить доступ к вашим персональным данным, а также
										внести необходимые исправления, если они будут неточными или устаревшими.
										Вы также можете в любой момент отозвать свое согласие на обработку данных,
										и мы удалить ваши данные из нашей базы данных.
									</p>
									<h3>Согласие на обработку данных</h3>
									<p>
										Отправляя заявку через нашу форму, вы выражаете согласие на сбор и
										обработку предоставленных вами персональных данных в соответствии с
										описанными выше целями.
									</p>
									<p>
										Если у вас возникли вопросы или требуется дополнительная информация о
										нашей политике обработки персональных данных, пожалуйста, свяжитесь с нами
										по указанным на сайте контактным данным.
									</p>
									<p>Спасибо за ваше понимание и доверие к нам!</p>
									<p>
										С уважением,
										<br />
										evgenybil.site
									</p>
								</div>
							</>
						</Section>} />

						<Route path="*" element={<Section className={`s s-404 s--modal`} onChangeLocation={changeLocationHandler}>
							<>
								<div className="container">
									<h2>Страницы не найдено</h2>
								</div>
							</>
						</Section>} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;