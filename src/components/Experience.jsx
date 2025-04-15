import React from 'react';

const Experience = () => {
  return (
    <section className="experience section glass" id="experience">
      <h2>Experience</h2>

      <div className="job">
        <h3>Front End Developer, WeTheHobby</h3>
        <span className="job-duration">Aug 2023 – Mar 2025 | Rochester, NY</span>
        <ul>
          <li>Built a searchable catalog of sports cards with filters by player, team, rarity, and edition for easy discovery.</li>
          <li>Developed a secure online marketplace and checkout system (Stripe API integration) for buying and selling cards, including an order tracking interface.</li>
          <li>Optimized page loading speed and responsiveness across devices using code-splitting and efficient state management.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Front End Developer, IDEX Health &amp; Science</h3>
        <span className="job-duration">Sep 2022 – Aug 2023 | Rochester, NY</span>
        <ul>
          <li>Implemented a subscription management interface with support for multiple payment options and plan types for a scientific e-commerce platform.</li>
          <li>Created modular product card components to display equipment specifications and pricing, improving UI consistency and reusability.</li>
          <li>Enhanced performance by optimizing component rendering and ensured cross-browser compatibility through thorough testing and QA.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Front End Developer, Midea</h3>
        <span className="job-duration">Jul 2020 – Aug 2022 | Shanghai, China</span>
        <ul>
          <li>Developed the SmartLiving web application for IoT home appliances, building reusable UI components in React and SCSS to manage devices like air conditioners, refrigerators, and lights.</li>
          <li>Enabled real-time device monitoring and control by integrating WebSocket communication and centralized state management with Redux Toolkit.</li>
          <li>Improved user experience by implementing lazy loading of components and ensured seamless navigation using React Router for various dashboards and analytics pages.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Full Stack Developer, Shannon Technologies</h3>
        <span className="job-duration">Sep 2018 – May 2020 | Hangzhou, China</span>
        <ul>
          <li>Built <em>AIVisionHub</em>, an AI-driven analytics platform with a React frontend and Node.js backend, enabling real-time object detection and data-driven decision making for enterprise clients.</li>
          <li>Implemented secure authentication and role-based access control, developed RESTful APIs for large-scale data processing, and ensured a responsive UI using Bootstrap and SASS.</li>
          <li>Collaborated in an Agile team, writing unit and integration tests (Jest) and deploying the application to AWS to ensure scalability and reliability.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
