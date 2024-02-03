// Contact.js

import React, { useState } from 'react';
import { Form } from './form';

export const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit = (submitted) => {
        setIsSubmitted(submitted);
    };

    const returnBtn = () => {
        setIsSubmitted(false);
    }

    return (
        <>
            <div className='leftSideContact'>
                <div className='contactHeaderContainer'>
                <h2 className='contactTitle'>Contact</h2>
                <p className='contactSecondTitle'>Get in touch or shoot me an email directly at <span style={{fontFamily: 'main'}}>harjotsk03@gmail.com</span></p>
                </div>
                
                {isSubmitted ? (
                    <div className='formSubmittedContainer'>
                        <div className='formSubmitted'>Form Submitted Successfully!</div>
                        <button onClick={returnBtn} className='returnBtn'>Return</button>
                    </div>
                   
                ) : (
                    <Form onFormSubmit={handleFormSubmit} />
                )}
                
            </div>
            <div className='rightSideContact'>
                <div className='socials'>
                    <div className='socialLine'>
                        <div className='socialsHeader'>C</div>
                        <a className='link' href="https://www.linkedin.com/in/harjotsingh7" target="_blank" rel="noopener noreferrer">
                            linkedin.com/in/harjotsingh7
                        </a>                    
                    </div>
                    <div className='socialLine'>
                        <div className='socialsHeader'>Q</div>
                        <a className='link' href="https://www.instagram.com/7harjotsk" target="_blank" rel="noopener noreferrer">
                            instagram.com/7harjotsk
                        </a>   
                    </div>
                    <div className='socialLine'>
                        <div className='socialsHeader'>)</div>
                        <a className='link' href="https://github.com/harjotsk03" target="_blank" rel="noopener noreferrer">
                            github.com/harjotsk03
                        </a>   
                    </div>
                    <div className='socialLine'>
                        <div className='socialsHeader'>-</div>
                        <a className='link' href="https://twitter.com/harjotsk7" target="_blank" rel="noopener noreferrer">
                            twitter.com/harjotsk7
                        </a>   
                    </div>
                    <div className='socialLine'>
                        <div className='socialsHeader'>9</div>
                        <a className='link' style={{margin: '0.6vh 0vh 0vh 0vh'}} href="                    https://www.google.com/maps/place/Vancouver,+BC/@49.3057823,-123.5536279,9.14z/data=!4m6!3m5!1s0x548673f143a94fb3:0xbb9196ea9b81f38b!8m2!3d49.2827291!4d-123.1207375!16zL20vMDgwaDI?entry=ttu
" target="_blank" rel="noopener noreferrer">
                            Vancouver, BC, Canada
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

