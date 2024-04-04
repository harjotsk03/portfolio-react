import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import BackToHome from './BackToHomeButton';
import BackToProjectsButton from './BackToProjectsButton';
import ProgressBar from './ProgressBar';
import SkillRectangle from './SkillRectangle';

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

    const [progressWidth, setProgressWidth] = useState(0); // Set the initial width

    // Function to update progress width, for example, on some event or user action
    const updateProgress = () => {
      setProgressWidth((prevWidth) => prevWidth + 10); // Update the width, adjust as needed
    };

    const skillsList = ['Analytical Thinking', 'Attention to Detail', 'Collaboration', 'Communication Skills', 'Time Efficiancy', 'Consumer Focus', 'Reliability', 'Critical Thinking', 'Empathy', 'Open to Feedback']; 
    const skills2List = ['Database Management', 'Objet-Oriented Programming (OOP)','Event Driven Programming','TailwindCSS', 'Human Computer Interaction', 'Mobile Development', 'Game Development', 'Responsive Web Design', 'Github', 'UI/UX']; 

    
    return(
        <>
        <div className="aboutSection">
            <h1 className="aboutTitle">About Me.</h1>
            <p className="aboutText">

            Hello, I'm Harjot, a dedicated student pursuing a Bachelor of Science in Interactive Technology and Computing Science at Simon Fraser University. With a primary focus on front-end development, I'm adept at crafting seamless user experiences for web and mobile applications. However, my curiosity extends beyond the surface, allowing me to comfortably navigate both backend and frontend systems.
            <br></br>            <br></br>
            In my journey, I've embarked on various side projects that not only showcase my UI/UX skills but also reflect my commitment to producing clean, concise code. As I set my sights on securing an internship in development or UX research, I'm eager to apply the knowledge and expertise I've gained through coursework and personal exploration. I'm driven by the desire to continually grow and evolve, positioning myself as a valuable asset to any team.
            <br></br>            <br></br>
            I firmly believe that being a strong developer encompasses more than technical prowess—it's about fostering collaboration, injecting energy into the workplace, and uniting teams to create exceptional software solutions.
            <br></br>            <br></br>
            Beyond my professional endeavors, I find joy in spending time with my dog, Bruno, and working as a part-time educator at Lululemon. As a proud Canadian citizen and community member, I draw inspiration from my multicultural background, being a Sikh born in England, but find my true home being Canada; where I have loved every minute for the past 14 years.
            <br></br>            <br></br>
            To delve deeper into my technical skills and explore potential opportunities for collaboration, feel free to connect with me. I'm excited about the prospect of contributing to innovative projects and making meaningful contributions to the tech industry.

            </p>
            <button onClick={openProjectTab} className='aboutMeMore'>Technical Skills <span style={{fontFamily: 'icons'}}>.</span></button>
        </div>
        {isProjectTabVisible && (
          <>
          <div className='aboutTab'>
            <div className="closeTabButton" onClick={closeProjectTab}>
              <BackToHome />
            </div>
            <div className='projectTopTab'>
              <div></div>
                <div>
                    <div className='aboutTitleTab'>Personal Skills</div>
                    <div className="skills-container">
                        {skillsList.map((skill, index) => (
                        <SkillRectangle key={index} skill={skill} />
                        ))}
                    </div>
                </div>
                <div className="aboutTitleTab">Technical Skills</div>
                <div className="skills-container">
                        {skills2List.map((skill, index) => (
                        <SkillRectangle key={index} skill={skill} />
                        ))}
                </div>
                <div className="aboutTitleTab">Tools and Technology</div>
                <div className='technicalSkillContainer'>
                    <div className='languageText'>HTML/CSS/JavaScript</div>
                    <ProgressBar progressWidth={95} />
                </div>
                <div className='technicalSkillContainer'>
                    <div className='languageText'>MongoDB</div>
                    <ProgressBar progressWidth={90} />
                </div>
                <div className='technicalSkillContainer'>
                    <div className='languageText'>Figma</div>
                    <ProgressBar progressWidth={80} />
                </div>
                <div className='technicalSkillContainer'>
                    <div className='languageText'>Node.js</div>
                    <ProgressBar progressWidth={75} />
                </div>
                <div className='technicalSkillContainer'>
                    <div className='languageText'>MongoDB</div>
                    <ProgressBar progressWidth={90} />
                </div>
                <div className='technicalSkillContainer'>
                    <div className='languageText'>React Native</div>
                    <ProgressBar progressWidth={75} />
                </div>
                <div className='technicalSkillContainer'>
                    <div className='languageText'>Flask</div>
                    <ProgressBar progressWidth={25} />
                </div>
                <div className='technicalSkillContainer'>
                    <div className='languageText'>Python</div>
                    <ProgressBar progressWidth={70} />
                </div>
                <div className='technicalSkillContainer'>
                    <div className='languageText'>C/C++</div>
                    <ProgressBar progressWidth={35} />
                </div>
                

            </div>
          </div>
          <div className='projectTabLeft'></div>
          </>
        )}
    </>
    )
}