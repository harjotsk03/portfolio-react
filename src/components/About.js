import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import BackToHome from './BackToHomeButton';
import BackToProjectsButton from './BackToProjectsButton';

export const About = () => {
    const [isProjectTabVisible, setProjectTabVisibility] = useState(false);

    const openProjectTab = () => {
        setProjectTabVisibility(true);
        document.body.classList.add('overlay-visible');
    };

    const closeProjectTab = () => {
        setProjectTabVisibility(false);
        document.body.classList.remove('overlay-visible');
    };
    return(
        <>
        <div className="aboutSection">
            <h1 className="aboutTitle">About Me.</h1>
            <p className="aboutText">
                born in england, i discovered my passion for football (soccer) at an early age, an enthusiasm that has defined much of my life. as a lifelong and devoted manchester united fan, the sport has not only been a source of entertainment but also a way to connect with others across borders. my journey took me to canada during my formative years, where i embraced a new identity as a proud canadian.

                <br></br><br></br>my high school years at sullivan heights secondary were marked by creative endeavors. in my junior year, i took on the role of designing the yearbook, a responsibility that continued into my senior year with the design of graduation hoodies and all visual aspects of our graduation ceremony. my dedication was acknowledged with a scholarship from friesens, the publishers of the yearbook.

                <br></br><br></br>while initially drawn to political science in university, my trajectory shifted when i delved into the world of coding. starting with the basics of html and css, i found my passion for computing science and interactive arts and technology. my academic journey fueled my desire to create meaningful applications that enhance daily lives. i set ambitious goals to develop an app for both apple and google play stores, combining my newfound coding skills with my lifelong love for design.

                <br></br><br></br>currently focused on expanding my expertise in javascript and react, my interests lie in ui and ux design. i am fascinated by the intricacies of user interaction within applications and the importance of creating an intuitive user experience. looking ahead, i aspire to contribute my skills to major players in the tech industry, with a dream of working at ea sports on fifa or at apple, shaping the future of mobile and web-based applications. my journey in the world of technology is not just a career path; it's a pursuit of lifelong goals and a commitment to making a positive impact through innovative and user-friendly solutions.

            </p>
            {/*<button onClick={openProjectTab} className='aboutMeMore'>Technical Skills <span style={{fontFamily: 'icons'}}>.</span></button>*/}
        </div>
        {isProjectTabVisible && (
          <>
          <div className='aboutTab'>
            <div className="closeTabButton" onClick={closeProjectTab}>
              <BackToHome />
            </div>
            <div className='projectTopTab'>
              <div className="projectTitleTab">yo</div>
            </div>
          </div>
          <div className='projectTabLeft'></div>
          </>
        )}
    </>
    )
}