import Github from "@/components/icons/socials/Github";
import Gmail from "@/components/icons/socials/Gmail";
import Linkedin from "@/components/icons/socials/Linkedin";

export const profile = {
  name: "Nur Hidayah",
  role: "Full Stack Engineer",
  pitch:
    "Elevating digital experiences with expert full-stack craftsmanship in JavaScript & TypeScript to drive business innovation.",
  bio: "I'm a seasoned Full Stack Engineer with over 4 years of experience, specializing in developing and maintaining robust web applications. Proficient in both front-end and back-end technologies, I excel in JavaScript, TypeScript, and various modern frameworks. \nPassionate about coding and problem-solving, I thrive in dynamic environments and am dedicated to driving innovation and excellence in every project I undertake.",
  educations: [
    {
      period: "2021 - 2024",
      program: "Master of Science (Information Technology)",
      school: "Universiti Teknologi MARA",
    },
    {
      period: "2016 - 2020",
      program: "Bachelor of Information Technology in Business Computing",
      school: "Universiti Teknologi MARA",
    },
  ],
  experiences: [
    {
      period: "February 2023 - Present",
      role: "Front End Engineer",
      company: "AEON Bank",
      skillsTag: ["ReactJS", "NextJS", "Typescript", "Strapi", "PostgresSQL"],
      desc: [
        "Staying up-to-date with emerging trends and technologies in front-end development, such as ReactJS, NextJS, CSS pre-processors, and build tools.",
        "Brainstormed and participated in the development of design system to be utilised across all projects.",
        "Built the first website of the company for the grand launch of digital banking.",
        "Contributed to and fostered technical decision-making on the team when delivering business banking project.",
        "Working with backend developers to integrate frontend components with backend APIs, databases, and microservices.",
      ],
    },
    {
      period: "July 2021 - February 2023",
      role: "Full Stack Engineer",
      company: "Carsome Sdn Bhd",
      skillsTag: [
        "GraphQL",
        "VueJS",
        "NestJS",
        "Typescript",
        "CodeIgniter",
        "MongoDB",
      ],
      desc: [
        "Built user-facing products that create seamless experiences for Carsome’s internal users including Finance, Transaction, Dealer Admin and ERP team.",
        "Solved technical problems of high scope and complexity based on Javascript and PHP frameworks like GraphQL, VueJS, NestJS and CodeIgniter.",
        "Advocated for improvements to product quality, security, and performance by leading company-wide integration with internal APIs for Dealer Dashboard and Transaction Centre.",
        "Collaborated with the team from different pillars on larger projects such as ERP, Car Library, Inventory and Payment Gateway integrations.",
        "Provided mentorship for engineers and non-engineers on the team to help them grow in their technical responsibilities and remove blockers to their autonomy.",
        "Exerted influence on the overall objectives and long-range goals of the team by championing and identifying technical debt or limitations that deliberate the team’s ability to deliver code to production.",
      ],
    },
    {
      period: "July 2020 - June 2021",
      role: "Software Engineer",
      company: "WorkSmartly Digital Sdn Bhd",
      skillsTag: ["Laravel", "MySQL", "CSS", "Javascript", "jQuery"],
      desc: [
        "Provided best practices in developing and enhancing the productivity of HR applications based on PHP frameworks such as Laravel.",
        "Built and improved the existing modules of the HR application for both public and private sectors such as Leave, Attendance, Payroll and E-Document modules.",
        "Demonstrated capacity to clearly and concisely communicate complex technical, architectural, and organizational problems with product managers, designers and developers.",
      ],
    },
  ],
  works: [
    {
      desc: "Developed with VueJS",
      img: "",
      name: "Dad Jokes",
      url: "https://hidayahrah-dadjokes.netlify.app/",
    },
    {
      desc: "Developed with ReactJS",
      img: "",
      name: "Note App",
      url: "https://hidayahrah-notes.netlify.app/",
    },
  ],
  skills: [
    {
      src: "/img/logos/nextjs.png",
      alt: "NextJS",
    },
    {
      src: "/img/logos/nestjs.png",
      alt: "NestJS",
    },
    {
      src: "/img/logos/nodejs.png",
      alt: "NodeJS",
    },
    {
      src: "/img/logos/php.png",
      alt: "PHP",
    },
    {
      src: "/img/logos/postgres.png",
      alt: "PostgresSQL",
    },
    {
      src: "/img/logos/reactjs.png",
      alt: "ReactJS",
    },
    {
      src: "/img/logos/typescript.png",
      alt: "Typescript",
    },
    {
      src: "/img/logos/vuejs.png",
      alt: "VueJS",
    },
    {
      src: "/img/logos/javascript.png",
      alt: "Javascript",
    },
    {
      src: "/img/logos/laravel.png",
      alt: "Laravel",
    },
    {
      src: "/img/logos/mongodb.png",
      alt: "MongoDB",
    },
  ],
  socials: [
    {
      label: "hidayahrah97@gmail.com",
      link: "mailto:hidayahrah97@gmail.com",
      icon: <Gmail />,
    },
    {
      label: "@hidayahrah",
      link: "https://github.com/hidayahrah",
      icon: <Github />,
    },
    {
      label: "@hidayahrah",
      link: "https://www.linkedin.com/in/hidayahrah/",
      icon: <Linkedin />,
    },
  ],
};
