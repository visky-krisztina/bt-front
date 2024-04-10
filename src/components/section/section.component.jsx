import React from 'react';
import Button from '../button/button.component';
import ImgComp from '../imgComponent/imgComponent.component';
import TitleH1 from '../title_h1/titleH1.component';
import './section.styles.scss';

const Section = (props) => (
         <div className='sectionGlobal'>
            <div className="sectionContainer">
                <div className="centerElement">
                    <TitleH1 title={props.headline.toUpperCase()}/>
                </div>
                <div className='underline'></div>

                <div className={`sectionInfo ${ props.cName }`}>
                    <div className="paragraphs">
                            <p>{props.p}</p>
                            
                            {
                                !props.to || !props.buttonLabel || props.p.length > 1000  
                                    ? null 
                                    :
                                        <div className="buttonStyle">
                                            <Button 
                                                buttonLabel={props.buttonLabel}
                                                to={props.to}    
                                            />
                                        </div>

                            }
                    </div>

                    <div className="sectionImage">
                        {props.src ? 
                            <div className='imageButton-style'>
                                <ImgComp 
                                    src={props.src}
                                    alt={props.alt}
                                />
                                {
                                    !props.to || !props.buttonLabel || props.p.length < 1000  
                                        ? null 
                                        :
                                            <div className="buttonStyle">
                                                <Button 
                                                    buttonLabel={props.buttonLabel}
                                                    to={props.to}    
                                                />
                                            </div>

                                }
                            </div>
                        : null
                        }
                    </div>
                </div>

            </div>
    </div>
)

export default Section;