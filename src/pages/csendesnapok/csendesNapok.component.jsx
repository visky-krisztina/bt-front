import React from 'react';
import './csendesNapok.styles.scss';
import homeSectionData from '../../data/homeSectionData';
import Section from '../../components/section/section.component';
import Button from '../../components/button/button.component';

function CsendesNapok() {
    
    return (
        <div className="pageContainer">

            {    
                homeSectionData.map((obj, i) => {   
                    return(   
                    obj.page === 'csendesnapok' ?    
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
                    : null
                    )}
                )
            }

            <div id="forMoreInfo">
                <h2>Csendesnapokkal kapcsolatos tudnivalókért kérjük keressék meg gyülekezetünk lelkészeit!</h2>
                <Button 
                    buttonLabel="Elérhetőség"
                    to="/contact"    
                />
            </div>



        </div>
    )}

export default CsendesNapok;