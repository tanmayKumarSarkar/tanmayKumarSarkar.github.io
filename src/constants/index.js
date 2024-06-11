import data from "../../data.json";

// export const navRoutes = () => {
//   return data.nav || [];
// };

export const navRoutes = [
  {
    id: 0,
    title: "Home",
    path: "/",
    side: "left",
  },
  {
    id: 1,
    title: "Overall",
    path: "/",
    side: "right",
  },
  {
    id: 2,
    title: "Professional",
    path: "/",
    side: "right",
  },
  {
    id: 3,
    title: "Personal",
    path: "/",
    side: "right",
  },
  {
    id: 4,
    title: "Skills",
    path: "/",
    side: "right",
  },
  {
    id: 5,
    title: "Technology",
    path: "/",
    side: "right",
  },
  {
    id: 6,
    title: "Contact",
    path: "/",
    side: "right",
  },
];

export const professional = [];
export const personal = [];
export const skills = [];
export const technologies = [];
export const projects = [];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const profileDetails = {
  name: "Tanmay Kumar Sarkar",
  contact: {
    phone: ["+91 9647160687", "+91 9749760920"],
    email: "tanmay.kr.sarkar@gmail.com",
    github: "https://github.com/tanmayKumarSarkar",
    address: "Kolkata, West Bengal, India",
  },
  profession: "Full Stack Developer",
  about_me:
    "Self-motivated Full-stack Developer experienced in frontend & backend technologies with 6.5+ years' experience of finding business solutions and team management skills, wants to work with your Company in a creative & challenging environment where I can put effort into researching, learning and creating high-quality products with my creative thinking and problem-solving skills.",
  profile_summary: [
    "Having 6.5+ years of experience in Full- Stack Software Development, Architecture Design, IOT, DevOps & Web Development in the IT industry.",
    "Well acquainted with the Front- End technologies like ReactJS, React Native, Angular, JQuery.",
    "Well versed with Technology/ Platform: Java/ J2EE, .Net web application development and MVC architecture, Dynamics 365 CRM& App Components.",
    "Also, expertise in other Server- Side technologies like Node JS, Express, Django, GraphQL and Restful Web Service.",
    "Worked in both Relational (MySQL, Oracle, PostgreSQL) & Non- Relational (Mongo DB, ElasticSearch, Oracle NoSQL) Database& HarperDB.",
    "Communicating with internal/ external clients to identify specific requirements and expectations, managing client expectations as an indicator of quality.",
  ],
  experience: [
    {
      company: "Tech Mahindra",
      location: "Kolkata, India",
      duration: "Apr 2021 - Present",
      client: "",
      role: "",
      skills: "",
      description: "",
      responsibilities: [],
      works: [
        "D365 CRM application development with different Power App components for capturing user requests for different data to provide data export as CSV and BI reporting.",
        "Microsoft Teams App development using Node JS, React and Azure App Registration, Bot Services, Bot Framework on Meeting Extension, SSO, Adaptive Card etc.",
      ],
    },
    {
      company: "Ebiw Info Analytics Pvt. Ltd.",
      location: "Kolkata, India",
      duration: "Jan 2019 - Apr 2021",
      responsibilities: [
        "Smart Weld IoT Solution for Industrial Welding - Sensor data collection through MQTT, Data Pipeline, Power BI Analytics, Nodejs Server, Angular Web portal development.",
        "Data collection, pipeline, BI Analytics with Oracle Analytical Cloud (OAC) for YTY Gloves Manufacturer & AMDTF.",
        "Driver Scorecard & Accident Prediction in Transportation Domain from the real-time data(from vehicle) with Python (Django), Socket, API, PostgreSQL & Power BI.",
        "Interview Management System that can record Audio/ Video/ Text in the absence of interviewer for review & other features with Java Spring Boot, React JS & Mongo DB.",
        "Oracle Industrial Data Model (OIDM) Development/ Migration/ Implementations & Oracle NetSuite Implementations/ Data Analytics with OAC.",
        "Designing system to track real-time vehicle location, finding root deviation, vehicle idle time, streaming video feed with Raspberry Pi, HarperDB, Node JS and Angular 4.",
        "Real-Time Airlines Baggage Tracking & Analytics of RFID tracking data with Kafka, Oracle NoSQL, Hive, Oracle DB, Oracle Analytical Cloud (OAC).",
        "Real-Time & Historical Analytics in Telecommunications Domain on recharge, usage, churn, profit extracted from CDR with Elastic Search, Logstash, Kibana Stack.",
        "Smart pump system with Mobile App that can deliver an adequate amount of water depending on weather and soil texture with Arduino, GSM module, Node JS, React Native.",
        "Real-time System that collects data from working robots and displays different types of dashboards on them and can be accessed from any device via Web with Elastic Stack.",
      ],
    },
    {
      company: "Tata Consultancy Services",
      location: "Kolkata, India",
      duration: "August 2016 - Jan 2019",
      responsibilities: [
        "Development of Project Management portal using Microservices with MySQL, Hibernate & Spring Boot as backend & Angular 4 as a frontend framework.",
        "Banking: Enhancement, implementation of the existing system and also finding & fixing broken settlements on the prod environment of these J2EE applications.",
        "Banking: Equity, Bond, Stock's transactional & back-office support, maintenance, implementations for Institutional Clients.",
        "SharePoint development & workflow designing for content management, Web and desktop application automation testing with Selenium & Sikuli.",
        "Experience of leading team, client handling, analyzing business requirements, prioritizing and managing project deliverables.",
        "Animations, Visuals, and Graphic designing.",
      ],
    },
  ],
  personal_projects: [
    {
      name: "Book Library Web Application",
      description: "Designed with GraphQL server.",
      technologies: ["Mongo DB", "GraphQL", "React JS"],
    },
    {
      name: "User Management and Video Player Web App",
      description:
        "Developed in Node, Express, MongoDB & Angular 4 as front end.",
      technologies: ["MEAN Stack"],
    },
    {
      name: "Recipe World Web Application",
      description:
        "Designed with data from RESTful external API, Color Game designed for Firefox OS with HTML/ CSS & Java Script.",
      technologies: ["React JS"],
    },
    {
      name: "Online Retail Banking System, MNREGA portal Web Application",
      description:
        "Developed in Java 1.8 with JSP, Servlet, Hibernate, Struts, JQuery & AJAX.",
      technologies: ["J2EE"],
    },
    {
      name: "E-Requisition System Web Application",
      description: "Developed in .NET 4.0 with ASP and JQuery, AJAX.",
      technologies: ["C# .NET/ Visual Studio"],
    },
    {
      name: "LAN Chat communication tool",
      description:
        "Developed using TCP/ IP and UDP protocol in C# implementation.",
      technologies: ["C# .NET/ Visual Studio"],
    },
    {
      name: "Running Ninja & Catch The Balls, Android Game",
      description:
        "Self-designed game character, character animations & C# as the Scripting language.",
      technologies: ["UNITY Game Engine"],
    },
    {
      name: "Auction System Desktop Application",
      description:
        "Developed in JAVA SWING (1.7) & Tic Tac Toe Android Game designed using Android Eclipse IDE.",
      technologies: ["JAVA SWING (1.7)"],
    },
    {
      name: "Stock Management System Web Application",
      description: "",
      technologies: ["Oracle 10g/ Oracle Forms"],
    },
    {
      name: "Online Examination System Web Application & Social Networking Site Web Application",
      description: "",
      technologies: ["PHP & MySQL"],
    },
  ],
  technical_skills: {
    languages: [
      "JAVA",
      "Java Script (ES6)",
      "PL/ SQL",
      "HTML",
      "CSS",
      "XML",
      "AJAX",
      "C#",
      "C",
      "C++",
      "MQL",
      "VB.Net",
      "JQuery",
      "PHP",
      "Python",
      "Typescript",
    ],
    technologies: [
      "React JS",
      "React Native",
      "Angular",
      "J2EE",
      "Web Service",
      "Node JS",
      "Express",
      "GraphQL",
      "Hibernate",
      "Spring",
      "Struts",
      "Django",
      "Web Socket",
      "Bootstrap",
      "ASP.Net",
      "Selenium & Sikuli Automation tools",
      "BI tools",
      "Kafka",
      "MQTT",
      "Logstash",
      "Kibana (ELK Stack)",
      "Azure",
      "D365 App Components",
    ],
    databases: [
      "PostgreSQL",
      "MySQL",
      "Oracle",
      "Mongo DB",
      "Elastic Search",
      "Harper DB",
    ],
    devops: [
      "GIT",
      "AWS (EC2, Route 53, CloudFront, Certificate Manager)",
      "Azure",
      "Jenkins",
      "GitHub Actions",
      "Tomcat",
      "Kubernetes",
      "Docker",
      "Azure Cloud Components",
    ],
    miscellaneous: [
      "Adobe After Effects",
      "Premiere Pro",
      "Flash/ Animate CC",
      "Illustrator",
      "Photoshop",
      "Dreamweaver",
      "Blender",
      "Autodesk Maya",
      "Sketch-Up",
      "InkScape",
      "UNITY Game Engine",
      "Visual Studio",
      "SharePoint Designer",
      "Eclipse",
      "MS Word",
      "MS Excel",
      "PowerPoint",
      "OAC",
      "Power BI",
      "Web Scraping",
    ],
    hardware: ["Raspberry Pi", "Arduino", "ESP8266 Node MCU", "GSM SIM900A"],
  },
  education: [
    {
      degree: "B.Tech. (INFORMATION TECHNOLOGY)",
      institution: "Jalpaiguri Govt. Engg. College",
      duration: "2012-2016",
      percentage: "83",
    },
    {
      degree: "Higher Secondary",
      institution: "Gobardanga Khantura High School",
      duration: "2011",
      percentage: "78",
    },
    {
      degree: "Secondary",
      institution: "Gobardanga Khantura High School",
      duration: "2009",
      percentage: "81.75",
    },
  ],
  personal_details: {
    dob: "",
    gender: "Male",
    languages: ["English", "Hindi", "Bengali"],
    address: "Kolkata, West Bengal, India",
  },
};
