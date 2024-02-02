import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackToProjectsButton from './BackToProjectsButton';
import finVue from '../images/worksafe.png';

const ToolItem = ({ tool, className }) => (
  <div className={`${className}`}>{tool}</div>
);


const ProjectCard = ({ title, shortDescription, description, button1Text, button3Text, tools, projectLink, projectLink3, id, image }) => {
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
            <div className="projectShortDescription">{shortDescription}</div>
            <div className="projectTitle">{title}</div>
          </div>
        ) : (
          <div className='projectCardNotHovered'>
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
              <div className="projectTitleTab">{title}</div>
              <div className="projectShortDescriptionTab">{shortDescription}</div>
              <img src={image} alt={title} />
            </div>
            <div>
              <div className='projectAboutTitle'>About</div>
              <div className="projectDescriptionTab">{description}</div>
            </div>
            <div>
              <div className="projectToolsTitle">Developing Tools</div>
              <div className='projectToolsTab'>
                {tools.map((tool, index) => (
                  <ToolItem key={index} tool={tool} className='toolItemTab' />
                ))}
              </div>
            </div>
            <div className="projectBtnsContainerTab">
              <Link style={{ textDecoration: 'none' }} to={projectLink} className='viewProjectTab' target="_blank" rel="noopener noreferrer">{button1Text}</Link>
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
    {
      title: 'Expense Tracker App',
      shortDescription: "FinVue, an up and coming finance group who have developed their own finance tracking application",
      description: 'FinVue, an up and coming finance group who have developed their own finance tracking application to help customers keep a close eye on their money.',
      tools: ['React.js', 'Github', 'Firebase'],
      button1Text: 'Open Project',
      button3Text: ')',
      projectLink: 'https://expense-tracker-app-b0f61.web.app/',
      projectLink3: 'https://github.com/harjotsk03/expense-tracker-app',
      id: 'finVue',
      image: finVue,
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
