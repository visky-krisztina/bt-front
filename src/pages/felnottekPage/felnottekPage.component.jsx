import React from 'react';
import './felnottekPage.styles.scss';
import Hero from '../../components/hero/hero.component';
import felnottek from '../../assets/felnottek/hazasklub.png';
import Section from '../../components/section/section.component';
import noszovetseg from '../../assets/felnottek/noszovetseg.jpeg';
import korus from '../../assets/felnottek/korus.jpeg';

function FelnottekPage() {
    return (
        <>
            <Hero 
                greeting='Üdvözlünk!'
                title='Gyülekezetünk  alkalmai  felnőtteknek' 
                src={felnottek}
                bibleVerse='"Egymás terhét hordozzátok, és úgy töltsétek be a Krisztus törvényét." - Galata 6,2'
            />

            <Section 
                headline="HÁZAS KLUB"
                p="Lorem dsjk hem dsjk hdskjn UNam aliquaem dsjk hdskjn UNam aliquaem dsjk hdskjn UNam aliquaem dsjk hdskjn UNam aliquaem dsjk hdskjn UNam aliquaem dsjk hdskjn UNam aliquaem dsjk hdskjn UNam aliquaem dsjk hdskjn UNam aliquam sem et tortor consequat id porta nibh. Elit sed vulputate mi sit amet mauris commodo quis it faucibus pulvinar elementum integer enim neque volutpat ac. Tincidunt id aliquet risus feugiat in ante metus.Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Nam aliquam sem et tortor consequat id porta nibh. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. dscnskj fgxh gbdf dsdhnhdnjkc Péntekdfdrgdre dbhsbc dhsbjk dshjbk bvhskjdn shdkjn"
                src={felnottek}
                alt="hayas klub"
                to="/hazasklub"
                buttonLabel="Képek!"
                cName="right"
            />

            <Section 
                headline="NŐSZÖvetség"
                p="'Erő és ékesség az ő ruhája; és nevet a következő napnak. - Peld 31,25'.Loremem dsjk hdskjn Ut faucibus pulvinar elementum integer enim neque volutpat ac. Tincidunt id aliquet risus feugiat in ante metus.Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Nam aliquam sem et tortor consequat id porta nibh. Elit sed vulputate mi sit amet mauris commodo quis iibus pulvinar elementum integer enim neque volutpat ac. Tincidunt id aliquet risus feugiat in ante metus.Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Nam aliquam sem et tortor consequat id porta nibh. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. dscnskj fgxh gbdf dsdhnhdnjkc Péntekdfdrgdre dbhsbc dhsbjk dshjbk bvhskjdn shdkjn"
                src={noszovetseg}
                alt="noszovetseg"
                to="/noszovetseg"
                buttonLabel="Képek!"
                cName="left"
            />

            <Section 
                headline="KÓRUS"
                p="Lorem dsjk hem dsjk hdskjn UNam aliquaem dsjk hdskjn UNam aliquaem dsjk hdskjn UNam aliquaem dsjk hdskjn UNam aliquaem dsjk hdskjn UNam aliquaem dsjk hdskjn UNam aliquaem dsjk hdskjn UNam aliquaem dsjk hdskjn UNam aliquam sem et tortor consequat id porta nibh. Elit sed vulputate mi sit amet mauris commodo quis it faucibus pulvinar elementum integer enim neque volutpat ac. Tincidunt id aliquet risus feugiat in ante metus.Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Nam aliquam sem et tortor consequat id porta nibh. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. dscnskj fgxh gbdf dsdhnhdnjkc Péntekdfdrgdre dbhsbc dhsbjk dshjbk bvhskjdn shdkjn"
                src={korus}
                alt="hazas klub"
                to="/korus"
                buttonLabel="Képek!"
                cName="right"
            />
        </>
    )}


export default FelnottekPage;