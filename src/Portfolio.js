import Amazon from './img/amazon.png';
import GovernmentOfCanada from './img/government_of_canada.png';
import UBC from './img/ubc.png';
import Optum from './img/optum.png';
import PortonHealth from './img/porton_health.png';
import ProfilePicture from './img/profile_picture.JPG';

// Icons
const GithubIcon = () => (
  <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7 .3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2 .4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/>
  </svg>
);


const ProfileHeader = ({ profilePicture }) => (
  <div className="flex flex-col md:flex-row items-center justify-between mb-8">
    <div className="flex flex-col md:flex-row items-center">
      <img src={profilePicture} alt="Profile" className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full mb-4 md:mb-0 md:mr-8 object-cover"/>
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Arman Moztarzadeh</h1>
        <p className="text-xl text-gray-600 mb-4">Software Engineer. Student</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://github.com/armanmoztar" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/arman-moztarzadeh/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
            <LinkedInIcon />
          </a>
          <a href="assets/AMoztarzadeh_Resume.pdf" download className="text-gray-700 hover:text-blue-600">
            <EmailIcon />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const AboutMe = () => (
  <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
    <h2 className="text-2xl font-bold mb-4">About Me</h2>
    <p className="mb-4">
      <span className="font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded">{"{{Software Developer Intern}}"}</span> @ 🚀 Amazon
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Software Development</span>
      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Database Systems</span>
    </div>
    <p className="text-gray-700">
    Hi! My name is Arman Moztarzadeh. I'm a fourth year Mathematics and Data Science student at the University of British Columbia.
    </p>
  </div>
);

const companyLogos = {
    Amazon: Amazon,
    "Government of Canada": GovernmentOfCanada,
    Optum: Optum,
    UBC: UBC,
    "Porton Health": PortonHealth,
  };

const ExperienceItem = ({ company, role, period, responsibilities }) => (
  <div className="mb-6 text-left">
    <div className="flex items-center mb-2 text-left">
      {companyLogos[company] && (
        <img src={companyLogos[company]} alt={company} className="h-[20px] mr-4 object-cover" />
      )}
      <div>
        <h3 className="font-semibold">{role} @ {company}</h3>
        <p className="text-gray-600">{period}</p>
      </div>
    </div>
    <ul className="list-disc pl-12 text-gray-700 text-left">
      {responsibilities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => (
  <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
    <h2 className="text-xl font-bold mb-4 text-left">Professional Experience</h2>
    <ExperienceItem 
      company="Amazon" 
      role="Software Development Engineer Intern" 
      period="June 2024 - Present"
      responsibilities={[
        "Scheduled for a term on the Amazon Payments Team",
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
      period="Sep 2022 - Dec 2022"
      responsibilities={[
        "Developed a course assignment to compare the performance of AWS EMR single-node and multi-node clusters for big data processing tasks, providing insights into cluster optimization strategies",
        "Collaborated with a Ph.D. student on the development of an autograder using NLP-based ML models",
        "Provided feedback in editing and reviewing course assignments related to AWS, Azure, and Docker",
      ]}
    />
     <ExperienceItem 
      company="Optum" 
      role="Software Engineer in Test Co-op" 
      period="May 2023 - Dec 2023"
      responsibilities={[
        "Collaborated closely with the testing team to develop and execute advanced automated test scripts using C# and Selenium, leading to a 10% performance enhancement as measured by LoadRunner benchmarks",
        "Leveraged VMware and Google Cloud platforms to architect and manage virtual testing environments",
        "Developed 8 Python scripts utilizing pandas and numpy to automate critical tasks including extracting archive log data and generating CSV reports",
      ]}
    />
     <ExperienceItem 
      company="Porton Health" 
      role="Junior Developer" 
      period="Sep 2022 - Dec 2022"
      responsibilities={[
        "Enhanced existing applications by introducing new functionalities and features using JavaScript, and Node.js",
        "Tested and debugged over 35 components using MongoDB and documented workflow",
        "Worked closely with UI designers and senior engineers to develop and implement market-ready email templates for the health platform",
      ]}
    />
  </div>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Content container */}
      <div className="relative z-10 container mx-auto p-8">
        <ProfileHeader profilePicture={ProfilePicture} />
        <AboutMe />
        <Experience />
        </div>

      {/* Custom background styles */}
      <style jsx>{`
        .background-container {
          position: absolute;
          inset: 0;
          z-index: -1;
        }
        .background-container::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -10;
          height: 100%;
          width: 100%;
          background: radial-gradient(125% 125% at 50% 10%, white 40%, blue 100%);
        }
        .background-container::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -9;
          height: 100%;
          width: 100%;
          background-size: 20px 20px;
          mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%);
        }
      `}</style>

      {/* Background container */}
      <div className="background-container"></div>
    </div>
  );
};

export default Portfolio;