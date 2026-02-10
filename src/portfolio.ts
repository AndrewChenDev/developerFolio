import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json";
import type {
  SplashScreen,
  Illustration,
  Greeting,
  SocialMediaLinks,
  SkillsSection,
  EducationInfo,
  TechStack,
  WorkExperiences,
  BigProjects,
  ContactInfo
} from "./types/portfolio";

const splashScreen: SplashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration: Illustration = {
  animated: true
};

const greeting: Greeting = {
  username: "Andrew Chen",
  title: "Hi I'm Andrew",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink: "https://resume.andrew.ac",
  displayGreeting: true
};

const socialMediaLinks: SocialMediaLinks = {
  github: "https://github.com/andrew840513",
  linkedin: "https://www.linkedin.com/in/che-an-andrew-chen/",
  gmail: "andrew@andrew.ac",
  display: true
};

const skillsSection: SkillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],
  softwareSkills: [
    {skillName: "html-5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "css3", fontAwesomeClassname: "fab fa-sass"},
    {skillName: "php", fontAwesomeClassname: "fab fa-php"},
    {skillName: "bootstrap", fontAwesomeClassname: "fab fa-bootstrap"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "angular", fontAwesomeClassname: "fab fa-angular"},
    {skillName: "reactjs", fontAwesomeClassname: "fab fa-react"},
    {skillName: "nodejs", fontAwesomeClassname: "fab fa-node"},
    {skillName: "swift", fontAwesomeClassname: "fab fa-swift"},
    {skillName: "kotlin", fontAwesomeClassname: "fab fa-android"},
    {skillName: "java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "npm", fontAwesomeClassname: "fab fa-npm"},
    {skillName: "sql-database", fontAwesomeClassname: "fas fa-database"},
    {skillName: "firebase", fontAwesomeClassname: "fas fa-fire"},
    {skillName: "centos", fontAwesomeClassname: "fab fa-centos"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "git", fontAwesomeClassname: "fab fa-git"}
  ],
  display: true
};

const educationInfo: EducationInfo = {
  display: true,
  schools: [
    {
      schoolName: "BCIT",
      logo: "/images/bcit.png",
      subHeader: "Diploma- Computer Systems Technology",
      duration: "January 2018 - March 2019"
    },
    {
      schoolName: "BCIT",
      logo: "/images/bcit.png",
      subHeader: "Certificate - Computer Systems",
      duration: "January 2017 - April 2018"
    }
  ]
};

const techStack: TechStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Frontend/Design", progressPercentage: "70%"},
    {Stack: "Backend", progressPercentage: "80%"},
    {Stack: "Programming", progressPercentage: "70%"}
  ],
  displayCodersrank: false
};

const workExperiences: WorkExperiences = {
  display: true,
  experience: [
    {
      role: "Wordpress Developer",
      company: "Lahoo Information Ltd",
      companylogo: "/images/lahoo_logo.png",
      date: "10/2020 - Present",
      desc: "News media company",
      descBullets: [
        "Improves Website site UX/UI",
        "Increase website loading performance",
        "Add additional features and pages to the sites",
        "Build custom WordPress theme and plugin for clients"
      ],
      productName: "Lahoo.ca",
      productLink: "https://lahoo.ca"
    },
    {
      role: "Software Engineer",
      company: "Boltz Technology",
      companylogo: "/images/boltz.png",
      date: "10/2019 - 02/2020",
      desc: "Power-bank sharing",
      descBullets: [
        "Worked on front end WeChat mini program, iOS and Android flutter project",
        "WeChat mini program: convert old code to highly reusable code and switch from ES5 to ES6",
        "iOS and Android Flutter project: Responsible for building entire app production"
      ],
      productName: "Boltz App",
      productLink: "https://apps.apple.com/us/app/boltz/id1494273736"
    }
  ],
  volunteer: [
    {
      role: "Assistant Backend Developer",
      company: "Pick a Dish",
      companylogo: "/images/pick_a_dish.png",
      date: "02/2019 - 04/2019",
      desc: "A personalized food concierge",
      descBullets: [
        "Back-end search function, integrate with food delivery services",
        "Crawler script to claw through different restaurant menu",
        "Create restaurant's admin page using react and firebase"
      ]
    },
    {
      role: "IT Specialist",
      company: "Heaven Bridge Church",
      companylogo: "/images/heavenbridge.png",
      date: "04/2014 - Present,",
      descBullets: [
        "projection slide",
        "computer troubleshooting",
        "weekly publication church bulletin"
      ]
    }
  ]
};

const bigProjects: BigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "/images/lahoo.png",
      projectName: "Lahoo.ca",
      footerLink: [{name: "Visit Website", url: "https://lahoo.ca/"}]
    },
    {
      image: "/images/lahooto.png",
      projectName: "Lahooto.ca"
    },
    {
      image: "/images/apass.png",
      projectName: "Apass.ca",
      footerLink: [{name: "Visit Website", url: "https://apass.ca/"}]
    },
    {
      image: "/images/sarahzhang.png",
      projectName: "Sarahzhang.ca",
      footerLink: [{name: "Visit Website", url: "https://sarahzhang.ca/"}]
    },
    {
      image: "/images/boltzApp.png",
      projectName: "Boltz App(iOS)"
    }
  ],
  display: true
};

const contactInfo: ContactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all!",
  email_address: "andrew@andrew.ac"
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  contactInfo
};
