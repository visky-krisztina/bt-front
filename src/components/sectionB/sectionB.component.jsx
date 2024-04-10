import React from 'react';
import Button from '../button/button.component';
import TitleH1 from '../title_h1/titleH1.component';
import './sectionB.styles.scss';

const SectionB = (props) => (
            <div className={`sectionBInfo ${ props.cName }`}>
                <div className={ props.cName === 'left' ? `paragraphsSectionB paragraphsSectionB-left`: `paragraphsSectionB paragraphsSectionB-right`}>
                    <div className="centerTitle">
                        <TitleH1 title={props.headline.toUpperCase()}/>
                    </div>
                    <div className='underline'></div>
                    <p>{props.p}</p>
                            
                    <div className="buttonStyle">
                        <Button 
                            buttonLabel={props.buttonLabel}
                            to={props.to}    
                        />
                    </div>
                </div>
                
                <div className="sectionBImage">
                    <div className={props.cName === 'left' ? 'img-styles-box-left' : 'img-styles-box-right' }></div>
                    <img src={props.src} alt={props.alt} />
                </div>
                
            
    </div>
)

export default SectionB;