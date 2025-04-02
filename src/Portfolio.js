import React, { useState, useCallback } from "react";

import Amazon from "./img/companies/amazon.png";
import GovernmentOfCanada from "./img/companies/government-of-canada.png";
import UBC from "./img/companies/ubc.png";
import Optum from "./img/companies/optum.png";
import PortonHealth from "./img/companies/porton-health.png";
import ProfilePicture from "./img/profile-picture.JPG";

import forum from "./img/projects/forum.png";
import portfolioDiversificationModel from "./img/projects/portfolio-diversification-model.png";
import labby from "./img/projects/labby.png";
import postureFix from "./img/projects/posture-fix.png";

// Intro icons
const GithubIcon = () => (
  <svg
    height="32"
    aria-hidden="true"
    viewBox="0 0 16 16"
    version="1.1"
    width="32"
    data-view-component="true"
  >
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const FileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    width="32"
    height="32"
  >
    <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z" />
  </svg>
);

const ProfileHeader = ({ profilePicture }) => (
  <div className="flex flex-col md:flex-row items-center justify-between mb-8">
    <div className="flex flex-col md:flex-row items-center">
      <img
        src={profilePicture}
        alt="Profile"
        className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full mb-4 md:mb-0 md:mr-8 object-cover"
      />
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Arman Moztarzadeh
        </h1>
        <h2 className="text-md italic  text-gray-500">
          Email: me@armanmoztarzadeh.com
        </h2>
        <p className="text-xl text-gray-600 mb-4">
          software engineer & student
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://github.com/armanmoztar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/arman-moztarzadeh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="/assets/AMoztarzadeh_Resume.pdf"
            target="_blank"
            download
            aria-label="Download Resume"
          >
            <FileIcon />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const AboutMe = () => (
  <div className="bg-white rounded-lg p-6 mb-8 shadow-md text-left">
    <h2 className="text-2xl font-bold mb-4">About Me</h2>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
        Software Development
      </span>
      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
        Database Systems
      </span>
      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">
        Cloud Development
      </span>
    </div>
    <p className="text-gray-700">
      Hi! My name is Arman. I'm a fourth year undergraduate student at the
      University of British Columbia studying mathematics and data science.
      <br></br>
      <br></br>I love running and hiking in my free time, especially discovering
      new places in the beauties of British Columbia. I'm also an avid skier and
      enjoy spending time on the slopes during the winter months.
    </p>
  </div>
);

const companies = [
  {
    name: "Amazon",
    logo: Amazon,
  },
  {
    name: "Government of Canada",
    logo: GovernmentOfCanada,
  },
  {
    name: "UBC",
    logo: UBC,
  },
  {
    name: "Optum",
    logo: Optum,
  },
  {
    name: "Porton Health",
    logo: PortonHealth,
  },
];

const companyLogos = companies.reduce((acc, { name, logo }) => {
  acc[name] = logo;
  return acc;
}, {});

const ExperienceItem = ({ company, role, period, responsibilities }) => (
  <div className="mb-6 text-left">
    <div className="flex items-center mb-2">
      {companyLogos[company] && (
        <img
          src={companyLogos[company]}
          alt={company}
          className="h-[24px] mr-4 object-cover"
        />
      )}
      <div>
        <h3 className="font-semibold">
          {role} @ {company}
        </h3>
        <p className="text-gray-600">{period}</p>
      </div>
    </div>
    <ul className="list-disc pl-4 text-gray-700">
      {responsibilities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => (
  <div className="bg-white rounded-lg p-6 mb-8 shadow-md text-left">
    <h2 className="text-xl font-bold mb-4">Experiences</h2>
    <ExperienceItem
      company="Amazon"
      role="Software Engineer Intern"
      period="May 2025"
      responsibilities={["Returning to Amazon on International Stores"]}
    />
    <ExperienceItem
      company="Amazon"
      role="Software Engineer Intern"
      period="June 2024 - September 2024"
      responsibilities={[
        "Developed a full-stack workflow for credit card multi-factor authentication (MFA) for UK retail checkout using React, enhancing payment security by 20%",
        "Implemented a 'checkout' use case in TypeScript for the team's testing sandbox, utilizing AWS SAM and AWS Lambda to test the workflow with various inputs",
        "Introduced two APIs to handle payment authorization, enabling seamless experimentation with minimal disruption to the existing codebase.",
      ]}
    />
    <ExperienceItem
      company="Government of Canada"
      role="Software Engineer Intern"
      period="Jan 2024 - Apr 2024"
      responsibilities={[
        "Led the development of 7 features using Python and MongoDB, improving application functionality and supporting a major infrastructure upgrade",
        "Utilized MongoDB to query through the production database, contributing to the deprecation of 9 legacy codebase elements and modernizing the system for improved maintainability",
        "Created detailed Confluence documentation related to development, facilitating future employee onboarding",
      ]}
    />
    <ExperienceItem
      company="UBC"
      role="Undergraduate Teaching Assistant"
      period="Sep 2023 - Apr 2024"
      responsibilities={[
        "Developed a course assignment to compare the performance of AWS EMR single-node and multi-node clusters for big data processing tasks, providing insights into cluster optimization strategies",
        "Provided feedback in editing and reviewing course assignments related to AWS, Azure, and Docker",
        "Provided assistance to 100+ computer science and data science students to help them understand cloud concepts",
      ]}
    />
    <ExperienceItem
      company="Optum"
      role="Software Engineer in Test Co-op"
      period="May 2023 - Dec 2023"
      responsibilities={[
        "Collaborated closely with the testing team to develop and execute advanced automated test scripts using C# and Selenium, leading to a 10% performance enhancement as measured by LoadRunner benchmarks",
        "Leveraged VMware and Google Cloud platforms to architect and manage virtual testing environments",
        "Developed Python scripts utilizing pandas and numpy to automate critical tasks including extracting archive log data and generating CSV reports",
      ]}
    />
    <ExperienceItem
      company="Porton Health"
      role="Software Engineer Intern"
      period="Sep 2022 - Dec 2022"
      responsibilities={[
        "Enhanced existing applications by introducing new functionalities and features using JavaScript, and Node.js",
        "Tested and debugged over 35 components using MongoDB and documented workflow",
      ]}
    />
  </div>
);

const ProjectCard = ({ project, onClick }) => (
  <div
    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{project.title}</h3>
      <p className="text-gray-600">{project.shortDescription}</p>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  const handleOutsideClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-left"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white p-6 rounded-lg max-w-2xl w-full m-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="float-right font-bold text-2xl">
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="mb-4">{project.fullDescription}</p>
        <p className="text-gray-600 mb-4">{project.date}</p>
        {project.image && (
          <div className="mb-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        )}
        <ul className="list-disc pl-5 mb-4">
          {project.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="flex justify-end space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black"
            >
              <GithubIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "ForumAI",
      image: forum,
      date: "Sep 2024 - April 2025",
      shortDescription:
        "ForumAI combines AI capabilities with structured academic forums, enabling students and faculty to collaborate in a controlled environment where AI assists learning while maintaining academic integrity.",
      bulletPoints: [
        "Co-lead of a team of 14 members in developing ForumAI, an AI-powered academic forum that enhances structured discussions and document interaction",
        "Designed and implemented advanced AI features, integrating Retrieval Augmented Generation (RAG) to optimize knowledge retrieval and improve student engagement",
      ],
      github: "https://github.com/ubclaunchpad/forum",
    },
    {
      title: "Portfolio Diversification Model",
      image: portfolioDiversificationModel,
      date: "Oct 2023 - Dec 2023",
      shortDescription:
        "Reinforcement Learning algorithms for financial data analysis and forecasting",
      bulletPoints: [
        "Employed the Upper Confidence Bound (UCB) algorithm using Python to evaluate stock performance and generate investment recommendations tailored to user-defined risk tolerance and historical performance",
        "Helped with the development of the Keras Long Short-Term Memory (LSTM) model for time series forecasting, a critical feature to enhance the project's predictive capabilities",
        "Worked on the integration of the Vector Auto Regression (VAR) model for financial trend forecasting, enabling the system to provide insights into future market movements",
      ],
      github: "https://github.com/armanmoztar/Portfolio-Diversification-Model",
    },
    {
      title: "BC Cancer Ticket Management System",
      image: labby,
      date: "Oct 2022 - Apr 2023",
      shortDescription: "Ticket management system for BC Cancer stakeholders",
      bulletPoints: [
        "Developed a laboratory management system as part of UBC Launch Pad and actively met with organizational stakeholders",
        "Developed routes and models to load questions into SQL database",
        "Wrote unit tests for question routes using Jest",
        "Implemented Load and Delete questions saga using Redux and Axios Library",
      ],
      github: "https://github.com/ubclaunchpad/labby",
    },
    {
      title: "Posture Fix",
      image: postureFix,
      date: "Jan 2022 - Feb 2022",
      shortDescription:
        "Chrome extension to alert users to adjust their posture",
      bulletPoints: [
        "Published and developed a chrome extension that alerts users to adjust their posture while they work",
        "Utilized JavaScript and CSS to create a user-friendly interface that provides feedback on posture",
        "Implemented a timer to alert users to take a break and fix their posture every 30 minutes",
      ],
      github: "https://github.com/armanmoztar/posture-fix",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-left">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Content container */}
      <div className="relative z-10 container mx-auto p-8">
        <ProfileHeader profilePicture={ProfilePicture} />
        <AboutMe />
        <Experience />
        <Projects />
      </div>

      {/* Background container */}
      <div className="background-container"></div>
    </div>
  );
};

export default Portfolio;
