import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PhotoGallery.styles.scss';
import Hero from '../../components/hero/hero.component';
import vakaciosBibliahet from '../../assets/gyerekek/vakaciosBibliahet.jpg';
import gyerekData from '../../data/gyerekData';

function PhotoGallery() {
    const { id } = useParams()
    let greeting = ''
    let source = ''
    let verse = ''

    if (id === 'kucko') {
        greeting = 'kuckóból';
        source = vakaciosBibliahet
        verse = 'Jézus pedig monda: "Hagyjatok békét e kis gyermekeknek, és ne tiltsátok meg nekik, hogy hozzám jőjjenek; mert ilyeneké a mennyeknek országa." - Máté 19,14'
    }

    if (id === 'zenepentek') {
        greeting = 'zene péntekről';
        source = vakaciosBibliahet
        verse = 'Jézus pedig monda: "Hagyjatok békét e kis gyermekeknek, és ne tiltsátok meg nekik, hogy hozzám jőjjenek; mert ilyeneké a mennyeknek országa." - Máté 19,14'
    }

    if (id === 'vakaciosBibliahet2022') {
        greeting = 'vakációs bibliahétről';
        source = vakaciosBibliahet
        verse = 'Jézus pedig monda: "Hagyjatok békét e kis gyermekeknek, és ne tiltsátok meg nekik, hogy hozzám jőjjenek; mert ilyeneké a mennyeknek országa." - Máté 19,14'
    }

    if (id === 'babamama') {
        greeting = 'baba-mama csoportról';
        source = vakaciosBibliahet
        verse = 'Jézus pedig monda: "Hagyjatok békét e kis gyermekeknek, és ne tiltsátok meg nekik, hogy hozzám jőjjenek; mert ilyeneké a mennyeknek országa." - Máté 19,14'
    }

    return (
        <>
            {
                greeting === '' ? 
                    <Hero 
                        title='Képes galéria' 
                        src= {vakaciosBibliahet}
                        bibleVerse={verse}
                    />
                :
                    <Hero 
                        title={`Képek a ${greeting}`} 
                        src= {source}
                        bibleVerse={verse}
                    />
                    
            }
            <div className='photoGallery-container'>
                <div className='photoGallery-backround'>
                    <div className='photoGallery'>
                        <div className='galleryImages'>
                        {
                            gyerekData.map((item, index) => {
                                    return (
                                        item.category === 'vasarnapi' ?
                                            <img 
                                                class="gallery__img"
                                                src={item.imgUrl}
                                                alt={item.category}
                                                key={index}
                                            />
                                        : null
                                    )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default PhotoGallery;