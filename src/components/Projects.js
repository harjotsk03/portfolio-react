import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackToProjectsButton from './BackToProjectsButton';

const ToolItem = ({ tool, className }) => (
  <div className={`${className}`}>{tool}</div>
);


const ProjectCard = ({ title, shortDescription, description, button1Text, button2Text, button3Text, tools, projectLink, projectLink2, projectLink3 }) => {
  const [isProjectTabVisible, setProjectTabVisibility] = useState(false);

  const openProjectTab = () => {
    setProjectTabVisibility(true);
    document.body.classList.add('overlay-visible');
  };

  const closeProjectTab = () => {
    setProjectTabVisibility(false);
    document.body.classList.remove('overlay-visible');
  };
  

  return (
    <>
      <div>
        <div className="projectCard" onClick={openProjectTab}>
          <div className="projectTitle">{title}</div>
          <div className="projectDescription">{description}</div>
          <div className='bottomHalf'>
            <div className='projectTools'>
              {tools.map((tool, index) => (
                <ToolItem key={index} tool={tool} className='toolItem'/>
              ))}
            </div>
            <div className="projectBtnsContainer">
              <Link style={{ textDecoration: 'none' }} to={projectLink} className='viewProject' target="_blank" rel="noopener noreferrer">{button1Text}</Link>
              <Link style={{ textDecoration: 'none' }} to={projectLink3} className="projectBtns" id='gitHub' target="_blank" rel="noopener noreferrer">{button3Text}</Link>
            </div>
          </div>
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
            </div>
            <div className="projectDescriptionTab">{description}</div>
            <div className='projectToolsTab'>
              {tools.map((tool, index) => (
                <ToolItem key={index} tool={tool} className='toolItemTab' />
              ))}
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
      button1Text: 'View Live Site',
      button3Text: ')',
      projectLink: 'https://expense-tracker-app-b0f61.web.app/',
      projectLink3: 'https://github.com/harjotsk03/expense-tracker-app',
    },
    // Add more projects as needed
  ];

  return (
    <div className='projectCards'>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};
