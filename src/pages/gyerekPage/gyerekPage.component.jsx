import React from 'react';
import './gyerekPage.styles.scss';
import homeSectionData from '../../data/homeSectionData';
import Section from '../../components/section/section.component';
import zenepentek from '../../assets/gyerekek/zenepentek.jpg';
import Hero from '../../components/hero/hero.component';
import vakaciosBibliahet from '../../assets/gyerekek/vakaciosBibliahet.jpg';
import babamama from '../../assets/gyerekek/babamama.png';

function GyerekPage() {
    
    return (
        <>
            <Hero 
                greeting='Üdvözlünk!'
                title='Gyülekezetünk gyermekfoglalkozásai' 
                src={vakaciosBibliahet}
                bibleVerse='Jézus pedig monda: "Hagyjatok békét e kis gyermekeknek, és ne tiltsátok meg nekik, hogy hozzám jőjjenek; mert ilyeneké a mennyeknek országa." - Máté 19,14'
            />

            {    
                homeSectionData.map((obj, i) => {   
                    return(   
                    obj.page === 'gyerekek' ?    
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
                    : null
                    )}
                )
            }

            <Section 
                headline="Zene Péntek"
                p="Loremem dsjk hdskjn Ut faucibu pulTincidunt id aliquet risus.Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Nam aliquam sem et tortor consequat id porta nibh. Elit sed vulputate mi sit amet mauris commodo quis iibus pulvinar elementum integer enim neque volutpat ac. Tincidunt id aliquet risus feugiat in ante metus.Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Nam aliquam sem et tortor consequat id porta nibh. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. dscnskj fgxh gbdf dsdhnhdnjkc Péntekdfdrgdre dbhsbc dhsbjk dshjbk bvhskjdn shdkjn"
                src={zenepentek}
                alt="Zene pentek jpg"
                to="/gallery/zenepentek"
                buttonLabel="Képek!"
                cName="left"
            />

            <Section 
                headline="Baba mama csoport"
                p="Loremem dsjk hdskjn Ut faucibus pulvinar elementum integer enim neque volutpat ac. Tincidunt id aliquet risus feugiat in ante metus.Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Nam aliquam sem et tortor consequat id porta nibh. Elit sed vulputate mi sit amet mauris commodo quis iibus pulvinar elementum integer enim neque volutpat ac. Tincidunt id aliquet risus feugiat in ante metus.Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Nam aliquam sem et tortor consequat id porta nibh. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. "
                src={babamama}
                alt="babamama"
                to="/gallery/babamama"
                buttonLabel="Képek!"
                cName="right"
            />

            <Section 
                headline="Vakációs bibliahét gyerekeknek"
                p="Lorem dsjk hem dsjk hdskjn UNam aliquam sem et tortor consequat id porta nibh. Elit sed vulputate mi sit amet mauris commodo quis it faucibus pulvinar elementum integer enim neque volutpat ac. Tincidunt id aliquet risus feugiat in ante metus.Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Nam aliquam sem et tortor consequat id porta nibh. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. dscnskj fgxh gbdf dsdhnhdnjkc Péntekdfdrgdre dbhsbc dhsbjk dshjbk bvhskjdn shdkjn"
                src={vakaciosBibliahet}
                alt="vakacios Bibliahet"
                to="/gallery/vakaciosBibliahet2022"
                buttonLabel="Képek a 2022-es alkalomról!"
                cName="left"
            />

        </>
    )}

export default GyerekPage;