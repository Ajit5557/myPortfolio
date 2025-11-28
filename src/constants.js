// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import reduxLogo from './assets/tech_logo/redux.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';

import mongodbLogo from './assets/tech_logo/mongodb.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';

import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Docker logo
import linuxLogo from './assets/devops_logo/linux.png';
import dockerLogo from './assets/devops_logo/docker.png';
import ansibleLogo from './assets/devops_logo/ansible.png';
import jenkinsLogo from './assets/devops_logo/jenkins.png';
import kubernetesLogo from './assets/devops_logo/kubernetes.png';
import grafanaLogo from './assets/devops_logo/grafana.png'


// Experience Section Logo's
import officeLogo from './assets/company_logo/officelogo.png'


// Education Section Logo's

import mumbaiUniversity from './assets/education_logo/University.png'

// Project Section Logo's

import Prescripto from './assets/work_logo/Prescripto.png'
import Forever from './assets/work_logo/Forever.png'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
   
      { name: 'Redux', logo: reduxLogo },
   
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      
      { name: 'MongoDB', logo: mongodbLogo },
    
    ],
  },
  {
    title: 'DevOps Tools',
    skills: [
      { name: 'linux', logo: linuxLogo },
      { name: 'docker', logo: dockerLogo },
      { name: 'ansible', logo: ansibleLogo },
      { name: 'jenkins', logo: jenkinsLogo },
      { name: 'kubernetes', logo: kubernetesLogo },
      { name: 'grafana', logo: grafanaLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: officeLogo,
      role: "Network Security Engineer",
      company: "SK International",
      date: "4th October 2021 - 17th June 2025",
      desc: "Performed security monitoring and log analysis across Windows, Linux, and network devices using ELA and Apex Central. Managed Cisco switch configurations (VLANs, trunking, EtherChannel) and resolved port security and email quarantine issues..",
      skills: [
        "CCNA",
        "Cisco Routing & Switching",
        "TCP/IP",
        "Firewalls",
        "VLANs",
        "NAT",
        "ACL",
        
      ],
    },
    
  ];
  
  export const education = [
    {
      id: 0,
      img: mumbaiUniversity,
      school: "Mumbai University",
      date: "(06/2017 - 10/2020)",
      grade: "6.90 CGPI",
      desc: "I have completed my Bachelor of Science in Information Technology (BSIT) from Mumbai University. During my time at MU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at MU University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
  
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Doctors Appointment Booking Website",
      description:
        "Built a full-stack doctors booking platform for patients to book and manage doctor appointments. Integrated Razorpay and Paypal for secure online payments.",
      image: Prescripto,
      tags: ["React JS", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Ajit5557/MERN-Prescripto",
      webapp: "https://prescripto-frontend1-nine.vercel.app/",
    },
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "Built a full-featured eCommerce application with user authentication, product listing, cart and checkout functionality. Integrated Razorpay and Stripe payment gateways for online payments.",
      image: Forever,
      tags: ["React JS", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Ajit5557/MERN-E-Commerce",
      webapp: "https://forever-frontend-phi-murex.vercel.app/",
    },
    
  ];  