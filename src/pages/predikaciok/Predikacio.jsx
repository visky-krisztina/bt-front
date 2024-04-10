import React from 'react';
import MemberCircle from '../../components/memberCircle/memberCircle.component.jsx';
import Button from '../../components/button/button.component';

import './predikaciok.styles.scss';

const Predikacio = ({ items, capitalName }) => {
  return (
    <>
      {
        items.map((sermon) => {
          const { id, date, theme, image, description, pastor, fb_url, category } = sermon
          return (
            <div className='sermon-item' key={id}>
              {
                image 
                  ?
                  <div className='pastorImageHolder'>
                    <MemberCircle person={sermon} size='smaller-img-container'/>
                    <h4 className='sermonInfo'>{pastor}</h4>
                  </div> 
                  : null
              }

              <div className='item-info'>
                <header>
                  <div className='justFlexRow'>
                    <h4 className='sermonInfo padding'>{date}</h4>
                    <h4 className='sermonInfo'>Téma: {capitalName(theme)}</h4>
                  </div>
                  <div className='justFlexRow'>
                    <h4 className='sermonInfo padding'>Kategória: {capitalName(category)}</h4>
                    {
                      image ? null : <h4 className='sermonInfo'>Szolgál:  {pastor}</h4>
                    }    
                  </div>            
                </header>
                <p className='sermon-text'>{description}</p>
                <div className='fb-link'>
                  <Button 
                    buttonLabel='Facebook-on itt elérhető'
                    to={fb_url}    
                  />
                </div>
              </div>
            </div>
          )
        })
      }
      </>
  );
};

export default Predikacio;