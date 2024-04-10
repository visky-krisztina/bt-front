import React from "react";

import "./homepage.styles.scss";
import MainSlider from "../../components/mainSlider/mainSlider.component";
import mainSliderData from "../../data/mainSliderData";
import homeCardData from "../../data/homeCardData";
import Card from "../../components/smallCard/smallCard.component";
import homeSectionData from "../../data/homeSectionData";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import Section from "../../components/section/section.component";
import eventsData from "../../data/eventsData";
import TitleH1 from "../../components/title_h1/titleH1.component";
import Button from "../../components/button/button.component";
import ImgComp from "../../components/imgComponent/imgComponent.component";
import EventCard3 from "../../components/eventCard/event3.component";

function HomePage() {
	const lelkiTaplalek = homeSectionData.find((element) => {
		return element.alt === "Napi Ige";
	});
	return (
		<div className='homepageContainer'>
			<MainSlider slides={mainSliderData} />

			<div className='card-container'>
				{homeCardData.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.title}
							subTitle={item.subTitle}
							src={item.image}
							alt={item.alt}
							styleMargin={item.top}
						/>
					);
				})}
			</div>

			<div className='events-Container'>
				<div className='centerTitle'>
					<TitleH1 title='Gyülekezetünk következő eseményei' />
				</div>
				<div className='underline'></div>
				<div className='justFlexRow' style={{ justifyContent: "center", alignItems: "center" }}>
					<h3 className='centerTitle'>Gyülekezetünk alkalmai naptárban is láthatóak</h3>
					<div className='buttonStyle' style={{ marginTop: "0rem" }}>
						<Button buttonLabel='itt.' to='/alkalmaink' />
					</div>
				</div>

				<div className='events-holder'>
					{eventsData.map((obj, i) => {
						return (
							<EventCard3
								key={i}
								eventImage={obj.imgUrl}
								eventDateMonth={obj.eventDateMonth}
								eventDateDay={obj.eventDateDay}
								eventDateTime={obj.eventDateTime}
								eventTitle={obj.eventTitle}
								eventLocation={obj.eventLocation}
							/>
						);
					})}
				</div>
			</div>

			{homeSectionData.map((obj, i) => {
				return obj.page === "home" ? (
					<Section
						key={i}
						headline={obj.headline}
						p={obj.p}
						src={obj.image}
						alt={obj.alt}
						to={obj.to}
						buttonLabel={obj.buttonLabel}
						cName={obj.cName}
					/>
				) : null;
			})}

			<div className='centerElement'>
				<TitleH1 title={lelkiTaplalek.headline.toUpperCase()} />
			</div>
			<div className='underline'></div>

			<div className='spiritual-section'>
				<div className='spiritual-paragraphs centerElement'>
					<div>
						<p>{lelkiTaplalek.p}</p>
						<div className='buttonStyle'>
							<Button buttonLabel={lelkiTaplalek.buttonLabel} to={lelkiTaplalek.to} />
						</div>
					</div>

					<div>
						<p>
							Utmutato bghg hjhvgbj hj ghjbjkbghc vgyh vgvcyg bghvfcvgy vbgyvgyh vgyctfygu ftyftyg ytgfyt tyvftyguyhbh
							vhjv jh bhjbhj bhjb bhjb hjbv{" "}
						</p>

						<div className='buttonStyle'>
							<Button buttonLabel='Bibliaolvasó kalauz.' to='/utmutato' />
						</div>
					</div>
				</div>

				<div className='spiritual-sectionImage centerElement'>
					<ImgComp src={lelkiTaplalek.image} alt={lelkiTaplalek.alt} />
				</div>
			</div>

			<div className='audioPlayer-wrapper'>
				<div className='audioPlayer-Container'>
					<AudioPlayer />
				</div>

				<div className='audio-container'>
					<div className='centerElement'>
						<TitleH1 title='BÉTHEL dicsőités' />
					</div>
					<div className='underline'></div>

					<div className='audiotext-container'>
						<div className='textBox'>
							<p id='text'>Szeretettel ajánljuk hallgatásra gyülekezetünk zenecsapatának énekeit!</p>
							<p id='text'>
								A zenecsapat tagjairól, történetéről és dicsőitő alkalmaikról részletesebb információt kaphatnak a Zenés
								Istentiszteletek c. menüpont alatt.{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
