import React from 'react';

const Experience = () => {
  const jobs = [
    {
      title: 'Senior Software Engineer',
      company: 'WeTheHobby',
      duration: 'Aug 2023 – Mar 2025 | Rochester, NY',
      description: 'WeTheHobby is a leading platform for sports card collectors, providing tools to buy, sell, and manage physical cards. Built the CardConnect web app from the ground up.',
      bullets: [
        'Developed the All Cards Explorer – a searchable card catalog with filters by player, team, rarity, and edition.',
        'Created the Personal Inventory System – users upload, categorize, and manage cards marked For Sale or Personal Collection.',
        'Implemented the Buyback Program – users receive market-based valuations and complete card sales directly.',
        'Built a secure online marketplace and checkout system with Stripe API integration and real-time order tracking.',
        'Optimized performance using lazy loading, code splitting, and Redux Toolkit for global state management.'
      ]
    },
    {
      title: 'Software Engineer',
      company: 'IDEX Health & Science',
      duration: 'Sep 2022 – Aug 2023 | Rochester, NY',
      description: 'IDEX is a global leader in microfluidics and life science optics. You helped build an advanced e-commerce experience for lab-grade instruments.',
      bullets: [
        'Led the development of a smooth and secure checkout process with dynamic payment logic.',
        'Built a flexible billing plan interface to support subscriptions and enterprise purchases.',
        'Designed responsive product card components with pricing, specs, and variations.',
        'Boosted performance through optimized rendering and reduced load times.',
        'Collaborated with designers and backend engineers to ensure seamless integration across systems.',
        'Tested and validated all components across browsers and devices using Cypress and manual QA.'
      ]
    },
    {
      title: 'Front End Developer',
      company: 'Midea',
      duration: 'Jul 2020 – Aug 2022 | Shanghai, China',
      description: 'Midea is a global leader in smart home appliances. Built SmartLiving, an IoT dashboard for real-time device management.',
      bullets: [
        'Built reusable UI components with React and SCSS to control smart appliances.',
        'Integrated WebSockets to sync real-time status of ACs, fridges, and lighting systems.',
        'Implemented centralized device state with Redux Toolkit and custom middleware.',
        'Enhanced performance via lazy-loading, debounced device updates, and minimal re-renders.',
        'Created energy dashboards, usage reports, and real-time alerts with React Router navigation.',
        'Worked in Agile sprints, contributing to planning, demos, and backlog grooming.'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Shannon Technologies',
      duration: 'Sep 2018 – May 2020 | Hangzhou, China',
      description: 'Shannon Tech provides AI-powered analytics tools for enterprise clients. You built AIVisionHub — an object detection and real-time monitoring system.',
      bullets: [
        'Developed the full stack system with React frontend and Node.js (Express) backend.',
        'Implemented role-based access control and secure routing with React Router.',
        'Created REST APIs for processing large-scale AI data and prediction results.',
        'Built a responsive UI using Bootstrap and SASS, supporting cross-browser compatibility.',
        'Managed global app state (AI models, analytics, reports) via Redux.',
        'Wrote unit/integration tests with Jest and deployed to AWS for scalability.'
      ]
    }
  ];

  return (
    <section className="experience section glass" id="experience">
      <h2>Experience</h2>
      {jobs.map((job, i) => (
        <div className="job fade-in" key={i} style={{ animationDelay: `${i * 0.2}s` }}>
          <h3>{job.title}, <span className="job-company">{job.company}</span></h3>
          <span className="job-duration">{job.duration}</span>
          <p className="job-desc">{job.description}</p>
          <ul>
            {job.bullets.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;

