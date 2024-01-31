import React, { useEffect } from 'react';
import VancouverTime from '../components/VancouverTime';

export const Home = () => {
  return (
    <div className="homeContent">
      <section className="heroSection">
        <h1 className="homeTitle">Harjot Kooner</h1>
        <h3 className="homeSecondTitle">Computer Science Student at Simon Fraser University</h3>
        <h4 className="homeThirdTitle">Creating visually precise, captivating, and user-friendly digital interfaces.</h4>
        <h4 className='time'><VancouverTime /></h4>
      </section>
      <section className="projectsSection">
        <h2 className='projectsTitle'>Projects</h2>
      </section>
    </div>
  );
};
