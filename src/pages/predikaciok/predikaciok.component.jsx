import React, { useState } from 'react';
import './predikaciok.styles.scss';
import items from '../../data/predikaciokData';
import Predikacio from './Predikacio';
import Pastors from './Pastors';
import TitleH1 from '../../components/title_h1/titleH1.component';
import ResponsivePlayer from '../../components/videoPlayer/ResponsivePlayer.component';
import videoData from '../../data/videoData';
import SermonCheckbox from './SermonCheckbox';


const allPastors = ['Összes',...new Set(items.map((item) => item.pastor)), 'Más lelkipásztorok']

function Predikaciok() {
  const [ sermons, setSermons ] = useState(items)
  const [ pastors, setPastors ] = useState(allPastors)
  
  const Istvan = 'Barta István'
  const Janos = 'Simon János'

  const filterItems = (pastorPerson) => {
    if (pastorPerson === 'Összes') {
      setSermons(items)
      return;
    }
    if (pastorPerson === Janos) {
        const jani = items.filter((item) => item.pastor === Janos);
        setSermons(jani)
        return;

    }
    if (pastorPerson === Istvan) {
        const bistvan = items.filter((item) => item.pastor === Istvan);
        setSermons(bistvan)
        return;

    }

    if (pastorPerson === 'Más lelkipásztorok') {
        const others = items.filter((item) => item.pastor !== Janos && item.pastor !== Istvan);
        setSermons(others)
        return;

    }
  }

  const capitalName = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const allSermonsTheme = items.filter((it) => it.sorozat === 1).map((it) => it.theme)
  const withoutDuplicatesTheme = [...new Set(allSermonsTheme)];

  const sermonsByCategory = items.filter((item) => item.category && item.category !== 'egyebb').map((item) => item.category)
  const withoutDuplicatesCategory = [...new Set(sermonsByCategory)]

  const handleFilters = (filters, filterParameter) => {

    if (filters && filters.length > 0) {

      const deCapitalizedFilters = filters.map((it) => it.toLowerCase())

      if (filterParameter === 'theme') {
          const filteredSermonsByFilter = items.filter((item) => deCapitalizedFilters.includes(item.theme));
          setSermons(filteredSermonsByFilter)
      } else {
        if (filterParameter === 'category') {
          const filteredSermonsByFilter = items.filter((item) => deCapitalizedFilters.includes(item.category));
          setSermons(filteredSermonsByFilter)
        }
      } 
     } else {
      setSermons(items)
    }
  }

  return (
    <main>
      <section className='sermonContainer'>
        <ResponsivePlayer 
                    headline={videoData[0].headline}
                    author={videoData[0].author}
                    date={videoData[0].date}
                    p1={videoData[0].p1}
                    url={videoData[0].url}
                    tags={videoData[0].tags}
                    cName={videoData[0].cName}  
                    width={videoData[0].width}  
                    height={videoData[0].height} 
        />
        <div className='sermonArchivum'>

          <div className='sermon-title'>
            <div className='underline'></div>
            <TitleH1 title="Prédikáció Archívum" />
            <div className='underline'></div>
          </div>
            <Pastors pastors={pastors} filterItems={filterItems}/>
            <div className='archivumContainer'>
              <div className='left-side'>
                <h3>Kereső</h3>
                <div >
                  <h3 style={{ textAlign: 'left', paddingLeft: '1rem'}}>Sorozatok:</h3>
                  <SermonCheckbox array={withoutDuplicatesTheme} capitalName={capitalName} handleFilters={filters => handleFilters(filters, 'theme')}/>
                </div>
                <div >
                  <h3 style={{ textAlign: 'left', paddingLeft: '1rem'}}>Ünnepi prédikációk:</h3>
                  <SermonCheckbox array={withoutDuplicatesCategory} capitalName={capitalName} handleFilters={filters => handleFilters(filters, 'category')}/>
                </div>
                
              </div>
              <div className='right-side'>
                <Predikacio items={sermons} capitalName={capitalName} />
              </div>
            </div>
        </div>
      </section>
    </main>
  )
}

export default Predikaciok;