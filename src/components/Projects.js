import React from 'react';
import { Link } from 'react-router-dom';

const ToolItem = ({ tool }) => (
  <div className="toolItem">{tool}</div>
);

const ProjectCard = ({ title, description, button1Text, button2Text, button3Text, tools, projectLink, projectLink2, projectLink3 }) => {
  return (
    <div className="projectCard">
      <div className="projectTitle">{title}</div>
      <div className="projectDescription">{description}</div>
      <div className='bottomHalf'>
        <div className='projectTools'>
          {tools.map((tool, index) => (
            <ToolItem key={index} tool={tool} />
          ))}
        </div>
        <div className="projectBtnsContainer">
          <Link style={{ textDecoration: 'none' }} to={projectLink} className='viewProject' target="_blank" rel="noopener noreferrer">{button1Text}</Link>
          <Link style={{ textDecoration: 'none' }} to={projectLink2} className="projectBtns" target="_blank" rel="noopener noreferrer">{button2Text}</Link>
          <Link style={{ textDecoration: 'none' }} to={projectLink3} className="projectBtns" id='gitHub' target="_blank" rel="noopener noreferrer">{button3Text}</Link>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const projectsData = [
    {
      title: 'Expense Tracker App',
      description: 'FinVue, an up and coming finance group who have developed their own finance tracking application to help customers keep a close eye on their money.',
      tools: ['React.js', 'Github', 'Firebase'],
      button1Text: 'View Project',
      button2Text: '%',
      button3Text: ')',
      projectLink: '/expenseTrackerProject', // Specify the link to your project page
      projectLink2: 'https://expense-tracker-app-b0f61.web.app/', // Specify the link to your project page
      projectLink3: 'https://github.com/harjotsk03/expense-tracker-app', // Specify the link to your project page
    },
    // ... other project data ...
  ];

  return (
    <div className='projectCards'>
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};
