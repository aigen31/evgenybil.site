import React from 'react'
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import './FaqAccordion.css'

const FaqAccordion = () => {
	return (
		<Accordion className="s-faq__accordion-list" allowMultipleExpanded={true} allowZeroExpanded={true}>
			<AccordionItem className="accordion-item">
				<AccordionItemHeading>
					<AccordionItemButton>
						<h3 className="s-faq__accordion-title">Каковы основные этапы разработки сайта?</h3>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="s-faq__accordion-answer">
					<p itemProp="text">Все этапы идут по порядку, согласно списку:</p>
					<ol>
						<li>Обсуждение проекта</li>
						<li>
							<a data-element="window" href="brif" className="link">
								Заполнение брифа по разработке сайта
							</a>
						</li>
						<li>Разработка макета дизайна в Figma, утверждение</li>
						<li>Вёрстка страниц согласно макету</li>
						<li>
							Интеграция страниц на систему управления контентом (CMS)
							WordPress. Так же есть возможность интеграции блога в генератор
							статичных страниц Jekyll для более быстрой загрузки страниц
						</li>
						<li>
							Деплой сайта на хостинг{" "}
							<a
								href="https://beget.com/p1627316"
								rel="noreferrer"
								target="_blank"
								className="link"
							>
								Бегет
							</a>
						</li>
						<li>Заполнение сайта контентом (текст, изображения)</li>
						<li>Первичная SEO оптимизация</li>
						<li>SEO продвижение нашим партнёром</li>
						<li>
							Запуск рекламы на{" "}
							<a
								href="https://business.yandex.ru/"
								rel="noreferrer"
								target="_blank"
								className="link"
							>
								Яндекс.Бизнес
							</a>
						</li>
					</ol>
				</AccordionItemPanel>
			</AccordionItem>
			<AccordionItem className="accordion-item">
				<AccordionItemHeading>
					<AccordionItemButton>
						<h3 className="s-faq__accordion-title">Каковы основные этапы разработки сайта?</h3>
					</AccordionItemButton>
				</AccordionItemHeading>
				<AccordionItemPanel className="s-faq__accordion-answer">
					<p itemProp="text">Все этапы идут по порядку, согласно списку:</p>
					<ol>
						<li>Обсуждение проекта</li>
						<li>
							<a data-element="window" href="brif" className="link">
								Заполнение брифа по разработке сайта
							</a>
						</li>
						<li>Разработка макета дизайна в Figma, утверждение</li>
						<li>Вёрстка страниц согласно макету</li>
						<li>
							Интеграция страниц на систему управления контентом (CMS)
							WordPress. Так же есть возможность интеграции блога в генератор
							статичных страниц Jekyll для более быстрой загрузки страниц
						</li>
						<li>
							Деплой сайта на хостинг{" "}
							<a
								href="https://beget.com/p1627316"
								rel="noreferrer"
								target="_blank"
								className="link"
							>
								Бегет
							</a>
						</li>
						<li>Заполнение сайта контентом (текст, изображения)</li>
						<li>Первичная SEO оптимизация</li>
						<li>SEO продвижение нашим партнёром</li>
						<li>
							Запуск рекламы на{" "}
							<a
								href="https://business.yandex.ru/"
								rel="noreferrer"
								target="_blank"
								className="link"
							>
								Яндекс.Бизнес
							</a>
						</li>
					</ol>
				</AccordionItemPanel>
			</AccordionItem>
		</Accordion>
	)
}

export default FaqAccordion