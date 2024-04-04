import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackToProjectsButton from './BackToProjectsButton';
import finVue from '../images/worksafe.png';
import quizApp from '../images/quizApp.png'
import lulu1 from '../images/lululemonOMNI/lulu2.png'
import algorithmly from '../images/algorithmly.png'
import iatGame from '../images/iatGame.png'
import { fontSize } from '@mui/system';

const ToolItem = ({ tool, className }) => (
  <div className={`${className}`}>{tool}</div>
);


const ProjectCard = ({ title, shortDescription, description, button1Text, button3Text, tools, skills, projectLink, projectLink3, id, image, idIMG, appType }) => {
  const [isProjectTabVisible, setProjectTabVisibility] = useState(false);

  const openProjectTab = () => {
    setProjectTabVisibility(true);
    document.body.classList.add('overlay-visible');
  };

  const closeProjectTab = () => {
    setProjectTabVisibility(false);
    document.body.classList.remove('overlay-visible');
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  

  return (
    <>
      <div>
        <div className="projectCard" id={id} onClick={openProjectTab} onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {isHovered ? (
          <div className='projectCardHovered'>
            <div className="projectShortDescription2">Click to View <span style={{fontFamily: 'icons'}}>.</span></div>
            <div className="projectTitle">{appType}</div>
          </div>
        ) : (
          <div className='projectCardNotHovered'>
            <div className="projectShortDescription4">Click to View <span style={{fontFamily: 'icons'}}>.</span></div>
            <div className="projectTitle">{title}</div>
          </div>
        )}
        </div>
        {isProjectTabVisible && (
          <>
          <div className='projectTab'>
            <div className="closeTabButton" onClick={closeProjectTab}>
              <BackToProjectsButton />
            </div>
            <div className='projectTopTab'>
              <div className="projectTitleTab" >{title}</div>
              <div className="projectTitleTab2">{appType}</div>
              <div className="projectShortDescriptionTab">{shortDescription}</div>
              <div className='imageTabOpen' id={idIMG}>
                <img src={image} alt={title} />
              </div>
            </div>
            <div>
              <div className='projectAboutTitle'>About</div>
              <div className="projectDescriptionTab">{description}</div>
            </div>
            <div>
              <div className="projectToolsTitle">Technical Tools</div>
              <div className='projectToolsTab'>
                {tools.map((tool, index) => (
                  <ToolItem key={index} tool={tool} className='toolItemTab' />
                ))}
              </div>
              <div className="projectToolsTitle">Skills</div>
              <div className='projectSkillsTab'>
                {skills.map((skill, index) => (
                  <ToolItem key={index} tool={skill} className='toolItemTab' />
                ))}
              </div>
            </div>
            <div className="projectBtnsContainerTab">
            <Link
              style={{ textDecoration: 'none' }}
              to={projectLink}
              className='viewProjectTab'
              target="_blank"
              rel="noopener noreferrer"
            >{button1Text}</Link>
              <Link style={{ textDecoration: 'none' }} to={projectLink3} className="projectBtnsTab" id='gitHub' target="_blank" rel="noopener noreferrer">{button3Text}</Link>
            </div>
          </div>
          <div className='projectTabLeft'></div>
          </>
        )}
      </div>
    </>
  );
};

export const Projects = () => {
  AOS.init();

  const projectsData = [
    // {
    //   title: 'Expense Tracker App',
    //   shortDescription: 'FinVue, an up and coming finance group who have developed their own finance tracking application to help customers keep a close eye on their money.',
    //   description: 'Designed and developed a finance tracker web application that allows users to track their incomes and expenses, as well as see a total balance. I have intergrated the ability to edit users name through Google firebase as well as authentication, database collection, and hosting all through Google firebase as well. Currently I am working on features to display the live stock market through an API, as well as the option to add cards to the wallet, and update or add a user photo.',
    //   tools: ['React.js','Material UI', 'Github', 'Firebase'],
    //   skills: ['API Intergration', 'Authentication and Autorization', 'Database Collection', 'UI/UX Design', 'Version Control'],
    //   button1Text: 'Open Project',
    //   button3Text: ')',
    //   projectLink: 'https://expense-tracker-app-b0f61.web.app/',
    //   projectLink3: 'https://github.com/harjotsk03/expense-tracker-app',
    //   id: 'finVue',
    //   image: finVue,
    //   idIMG: '',
    //   appType: 'Front-End Development Application'
    // },  
    {
      title: 'Algorithmly',
      shortDescription: 'A web application for learning search and sort algorithms with quizes and visualization.',
      description: 'This application allows for students or just about anyone to learn and understand various search and sort algorithms. Using the custom designed visualizer as well as exmaples, time complexities (Big O) and use case examples users can understand the basics of any algorithm. Users can also impliemnt and practice using it as each algorithm has the corresponding pseudocode.',
      tools: ['React.js', 'Firebase'],
      skills: ['Data Visualization', 'Algorithm Knowledge', 'Pseudocode Implementation', 'UI/UX Design', 'Testing and Quality Assurance'],
      button1Text: 'Open Project',
      button3Text: ')',
      projectLink: 'https://algorithmly-92b0d.firebaseapp.com/',
      projectLink3: '',
      id: 'quizApp',
      image: algorithmly,
      idIMG: 'algoritmly1',
      appType: 'Front-End Development Application'
    }, 
    {
      title: 'Lululemon OMNI Redesign',
      shortDescription: 'A redesign of the OMNI application used by Lululemon in retail stores to process online purchases.',
      description: 'This is a UI/UX redesign of an application Lululemon have in all of their retail stores. Currently I am an educator working with this app every shift and have heard many comoplaints and issues with the usability and features of the current application. My aim is to design a new UI/UX that will be easier to use for educators and the retail stores and then to have my work seen by a developer at Lululemon to either use or take peices from my design. Once I have a full UI/UX design I will attempt to develop the application on my own using React Native and other frameworks and languages.',
      tools: ['Figma', 'React Native'],
      skills: ['UI/UX Design', 'Project Management', 'Portfolio Presentation', 'Prototyping and Interaction Design', 'User Research and Testing'],
      button1Text: 'View Full Project',
      button3Text: ')',
      projectLink: 'https://harjotsinghkooner.com/OMNIproject',
      projectLink3: '',
      id: 'luluApp',
      image: lulu1,
      idIMG: 'luluApp1',
      appType: 'UI/UX Design Project'
    }, 
    {
      title: 'Mario Shooter',
      shortDescription: 'A 2D game for a school course (IAT 167: Game Design and Programming) with a Mario theme.',
      description: 'A simple 2D game made with P5.js, a JavaScript library. Made for IAT 167(Game Design and Programming). Mario theme with spikes and ghosts as enemies and custom graphics for various elements. Used OOP and modularization to design clean code that is easily changeable and readable.',
      tools: ['JavaScript', 'P5.js'],
      skills: ['Game Design Principles', 'Object Oriented Programming Principles', 'Game Development', 'Creativity and Innovation'],
      button1Text: 'View Full Project',
      button3Text: ')',
      projectLink: 'https://harjotsk03.github.io/IAT167GameOne/',
      projectLink3: '',
      id: 'iatGame',
      image: iatGame,
      idIMG: 'iatGame1',
      appType: 'Game Design and Development'
    }, 
     
  ];

  return (
    <div className='projectCards'>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};
