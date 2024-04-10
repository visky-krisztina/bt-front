import React from "react";
import "./alkalmaink.styles.scss";
import templom from "../../assets/ImageOne.jpg";
import Hero from "../../components/hero/hero.component";
import szolgalatData from "../../data/szolgalatData.js";
import SectionB from "../../components/sectionB/sectionB.component";
import test from "../../assets/test.png";
import Calendar from "../../components/calendar/calendar.component";

const SAMPLE_META =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function Alkalmaink() {
	return (
		<div className='alkalmak-wrapper'>
			<Hero
				greeting='Üdvözlünk!'
				title='Gyülekezetünk összes alkalmai'
				src={templom}
				bibleVerse='"Egymás terhét hordozzátok, és úgy töltsétek be a Krisztus törvényét." - Galata 6,2'
			/>
			<div className='calendarContainer'>
				<div className='calendar-holder'>
					<div className='calendar-left'>
						<div className='calendar-image'>
							<img id='calendar-img' src={templom} alt='church image'></img>
							<img id='logo-img' src={test} alt='Bulgariatelep church'></img>
						</div>
					</div>
					<div className='calendar-right'>
						<Calendar
							preloadedEvents={[
								{
									id: 1,
									name: "Házas Klub",
									dateFrom: "2022-11-04T18:00",
									dateTo: "2022-11-04T20:00",
									meta: SAMPLE_META,
									type: "alkalom",
								},
								{
									id: 2,
									name: "Angyalműhely",
									dateFrom: "2022-12-01T10:00",
									dateTo: "2022-12-01T16:00",
									meta: SAMPLE_META,
									type: "Alkalom",
								},
								{
									id: 3,
									name: "20+ Konferencia",
									dateFrom: "2022-12-09T10:00",
									dateTo: "2022-12-09T20:00",
									meta: SAMPLE_META,
									type: "Egyedi",
								},
								{
									id: 4,
									name: "Nőszövetség",
									dateFrom: "2022-11-22T10:00",
									dateTo: "2022-11-22T11:00",
									meta: SAMPLE_META,
									type: "Alkalom",
								},
								{
									id: 5,
									name: "Bibliaóra",
									dateFrom: "2022-11-22T18:00",
									dateTo: "2022-11-22T19:00",
									meta: SAMPLE_META,
									type: "alkalom",
								},
								{
									id: 6,
									name: "Tini ifi",
									dateFrom: "2022-11-26T19:00",
									dateTo: "2022-11-26T20:00",
									meta: SAMPLE_META,
									type: "Alkalom",
								},
							]}
						/>
					</div>
				</div>
			</div>

			<div className='eventsSectionContainer'>
				{szolgalatData.map((obj, i) => {
					return (
						<div>
							<SectionB
								key={i}
								headline={obj.headline}
								p={obj.p}
								src={obj.image}
								alt={obj.alt}
								to={obj.to}
								buttonLabel={obj.buttonLabel}
								cName={obj.cName}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Alkalmaink;
