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
                    <h3 className='socialsHeader'>+</h3>
                    <h3 className='socialsHeader'>-</h3>
                    <h3 className='socialsHeader'>)</h3>
                </div>
            </div>
        </>
    );
}

