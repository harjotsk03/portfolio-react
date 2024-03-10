import React, { useEffect } from 'react';
import { Projects } from '../components/Projects';
import VancouverTime from '../components/VancouverTime';
import heroImage from '../images/image1.png';
import { ScrollToTop } from '../components/ScrollToTop';
import HarjotResume from '../images/HarjotSinghResume2024.pdf'
import { Contact } from '../components/Contact';
import { About } from '../components/About';
import { Footer } from '../components/Footer';


export const Home = () => {
        const handleDownload = () => {
          // Set the resume file path
          const resumePath = HarjotResume;
      
          const link = document.createElement('a');
          link.href = resumePath;
          link.download = 'harjotKoonerResume.pdf'; // Set your desired filename
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };

  return (
    <div className="homeContent">
      <section className="heroSection" id='home'>
        <div className='heroLeft'>
            <h1 className="homeTitle">harjot<br></br> <span style={{color: '#0056b3'}}>kooner.</span></h1>
            <h3 className="homeSecondTitle">Computer Science Student at Simon Fraser University</h3>
            <h4 className='time'><VancouverTime /></h4>
            <button onClick={handleDownload} className='resumeBtn'>download resume</button>
            </div>
        <div className='heroRight'>
            <img src={heroImage}></img>
        </div>
      </section>
      <section className="projectsSection" id='projects'>
        <h2 className='projectsTitle'>Projects</h2>
        <Projects />
      </section>
      <section id='about'>
        <About />
      </section>
      <section className='contactSection' id='contact'>
        <Contact />
      </section>
      <div>
        <Footer />
      </div>
      <ScrollToTop />
    </div>

  );
};
