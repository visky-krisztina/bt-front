import React from 'react';
import './fiatalokPage.styles.scss';
import homeSectionData from '../../data/homeSectionData';
import Section from '../../components/section/section.component';
import tarsasParos from '../../assets/fiatalok/tarsasParos.jpg';
import Hero from '../../components/hero/hero.component';


function FiatalokPage() {
    
    return (
        <>

            <Hero                 
                greeting='Üdvözlünk!'
                title='Gyülekezetünk foglalkozásai FIATALOKKAL' 
                src={tarsasParos}
                bibleVerse='"Miképpen egyik vassal a másikat élesítik, akképpen az ember élesíti az ő barátjának orcáját." - Péld. 27,17'
            />

            { 
                            homeSectionData.filter(cat => cat.page === 'fiatalok').map((obj, i) => {
                                return(
                                    <div>           
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
                                </div>           
                                )
                            })
                    }


        </>
    )}

export default FiatalokPage;